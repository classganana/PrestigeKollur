"use client";

import { useProject } from "@/lib/project/project-context";
import { normalizeSectionManifest } from "@/lib/project/section-registry";

/** Enabled home sections for the active project — client-side mirror of `resolvePageSections()`. */
export function usePageSections() {
  return normalizeSectionManifest(useProject().sections);
}
