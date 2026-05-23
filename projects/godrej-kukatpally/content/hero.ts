import type { HeroContent } from "@/lib/content/types";

import { godrejKukatpallyMediaManifest } from "@/projects/godrej-kukatpally/media-manifest";

export const godrejKukatpallyHeroContent: HeroContent = {
  campaignImage: godrejKukatpallyMediaManifest.hero.campaign,
  campaignImageAlt:
    "Godrej Kukatpally — twin tower skyline, low-angle metropolitan elevation.",
  /** Low-angle tower emphasis — swap when dusk/night render ships */
  imageFocus: "50% 28%",
  campaignSpecLine: "45 STOREYS · 3 & 4 BHK · FROM ₹2.11 CR* · KPHB IT CORRIDOR",
  exploreCta: { label: "View connectivity", href: "#connectivity" },
  footnote: "Campaign rendering · indicative only",
};
