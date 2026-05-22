import type { OverviewContent } from "@/lib/content/types";
import {
  GOLDEN_GROVE_JV,
  GOLDEN_GROVE_POSITIONING,
  HIGHLIGHT_STATS,
  KEY_USPS,
  RERA_STATUS,
} from "@/projects/prestige-kollur/project-facts";

export const prestigeKollurOverviewContent: OverviewContent = {
  heading: {
    eyebrow: "Project intelligence",
    title: "Prestige Kollur · Velimela corridor",
  },
  jvLine: GOLDEN_GROVE_JV,
  positioning: GOLDEN_GROVE_POSITIONING,
  highlightStats: HIGHLIGHT_STATS,
  reraStatus: RERA_STATUS,
  signatureThesisLabel: "Signature thesis",
  keyUsps: KEY_USPS,
};
