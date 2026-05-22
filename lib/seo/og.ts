import type { Metadata } from "next";

import type { ProjectSeoConfig } from "@/lib/seo/types";
import { absoluteUrl } from "@/lib/seo/site-url";

export type OpenGraphInput = {
  seo: ProjectSeoConfig;
  title: string;
  description: string;
  path?: string;
};

export function buildOpenGraph({
  seo,
  title,
  description,
  path = seo.defaultCanonicalPath,
}: OpenGraphInput): NonNullable<Metadata["openGraph"]> {
  const imageUrl = absoluteUrl(seo.openGraph.imagePath);
  const pageUrl = absoluteUrl(path);

  return {
    type: seo.openGraph.type,
    locale: seo.locale,
    siteName: seo.siteName,
    title,
    description,
    ...(pageUrl !== undefined ? { url: pageUrl } : {}),
    ...(imageUrl !== undefined
      ? {
          images: [
            {
              url: imageUrl,
              alt: seo.openGraph.imageAlt,
              width: seo.openGraph.imageWidth,
              height: seo.openGraph.imageHeight,
            },
          ],
        }
      : {}),
  };
}

export function buildTwitterCard(seo: ProjectSeoConfig, title: string, description: string) {
  if (seo.twitter === undefined) {
    return undefined;
  }

  const imageUrl = absoluteUrl(seo.openGraph.imagePath);

  return {
    card: seo.twitter.card,
    title,
    description,
    ...(seo.twitter.site !== undefined ? { site: seo.twitter.site } : {}),
    ...(seo.twitter.creator !== undefined ? { creator: seo.twitter.creator } : {}),
    ...(imageUrl !== undefined ? { images: [imageUrl] } : {}),
  };
}
