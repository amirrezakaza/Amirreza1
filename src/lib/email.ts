import nodemailer from "nodemailer";
import { getDictionary } from "@/i18n/dictionaries";
import {
  escapeHtml,
  type ValidatedContactSubmission,
} from "./contact-validation";

export type EmailDeliveryResult =
  | { ok: true; messageId?: string }
  | { ok: false; reason: "not_configured" | "delivery_failed" };

function stripHeaderBreaks(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}

function isPlaceholderValue(value: string | undefined): boolean {
  if (!value) return true;
  const trimmed = value.trim();
  if (!trimmed) return true;
  const lower = trimmed.toLowerCase();
  return (
    lower.includes("example.com") ||
    lower.includes("your-secret") ||
    lower.includes("placeholder") ||
    lower.includes("your-real-business-email") ||
    lower.includes("your-verified-sender")
  );
}

function formatInquiryEmails(submission: ValidatedContactSubmission): {
  subject: string;
  text: string;
  html: string;
} {
  const enForm = getDictionary("en").contactPage.form;
  const projectTypeLabel =
    enForm.projectTypes[submission.projectType] ?? submission.projectType;

  const budgetOption =
    enForm.budgetOptions.find((b) => b.value === submission.budget)?.label ||
    (submission.budget ? submission.budget : "Not specified");

  const timelineOption =
    enForm.timelineOptions.find((t) => t.value === submission.timeline)?.label ||
    (submission.timeline ? submission.timeline : "Not specified");

  const safeNameForSubject = stripHeaderBreaks(submission.fullName).slice(0, 60);
  const subject = `[GAZANOVA Inquiry] ${projectTypeLabel} — ${safeNameForSubject}`;

  const submittedAtIso = new Date().toISOString();

  const textLines = [
    "GAZANOVA — New Project Inquiry",
    "========================================",
    `Submitted At (UTC): ${submittedAtIso}`,
    `Interface Language: ${submission.locale === "fa" ? "Persian (fa)" : "English (en)"}`,
    "",
    `Full Name: ${submission.fullName}`,
    `Email Address: ${submission.email}`,
    `Company / Organization: ${submission.company || "Not provided"}`,
    `Project Type: ${projectTypeLabel}`,
    `Estimated Budget: ${budgetOption}`,
    `Preferred Timeline: ${timelineOption}`,
    "",
    "Project Description:",
    "----------------------------------------",
    submission.description,
    "",
    ...(submission.additionalRequirements
      ? [
          "Additional Requirements:",
          "----------------------------------------",
          submission.additionalRequirements,
          "",
        ]
      : []),
    "========================================",
    "Sent securely from the GAZANOVA Project Inquiry Endpoint.",
  ];

  const text = textLines.join("\n");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${escapeHtml(subject)}</title>
</head>
<body style="margin:0;padding:24px;background-color:#070B14;color:#E2E8F0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;margin:0 auto;background-color:#0F172A;border:1px solid #1E293B;border-radius:12px;overflow:hidden;">
    <tr>
      <td style="padding:24px 28px;border-bottom:1px solid #1E293B;background-color:#090E1A;">
        <p style="margin:0;font-size:12px;letter-spacing:0.14em;text-transform:uppercase;color:#60A5FA;font-weight:600;">GAZANOVA · PROJECT INQUIRY</p>
        <h1 style="margin:8px 0 0;font-size:20px;color:#F8FAFC;font-weight:600;">${escapeHtml(projectTypeLabel)}</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:24px 28px;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;font-size:14px;">
          <tr>
            <td style="padding:8px 0;color:#94A3B8;width:180px;">Full Name</td>
            <td style="padding:8px 0;color:#F8FAFC;font-weight:600;">${escapeHtml(submission.fullName)}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#94A3B8;">Email Address</td>
            <td style="padding:8px 0;color:#60A5FA;">${escapeHtml(submission.email)}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#94A3B8;">Company / Organization</td>
            <td style="padding:8px 0;color:#E2E8F0;">${escapeHtml(submission.company || "Not provided")}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#94A3B8;">Budget Range</td>
            <td style="padding:8px 0;color:#E2E8F0;">${escapeHtml(budgetOption)}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#94A3B8;">Preferred Timeline</td>
            <td style="padding:8px 0;color:#E2E8F0;">${escapeHtml(timelineOption)}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#94A3B8;">Submitted Language</td>
            <td style="padding:8px 0;color:#E2E8F0;">${submission.locale === "fa" ? "Persian (FA)" : "English (EN)"}</td>
          </tr>
        </table>

        <div style="margin-top:20px;padding-top:20px;border-top:1px solid #1E293B;">
          <p style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#94A3B8;">Project Description</p>
          <div style="padding:16px;background-color:#090E1A;border:1px solid #1E293B;border-radius:8px;color:#F1F5F9;font-size:14px;line-height:1.65;white-space:pre-wrap;">${escapeHtml(submission.description)}</div>
        </div>

        ${
          submission.additionalRequirements
            ? `<div style="margin-top:16px;">
          <p style="margin:0 0 8px;font-size:12px;text-transform:uppercase;letter-spacing:0.08em;color:#94A3B8;">Additional Requirements</p>
          <div style="padding:16px;background-color:#090E1A;border:1px solid #1E293B;border-radius:8px;color:#F1F5F9;font-size:14px;line-height:1.65;white-space:pre-wrap;">${escapeHtml(submission.additionalRequirements)}</div>
        </div>`
            : ""
        }

        <p style="margin:20px 0 0;font-size:12px;color:#64748B;">Submitted UTC: ${escapeHtml(submittedAtIso)}</p>
      </td>
    </tr>
  </table>
</body>
</html>`;

  return { subject, text, html };
}

export async function deliverProjectInquiryEmail(
  submission: ValidatedContactSubmission
): Promise<EmailDeliveryResult> {
  const toRaw = process.env.CONTACT_EMAIL_TO;
  const fromRaw = process.env.CONTACT_EMAIL_FROM;

  if (isPlaceholderValue(toRaw) || isPlaceholderValue(fromRaw)) {
    console.warn(
      "[GAZANOVA Email] Delivery skipped: CONTACT_EMAIL_TO or CONTACT_EMAIL_FROM is not configured."
    );
    return { ok: false, reason: "not_configured" };
  }

  const toAddress = stripHeaderBreaks(toRaw!);
  const fromAddress = stripHeaderBreaks(fromRaw!);
  const replyToAddress = stripHeaderBreaks(submission.email);
  const { subject, text, html } = formatInquiryEmails(submission);

  const providerPref = (process.env.EMAIL_PROVIDER || "").trim().toLowerCase();
  const hasApiKey = !isPlaceholderValue(process.env.EMAIL_PROVIDER_API_KEY);
  const hasSmtpHost = !isPlaceholderValue(process.env.SMTP_HOST);

  // Determine active transport
  const useSmtp =
    providerPref === "smtp" || (!hasApiKey && hasSmtpHost && providerPref !== "resend");
  const useHttpApi =
    providerPref === "resend" || (hasApiKey && !useSmtp);

  if (!useSmtp && !useHttpApi) {
    console.warn(
      "[GAZANOVA Email] Delivery skipped: Neither EMAIL_PROVIDER_API_KEY nor SMTP_HOST is configured."
    );
    return { ok: false, reason: "not_configured" };
  }

  if (useHttpApi) {
    if (!hasApiKey) {
      console.warn(
        "[GAZANOVA Email] Delivery skipped: EMAIL_PROVIDER is set to resend, but EMAIL_PROVIDER_API_KEY is missing."
      );
      return { ok: false, reason: "not_configured" };
    }

    const endpoint =
      process.env.EMAIL_API_ENDPOINT?.trim() || "https://api.resend.com/emails";
    const apiKey = process.env.EMAIL_PROVIDER_API_KEY!.trim();

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: fromAddress,
          to: [toAddress],
          reply_to: replyToAddress,
          subject,
          text,
          html,
        }),
        signal: AbortSignal.timeout(10000),
      });

      if (!response.ok) {
        console.error(
          `[GAZANOVA Email] HTTP email provider returned non-OK status: ${response.status}`
        );
        return { ok: false, reason: "delivery_failed" };
      }

      const body = (await response.json().catch(() => ({}))) as { id?: string };
      return { ok: true, messageId: body.id };
    } catch (err) {
      const code = err instanceof Error ? err.name : "UnknownError";
      console.error(`[GAZANOVA Email] HTTP email request failed (${code}).`);
      return { ok: false, reason: "delivery_failed" };
    }
  }

  // SMTP Transport
  if (!hasSmtpHost) {
    console.warn(
      "[GAZANOVA Email] Delivery skipped: EMAIL_PROVIDER is set to smtp, but SMTP_HOST is missing."
    );
    return { ok: false, reason: "not_configured" };
  }

  const host = process.env.SMTP_HOST!.trim();
  const port = Number.parseInt(process.env.SMTP_PORT || "587", 10) || 587;
  const secure =
    process.env.SMTP_SECURE === "true" || port === 465;
  const smtpUser = process.env.SMTP_USER?.trim();
  const smtpPass = process.env.SMTP_PASS?.trim();

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      ...(smtpUser && smtpPass && !isPlaceholderValue(smtpPass)
        ? {
            auth: {
              user: smtpUser,
              pass: smtpPass,
            },
          }
        : {}),
      connectionTimeout: 8000,
      greetingTimeout: 8000,
      socketTimeout: 10000,
    });

    const info = await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      replyTo: replyToAddress,
      subject,
      text,
      html,
    });

    return { ok: true, messageId: info.messageId };
  } catch (err) {
    const code =
      err && typeof err === "object" && "code" in err
        ? String((err as { code?: unknown }).code)
        : err instanceof Error
          ? err.name
          : "SmtpError";
    console.error(`[GAZANOVA Email] SMTP delivery failed (${code}).`);
    return { ok: false, reason: "delivery_failed" };
  }
}
