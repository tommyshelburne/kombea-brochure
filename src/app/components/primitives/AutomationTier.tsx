export function AutomationTier({
  percentage,
  label,
  description,
  active,
  highlight,
}: {
  percentage: string;
  label: string;
  description?: string;
  active: boolean;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center gap-6">
      <div
        className="flex-shrink-0 w-24 text-right tabular-nums tracking-tight"
        style={{
          fontSize: '32px',
          fontWeight: 700,
          color: highlight ? 'var(--kb-accent-blue)' : active ? 'var(--kb-text)' : 'var(--kb-muted)',
          letterSpacing: '-0.02em',
        }}
      >
        {percentage}
      </div>
      <div
        className="flex-1 px-6 py-4 rounded-lg relative overflow-hidden"
        style={{
          background: highlight
            ? 'linear-gradient(90deg, rgba(var(--kb-accent-blue-rgb), 0.15) 0%, rgba(var(--kb-accent-purple-rgb), 0.1) 100%)'
            : active
            ? 'rgba(var(--kb-accent-blue-rgb), 0.05)'
            : 'rgba(var(--kb-muted-rgb), 0.03)',
          border: highlight
            ? '2px solid rgba(var(--kb-accent-blue-rgb), 0.3)'
            : active
            ? '1px solid rgba(var(--kb-accent-blue-rgb), 0.15)'
            : '1px solid rgba(var(--kb-muted-rgb), 0.1)',
        }}
      >
        {highlight && (
          <div
            className="absolute left-0 top-0 bottom-0 w-1"
            style={{
              background: 'linear-gradient(180deg, var(--kb-accent-blue) 0%, var(--kb-accent-purple) 100%)',
              boxShadow: '0 0 20px rgba(var(--kb-accent-blue-rgb), 0.5)',
            }}
          />
        )}
        <div
          className="tracking-tight"
          style={{
            fontSize: '20px',
            fontWeight: 600,
            color: highlight ? 'var(--kb-text)' : active ? 'var(--kb-text)' : 'var(--kb-muted)',
          }}
        >
          {label}
        </div>
        {description && (
          <div
            style={{
              fontSize: '13px',
              color: highlight ? 'rgba(var(--kb-muted-rgb), 0.7)' : 'var(--kb-muted)',
              marginTop: '2px',
              lineHeight: '1.4',
            }}
          >
            {description}
          </div>
        )}
      </div>
    </div>
  );
}
