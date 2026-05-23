# Multi-container deployment guide

One **reusable Docker image** runs multiple lightweight containers. Each container serves a **pre-built standalone bundle** selected by `NEXT_PUBLIC_PROJECT_SLUG`. NGINX routes public domains to the correct container.

There is **no hostname-based project switching** inside a single Node process.

---

## Architecture

```
                    ┌─────────────┐
  prestige.com ───► │    NGINX    │───► prestige:3000  (bundle: prestige-kollur)
                    │   :80/:443  │
  godrej.com    ───►│             │───► godrej:3000    (bundle: godrej-kukatpally)
                    └─────────────┘
                           │
              same image: ${DOCKERHUB_USER}/real-estate-platform:latest
```

| Layer | Isolation mechanism |
|-------|---------------------|
| Build / SEO / theme / analytics (client) | Baked per project during `docker/build-projects.sh` via `docker/projects/<slug>.build.env` |
| Runtime server (enquiry webhook) | `ENQUIRY_SCRIPT_URL` per container in `docker-compose.yml` |
| Process | Separate container + separate standalone `server.js` tree under `/apps/<slug>/` |

**Important:** `NEXT_PUBLIC_*` variables are **build-time** in Next.js. Setting them only at container runtime does **not** change the client bundle. The image contains one standalone tree per project; the entrypoint picks which tree to run.

---

## Prerequisites

- Docker 24+ and Docker Compose v2
- Domain DNS → EC2 (or load balancer) pointing at NGINX
- Docker Hub account (or private registry)

---

## 1. Configure build-time env (per project)

Copy examples and fill production values **before** `docker build`:

```bash
cp docker/projects/prestige-kollur.build.env.example docker/projects/prestige-kollur.build.env
cp docker/projects/godrej-kukatpally.build.env.example docker/projects/godrej-kukatpally.build.env
# Edit both files — especially NEXT_PUBLIC_SITE_URL and analytics IDs
```

These files are gitignored. CI generates them from GitHub Secrets (see below).

### Required per project (build)

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Canonical origin, OG, sitemap, robots indexing |
| `NEXT_PUBLIC_ANALYTICS_ID` | GA4 (if project analytics provider is `ga4`) |
| `NEXT_PUBLIC_META_PIXEL_ID` | Meta Pixel (if enabled in project analytics config) |
| `NEXT_PUBLIC_WHATSAPP_PHONE` | WhatsApp / tel CTAs |

See `docker/projects/*.build.env.example` for the full list.

---

## 2. Build the platform image

```bash
docker build -t real-estate-platform:local .
```

This runs `docker/build-projects.sh`, which:

1. Builds `prestige-kollur` → `/apps/prestige-kollur/`
2. Builds `godrej-kukatpally` → `/apps/godrej-kukatpally/`

Push to registry:

```bash
docker tag real-estate-platform:local $DOCKERHUB_USER/real-estate-platform:latest
docker push $DOCKERHUB_USER/real-estate-platform:latest
```

---

## 3. Runtime env (EC2 / compose)

Create `.env` next to `docker-compose.yml`:

```bash
DOCKERHUB_USER=your-dockerhub-user
IMAGE_NAME=real-estate-platform

# Public domains (NGINX server_name)
PRESTIGE_DOMAIN=prestige.yourdomain.com
GODREJ_DOMAIN=godrej.yourdomain.com

# Optional direct host access (debugging)
PRESTIGE_HOST_PORT=3000
GODREJ_HOST_PORT=3001
NGINX_HTTP_PORT=80
NGINX_HTTPS_PORT=443

# Server-only enquiry webhook (runtime — not baked into JS)
PRESTIGE_ENQUIRY_SCRIPT_URL=https://script.google.com/macros/s/.../exec
GODREJ_ENQUIRY_SCRIPT_URL=https://script.google.com/macros/s/.../exec
# Or shared fallback:
ENQUIRY_SCRIPT_URL=https://script.google.com/macros/s/.../exec
```

Start stack:

```bash
docker compose pull
docker compose up -d
docker compose ps
```

Verify:

```bash
curl -I -H "Host: $PRESTIGE_DOMAIN" http://localhost/
curl -I -H "Host: $GODREJ_DOMAIN" http://localhost/
curl http://localhost:3000/   # Prestige direct
curl http://localhost:3001/   # Godrej direct
```

---

## 4. NGINX / SSL

- Template: `docker/nginx/templates/projects.conf.template`
- Rendered at NGINX container start via `envsubst`
- Uncomment `listen 443 ssl http2` blocks and mount certs:

```yaml
volumes:
  - ./docker/nginx/certs:/etc/nginx/certs:ro
```

