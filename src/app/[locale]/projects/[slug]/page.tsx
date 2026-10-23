import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/CtaBanner";
import { CheckIcon, DirectionalArrow } from "@/components/Icons";
import { ProjectBlueprintDiagram } from "@/components/ProjectBlueprintDiagram";
import { getProjectBySlug, PROJECTS_DATA } from "@/data/projects";
import {
  isValidLocale,
  localizedPath,
  SUPPORTED_LOCALES,
  type Locale,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { buildPageMetadata } from "@/i18n/seo";

export function generateStaticParams() {
  return SUPPORTED_LOCALES.flatMap((locale) =>
    PROJECTS_DATA.map((project) => ({
      locale,
      slug: project.slug,
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const resolved: Locale = isValidLocale(locale) ? locale : "en";
  const project = getProjectBySlug(slug);

  if (!project) {
    return {};
  }

  const copy = project.content[resolved];
  return buildPageMetadata({
    locale: resolved,
    routePath: `/projects/${project.slug}`,
    title: `${copy.title} | GAZANOVA`,
    description: copy.shortDescription,
  });
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  if (!isValidLocale(rawLocale)) {
    notFound();
  }

  const locale: Locale = rawLocale;
  const project = getProjectBySlug(slug);
  if (!project) {
    notFound();
  }

  const dict = getDictionary(locale);
  const copy = project.content[locale];

  return (
    <div className="bg-hero-atmosphere">
      <section className="border-b border-slate-800/80">
        <div className="mx-auto max-w-5xl px-4 pt-12 pb-14 sm:px-6 lg:px-8">
          {/* Accessible Breadcrumb */}
          <nav
            aria-label={dict.a11y.breadcrumb}
            className="flex flex-wrap items-center gap-2 text-xs text-slate-400"
          >
            <Link
              href={localizedPath(locale, "")}
              className="hover:text-white transition-colors"
            >
              {dict.nav.home}
            </Link>
            <span aria-hidden="true">/</span>
            <Link
              href={localizedPath(locale, "/projects")}
              className="hover:text-white transition-colors"
            >
              {dict.nav.projects}
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-slate-200">{copy.title}</span>
          </nav>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <span className="rounded-md border border-blue-500/35 bg-blue-600/15 px-3 py-1 text-xs font-semibold text-blue-300">
              {copy.categoryName}
            </span>
            <span className="rounded-md border border-amber-500/35 bg-amber-500/10 px-3 py-1 text-xs font-medium text-amber-200">
              {copy.statusText}
            </span>
          </div>

          <h1 className="mt-5 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            {copy.title}
          </h1>

          <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
            {copy.overview}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={`${localizedPath(locale, "/contact")}?type=${project.inquiryType}`}
              className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              <span>{dict.projectsPage.startSimilarProject}</span>
              <DirectionalArrow className="h-4 w-4" />
            </Link>

            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-200 hover:border-blue-500/50 hover:text-white"
              >
                Live Demo
              </a>
            ) : null}

            {project.sourceUrl ? (
              <a
                href={project.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-lg border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-slate-200 hover:border-blue-500/50 hover:text-white"
              >
                Source Code
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl space-y-10 px-4 py-16 sm:px-6 lg:px-8">
        {/* Visual System Blueprint */}
        <ProjectBlueprintDiagram
          variant={project.visualVariant}
          nodes={copy.diagramNodes}
          alt={copy.diagramAlt}
        />

        {/* Problem & Solution Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="surface-card rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-bold text-white">
              {dict.projectsPage.problemHeading}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              {copy.problemSolved}
            </p>
          </div>

          <div className="surface-card rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-bold text-white">
              {dict.projectsPage.solutionHeading}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
              {copy.implementedSolution}
            </p>
          </div>
        </div>

        {/* Architecture & Features */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="surface-card rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-bold text-white">
              {dict.projectsPage.architectureHeading}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {copy.architectureHighlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2.5">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-blue-400" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="surface-card rounded-2xl p-6 sm:p-8">
            <h2 className="text-lg font-bold text-white">
              {dict.projectsPage.featuresHeading}
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-300">
              {copy.keyFeatures.map((feature) => (
                <li key={feature} className="flex items-start gap-2.5">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-emerald-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <h3 className="mt-7 text-xs font-semibold tracking-wider text-slate-400 uppercase">
              {dict.projectsPage.techStackLabel}
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  dir="ltr"
                  className="font-mono-tech rounded-md border border-slate-800 bg-slate-950 px-3 py-1 text-xs text-slate-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div>
          <Link
            href={localizedPath(locale, "/projects")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white"
          >
            <span className="rtl:rotate-180" aria-hidden="true">
              ←
            </span>
            <span>{dict.projectsPage.backToProjects}</span>
          </Link>
        </div>
      </section>

      <CtaBanner locale={locale} />
    </div>
  );
}
