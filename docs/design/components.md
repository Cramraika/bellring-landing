# Components — Bellring (fork of host_page)

Inherits the full Kinetic Observatory component library from `host_page/docs/design/components.md`. Only product-specific additions documented here.

## Inherited (use as-is when porting)

- `<OrbitHero />` — full-viewport hero
- `<Gauge />`, `<Dial />`, `<DataStrip />` — instrument readouts (less relevant for landing; use `<FeatureTile />` instead)
- `<FeatureTile />` — glass-surface card for feature grid
- `<EyebrowLabel />` — uppercase eyebrow with optional pulse-dot
- `<KineticCTA />` — primary button with orbital-particle motion
- `<GridBackdrop />` — observatory grid overlay

## Bellring-specific (1–2 components)

### `<BellRingHero />`
Animated hero centered on a bell SVG. On load + on configurable interval, the bell rings (rotation oscillation + sound-wave ripple in `--color-primary` bell-gold). Replaces `<OrbitHero />` for the landing page hero. Reduced-motion fallback: static bell + opacity pulse.

### `<TierCard />`
Pricing card variant for the 4-tier table (Free / $19 Team / $79 Growth / $299+ Enterprise). Glass-surface base from `<FeatureTile />` + tier-distinguishing `--color-brand` accent on the recommended tier (Growth @ $79). Includes feature checklist, primary CTA, optional "Most Popular" eyebrow.

## Stack

Identical to host_page where applicable, adapted for Next.js App Router:

- React 18, Tailwind 3, shadcn/ui (new-york + neutral)
- `lucide-react` icons
- `framer-motion` for bell-ring animation + orbital particles
- `next-themes` for dark-default + light support

## Forking note

When `host_page` upstream evolves component primitives, mirror them here. Bellring-specific components live ONLY here, not upstream.
