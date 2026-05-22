import type { MetadataRoute } from "next";

import { resolveProject } from "@/lib/project/resolve-project";
import { buildSitemapEntries } from "@/lib/seo/sitemap";

export default function sitemap(): MetadataRoute.Sitemap {
  const { seo } = resolveProject();

  return buildSitemapEntries(seo);
}
