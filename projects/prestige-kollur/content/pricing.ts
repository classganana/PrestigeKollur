import type { PricingContent } from "@/lib/content/types";
import {
  CONFIGURATION_ROWS,
  PRICE_DISCLAIMER,
  PRICING_ROWS,
} from "@/projects/prestige-kollur/project-facts";

export const prestigeKollurPricingContent: PricingContent = {
  heading: {
    eyebrow: "Inventory framing",
    title: "Pricing architecture & configurations",
    lead: "Collateral ladders juxtapose Velimela entry against saturated Kokapet benchmarks — reconcile every negotiation inside Prestige-approved worksheets.",
  },
  configurationIntro: {
    title: "Floor-plan families",
    lead: "Variants mirror Prestige nomenclature — leverage concierge routing for CAD downloads once NDAs & KYC checkpoints clear.",
  },
  rows: PRICING_ROWS,
  configurationRows: CONFIGURATION_ROWS,
  priceDisclaimer: PRICE_DISCLAIMER,
  conciergeCtaLabel: "Request allotment counsellor",
};
