import type { Metadata } from "next";
import {
  buildAbsoluteOrRelativeUrl,
  getConfiguredSiteOrigin,
  localizedPath,
  type Locale,
} from "./config";

interface PageSeoOptions {
  locale: Locale;
  routePath: string; // e.g. "", "/services", "/projects", "/about"
  title: string;
  description: string;
}

export function buildPageMetadata({
  locale,
  routePath,
  title,
  description,
}: PageSeoOptions): Metadata {
  const origin = getConfiguredSiteOrigin();
  const enUrl = buildAbsoluteOrRelativeUrl(localizedPath("en", routePath));
  const faUrl = buildAbsoluteOrRelativeUrl(localizedPath("fa", routePath));
  const canonicalUrl = locale === "fa" ? faUrl : enUrl;

  const siteName = locale === "fa" ? "گازانووا | GAZANOVA" : "GAZANOVA";
  const ogLocale = locale === "fa" ? "fa_IR" : "en_US";
  const alternateOgLocale = locale === "fa" ? ["en_US"] : ["fa_IR"];

  return {
    ...(origin ? { metadataBase: new URL(origin) } : {}),
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: enUrl,
        fa: faUrl,
        "x-default": enUrl,
      },
    },
    openGraph: {
      type: "website",
      siteName,
      title,
      description,
      url: canonicalUrl,
      locale: ogLocale,
      alternateLocale: alternateOgLocale,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
