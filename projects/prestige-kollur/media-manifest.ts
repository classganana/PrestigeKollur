import type { StaticImageData } from "next/image";

import { PROJECT_MEDIA_ROOT } from "@/lib/project/media-paths";

import heroCampaign from "@/public/media/official/banner-exterior.webp";

const root = PROJECT_MEDIA_ROOT["prestige-kollur"];

/**
 * Centralized media keys for Prestige Kollur — sections reference manifest entries, not ad-hoc imports.
 */
export const prestigeKollurMediaManifest = {
  root,
  hero: {
    campaign: heroCampaign satisfies StaticImageData,
  },
  paths: {
    bannerTower: `${root}/banner-tower.webp`,
    bannerPool: `${root}/banner-pool.webp`,
    bannerExterior: `${root}/banner-exterior.webp`,
    planApartment: `${root}/plan-apartment.webp`,
    planMaster: `${root}/plan-master.webp`,
    plan4bhk2900: `${root}/plan-4bhk-2900.webp`,
    plan3bhk2462: `${root}/plan-3bhk-2462.webp`,
    planLocation: `${root}/plan-location.webp`,
    planAbout: `${root}/plan-about.webp`,
    plan2bhk1281: `${root}/plan-2bhk-1281.webp`,
    plan3bhk1516: `${root}/plan-3bhk-1516.webp`,
    townshipFlythroughDefault: "/media/township/flythrough.mp4",
  },
} as const;

export type PrestigeKollurMediaManifest = typeof prestigeKollurMediaManifest;
