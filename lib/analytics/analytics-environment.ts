/** Opt-in local / preview analytics — set `NEXT_PUBLIC_ANALYTICS_DEBUG=true` in `.env.local`. */
export function isAnalyticsDebugEnabled(): boolean {
  return process.env.NEXT_PUBLIC_ANALYTICS_DEBUG === "true";
}

/** Production deploy gate shared by GA4 and Meta Pixel loaders. */
export function isProductionAnalyticsEnvironment(): boolean {
  if (isAnalyticsDebugEnabled()) {
    return true;
  }

  if (process.env.NODE_ENV === "development") {
    return false;
  }

  const vercelEnv = process.env.VERCEL_ENV;

  if (vercelEnv !== undefined && vercelEnv !== "production") {
    return false;
  }

  return true;
}
