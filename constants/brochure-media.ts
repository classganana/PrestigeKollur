/**
 * @deprecated Import from `@/projects/prestige-kollur/content/*` or `resolveContent()`.
 */
import { prestigeKollurAmenitiesContent } from "@/projects/prestige-kollur/content/amenities";
import { prestigeKollurConnectivityContent } from "@/projects/prestige-kollur/content/connectivity";
import { prestigeKollurGalleryContent, resolveGalleryLifestyleFrames } from "@/projects/prestige-kollur/content/gallery";
import { prestigeKollurStorytellingContent } from "@/projects/prestige-kollur/content/storytelling";

export const OFFICIAL_SITE_MEDIA_ATTRIBUTION = prestigeKollurAmenitiesContent.mediaAttribution;

export type { MediaFrame as MediaGalleryFrame } from "@/lib/content/types";

export const GALLERY_LIFESTYLE_FRAMES = prestigeKollurGalleryContent.lifestyleFrames;
export const GALLERY_PLATES_FRAMES = prestigeKollurGalleryContent.platesFrames;
export const GALLERY_WIDE_CINEMATIC_FRAME = prestigeKollurGalleryContent.wideCinematicFrame;

export const STORY_FRAME = prestigeKollurStorytellingContent.storyFrame;
export const STORY_IMMERSIVE_FRAME = prestigeKollurStorytellingContent.immersiveFrame;

export const AMENITIES_RIBBON = prestigeKollurAmenitiesContent.ribbon;

export const CONNECTIVITY_MAP_FRAME = prestigeKollurConnectivityContent.mapFrame;

export { resolveGalleryLifestyleFrames as getGalleryLifestyleFrames };
