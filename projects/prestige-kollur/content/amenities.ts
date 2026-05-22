import type { AmenitiesContent } from "@/lib/content/types";
import {
  AMENITIES_DETAIL_CATEGORIES,
  AMENITIES_ICON_ATLAS,
  AMENITIES_MOSAIC_FRAMES,
  AMENITIES_PEER_COMPARISON,
  AMENITIES_STATS_BAND,
} from "@/projects/prestige-kollur/project-facts";
import { prestigeKollurMediaManifest } from "@/projects/prestige-kollur/media-manifest";

const { paths } = prestigeKollurMediaManifest;

export const OFFICIAL_SITE_MEDIA_ATTRIBUTION =
  "Imagery reproduced from the Prestige-published campaign portal (prestigegoldengrove.live) as WebP masters—without brochure pagination overlays.";

export const prestigeKollurAmenitiesContent: AmenitiesContent = {
  mediaAttribution: OFFICIAL_SITE_MEDIA_ATTRIBUTION,
  ribbon: {
    src: paths.bannerPool,
    alt: "Resort-grade aquatics and landscaped spine from the Prestige Kollur campaign library.",
    ribbonCaption: "Campaign amenity ribbon · aquatics-led spine",
    figureCaption: "Aquatics-led spine & grove lighting — campaign masters mirrored locally.",
  },
  heroBand: {
    eyebrow: "Society amenities",
    title: "Resort-at-home amenity atlas — icon-led like the Prestige Golden Grove deck",
    lead: "Scan the staples buyers search first — pools, gym, theatre, courts, kids' belts, security loops — then drill into narrative chapters below. Collateral cites 250+ lifestyle touchpoints across ~28.7 acres.",
  },
  iconAtlas: AMENITIES_ICON_ATLAS,
  statsBand: AMENITIES_STATS_BAND,
  detailCategories: AMENITIES_DETAIL_CATEGORIES,
  peerComparison: {
    heading: "Collateral contrast — directional only",
    lead: "Prestige-published comparisons benchmark clubhouse scale, open-space ratios, and aquatics depth. Validate independently before relying on positioning statements.",
    projectColumnLabel: "Prestige Golden Grove narrative",
    peersColumnLabel: "Typical peer framing",
    rows: AMENITIES_PEER_COMPARISON.map((row) => ({
      feature: row.feature,
      project: row.goldenGrove,
      peers: row.peers,
    })),
  },
  mosaicFrames: AMENITIES_MOSAIC_FRAMES,
  footerNote:
    "Detailed specs, sequencing, and amenity commissioning dates belong to Prestige handovers — book a desk review or site calendar before relying on amenities lists for decisions.",
};
