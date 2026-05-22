/** Crawl/index policy — overridden by deployment environment in `robots.ts`. */
export type SeoRobotsPolicy = {
  index: boolean;
  follow: boolean;
};

export type SeoOpenGraphConfig = {
  type: "website";
  /** Public path (resolved against `metadataBase`). */
  imagePath: string;
  imageAlt: string;
  imageWidth?: number;
  imageHeight?: number;
};

export type SeoTwitterConfig = {
  card: "summary_large_image";
  site?: string;
  creator?: string;
};

export type SeoStructuredDataConfig = {
  /** Primary entity name — typically project marketing name. */
  organizationName: string;
  organizationType: "RealEstateAgent" | "Organization";
  description: string;
  areaServed?: string;
  /** Optional postal address lines for LocalBusiness-style enrichment. */
  addressLines?: readonly string[];
};

export type SeoSitemapPath = {
  path: string;
  changeFrequency?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: number;
};

export type ProjectSeoConfig = {
  /** Default document title (browser + OG when page title omitted). */
  title: string;
  /** Next.js title template — must include `%s` placeholder. */
  titleTemplate: string;
  description: string;
  keywords?: readonly string[];
  siteName: string;
  locale: string;
  defaultCanonicalPath: string;
  openGraph: SeoOpenGraphConfig;
  twitter?: SeoTwitterConfig;
  robots: SeoRobotsPolicy;
  structuredData: SeoStructuredDataConfig;
  sitemapPaths?: readonly SeoSitemapPath[];
};

export type AnalyticsProviderId = "none" | "ga4";

export type ProjectMetaPixelConfig = {
  /** Set `false` to disable even when an id is present. Defaults to enabled when an id resolves. */
  enabled?: boolean;
  /** Baked per project; `NEXT_PUBLIC_META_PIXEL_ID` overrides at deploy time. */
  pixelId?: string;
};

export type ProjectAnalyticsConfig = {
  provider: AnalyticsProviderId;
  /** Baked per project; `NEXT_PUBLIC_ANALYTICS_ID` overrides at deploy time. */
  measurementId?: string;
  metaPixel?: ProjectMetaPixelConfig;
};
