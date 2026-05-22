/**
 * Structured Prestige Kollur (Tellapur–Kollur corridor) facts synthesized from Authorized Sales Partner collateral
 * (reference: prestigegoldengrove.live capture). Numbers are illustrative until Prestige confirms.
 */

export const GOLDEN_GROVE_JV = "JV · Prestige Group & Swela Realty";

export const GOLDEN_GROVE_POSITIONING =
  "Landmark sky-view township at Velimela on the 100 ft Road — off ORR Exit 2 (Kollur), Tellapur–West Hyderabad corridor. Forest-themed integrated masterplan with ICRISAT greenbelt outlook.";

export const HIGHLIGHT_STATS: Array<{ figure: string; suffix?: string; label: string; note: string }> =
  [
    {
      figure: "28.7",
      suffix: "ac",
      label: "Township footprint",
      note: "Integrated forest-themed masterplan · ~80% open space narrative",
    },
    {
      figure: "10",
      label: "Iconic towers",
      note: "2B + 3P + 52 upper floors · destination-controlled lifts",
    },
    {
      figure: "5,120",
      label: "Sky-Villaments",
      note: "2 / 3 / 4 BHK · 1,169 – 3,013 sq. ft.",
    },
    {
      figure: "₹93",
      suffix: "L*",
      label: "Entry indication",
      note: "Campaign collateral · floor & facing vary · verify live",
    },
  ];

export const RERA_STATUS = {
  headline: "Project status bulletin",
  lastUpdatedLabel: "Collateral snapshot",
  bullets: [
    "TS RERA: P01100010708 — verify current filing on the Telangana RERA portal.",
    "HMDA reference cited in partner collateral — confirm stamped approvals before booking.",
    "Possession horizon communicated as March 2031 — milestone-linked Construction Linked Plan (CLP).",
  ],
  verifyHref: "https://rera.telangana.gov.in/",
  verifyLabel: "Verify on TS RERA portal",
} as const;

export const KEY_USPS: string[] = [
  "~11-acre central landscaped spine framing twin clubhouses (~2.4L sq. ft. combined narrative).",
  "Residential levels begin ~50 ft above grade — elevated decks toward the ICRISAT greenbelt outlook.",
  "Velimela ORR Exit 2 adjacency — signal-free glide frames for Financial District & Neopolis spillover belt.",
  "Low-density engineering narrative (~178 flats / acre in partner collateral vs. denser peers).",
];

export const PRICING_ROWS: Array<{ variant: string; size: string; price: string }> = [
  {
    variant: "2 Bed Classic (2B2T)",
    size: "1,169 – 1,281 sq. ft.",
    price: "₹93 Lakhs onwards*",
  },
  {
    variant: "3 Bed Aspire (3B2T)",
    size: "1,516 – 1,648 sq. ft.",
    price: "₹1.31 CR onwards*",
  },
  {
    variant: "3 Bed Premia (3B3T)",
    size: "1,837 – 2,162 sq. ft.",
    price: "₹1.49 CR onwards*",
  },
  {
    variant: "3 Bed Ultima (3B3T + Study)",
    size: "2,462 sq. ft.",
    price: "₹1.96 CR onwards*",
  },
  {
    variant: "4 Bed Supreme (4B4T)",
    size: "2,723 – 2,728 sq. ft.",
    price: "₹2.20 CR onwards*",
  },
  {
    variant: "4 Bed Ultima (4B4T + Staff)",
    size: "2,900 – 3,013 sq. ft.",
    price: "₹2.39 CR onwards*",
  },
];

export const CONFIGURATION_ROWS: Array<{
  variant: string;
  beds: string;
  sizes: string;
  suited: string;
  highlight: string;
}> = [
  {
    variant: "2 BHK Classic",
    beds: "2 Bed + 2 Toilet",
    sizes: "1,169 – 1,281",
    suited: "Nuclear families & investors",
    highlight: "Compact efficiency facing central greens",
  },
  {
    variant: "3 BHK Aspire",
    beds: "3 Bed + 2 Toilet",
    sizes: "1,516 – 1,648",
    suited: "Modern professionals",
    highlight: "Dedicated work-from-home pockets",
  },
  {
    variant: "3 BHK Premia",
    beds: "3 Bed + 3 Toilet",
    sizes: "1,837 – 2,162",
    suited: "Growing families",
    highlight: "Expanded prima balconies",
  },
  {
    variant: "3 BHK Ultima",
    beds: "3 Bed + 3T + Study",
    sizes: "2,462",
    suited: "Multi-generational",
    highlight: "Private foyer & office annex",
  },
  {
    variant: "4 BHK Ultima",
    beds: "4 Bed + 4T + Staff",
    sizes: "2,900 – 3,013",
    suited: "Sky-villa seekers",
    highlight: "270° corner openness · minimal shared walls",
  },
];

