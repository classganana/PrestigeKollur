import type { TrustContent } from "@/lib/content/types";

export const goldenDoorsTrustContent: TrustContent = {
  eyebrow: "Trust & transparency",
  headline: "Confidence before commitment",
  lead: "Premium real estate decisions deserve clarity — authorized partner status, developer pedigree, and transparent guidance through every step.",
  reraStatus: {
    headline: "RERA diligence",
    lastUpdatedLabel: "Telangana RERA",
    bullets: [
      "Each listed project carries its own RERA registration — verify on the Telangana RERA portal before any commitment.",
      "Golden Doors does not replace developer disclosures; we help you find and reconcile official filings.",
    ],
    verifyHref: "https://rera.telangana.gov.in/",
    verifyLabel: "Verify on Telangana RERA",
  },
  developerNote:
    "We partner with established developers including Prestige Group and Godrej Properties. Project names, visuals, and specifications remain the property of their respective owners and are shown here for authorized channel partner representation only.",
  credentials: [
    { figure: "CP", label: "Channel partner desk" },
    { figure: "2+", label: "Developer partnerships" },
    { figure: "HYD", label: "Hyderabad focus" },
    { figure: "EOI", label: "Guided expression of interest" },
  ],
  disclaimer:
    "Golden Doors acts solely as a facilitator between customers and builders. Pricing, inventory, payment plans, and amenity commissioning are indicative and subject to change. Reconcile all figures with the developer and appointed representatives before financial commitments. Visuals are campaign renderings unless stated otherwise. *Brokerage terms vary by project — ask your Golden Doors desk for current policy.",
};
