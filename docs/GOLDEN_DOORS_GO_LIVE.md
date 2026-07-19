# Golden Doors — go-live checklist

Content and secrets the client (or you) must provide before production launch.

## Required from client

- [ ] Legal entity name for footer / disclosure (currently: “Golden Doors”)
- [ ] RERA / channel-partner disclaimer wording (legal review)
- [ ] WhatsApp business number → `GOLDEN_DOORS_NEXT_PUBLIC_WHATSAPP_PHONE`
- [ ] Voice / call desk number → `GOLDEN_DOORS_NEXT_PUBLIC_VOICE_PHONE`
- [ ] Enquiry email fallback → `GOLDEN_DOORS_NEXT_PUBLIC_ENQUIRY_EMAIL`
- [x] Brand logo (client master + generated variations under `public/partners/golden-doors-*`)
  - Full: `golden-doors-logo.png`
  - Compact (footer): `golden-doors-lockup-compact.png`
  - Horizontal: `golden-doors-lockup-horizontal.png`
  - Icon: `golden-doors-icon.png`
- [ ] Confirmed trust stats (replace placeholders in `projects/golden-doors/content/about.ts`)
- [ ] Meta Pixel ID → `GOLDEN_DOORS_NEXT_PUBLIC_META_PIXEL_ID`
- [ ] GA4 measurement ID → `GOLDEN_DOORS_NEXT_PUBLIC_ANALYTICS_ID`
- [ ] Brand domain → `GOLDEN_DOORS_DOMAIN=goldendoorsrealestate.in` + `GOLDEN_DOORS_NEXT_PUBLIC_SITE_URL=https://goldendoorsrealestate.in`

## Portfolio links

Set live microsite URLs on the Golden Doors build:

- `GOLDEN_DOORS_NEXT_PUBLIC_PORTFOLIO_PRESTIGE_URL=https://golden-grove-tellapur.site`
- `GOLDEN_DOORS_NEXT_PUBLIC_PORTFOLIO_GODREJ_URL=https://godrej-kukatpally-new-launch.site`

On Prestige / Godrej builds, set the reverse link:

- `PRESTIGE_NEXT_PUBLIC_PARTNER_HUB_URL=https://goldendoorsrealestate.in`
- `GODREJ_NEXT_PUBLIC_PARTNER_HUB_URL=https://goldendoorsrealestate.in`

## Content you maintain (dev)

| File | Purpose |
|------|---------|
| `projects/golden-doors/content/portfolio.ts` | Add/remove project cards |
| `projects/golden-doors/content/about.ts` | Partner story + stats |
| `projects/golden-doors/content/trust.ts` | Disclaimer / credentials |
| `projects/golden-doors/content/hero.ts` | Hero CTAs / footnote |
| `projects/golden-doors/site.ts` | Brand name, WhatsApp templates, chrome |

## Local preview

```bash
npm run dev:golden
# → http://localhost:3002
```
