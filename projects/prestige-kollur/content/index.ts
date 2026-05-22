import type { ProjectContentPack } from "@/lib/content/types";

import { prestigeKollurAmenitiesContent } from "@/projects/prestige-kollur/content/amenities";
import { prestigeKollurCinematicTownshipContent } from "@/projects/prestige-kollur/content/cinematic-township";
import { prestigeKollurConnectivityContent } from "@/projects/prestige-kollur/content/connectivity";
import { prestigeKollurCtaFooterContent } from "@/projects/prestige-kollur/content/cta-footer";
import { prestigeKollurDocumentsContent } from "@/projects/prestige-kollur/content/documents";
import { prestigeKollurFloorPlansContent } from "@/projects/prestige-kollur/content/floor-plans";
import { prestigeKollurGalleryContent } from "@/projects/prestige-kollur/content/gallery";
import { prestigeKollurHeroContent } from "@/projects/prestige-kollur/content/hero";
import { prestigeKollurLocationContent } from "@/projects/prestige-kollur/content/location";
import { prestigeKollurOverviewContent } from "@/projects/prestige-kollur/content/overview";
import { prestigeKollurPaymentEoiContent } from "@/projects/prestige-kollur/content/payment-eoi";
import { prestigeKollurPricingContent } from "@/projects/prestige-kollur/content/pricing";
import { prestigeKollurSpecificationsContent } from "@/projects/prestige-kollur/content/specifications";
import { prestigeKollurStorytellingContent } from "@/projects/prestige-kollur/content/storytelling";
import { prestigeKollurTownshipContent } from "@/projects/prestige-kollur/content/township";

export const prestigeKollurContent: ProjectContentPack = {
  hero: prestigeKollurHeroContent,
  overview: prestigeKollurOverviewContent,
  amenities: prestigeKollurAmenitiesContent,
  pricing: prestigeKollurPricingContent,
  paymentEoi: prestigeKollurPaymentEoiContent,
  documents: prestigeKollurDocumentsContent,
  connectivity: prestigeKollurConnectivityContent,
  floorPlans: prestigeKollurFloorPlansContent,
  gallery: prestigeKollurGalleryContent,
  cinematicTownship: prestigeKollurCinematicTownshipContent,
  township: prestigeKollurTownshipContent,
  specifications: prestigeKollurSpecificationsContent,
  location: prestigeKollurLocationContent,
  ctaFooter: prestigeKollurCtaFooterContent,
  storytelling: prestigeKollurStorytellingContent,
};
