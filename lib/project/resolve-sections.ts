import { resolveProject } from "@/lib/project/resolve-project";
import { normalizeSectionManifest } from "@/lib/project/section-registry";

import type { SectionManifest, SectionManifestEntry } from "@/lib/project/section-types";

/** Active page manifest for the current project build (enabled sections only). */
export function resolvePageSections(): SectionManifestEntry[] {
  return normalizeSectionManifest(resolveProject().sections);
}

/** Full manifest including disabled rows — useful for authoring tools. */
export function resolveSectionManifest(): SectionManifest {
  return resolveProject().sections;
}
