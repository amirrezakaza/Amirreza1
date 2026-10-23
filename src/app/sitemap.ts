import type { MetadataRoute } from "next";
import { PROJECTS_DATA } from "@/data/projects";
import { getConfiguredSiteOrigin, SUPPORTED_LOCALES } from "@/i18n/config";

const PLACEHOLDER_ORIGIN = "https://your-production-domain.example";

export default function sitemap(): MetadataRoute.Sitemap {
  const origin = getConfiguredSiteOrigin() ?? PLACEHOLDER_ORIGIN;
  const now = new Date();

  const staticRoutes = [
    "",
    "/services",
    "/projects",
    "/process",
    "/about",
    "/faq",
    "/contact",
  ];

  const entries: MetadataRoute.Sitemap = [];

  for (const route of staticRoutes) {
    for (const locale of SUPPORTED_LOCALES) {
      entries.push({
        url: `${origin}/${locale}${route}`,
        lastModified: now,
        changeFrequency: route === "" ? "weekly" : "monthly",
        priority: route === "" ? 1.0 : route === "/contact" || route === "/services" ? 0.9 : 0.8,
        alternates: {
          languages: {
            en: `${origin}/en${route}`,
            fa: `${origin}/fa${route}`,
          },
        },
      });
    }
  }

  for (const project of PROJECTS_DATA) {
    const route = `/projects/${project.slug}`;
    for (const locale of SUPPORTED_LOCALES) {
      entries.push({
        url: `${origin}/${locale}${route}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: 0.7,
        alternates: {
          languages: {
            en: `${origin}/en${route}`,
            fa: `${origin}/fa${route}`,
          },
        },
      });
    }
  }

  return entries;
}
