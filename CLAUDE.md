# Bellring Landing — Whitelabel Sale-Celebration SaaS Landing Page

This repo is the **landing page** for **Bellring** — the whitelabel sale-celebration SaaS platform under the Vagary Labs brand umbrella. It pairs with two off-fleet repos: `bellring-server` (Render.com-hosted backend) and `bellring-extension` (browser MV3 extension).

## Claude Preamble
**Universal laws** (§4), **MCP routing** (§6), **Drift protocol** (§11), **Capability resolution** (§15), **Subagent SKILL POLICY** (§16), **Cite format** (§19), **Anti-hallucination** (§34), **Brand architecture** (§41), **Design system integration** (§42).

**Sources**: `~/.claude/conventions/universal-claudemd.md` + `~/.claude/conventions/project-hygiene.md` + `~/.claude/conventions/design-system.md`.

---

## Status & Tier

**Tier B — fork of host_page Tier-A design.** Landing-page surface only; no backend logic. Token-swap fork from `host_page` (Kinetic Observatory). Pre-launch.

- Active cadence: pre-launch (no release schedule yet)
- Inherits: design tokens (palette, typography, components), CI gates (Trivy + Cosign), Renovate canonical config, observability scrape pattern

## Stack

- **Framework**: Next.js 14 App Router
- **UI**: React 18 + Tailwind 3 + shadcn/ui (new-york, baseColor neutral)
- **Icons**: lucide-react
- **Theming**: next-themes (dark default, light supported)
- **Animation**: framer-motion
- **Deploy**: Coolify (Vagary VPS) → docker-compose.yml + Dockerfile

## Brand Tokens (4-token swap from host_page)

- `primary`: `#FFD24A` — bell-gold (CTAs, accent fills)
- `secondary`: `#F59E0B` — bell-orange (deeper accent)
- `accent`: `#3B82F6` — teammate-blue (links)
- `brand`: `#FFB347` — bell-bronze (logo + brand surfaces)

Everything else (typography, ko-surface family, ko-healthy/warning, shadcn neutral) inherited from host_page.

## Key Directories

- `app/` — Next.js App Router routes (layout, page, globals.css)
- `components/` — Product components (placeholder + shadcn primitives as needed)
- `lib/` — Utilities (cn helper, etc.)
- `docs/design/` — Design surface (palette, brand, components fork notes)

## Pairing

This landing page LINKS to:
- `bellring-server` (Render.com; off-fleet) — backend API
- `bellring-extension` (browser MV3; separate repo) — Chrome/Firefox extension

NOT served from this repo: server logic, extension binaries, dashboard UI.

## Security & Secrets

- NEVER hardcode API keys; use `.env.local` (gitignored)
- Coolify env vars for prod
- No secrets stored in this repo

## Deployment

- Build: `npm run build`
- Image: GHCR via Cosign-signed CI
- Coolify: docker-compose.yml referenced by Coolify Compose deploy
- Domain: `bellring.app` or `bellring.io` (operator decides)

## Past / Retired

(none — pre-launch repo)
