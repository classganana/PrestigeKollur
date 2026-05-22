"use client";

import { useCallback, useMemo } from "react";

import {
  trackBrochureDownload,
  trackCallClick,
  trackLeadSubmission,
  trackWhatsAppClick,
  type ConversionEventParams,
  type ConversionPlacement,
} from "@/lib/analytics/track-conversion";
import { useProject } from "@/lib/project/project-context";

type ConversionOptions = Omit<ConversionEventParams, "leadSource">;

/**
 * Project-scoped conversion helpers — avoids repeating `leadSourceTag` at call sites.
 */
export function useConversionTracking() {
  const { leadSourceTag } = useProject();

  const withSource = useCallback(
    (options?: ConversionOptions): ConversionEventParams => ({
      leadSource: leadSourceTag,
      ...options,
    }),
    [leadSourceTag],
  );

  return useMemo(
    () => ({
      leadSourceTag,
      trackLeadSubmission: (options?: ConversionOptions) =>
        trackLeadSubmission(withSource(options)),
      trackWhatsAppClick: (placement?: ConversionPlacement) =>
        trackWhatsAppClick(withSource({ placement })),
      trackCallClick: (placement?: ConversionPlacement) =>
        trackCallClick(withSource({ placement })),
      trackBrochureDownload: (document: string, placement?: ConversionPlacement) =>
        trackBrochureDownload(withSource({ document, placement: placement ?? "document_tile" })),
    }),
    [leadSourceTag, withSource],
  );
}
