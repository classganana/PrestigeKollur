# syntax=docker/dockerfile:1
#
# Multi-project platform image — builds ONE image containing standalone bundles for
# every registered project under /apps/<slug>/. Each container selects its bundle
# via NEXT_PUBLIC_PROJECT_SLUG at startup (see docker/entrypoint.sh).
#
# Build-time per-project env: docker/projects/<slug>.build.env (CI-generated from secrets).
# Runtime server env: ENQUIRY_SCRIPT_URL (injected per container via compose).

FROM node:20-alpine AS base

FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Optional global overrides (per-project files take precedence in build-projects.sh)
ARG NEXT_PUBLIC_WHATSAPP_PHONE
ARG NEXT_PUBLIC_ENQUIRY_SCRIPT_URL
ENV NEXT_PUBLIC_WHATSAPP_PHONE=$NEXT_PUBLIC_WHATSAPP_PHONE
ENV NEXT_PUBLIC_ENQUIRY_SCRIPT_URL=$NEXT_PUBLIC_ENQUIRY_SCRIPT_URL

ENV NEXT_TELEMETRY_DISABLED=1

RUN chmod +x docker/build-projects.sh && ./docker/build-projects.sh

FROM base AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

RUN addgroup --system --gid 1001 nodejs && adduser --system --uid 1001 nextjs

COPY --from=builder --chown=nextjs:nodejs /app/apps /apps
COPY --chown=nextjs:nodejs docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

USER nextjs
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD node -e "fetch('http://127.0.0.1:3000').then(r=>process.exit(r.ok?0:1)).catch(()=>process.exit(1))"

ENTRYPOINT ["/entrypoint.sh"]
