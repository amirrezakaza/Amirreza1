import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/CtaBanner";
import { CheckIcon } from "@/components/Icons";
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
    routePath: "/about",
    title: dict.meta.aboutTitle,
    description: dict.meta.aboutDescription,
  });
}

export default async function AboutPage({
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
  const copy = dict.aboutPage;

  return (
    <div className="bg-hero-atmosphere">
      {/* Header */}
      <section className="border-b border-slate-800/80">
        <div className="mx-auto max-w-5xl px-4 pt-16 pb-14 sm:px-6 lg:px-8">
          <p className="font-mono-tech text-xs font-semibold tracking-widest text-blue-400 uppercase">
            {copy.eyebrow}
          </p>
          <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-5xl">
            {copy.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {copy.subtitle}
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="surface-card rounded-2xl p-7 sm:p-8">
            <span className="font-mono-tech text-xs font-semibold text-blue-400">
              01 // MISSION
            </span>
            <h2 className="mt-3 text-2xl font-bold text-white">
              {copy.missionHeading}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              {copy.missionBody}
            </p>
          </div>

          <div className="surface-card rounded-2xl p-7 sm:p-8">
            <span className="font-mono-tech text-xs font-semibold text-blue-400">
              02 // VISION
            </span>
            <h2 className="mt-3 text-2xl font-bold text-white">
              {copy.visionHeading}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              {copy.visionBody}
            </p>
          </div>
        </div>

        {/* Approach to Software Engineering */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {copy.engineeringHeading}
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-300">
            {copy.engineeringIntro}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {copy.engineeringPrinciples.map((principle, idx) => (
              <div
                key={principle.title}
                className="surface-card rounded-2xl p-6 sm:p-7"
              >
                <span className="font-mono-tech text-xs font-semibold text-blue-400">
                  STD // 0{idx + 1}
                </span>
                <h3 className="mt-2.5 text-lg font-semibold text-white">
                  {principle.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {copy.valuesHeading}
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {copy.values.map((val) => (
              <div
                key={val.title}
                className="rounded-xl border border-slate-800/85 bg-[#070C18] p-6"
              >
                <h3 className="text-base font-semibold text-blue-300">
                  {val.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {val.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Collaboration Philosophy */}
        <div className="mt-16 surface-card rounded-2xl p-7 sm:p-10">
          <h2 className="text-2xl font-bold text-white">
            {copy.collaborationHeading}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-300">
            {copy.collaborationBody}
          </p>

          <ul className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2 text-sm text-slate-200">
            {copy.collaborationPoints.map((point) => (
              <li key={point} className="flex items-start gap-2.5">
                <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-blue-400" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner locale={locale} />
    </div>
  );
}
