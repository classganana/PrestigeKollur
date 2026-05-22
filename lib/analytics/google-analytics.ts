import type { ProjectAnalyticsConfig } from "@/lib/seo/types";

import { isAnalyticsDebugEnabled, isProductionAnalyticsEnvironment } from "@/lib/analytics/analytics-environment";

type GtagFn = (
  command: "config" | "event" | "js" | "set",
  targetOrEvent: string | Date,
  params?: Record<string, unknown>,
) => void;

export type GtagWindow = Window & {
  dataLayer?: unknown[];
  gtag?: GtagFn;
};

/** GA4 measurement id — `NEXT_PUBLIC_ANALYTICS_ID` overrides project config. */
export function resolveGa4MeasurementId(config: ProjectAnalyticsConfig): string | null {
  const envOverride = process.env.NEXT_PUBLIC_ANALYTICS_ID?.trim();

  if (envOverride !== undefined && envOverride.length > 0) {
    return envOverride;
  }

  if (config.provider !== "ga4") {
    return null;
  }

  const baked = config.measurementId?.trim();

  return baked !== undefined && baked.length > 0 ? baked : null;
}

/** True when GA4 scripts should load (production, or local debug mode). */
export function shouldLoadGoogleAnalytics(config: ProjectAnalyticsConfig): boolean {
  if (!isProductionAnalyticsEnvironment()) {
    return false;
  }

  return config.provider === "ga4" && resolveGa4MeasurementId(config) !== null;
}

function getGtag(): GtagFn | undefined {
  if (typeof window === "undefined") {
    return undefined;
  }

  return (window as GtagWindow).gtag;
}

/** Manual page view — used for App Router navigations (`send_page_view` is disabled). */
export function trackPageView(pagePath: string): void {
  const gtag = getGtag();

  if (gtag === undefined) {
    return;
  }

  gtag("event", "page_view", {
    page_path: pagePath,
    page_location: window.location.href,
    page_title: document.title,
  });
}

/** Lightweight custom event helper for lead / conversion hooks. */
export function trackCustomEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>,
): void {
  const gtag = getGtag();

  if (gtag === undefined) {
    return;
  }

  gtag("event", eventName, params);
}

/** Inline bootstrap — disables automatic page views to avoid duplicates. */
export function buildGa4InitScript(measurementId: string): string {
  const debugMode = isAnalyticsDebugEnabled() ? ",debug_mode:true" : "";

  return `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}
window.gtag=gtag;gtag('js',new Date());gtag('config','${measurementId}',{send_page_view:false${debugMode}});`;
}
