import type { SectionDefinition, SectionId, SectionManifest, SectionManifestEntry } from "@/lib/project/section-types";

/** Registry metadata — component loaders live in `render-sections.tsx`. */
export const SECTION_DEFINITIONS: Record<SectionId, SectionDefinition> = {
  hero: { id: "hero", contentKey: "hero", load: "static" },
  overview: { id: "overview", contentKey: "overview", load: "static" },
  storytelling: { id: "storytelling", contentKey: "storytelling", load: "dynamic" },
  amenities: { id: "amenities", contentKey: "amenities", load: "static" },
  pricing: { id: "pricing", contentKey: "pricing", load: "static" },
  "floor-plans": { id: "floor-plans", contentKey: "floorPlans", load: "static" },
  payments: { id: "payments", contentKey: "paymentEoi", load: "static" },
  documents: { id: "documents", contentKey: "documents", load: "static" },
  connectivity: { id: "connectivity", contentKey: "connectivity", load: "static" },
  "cinematic-township": {
    id: "cinematic-township",
    contentKey: "cinematicTownship",
    load: "dynamic",
  },
  township: { id: "township", contentKey: "township", load: "static" },
  specifications: { id: "specifications", contentKey: "specifications", load: "static" },
  gallery: { id: "gallery", contentKey: "gallery", load: "dynamic" },
  location: { id: "location", contentKey: "location", load: "static" },
  "cta-footer": { id: "cta-footer", contentKey: "ctaFooter", load: "static" },
};

const KNOWN_SECTION_IDS = Object.keys(SECTION_DEFINITIONS) as SectionId[];

export function isSectionId(value: string): value is SectionId {
  return (KNOWN_SECTION_IDS as string[]).includes(value);
}

/** Drop disabled rows and unknown ids (throws in dev for typos). */
export function normalizeSectionManifest(manifest: SectionManifest): SectionManifestEntry[] {
  return manifest
    .filter((entry) => entry.enabled !== false)
    .map((entry) => {
      if (!isSectionId(entry.id)) {
        throw new Error(
          `Unknown section id "${entry.id}". Known sections: ${KNOWN_SECTION_IDS.join(", ")}.`,
        );
      }

      return entry;
    });
}

export function getSectionDefinition(id: SectionId): SectionDefinition {
  return SECTION_DEFINITIONS[id];
}
