import type { StaticImageData } from "next/image";

import heroCampaign from "@/public/media/official/banner-exterior.webp";

/**
 * Godrej Kukatpally media manifest.
 * Phase 2 maps placeholder paths by category — swap with project assets when available.
 */
export const godrejKukatpallyMediaManifest = {
  hero: {
    /** Skyline / tower elevation — replace with night render when asset ships */
    campaign: heroCampaign satisfies StaticImageData,
  },
  paths: {
    /** Twin-tower elevation & night architecture */
    bannerTower: "/media/official/banner-tower.webp",
    bannerExterior: "/media/official/banner-exterior.webp",
    /** Location & corridor context */
    planLocation: "/media/official/plan-location.webp",
    planMaster: "/media/official/plan-master.webp",
    planApartment: "/media/official/plan-apartment.webp",
    planAbout: "/media/official/plan-about.webp",
  },
} as const;

export type GodrejKukatpallyMediaManifest = typeof godrejKukatpallyMediaManifest;
