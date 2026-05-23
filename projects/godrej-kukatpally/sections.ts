import type { SectionManifest } from "@/lib/project/section-types";

/**
 * Godrej Kukatpally — metropolitan campaign rhythm.
 * Phase 3: authority highlights, corridor connectivity, lifestyle amenities, trust layer.
 * Disabled: township/cinematic (retreat pacing), payments/documents (reduce clutter).
 */
export const godrejKukatpallySectionManifest: SectionManifest = [
  { id: "hero", variant: "urban" },
  { id: "storytelling", variant: "urban" },
  { id: "highlights", variant: "urban" },
  { id: "overview", variant: "urban" },
  { id: "connectivity", variant: "corridor", enabled: true },
  { id: "amenities", variant: "urban" },
  { id: "pricing" },
  { id: "floor-plans" },
  { id: "gallery" },
  { id: "specifications" },
  { id: "location" },
  { id: "trust", variant: "urban" },
  { id: "cta-footer" },
];
