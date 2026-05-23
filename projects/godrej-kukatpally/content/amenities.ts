import type { AmenitiesContent } from "@/lib/content/types";

import { godrejKukatpallyMediaManifest } from "@/projects/godrej-kukatpally/media-manifest";

const { paths } = godrejKukatpallyMediaManifest;

export const godrejKukatpallyAmenitiesContent: AmenitiesContent = {
  mediaAttribution: "Amenity inventory indicative — subject to final developer collateral and approvals.",
  ribbon: {
    src: paths.clubhouseAmenity,
    alt: "Godrej Kukatpally — lifestyle clubhouse and metropolitan amenity rendering.",
    ribbonCaption: "72,000 sq. ft. lifestyle hub",
    figureCaption: "Metropolitan amenity ecosystem · wellness, sport, and skyline social spaces.",
  },
  heroBand: {
    eyebrow: "Urban lifestyle infrastructure",
    title: "Elevated living for the IT corridor",
    lead: "A curated metropolitan stack — wellness, co-working, recreation, and skyline social spaces designed for professionals who expect the city to keep pace with their ambition.",
  },
  statsBand: [
    { figure: "72", suffix: "K sq. ft.", label: "Grand clubhouse" },
    { figure: "60", suffix: "+", label: "Lifestyle amenities" },
    { figure: "75", suffix: "%", label: "Open-to-sky spaces" },
  ],
  iconAtlas: [],
  lifestylePillars: [
    {
      eyebrow: "Wellness",
      title: "Body & clarity",
      lead: "Daily rhythm infrastructure for urban professionals — recovery, focus, and balance without leaving the estate.",
      icon: "flower2",
      highlights: [
        "Temperature-controlled swimming pool",
        "Fully equipped gymnasium",
        "Yoga and meditation pavilion",
        "Spa and wellness suites",
      ],
    },
    {
      eyebrow: "Co-working",
      title: "Work without friction",
      lead: "Hybrid-ready spaces for corridor professionals — focused work, meetings, and connectivity at home base.",
      icon: "briefcaseBusiness",
      highlights: [
        "Co-working lounge with high-speed connectivity",
        "Meeting and collaboration zones",
        "Concierge desk support",
        "Quiet focus pods",
      ],
    },
    {
      eyebrow: "Recreation",
      title: "Sport & leisure",
      lead: "Active recreation calibrated for families and professionals — indoor sport, outdoor leisure, and community energy.",
      icon: "volleyball",
      highlights: [
        "Badminton and squash courts",
        "Multipurpose sports arena",
        "Cricket practice net",
        "Jogging and walking track",
      ],
    },
    {
      eyebrow: "Skyline social",
      title: "Community above the city",
      lead: "Social spaces that match the towers' metropolitan presence — entertaining, gathering, and skyline perspectives.",
      icon: "users",
      highlights: [
        "Grand party lawn and amphitheatre",
        "Mini theatre and AV lounge",
        "Rooftop viewing decks",
        "Sky lounge terraces",
      ],
    },
    {
      eyebrow: "Fitness",
      title: "Performance daily",
      lead: "Structured fitness infrastructure for consistent training — from strength floors to outdoor movement circuits.",
      icon: "dumbbell",
      highlights: [
        "Premium gymnasium floor",
        "Outdoor fitness stations",
        "Jogging track",
        "Landscaped active decks",
      ],
    },
    {
      eyebrow: "Urban leisure",
      title: "Evenings & weekends",
      lead: "Leisure calibrated for metropolitan families — play, culture, and relaxed social time within the estate.",
      icon: "music4",
      highlights: [
        "Café and social lounge",
        "Kids' play and toddler zones",
        "Indoor games room",
        "Guest suites for visitors",
      ],
    },
  ],
  experienceQuote:
    '"Live beautifully — in body, mind, and spirit. Every space is composed for comfort, clarity, and everyday elegance at metropolitan pace."',
  detailCategories: [],
  peerComparison: {
    heading: "Amenity depth",
    lead: "",
    projectColumnLabel: "Godrej Kukatpally",
    peersColumnLabel: "Typical corridor peers",
    rows: [],
  },
  mosaicFrames: [],
  footerNote:
    "Amenity commissioning, access rules, and final inventory are governed by Godrej Properties — verify with appointed representatives before decisions.",
};
