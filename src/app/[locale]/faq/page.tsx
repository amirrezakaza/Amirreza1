import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaqAccordion } from "@/components/FaqAccordion";
import { DirectionalArrow } from "@/components/Icons";
import {
  isValidLocale,
  localizedPath,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/i18n/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const resolved: Locale = isValidLocale(locale) ? locale : "en";
  const dict = getDictionary(resolved);

  return buildPageMetadata({
    locale: resolved,
    routePath: "/faq",
    title: dict.meta.faqTitle,
    description: dict.meta.faqDescription,
  });
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isValidLocale(rawLocale)) {
    notFound();
  }

  const locale: Locale = rawLocale;
  const dict = getDictionary(locale);
  const copy = dict.faqPage;

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="bg-hero-atmosphere">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="border-b border-slate-800/80">
        <div className="mx-auto max-w-4xl px-4 pt-16 pb-14 sm:px-6 lg:px-8">
          <p className="font-mono-tech text-xs font-semibold tracking-widest text-blue-400 uppercase">
            {copy.eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-5xl">
            {copy.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {copy.subtitle}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <FaqAccordion items={copy.items} />

        <div className="mt-14 surface-card rounded-2xl p-7 sm:p-9 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-bold text-white">
              {copy.stillHaveQuestions}
            </h2>
            <p className="mt-2 text-sm text-slate-300">{copy.contactPrompt}</p>
          </div>
          <Link
            href={localizedPath(locale, "/contact")}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
          >
            <span>{dict.nav.startProject}</span>
            <DirectionalArrow className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
