import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/CtaBanner";
import { CheckIcon, DirectionalArrow, ServiceIcon } from "@/components/Icons";
import { SERVICES_DATA } from "@/data/services";
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
    routePath: "/services",
    title: dict.meta.servicesTitle,
    description: dict.meta.servicesDescription,
  });
}

export default async function ServicesPage({
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
      {/* Header */}
      <section className="border-b border-slate-800/80">
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-14 sm:px-6 lg:px-8">
          <p className="font-mono-tech text-xs font-semibold tracking-widest text-blue-400 uppercase">
            {dict.servicesPage.eyebrow}
          </p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold text-white sm:text-5xl">
            {dict.servicesPage.title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {dict.servicesPage.subtitle}
          </p>
          <p className="mt-5 max-w-3xl rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-xs leading-relaxed text-slate-400">
            {dict.servicesPage.capabilityNote}
          </p>

          {/* Quick Jump Index */}
          <nav
            aria-label={dict.servicesPage.quickJumpLabel}
            className="mt-8 flex flex-wrap gap-2"
          >
            {SERVICES_DATA.map((service) => (
              <a
                key={service.slug}
                href={`#${service.slug}`}
                className="rounded-lg border border-slate-800 bg-slate-950/80 px-3 py-1.5 text-xs font-medium text-slate-300 transition hover:border-blue-500/50 hover:text-white"
              >
                <span className="font-mono-tech me-1.5 text-blue-400">
                  {service.number}
                </span>
                {service.content[locale].title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Detailed 10 Service Sections */}
      <section className="mx-auto max-w-7xl space-y-10 px-4 py-16 sm:px-6 lg:px-8">
        {SERVICES_DATA.map((service) => {
          const item = service.content[locale];
          return (
            <article
              key={service.slug}
              id={service.slug}
              className="surface-card scroll-mt-24 rounded-2xl p-6 sm:p-8 lg:p-10"
            >
              <div className="flex flex-col justify-between gap-6 border-b border-slate-800/80 pb-6 lg:flex-row lg:items-center">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/40 bg-blue-600/15 text-blue-400">
                    <ServiceIcon icon={service.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <span className="font-mono-tech text-xs font-semibold text-blue-400">
                      SERVICE // {service.number}
                    </span>
                    <h2 className="mt-1 text-2xl font-bold text-white sm:text-3xl">
                      {item.title}
                    </h2>
                  </div>
                </div>

                <Link
                  href={`${localizedPath(locale, "/contact")}?type=${service.inquiryType}`}
                  className="inline-flex shrink-0 items-center gap-2 self-start rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500 lg:self-auto"
                >
                  <span>{dict.servicesPage.requestEstimate}</span>
                  <DirectionalArrow className="h-4 w-4" />
                </Link>
              </div>

              <p className="mt-6 max-w-4xl text-base leading-relaxed text-slate-300">
                {item.overview}
              </p>

              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                {/* 1. What It Includes */}
                <div className="rounded-xl border border-slate-800/80 bg-[#060B16]/85 p-5">
                  <h3 className="text-sm font-semibold text-blue-300">
                    {dict.servicesPage.includesHeading}
                  </h3>
                  <ul className="mt-3.5 space-y-2.5 text-sm text-slate-300">
                    {item.includes.map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-blue-400" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 2. Problems Solved */}
                <div className="rounded-xl border border-slate-800/80 bg-[#060B16]/85 p-5">
                  <h3 className="text-sm font-semibold text-blue-300">
                    {dict.servicesPage.problemsHeading}
                  </h3>
                  <ul className="mt-3.5 space-y-2.5 text-sm text-slate-300">
                    {item.problemsSolved.map((problem) => (
                      <li key={problem} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400"
                        />
                        <span>{problem}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 3. Suitable For */}
                <div className="rounded-xl border border-slate-800/80 bg-[#060B16]/85 p-5">
                  <h3 className="text-sm font-semibold text-blue-300">
                    {dict.servicesPage.suitableHeading}
                  </h3>
                  <ul className="mt-3.5 space-y-2.5 text-sm text-slate-300">
                    {item.suitableFor.map((target) => (
                      <li key={target} className="flex items-start gap-2.5">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-400"
                        />
                        <span>{target}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 4. Expected Deliverables */}
                <div className="rounded-xl border border-slate-800/80 bg-[#060B16]/85 p-5">
                  <h3 className="text-sm font-semibold text-blue-300">
                    {dict.servicesPage.deliverablesHeading}
                  </h3>
                  <ul className="mt-3.5 space-y-2.5 text-sm text-slate-300">
                    {item.deliverables.map((deliv) => (
                      <li key={deliv} className="flex items-start gap-2.5">
                        <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
                        <span>{deliv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      <CtaBanner locale={locale} />
    </div>
  );
}
