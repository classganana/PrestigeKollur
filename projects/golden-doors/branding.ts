import type { PartnerBranding } from "@/lib/project/types";

/**
 * Golden Doors — brand disclosure and lockup assets.
 *
 * Asset map (under `/public/partners/`):
 * - `golden-doors-logo.png` — full client master (icon + name + Real Estate + tagline)
 * - `golden-doors-lockup-compact.png` — footer / disclosure (icon + name + Real Estate)
 * - `golden-doors-lockup-horizontal.png` — wide masthead / OG-style lockup
 * - `golden-doors-icon.png` — icon-only mark (favicon-adjacent / small chrome)
 */
export const goldenDoorsBranding: PartnerBranding = {
  disclosure:
    "Golden Doors acts as an authorized channel partner and facilitator between homebuyers and developers. Inventory, pricing, floor plans, RERA status, and compliance are governed solely by the respective developers and applicable law. Nothing on this site constitutes an offer or solicitation where restricted.",
  marksLine:
    "\"Prestige\", \"Godrej\", and related project names and logos remain the property of their respective owners and are referenced here only as authorized channel partner representation. \"Golden Doors\" and related marks are used by Golden Doors Real Estate.",
  defaultProjectLogoSrc: "/partners/golden-doors-lockup-compact.png",
  /** Brand hub shows a single lockup — no second nested mark. */
  defaultCorpMarkSrc: "none",
  partnerLogoAlt: "Golden Doors Real Estate — Your door to a golden future",
};
