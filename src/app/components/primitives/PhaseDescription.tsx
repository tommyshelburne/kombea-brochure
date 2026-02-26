export function PhaseDescription({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div
      className="p-6 rounded-xl"
      style={{
        background: 'linear-gradient(135deg, var(--kb-surface-bg) 0%, var(--kb-surface-bg-alt) 100%)',
        border: '1px solid var(--kb-surface-border)',
      }}
    >
      <div
        className="mb-3 tabular-nums tracking-tight"
        style={{
          fontSize: '13px',
          color: 'var(--kb-muted)',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.08em',
        }}
      >
        Phase {number}
      </div>
      <h4
        className="mb-4 tracking-tight"
        style={{ fontSize: '21px', fontWeight: 600, color: 'var(--kb-text)', lineHeight: '1.3' }}
      >
        {title}
      </h4>
      <p style={{ fontSize: '15px', color: 'var(--kb-muted)', lineHeight: '1.5' }}>{description}</p>
    </div>
  );
}
