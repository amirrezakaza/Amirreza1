import { isValidLocale, type Locale } from "@/i18n/config";
import {
  getDictionary,
  PROJECT_TYPES,
  type ProjectTypeKey,
} from "@/i18n/dictionaries";

export const ALLOWED_BUDGET_VALUES = [
  "",
  "undecided",
  "mvp-small",
  "mid-scale",
  "enterprise-longterm",
] as const;

export const ALLOWED_TIMELINE_VALUES = [
  "",
  "flexible",
  "1-2-months",
  "2-4-months",
  "4-plus-months",
] as const;

export interface RawContactSubmission {
  locale?: unknown;
  fullName?: unknown;
  email?: unknown;
  company?: unknown;
  projectType?: unknown;
  budget?: unknown;
  timeline?: unknown;
  description?: unknown;
  additionalRequirements?: unknown;
  websiteUrl?: unknown; // Honeypot field
  formStartedAt?: unknown;
}

export interface ValidatedContactSubmission {
  locale: Locale;
  fullName: string;
  email: string;
  company: string;
  projectType: ProjectTypeKey;
  budget: string;
  timeline: string;
  description: string;
  additionalRequirements: string;
  isSpamHoneypotTriggered: boolean;
}

export type ContactFieldErrorKey =
  | "fullName"
  | "email"
  | "company"
  | "projectType"
  | "budget"
  | "timeline"
  | "description"
  | "additionalRequirements";

export type ContactFieldErrors = Partial<Record<ContactFieldErrorKey, string>>;

// Practical, ReDoS-safe email format check
const EMAIL_REGEX = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?)+$/i;

/**
 * Strips dangerous ASCII control characters while preserving newlines in multi-line text when allowed.
 */
export function sanitizeText(value: unknown, allowNewlines = false): string {
  if (typeof value !== "string") return "";
  const cleaned = allowNewlines
    ? value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "")
    : value.replace(/[\u0000-\u001F\u007F]/g, " ");
  return cleaned.trim();
}

/**
 * Normalizes and sanitizes an email address, rejecting CRLF header injection characters.
 */
export function normalizeEmail(value: unknown): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\r\n\u0000-\u001F\u007F]/g, "").trim().toLowerCase();
}

/**
 * Escapes user-provided strings before embedding into HTML email templates.
 */
export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function isValidProjectType(value: string): value is ProjectTypeKey {
  return (PROJECT_TYPES as readonly string[]).includes(value);
}

export function validateContactSubmission(raw: RawContactSubmission): {
  valid: boolean;
  locale: Locale;
  errors: ContactFieldErrors;
  data?: ValidatedContactSubmission;
} {
  const locale: Locale =
    typeof raw.locale === "string" && isValidLocale(raw.locale) ? raw.locale : "en";
  const dict = getDictionary(locale).contactPage.form.errors;
  const errors: ContactFieldErrors = {};

  const fullName = sanitizeText(raw.fullName, false);
  const email = normalizeEmail(raw.email);
  const company = sanitizeText(raw.company, false);
  const projectTypeRaw = sanitizeText(raw.projectType, false);
  const budget = sanitizeText(raw.budget, false);
  const timeline = sanitizeText(raw.timeline, false);
  const description = sanitizeText(raw.description, true);
  const additionalRequirements = sanitizeText(raw.additionalRequirements, true);
  const honeypot = sanitizeText(raw.websiteUrl, false);

  // 1. Full Name
  if (!fullName) {
    errors.fullName = dict.fullNameRequired;
  } else if (fullName.length < 2 || fullName.length > 100) {
    errors.fullName = dict.fullNameLength;
  }

  // 2. Email
  if (!email) {
    errors.email = dict.emailRequired;
  } else if (email.length > 254 || !EMAIL_REGEX.test(email)) {
    errors.email = dict.emailInvalid;
  }

  // 3. Project Type
  if (!projectTypeRaw || !isValidProjectType(projectTypeRaw)) {
    errors.projectType = dict.projectTypeRequired;
  }

  // 4. Project Description
  if (!description) {
    errors.description = dict.descriptionRequired;
  } else if (description.length < 25) {
    errors.description = dict.descriptionMinLength;
  } else if (description.length > 4000) {
    errors.description = dict.descriptionMaxLength;
  }

  // 5. Optional fields bounds
  if (company.length > 120) {
    errors.company = dict.fieldTooLong;
  }
  if (!(ALLOWED_BUDGET_VALUES as readonly string[]).includes(budget)) {
    errors.budget = dict.fieldTooLong;
  }
  if (!(ALLOWED_TIMELINE_VALUES as readonly string[]).includes(timeline)) {
    errors.timeline = dict.fieldTooLong;
  }
  if (additionalRequirements.length > 2000) {
    errors.additionalRequirements = dict.fieldTooLong;
  }

  // Check timing spam heuristic if provided (automated instant post < 800ms)
  let timingBotSuspected = false;
  if (typeof raw.formStartedAt === "number" && Number.isFinite(raw.formStartedAt)) {
    const elapsedMs = Date.now() - raw.formStartedAt;
    if (elapsedMs >= 0 && elapsedMs < 800) {
      timingBotSuspected = true;
    }
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, locale, errors };
  }

  return {
    valid: true,
    locale,
    errors: {},
    data: {
      locale,
      fullName,
      email,
      company,
      projectType: projectTypeRaw as ProjectTypeKey,
      budget,
      timeline,
      description,
      additionalRequirements,
      isSpamHoneypotTriggered: honeypot.length > 0 || timingBotSuspected,
    },
  };
}
