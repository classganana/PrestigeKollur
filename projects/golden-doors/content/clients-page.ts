import type { ReactNode } from "react";

import { PROJECT_MEDIA_ROOT } from "@/lib/project/media-paths";

const mediaRoot = PROJECT_MEDIA_ROOT["golden-doors"];

export type ClientLogo = {
  id: string;
  name: string;
  src: string;
};

export type ClientsPageContent = {
  metadata: {
    title: string;
    description: string;
  };
  heading: {
    eyebrow: string;
    title: ReactNode;
    lead: string;
  };
  /** Scrolling developer logo strip (official marks from client reference). */
  logoMarquee: readonly ClientLogo[];
  footnote: string;
  ctaLabel: string;
  ctaLead: string;
};

/**
 * Our Clients — developer partners with official logo strip.
 */
export const goldenDoorsClientsPageContent: ClientsPageContent = {
  metadata: {
    title: "Our Clients",
    description:
      "Developers Golden Doors partners with across Hyderabad — Prestige, Godrej, Sattva, Ramky, Lansum, Raghava, Brigade, and more.",
  },
  heading: {
    eyebrow: "Trusted developers",
    title: "Our clients",
    lead: "Premium builders we represent and guide buyers toward — one calm desk across Hyderabad’s strongest residential names.",
  },
  logoMarquee: [
    { id: "prestige", name: "Prestige Group", src: `${mediaRoot}/clients/imgi_41_5-2.png` },
    { id: "godrej", name: "Godrej Properties", src: `${mediaRoot}/clients/imgi_42_4-2.png` },
    { id: "sattva", name: "Sattva", src: `${mediaRoot}/clients/imgi_43_2-2.png` },
    { id: "ramky", name: "Ramky", src: `${mediaRoot}/clients/imgi_45_24.png` },
    { id: "lansum", name: "Lansum", src: `${mediaRoot}/clients/imgi_46_22.png` },
    { id: "raghava", name: "Raghava", src: `${mediaRoot}/clients/imgi_47_21.png` },
    { id: "brigade", name: "Brigade", src: `${mediaRoot}/clients/imgi_48_20.png` },
    { id: "my-home", name: "My Home", src: `${mediaRoot}/clients/imgi_49_19.png` },
    { id: "aparna", name: "Aparna", src: `${mediaRoot}/clients/imgi_51_13-1.png` },
    { id: "phoenix", name: "Phoenix", src: `${mediaRoot}/clients/imgi_52_12-1.png` },
    { id: "sobha", name: "Sobha", src: `${mediaRoot}/clients/imgi_53_11-1.png` },
    { id: "puravankara", name: "Puravankara", src: `${mediaRoot}/clients/imgi_54_9-1.png` },
    { id: "cybercity", name: "Cybercity", src: `${mediaRoot}/clients/imgi_55_7-1.png` },
    { id: "vasavi", name: "Vasavi", src: `${mediaRoot}/clients/imgi_56_6-2.png` },
    { id: "incor", name: "Incor", src: `${mediaRoot}/clients/imgi_50_18.png` },
  ],
  footnote:
    "Partnerships and inventory vary by launch. We represent a curated set of Hyderabad’s premium residential developers.",
  ctaLabel: "Enquire about a developer",
  ctaLead: "Looking for a specific builder or launch? Tell us — we will guide the next step.",
};
