/** Narrative scaffolding aligned to Prestige Kollur · Velimela / Tellapur–Kollur — tighten with sanctioned developer copy as needed. */

export const STORYTELLING_SECTION_EYEBROW = "Storytelling · Prestige Kollur";

/** Tighter editorial label on narrow screens (avoids wide tracking clashes with the nav masthead). */
export const STORYTELLING_SECTION_EYEBROW_MOBILE = "Story · Kollur";

export const STORYTELLING_PRIMARY_HEADLINE = {
  lines: ["Landscapes,", "composed as", "breathing rooms"],
} as const;

export const STORY_OPENING_LINES = [
  "Prestige Kollur at Tellapur–Kollur stitches Prestige precision, Vaastu-conscious layouts, and nearly thirty acres of integrated township breathing room — presented here by our Authorized Sales Partner.",
  "We borrow pacing from cinematic hospitality: elongated pauses where landscaped spine reads as amenity, towers choreograph skyline rhythm, and arrival softens before specifications arrive.",
  "ORR Exit 2 proximity, Financial District cadence, and emerging Metro Blue Line connectivity anchor everyday rhythm — validate commute math independently with developer updates.",
] as const;

export const STORY_BRIDGE_QUOTE =
  '"Open greenery is hospitality made spatial—oxygen, shade, procession, serenity."';

export const STORY_RIVER_LINES = [
  "Each arrival should feel moderated by topography: nine acres of central landscaping (per developer storytelling), lawns that widen sightlines, and light that pools before it announces itself.",
  "Circulation is scripted as procession—lanes widening into clearings, views withholding then rewarding, clubhouses anchoring social gravity instead of ornamental clutter.",
  "Connected living here pairs disciplined density with breathable openness — twin clubhouses, immersive amenities, and future-ready Hyderabad corridors.",
] as const;

export const STORY_IMMERSED_LINE =
  "Watercolor-soft mornings and grove-shadowed evenings—a tonal bridge between campaign storytelling and eventual lived reality at Kollur.";

export const STORY_SHOULDER_LINE =
  "Figures echo Prestige-published campaign collateral; audit everything material with Prestige-appointed representatives before commitments.";

export type EditorialStatistic = {
  figure: string;
  heading: string;
  note: string;
};

export const STORY_EDITORIAL_STATS: EditorialStatistic[] = [
  {
    figure: "~28.75",
    heading: "acres integrated township",
    note: "Tellapur–Kollur · developer-stated land parcel",
  },

  {
    figure: "4500+",
    heading: "premium residences planned",
    note: "2, 3 & 4 BHK mix · inventory fluid — confirm with Prestige",
  },

  {
    figure: "80%",
    heading: "open space narrative",
    note: "campaign collateral emphasis · illustrative until audited",
  },

  {
    figure: "ORR",
    heading: "Exit 2 adjacency",
    note: "reach framing for Financial District · HITEC · Neopolis — verify live",
  },
];
