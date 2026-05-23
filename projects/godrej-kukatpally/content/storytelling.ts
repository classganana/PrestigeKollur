import type { StorytellingContent } from "@/lib/content/types";

import { godrejKukatpallyMediaManifest } from "@/projects/godrej-kukatpally/media-manifest";

const { paths } = godrejKukatpallyMediaManifest;

const MEDIA_ATTRIBUTION = "Visuals indicative · subject to final approvals";

export const godrejKukatpallyStorytellingContent: StorytellingContent = {
  mediaAttribution: MEDIA_ATTRIBUTION,
  eyebrow: "Urban narrative · Godrej Kukatpally",
  eyebrowMobile: "Urban · KPHB",
  primaryHeadline: {
    lines: ["Skyline identity", "for the IT corridor"],
  },
  openingLines: [
    "Godrej Kukatpally rises as a deliberate metropolitan statement — twin 45-storey towers shaped by Brooklyn-inspired proportion, light, and privacy at a KPHB address that IT professionals already call home.",
    "This is not retreat living. It is connected luxury: minutes from Mindspace and HITEC City, anchored on NH-65, with metro and ORR within a calm commute envelope.",
  ],
  bridgeQuote:
    '"The city does not slow down here — it elevates. Architecture, connectivity, and lifestyle align for buyers who lead from the corridor."',
  riverLines: [
    "Inside, refined spatial planning pairs premium 3 & 4 BHK homes with a 72,000 sq. ft. clubhouse — wellness, recreation, and community calibrated for urban families, investors, and NRIs.",
    "Every design decision reinforces skyline presence: global architectural expertise, optimal light and ventilation, and a masterplan composed for metropolitan confidence rather than township seclusion.",
  ],
  lifestyleChapters: [
    {
      label: "Connected living",
      headline: "The corridor as your daily orbit",
      copy: "Mindspace, HITEC City, metro nodes, and premium retail — positioned for professionals who measure life in minutes, not distance.",
    },
    {
      label: "Elevated lifestyle",
      headline: "High-rise leisure, not peripheral escape",
      copy: "Wellness, co-working, sport, and skyline social spaces — a metropolitan lifestyle stack at the scale the address demands.",
    },
    {
      label: "Modern Hyderabad",
      headline: "Aspiration with infrastructure confidence",
      copy: "Brooklyn-inspired towers on NH-65 — where global design language meets the western IT corridor's momentum.",
    },
  ],
  immersedLine:
    "Twilight tower perspectives and corridor proximity — the tonal bridge between campaign vision and your first site visit.",
  shoulderLine:
    "Figures echo developer collateral · reconcile pricing, inventory, and RERA with appointed representatives before commitments.",
  editorialStats: [
    {
      figure: "45",
      heading: "storeys per tower",
      note: "4B + G + 45 · skyline presence",
    },
    {
      figure: "7.76",
      heading: "acre estate",
      note: "Premium KPHB landmark",
    },
    {
      figure: "72K",
      heading: "sq. ft. clubhouse",
      note: "Metropolitan lifestyle hub",
    },
    {
      figure: "5–10",
      heading: "min to IT hubs",
      note: "Mindspace · HITEC · Madhapur",
    },
  ],
  storyFrame: {
    src: paths.towersElevation,
    alt: "Godrej Kukatpally — twin tower architectural rendering.",
    caption: "Twin towers · Brooklyn-inspired elevation",
  },
  immersiveFrame: {
    src: paths.gallery.lifestyle5,
    alt: "Godrej Kukatpally — elevated exterior perspective at dusk.",
    caption: "Metropolitan dusk · skyline presence",
  },
};
