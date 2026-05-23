/**
 * Authorized channel partner — disclosure lines and lockup assets.
 * Copy and defaults resolve from the active project branding layer.
 */

import { resolveBranding, resolveProject } from "@/lib/project/resolve-project";

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

  return resolveBranding().defaultProjectLogoSrc;
}

export function partnerCorpMarkSrc(): string | null {
  const raw = process.env.NEXT_PUBLIC_PARTNER_CORP_MARK_SRC?.trim();

  if (raw === "none") return null;

  if (raw !== undefined && raw.length > 0) return raw;

  return resolveBranding().defaultCorpMarkSrc;
}

/** Optional reference landing — surfaced as “Reference campaign site”, not framed as developer corporate. */
export function partnerReferenceHref(): string | null {
  const raw = process.env.NEXT_PUBLIC_PARTNER_REFERENCE_URL?.trim();

  return raw !== undefined && raw.length > 0 ? raw : null;
}

/** @deprecated Use `resolveBranding().disclosure` — retained for import compatibility. */
export function partnerDisclosureCopy(): string {
  return resolveBranding().disclosure;
}

/** @deprecated Use `resolveBranding().marksLine` — retained for import compatibility. */
export function partnerMarksLine(): string {
  return resolveBranding().marksLine;
}
