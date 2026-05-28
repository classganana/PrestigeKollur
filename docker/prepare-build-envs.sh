#!/usr/bin/env bash
# Writes docker/projects/*.build.env from environment variables (used in CI).
# Prefix convention: PRESTIGE_* / GODREJ_* → prestige-kollur / godrej-kukatpally bundles.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT_DIR="$ROOT/docker/projects"
mkdir -p "$OUT_DIR"

write_project_env() {
  local slug="$1"
  local prefix="$2"
  local out="$OUT_DIR/${slug}.build.env"

  # Indirect expansion: PRESTIGE_NEXT_PUBLIC_SITE_URL etc.
  get_var() {
    local key="$1"
    local prefixed="${prefix}_${key}"
    # shellcheck disable=SC2154
    if [ -n "${!prefixed:-}" ]; then
      printf '%s' "${!prefixed}"
      return
    fi
    # Backward compatibility: unprefixed secrets (shared contact until per-brand numbers ship)
    if [ "$prefix" = "PRESTIGE" ] || [ "$prefix" = "GODREJ" ]; then
      if [ -n "${!key:-}" ]; then
        printf '%s' "${!key}"
        return
      fi
    fi
    printf ''
  }

  cat > "$out" <<EOF
NEXT_PUBLIC_SITE_URL=$(get_var NEXT_PUBLIC_SITE_URL)
NEXT_PUBLIC_ANALYTICS_ID=$(get_var NEXT_PUBLIC_ANALYTICS_ID)
NEXT_PUBLIC_META_PIXEL_ID=$(get_var NEXT_PUBLIC_META_PIXEL_ID)
NEXT_PUBLIC_WHATSAPP_PHONE=$(get_var NEXT_PUBLIC_WHATSAPP_PHONE)
NEXT_PUBLIC_WHATSAPP_PREFILL_MESSAGE=$(get_var NEXT_PUBLIC_WHATSAPP_PREFILL_MESSAGE)
NEXT_PUBLIC_VOICE_PHONE=$(get_var NEXT_PUBLIC_VOICE_PHONE)
NEXT_PUBLIC_ENQUIRY_EMAIL=$(get_var NEXT_PUBLIC_ENQUIRY_EMAIL)
NEXT_PUBLIC_ENQUIRY_SCRIPT_URL=$(get_var NEXT_PUBLIC_ENQUIRY_SCRIPT_URL)
NEXT_PUBLIC_DOC_BROCHURE_PDF=$(get_var NEXT_PUBLIC_DOC_BROCHURE_PDF)
NEXT_PUBLIC_DOC_COST_SHEET_PDF=$(get_var NEXT_PUBLIC_DOC_COST_SHEET_PDF)
NEXT_PUBLIC_DOC_MASTER_PLAN_PDF=$(get_var NEXT_PUBLIC_DOC_MASTER_PLAN_PDF)
NEXT_PUBLIC_TOWNSHIP_FLYTHROUGH_SRC=$(get_var NEXT_PUBLIC_TOWNSHIP_FLYTHROUGH_SRC)
NEXT_PUBLIC_IMAGE_HOST=$(get_var NEXT_PUBLIC_IMAGE_HOST)
NEXT_PUBLIC_PARTNER_LOGO_SRC=$(get_var NEXT_PUBLIC_PARTNER_LOGO_SRC)
NEXT_PUBLIC_PARTNER_CORP_MARK_SRC=$(get_var NEXT_PUBLIC_PARTNER_CORP_MARK_SRC)
NEXT_PUBLIC_PARTNER_LIFESTYLE_GALLERY_WEBPS=$(get_var NEXT_PUBLIC_PARTNER_LIFESTYLE_GALLERY_WEBPS)
NEXT_PUBLIC_PARTNER_REFERENCE_URL=$(get_var NEXT_PUBLIC_PARTNER_REFERENCE_URL)
EOF

  echo "Wrote ${out}"
}

write_project_env "prestige-kollur" "PRESTIGE"
write_project_env "godrej-kukatpally" "GODREJ"
