import type { StorytellingContent } from "@/lib/content/types";
import { OFFICIAL_SITE_MEDIA_ATTRIBUTION } from "@/projects/prestige-kollur/content/amenities";
import { prestigeKollurMediaManifest } from "@/projects/prestige-kollur/media-manifest";

const { paths } = prestigeKollurMediaManifest;

export const prestigeKollurStorytellingContent: StorytellingContent = {
  mediaAttribution: OFFICIAL_SITE_MEDIA_ATTRIBUTION,
  eyebrow: "Storytelling · Prestige Kollur",
  eyebrowMobile: "Story · Kollur",
  primaryHeadline: {
    lines: ["Landscapes,", "composed as", "breathing rooms"],
  },
  openingLines: [
    "Prestige Kollur at Tellapur–Kollur stitches Prestige precision, Vaastu-conscious layouts, and nearly thirty acres of integrated township breathing room — presented here by our Authorized Sales Partner.",
    "We borrow pacing from cinematic hospitality: elongated pauses where landscaped spine reads as amenity, towers choreograph skyline rhythm, and arrival softens before specifications arrive.",
    "ORR Exit 2 proximity, Financial District cadence, and emerging Metro Blue Line connectivity anchor everyday rhythm — validate commute math independently with developer updates.",
  ],
  bridgeQuote: '"Open greenery is hospitality made spatial—oxygen, shade, procession, serenity."',
  riverLines: [
    "Each arrival should feel moderated by topography: nine acres of central landscaping (per developer storytelling), lawns that widen sightlines, and light that pools before it announces itself.",
    "Circulation is scripted as procession—lanes widening into clearings, views withholding then rewarding, clubhouses anchoring social gravity instead of ornamental clutter.",
    "Connected living here pairs disciplined density with breathable openness — twin clubhouses, immersive amenities, and future-ready Hyderabad corridors.",
  ],
  immersedLine:
    "Watercolor-soft mornings and grove-shadowed evenings—a tonal bridge between campaign storytelling and eventual lived reality at Kollur.",
  shoulderLine:
    "Figures echo Prestige-published campaign collateral; audit everything material with Prestige-appointed representatives before commitments.",
  editorialStats: [
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
  ],
  storyFrame: {
    src: paths.planAbout,
    alt: "Campaign still summarising Prestige Kollur positioning and township scale.",
    caption: paths.planAbout,
  },
  immersiveFrame: {
    src: paths.bannerTower,
    alt: "Twilight township towers with grove foreground lighting—official campaign visualization.",
    caption: paths.bannerTower,
  },
};
