export function Page1Cover() {
  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 120% 100% at 50% 0%, var(--kb-bg-start) 0%, var(--kb-bg-end) 60%)',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(var(--kb-accent-blue-rgb), 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(var(--kb-accent-blue-rgb), 0.02) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
        }}
      />

      {/* Abstract neural wave */}
      <svg
        className="absolute right-0 top-0 h-full"
        width="800"
        height="1080"
        viewBox="0 0 800 1080"
        fill="none"
        style={{ opacity: 0.15 }}
      >
        <path
          d="M400 0 Q600 200, 400 400 T400 800 Q600 1000, 800 1080"
          stroke="url(#wave-gradient)"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M450 0 Q650 220, 450 420 T450 820 Q650 1020, 850 1080"
          stroke="url(#wave-gradient)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M350 0 Q550 180, 350 380 T350 780 Q550 980, 750 1080"
          stroke="url(#wave-gradient)"
          strokeWidth="1.5"
          fill="none"
        />
        <defs>
          <linearGradient id="wave-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4DA3FF" stopOpacity="0.3" />
            <stop offset="50%" stopColor="#7A5CFF" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#4DA3FF" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-32">
        <div className="max-w-4xl mb-12">
          <h1
            className="tracking-tight leading-none mb-6"
            style={{ fontSize: '96px', fontWeight: 700, color: 'var(--kb-text)', letterSpacing: '-0.04em' }}
          >
            KOMBEA
          </h1>
          <h2
            className="mb-10 tracking-tight"
            style={{ fontSize: '42px', fontWeight: 500, color: 'var(--kb-accent-blue)', letterSpacing: '-0.02em' }}
          >
            Human-First Conversational AI Infrastructure
          </h2>
          <p
            className="max-w-2xl leading-relaxed"
            style={{ fontSize: '20px', color: 'var(--kb-muted)', lineHeight: '1.6' }}
          >
            Enterprise contact centers face compounding structural pressures: rising labor cost,
            increasing compliance complexity, fragmented system integration, and large language
            models unsuited for regulated environments. These are not temporary inefficiencies. They
            are permanent architectural constraints.
          </p>
          <p
            className="max-w-2xl mt-6"
            style={{ fontSize: '20px', color: 'var(--kb-muted)', lineHeight: '1.6' }}
          >
            Human-First defines KomBea's operational architecture: automation constrained by
            deterministic response frameworks, human oversight embedded at every tier, and escalation
            pathways that preserve full interaction context. Designed for regulated environments
            where output variability is not a product tradeoff — it is a compliance liability.
          </p>
        </div>

        <div className="max-w-4xl pt-10 border-t border-white/5">
          <p
            className="tracking-tight"
            style={{ fontSize: '24px', fontWeight: 600, color: 'var(--kb-text)', letterSpacing: '-0.01em' }}
          >
            This is not chatbot AI.
            <br />
            <span style={{ color: 'var(--kb-accent-blue)' }}>
              KomBea provides the infrastructure layer required for compliant, large-scale
              conversational automation.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
