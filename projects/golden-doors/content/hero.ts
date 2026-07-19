import type { HeroContent } from "@/lib/content/types";

import { goldenDoorsMediaManifest } from "@/projects/golden-doors/media-manifest";

export const goldenDoorsHeroContent: HeroContent = {
  campaignImage: goldenDoorsMediaManifest.hero.campaign,
  campaignImageAlt: "Golden Doors — open doors of light against a dark gold skyline.",
  imageFocus: "72% 48%",
  composerNote:
    "Browse Prestige Kollur and Godrej Kukatpally below — or leave a discreet enquiry and we will guide the next thoughtful step.",
  exploreCta: { label: "Explore projects", href: "#projects" },
  servicesLink: { label: "Services offered", href: "/services" },
  clientsLink: { label: "Our clients", href: "/clients" },
  skipAheadLink: {
    label: "Skip to enquiry",
    href: "#cta",
    note: "Prefer a private briefing first? Jump to the concierge form.",
  },
  footnote: "Authorized channel partner · Hyderabad",
};
