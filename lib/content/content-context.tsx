"use client";

import { useProject } from "@/lib/project/project-context";

import type { ProjectContentPack } from "@/lib/content/types";

/** Active project content pack — mirrors `resolveContent()` for client subtrees. */
export function useContent(): ProjectContentPack {
  return useProject().content;
}
