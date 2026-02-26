import { ProofCard } from '../primitives';

export function Page3Proof() {
  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 100% 100% at 50% 50%, var(--kb-bg-start) 0%, var(--kb-bg-end) 70%)',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(var(--kb-accent-blue-rgb), 0.015) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--kb-accent-blue-rgb), 0.015) 1px, transparent 1px)
          `,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full px-32 py-10 flex flex-col justify-center">
        <h2
          className="mb-8 tracking-tight"
          style={{ fontSize: '58px', fontWeight: 700, color: 'var(--kb-text)', letterSpacing: '-0.03em' }}
        >
          Documented Deployments
        </h2>

        <div className="grid grid-cols-3 gap-8">
          <ProofCard
            stat="$17M"
            statLabel="Annually saved"
            title="Mortgage Enterprise"
            points={[
              'Mortgage servicing operation with strict compliance requirements across loan modification, forbearance, and payment processing.',
              'Deterministic script enforcement deployed across compliance-sensitive workflows. Tier 1 interactions automated; Tier 2 escalations routed to human agents with full interaction context pre-loaded.',
              'Documented reduction in staffing required for equivalent volume. Compliance variance reduced. Human supervisory visibility retained at all automation tiers. Savings verified through operational audit.',
            ]}
          />
          <ProofCard
            stat="$1.5B"
            statLabel="Raised and growing"
            title="High-Volume Outreach Organization"
            points={[
              'High-volume outbound and inbound operation requiring integration across constituent management, CRM, and payment processing infrastructure.',
              'Bidirectional API integration consolidated agent workflows into a single interaction layer. Deployed within compressed operational timelines.',
              'Measured improvement in agent productivity. Supervisory visibility maintained throughout. Manual data reconciliation reduced. Operational continuity preserved during competitive platform evaluations.',
            ]}
          />
          <ProofCard
            stat="1M+"
            statLabel="Outbound calls per day"
            title="Mass Tort Law Firm"
            points={[
              'High-volume legal intake with strict script compliance requirements across active litigation matters in multiple jurisdictions.',
              'Deterministic response framework enforced scripted compliance at the system level. Protocol updates propagated immediately across all active agents without manual intervention.',
              'Reduction in intake variability and script remediation incidents. Human escalation pathways preserved full case context throughout. Cost stabilization relative to prior staffing model.',
            ]}
          />
        </div>
      </div>
    </div>
  );
}
