import type { ReactNode } from "react";

export type ServiceOffering = {
  id: string;
  title: string;
  description: string;
};

export type ServicesPageContent = {
  metadata: {
    title: string;
    description: string;
  };
  heading: {
    eyebrow: string;
    title: ReactNode;
    lead: string;
  };
  services: readonly ServiceOffering[];
  ctaLabel: string;
  ctaLead: string;
};

/**
 * Services offered — editable copy for the Golden Doors hub `/services` page.
 * Client can refine descriptions; titles match the brief.
 */
export const goldenDoorsServicesPageContent: ServicesPageContent = {
  metadata: {
    title: "Services Offered",
    description:
      "Golden Doors services — property consultation, home loan desk, site visits, demo flats, deals, interiors, and a dedicated relationship manager for end-to-end guidance in Hyderabad.",
  },
  heading: {
    eyebrow: "How we help",
    title: "Services offered",
    lead: "From the first briefing to keys in hand — one partner desk for premium Hyderabad homes.",
  },
  services: [
    {
      id: "property-consultation",
      title: "Property consultation",
      description:
        "Clarity on projects, configurations, and budgets — so you shortlist with confidence, not guesswork.",
    },
    {
      id: "home-loan-desk",
      title: "Home Loan Desk",
      description:
        "EMI planning, bank introductions, and paperwork guidance so financing stays transparent and on track.",
    },
    {
      id: "book-site-visit",
      title: "Book a Site Visit",
      description:
        "Private, scheduled walkthroughs of shortlisted projects — timed around your day, not a sales rush.",
    },
    {
      id: "demo-flat",
      title: "Demo Flat Experience",
      description:
        "See lived-in scale and finishes before you commit — typologies that feel real, not only on a brochure.",
    },
    {
      id: "attractive-deals",
      title: "Attractive Deals",
      description:
        "Early-window offers, inventory highlights, and partner-led pricing clarity when opportunities open.",
    },
    {
      id: "interior-assistance",
      title: "Interior Assistance",
      description:
        "Introductions and direction for interiors once you lock a home — so the next chapter starts cleanly.",
    },
    {
      id: "relationship-manager",
      title: "Dedicated Relationship Manager",
      description:
        "End-to-end guidance with one point of contact — from enquiry through booking, paperwork, and handover.",
    },
  ],
  ctaLabel: "Request a private briefing",
  ctaLead: "Tell us what you need — we will route you to the right desk with calm cadence.",
};
