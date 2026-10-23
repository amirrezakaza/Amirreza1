export const SUPPORTED_LOCALES = ["en", "fa"] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE_NAME = "gazanova_locale";
export const LOCALE_HEADER_NAME = "x-gazanova-locale";

export function isValidLocale(value: string | undefined | null): value is Locale {
  return value === "en" || value === "fa";
}

export function getDirection(locale: Locale): "ltr" | "rtl" {
  return locale === "fa" ? "rtl" : "ltr";
}

export function localizedPath(locale: Locale, subPath = ""): string {
  const clean = subPath.startsWith("/") ? subPath : subPath ? `/${subPath}` : "";
  if (clean === "/") {
    return `/${locale}`;
  }
  return `/${locale}${clean}`;
}

/**
 * Returns the configured production site URL if explicitly set and not the example placeholder.
 * Never invents a fake production domain.
 */
export function getConfiguredSiteOrigin(): string | null {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw || raw.includes("your-production-domain.example")) {
    return null;
  }
  try {
    const parsed = new URL(raw);
    return parsed.origin;
  } catch {
    return null;
  }
}

export function buildAbsoluteOrRelativeUrl(path: string): string {
  const origin = getConfiguredSiteOrigin();
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return origin ? `${origin}${normalizedPath}` : normalizedPath;
}
