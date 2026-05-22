import type { GalleryContent, MediaFrame } from "@/lib/content/types";
import { prestigeKollurMediaManifest } from "@/projects/prestige-kollur/media-manifest";
import { OFFICIAL_SITE_MEDIA_ATTRIBUTION } from "@/projects/prestige-kollur/content/amenities";

const { paths } = prestigeKollurMediaManifest;

const GALLERY_LIFESTYLE_FRAMES: MediaFrame[] = [
  {
    src: paths.bannerTower,
    caption: "Tower nightfall · campaign render",
    alt: "Prestige Kollur towers at dusk—official campaign visualization.",
  },
  {
    src: paths.bannerPool,
    caption: "Aerial aquatics · central grove",
    alt: "Aerial view of the township pool and landscaped courtyard—campaign imagery.",
  },
  {
    src: paths.bannerExterior,
    caption: "Façade elevation · luminous dusk",
    alt: "Exterior elevation render of Prestige Kollur towers—campaign artwork.",
  },
  {
    src: paths.planApartment,
    caption: "Residence vignette · sky-villa narrative",
    alt: "Official campaign interior vignette illustration for sky-villas.",
  },
];

const GALLERY_PLATES_FRAMES: MediaFrame[] = [
  {
    src: paths.planMaster,
    caption: "Integrated master plan",
    alt: "Official Prestige Kollur master plan illustration.",
  },
  {
    src: paths.plan4bhk2900,
    caption: "Typical sky-villa plate (~2,900 sq. ft.)",
    alt: "Official Prestige Kollur floor plate excerpt for a four-bedroom residence.",
  },
  {
    src: paths.plan3bhk2462,
    caption: "Expanded three-bedroom choreography (~2,462 sq. ft.)",
    alt: "Official Prestige Kollur floor plan excerpt for a three-bedroom residence.",
  },
  {
    src: paths.planLocation,
    caption: "Location & territorial read",
    alt: "Official Prestige Kollur location map graphic from the campaign site.",
  },
];

/** Env override for partner lifestyle gallery — mirrors legacy `getGalleryLifestyleFrames`. */
export function resolveGalleryLifestyleFrames(): MediaFrame[] {
  const raw = process.env.NEXT_PUBLIC_PARTNER_LIFESTYLE_GALLERY_WEBPS?.trim();
  if (raw === undefined || raw.length === 0) {
    return GALLERY_LIFESTYLE_FRAMES;
  }

  const pathList = raw.split(",").map((s) => s.trim()).filter((s) => s.length > 0);
  if (pathList.length === 0) return GALLERY_LIFESTYLE_FRAMES;

  return pathList.map((src, index) => ({
    src,
    caption:
      pathList.length <= 4 ? `Partner showcase ${index + 1}` : `Campaign still ${index + 1}`,
    alt: `Prestige Kollur partner-hosted lifestyle still ${index + 1}.`,
  }));
}

export const prestigeKollurGalleryContent: GalleryContent = {
  heading: {
    eyebrow: "Gallery",
    title: "Lifestyle choreography first — plans anchored below.",
    lead: `Elevations and amenity vignettes stay together; sanctioned master-plan, carpet plates, and the territorial graphic read as deliberate documentation (not misplaced “cinema”). ${OFFICIAL_SITE_MEDIA_ATTRIBUTION}`,
  },
  lifestyleHeading: "Lifestyle & aerial renders",
  lifestyleLead:
    "Curated elevations, aquatics, and interior vignettes. To swap in selects from your previous brochure site, mirror WebPs under public/media/partner/, then comma-list their public paths in .env.local using the companion variable documented in .env.example (CDN URLs also work after you allow the hostnames in Next image config).",
  platesHeading: "Sanctioned plans & territorial plate",
  platesLead:
    "Architectural plates and GIS-style reads borrowed from Prestige-published collateral—they stay visually grouped here so township storytelling upstream can stay atmospheric.",
  lifestyleFrames: GALLERY_LIFESTYLE_FRAMES,
  platesFrames: GALLERY_PLATES_FRAMES,
  wideCinematicFrame: {
    src: paths.bannerPool,
    caption: "Aquatics-led spine · wide campaign frame",
    alt: "Wide aerial of the Prestige Kollur township pool and grove spine—campaign artwork.",
  },
  wideCinematicCaption:
    "Wide cinematic frame retained for tonal continuity—paired with labelled plan rows above instead of collapsing every asset into one “cinema” grid.",
};
