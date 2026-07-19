import type { StaticImageData } from "next/image";

import { PROJECT_MEDIA_ROOT } from "@/lib/project/media-paths";

import heroCampaign from "@/public/media/golden-doors/hero-landing.jpg";

const root = PROJECT_MEDIA_ROOT["golden-doors"];

/**
 * Centralized media keys for Golden Doors — sections reference manifest entries.
 */
export const goldenDoorsMediaManifest = {
  root,
  hero: {
    campaign: heroCampaign satisfies StaticImageData,
  },
  paths: {
    heroLanding: `${root}/hero-landing.jpg`,
    prestigeCard: `${root}/projects/prestige-kollur.webp`,
    godrejCard: `${root}/projects/godrej-kukatpally.webp`,
    logoFull: `${root}/logo-full.png`,
    logoCompact: `${root}/logo-compact.png`,
    logoHorizontal: `${root}/logo-horizontal.png`,
    logoIcon: `${root}/logo-icon.png`,
  },
} as const;

export type GoldenDoorsMediaManifest = typeof goldenDoorsMediaManifest;
