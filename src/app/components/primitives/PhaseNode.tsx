export function PhaseNode({
  phase,
  title,
  subtitle,
  active,
}: {
  phase: string;
  title: string;
  subtitle: string;
  active?: boolean;
}) {
  return (
    <div className="flex flex-col items-center">
      <div
        className="w-32 h-32 rounded-full flex items-center justify-center mb-4 relative"
        style={{
          background: active
            ? 'linear-gradient(135deg, rgba(var(--kb-accent-blue-rgb), 0.2) 0%, rgba(var(--kb-accent-purple-rgb), 0.2) 100%)'
            : 'rgba(var(--kb-muted-rgb), 0.1)',
          border: active ? '2px solid var(--kb-accent-blue)' : '2px solid rgba(var(--kb-muted-rgb), 0.3)',
        }}
      >
        {active && (
          <div
            className="absolute inset-0 rounded-full"
            style={{ boxShadow: '0 0 40px rgba(var(--kb-accent-blue-rgb), 0.3)' }}
          />
        )}
        <span
          className="tabular-nums tracking-tight"
          style={{ fontSize: '32px', fontWeight: 700, color: active ? 'var(--kb-accent-blue)' : 'var(--kb-muted)' }}
        >
          {phase}
        </span>
      </div>
      <div
        className="mb-1 tracking-tight"
        style={{ fontSize: '24px', fontWeight: 600, color: active ? 'var(--kb-text)' : 'var(--kb-muted)' }}
      >
        {title}
      </div>
      <div style={{ fontSize: '16px', color: 'var(--kb-muted)' }}>{subtitle}</div>
    </div>
  );
}
