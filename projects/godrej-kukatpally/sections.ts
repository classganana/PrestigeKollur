import type { SectionManifest } from "@/lib/project/section-types";

/**
 * Example manifest for Godrej Kukatpally — cooler urban rhythm when the project ships.
 * Register in `PROJECT_REGISTRY` + swap `NEXT_PUBLIC_PROJECT_SLUG` to activate.
 */
export const godrejKukatpallySectionManifest: SectionManifest = [
  { id: "hero", variant: "urban" },
  { id: "overview" },
  { id: "connectivity", enabled: true },
  { id: "amenities" },
  { id: "pricing" },
  { id: "floor-plans" },
  { id: "cinematic-township" },
  { id: "gallery" },
  { id: "payments", enabled: false },
  { id: "documents" },
  { id: "township", enabled: false },
  { id: "specifications" },
  { id: "location" },
  { id: "cta-footer" },
];
