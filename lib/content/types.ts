import type { StaticImageData } from "next/image";
import type { ReactNode } from "react";

/** Shared section heading contract — presentation-only sections consume copy via props. */
export type SectionHeadingContent = {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
};

export type MediaFrame = {
  src: string;
  caption: string;
  alt: string;
};

export type HighlightStat = {
  figure: string;
  suffix?: string;
  label: string;
  note: string;
};

export type ReraStatusContent = {
  headline: string;
  lastUpdatedLabel: string;
  bullets: readonly string[];
  verifyHref: string;
  verifyLabel: string;
};

export type PricingRow = { variant: string; size: string; price: string };

export type ConfigurationRow = {
  variant: string;
  beds: string;
  sizes: string;
  suited: string;
  highlight: string;
};

export type SpecSnippet = { heading: string; items: string[] };

export type LocationFacts = {
  addressLines: readonly string[];
  landmark: string;
  lat: number;
  lng: number;
  proximity: ReadonlyArray<{ label: string; detail: string }>;
  mapEmbedTitle: string;
  mapCaption: string;
};

export type ConnectivityPrimaryMetric = {
  timeBand: string;
  headline: string;
  note: string;
};

export type ConnectivityEssentialMetric = {
  cluster: string;
  span: string;
  detail: string;
};

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

export type AmenityIconAtlasItem = { title: string; icon: AmenityIconKey };

export type AmenityStatBandItem = {
  figure: string;
  suffix?: string;
  label: string;
};

export type AmenityDetailCategory = {
  title: string;
  subtitle?: string;
  items: string[];
};

export type AmenityPeerComparisonRow = {
  feature: string;
  project: string;
  peers: string;
};

export type AmenityHighlight = { title: string; description: string };

export type FloorPlanTeaserTile = {
  src: string;
  series: string;
  sqft: string;
  alt: string;
};

export type DocumentTileContent = {
  title: string;
  description: string;
  browseHref?: string;
  browseCta?: string;
};

export type EoiProgramContent = {
  title: string;
  rateHint: string;
  opened: string;
  deposit: string;
  steps: readonly string[];
};

export type PaymentPlanContent = {
  title: string;
  rhythm: string;
  detail: string;
};

export type LoyaltyCreditContent = { title: string; body: string };

export type TownshipPillar = { heading: string; copy: string; detail: string };

export type EditorialStatistic = { figure: string; heading: string; note: string };

export type CinematicTownshipStill = { key: string; src: string; caption: string };

export type HeroContent = {
  campaignImage: StaticImageData;
  campaignImageAlt: string;
};

export type OverviewContent = {
  heading: SectionHeadingContent;
  jvLine: string;
  positioning: string;
  highlightStats: HighlightStat[];
  reraStatus: ReraStatusContent;
  signatureThesisLabel: string;
  keyUsps: string[];
};

export type AmenitiesRibbonContent = {
  src: string;
  alt: string;
  ribbonCaption: string;
  figureCaption: string;
};

export type AmenitiesPeerComparisonContent = {
  heading: string;
  lead: string;
  projectColumnLabel: string;
  peersColumnLabel: string;
  rows: AmenityPeerComparisonRow[];
};

export type AmenitiesContent = {
  mediaAttribution: string;
  ribbon: AmenitiesRibbonContent;
  heroBand: {
    eyebrow: string;
    title: string;
    lead: string;
  };
  iconAtlas: AmenityIconAtlasItem[];
  statsBand: AmenityStatBandItem[];
  detailCategories: AmenityDetailCategory[];
  peerComparison: AmenitiesPeerComparisonContent;
  mosaicFrames: MediaFrame[];
  footerNote: string;
};

export type PricingContent = {
  heading: SectionHeadingContent;
  configurationIntro: { title: string; lead: string };
  rows: PricingRow[];
  configurationRows: ConfigurationRow[];
  priceDisclaimer: string;
  conciergeCtaLabel: string;
};

export type PaymentEoiContent = {
  heading: SectionHeadingContent;
  eoiProgram: EoiProgramContent;
  paymentPlan: PaymentPlanContent;
  loyaltyCredit: LoyaltyCreditContent;
  conciergeCtaLabel: string;
};

export type DocumentsContent = {
  heading: SectionHeadingContent;
  tiles: DocumentTileContent[];
  masterPlanPagePath: string;
};

export type ConnectivityContent = {
  eyebrow: string;
  headlineLines: readonly string[];
  lead: string;
  metricsDisclaimer: string;
  primaryMetrics: ConnectivityPrimaryMetric[];
  essentialMetrics: ConnectivityEssentialMetric[];
  mapFrame: MediaFrame & { atlasMicroline: string };
  imageCaption: string;
  atlasNote: string;
  ctaSupport: string;
};

export type FloorPlansContent = {
  sectionId: string;
  heading: SectionHeadingContent;
  mediaAttribution: string;
  tiles: FloorPlanTeaserTile[];
  closingBand: {
    title: string;
    lead: string;
    tip: string;
  };
};

export type GalleryContent = {
  heading: SectionHeadingContent;
  lifestyleHeading: string;
  lifestyleLead: string;
  platesHeading: string;
  platesLead: string;
  lifestyleFrames: MediaFrame[];
  platesFrames: MediaFrame[];
  wideCinematicFrame: MediaFrame;
  wideCinematicCaption: string;
};

export type CinematicTownshipContent = {
  sectionId: string;
  eyebrow: string;
  headlineLines: readonly string[];
  lead: string;
  poster: MediaFrame;
  attributionTail: string;
  fullCtaLabel: string;
  videoUnavailable: string;
  dialogTitle: string;
  stills: CinematicTownshipStill[];
};

export type TownshipContent = {
  heading: SectionHeadingContent;
  pillars: TownshipPillar[];
};

export type SpecificationsContent = {
  heading: SectionHeadingContent;
  snippets: SpecSnippet[];
};

export type LocationContent = {
  heading: SectionHeadingContent;
  facts: LocationFacts;
  postalLabel: string;
  connectivityLabel: string;
  conciergeCtaLabel: string;
};

export type CtaFooterContent = {
  eyebrow: string;
  title: string;
  lead: string;
  returnCtaLabel: string;
  copyrightSuffix: string;
};

export type StorytellingContent = {
  mediaAttribution: string;
  eyebrow: string;
  eyebrowMobile: string;
  primaryHeadline: { lines: readonly string[] };
  openingLines: readonly string[];
  bridgeQuote: string;
  riverLines: readonly string[];
  immersedLine: string;
  shoulderLine: string;
  editorialStats: EditorialStatistic[];
  storyFrame: MediaFrame;
  immersiveFrame: MediaFrame;
};

/** Optional sections for future home ordering — omit from page until wired. */
export type ProjectContentPack = {
  hero: HeroContent;
  overview: OverviewContent;
  amenities: AmenitiesContent;
  pricing: PricingContent;
  paymentEoi: PaymentEoiContent;
  documents: DocumentsContent;
  connectivity: ConnectivityContent;
  floorPlans: FloorPlansContent;
  gallery: GalleryContent;
  cinematicTownship: CinematicTownshipContent;
  township: TownshipContent;
  specifications: SpecificationsContent;
  location: LocationContent;
  ctaFooter: CtaFooterContent;
  storytelling?: StorytellingContent;
};
