import type { ProjectContentPack } from "@/lib/content/types";
import type { ProjectSlug } from "@/lib/project/types";
import { resolveProject } from "@/lib/project/resolve-project";
import { godrejKukatpallyContent } from "@/projects/godrej-kukatpally/content";
import { prestigeKollurContent } from "@/projects/prestige-kollur/content";

const CONTENT_REGISTRY = {
  "prestige-kollur": prestigeKollurContent,
  "godrej-kukatpally": godrejKukatpallyContent,
} satisfies Record<ProjectSlug, ProjectContentPack>;

/** Typed content pack for the active project build. */
export function resolveContent(): ProjectContentPack {
  const slug = resolveProject().slug;

  return CONTENT_REGISTRY[slug];
}
