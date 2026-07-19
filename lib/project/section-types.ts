import type { ProjectContentPack } from "@/lib/content/types";

/** Stable section identifiers — align with DOM `id` where applicable. */
export type SectionId =
  | "hero"
  | "overview"
  | "storytelling"
  | "highlights"
  | "amenities"
  | "pricing"
  | "floor-plans"
  | "payments"
  | "documents"
  | "connectivity"
  | "cinematic-township"
  | "township"
  | "specifications"
  | "gallery"
  | "location"
  | "trust"
  | "cta-footer"
  | "project-portfolio"
  | "about"
  | "emi-calculator";

/** Maps manifest `id` → `ProjectContentPack` key. */
export type SectionContentKey = {
  hero: "hero";
  overview: "overview";
  storytelling: "storytelling";
  highlights: "highlights";
  amenities: "amenities";
  pricing: "pricing";
  "floor-plans": "floorPlans";
  payments: "paymentEoi";
  documents: "documents";
  connectivity: "connectivity";
  "cinematic-township": "cinematicTownship";
  township: "township";
  specifications: "specifications";
  gallery: "gallery";
  location: "location";
  trust: "trust";
  "cta-footer": "ctaFooter";
  "project-portfolio": "projectPortfolio";
  about: "about";
  "emi-calculator": "emiCalculator";
};

export type SectionContentForId<I extends SectionId> = SectionContentKey[I] extends keyof ProjectContentPack
  ? NonNullable<ProjectContentPack[SectionContentKey[I]]>
  : never;

/**
 * One row in a project page manifest.
 * `enabled: false` omits the section; omit `enabled` to default on.
 */
export type SectionManifestEntry = {
  id: SectionId;
  enabled?: boolean;
  /** Reserved for future layout/copy variants — passed through to the section when supported. */
  variant?: string;
};

export type SectionManifest = SectionManifestEntry[];

export type SectionLoadStrategy = "static" | "dynamic";

export type SectionDefinition = {
  id: SectionId;
  contentKey: SectionContentKey[SectionId];
  load: SectionLoadStrategy;
};
