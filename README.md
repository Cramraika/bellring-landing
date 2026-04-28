# Bellring

Whitelabel sale-celebration SaaS for high-performance sales teams. Ring the bell, share the win.

**Status**: pre-launch
**Brand**: Vagary Labs (tech/R&D division of Vagary Life Pvt Ltd)
**Domain**: `bellring.app` or `bellring.io` (TBD)

## What this repo is

This is the **landing page** for Bellring. Three repos make up the product:

| Repo | Purpose | Hosting |
|---|---|---|
| `bellring-landing` (this) | Marketing site + sign-up | Coolify (Vagary VPS) |
| `bellring-server` | Backend API | Render.com (off-fleet) |
| `bellring-extension` | Chrome MV3 + Firefox/Edge extension | Browser stores |

## Pricing

- Starter: **$19/mo**
- Team: **$79/mo**
- Enterprise: **$299/mo**

## Brand identity

Bell-ringing ritual on the sales floor — the universal celebration moment when a deal closes. Bellring brings that to distributed teams.

- **Primary**: bell-gold `#FFD24A`
- **Secondary**: bell-orange `#F59E0B`
- **Accent**: teammate-blue `#3B82F6`
- **Brand surface**: bell-bronze `#FFB347`

See `docs/design/` for full token system + component fork notes from `host_page` (Kinetic Observatory).

## Local dev

```bash
npm install
npm run dev   # http://localhost:3000
```

## License

MIT — see `LICENSE`.
