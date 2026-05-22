import type { ProjectContentPack } from "@/lib/content/types";

/** Stable section identifiers — align with DOM `id` where applicable. */
export type SectionId =
  | "hero"
  | "overview"
  | "storytelling"
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
  | "cta-footer";

/** Maps manifest `id` → `ProjectContentPack` key. */
export type SectionContentKey = {
  hero: "hero";
  overview: "overview";
  storytelling: "storytelling";
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
  "cta-footer": "ctaFooter";
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
