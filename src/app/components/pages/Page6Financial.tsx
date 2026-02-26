const LABOR_ROWS: [string, string][] = [
  ['Fixed cost per agent', '~$70,000 fully loaded'],
  ['Headcount', 'Scales linearly with volume'],
  ['Supervision ratio', '1 per 10–15 agents'],
  ['Compliance remediation', 'Per-incident cost'],
  ['Ramp time', '60–90 days per hire'],
];

const INFRA_ROWS: [string, string][] = [
  ['Automation ratio', '50–70% Tier 1 (scope-dependent)'],
  ['Agent utilization', 'Shifts toward high-complexity interactions'],
  ['Supervisory overhead', 'Reduced proportionally'],
  ['Compliance remediation', 'Enforced at system level'],
  ['Agent ramp', 'Faster within structured workflows'],
];

export function Page6Financial() {
  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 100% 100% at 50% 30%, var(--kb-bg-start) 0%, var(--kb-bg-end) 80%)',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Minimal grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(var(--kb-accent-blue-rgb), 0.01) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--kb-accent-blue-rgb), 0.01) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full px-32 py-10 flex flex-col justify-center">
        <h2
          className="mb-6 tracking-tight"
          style={{ fontSize: '58px', fontWeight: 700, color: 'var(--kb-text)', letterSpacing: '-0.03em' }}
        >
          Capital Efficiency and Operating Leverage
        </h2>

        {/* Two-model comparison */}
        <div className="grid grid-cols-2 gap-8 mb-6">
          <div
            className="p-7 rounded-2xl"
            style={{
              background: 'rgba(var(--kb-muted-rgb), 0.04)',
              border: '1px solid rgba(var(--kb-muted-rgb), 0.12)',
            }}
          >
            <h3
              className="mb-4 tracking-tight"
              style={{ fontSize: '22px', fontWeight: 600, color: 'var(--kb-muted)' }}
            >
              Traditional Labor Model
            </h3>
            <div className="space-y-4">
              {LABOR_ROWS.map(([key, val], idx) => (
                <div key={idx} className="flex justify-between items-baseline gap-4">
                  <span style={{ fontSize: '18px', color: 'var(--kb-muted)' }}>{key}</span>
                  <span style={{ fontSize: '18px', color: 'var(--kb-text)', fontWeight: 500 }}>{val}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="p-7 rounded-2xl"
            style={{
              background:
                'linear-gradient(135deg, rgba(var(--kb-accent-blue-rgb), 0.06) 0%, rgba(var(--kb-accent-purple-rgb), 0.04) 100%)',
              border: '1px solid rgba(var(--kb-accent-blue-rgb), 0.15)',
            }}
          >
            <h3
              className="mb-4 tracking-tight"
              style={{ fontSize: '22px', fontWeight: 600, color: 'var(--kb-accent-blue)' }}
            >
              Infrastructure Model (KomBea)
            </h3>
            <div className="space-y-4">
              {INFRA_ROWS.map(([key, val], idx) => (
                <div key={idx} className="flex justify-between items-baseline gap-4">
                  <span style={{ fontSize: '18px', color: 'var(--kb-muted)' }}>{key}</span>
                  <span style={{ fontSize: '18px', color: 'var(--kb-accent-blue)', fontWeight: 500 }}>{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Illustrative math */}
        <div
          className="p-8 rounded-2xl"
          style={{
            background: 'rgba(var(--kb-accent-blue-rgb), 0.03)',
            border: '1px solid var(--kb-surface-border)',
          }}
        >
          <div className="flex items-center justify-between gap-16">
            <div>
              <p
                style={{
                  fontSize: '13px',
                  color: 'var(--kb-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: 600,
                  marginBottom: '10px',
                }}
              >
                Illustrative Math
              </p>
              <p style={{ fontSize: '20px', color: 'var(--kb-muted)', lineHeight: '1.6' }}>
                20,000-agent enterprise | $400M annual labor cost
              </p>
              <p style={{ fontSize: '20px', color: 'var(--kb-muted)', lineHeight: '1.6' }}>
                50–70% automation mix shift
              </p>
            </div>
            <div className="text-right flex-shrink-0">
              <div
                className="tabular-nums tracking-tight"
                style={{
                  fontSize: '60px',
                  fontWeight: 800,
                  color: 'var(--kb-accent-blue)',
                  letterSpacing: '-0.03em',
                  lineHeight: '1',
                }}
              >
                $160–200M
              </div>
              <div style={{ fontSize: '16px', color: 'var(--kb-muted)', marginTop: '6px' }}>
                in addressable labor cost
              </div>
              <div style={{ fontSize: '14px', color: 'var(--kb-muted)', marginTop: '4px' }}>
                Offset by platform investment (scope-dependent)
              </div>
            </div>
          </div>
        </div>

        <p className="mt-6" style={{ fontSize: '14px', color: 'var(--kb-muted)', lineHeight: '1.5' }}>
          Based on prior deployments. Dependent on automation depth and integration complexity.
        </p>
      </div>
    </div>
  );
}
