export function MetricRow({
  label,
  value,
  sublabel,
  highlight,
}: {
  label: string;
  value: string;
  sublabel: string;
  highlight?: boolean;
}) {
  return (
    <div>
      <div
        className="tracking-tight"
        style={{
          fontSize: '13px',
          color: 'var(--kb-muted)',
          fontWeight: 500,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}
      >
        {label}
      </div>
      <div
        className="tracking-tight tabular-nums"
        style={{
          fontSize: '30px',
          fontWeight: 700,
          color: highlight ? 'var(--kb-accent-blue)' : 'var(--kb-text)',
          letterSpacing: '-0.02em',
          lineHeight: '1',
        }}
      >
        {value}
      </div>
      <div style={{ fontSize: '13px', color: 'var(--kb-muted)', lineHeight: '1.4' }}>{sublabel}</div>
    </div>
  );
}
