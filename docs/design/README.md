# Design surface — Bellring (fork of host_page Kinetic Observatory)

Tier B per `~/.claude/conventions/design-system.md §2` — token-swap fork of the Tier A host_page design.

## Fork lineage

Forked from `~/Documents/Github/host_page/docs/design/` 2026-04-28 by PCN Session 11B.

**What's inherited (do NOT modify):**
- Typography scale (Manrope display + Inter body + JetBrains Mono dials) — see host_page `typography.md`
- Component philosophy (`<OrbitHero />`, `<Gauge />`, `<Dial />`, `<FeatureTile />`, `<EyebrowLabel />`, `<KineticCTA />`) — see host_page `components.md`
- shadcn posture (baseColor: neutral, style: new-york, cssVariables: true)
- Surface family (`ko-surface-*`), semantic status (`ko-healthy/warning/error/unknown`)
- Animation timings (150ms / 300ms / 600ms; ease-out-expo)
- Accessibility posture (WCAG AA, focus rings, reduced-motion fallbacks)

**What's forked (see local files):**
- `palette.md` — 4-token swap (primary, secondary, accent, brand) for bell-gold celebratory palette
- `brand.md` — Bellring identity, voice, audience
- `components.md` — fork notes; placeholder for Bellring-specific 1-2 components

## File map

- `README.md` — this file (fork-pattern reference)
- `palette.md` — token-swap stub
- `brand.md` — product identity / voice / audience
- `components.md` — fork notes + product-specific components

## Maintenance rule

When host_page upstream changes typography, surfaces, or component primitives, mirror those updates here. Only the 4 brand swap-points stay product-specific.
