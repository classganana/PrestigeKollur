/**
 * Lightweight lead routing — browser POST `/api/enquiry` (Next Route Handler), which proxies JSON to Google Apps Script.
 *
 * Setup (maintainer):
 * 1. Create a Google Sheet + Apps Script project with `doPost` accepting JSON `{ name, phone, interest, message, source }`.
 * 2. Deploy → New deployment → Web app → Execute as: Me; Who has access: Anyone.
 * 3. Set `ENQUIRY_SCRIPT_URL` (server-only, recommended) and/or `NEXT_PUBLIC_ENQUIRY_SCRIPT_URL`. The form always POSTs `/api/enquiry`, which reads those on the server.
 *
 * Example handler (Web Apps cannot use `getActiveSpreadsheet()` — it is null; use `openById`; see scripts/google-apps-script/concierge-leads-webapp.gs):
 * ```
 * function doPost(e) {
 *   var ss = SpreadsheetApp.openById('YOUR_SHEET_ID');
 *   var sheet = ss.getSheetByName('Leads');
 *   var data = JSON.parse(e.postData.contents);
 *   sheet.appendRow([new Date(), data.name, data.phone, data.interest, data.message || '', data.source || 'web']);
 *   return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
 * }
 * ```
 */

import { resolveProject } from "@/lib/project/resolve-project";

export const CONCIERGE_LEAD_SOURCE = resolveProject().leadSourceTag;

export type ConciergeLeadBodyFields = {
  name: string;
  phone: string;
  interest: string;
  message: string;
};

/** When the Sheet endpoint is absent, enquiries open a composed mailto (no backend). */

export function conciergeFallbackMailto(): string | null {
  const raw = process.env.NEXT_PUBLIC_ENQUIRY_EMAIL;
  return typeof raw === "string" && raw.trim().length > 0 ? raw.trim() : null;
}

export function buildConciergeLeadBody(data: ConciergeLeadBodyFields): string {
  const lines = [
    `Interest: ${data.interest}`,
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    "",
    data.message.trim().length > 0 ? `Message:\n${data.message}` : "",
    "",
    `— Submitted via ${CONCIERGE_LEAD_SOURCE}`,
  ];

  return lines.filter(Boolean).join("\n");
}
