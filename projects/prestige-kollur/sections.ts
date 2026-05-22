import type { SectionManifest } from "@/lib/project/section-types";

/**
 * Prestige Kollur home page composition — mirrors the legacy hardcoded order.
 * Reorder rows or set `enabled: false` to change pacing without touching shared sections.
 */
export const prestigeKollurSectionManifest: SectionManifest = [
  { id: "hero", variant: "editorial" },
  { id: "overview" },
  // { id: "storytelling", enabled: true }, — optional narrative band after overview
  { id: "amenities" },
  { id: "pricing" },
  { id: "floor-plans" },
  { id: "payments" },
  { id: "documents" },
  { id: "connectivity", enabled: true },
  { id: "cinematic-township" },
  { id: "township" },
  { id: "specifications" },
  { id: "gallery" },
  { id: "location" },
  { id: "cta-footer" },
];
