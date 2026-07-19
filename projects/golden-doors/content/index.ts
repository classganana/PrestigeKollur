import type { ProjectContentPack } from "@/lib/content/types";

import { goldenDoorsAboutContent } from "@/projects/golden-doors/content/about";
import { goldenDoorsCtaFooterContent } from "@/projects/golden-doors/content/cta-footer";
import { goldenDoorsEmiCalculatorContent } from "@/projects/golden-doors/content/emi-calculator";
import { goldenDoorsHeroContent } from "@/projects/golden-doors/content/hero";
import { goldenDoorsPortfolioContent } from "@/projects/golden-doors/content/portfolio";
import { goldenDoorsTrustContent } from "@/projects/golden-doors/content/trust";

/** Brand-hub content pack — only sections used by the Golden Doors manifest. */
export const goldenDoorsContent: ProjectContentPack = {
  hero: goldenDoorsHeroContent,
  projectPortfolio: goldenDoorsPortfolioContent,
  emiCalculator: goldenDoorsEmiCalculatorContent,
  about: goldenDoorsAboutContent,
  trust: goldenDoorsTrustContent,
  ctaFooter: goldenDoorsCtaFooterContent,
};

export { goldenDoorsAboutContent } from "@/projects/golden-doors/content/about";
export { goldenDoorsClientsPageContent } from "@/projects/golden-doors/content/clients-page";
export { goldenDoorsCtaFooterContent } from "@/projects/golden-doors/content/cta-footer";
export { goldenDoorsEmiCalculatorContent } from "@/projects/golden-doors/content/emi-calculator";
export { goldenDoorsHeroContent } from "@/projects/golden-doors/content/hero";
export { goldenDoorsPortfolioContent } from "@/projects/golden-doors/content/portfolio";
export { goldenDoorsServicesPageContent } from "@/projects/golden-doors/content/services-page";
export { goldenDoorsTrustContent } from "@/projects/golden-doors/content/trust";
