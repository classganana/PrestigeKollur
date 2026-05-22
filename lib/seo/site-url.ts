/**
 * Canonical origin for the active deploy.
 * Requires explicit `NEXT_PUBLIC_SITE_URL` — we intentionally do not fall back to
 * `VERCEL_URL` so multi-brand builds never leak the wrong domain into OG/canonicals.
 */
export function resolveSiteOrigin(): URL | undefined {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (raw === undefined || raw.length === 0) {
    return undefined;
  }

  try {
    return new URL(raw.endsWith("/") ? raw.slice(0, -1) : raw);
  } catch {
    return undefined;
  }
}

/** True when this build is allowed to expose indexable routes to crawlers. */
export function isIndexableDeployment(): boolean {
  if (process.env.NODE_ENV !== "production") {
    return false;
  }

  const vercelEnv = process.env.VERCEL_ENV;

  if (vercelEnv !== undefined && vercelEnv !== "production") {
    return false;
  }

  return resolveSiteOrigin() !== undefined;
}

export function absoluteUrl(path: string, origin?: URL): string | undefined {
  const base = origin ?? resolveSiteOrigin();

  if (base === undefined) {
    return undefined;
  }

  const normalized = path.startsWith("/") ? path : `/${path}`;

  return new URL(normalized, base).toString();
}
