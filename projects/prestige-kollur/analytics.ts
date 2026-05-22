import type { ProjectAnalyticsConfig } from "@/lib/seo/types";

/**
 * GA4 + Meta Pixel for Prestige Kollur.
 * Set per Vercel project:
 *   NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXXXX
 *   NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXXXX
 * Scripts load only in production (`next dev` is excluded).
 */
export const prestigeKollurAnalytics: ProjectAnalyticsConfig = {
  provider: "ga4",
  measurementId: undefined,
  metaPixel: {
    enabled: true,
    pixelId: undefined,
  },
};
