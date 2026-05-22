import type { DocumentsContent } from "@/lib/content/types";
import { GOLDEN_GROVE_MASTER_PLAN_PAGE_PATH } from "@/projects/prestige-kollur/project-facts";

export const prestigeKollurDocumentsContent: DocumentsContent = {
  heading: {
    eyebrow: "Collateral vault",
    title: "Brochure · costing deck · master plan",
    lead: "One-tap PDF downloads appear automatically when NEXT_PUBLIC_DOC_* points at a .pdf (site path under /documents/… or HTTPS). Until then, taps open concierge so outreach stays controlled.",
  },
  tiles: [
    {
      title: "Project brochure",
      description: "Tower narratives, amenity scripture, indicative interiors.",
    },
    {
      title: "Cost sheet",
      description: "PLC ladders, parking bundles, milestone overlays.",
    },
    {
      title: "Master plan",
      description: "Forest spine sequencing · clubhouse bifurcation · retail edge.",
      browseHref: GOLDEN_GROVE_MASTER_PLAN_PAGE_PATH,
      browseCta: "View master plan",
    },
  ],
  masterPlanPagePath: GOLDEN_GROVE_MASTER_PLAN_PAGE_PATH,
};
