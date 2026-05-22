"use client";

import { trackCustomEvent } from "@/lib/analytics/google-analytics";
import {
  trackContact as trackMetaContact,
  trackLead as trackMetaLead,
  trackWhatsAppClick as trackMetaWhatsApp,
} from "@/lib/analytics/meta-pixel";

export type ConversionPlacement =
  | "concierge_form"
  | "concierge_handoff"
  | "concierge_modal_wa"
  | "concierge_modal_call"
  | "mobile_rail_wa"
  | "mobile_rail_call"
  | "mobile_rail_wa_direct"
  | "desktop_float_wa"
  | "desktop_float_call"
  | "hero_wa"
  | "document_tile"
  | string;

export type ConversionEventParams = {
  leadSource: string;
  placement?: ConversionPlacement;
  document?: string;
  interest?: string;
};

function ga4Payload(params: ConversionEventParams): Record<string, string | number | boolean> {
  return {
    lead_source: params.leadSource,
    ...(params.placement !== undefined ? { placement: params.placement } : {}),
    ...(params.document !== undefined ? { document: params.document } : {}),
    ...(params.interest !== undefined ? { interest: params.interest } : {}),
  };
}

function metaPayload(params: ConversionEventParams): Record<string, string> {
  return {
    lead_source: params.leadSource,
    ...(params.placement !== undefined ? { placement: params.placement } : {}),
    ...(params.document !== undefined ? { document: params.document } : {}),
  };
}

/** Runs tracking then an optional UI handler — keeps CTA markup thin. */
export function onConversionCta(track: () => void, action?: () => void): () => void {
  return () => {
    track();
    action?.();
  };
}

export function trackLeadSubmission(params: ConversionEventParams): void {
  trackCustomEvent("lead_submit", ga4Payload(params));
  trackMetaLead(metaPayload(params));
}

export function trackWhatsAppClick(params: ConversionEventParams): void {
  trackCustomEvent("whatsapp_click", ga4Payload(params));
  trackMetaWhatsApp();
}

export function trackCallClick(params: ConversionEventParams): void {
  trackCustomEvent("phone_click", ga4Payload(params));
  trackMetaContact(metaPayload(params));
}

export function trackBrochureDownload(params: ConversionEventParams): void {
  const payload = ga4Payload(params);

  trackCustomEvent("brochure_download", payload);
  trackMetaLead({
    ...metaPayload(params),
    content_category: "brochure",
  });
}
