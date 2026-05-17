# Prestige Kollur

Authorized Sales Partner channel for Prestige Kollur (Velimela / Tellapur–Kollur). Next.js App Router frontend with concierge-led capture.

## Prerequisites

Node **20**, npm.

## Development

Copy `.env.example` → `.env.local`, then:

```bash
npm ci
npm run dev
```

## Production build locally

```bash
npm ci
npm run lint
npm run build
NODE_ENV=production PORT=3000 node .next/standalone/server.js
```

For standalone output, mirror the CI staging step:

```bash
mkdir -p .next/standalone/.next
rm -rf .next/standalone/.next/static .next/standalone/public
cp -r .next/static .next/standalone/.next/static
cp -r public .next/standalone/public
cd .next/standalone && NODE_ENV=production PORT=3000 HOSTNAME=0.0.0.0 node server.js
```

## EC2 deployment (GitHub Actions)

Workflow: [.github/workflows/deploy-ec2.yml](.github/workflows/deploy-ec2.yml). It lints, runs `next build` with **`output: "standalone"`**, stages static assets, and **rsync**s `/ .next/standalone/` to your VM.

Configure repository secrets (see YAML header). **`NEXT_PUBLIC_*` must mirror production**, because Next inlines those at build time.

**Runtime-only** variables (typically `ENQUIRY_SCRIPT_URL`) live on the instance — example:

```bash
# /opt/prestige-kollur/.env  (chmod 600, not in git)
ENQUIRY_SCRIPT_URL=https://script.google.com/macros/s/YOUR_EXEC/exec
PORT=3000
HOSTNAME=0.0.0.0
```

Run with **systemd** or **PM2** so `NODE_ENV=production`, then put **nginx**/`caddy`/ALB TLS in front (`proxy_pass` → `localhost:3000`).
# PrestigeKollur
