# Palette — Bellring

Token-swap fork of host_page Kinetic Observatory. Only 4 swap-points changed; everything else inherited.

## Brand swap-points (CSS custom-properties in `app/globals.css`)

| Token | Hex | Role |
|---|---|---|
| `--color-primary` | `#FFD24A` | bell-gold — CTAs, instrument fills, active states |
| `--color-secondary` | `#F59E0B` | bell-orange — deeper accent, links |
| `--color-accent` | `#3B82F6` | teammate-blue — secondary CTAs, info states |
| `--color-brand` | `#FFB347` | bell-bronze — logo + brand surfaces |

## Inherited from host_page (DO NOT modify)

- `ko-surface` family: `#0e0e10`, `#131315`, `#1f1f22`, `#262528`
- `ko-on-surface` / `ko-on-surface-variant`: `#f9f5f8` / `#adaaad`
- `ko-healthy/warning/error/unknown`: `#10b981` / `#f59e0b` / `#ff716c` / `#71717a`
- shadcn neutral HSL ramp (untouched)
- Light/dark mode definitions (only `--color-*` swap-points override)

## Why bell-gold

Bell-ringing on the sales floor is a celebratory moment — gold + orange evoke trophy, achievement, warmth. Teammate-blue accent keeps the team-collaboration angle present.

## Reference

Upstream: `~/Documents/Github/host_page/docs/design/palette.md` § Template swap points.
