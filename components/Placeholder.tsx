// Placeholder for product components.
// Forks of host_page should bring in <OrbitHero />, <Gauge />, <FeatureTile />, etc.
// per docs/design/components.md. Add as needed when landing page is fleshed out.
export function Placeholder({ label }: { label: string }) {
  return (
    <div className="p-6 rounded-lg border border-border bg-card text-card-foreground">
      <p className="text-xs uppercase tracking-[0.1em] text-primary">{label}</p>
    </div>
  );
}
