import type { ProjectContentPack } from "@/lib/content/types";

import { godrejKukatpallyAmenitiesContent } from "@/projects/godrej-kukatpally/content/amenities";
import { godrejKukatpallyConnectivityContent } from "@/projects/godrej-kukatpally/content/connectivity";
import { godrejKukatpallyHeroContent } from "@/projects/godrej-kukatpally/content/hero";
import { godrejKukatpallyHighlightsContent } from "@/projects/godrej-kukatpally/content/highlights";
import { godrejKukatpallyStorytellingContent } from "@/projects/godrej-kukatpally/content/storytelling";
import { godrejKukatpallyTrustContent } from "@/projects/godrej-kukatpally/content/trust";
import { godrejKukatpallyMediaManifest } from "@/projects/godrej-kukatpally/media-manifest";
import { godrejKukatpallySite } from "@/projects/godrej-kukatpally/site";

const PLACEHOLDER_FRAME = {
  src: godrejKukatpallyMediaManifest.paths.gallery.lifestyle4,
  caption: "Metropolitan lifestyle — indicative rendering.",
  alt: "Godrej Kukatpally — urban lifestyle and amenity rendering.",
} as const;

const { paths } = godrejKukatpallyMediaManifest;
const gallery = paths.gallery;

export const godrejKukatpallyContent: ProjectContentPack = {
  hero: godrejKukatpallyHeroContent,
  storytelling: godrejKukatpallyStorytellingContent,
  highlights: godrejKukatpallyHighlightsContent,
  overview: {
    heading: {
      eyebrow: "Project intelligence",
      title: "Godrej Kukatpally · KPHB corridor",
    },
    jvLine: godrejKukatpallySite.jvLine,
    positioning:
      "Premium urban high-rise living in KPHB — twin 45-storey towers, Brooklyn-inspired architecture, and direct connectivity to Hyderabad's IT corridor.",
    highlightStats: [
      {
        figure: "7.76",
        suffix: " acres",
        label: "Premium estate",
        note: "Thoughtfully composed residential landmark.",
      },
      {
        figure: "45",
        suffix: " floors",
        label: "Twin towers",
        note: "4B + G + 45-storey skyline presence.",
      },
      {
        figure: "60",
        suffix: "+",
        label: "Lifestyle amenities",
        note: "Clubhouse, wellness, and recreation.",
      },
    ],
    reraStatus: {
      headline: "RERA registration",
      lastUpdatedLabel: "Telangana RERA",
      bullets: [
        "Registration number to be published upon official filing.",
        "Verify current project status on the Telangana RERA portal before any commitment.",
      ],
      verifyHref: "https://rera.telangana.gov.in/",
      verifyLabel: "Verify on Telangana RERA",
    },
    signatureThesisLabel: "Urban thesis",
    keyUsps: [
      "Brooklyn-inspired high-rise architecture",
      "Minutes from HITEC City & Mindspace",
      "Premium 3 & 4 BHK configurations",
      "72,000 sq. ft. lifestyle clubhouse",
    ],
  },
  amenities: godrejKukatpallyAmenitiesContent,
  pricing: {
    heading: {
      eyebrow: "Investment",
      title: "Configurations & indicative pricing",
    },
    configurationIntro: {
      title: "Premium residences",
      lead: "3 & 4 BHK high-rise homes — pricing subject to final allotment.",
    },
    rows: [
      { variant: "3 BHK Premium", size: "1600–1900 sq.ft.", price: "₹ 2.11 Cr* onwards" },
      { variant: "3 BHK Luxe", size: "2000–2400 sq.ft.", price: "₹ 2.65 Cr* onwards" },
      { variant: "4 BHK Luxe", size: "3100–3200 sq.ft.", price: "₹ 4.11 Cr* onwards" },
    ],
    configurationRows: [],
    priceDisclaimer: "*Indicative pricing — subject to change without notice.",
    conciergeCtaLabel: "Request complete costing",
  },
  paymentEoi: {
    heading: {
      eyebrow: "EOI",
      title: "Expression of interest",
    },
    eoiProgram: {
      title: "Priority allotment",
      rateHint: "EOI benefits — refer to partner desk",
      opened: "Open",
      deposit: "As per developer schedule",
      steps: ["Submit EOI", "Priority unit selection", "Allotment confirmation"],
    },
    paymentPlan: {
      title: "Payment schedule",
      rhythm: "Construction-linked",
      detail: "Refer to official payment plan for milestone details.",
    },
    loyaltyCredit: {
      title: "Channel partner desk",
      body: "Connect with our concierge for EOI and payment plan guidance.",
    },
    conciergeCtaLabel: "Speak with concierge",
  },
  documents: {
    heading: {
      eyebrow: "Collateral",
      title: "Project documents",
    },
    tiles: [
      {
        title: "Brochure",
        description: "Project overview and lifestyle narrative.",
        browseCta: "Request brochure",
      },
      {
        title: "Cost sheet",
        description: "Indicative pricing and payment milestones.",
        browseCta: "Request cost sheet",
      },
      {
        title: "Master plan",
        description: "Estate layout and tower positioning.",
        browseHref: "/master-plan",
        browseCta: "View master plan",
      },
    ],
    masterPlanPagePath: "/master-plan",
  },
  connectivity: godrejKukatpallyConnectivityContent,
  floorPlans: {
    sectionId: "floor-plans",
    heading: {
      eyebrow: "Residences",
      title: "Floor plans",
    },
    mediaAttribution: "Plans indicative — refer to official collateral.",
    tiles: [
      {
        src: paths.floorPlan3bhk,
        series: "3 BHK Premium",
        sqft: "1600–1900 sq.ft.",
        alt: "Blurred preview of Godrej Kukatpally 3 BHK floor plate.",
      },
      {
        src: paths.floorPlan4bhk,
        series: "4 BHK Luxe",
        sqft: "3100–3200 sq.ft.",
        alt: "Blurred preview of Godrej Kukatpally 4 BHK floor plate.",
      },
    ],
    closingBand: {
      title: "Unit layouts",
      lead: "Premium 3 & 4 BHK configurations with refined spatial planning.",
      tip: "Request detailed floor plans via concierge.",
    },
  },
  gallery: {
    heading: {
      eyebrow: "Gallery",
      title: "Metropolitan living",
    },
    lifestyleHeading: "Lifestyle",
    lifestyleLead: "Elevated urban experiences across the estate.",
    platesHeading: "Architecture",
    platesLead: "Brooklyn-inspired skyline identity and corridor context.",
    lifestyleFrames: [
      {
        src: paths.towersElevation,
        caption: "Twin towers · skyline presence",
        alt: "Godrej Kukatpally twin towers — campaign elevation render.",
      },
      {
        src: gallery.lifestyle1,
        caption: "Brooklyn-inspired architecture",
        alt: "Godrej Kukatpally tower façade — metropolitan elevation.",
      },
      {
        src: gallery.lifestyle2,
        caption: "Elevated urban living",
        alt: "Godrej Kukatpally high-rise lifestyle rendering.",
      },
      {
        src: gallery.lifestyle3,
        caption: "Estate composition",
        alt: "Godrej Kukatpally estate overview — campaign illustration.",
      },
      {
        src: gallery.lifestyle5,
        caption: "KPHB · corridor context",
        alt: "Godrej Kukatpally metropolitan corridor and tower context.",
      },
      {
        src: gallery.lifestyle6,
        caption: "Wellness & recreation",
        alt: "Godrej Kukatpally amenity and wellness spaces — campaign render.",
      },
      {
        src: gallery.lifestyle7,
        caption: "Skyline social spaces",
        alt: "Godrej Kukatpally community and social amenity rendering.",
      },
      {
        src: gallery.lifestyle8,
        caption: "Connected city living",
        alt: "Godrej Kukatpally metropolitan lifestyle vignette.",
      },
    ],
    platesFrames: [
      {
        src: paths.masterPlan,
        caption: "Master plan",
        alt: "Godrej Kukatpally master plan illustration.",
      },
      {
        src: paths.floorPlan3bhk,
        caption: "3 BHK typology",
        alt: "Godrej Kukatpally 3 BHK floor plate excerpt.",
      },
      {
        src: paths.floorPlan4bhk,
        caption: "4 BHK typology",
        alt: "Godrej Kukatpally 4 BHK floor plate excerpt.",
      },
      {
        src: gallery.architecture1,
        caption: "Architectural detail",
        alt: "Godrej Kukatpally architectural detail render.",
      },
    ],
    wideCinematicFrame: {
      src: gallery.skylineWide,
      caption: "Skyline identity",
      alt: "Godrej Kukatpally twin towers — wide metropolitan render.",
    },
    wideCinematicCaption: "Renderings indicative — subject to final approvals and on-site verification.",
  },
  cinematicTownship: {
    sectionId: "cinematic-township",
    eyebrow: "Experience",
    headlineLines: ["Skyline", "Identity"],
    lead: "Twin towers shaping a distinctive metropolitan presence in KPHB.",
    poster: PLACEHOLDER_FRAME,
    attributionTail: "Visuals indicative.",
    fullCtaLabel: "Request walkthrough",
    videoUnavailable: "Walkthrough video — coming soon.",
    dialogTitle: "Project walkthrough",
    stills: [],
  },
  township: {
    heading: {
      eyebrow: "Masterplan",
      title: "Urban composition",
    },
    pillars: [],
  },
  specifications: {
    heading: {
      eyebrow: "Specifications",
      title: "Build quality",
    },
    snippets: [
      {
        heading: "Structure",
        items: ["RCC framed structure", "Earthquake-resistant design", "High-rise engineering standards"],
      },
      {
        heading: "Finishes",
        items: ["Premium flooring in living areas", "Designer bathroom fittings", "Modular kitchen provision"],
      },
      {
        heading: "Services",
        items: ["Power backup for common areas", "24/7 security & access control", "EV-ready parking provision"],
      },
    ],
  },
  location: {
    heading: {
      eyebrow: "Location",
      title: "KPHB · IT corridor",
    },
    facts: {
      addressLines: ["Godrej Kukatpally", "KPHB, Kukatpally", "Hyderabad, Telangana"],
      landmark: "Near NH-65 & KPHB Metro",
      lat: 17.494,
      lng: 78.399,
      proximity: [
        { label: "HITEC City", detail: "~8 min drive" },
        { label: "Mindspace", detail: "~5 min drive" },
      ],
      mapEmbedTitle: "Godrej Kukatpally location",
      mapCaption: "KPHB · Kukatpally · Hyderabad",
    },
    postalLabel: "Hyderabad, Telangana",
    connectivityLabel: "IT corridor connectivity",
    conciergeCtaLabel: "Request location pack",
  },
  ctaFooter: {
    eyebrow: "Concierge · private walkthroughs",
    title: "Elevate your city living journey.",
    lead: "Call, WhatsApp, or the discreet form — each channel tuned for metropolitan buyers and NRIs.",
    returnCtaLabel: "Return to prelude",
    copyrightSuffix: "Authorized channel partner microsite",
  },
  trust: godrejKukatpallyTrustContent,
};
