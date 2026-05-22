"use client";

import { usePathname, useSearchParams } from "next/navigation";
import Script from "next/script";
import { Suspense, useEffect } from "react";

import {
  buildGa4InitScript,
  resolveGa4MeasurementId,
  shouldLoadGoogleAnalytics,
  trackPageView as trackGa4PageView,
} from "@/lib/analytics/google-analytics";
import {
  buildMetaPixelInitScript,
  resolveMetaPixelId,
  shouldLoadMetaPixel,
  trackMetaPageView,
} from "@/lib/analytics/meta-pixel";
import { useProject } from "@/lib/project/project-context";

function AnalyticsPageViewTracker({
  trackGa4,
  trackMeta,
}: {
  trackGa4: boolean;
  trackMeta: boolean;
}) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!trackGa4 && !trackMeta) {
      return;
    }

    const query = searchParams.toString();
    const pagePath = query.length > 0 ? `${pathname}?${query}` : pathname;

    if (trackGa4) {
      trackGa4PageView(pagePath);
    }

    if (trackMeta) {
      trackMetaPageView();
    }
  }, [pathname, searchParams, trackGa4, trackMeta]);

  return null;
}

/**
 * Loads GA4 and Meta Pixel in production only. Page views are tracked manually on route changes.
 */
export function AnalyticsProvider() {
  const { analytics } = useProject();

  const loadGa4 = shouldLoadGoogleAnalytics(analytics);
  const loadMeta = shouldLoadMetaPixel(analytics);

  if (!loadGa4 && !loadMeta) {
    return null;
  }

  const measurementId = loadGa4 ? resolveGa4MeasurementId(analytics) : null;
  const pixelId = loadMeta ? resolveMetaPixelId(analytics) : null;

  if (measurementId === null && pixelId === null) {
    return null;
  }

  return (
    <>
      {measurementId !== null ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {buildGa4InitScript(measurementId)}
          </Script>
        </>
      ) : null}
      {pixelId !== null ? (
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {buildMetaPixelInitScript(pixelId)}
        </Script>
      ) : null}
      <Suspense fallback={null}>
        <AnalyticsPageViewTracker trackGa4={loadGa4} trackMeta={loadMeta} />
      </Suspense>
    </>
  );
}
