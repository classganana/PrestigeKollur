import type { ProjectSeoConfig } from "@/lib/seo/types";

import { prestigeKollurMediaManifest } from "@/projects/prestige-kollur/media-manifest";
import { prestigeKollurSite } from "@/projects/prestige-kollur/site";

export const prestigeKollurSeo: ProjectSeoConfig = {
  title: prestigeKollurSite.metadataTitle,
  titleTemplate: `%s · ${prestigeKollurSite.metadataTitle}`,
  description: prestigeKollurSite.description,
  keywords: [
    "Prestige Kollur",
    "Prestige Golden Grove",
    "Velimela",
    "Kollur Hyderabad",
    "authorized sales partner",
    "Prestige township Hyderabad",
  ],
  siteName: prestigeKollurSite.name,
  locale: prestigeKollurSite.locale,
  defaultCanonicalPath: "/",
  openGraph: {
    type: "website",
    imagePath: prestigeKollurMediaManifest.paths.bannerExterior,
    imageAlt: "Prestige Kollur — forest-themed township exterior rendering.",
    imageWidth: 1200,
    imageHeight: 630,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  structuredData: {
    organizationName: prestigeKollurSite.name,
    organizationType: "RealEstateAgent",
    description: prestigeKollurSite.description,
    areaServed: prestigeKollurSite.locationShort,
  },
};
