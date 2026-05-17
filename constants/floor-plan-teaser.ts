/** Floor-plan teaser tiles — WebP masters vendored from prestigegoldengrove.live `/images/plans/`. */

export const FLOOR_PLAN_TEASER_SECTION_ID = "floor-plans";

export type FloorPlanTeaserTile = {
  src: string;
  series: string;
  sqft: string;
  alt: string;
};

export const FLOOR_PLAN_TEASER_TILES: FloorPlanTeaserTile[] = [
  {
    src: "/media/official/plan-2bhk-1281.webp",
    series: "2 BHK Classic",
    sqft: "~1,281 sq. ft.",
    alt: "Blurred preview of a two-bedroom Prestige Kollur floor plate from the campaign site.",
  },
  {
    src: "/media/official/plan-3bhk-1516.webp",
    series: "3 BHK Aspire",
    sqft: "~1,516 sq. ft.",
    alt: "Blurred preview of a three-bedroom Aspire floor plate from the campaign site.",
  },
  {
    src: "/media/official/plan-3bhk-2462.webp",
    series: "3 BHK Ultima",
    sqft: "~2,462 sq. ft.",
    alt: "Blurred preview of a three-bedroom Ultima plus study floor plate.",
  },
  {
    src: "/media/official/plan-4bhk-2900.webp",
    series: "4 BHK Ultima",
    sqft: "~2,900 sq. ft.",
    alt: "Blurred preview of a four-bedroom Ultima floor plate.",
  },
];
