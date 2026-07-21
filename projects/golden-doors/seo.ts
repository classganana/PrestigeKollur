import type { ProjectSeoConfig } from "@/lib/seo/types";

import { goldenDoorsMediaManifest } from "@/projects/golden-doors/media-manifest";
import { goldenDoorsSite } from "@/projects/golden-doors/site";

/** Golden Doors SEO pack — brand hub / channel partner positioning. */
export const goldenDoorsSeo: ProjectSeoConfig = {
  title: goldenDoorsSite.metadataTitle,
  titleTemplate: `%s · ${goldenDoorsSite.name}`,
  description: goldenDoorsSite.description,
  keywords: [
    "Golden Doors",
    "Golden Doors Hyderabad",
    "channel partner Hyderabad",
    "Prestige Kollur",
    "Godrej Kukatpally",
    "premium apartments Hyderabad",
    "authorized channel partner",
  ],
  siteName: goldenDoorsSite.name,
  locale: goldenDoorsSite.locale,
  defaultCanonicalPath: "/",
  openGraph: {
    type: "website",
    imagePath: goldenDoorsMediaManifest.paths.heroLanding,
    imageAlt: "Golden Doors — premium homes in Hyderabad.",
    imageWidth: 1920,
    imageHeight: 1080,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  sitemapPaths: [
    { path: "/services", changeFrequency: "monthly", priority: 0.8 },
    { path: "/clients", changeFrequency: "monthly", priority: 0.75 },
    { path: "/privacy-policy", changeFrequency: "yearly", priority: 0.4 },
  ],
  structuredData: {
    organizationName: goldenDoorsSite.name,
    organizationType: "RealEstateAgent",
    description: goldenDoorsSite.description,
    areaServed: goldenDoorsSite.locationShort,
  },
};
