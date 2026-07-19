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

/** Metropolitan amenities — lifestyle pillar (urban variant). */
export type AmenityLifestylePillar = {
  eyebrow: string;
  title: string;
  lead: string;
  highlights: readonly string[];
  icon: AmenityIconKey;
};

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

export type HeroHighlightPill = {
  value: string;
  label: string;
};

export type HeroContent = {
  campaignImage: StaticImageData;
  campaignImageAlt: string;
  /** Urban variant — concise stat row beneath the title. */
  highlights?: readonly HeroHighlightPill[];
  /** When set, replaces `site.heroComposerNoteTemplate` in the hero glass panel. */
  composerNote?: string;
  exploreCta?: { label: string; href: string };
  /** Brand-hub — text paths from the hero CTA panel. */
  servicesLink?: { label: string; href: string };
  clientsLink?: { label: string; href: string };
  skipAheadLink?: { label: string; href: string; note: string };
  footnote?: string;
  /** CSS `object-position` for campaign plate — e.g. tower skyline focal point. */
  imageFocus?: string;
  /** Campaign hero — single-line spec strip below CTAs (no floating pills). */
  campaignSpecLine?: string;
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
  /** Urban variant — editorial lifestyle pillars replace dense icon grids. */
  lifestylePillars?: readonly AmenityLifestylePillar[];
  experienceQuote?: string;
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

export type ConnectivityCorridorDestination = {
  name: string;
  detail?: string;
};

/** Tiered distance band — used by `connectivity` section `corridor` variant. */
export type ConnectivityCorridorTier = {
  tierBand: string;
  tierLabel: string;
  destinations: readonly ConnectivityCorridorDestination[];
};

/** Curated corridor map node — percentage positions within the atlas plate. */
export type ConnectivityMapNode = {
  label: string;
  x: string;
  y: string;
  role?: "anchor" | "node";
};

export type ConnectivityMapFrame = MediaFrame & {
  atlasMicroline: string;
  /** CSS object-position for source map imagery */
  imageFocus?: string;
  /**
   * `map` — desaturated location plate with overlay nodes (Prestige-style collateral).
   * `render` — architectural / corridor context; no map pins or heavy scrims.
   */
  atlasVariant?: "map" | "render";
};

export type ConnectivityContent = {
  eyebrow: string;
  headlineLines: readonly string[];
  lead: string;
  metricsDisclaimer: string;
  primaryMetrics: ConnectivityPrimaryMetric[];
  essentialMetrics: ConnectivityEssentialMetric[];
  mapFrame: ConnectivityMapFrame;
  imageCaption: string;
  atlasNote: string;
  ctaSupport: string;
  /** Corridor variant — editorial distance tiers (IT corridor, metro, ORR). */
  corridorTiers?: readonly ConnectivityCorridorTier[];
  essentialClusterLabel?: string;
  mapEyebrow?: string;
  /** Highlighted infrastructure nodes overlaid on curated map plate */
  mapNodes?: readonly ConnectivityMapNode[];
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
  /** Urban variant — aspirational lifestyle chapters below the narrative bridge. */
  lifestyleChapters?: readonly { label: string; headline: string; copy: string }[];
};

export type ProjectHighlightMetric = {
  figure: string;
  suffix?: string;
  label: string;
  note: string;
};

export type ProjectHighlightPillar = {
  title: string;
  copy: string;
};

export type HighlightsContent = {
  eyebrow: string;
  headlineLines: readonly string[];
  lead: string;
  metrics: readonly ProjectHighlightMetric[];
  pillars: readonly ProjectHighlightPillar[];
  positioningLine?: string;
  mediaAttribution?: string;
};

export type TrustCredential = {
  figure: string;
  label: string;
};

export type TrustContent = {
  eyebrow: string;
  headline: string;
  lead: string;
  reraStatus: ReraStatusContent;
  developerNote: string;
  credentials: readonly TrustCredential[];
  disclaimer: string;
};

/** Brand-hub portfolio card — links to an external project microsite. */
export type PortfolioProjectCard = {
  /** Stable id for analytics / form picker (often a ProjectSlug). */
  id: string;
  name: string;
  location: string;
  configuration: string;
  priceBand: string;
  highlights: readonly string[];
  imageSrc: string;
  imageAlt: string;
  externalUrl: string;
  developerName: string;
  badge?: string;
};

export type ProjectPortfolioContent = {
  heading: SectionHeadingContent;
  projects: readonly PortfolioProjectCard[];
  viewProjectLabel: string;
  expressInterestLabel: string;
};

export type AboutBrandStat = {
  figure: string;
  label: string;
};

export type AboutBrandContent = {
  heading: SectionHeadingContent;
  body: readonly string[];
  stats: readonly AboutBrandStat[];
  /** Optional in-page link to the hub services route. */
  servicesHref?: string;
  servicesLinkLabel?: string;
};

/** Slider bounds + defaults for the interactive home-loan EMI tool. */
export type EmiCalculatorDefaults = {
  propertyPrice: number;
  downPaymentPercent: number;
  interestRatePercent: number;
  tenureYears: number;
};

export type EmiCalculatorRanges = {
  propertyPrice: { min: number; max: number; step: number };
  downPaymentPercent: { min: number; max: number; step: number };
  interestRatePercent: { min: number; max: number; step: number };
  tenureYears: { min: number; max: number; step: number };
};

export type EmiCalculatorContent = {
  heading: SectionHeadingContent;
  defaults: EmiCalculatorDefaults;
  ranges: EmiCalculatorRanges;
  ctaLabel: string;
  disclaimer: string;
};

/**
 * Content pack for a deployable site.
 * Microsites fill project funnel sections; brand hubs fill portfolio / about.
 * Section manifests only render keys that are present.
 */
export type ProjectContentPack = {
  hero: HeroContent;
  ctaFooter: CtaFooterContent;
  overview?: OverviewContent;
  amenities?: AmenitiesContent;
  pricing?: PricingContent;
  paymentEoi?: PaymentEoiContent;
  documents?: DocumentsContent;
  connectivity?: ConnectivityContent;
  floorPlans?: FloorPlansContent;
  gallery?: GalleryContent;
  cinematicTownship?: CinematicTownshipContent;
  township?: TownshipContent;
  specifications?: SpecificationsContent;
  location?: LocationContent;
  storytelling?: StorytellingContent;
  highlights?: HighlightsContent;
  trust?: TrustContent;
  projectPortfolio?: ProjectPortfolioContent;
  about?: AboutBrandContent;
  emiCalculator?: EmiCalculatorContent;
};
