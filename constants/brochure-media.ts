/**
 * Campaign WebP stills — mirrored under `public/media/official/` from
 * https://www.prestigegoldengrove.live/ (clean masters; no brochure page gutters).
 */

export const OFFICIAL_SITE_MEDIA_ATTRIBUTION =
  "Imagery reproduced from the Prestige-published campaign portal (prestigegoldengrove.live) as WebP masters—without brochure pagination overlays.";

export type MediaGalleryFrame = {
  src: string;
  caption: string;
  alt: string;
};

/** Lifestyle / render frames only — avoids mixing elevations with CAD plates under “cinematic”. */
export const GALLERY_LIFESTYLE_FRAMES: MediaGalleryFrame[] = [
  {
    src: "/media/official/banner-tower.webp",
    caption: "Tower nightfall · campaign render",
    alt: "Prestige Kollur towers at dusk—official campaign visualization.",
  },
  {
    src: "/media/official/banner-pool.webp",
    caption: "Aerial aquatics · central grove",
    alt: "Aerial view of the township pool and landscaped courtyard—campaign imagery.",
  },
  {
    src: "/media/official/banner-exterior.webp",
    caption: "Façade elevation · luminous dusk",
    alt: "Exterior elevation render of Prestige Kollur towers—campaign artwork.",
  },
  {
    src: "/media/official/plan-apartment.webp",
    caption: "Residence vignette · sky-villa narrative",
    alt: "Official campaign interior vignette illustration for sky-villas.",
  },
];

/** Master plan, floor excerpts, territorial map — shown as a labelled band below cinematic stills. */
export const GALLERY_PLATES_FRAMES: MediaGalleryFrame[] = [
  {
    src: "/media/official/plan-master.webp",
    caption: "Integrated master plan",
    alt: "Official Prestige Kollur master plan illustration.",
  },
  {
    src: "/media/official/plan-4bhk-2900.webp",
    caption: "Typical sky-villa plate (~2,900 sq. ft.)",
    alt: "Official Prestige Kollur floor plate excerpt for a four-bedroom residence.",
  },
  {
    src: "/media/official/plan-3bhk-2462.webp",
    caption: "Expanded three-bedroom choreography (~2,462 sq. ft.)",
    alt: "Official Prestige Kollur floor plan excerpt for a three-bedroom residence.",
  },
  {
    src: "/media/official/plan-location.webp",
    caption: "Location & territorial read",
    alt: "Official Prestige Kollur location map graphic from the campaign site.",
  },
];

/**
 * Optional overrides: comma-separated public paths (/media/partner/foo.webp,...).
 * Remote HTTPS URLs need `remotePatterns` in next.config.ts.
 */
export function getGalleryLifestyleFrames(): MediaGalleryFrame[] {
  const raw = process.env.NEXT_PUBLIC_PARTNER_LIFESTYLE_GALLERY_WEBPS?.trim();
  if (raw === undefined || raw.length === 0) {
    return GALLERY_LIFESTYLE_FRAMES;
  }

  const paths = raw.split(",").map((s) => s.trim()).filter((s) => s.length > 0);
  if (paths.length === 0) return GALLERY_LIFESTYLE_FRAMES;

  return paths.map((src, index) => ({
    src,
    caption:
      paths.length <= 4
        ? `Partner showcase ${index + 1}`
        : `Campaign still ${index + 1}`,
    alt: `Prestige Kollur partner-hosted lifestyle still ${index + 1}.`,
  }));
}

export const GALLERY_WIDE_CINEMATIC_FRAME: MediaGalleryFrame = {
  src: "/media/official/banner-pool.webp",
  caption: "Aquatics-led spine · wide campaign frame",
  alt: "Wide aerial of the Prestige Kollur township pool and grove spine—campaign artwork.",
};

export const STORY_FRAME = {
  src: "/media/official/plan-about.webp",
  alt: "Campaign still summarising Prestige Kollur positioning and township scale.",
} as const;

export const STORY_IMMERSIVE_FRAME = {
  src: "/media/official/banner-tower.webp",
  alt: "Twilight township towers with grove foreground lighting—official campaign visualization.",
} as const;

export const AMENITIES_RIBBON = {
  src: "/media/official/banner-pool.webp",
  alt: "Resort-grade aquatics and landscaped spine from the Prestige Kollur campaign library.",
  ribbonCaption: "Campaign amenity ribbon · aquatics-led spine",
} as const;

export const CONNECTIVITY_MAP_FRAME = {
  src: "/media/official/plan-location.webp",
  alt: "Official Prestige Kollur location map graphic for arrival and corridor context.",
  atlasMicroline: "Campaign location plate",
} as const;
