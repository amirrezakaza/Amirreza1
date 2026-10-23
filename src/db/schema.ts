import { integer, pgTable, timestamp, varchar } from "drizzle-orm/pg-core";

/**
 * Ephemeral, zero-PII rate-limiting buckets for the contact endpoint.
 * Stores only salted SHA-256 hashes of client identifiers and window counters.
 * No personal data or inquiry content is persisted.
 */
export const contactRateLimits = pgTable("contact_rate_limits", {
  clientHash: varchar("client_hash", { length: 64 }).primaryKey(),
  requestCount: integer("request_count").notNull().default(1),
  windowStart: timestamp("window_start", { withTimezone: true }).notNull().defaultNow(),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
});

/**
 * Ephemeral, zero-PII idempotency hashes to prevent accidental duplicate form submissions.
 * Entries expire automatically within a short window (15 minutes).
 */
export const contactIdempotencyKeys = pgTable("contact_idempotency_keys", {
  payloadHash: varchar("payload_hash", { length: 64 }).primaryKey(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  expiresAt: timestamp("expires_at", { withTimezone: true }).notNull(),
});
