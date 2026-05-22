/**
 * Authorized Sales Partner — disclosure lines only; role headline lives on `SITE.partnerChannelLabel`.
 */

import { resolveProject } from "@/lib/project/resolve-project";

export const PARTNER_BRAND_COPY = {
  disclosure:
    "This site supports marketing outreach for Prestige Kollur and Prestige Group developments. Inventory, pricing, floor plans, and compliance are governed solely by the developer and applicable law; nothing here is an offer or solicitation where restricted.",
  marksLine:
    "\"Prestige\", Prestige Kollur, and related names and logos remain the property of their respective owners and are referenced here only as Authorized Sales Partner representation.",
} as const;

/** Vendored from prestigegoldengrove.live — replace with `NEXT_PUBLIC_PARTNER_LOGO_SRC` after brand sign-off if required. */

export const DEFAULT_PARTNER_PROJECT_LOGO_SRC = "/partners/prestige-golden-grove-logo.webp";

/** Builder mark — same campaign host mirror. */

export const DEFAULT_PARTNER_CORP_MARK_SRC = "/partners/prestige-group-mark.webp";

export function partnerRoleLine(): string {
  return resolveProject().site.partnerChannelLabel;
}

/**
 * Project lockup for chrome. Set `NEXT_PUBLIC_PARTNER_LOGO_SRC=none` for text-only masthead.
 * Remote URLs require `NEXT_PUBLIC_IMAGE_HOST` (see `next.config.ts`) or use `none` + rely on typography.
 */

export function partnerLogoSrc(): string | null {
  const raw = process.env.NEXT_PUBLIC_PARTNER_LOGO_SRC?.trim();

  if (raw === "none") return null;

  if (raw !== undefined && raw.length > 0) return raw;

  return DEFAULT_PARTNER_PROJECT_LOGO_SRC;
}

export function partnerCorpMarkSrc(): string | null {
  const raw = process.env.NEXT_PUBLIC_PARTNER_CORP_MARK_SRC?.trim();

  if (raw === "none") return null;

  if (raw !== undefined && raw.length > 0) return raw;

  return DEFAULT_PARTNER_CORP_MARK_SRC;
}

/** Optional reference landing — surfaced as “Reference campaign site”, not framed as Prestige Group corporate. */

export function partnerReferenceHref(): string | null {
  const raw = process.env.NEXT_PUBLIC_PARTNER_REFERENCE_URL?.trim();

  return raw !== undefined && raw.length > 0 ? raw : null;
}
