import { PhaseNode, PhaseConnector, PhaseDescription } from '../primitives';

export function Page7Vision() {
  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 100% 100% at 50% 50%, var(--kb-bg-start) 0%, var(--kb-bg-end) 80%)',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Subtle radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{ background: 'radial-gradient(circle, rgba(var(--kb-accent-blue-rgb), 0.05) 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 h-full px-32 py-10 flex flex-col justify-center">
        <h2
          className="mb-5 text-center tracking-tight"
          style={{ fontSize: '52px', fontWeight: 700, color: 'var(--kb-text)', letterSpacing: '-0.03em' }}
        >
          Enterprise Deployment Roadmap
        </h2>

        {/* Three-phase journey */}
        <div className="flex items-start justify-center gap-12 mb-6">
          <PhaseNode phase="01" title="Targeted Workflows" subtitle="0–6 months" active />
          <PhaseConnector />
          <PhaseNode phase="02" title="Multi-System Integration" subtitle="6–18 months" active />
          <PhaseConnector />
          <PhaseNode phase="03" title="Enterprise Infrastructure" subtitle="18+ months" active />
        </div>

        {/* Phase descriptions */}
        <div className="grid grid-cols-3 gap-8 mb-6">
          <PhaseDescription
            number="01"
            title="Targeted Workflow Automation"
            description="Identify and deploy automation across 2–3 highest-volume, lowest-complexity workflows. Establish performance baseline. Validate integration architecture. Demonstrate measurable impact on handle time and first-contact resolution."
          />
          <PhaseDescription
            number="02"
            title="Multi-System Integration"
            description="Expand API connectivity across enterprise systems. Broaden automation to compliance-sensitive workflows. Shift agent utilization toward Tier 2 interactions. Establish governance and audit reporting."
          />
          <PhaseDescription
            number="03"
            title="Enterprise Infrastructure Layer"
            description="KomBea operates as primary interaction infrastructure. Human agents manage exceptions, escalations, and relationship-sensitive interactions. Continuous measurement against pre-deployment baseline."
          />
        </div>

        {/* Positioning line + CTA */}
        <div>
          <p
            className="text-center tracking-tight mb-5"
            style={{ fontSize: '22px', fontWeight: 700, color: 'var(--kb-text)', letterSpacing: '-0.01em' }}
          >
            KomBea is{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, var(--kb-accent-blue) 0%, var(--kb-accent-purple) 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              operational AI infrastructure
            </span>
            {' '}for regulated, high-volume enterprise environments.
          </p>

          <div className="h-px mb-5" style={{ backgroundColor: 'var(--kb-divider)' }} />

          <div className="flex items-start gap-12">
            <div className="flex-shrink-0 pt-0.5">
              <p
                style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'var(--kb-accent-blue)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                }}
              >
                Next Step
              </p>
            </div>
            <p style={{ flex: 1, fontSize: '15px', color: 'var(--kb-muted)', lineHeight: '1.65' }}>
              Enterprises evaluating conversational automation should begin with a structured
              workflow assessment. KomBea provides a formal Infrastructure Audit to evaluate
              automation eligibility, compliance risk exposure, and projected operating model impact.
            </p>
            <a
              href="https://www.kombea.com/#book"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 tracking-tight hover:opacity-80 transition-opacity"
              style={{ fontSize: '17px', fontWeight: 600, color: 'var(--kb-text)', letterSpacing: '-0.01em', textDecoration: 'none' }}
            >
              Schedule an Infrastructure Audit →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
