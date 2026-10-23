import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/CtaBanner";
import { PortfolioGrid } from "@/components/PortfolioGrid";
import { isValidLocale, type Locale } from "@/i18n/config";
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
    routePath: "/projects",
    title: dict.meta.projectsTitle,
    description: dict.meta.projectsDescription,
  });
}

export default async function ProjectsPage({
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

  return (
    <div className="bg-hero-atmosphere">
      <section className="border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-14 sm:px-6 lg:px-8">
          <p className="font-mono-tech text-xs font-semibold tracking-widest text-blue-400 uppercase">
            {dict.projectsPage.eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold text-white sm:text-5xl">
            {dict.projectsPage.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {dict.projectsPage.subtitle}
          </p>

          {/* Honest Demonstration Disclosure Banner */}
          <div className="mt-8 rounded-xl border border-amber-500/30 bg-amber-950/20 p-5">
            <h2 className="text-sm font-semibold text-amber-200">
              {dict.projectsPage.transparencyBannerTitle}
            </h2>
            <p className="mt-1.5 text-xs leading-relaxed text-amber-100/85 sm:text-sm">
              {dict.projectsPage.transparencyBannerBody}
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <PortfolioGrid locale={locale} />
      </section>

      <CtaBanner locale={locale} />
    </div>
  );
}
