import type { AboutBrandContent } from "@/lib/content/types";

/**
 * About Golden Doors — placeholder stats until client provides verified figures.
 */
export const goldenDoorsAboutContent: AboutBrandContent = {
  heading: {
    eyebrow: "About us",
    title: "Who we are",
    lead: "Golden Doors helps homebuyers discover and secure premium residences in Hyderabad — with clear guidance, developer-backed collateral, and a calm, partner-led desk.",
  },
  body: [
    "We operate as an authorized channel partner for select premium projects. Our role is to open the door: shortlist the right configuration, arrange site visits, and walk you through paperwork with transparency.",
    "Whether you are exploring Prestige Kollur, Godrej Kukatpally, or upcoming launches, you get one trusted point of contact — not a maze of brokers and mixed messages.",
  ],
  servicesHref: "/services",
  servicesLinkLabel: "Explore services offered",
  stats: [
    { figure: "2+", label: "Active premium projects" },
    { figure: "1", label: "Trusted partner desk" },
    { figure: "0%", label: "Hidden brokerage surprises*" },
    { figure: "24/7", label: "WhatsApp concierge access" },
  ],
};
