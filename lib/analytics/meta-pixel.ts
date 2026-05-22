import type { ProjectAnalyticsConfig } from "@/lib/seo/types";

import { isProductionAnalyticsEnvironment } from "@/lib/analytics/analytics-environment";

type FbqFn = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue?: unknown[];
  loaded?: boolean;
  version?: string;
};

export type FbqWindow = Window & {
  fbq?: FbqFn;
  _fbq?: FbqFn;
};

/** Meta Pixel id — `NEXT_PUBLIC_META_PIXEL_ID` overrides project config. */
export function resolveMetaPixelId(config: ProjectAnalyticsConfig): string | null {
  const envOverride = process.env.NEXT_PUBLIC_META_PIXEL_ID?.trim();

  if (envOverride !== undefined && envOverride.length > 0) {
    return envOverride;
  }

  const baked = config.metaPixel?.pixelId?.trim();

  return baked !== undefined && baked.length > 0 ? baked : null;
}

/** True in production deploys with a resolvable pixel id — never in `next dev`. */
export function shouldLoadMetaPixel(config: ProjectAnalyticsConfig): boolean {
  if (!isProductionAnalyticsEnvironment()) {
    return false;
  }

  if (config.metaPixel?.enabled === false) {
    return false;
  }

  return resolveMetaPixelId(config) !== null;
}

function getFbq(): FbqFn | undefined {
  if (typeof window === "undefined") {
    return undefined;
  }

  return (window as FbqWindow).fbq;
}

/** Manual PageView for App Router navigations (init omits auto PageView). */
export function trackMetaPageView(): void {
  const fbq = getFbq();

  if (fbq === undefined) {
    return;
  }

  fbq("track", "PageView");
}

export function trackLead(params?: Record<string, string>): void {
  const fbq = getFbq();

  if (fbq === undefined) {
    return;
  }

  fbq("track", "Lead", params ?? {});
}

export function trackContact(params?: Record<string, string>): void {
  const fbq = getFbq();

  if (fbq === undefined) {
    return;
  }

  fbq("track", "Contact", params ?? {});
}

export function trackWhatsAppClick(): void {
  const fbq = getFbq();

  if (fbq === undefined) {
    return;
  }

  fbq("trackCustom", "WhatsAppClick");
}

/**
 * Standard Meta bootstrap — `if(f.fbq)return` prevents duplicate initialization.
 * PageView is tracked manually via `trackMetaPageView`.
 */
export function buildMetaPixelInitScript(pixelId: string): string {
  return `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','${pixelId}');`;
}
