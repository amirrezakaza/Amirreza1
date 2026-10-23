"use client";

import Link from "next/link";
import { useState } from "react";
import {
  PROJECT_CATEGORIES,
  PROJECTS_DATA,
  type ProjectCategoryKey,
} from "@/data/projects";
import { localizedPath, type Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/dictionaries";
import { DirectionalArrow } from "./Icons";
import { ProjectBlueprintDiagram } from "./ProjectBlueprintDiagram";

export function PortfolioGrid({ locale }: { locale: Locale }) {
  const dict = getDictionary(locale);
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | ProjectCategoryKey
  >("all");

  const filteredProjects =
    selectedCategory === "all"
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <div>
      {/* Accessible Category Filter */}
      <div
        role="group"
        aria-label={dict.projectsPage.eyebrow}
        className="mb-10 flex flex-wrap items-center gap-2"
      >
        <button
          type="button"
          aria-pressed={selectedCategory === "all"}
          onClick={() => setSelectedCategory("all")}
          className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
            selectedCategory === "all"
              ? "border border-blue-500/60 bg-blue-600/20 text-white"
              : "border border-slate-800 bg-slate-950/70 text-slate-300 hover:border-slate-700 hover:text-white"
          }`}
        >
          {dict.projectsPage.filterAll}
        </button>

        {PROJECT_CATEGORIES.map((cat) => {
          const active = selectedCategory === cat.key;
          return (
            <button
              key={cat.key}
              type="button"
              aria-pressed={active}
              onClick={() => setSelectedCategory(cat.key)}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
                active
                  ? "border border-blue-500/60 bg-blue-600/20 text-white"
                  : "border border-slate-800 bg-slate-950/70 text-slate-300 hover:border-slate-700 hover:text-white"
              }`}
            >
              {cat.label[locale]}
            </button>
          );
        })}
      </div>

      {/* Responsive Project Cards Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {filteredProjects.map((project) => {
          const item = project.content[locale];
          return (
            <article
              key={project.slug}
              className="surface-card surface-card-interactive flex flex-col justify-between rounded-2xl p-6 sm:p-7"
            >
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-blue-400">
                    {item.categoryName}
                  </span>
                  <span className="inline-flex items-center rounded-md border border-amber-500/35 bg-amber-500/10 px-2.5 py-1 text-[11px] font-medium text-amber-200">
                    {dict.projectsPage.demoBadge}
                  </span>
                </div>

                <h2 className="mt-4 text-xl font-semibold text-slate-50 sm:text-2xl">
                  <Link
                    href={localizedPath(locale, `/projects/${project.slug}`)}
                    className="hover:text-blue-300 transition-colors"
                  >
                    {item.title}
                  </Link>
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-slate-300">
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

              <div className="mt-6 pt-5 border-t border-slate-800/80">
                <div className="flex flex-wrap gap-1.5">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      dir="ltr"
                      className="font-mono-tech rounded border border-slate-800 bg-slate-950/80 px-2.5 py-1 text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <Link
                    href={localizedPath(locale, `/projects/${project.slug}`)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-blue-400 transition hover:text-blue-300"
                  >
                    <span>{dict.projectsPage.viewDetails}</span>
                    <DirectionalArrow className="h-4 w-4" />
                  </Link>

                  <Link
                    href={`${localizedPath(locale, "/contact")}?type=${project.inquiryType}`}
                    className="text-xs font-medium text-slate-400 underline-offset-4 hover:text-white hover:underline"
                  >
                    {dict.projectsPage.startSimilarProject}
                  </Link>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
