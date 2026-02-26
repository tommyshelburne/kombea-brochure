import { AutomationTier } from '../primitives';

export function Page5Category() {
  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 120% 100% at 70% 50%, var(--kb-bg-start) 0%, var(--kb-bg-end) 70%)',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(var(--kb-accent-purple-rgb), 0.02) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full px-32 py-10 flex flex-col justify-center">
        <h2
          className="mb-8 tracking-tight"
          style={{ fontSize: '58px', fontWeight: 700, color: 'var(--kb-text)', letterSpacing: '-0.03em' }}
        >
          The Control Layer
        </h2>

        <div className="grid grid-cols-2 gap-20 items-start">
          {/* Left: Narrative */}
          <div className="space-y-6">
            <p
              style={{
                fontSize: '22px',
                fontWeight: 600,
                color: 'var(--kb-text)',
                lineHeight: '1.5',
                letterSpacing: '-0.01em',
              }}
            >
              KomBea is not a chatbot. It is not an agent assist overlay. It is not a pilot program.
            </p>
            <p style={{ fontSize: '20px', color: 'var(--kb-muted)', lineHeight: '1.6' }}>
              KomBea operates as a control layer between existing telephony infrastructure and
              modern language model capabilities. It enforces deterministic response frameworks in
              environments where output variability carries compliance risk.
            </p>
            <p style={{ fontSize: '20px', color: 'var(--kb-muted)', lineHeight: '1.6' }}>
              Integration is API-based. KomBea connects to existing enterprise systems — CRM, ERP,
              telephony, case management — without requiring infrastructure replacement.
            </p>
            <div>
              <p
                style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: 'var(--kb-accent-blue)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  marginBottom: '12px',
                }}
              >
                Human-First means:
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {[
                  'Automation constrained by deterministic response frameworks',
                  'Human escalation embedded by design, not added after deployment',
                  'Governance visibility retained at system level across all tiers',
                  'No uncontrolled generative output in regulated workflows',
                ].map((item, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span
                      style={{ color: 'var(--kb-accent-blue)', fontSize: '18px', lineHeight: '1.6', flexShrink: 0 }}
                    >
                      —
                    </span>
                    <p style={{ fontSize: '18px', color: 'var(--kb-muted)', lineHeight: '1.6' }}>{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Automation ladder */}
          <div>
            <div className="flex flex-col gap-4">
              <AutomationTier
                percentage="0%"
                label="Manual Operations"
                description="Full human delivery. No automation."
                active={false}
              />
              <AutomationTier
                percentage="25%"
                label="Rule-Based Routing"
                description="IVR, basic decision trees. Limited deflection."
                active={false}
              />
              <AutomationTier
                percentage="50%"
                label="Agent Assist"
                description="AI surfaces information. Humans deliver."
                active={false}
              />
              <AutomationTier
                percentage="85%"
                label="KomBea Infrastructure"
                description="Tier 1 automated. Tier 2 human-managed. Compliance enforced at system level."
                active={true}
                highlight
              />
              <AutomationTier
                percentage="100%"
                label="Full Autonomy"
                description="Not recommended for regulated environments without proven governance framework."
                active={false}
              />
            </div>
            <p className="mt-5" style={{ fontSize: '14px', color: 'var(--kb-muted)', lineHeight: '1.5' }}>
              Enterprises adopt automation progressively to manage operational risk. Each tier should
              be validated before expansion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
