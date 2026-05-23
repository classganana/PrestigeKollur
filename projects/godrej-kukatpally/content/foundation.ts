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
  src: godrejKukatpallyMediaManifest.paths.bannerExterior,
  caption: "Rendering — subject to final approvals.",
  alt: "Godrej Kukatpally — architectural rendering.",
} as const;

const { paths } = godrejKukatpallyMediaManifest;

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
    tiles: [],
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
        src: paths.bannerTower,
        caption: "Twin towers · skyline presence",
        alt: "Godrej Kukatpally twin towers — campaign elevation render.",
      },
      {
        src: paths.bannerExterior,
        caption: "Façade · metropolitan elevation",
        alt: "Godrej Kukatpally exterior elevation — campaign render.",
      },
      {
        src: paths.planAbout,
        caption: "Estate composition",
        alt: "Godrej Kukatpally estate overview — campaign illustration.",
      },
      {
        src: paths.planLocation,
        caption: "KPHB · corridor context",
        alt: "Godrej Kukatpally location and corridor map graphic.",
      },
    ],
    platesFrames: [
      {
        src: paths.planMaster,
        caption: "Master plan",
        alt: "Godrej Kukatpally master plan illustration.",
      },
      {
        src: paths.planApartment,
        caption: "Residence typology",
        alt: "Godrej Kukatpally apartment plate excerpt.",
      },
    ],
    wideCinematicFrame: {
      src: paths.bannerTower,
      caption: "Skyline identity",
      alt: "Godrej Kukatpally twin towers — wide campaign render.",
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
