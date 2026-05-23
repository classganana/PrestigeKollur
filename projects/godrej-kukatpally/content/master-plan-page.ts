import { godrejKukatpallyMediaManifest } from "@/projects/godrej-kukatpally/media-manifest";

const { paths } = godrejKukatpallyMediaManifest;

export const godrejKukatpallyMasterPlanPage = {
  metadata: {
    title: "Master plan",
    description:
      "Godrej Kukatpally — 7.76-acre urban estate layout, twin 45-storey tower positioning, and KPHB corridor context.",
  },
  eyebrow: "Urban masterplan",
  title: "Godrej Kukatpally Master Plan",
  lead: "Estate layout illustrating twin tower placement, clubhouse spine, and open-to-sky composition across the KPHB landmark — indicative developer collateral for corridor buyers.",
  figure: {
    src: paths.masterPlan,
    alt: "Godrej Kukatpally integrated master plan — twin towers and estate layout.",
    caption: "Integrated master plan · twin towers · KPHB",
  },
  floorPlans: [
    {
      src: paths.floorPlan3bhk,
      alt: "Godrej Kukatpally — indicative 3 BHK floor plate.",
      caption: "3 BHK Premium · indicative plate",
    },
    {
      src: paths.floorPlan4bhk,
      alt: "Godrej Kukatpally — indicative 4 BHK floor plate.",
      caption: "4 BHK Luxe · indicative plate",
    },
  ],
  attribution: "Renderings indicative — subject to final developer approvals and on-site verification.",
} as const;
