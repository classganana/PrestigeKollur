import { OFFICIAL_SITE_MEDIA_ATTRIBUTION } from "@/constants/brochure-media";

/**
 * Drop `flythrough.mp4` (or WEBM sibling) under `public/media/township/`,
 * or set `NEXT_PUBLIC_TOWNSHIP_FLYTHROUGH_SRC` to any public URL/CDN path.
 */

/** Prefer progressive MP4 delivery for Cloudinary `.mov` uploads so `<video>` works outside Safari. */
export function normalizeTownshipFlythroughCloudinarySrc(raw: string): string {
  const trimmed = raw.trim();

  if (trimmed.length === 0) return trimmed;

  if (!trimmed.startsWith("http://") && !trimmed.startsWith("https://")) {
    return trimmed;
  }

  try {
    const url = new URL(trimmed);

    if (url.hostname !== "res.cloudinary.com") return trimmed;

    let { pathname } = url;

    if (pathname.includes("f_mp4")) return trimmed;

    if (!pathname.includes("/video/upload/")) return trimmed;

    pathname = pathname.replace("/video/upload/", "/video/upload/f_mp4/");

    url.pathname = pathname;

    return url.toString();
  } catch {
    return trimmed;
  }
}

/** MIME hint for `<source type>` — normalized Cloudinary URLs may still end in `.mov` while serving MP4. */
export function townshipFlythroughMimeType(src: string): string {
  const lower = src.toLowerCase();

  if (lower.includes("/f_mp4") || lower.endsWith(".mp4")) return "video/mp4";

  if (lower.endsWith(".webm")) return "video/webm";

  if (lower.endsWith(".mov")) return "video/quicktime";

  return "video/mp4";
}

export function resolveTownshipFlythroughSrc(): string {
  const env = process.env.NEXT_PUBLIC_TOWNSHIP_FLYTHROUGH_SRC;

  const raw =
    typeof env === "string" && env.trim().length > 0
      ? env.trim()
      : "/media/township/flythrough.mp4";

  return normalizeTownshipFlythroughCloudinarySrc(raw);
}

export const CINEMATIC_TOWNSHIP_SECTION_ID = "township-cinematic";

export const CINEMATIC_TOWNSHIP_EYEBROW = "Township · Cinematic immersion";

/** Editorial pull — pacing matches multiline hero sections elsewhere. */

export const CINEMATIC_TOWNSHIP_HEADLINE_LINES = [
  "Experience a township",
  "designed around light,",
  "movement, and stillness.",
] as const;

export const CINEMATIC_TOWNSHIP_LEAD =
  "A whispered glide through groves, commons, and massing choreography—composed as atmosphere, lifted from campaign-grade stills.";

const townshipPosterAlt =
  "Twilight township massing layered with grove foreground lighting and sculpted architectural curves.";

/** Hero poster — twilight towers from the public campaign library. */
export const CINEMATIC_TOWNSHIP_POSTER = {
  src: "/media/official/banner-tower.webp",
  alt: townshipPosterAlt,
  caption: "Campaign render · tonal mood for township fly-through",
};

export const CINEMATIC_TOWNSHIP_ATTRIBUTION_TAIL = OFFICIAL_SITE_MEDIA_ATTRIBUTION;

export const CINEMATIC_TOWNSHIP_FULL_CTA_LABEL = "Watch full experience";

/** If the flyer asset is absent or CDN blocks playback. */

export const CINEMATIC_TOWNSHIP_VIDEO_UNAVAILABLE =
  "Township footage is syncing to this canvas—poster frames remain illustrative until delivery.";

export const CINEMATIC_TOWNSHIP_DIALOG_TITLE = "Township cinematic experience";

/** Curated editorial stills — distinct from township narrative cards downstream. */

export type CinematicTownshipStill = {
  key: string;
  src: string;
  caption: string;
};

export const CINEMATIC_TOWNSHIP_STILLS: CinematicTownshipStill[] = [
  {
    key: "commons",
    src: "/media/official/banner-pool.webp",
    caption: "Aquatic commons",
  },
  {
    key: "architecture",
    src: "/media/official/banner-exterior.webp",
    caption: "Dusk elevations",
  },
  {
    key: "grain",
    src: "/media/official/banner-tower.webp",
    caption: "Tower silhouette",
  },
  {
    key: "ribbon",
    src: "/media/official/plan-apartment.webp",
    caption: "Sky-villa vignette",
  },
];
