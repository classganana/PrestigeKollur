import type { FloorPlansContent } from "@/lib/content/types";
import { prestigeKollurMediaManifest } from "@/projects/prestige-kollur/media-manifest";
import { OFFICIAL_SITE_MEDIA_ATTRIBUTION } from "@/projects/prestige-kollur/content/amenities";

const { paths } = prestigeKollurMediaManifest;

export const prestigeKollurFloorPlansContent: FloorPlansContent = {
  sectionId: "floor-plans",
  heading: {
    eyebrow: "Blueprint vault",
    title: "Floor plans are real—we blur them on purpose.",
    lead: (
      <>
        High-resolution CAD-ready plates ship privately after concierge routing (choose{" "}
        <strong className="font-medium text-prestige-navy">Floor plans</strong> in the overlay
        form). Below is silhouette-only—tap any card or button to summon intake without snapping to
        the footer.
      </>
    ),
  },
  mediaAttribution: OFFICIAL_SITE_MEDIA_ATTRIBUTION,
  tiles: [
    {
      src: paths.plan2bhk1281,
      series: "2 BHK Classic",
      sqft: "~1,281 sq. ft.",
      alt: "Blurred preview of a two-bedroom Prestige Kollur floor plate from the campaign site.",
    },
    {
      src: paths.plan3bhk1516,
      series: "3 BHK Aspire",
      sqft: "~1,516 sq. ft.",
      alt: "Blurred preview of a three-bedroom Aspire floor plate from the campaign site.",
    },
    {
      src: paths.plan3bhk2462,
      series: "3 BHK Ultima",
      sqft: "~2,462 sq. ft.",
      alt: "Blurred preview of a three-bedroom Ultima plus study floor plate.",
    },
    {
      src: paths.plan4bhk2900,
      series: "4 BHK Ultima",
      sqft: "~2,900 sq. ft.",
      alt: "Blurred preview of a four-bedroom Ultima floor plate.",
    },
  ],
  closingBand: {
    title:
      "Still scrolling? Same concierge rail unlocks CAD-grade clarity—dimensions, ducts, Vaastu notes once Prestige workflow clears your file.",
    lead: "Prefer WhatsApp—name your typology (2 / 3 / 4 BHK) so routing lands with the blueprint desk first.",
    tip: 'Tip · Select “Floor plans” inside the discreet form—we queue CAD-ready packs once IDs align with Prestige workflow.',
  },
};
