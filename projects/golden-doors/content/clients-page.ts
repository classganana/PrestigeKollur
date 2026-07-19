import type { ReactNode } from "react";

export type ClientDeveloper = {
  id: string;
  name: string;
  /** Optional short line — e.g. active listing note. */
  note?: string;
  /** Highlights developers with live inventory on the hub. */
  active?: boolean;
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
  clients: readonly ClientDeveloper[];
  footnote: string;
  ctaLabel: string;
  ctaLead: string;
};

/**
 * Our Clients — developer names the client asked to feature.
 * Typographic nameplates (no logo wall) until official marks are supplied.
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
  clients: [
    { id: "prestige", name: "Prestige", note: "Prestige Kollur — live on this site", active: true },
    { id: "godrej", name: "Godrej", note: "Godrej Kukatpally — live on this site", active: true },
    { id: "sattva", name: "Sattva" },
    { id: "ramky", name: "Ramky" },
    { id: "lansum", name: "Lansum" },
    { id: "raghava", name: "Raghava" },
    { id: "brigade", name: "Brigade" },
  ],
  footnote:
    "Partnerships and inventory vary by launch. Active project pages on this hub reflect what we are currently representing.",
  ctaLabel: "Enquire about a developer",
  ctaLead: "Looking for a specific builder or launch? Tell us — we will guide the next step.",
};
