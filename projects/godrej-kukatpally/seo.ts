import type { ProjectSeoConfig } from "@/lib/seo/types";

import { godrejKukatpallyMediaManifest } from "@/projects/godrej-kukatpally/media-manifest";
import { godrejKukatpallySite } from "@/projects/godrej-kukatpally/site";

/** Godrej Kukatpally SEO pack — urban high-rise positioning. */
export const godrejKukatpallySeo: ProjectSeoConfig = {
  title: godrejKukatpallySite.metadataTitle,
  titleTemplate: `%s · ${godrejKukatpallySite.name}`,
  description: godrejKukatpallySite.description,
  keywords: [
    "Godrej Kukatpally",
    "Godrej Properties Hyderabad",
    "3 BHK Kukatpally",
    "4 BHK KPHB",
    "premium apartments Hyderabad IT corridor",
    "HITEC City apartments",
    "KPHB new launch",
  ],
  siteName: godrejKukatpallySite.name,
  locale: godrejKukatpallySite.locale,
  defaultCanonicalPath: "/",
  openGraph: {
    type: "website",
    imagePath: godrejKukatpallyMediaManifest.paths.bannerExterior,
    imageAlt: "Godrej Kukatpally — twin tower elevation rendering.",
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
  structuredData: {
    organizationName: godrejKukatpallySite.name,
    organizationType: "RealEstateAgent",
    description: godrejKukatpallySite.description,
    areaServed: godrejKukatpallySite.locationShort,
  },
};
