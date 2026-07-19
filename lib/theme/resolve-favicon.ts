import { getActiveProjectSlug } from "@/lib/project/resolve-project";
import type { ProjectSlug } from "@/lib/project/types";

export type FaviconDefinition = {
  /** Single- or dual-letter mark — keep ≤2 chars for 32px legibility. */
  monogram: string;
  background: string;
  border: string;
  foreground: string;
  /** Corner radius as px at 32×32 base. */
  radius: number;
};

const FAVICONS: Record<ProjectSlug, FaviconDefinition> = {
  "prestige-kollur": {
    monogram: "P",
    background: "#0f2f28",
    border: "#c9a86a",
    foreground: "#f4ede3",
    radius: 7,
  },
  "godrej-kukatpally": {
    monogram: "G",
    background: "#181b22",
    border: "#b8a480",
    foreground: "#f4f5f8",
    radius: 7,
  },
  "golden-doors": {
    monogram: "G",
    background: "#000000",
    border: "#C9A227",
    foreground: "#E8D9B0",
    radius: 7,
  },
};

/** Build-time favicon tokens for the active project bundle. */
export function resolveFavicon(): FaviconDefinition {
  return FAVICONS[getActiveProjectSlug()];
}
