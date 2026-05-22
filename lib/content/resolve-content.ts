import type { ProjectContentPack } from "@/lib/content/types";
import { resolveProject } from "@/lib/project/resolve-project";
import { prestigeKollurContent } from "@/projects/prestige-kollur/content";

const CONTENT_REGISTRY = {
  "prestige-kollur": prestigeKollurContent,
} satisfies Record<string, ProjectContentPack>;

/** Typed content pack for the active project build. */
export function resolveContent(): ProjectContentPack {
  const slug = resolveProject().slug;

  return CONTENT_REGISTRY[slug];
}
