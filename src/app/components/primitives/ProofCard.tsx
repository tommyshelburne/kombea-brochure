export function ProofCard({
  stat,
  statLabel,
  title,
  points,
}: {
  stat: string;
  statLabel: string;
  title: string;
  points: string[];
}) {
  return (
    <div
      className="p-7 rounded-xl flex flex-col"
      style={{
        background: 'linear-gradient(135deg, var(--kb-surface-bg) 0%, var(--kb-surface-bg-alt) 100%)',
        border: '1px solid var(--kb-surface-border)',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.4)',
      }}
    >
      <div className="mb-3">
        <div
          className="tracking-tight tabular-nums"
          style={{
            fontSize: '44px',
            fontWeight: 800,
            color: 'var(--kb-accent-blue)',
            letterSpacing: '-0.03em',
            lineHeight: '1',
          }}
        >
          {stat}
        </div>
        <div
          style={{
            fontSize: '12px',
            color: 'var(--kb-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginTop: '4px',
          }}
        >
          {statLabel}
        </div>
      </div>

      <h3
        className="mb-4 tracking-tight"
        style={{ fontSize: '20px', fontWeight: 600, color: 'var(--kb-text)', lineHeight: '1.3' }}
      >
        {title}
      </h3>

      <div className="space-y-3">
        {points.map((point, idx) => (
          <div key={idx} className="flex items-start gap-4">
            <div
              className="flex-shrink-0"
              style={{
                width: '4px',
                height: '4px',
                borderRadius: '50%',
                backgroundColor: 'var(--kb-muted)',
                marginTop: '9px',
              }}
            />
            <p style={{ fontSize: '15px', color: 'var(--kb-muted)', lineHeight: '1.5' }}>{point}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
