import type { Metadata } from "next";
import { headers } from "next/headers";
import {
  JetBrains_Mono,
  Plus_Jakarta_Sans,
  Vazirmatn,
} from "next/font/google";
import type { ReactNode } from "react";
import { LocaleDocumentSync } from "@/components/LocaleDocumentSync";
import {
  DEFAULT_LOCALE,
  getConfiguredSiteOrigin,
  getDirection,
  isValidLocale,
  LOCALE_HEADER_NAME,
  type Locale,
} from "@/i18n/config";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GAZANOVA — Build the Next Generation",
    template: "%s",
  },
  description:
    "From ambitious ideas to production-ready software, GAZANOVA transforms complex challenges into elegant digital experiences.",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const headerStore = await headers();
  const rawLocale = headerStore.get(LOCALE_HEADER_NAME);
  const locale: Locale = isValidLocale(rawLocale) ? rawLocale : DEFAULT_LOCALE;
  const dir = getDirection(locale);
  const siteOrigin = getConfiguredSiteOrigin();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "GAZANOVA",
    slogan: "Build the Next Generation.",
    description:
      "Software engineering and digital product development studio turning ideas into reliable digital products.",
    knowsLanguage: ["en", "fa"],
    ...(siteOrigin ? { url: siteOrigin } : {}),
  };

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${plusJakarta.variable} ${vazirmatn.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-[#050811] text-slate-100 antialiased selection:bg-blue-600/35 selection:text-white">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <LocaleDocumentSync initialLocale={locale} />
        {children}
      </body>
    </html>
  );
}
