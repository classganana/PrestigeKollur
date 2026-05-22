import type { MetadataRoute } from "next";

import { resolveProject } from "@/lib/project/resolve-project";
import { buildRobotsPolicy } from "@/lib/seo/robots";

export default function robots(): MetadataRoute.Robots {
  const { seo } = resolveProject();

  return buildRobotsPolicy(seo);
}