**Recommended:** Let's Encrypt (certbot) on host or Caddy in front; terminate TLS and proxy to NGINX `:80`, or mount certs into the NGINX container.

Ensure security groups allow **80/443** (public) and optionally **3000/3001** (admin/debug only).

---

## 5. Adding a future project

1. Register project in `lib/project/resolve-project.ts` and add project pack under `projects/<slug>/`
2. Add slug to `PROJECTS` in `docker/build-projects.sh`
3. Add `docker/projects/<slug>.build.env.example` (+ CI secret wiring)
4. Add compose service + NGINX `server` block in `projects.conf.template`
5. Rebuild and push **one** image — all bundles ship together

---

## 6. GitHub Actions secrets

### Shared (repository)

| Secret | Used for |
|--------|----------|
| `DOCKER_USERNAME` | Registry login |
| `DOCKER_PASSWORD` | Registry login |
| `EC2_HOST` | Deploy target |
| `EC2_USER` | Deploy SSH user |
| `EC2_SSH_KEY` | Deploy SSH key |

### Prestige — build-time (`docker/projects/prestige-kollur.build.env`)

| Secret | Maps to |
|--------|---------|
| `PRESTIGE_NEXT_PUBLIC_SITE_URL` | `NEXT_PUBLIC_SITE_URL` |
| `PRESTIGE_NEXT_PUBLIC_ANALYTICS_ID` | `NEXT_PUBLIC_ANALYTICS_ID` |
| `PRESTIGE_NEXT_PUBLIC_META_PIXEL_ID` | `NEXT_PUBLIC_META_PIXEL_ID` |
| `PRESTIGE_NEXT_PUBLIC_WHATSAPP_PHONE` | `NEXT_PUBLIC_WHATSAPP_PHONE` |
| … | (see `.build.env.example`) |

**Backward compatible:** if `PRESTIGE_NEXT_PUBLIC_SITE_URL` is unset, CI falls back to `NEXT_PUBLIC_SITE_URL`.

### Godrej — build-time (`docker/projects/godrej-kukatpally.build.env`)

| Secret | Maps to |
|--------|---------|
| `GODREJ_NEXT_PUBLIC_SITE_URL` | `NEXT_PUBLIC_SITE_URL` |
| `GODREJ_NEXT_PUBLIC_ANALYTICS_ID` | `NEXT_PUBLIC_ANALYTICS_ID` |
| `GODREJ_NEXT_PUBLIC_META_PIXEL_ID` | `NEXT_PUBLIC_META_PIXEL_ID` |
| `GODREJ_NEXT_PUBLIC_WHATSAPP_PHONE` | `NEXT_PUBLIC_WHATSAPP_PHONE` |
| … | |

### EC2 runtime (`.env` on server — not GitHub, unless injected by deploy)

| Variable | Scope |
|----------|-------|
| `PRESTIGE_DOMAIN` / `GODREJ_DOMAIN` | NGINX routing |
| `PRESTIGE_ENQUIRY_SCRIPT_URL` / `GODREJ_ENQUIRY_SCRIPT_URL` | Per-container webhook |
| `DOCKERHUB_USER` / `IMAGE_NAME` | Image pull |

**Do not** put build-time `NEXT_PUBLIC_*` in EC2 runtime env expecting client bundle changes — rebuild the image instead.

---

## 7. Local multi-container smoke test

```bash
# Build env files with localhost URLs for smoke testing
echo 'NEXT_PUBLIC_SITE_URL=http://localhost:3000' > docker/projects/prestige-kollur.build.env
echo 'NEXT_PUBLIC_SITE_URL=http://localhost:3001' > docker/projects/godrej-kukatpally.build.env

docker build -t real-estate-platform:local .
DOCKERHUB_USER=local IMAGE_NAME=real-estate-platform docker compose up -d
```

---

## Troubleshooting

| Symptom | Check |
|---------|-------|
| Wrong brand / theme | Container `NEXT_PUBLIC_PROJECT_SLUG` must match a bundle under `/apps/` |
| SEO `noindex` in production | `NEXT_PUBLIC_SITE_URL` must be set **at build** in that project's `.build.env` |
| NGINX 502 | `docker compose logs prestige godrej` — wait for healthchecks |
| Entrypoint error "No standalone bundle" | Slug typo or image built before project was registered |

---

## File reference

| Path | Role |
|------|------|
| `Dockerfile` | Multi-project build + `/apps/` layout |
| `docker/build-projects.sh` | Per-slug `npm run build` loop |
| `docker/entrypoint.sh` | Select bundle at container start |
| `docker-compose.yml` | prestige + godrej + nginx |
| `docker/nginx/` | Reverse proxy config |
| `.github/workflows/docker-build-push-deploy.yml` | CI build + EC2 deploy |
