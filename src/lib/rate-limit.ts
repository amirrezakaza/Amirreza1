import { createHash } from "node:crypto";
import { db } from "@/db";
import { contactIdempotencyKeys, contactRateLimits } from "@/db/schema";
import { eq, lt } from "drizzle-orm";

const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS_PER_WINDOW = 5;
const DEDUP_WINDOW_MS = 15 * 60 * 1000; // 15 minutes

// Bounded in-memory fallback stores so protection works even if DB tables aren't migrated yet
const memoryRateMap = new Map<string, { count: number; expiresAt: number }>();
const memoryDedupMap = new Map<string, number>();

function getSalt(): string {
  return process.env.RATE_LIMIT_SALT?.trim() || "gazanova-default-ephemeral-salt-v1";
}

export function hashIdentifier(raw: string): string {
  return createHash("sha256")
    .update(`${getSalt()}:${raw}`)
    .digest("hex");
}

function pruneMemoryStores(now: number) {
  if (memoryRateMap.size > 1000) {
    for (const [k, v] of memoryRateMap) {
      if (v.expiresAt <= now) memoryRateMap.delete(k);
    }
  }
  if (memoryDedupMap.size > 1000) {
    for (const [k, exp] of memoryDedupMap) {
      if (exp <= now) memoryDedupMap.delete(k);
    }
  }
}

export async function checkAndIncrementRateLimit(clientKey: string): Promise<{
  allowed: boolean;
  retryAfterSeconds?: number;
}> {
  const now = Date.now();
  const clientHash = hashIdentifier(`rate:${clientKey}`);

  try {
    // Opportunistic cleanup of expired buckets
    await db
      .delete(contactRateLimits)
      .where(lt(contactRateLimits.expiresAt, new Date(now)));

    const existing = await db
      .select()
      .from(contactRateLimits)
      .where(eq(contactRateLimits.clientHash, clientHash))
      .limit(1);

    if (existing.length === 0) {
      await db.insert(contactRateLimits).values({
        clientHash,
        requestCount: 1,
        windowStart: new Date(now),
        expiresAt: new Date(now + RATE_WINDOW_MS),
      });
      return { allowed: true };
    }

    const bucket = existing[0];
    if (bucket.requestCount >= MAX_REQUESTS_PER_WINDOW) {
      const retryAfterSeconds = Math.max(
        1,
        Math.ceil((bucket.expiresAt.getTime() - now) / 1000)
      );
      return { allowed: false, retryAfterSeconds };
    }

    await db
      .update(contactRateLimits)
      .set({ requestCount: bucket.requestCount + 1 })
      .where(eq(contactRateLimits.clientHash, clientHash));

    return { allowed: true };
  } catch {
    // Graceful fallback to in-memory rate limiter
    pruneMemoryStores(now);
    const entry = memoryRateMap.get(clientHash);
    if (!entry || entry.expiresAt <= now) {
      memoryRateMap.set(clientHash, {
        count: 1,
        expiresAt: now + RATE_WINDOW_MS,
      });
      return { allowed: true };
    }
    if (entry.count >= MAX_REQUESTS_PER_WINDOW) {
      return {
        allowed: false,
        retryAfterSeconds: Math.max(1, Math.ceil((entry.expiresAt - now) / 1000)),
      };
    }
    entry.count += 1;
    return { allowed: true };
  }
}

export async function isDuplicateSubmission(fingerprintRaw: string): Promise<boolean> {
  const now = Date.now();
  const payloadHash = hashIdentifier(`dedup:${fingerprintRaw}`);

  try {
    await db
      .delete(contactIdempotencyKeys)
      .where(lt(contactIdempotencyKeys.expiresAt, new Date(now)));

    const existing = await db
      .select()
      .from(contactIdempotencyKeys)
      .where(eq(contactIdempotencyKeys.payloadHash, payloadHash))
      .limit(1);

    if (existing.length > 0) {
      return true;
    }
  } catch {
    pruneMemoryStores(now);
  }

  const memExp = memoryDedupMap.get(payloadHash);
  return typeof memExp === "number" && memExp > now;
}

export async function recordSuccessfulSubmissionFingerprint(
  fingerprintRaw: string
): Promise<void> {
  const now = Date.now();
  const payloadHash = hashIdentifier(`dedup:${fingerprintRaw}`);
  const expiresAt = now + DEDUP_WINDOW_MS;

  memoryDedupMap.set(payloadHash, expiresAt);

  try {
    await db
      .insert(contactIdempotencyKeys)
      .values({
        payloadHash,
        createdAt: new Date(now),
        expiresAt: new Date(expiresAt),
      })
      .onConflictDoNothing();
  } catch {
    // Memory fallback already recorded above
  }
}
