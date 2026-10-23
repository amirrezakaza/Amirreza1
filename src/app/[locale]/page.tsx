import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/CtaBanner";
import { HeroArchitectureVisual } from "@/components/HeroArchitectureVisual";
import { DirectionalArrow, ServiceIcon } from "@/components/Icons";
import { ProjectBlueprintDiagram } from "@/components/ProjectBlueprintDiagram";
import { PROJECTS_DATA } from "@/data/projects";
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
    routePath: "",
    title: dict.meta.homeTitle,
    description: dict.meta.homeDescription,
  });
}

export default async function HomePage({
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
  const featuredServices = SERVICES_DATA.filter((s) => s.featuredOnHome);
  const featuredProjects = PROJECTS_DATA.filter((p) => p.featuredOnHome);

  return (
    <div className="bg-hero-atmosphere">
      {/* 1. HERO SECTION */}
      <section className="relative border-b border-slate-800/70">
        <div
          aria-hidden="true"
          className="bg-architectural-grid pointer-events-none absolute inset-0 opacity-65"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-16 pb-20 sm:px-6 sm:pt-20 sm:pb-24 lg:px-8 lg:pt-24 lg:pb-28">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <p className="font-mono-tech inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-950/35 px-3.5 py-1.5 text-xs font-semibold tracking-wider text-blue-300">
                <span
                  aria-hidden="true"
                  className="h-1.5 w-1.5 rounded-full bg-blue-400"
                />
                <span>{dict.hero.eyebrow}</span>
              </p>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                <span className="block text-white">{dict.hero.slogan}</span>
                <span className="mt-3 block text-2xl font-semibold text-slate-200 sm:text-3xl lg:text-[2rem]">
                  {dict.hero.headline}
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                {dict.hero.supporting}
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  href={localizedPath(locale, "/contact")}
                  className="inline-flex items-center gap-2.5 rounded-lg bg-blue-600 px-6 py-3.5 text-base font-semibold text-white shadow-[0_12px_32px_-8px_rgba(37,99,235,0.75)] transition hover:bg-blue-500"
                >
                  <span>{dict.hero.primaryCta}</span>
                  <DirectionalArrow className="h-4 w-4" />
                </Link>

                <Link
                  href={localizedPath(locale, "/projects")}
                  className="inline-flex items-center gap-2 rounded-lg border border-slate-700/90 bg-slate-900/75 px-6 py-3.5 text-base font-semibold text-slate-100 transition hover:border-blue-500/50 hover:bg-slate-900"
                >
                  <span>{dict.hero.secondaryCta}</span>
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-1 gap-4 border-t border-slate-800/80 pt-8 sm:grid-cols-3">
                {dict.hero.pillars.map((pillar) => (
                  <div key={pillar.label} className="text-start">
                    <p className="text-sm font-semibold text-white">
                      {pillar.label}
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-400">
                      {pillar.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-5">
              <HeroArchitectureVisual locale={locale} />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SERVICES OVERVIEW */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="font-mono-tech text-xs font-semibold tracking-widest text-blue-400 uppercase">
              {dict.homeServices.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              {dict.homeServices.title}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-300">
              {dict.homeServices.subtitle}
            </p>
          </div>

          <Link
            href={localizedPath(locale, "/services")}
            className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-4 py-2.5 text-sm font-semibold text-blue-300 transition hover:border-blue-500/50 hover:text-white"
          >
            <span>{dict.homeServices.viewAllServices}</span>
            <DirectionalArrow className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => {
            const copy = service.content[locale];
            return (
              <article
                key={service.slug}
                className="surface-card surface-card-interactive flex flex-col justify-between rounded-2xl p-6 sm:p-7"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-blue-500/35 bg-blue-600/15 text-blue-400">
                      <ServiceIcon icon={service.icon} className="h-5 w-5" />
                    </span>
                    <span className="font-mono-tech text-xs text-slate-500">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-semibold text-white">
                    <Link
                      href={`${localizedPath(locale, "/services")}#${service.slug}`}
                      className="hover:text-blue-300 transition-colors"
                    >
                      {copy.title}
                    </Link>
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {copy.shortSummary}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-slate-800/80 pt-4 text-xs font-semibold">
                  <Link
                    href={`${localizedPath(locale, "/services")}#${service.slug}`}
                    className="text-slate-300 hover:text-white"
                  >
                    {dict.projectsPage.viewDetails}
                  </Link>
                  <Link
                    href={`${localizedPath(locale, "/contact")}?type=${service.inquiryType}`}
                    className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300"
                  >
                    <span>{dict.homeServices.inquireService}</span>
                    <DirectionalArrow className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 3. SELECTED PORTFOLIO ARCHITECTURES */}
      <section className="border-y border-slate-800/75 bg-[#070B16]/85">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="font-mono-tech text-xs font-semibold tracking-widest text-blue-400 uppercase">
                {dict.homeProjects.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                {dict.homeProjects.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                {dict.homeProjects.subtitle}
              </p>
            </div>

            <Link
              href={localizedPath(locale, "/projects")}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-4 py-2.5 text-sm font-semibold text-blue-300 transition hover:border-blue-500/50 hover:text-white"
            >
              <span>{dict.homeProjects.viewAllProjects}</span>
              <DirectionalArrow className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-6 rounded-xl border border-amber-500/25 bg-amber-950/20 px-4 py-3 text-xs leading-relaxed text-amber-200/90">
            {dict.homeProjects.demoDisclosure}
          </p>

          <div className="mt-10 grid grid-cols-1 gap-7 lg:grid-cols-3">
            {featuredProjects.map((project) => {
              const item = project.content[locale];
              return (
                <article
                  key={project.slug}
                  className="surface-card surface-card-interactive flex flex-col justify-between rounded-2xl p-6"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-semibold text-blue-400">
                        {item.categoryName}
                      </span>
                      <span className="rounded border border-amber-500/35 bg-amber-500/10 px-2 py-0.5 text-[11px] font-medium text-amber-200">
                        {dict.projectsPage.demoBadge}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-white">
                      <Link
                        href={localizedPath(locale, `/projects/${project.slug}`)}
                        className="hover:text-blue-300 transition-colors"
                      >
                        {item.title}
                      </Link>
                    </h3>

                    <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                      {item.shortDescription}
                    </p>

                    <div className="mt-5">
                      <ProjectBlueprintDiagram
                        variant={project.visualVariant}
                        nodes={item.diagramNodes}
                        alt={item.diagramAlt}
                        compact
                      />
                    </div>
                  </div>

                  <div className="mt-6 border-t border-slate-800/80 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          dir="ltr"
                          className="font-mono-tech rounded border border-slate-800 bg-slate-950 px-2 py-0.5 text-[11px] text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={localizedPath(locale, `/projects/${project.slug}`)}
                      className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-400 hover:text-blue-300"
                    >
                      <span>{dict.homeProjects.readCaseView}</span>
                      <DirectionalArrow className="h-4 w-4" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. WHY CLIENTS CHOOSE GAZANOVA */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-mono-tech text-xs font-semibold tracking-widest text-blue-400 uppercase">
            {dict.whyGazanova.eyebrow}
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            {dict.whyGazanova.title}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-slate-300">
            {dict.whyGazanova.subtitle}
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {dict.whyGazanova.items.map((reason, idx) => (
            <div
              key={reason.title}
              className="surface-card rounded-2xl p-6 sm:p-7"
            >
              <span className="font-mono-tech inline-flex rounded-md border border-blue-500/30 bg-blue-950/35 px-2.5 py-1 text-xs font-semibold text-blue-400">
                0{idx + 1}
              </span>
              <h3 className="mt-4 text-lg font-semibold text-white">
                {reason.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. TRANSPARENT DEVELOPMENT PROCESS SNAPSHOT */}
      <section className="border-t border-slate-800/75 bg-[#070B16]/70">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="font-mono-tech text-xs font-semibold tracking-widest text-blue-400 uppercase">
                {dict.homeProcess.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                {dict.homeProcess.title}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-slate-300">
                {dict.homeProcess.subtitle}
              </p>
            </div>

            <Link
              href={localizedPath(locale, "/process")}
              className="inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-4 py-2.5 text-sm font-semibold text-blue-300 transition hover:border-blue-500/50 hover:text-white"
            >
              <span>{dict.homeProcess.exploreFullProcess}</span>
              <DirectionalArrow className="h-4 w-4" />
            </Link>
          </div>

          <ol className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dict.processPage.steps.map((step) => (
              <li
                key={step.stepNumber}
                className="surface-card rounded-xl p-5"
              >
                <span className="font-mono-tech text-xs font-semibold text-blue-400">
                  {step.stepNumber}
                </span>
                <h3 className="mt-2 text-base font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {step.summary}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 6. CONTACT CONVERSION CTA */}
      <CtaBanner locale={locale} />
    </div>
  );
}