export const PAYMENT_PLAN = {
  title: "Construction-linked rhythm",
  rhythm: "10% booking · 10% Agreement of Sale · 80% across documented milestones",
  detail:
    "Partner collateral cites 28 bi-monthly instalments on the balance — reconcile schedules directly with Prestige finance desks.",
} as const;

export const EOI_PROGRAM = {
  title: "Expression of Interest (EOI)",
  rateHint: "Collateral cites ~₹8,500 / sq. ft. early-window framing — verify live.",
  opened: "Partner timeline references mid-March 2026 onward — confirm eligibility.",
  deposit: "₹2 Lakhs PDC (2 / 3 / 4 BHK) — issuer naming per Prestige instructions.",
  steps: [
    "Submit preferences (tower, stack, Vaastu-facing) via Prestige-approved workflow.",
    "Priority sequencing communicated as first-registered basis for premium forest stacks.",
    "EOI deployment adjusts against the 10% booking demand upon allotment confirmation.",
  ],
} as const;

export const LOYALTY_CREDIT_NOTE = {
  title: "₹100 / sq. ft. collateral credit narrative",
  body: "Partner decks describe a staged credit when booking discipline + agreements + staged 20% follow-through hit documented checkpoints — binding terms only inside Prestige paperwork.",
} as const;


/** On-site master plan editorial (plans, FAQs, mirrored figures · not Prestige’s live subdomain). */
export const GOLDEN_GROVE_MASTER_PLAN_PAGE_PATH = "/master-plan" as const;

export function documentHrefLooksLikePdf(href: string): boolean {
  try {
    return new URL(href).pathname.toLowerCase().endsWith(".pdf");
  } catch {
    return href.toLowerCase().trim().endsWith(".pdf");
  }
}

export function goldenGroveDocumentLinks(): {
  brochure: string | null;
  costSheet: string | null;
  masterPlan: string | null;
  brochureIsDirectPdf: boolean;
  costSheetIsDirectPdf: boolean;
  masterPlanIsDirectPdf: boolean;
} {
  const brochureEnv = process.env.NEXT_PUBLIC_DOC_BROCHURE_PDF?.trim();
  const costSheetEnv = process.env.NEXT_PUBLIC_DOC_COST_SHEET_PDF?.trim();
  const masterPlanEnv = process.env.NEXT_PUBLIC_DOC_MASTER_PLAN_PDF?.trim();

  const brochure =
    brochureEnv !== undefined && brochureEnv.length > 0 ? brochureEnv : null;

  const costSheet =
    costSheetEnv !== undefined && costSheetEnv.length > 0 ? costSheetEnv : null;

  const masterPlan =
    masterPlanEnv !== undefined && masterPlanEnv.length > 0 ? masterPlanEnv : null;

  return {
    brochure,
    costSheet,
    masterPlan,
    brochureIsDirectPdf: brochure !== null ? documentHrefLooksLikePdf(brochure) : false,
    costSheetIsDirectPdf: costSheet !== null ? documentHrefLooksLikePdf(costSheet) : false,
    masterPlanIsDirectPdf: masterPlan !== null ? documentHrefLooksLikePdf(masterPlan) : false,
  };
}

export const SPEC_SNIPPETS: Array<{ heading: string; items: string[] }> = [
  {
    heading: "Structure & envelope",
    items: [
      "RCC shear-wall cores with aluminium formwork narrative — seismic Zone II alignment.",
      "Premium acrylic interiors · weather-textured façade zones per Prestige specification decks.",
    ],
  },
  {
    heading: "Interior palettes",
    items: [
      "800×800 mm double-charged vitrified living zones · anti-skid wet areas.",
      "Master suites alternate warm laminate / vitrified selections.",
    ],
  },
  {
    heading: "Services",
    items: [
      "3-phase metering · ELCB protection · DG backup slabs communicated per typology.",
      "FTTH backbone · biometric doors · video door-phone loops into central security.",
      "Six–eight passenger lifts per tower narrative plus dual service elevators.",
    ],
  },
];

