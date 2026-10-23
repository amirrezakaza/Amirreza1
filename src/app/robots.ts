import type { MetadataRoute } from "next";
import { getConfiguredSiteOrigin } from "@/i18n/config";

const PLACEHOLDER_ORIGIN = "https://your-production-domain.example";

export default function robots(): MetadataRoute.Robots {
  const origin = getConfiguredSiteOrigin() ?? PLACEHOLDER_ORIGIN;

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${origin}/sitemap.xml`,
  };
}
