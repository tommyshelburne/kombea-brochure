import { PainPoint, MetricRow } from '../primitives';

export function Page2Problem() {
  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 100% 120% at 30% 50%, var(--kb-bg-start) 0%, var(--kb-bg-end) 70%)',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Dot matrix background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(var(--kb-accent-blue-rgb), 0.03) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* Ghosted financial number */}
      <div
        className="absolute right-24 top-1/2 -translate-y-1/2 select-none pointer-events-none"
        style={{
          fontSize: '280px',
          fontWeight: 800,
          color: 'var(--kb-accent-blue)',
          opacity: 0.04,
          letterSpacing: '-0.05em',
        }}
      >
        $400M
      </div>

      {/* Content */}
      <div className="relative z-10 h-full px-32 py-12 flex flex-col justify-center">
        <h2
          className="mb-6 tracking-tight"
          style={{ fontSize: '58px', fontWeight: 700, color: 'var(--kb-text)', letterSpacing: '-0.03em' }}
        >
          The Enterprise Operating Model
        </h2>

        <div className="grid grid-cols-2 gap-12">
          {/* Left: Structural constraints */}
          <div className="space-y-5">
            <PainPoint
              number="01"
              title="Labor Cost Structure"
              description="In a 20,000-agent enterprise, direct labor accounts for 65–70% of total contact center spend. Volume growth requires proportional headcount growth. There is no natural efficiency curve."
            />
            <PainPoint
              number="02"
              title="Compliance Overhead"
              description="Regulated industries carry remediation costs tied to scripting variance. Each non-compliant interaction generates audit exposure. Manual supervision does not scale as a compliance mechanism."
            />
            <PainPoint
              number="03"
              title="System Fragmentation"
              description="Enterprise contact centers typically operate across 8–14 integrated platforms. Each integration point introduces latency, error risk, and manual reconciliation cost."
            />
            <PainPoint
              number="04"
              title="LLM Deployment Risk"
              description="General-purpose large language models produce variable outputs. In regulated environments — financial services, healthcare, legal — variable outputs are compliance liabilities, not acceptable operational risk."
            />
          </div>

          {/* Right: Financial inflection model */}
          <div
            className="p-8 rounded-2xl"
            style={{
              background:
                'linear-gradient(135deg, rgba(var(--kb-accent-blue-rgb), 0.05) 0%, rgba(var(--kb-accent-purple-rgb), 0.05) 100%)',
              border: '1px solid rgba(var(--kb-accent-blue-rgb), 0.1)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            }}
          >
            <h3
              className="mb-2 tracking-tight"
              style={{ fontSize: '28px', fontWeight: 600, color: 'var(--kb-text)' }}
            >
              Financial Inflection Model
            </h3>
            <p className="mb-5" style={{ fontSize: '13px', color: 'var(--kb-muted)', lineHeight: '1.4' }}>
              Illustrative model based on a 20,000-agent enterprise contact center.
            </p>

            <div className="space-y-3">
              <MetricRow label="Current State" value="$400M" sublabel="annual contact center cost" />
              <MetricRow label="Agent Utilization" value="32%" sublabel="on high-value tasks" />
              <MetricRow label="Handle Time" value="8.4 min" sublabel="average per interaction" />
              <div className="h-px my-3" style={{ backgroundColor: 'var(--kb-divider)' }} />
              <MetricRow
                label="Post-KomBea"
                value="$160–200M"
                sublabel="Addressable labor cost (50–70% automation mix)"
                highlight
              />
              <MetricRow
                label="First-Contact Resolution"
                value="↑"
                sublabel="Observed improvement in first-contact resolution and customer satisfaction metrics."
                highlight
              />
              <MetricRow label="Handle Time" value="5.1 min" sublabel="per interaction" highlight />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
