import type { ProjectAnalyticsConfig } from "@/lib/seo/types";

/**
 * GA4 + Meta Pixel for Golden Doors brand hub.
 * Set per deploy:
 *   NEXT_PUBLIC_ANALYTICS_ID=G-XXXXXXXX
 *   NEXT_PUBLIC_META_PIXEL_ID=XXXXXXXXXXXXXXX
 * Scripts load only in production (`next dev` is excluded).
 */
export const goldenDoorsAnalytics: ProjectAnalyticsConfig = {
  provider: "ga4",
  measurementId: undefined,
  metaPixel: {
    enabled: true,
    pixelId: undefined,
  },
};
