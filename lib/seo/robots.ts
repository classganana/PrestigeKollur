import type { MetadataRoute } from "next";

import { absoluteUrl, isIndexableDeployment } from "@/lib/seo/site-url";
import type { ProjectSeoConfig } from "@/lib/seo/types";

export function buildRobotsPolicy(seo: ProjectSeoConfig): MetadataRoute.Robots {
  const indexable = isIndexableDeployment() && seo.robots.index;
  const followable = seo.robots.follow;
  const sitemapUrl = absoluteUrl("/sitemap.xml");

  if (!indexable) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/",
      },
      ...(sitemapUrl !== undefined ? { sitemap: sitemapUrl } : {}),
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      ...(followable ? {} : { disallow: ["/api/"] }),
    },
    ...(sitemapUrl !== undefined ? { sitemap: sitemapUrl } : {}),
  };
}
