import type { StaticImageData } from "next/image";

import { PROJECT_MEDIA_ROOT } from "@/lib/project/media-paths";

import heroCampaign from "@/public/media/godrej-kukatpally/hero-landing.webp";

const root = PROJECT_MEDIA_ROOT["godrej-kukatpally"];

/**
 * Godrej Kukatpally — isolated metropolitan media registry.
 * All paths live under `/media/godrej-kukatpally/` (never `/media/official/`).
 */
export const godrejKukatpallyMediaManifest = {
  root,
  hero: {
    campaign: heroCampaign satisfies StaticImageData,
  },
  paths: {
    heroLanding: `${root}/hero-landing.webp`,
    towersElevation: `${root}/towers-elevation.webp`,
    masterPlan: `${root}/master-plan.webp`,
    clubhouseAmenity: `${root}/clubhouse-amenity.webp`,
    floorPlan3bhk: `${root}/floor-plans/floor-3bhk.jpg`,
    floorPlan4bhk: `${root}/floor-plans/floor-4bhk.jpg`,
    gallery: {
      lifestyle1: `${root}/gallery/lifestyle-1.webp`,
      lifestyle2: `${root}/gallery/lifestyle-2.webp`,
      lifestyle3: `${root}/gallery/lifestyle-3.webp`,
      lifestyle4: `${root}/gallery/lifestyle-4.webp`,
      lifestyle5: `${root}/gallery/lifestyle-5.webp`,
      lifestyle6: `${root}/gallery/lifestyle-6.webp`,
      lifestyle7: `${root}/gallery/lifestyle-7.webp`,
      lifestyle8: `${root}/gallery/lifestyle-8.webp`,
      architecture1: `${root}/gallery/architecture-1.webp`,
      skylineWide: `${root}/gallery/skyline-wide.webp`,
    },
  },
} as const;

export type GodrejKukatpallyMediaManifest = typeof godrejKukatpallyMediaManifest;

/** Flat path list for isolation audits and SEO fallbacks. */
export const godrejKukatpallyMediaPaths = [
  godrejKukatpallyMediaManifest.paths.heroLanding,
  godrejKukatpallyMediaManifest.paths.towersElevation,
  godrejKukatpallyMediaManifest.paths.masterPlan,
  godrejKukatpallyMediaManifest.paths.clubhouseAmenity,
  godrejKukatpallyMediaManifest.paths.floorPlan3bhk,
  godrejKukatpallyMediaManifest.paths.floorPlan4bhk,
  ...Object.values(godrejKukatpallyMediaManifest.paths.gallery),
] as const;
