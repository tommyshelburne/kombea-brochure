export function PainPoint({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div
        className="mb-1 tracking-tight tabular-nums"
        style={{ fontSize: '14px', color: 'var(--kb-accent-blue)', fontWeight: 600 }}
      >
        {number}
      </div>
      <h4
        className="mb-2 tracking-tight"
        style={{ fontSize: '22px', fontWeight: 600, color: 'var(--kb-text)' }}
      >
        {title}
      </h4>
      <p style={{ fontSize: '15px', color: 'var(--kb-muted)', lineHeight: '1.5' }}>{description}</p>
    </div>
  );
}
