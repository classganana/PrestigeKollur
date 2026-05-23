#!/bin/sh
# Builds every registered project into /app/apps/<slug>/ standalone trees.
# NEXT_PUBLIC_* values are read from docker/projects/<slug>.build.env (generated in CI or copied locally).
set -eu

PROJECTS="prestige-kollur godrej-kukatpally"

mkdir -p apps

for slug in $PROJECTS; do
  echo ""
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
  echo "  Building standalone bundle: ${slug}"
  echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"

  env_file="docker/projects/${slug}.build.env"
  if [ -f "$env_file" ]; then
    echo "  → sourcing ${env_file}"
    set -a
    # shellcheck disable=SC1090
    . "$env_file"
    set +a
  else
    echo "  → no ${env_file} (using defaults / build-arg env only)"
  fi

  export NEXT_PUBLIC_PROJECT_SLUG="$slug"
  export NEXT_DIST_DIR=".next-${slug}"

  rm -rf "$NEXT_DIST_DIR"
  npm run build

  dist_dir="${NEXT_DIST_DIR:-.next}"
  dest="apps/${slug}"
  rm -rf "$dest"
  mkdir -p "$dest/.next"

  if [ ! -d "${dist_dir}/standalone" ]; then
    echo "  ✗ expected ${dist_dir}/standalone after build (check next.config output: standalone)" >&2
    exit 1
  fi

  cp -R "${dist_dir}/standalone/." "$dest/"
  cp -R "${dist_dir}/static" "$dest/.next/static"
  cp -R public "$dest/public"

  echo "  ✓ ${dest}/server.js"
done

echo ""
echo "All project bundles ready under /app/apps/"
