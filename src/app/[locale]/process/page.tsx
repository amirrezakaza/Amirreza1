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
    routePath: "/process",
    title: dict.meta.processTitle,
    description: dict.meta.processDescription,
  });
}

export default async function ProcessPage({
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
  const copy = dict.processPage;

  return (
    <div className="bg-hero-atmosphere">
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

      {/* 7 Workflow Stages */}
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <ol className="space-y-6">
          {copy.steps.map((step) => (
            <li
              key={step.stepNumber}
              className="surface-card rounded-2xl p-6 sm:p-8"
            >
              <div className="flex flex-col justify-between gap-4 border-b border-slate-800/80 pb-5 sm:flex-row sm:items-center">
                <div className="flex items-center gap-4">
                  <span className="font-mono-tech inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/40 bg-blue-600/15 text-sm font-bold text-blue-300">
                    {step.stepNumber}
                  </span>
                  <h2 className="text-xl font-bold text-white sm:text-2xl">
                    {step.title}
                  </h2>
                </div>

                <span className="rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-slate-300">
                  {step.keyOutputs}
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-slate-300 sm:text-base">
                {step.summary}
              </p>

              <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-3 text-xs sm:text-sm text-slate-300">
                {step.activities.map((activity) => (
                  <li
                    key={activity}
                    className="flex items-start gap-2 rounded-lg border border-slate-800/70 bg-[#060B16]/80 p-3"
                  >
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />
                    <span>{activity}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        {/* Project Governance: Communication, Scope, Milestones & Ownership */}
        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            {copy.governanceHeading}
          </h2>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-slate-300">
            {copy.governanceSubtitle}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {copy.governancePillars.map((pillar) => (
              <div
                key={pillar.title}
                className="surface-card rounded-2xl p-6 sm:p-7"
              >
                <h3 className="text-lg font-semibold text-blue-300">
                  {pillar.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner locale={locale} />
    </div>
  );
}
