import type { ProjectSeoConfig } from "@/lib/seo/types";

/** Placeholder SEO pack — wire when `godrej-kukatpally` enters `PROJECT_REGISTRY`. */
export const godrejKukatpallySeo: ProjectSeoConfig = {
  title: "Godrej Kukatpally · Hyderabad",
  titleTemplate: "%s · Godrej Kukatpally",
  description: "Premium residential microsite — Godrej Kukatpally, Hyderabad.",
  siteName: "Godrej Kukatpally",
  locale: "en",
  defaultCanonicalPath: "/",
  openGraph: {
    type: "website",
    imagePath: "/media/official/banner-exterior.webp",
    imageAlt: "Godrej Kukatpally — project rendering.",
  },
  robots: {
    index: true,
    follow: true,
  },
  structuredData: {
    organizationName: "Godrej Kukatpally",
    organizationType: "RealEstateAgent",
    description: "Premium residential microsite — Godrej Kukatpally, Hyderabad.",
    areaServed: "Kukatpally, Hyderabad",
  },
};
