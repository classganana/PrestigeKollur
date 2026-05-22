import type { MetadataRoute } from "next";

import { isIndexableDeployment } from "@/lib/seo/site-url";
import { absoluteUrl } from "@/lib/seo/site-url";
import type { ProjectSeoConfig, SeoSitemapPath } from "@/lib/seo/types";

const DEFAULT_SITEMAP_PATHS: SeoSitemapPath[] = [
  { path: "/", changeFrequency: "weekly", priority: 1 },
  { path: "/master-plan", changeFrequency: "monthly", priority: 0.75 },
];

export function buildSitemapEntries(seo: ProjectSeoConfig): MetadataRoute.Sitemap {
  if (!isIndexableDeployment()) {
    return [];
  }

  const paths = [...DEFAULT_SITEMAP_PATHS, ...(seo.sitemapPaths ?? [])];

  const seen = new Set<string>();

  return paths
    .filter((entry) => {
      if (seen.has(entry.path)) {
        return false;
      }

      seen.add(entry.path);

      return true;
    })
    .map((entry) => {
      const url = absoluteUrl(entry.path);

      if (url === undefined) {
        return null;
      }

      return {
        url,
        lastModified: new Date(),
        changeFrequency: entry.changeFrequency ?? "monthly",
        priority: entry.priority ?? 0.5,
      };
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null);
}
