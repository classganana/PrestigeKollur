import { NextResponse, type NextRequest } from "next/server";

import { CONCIERGE_LEAD_SOURCE } from "@/constants/enquiry";

/**
 * Proxies concierge leads to Google Apps Script so the browser never POSTs cross-origin
 * to `script.google.com` (avoids CORS / preflight failures on localhost and many hosts).
 */

function upstreamScriptUrl(): string | null {
  const preferred = process.env.ENQUIRY_SCRIPT_URL?.trim();

  const publicUrl = process.env.NEXT_PUBLIC_ENQUIRY_SCRIPT_URL?.trim();

  return preferred && preferred.length > 0
    ? preferred
    : publicUrl && publicUrl.length > 0
      ? publicUrl
      : null;
}

export async function GET() {
  const configured = upstreamScriptUrl() != null;

  return NextResponse.json({ configured });
}

type LeadBody = {
  name: unknown;
  phone: unknown;
  interest: unknown;
  message: unknown;
  source: unknown;
};

function sanitizeString(value: unknown, max: number): string | null {
  if (typeof value !== "string") return null;

  const t = value.trim();

  return t.length > max ? t.slice(0, max) : t;
}

/** Extract plain‑text Apps Script fatal error from Google's HTML shell (when doPost threw before returning JSON). */

function extractGoogleAppsScriptFatalMessage(html: string): string | null {
  const mono = html.match(/<div[^>]*font-family:\s*monospace[^>]*>\s*([^<]+)<\/div>/i);

  if (mono?.[1] != null && mono[1].trim().length > 0) {
    return mono[1].replace(/\s+/g, " ").trim();
  }

  const errCls = html.match(/class=["']errorMessage["'][^>]*>([^<]*)/i);

  if (errCls?.[1] != null && errCls[1].trim().length > 0) {
    return errCls[1].trim();
  }

  return null;
}

/** Apps Script often returns HTTP 200 with an HTML error document (deploy/auth), which must not count as success. */

function upstreamBodyLooksLikeHtml(payload: string, contentTypeHeader: string | null): boolean {
  const ct = (contentTypeHeader ?? "").toLowerCase();

  if (ct.includes("text/html")) return true;

  const head = payload.trimStart().slice(0, 64).toLowerCase();

  return head.startsWith("<!doctype html") || head.startsWith("<html");
}

export async function POST(request: NextRequest) {
  const scriptUrl = upstreamScriptUrl();

  if (scriptUrl === null || scriptUrl.length === 0) {
    return NextResponse.json({ error: "Enquiry webhook is not configured on the server." }, { status: 503 });
  }

  let json: LeadBody;

  try {
    json = (await request.json()) as LeadBody;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const name = sanitizeString(json.name, 90);

  const phone = sanitizeString(json.phone, 24);

  const interest = sanitizeString(json.interest, 160);

  const message = sanitizeString(json.message ?? "", 1800) ?? "";

  const sourceRaw = sanitizeString(json.source ?? CONCIERGE_LEAD_SOURCE, 120);

  if (name === null || name.length < 2) {
    return NextResponse.json({ error: "Name is required." }, { status: 400 });
  }

  if (phone === null || phone.replace(/\D/g, "").length < 8) {
    return NextResponse.json({ error: "Phone is required." }, { status: 400 });
  }

  if (interest === null || interest.length < 1) {
    return NextResponse.json({ error: "Interest is required." }, { status: 400 });
  }

  const outbound = {
    interest,
    message,
    name,
    phone,
    source: sourceRaw ?? CONCIERGE_LEAD_SOURCE,
  };

  try {
    const upstream = await fetch(scriptUrl, {
      body: JSON.stringify(outbound),
      cache: "no-store",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json; charset=utf-8",
        // Helps some Google fronts treat the request like a browser POST chain (follows 302 correctly).
        "User-Agent":
          "Mozilla/5.0 (compatible; PrestigeChannelEnquiryBot/1.0; +https://nodejs.org)",
      },
      method: "POST",
      redirect: "follow",
    });

    const text = await upstream.text();

    const mime = upstream.headers.get("content-type");

    if (!upstream.ok) {
      return NextResponse.json(
        {
          detail: text.slice(0, 480),
          error: `Upstream intake returned ${upstream.status}`,
        },
        { status: 502 },
      );
    }

    if (upstreamBodyLooksLikeHtml(text, mime)) {
      const inlined = extractGoogleAppsScriptFatalMessage(text);

      return NextResponse.json(
        {
          detail: inlined ?? text.slice(0, 480),
          error:
            inlined !== null && inlined.length > 0
              ? `Apps Script failed before returning JSON: ${inlined} — open Apps Script ▸ Executions, fix Sheet ID/tab or code errors, Deploy ▸ New deployment (web app "Anyone").`
              : "Apps Script returned Google's HTML error page (deployment URL, Execute as Me + Anyone access, or script crash before jsonOut). Use Deployments ▸ Web app ▸ copy /exec URL; redeploy after code edits.",
        },
        { status: 502 },
      );
    }

    const trimmed = text.trim();

    if (trimmed.length > 0) {
      try {
        const parsed: unknown = JSON.parse(trimmed) as unknown;

        if (typeof parsed === "object" && parsed !== null) {
          const o = parsed as { ok?: unknown; success?: unknown; error?: unknown };

          const failed = o.ok === false || o.success === false;

          if (failed) {
            const reason =
              typeof o.error === "string" && o.error.length > 0
                ? o.error
                : "Apps Script returned a failure payload.";

            return NextResponse.json(
              {
                detail: trimmed.slice(0, 480),
                error: reason,
              },
              { status: 502 },
            );
          }
        }
      } catch {
        // Non‑JSON bodies: treat plain text success as acceptable for legacy deployments.
      }
    }

    return NextResponse.json({
      detail: trimmed.length > 0 ? trimmed.slice(0, 200) : undefined,
      ok: true,
    });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Network error reaching intake URL.";

    return NextResponse.json({ error: msg }, { status: 502 });
  }
}
