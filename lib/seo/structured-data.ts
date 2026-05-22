import type { SiteIdentity } from "@/lib/project/types";
import type { ProjectSeoConfig } from "@/lib/seo/types";
import { absoluteUrl, resolveSiteOrigin } from "@/lib/seo/site-url";

type JsonLd = Record<string, unknown>;

export function buildWebSiteSchema(seo: ProjectSeoConfig): JsonLd | null {
  const url = absoluteUrl("/");

  if (url === undefined) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: seo.siteName,
    description: seo.description,
    url,
    inLanguage: seo.locale,
  };
}

export function buildOrganizationSchema(
  seo: ProjectSeoConfig,
  site: SiteIdentity,
): JsonLd | null {
  const url = absoluteUrl("/");

  if (url === undefined) {
    return null;
  }

  const { structuredData } = seo;

  return {
    "@context": "https://schema.org",
    "@type": structuredData.organizationType,
    name: structuredData.organizationName,
    description: structuredData.description,
    url,
    ...(structuredData.areaServed !== undefined
      ? { areaServed: structuredData.areaServed }
      : { areaServed: site.locationShort }),
    ...(structuredData.addressLines !== undefined
      ? {
          address: {
            "@type": "PostalAddress",
            streetAddress: structuredData.addressLines.join(", "),
            addressCountry: "IN",
          },
        }
      : {}),
  };
}

export function buildWebPageSchema(
  seo: ProjectSeoConfig,
  path: string,
  name: string,
  description: string,
): JsonLd | null {
  const url = absoluteUrl(path);

  if (url === undefined) {
    return null;
  }

  const origin = resolveSiteOrigin()?.toString();

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    inLanguage: seo.locale,
    isPartOf: origin !== undefined ? { "@type": "WebSite", url: origin } : undefined,
  };
}

/** Home + organization + website graphs for root layout. */
export function buildRootStructuredData(
  seo: ProjectSeoConfig,
  site: SiteIdentity,
): JsonLd[] {
  return [
    buildWebSiteSchema(seo),
    buildOrganizationSchema(seo, site),
    buildWebPageSchema(seo, "/", seo.title, seo.description),
  ].filter((entry): entry is JsonLd => entry !== null);
}

export function buildMasterPlanStructuredData(
  seo: ProjectSeoConfig,
  pageTitle: string,
  pageDescription: string,
): JsonLd[] {
  const page = buildWebPageSchema(seo, "/master-plan", pageTitle, pageDescription);

  return page !== null ? [page] : [];
}
