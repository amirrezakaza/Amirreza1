import { NextResponse, type NextRequest } from "next/server";
import { isValidLocale, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import {
  validateContactSubmission,
  type RawContactSubmission,
} from "@/lib/contact-validation";
import { deliverProjectInquiryEmail } from "@/lib/email";
import {
  checkAndIncrementRateLimit,
  isDuplicateSubmission,
  recordSuccessfulSubmissionFingerprint,
} from "@/lib/rate-limit";

export const dynamic = "force-dynamic";

const MAX_PAYLOAD_BYTES = 24 * 1024; // 24 KB strict upper bound

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const realIp = request.headers.get("x-real-ip")?.trim();
  if (realIp) return realIp;
  return "anonymous-client";
}

function methodNotAllowed() {
  return NextResponse.json(
    { ok: false, error: "Method Not Allowed" },
    { status: 405, headers: { Allow: "POST" } }
  );
}

export async function GET() {
  return methodNotAllowed();
}

export async function PUT() {
  return methodNotAllowed();
}

export async function DELETE() {
  return methodNotAllowed();
}

export async function POST(request: NextRequest) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return NextResponse.json(
        { ok: false, errorCode: "invalid_content_type", message: "Expected JSON payload." },
        { status: 415 }
      );
    }

    const contentLengthHeader = request.headers.get("content-length");
    if (contentLengthHeader) {
      const contentLength = Number.parseInt(contentLengthHeader, 10);
      if (Number.isFinite(contentLength) && contentLength > MAX_PAYLOAD_BYTES) {
        return NextResponse.json(
          { ok: false, errorCode: "payload_too_large", message: "Request payload is too large." },
          { status: 413 }
        );
      }
    }

    const rawText = await request.text();
    if (Buffer.byteLength(rawText, "utf8") > MAX_PAYLOAD_BYTES) {
      return NextResponse.json(
        { ok: false, errorCode: "payload_too_large", message: "Request payload is too large." },
        { status: 413 }
      );
    }

    let parsed: RawContactSubmission;
    try {
      parsed = JSON.parse(rawText) as RawContactSubmission;
    } catch {
      return NextResponse.json(
        { ok: false, errorCode: "invalid_json", message: "Malformed JSON request body." },
        { status: 400 }
      );
    }

    const locale: Locale =
      typeof parsed?.locale === "string" && isValidLocale(parsed.locale)
        ? parsed.locale
        : "en";
    const formErrorsDict = getDictionary(locale).contactPage.form.errors;

    // 1. Check rate limit per client IP
    const clientIp = getClientIp(request);
    const rateCheck = await checkAndIncrementRateLimit(clientIp);
    if (!rateCheck.allowed) {
      return NextResponse.json(
        {
          ok: false,
          errorCode: "rate_limited",
          message: formErrorsDict.rateLimited,
        },
        {
          status: 429,
          headers: {
            "Retry-After": String(rateCheck.retryAfterSeconds ?? 120),
          },
        }
      );
    }

    // 2. Validate & sanitize submission
    const validation = validateContactSubmission(parsed);
    if (!validation.valid || !validation.data) {
      return NextResponse.json(
        {
          ok: false,
          errorCode: "validation_failed",
          message: formErrorsDict.validationFailed,
          fieldErrors: validation.errors,
        },
        { status: 400 }
      );
    }

    const submission = validation.data;

    // 3. Silent trap for automated spam bots (honeypot filled or instant script post)
    if (submission.isSpamHoneypotTriggered) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // 4. Duplicate submission check (within 15-minute window)
    const fingerprint = `${submission.email}|${submission.projectType}|${submission.description.toLowerCase()}`;
    const duplicate = await isDuplicateSubmission(fingerprint);
    if (duplicate) {
      return NextResponse.json(
        {
          ok: false,
          errorCode: "duplicate_submission",
          message: formErrorsDict.duplicateSubmission,
        },
        { status: 409 }
      );
    }

    // 5. Deliver to configured business email via server-side transport
    const delivery = await deliverProjectInquiryEmail(submission);
    if (!delivery.ok) {
      return NextResponse.json(
        {
          ok: false,
          errorCode: delivery.reason,
          message: formErrorsDict.providerUnavailable,
        },
        { status: 503 }
      );
    }

    // 6. Record idempotency hash only after confirmed delivery
    await recordSuccessfulSubmissionFingerprint(fingerprint);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    const code = err instanceof Error ? err.name : "UnexpectedError";
    console.error(`[GAZANOVA Contact API] Unhandled error (${code}).`);
    return NextResponse.json(
      {
        ok: false,
        errorCode: "internal_error",
        message: "An unexpected server error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
