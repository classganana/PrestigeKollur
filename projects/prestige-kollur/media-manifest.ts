import type { StaticImageData } from "next/image";

import heroCampaign from "@/public/media/official/banner-exterior.webp";

/**
 * Centralized media keys for Prestige Kollur — sections reference manifest entries, not ad-hoc imports.
 */
export const prestigeKollurMediaManifest = {
  hero: {
    campaign: heroCampaign satisfies StaticImageData,
  },
  paths: {
    bannerTower: "/media/official/banner-tower.webp",
    bannerPool: "/media/official/banner-pool.webp",
    bannerExterior: "/media/official/banner-exterior.webp",
    planApartment: "/media/official/plan-apartment.webp",
    planMaster: "/media/official/plan-master.webp",
    plan4bhk2900: "/media/official/plan-4bhk-2900.webp",
    plan3bhk2462: "/media/official/plan-3bhk-2462.webp",
    planLocation: "/media/official/plan-location.webp",
    planAbout: "/media/official/plan-about.webp",
    plan2bhk1281: "/media/official/plan-2bhk-1281.webp",
    plan3bhk1516: "/media/official/plan-3bhk-1516.webp",
    townshipFlythroughDefault: "/media/township/flythrough.mp4",
  },
} as const;

export type PrestigeKollurMediaManifest = typeof prestigeKollurMediaManifest;
