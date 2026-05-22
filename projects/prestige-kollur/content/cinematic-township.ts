import type { CinematicTownshipContent } from "@/lib/content/types";
import { prestigeKollurMediaManifest } from "@/projects/prestige-kollur/media-manifest";
import { OFFICIAL_SITE_MEDIA_ATTRIBUTION } from "@/projects/prestige-kollur/content/amenities";

const { paths } = prestigeKollurMediaManifest;

const townshipPosterAlt =
  "Twilight township massing layered with grove foreground lighting and sculpted architectural curves.";

export const prestigeKollurCinematicTownshipContent: CinematicTownshipContent = {
  sectionId: "township-cinematic",
  eyebrow: "Township · Cinematic immersion",
  headlineLines: [
    "Experience a township",
    "designed around light,",
    "movement, and stillness.",
  ],
  lead: "A whispered glide through groves, commons, and massing choreography—composed as atmosphere, lifted from campaign-grade stills.",
  poster: {
    src: paths.bannerTower,
    alt: townshipPosterAlt,
    caption: "Campaign render · tonal mood for township fly-through",
  },
  attributionTail: OFFICIAL_SITE_MEDIA_ATTRIBUTION,
  fullCtaLabel: "Watch full experience",
  videoUnavailable:
    "Township footage is syncing to this canvas—poster frames remain illustrative until delivery.",
  dialogTitle: "Township cinematic experience",
  stills: [
    { key: "commons", src: paths.bannerPool, caption: "Aquatic commons" },
    { key: "architecture", src: paths.bannerExterior, caption: "Dusk elevations" },
    { key: "grain", src: paths.bannerTower, caption: "Tower silhouette" },
    { key: "ribbon", src: paths.planApartment, caption: "Sky-villa vignette" },
  ],
};
