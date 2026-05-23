#!/bin/sh
# Selects the pre-built standalone bundle via NEXT_PUBLIC_PROJECT_SLUG.
# Each container runs ONE project — no hostname-based switching.
set -eu

SLUG="${NEXT_PUBLIC_PROJECT_SLUG:-prestige-kollur}"
APP_DIR="/apps/${SLUG}"

if [ ! -f "${APP_DIR}/server.js" ]; then
  echo "[entrypoint] ERROR: No standalone bundle for NEXT_PUBLIC_PROJECT_SLUG=${SLUG}" >&2
  echo "[entrypoint] Available:" >&2
  ls -1 /apps 2>/dev/null | sed 's/^/  - /' >&2 || true
  exit 1
fi

echo "[entrypoint] project=${SLUG} port=${PORT:-3000} dir=${APP_DIR}"

cd "$APP_DIR"
exec node server.js