export const LOCATION_FACTS = {
  addressLines: [
    "Velimela — 100 ft Road, off ORR service corridor (Exit 2 · Kollur)",
    "Tellapur · West Hyderabad · Telangana · India · PIN 502032",
  ],
  landmark: "Adjacent ICRISAT research greens (~3,500-acre outlook referenced in collateral)",
  lat: 17.51,
  lng: 78.27,
  proximity: [
    { label: "ORR Exit 2", detail: "~2 minute glide framing (partner narrative)" },
    { label: "Financial District / Gachibowli", detail: "~14 minute signal-lite commute framing" },
    { label: "Neopolis / Kokapet belt", detail: "Comparable infra uplift · pricing arbitrage storyline" },
    { label: "RGIA Airport", detail: "~30 minute ORR-led framing (validate live)" },
  ],
} as const;

export type AmenityHighlight = {
  title: string;
  description: string;
};

/** Lucide icon keys — resolved in `AmenitiesSection` */
export type AmenityIconKey =
  | "landmark"
  | "waves"
  | "dumbbell"
  | "flower2"
  | "baby"
  | "clapperboard"
  | "gamepad2"
  | "volleyball"
  | "footprints"
  | "camera"
  | "video"
  | "music4"
  | "shoppingBag"
  | "trees"
  | "sparkles"
  | "briefcaseBusiness"
  | "wifi"
  | "leaf"
  | "users";

/** Prominent amenity tiles — labels echo prestigegoldengrove.live amenity strips */
export const AMENITIES_ICON_ATLAS: Array<{ title: string; icon: AmenityIconKey }> = [
  { title: "Twin clubhouses", icon: "landmark" },
  { title: "Swimming pools", icon: "waves" },
  { title: "Gymnasium", icon: "dumbbell" },
  { title: "Yoga deck & lawns", icon: "flower2" },
  { title: "Kids’ activity zones", icon: "baby" },
  { title: "Mini theatre", icon: "clapperboard" },
  { title: "Indoor games", icon: "gamepad2" },
  { title: "Tennis & courts", icon: "volleyball" },
  { title: "Jogging track", icon: "footprints" },
  { title: "24/7 CCTV", icon: "camera" },
  { title: "Video door phone", icon: "video" },
  { title: "Dance / music rooms", icon: "music4" },
  { title: "Retail & dining edge", icon: "shoppingBag" },
  { title: "Central park spine", icon: "trees" },
  { title: "Spa & wellness", icon: "sparkles" },
  { title: "Cowork lounges", icon: "briefcaseBusiness" },
  { title: "Fibre-ready spine", icon: "wifi" },
  { title: "Eco utilities", icon: "leaf" },
  { title: "Banquet & events", icon: "users" },
];

/** Compact headline chips — mirrors “Amenities Highlights at a Glance” on prestigegoldengrove.live */
export const AMENITIES_GLANCE_CHIPS: string[] = [
  "Twin ultra-luxury clubhouses",
  "11-acre central park spine",
  "Elite sports & aquatics belt",
  "Walk-to retail & dining edge",
  "Smart eco infrastructure",
];

export type AmenityStatBandItem = {
  figure: string;
  suffix?: string;
  label: string;
};

/** Above-the-fold stats band inside the amenities section */
export const AMENITIES_STATS_BAND: AmenityStatBandItem[] = [
  { figure: "250+", label: "Lifestyle touchpoints", suffix: undefined },
  { figure: "80%", label: "Open & green ratio", suffix: undefined },
  { figure: "28.7", suffix: " acres", label: "Integrated township" },
  { figure: "2,40,000", suffix: "+ sq. ft.", label: "Twin clubhouse footprint" },
];

export type AmenityDetailCategory = {
  title: string;
  subtitle?: string;
  items: string[];
};

