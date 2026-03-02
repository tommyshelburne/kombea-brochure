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
              'Mortgage servicer operating under strict regulatory compliance across loan modification, forbearance, and payment processing workflows.',
              'Deterministic script enforcement deployed across compliance-sensitive interactions. Tier 1 volume automated; Tier 2 escalations routed to human agents with full context pre-loaded.',
              'Documented staffing reduction for equivalent call volume. Compliance variance eliminated. Supervisory visibility maintained across all tiers. Verified through independent operational audit.',
            ]}
          />
          <ProofCard
            stat="$1.5B"
            statLabel="Raised and growing"
            title="High-Volume Outreach Organization"
            points={[
              'High-volume inbound and outbound campaign operation requiring unified integration across constituent management, CRM, and payment processing infrastructure.',
              'Bidirectional API integration consolidated agent workflows into a single interaction layer. Deployed under compressed timelines without disrupting live operations.',
              'Measured improvement in agent productivity and supervisory visibility. Manual reconciliation eliminated. Platform stability maintained across competitive evaluation windows.',
            ]}
          />
          <ProofCard
            stat="400M+"
            statLabel="Calls to date and counting"
            title="All Industries Served"
            points={[
              'Deployed across healthcare, legal, financial services, mortgage, government, and nonprofit sectors. HIPAA and PCI compliance built into the platform — not bolted on.',
              'Supports both inbound and outbound campaigns within a single deployment. Deterministic script enforcement applied at the system level across all verticals and interaction types.',
              'Consistent outcomes regardless of industry or use case. Human escalation pathways and supervisory visibility maintained at every tier. 400M+ calls and counting across all clients served.',
            ]}
          />
        </div>
      </div>
    </div>
  );
}
