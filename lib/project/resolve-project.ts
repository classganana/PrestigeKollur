import type { ProjectConfig, ProjectSlug } from "@/lib/project/types";
import { godrejKukatpallyConfig } from "@/projects/godrej-kukatpally/config";
import { goldenDoorsConfig } from "@/projects/golden-doors/config";
import { prestigeKollurConfig } from "@/projects/prestige-kollur/config";

export const DEFAULT_PROJECT_SLUG: ProjectSlug = "prestige-kollur";

const PROJECT_REGISTRY: Record<ProjectSlug, ProjectConfig> = {
  "prestige-kollur": prestigeKollurConfig,
  "godrej-kukatpally": godrejKukatpallyConfig,
  "golden-doors": goldenDoorsConfig,
};

const KNOWN_SLUGS = Object.keys(PROJECT_REGISTRY) as ProjectSlug[];

function isProjectSlug(value: string): value is ProjectSlug {
  return (KNOWN_SLUGS as string[]).includes(value);
}

/** Active slug from `NEXT_PUBLIC_PROJECT_SLUG` (inlined at build time). */
export function getActiveProjectSlug(): ProjectSlug {
  const raw = process.env.NEXT_PUBLIC_PROJECT_SLUG?.trim();

  if (raw === undefined || raw.length === 0) {
    return DEFAULT_PROJECT_SLUG;
  }

  if (!isProjectSlug(raw)) {
    throw new Error(
      `Unknown NEXT_PUBLIC_PROJECT_SLUG "${raw}". Known projects: ${KNOWN_SLUGS.join(", ")}.`,
    );
  }

  return raw;
}

/** Resolve the deployable project config for the current build. */
export function resolveProject(): ProjectConfig {
  return PROJECT_REGISTRY[getActiveProjectSlug()];
}

/** Site identity for the active project — convenience for server components / metadata. */
export function resolveSite() {
  return resolveProject().site;
}

/** Partner branding for the active project — disclosure, marks, default lockups. */
export function resolveBranding() {
  return resolveProject().branding;
}