/** Detailed amenity taxonomy — synthesized from Prestige Golden Grove public collateral */
export const AMENITIES_DETAIL_CATEGORIES: AmenityDetailCategory[] = [
  {
    title: "Twin clubhouse experience",
    subtitle:
      "Two G+4 hubs (~1.2 lakh sq. ft. each in partner storytelling) themed as Sapphire (active) vs Emerald (social).",
    items: [
      "Grand arrival lobbies · multipurpose banquet halls · mini theatre & programmed leisure.",
      "Wellness & spa: temperature-controlled indoor pools, steam, sauna, treatment suites.",
      "Work-era lounges: cowork cafés, business centre, quiet library pockets.",
      "Aquatics deck: outdoor lap pools, kids’ pool, infinity-edge pool with deck seating.",
    ],
  },
  {
    title: "Central park & everyday wellness",
    subtitle:
      "~11-acre continuous landscaped spine — ecological buffer and pedestrian-first circulation.",
    items: [
      "Reflexology paths, zen gardens, butterfly park, sensory courts per tower cluster.",
      "~2 km jogging & cycling tracks, amphitheatre lawns, pet-friendly clearings.",
      "Dedicated senior citizen decks · shaded pause courts · yoga & mindfulness terraces.",
    ],
  },
  {
    title: "Sports, gym & indoor play",
    subtitle: "Athletic programming pitched at club-grade intensity across indoor + outdoor chapters.",
    items: [
      "Indoor badminton & squash · multipurpose courts for tennis / basketball narratives.",
      "High-ceiling gym with cross-fit bays · TT · billiards · kids’ virtual gaming room.",
      "Campaign storyline includes skating ribbons & cricket nets — validate live during walk-through.",
    ],
  },
  {
    title: "Safety, utilities & sustainability",
    subtitle: "Operational backbone communicated as smart-city adjacent across collateral decks.",
    items: [
      "Three-tier security: CCTV mesh, biometric access, RFID visitor sequencing.",
      "100% common-area backup · fibre backbone · pressurised water narrative.",
      "Rainwater harvesting, solar commons lighting, organic waste handling loops.",
    ],
  },
];

export type AmenityPeerComparisonRow = {
  feature: string;
  goldenGrove: string;
  peers: string;
};

/** Editorial contrast band — cite ranges only as directional framing */
export const AMENITIES_PEER_COMPARISON: AmenityPeerComparisonRow[] = [
  {
    feature: "Combined clubhouse scale",
    goldenGrove: "2,40,000+ sq. ft. twin hubs",
    peers: "~40k–60k sq. ft. typical single club",
  },
  {
    feature: "Open space ratio",
    goldenGrove: "~80% landscaped narrative",
    peers: "~60–70% common on denser stacks",
  },
  {
    feature: "Aquatics programming",
    goldenGrove: "Temperature-controlled indoor + outdoor decks",
    peers: "Outdoor pools standard elsewhere",
  },
];

/** Lifestyle frames used inside amenities mosaic — paths mirror `/public/media/official/` masters */
export const AMENITIES_MOSAIC_FRAMES: Array<{ src: string; caption: string; alt: string }> = [
  {
    src: "/media/official/plan-apartment.webp",
    caption: "Sky-villa vignette",
    alt: "Official campaign interior vignette — clubhouse-adjacent lifestyle narrative.",
  },
  {
    src: "/media/official/banner-tower.webp",
    caption: "Tower & skyline rhythm",
    alt: "Twilight township towers — campaign visualization.",
  },
  {
    src: "/media/official/banner-exterior.webp",
    caption: "Forest façade read",
    alt: "Exterior elevation render — campaign artwork.",
  },
];

export const AMENITY_HIGHLIGHTS: AmenityHighlight[] = [
  {
    title: "Twin clubhouse precinct",
    description:
      "Club Sapphire (performance aquatics & courts) vs Club Emerald (social craft, cowork cafés, mini theatre).",
  },
  {
    title: "Central forest spine",
    description:
      "~11-acre landscaped continuum with jogging sky-loop narrative, amphitheatre courts, sensory gardens.",
  },
  {
    title: "Sports & aquatics lab",
    description:
      "Temperature-controlled lanes, elite indoor courts, skating & cricket practice nets.",
  },
  {
    title: "Smart perimeter",
    description:
      "Three-tier surveillance, RFID arrival sequencing, pedestrian-first central lawns.",
  },
  {
    title: "Retail boulevard",
    description:
      "High-street mall storyline anchoring daily convenience without leaving the precinct.",
  },
  {
    title: "Wellness rituals",
    description:
      "Spa journeys, reflexology trails, meditation decks, dedicated senior & pet sanctuaries.",
  },
];

export const PRICE_DISCLAIMER =
  "*Indicative pricing from partner collateral — excludes statutory charges, corpus, PLC, GST, or limited-window incentives. Prestige confirmations prevail.";
