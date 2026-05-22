import type { Metadata } from "next";

import { buildOpenGraph, buildTwitterCard } from "@/lib/seo/og";
import { absoluteUrl, isIndexableDeployment, resolveSiteOrigin } from "@/lib/seo/site-url";
import type { ProjectSeoConfig } from "@/lib/seo/types";

export type PageMetadataInput = {
  seo: ProjectSeoConfig;
  title: string;
  description: string;
  /** Path segment for canonical + OG url, e.g. `/master-plan`. */
  path?: string;
};

function resolveRobotsDirective(seo: ProjectSeoConfig): Metadata["robots"] {
  const indexable = isIndexableDeployment() && seo.robots.index;
  const followable = seo.robots.follow;

  if (!indexable) {
    return { index: false, follow: followable, googleBot: { index: false, follow: followable } };
  }

  return { index: true, follow: followable };
}

/** Root layout metadata for the active project. */
export function buildRootMetadata(seo: ProjectSeoConfig): Metadata {
  const origin = resolveSiteOrigin();
  const canonical = absoluteUrl(seo.defaultCanonicalPath, origin);

  return {
    ...(origin !== undefined ? { metadataBase: origin } : {}),
    title: {
      default: seo.title,
      template: seo.titleTemplate,
    },
    description: seo.description,
    ...(seo.keywords !== undefined && seo.keywords.length > 0
      ? { keywords: [...seo.keywords] }
      : {}),
    robots: resolveRobotsDirective(seo),
    icons: {
      icon: [{ url: "/favicon.ico" }],
    },
    alternates: canonical !== undefined ? { canonical } : undefined,
    openGraph: buildOpenGraph({
      seo,
      title: seo.title,
      description: seo.description,
      path: seo.defaultCanonicalPath,
    }),
    twitter: buildTwitterCard(seo, seo.title, seo.description),
  };
}

/** Per-route metadata — merges with root title template. */
export function buildPageMetadata({
  seo,
  title,
  description,
  path,
}: PageMetadataInput): Metadata {
  const origin = resolveSiteOrigin();
  const canonicalPath = path ?? seo.defaultCanonicalPath;
  const canonical = absoluteUrl(canonicalPath, origin);

  return {
    title,
    description,
    alternates: canonical !== undefined ? { canonical } : undefined,
    openGraph: buildOpenGraph({ seo, title, description, path: canonicalPath }),
    twitter: buildTwitterCard(seo, title, description),
    robots: resolveRobotsDirective(seo),
  };
}
