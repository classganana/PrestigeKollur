/**
 * @deprecated Import from `@/projects/prestige-kollur/content/cinematic-township` or `resolveContent().cinematicTownship`.
 */
import { prestigeKollurCinematicTownshipContent as _c } from "@/projects/prestige-kollur/content/cinematic-township";

export {
  normalizeTownshipFlythroughCloudinarySrc,
  resolveTownshipFlythroughSrc,
  townshipFlythroughMimeType,
} from "@/lib/content/township-video";

export const CINEMATIC_TOWNSHIP_SECTION_ID = _c.sectionId;
export const CINEMATIC_TOWNSHIP_EYEBROW = _c.eyebrow;
export const CINEMATIC_TOWNSHIP_HEADLINE_LINES = _c.headlineLines;
export const CINEMATIC_TOWNSHIP_LEAD = _c.lead;
export const CINEMATIC_TOWNSHIP_POSTER = _c.poster;
export const CINEMATIC_TOWNSHIP_ATTRIBUTION_TAIL = _c.attributionTail;
export const CINEMATIC_TOWNSHIP_FULL_CTA_LABEL = _c.fullCtaLabel;
export const CINEMATIC_TOWNSHIP_VIDEO_UNAVAILABLE = _c.videoUnavailable;
export const CINEMATIC_TOWNSHIP_DIALOG_TITLE = _c.dialogTitle;
export const CINEMATIC_TOWNSHIP_STILLS = _c.stills;

export type { CinematicTownshipStill } from "@/lib/content/types";
