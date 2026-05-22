import { resolveProject } from "@/lib/project/resolve-project";

import type { ProjectAnalyticsConfig, ProjectSeoConfig } from "@/lib/seo/types";

export function resolveSeo(): ProjectSeoConfig {
  return resolveProject().seo;
}

export function resolveAnalytics(): ProjectAnalyticsConfig {
  return resolveProject().analytics;
}
