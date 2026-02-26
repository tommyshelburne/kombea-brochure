import { useRef } from 'react';

export function Page4Video({ isActive }: { isActive: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const prevActive = useRef(false);
  if (prevActive.current !== isActive) {
    prevActive.current = isActive;
    if (!isActive && videoRef.current) {
      videoRef.current.pause();
    }
  }

  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 120% 100% at 50% 0%, var(--kb-bg-start) 0%, var(--kb-bg-end) 65%)',
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
      <div className="relative z-10 h-full flex" style={{ padding: '72px 128px' }}>
        {/* Left: context */}
        <div className="flex flex-col justify-center pr-16" style={{ width: '420px', flexShrink: 0 }}>
          <div
            className="mb-4"
            style={{
              fontSize: '13px',
              fontWeight: 600,
              color: 'var(--kb-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Live Demonstration
          </div>
          <h2
            className="mb-8 tracking-tight"
            style={{
              fontSize: '52px',
              fontWeight: 700,
              color: 'var(--kb-text)',
              letterSpacing: '-0.03em',
              lineHeight: '1.1',
            }}
          >
            ProtoCall AI in Action
          </h2>
          <p className="mb-10" style={{ fontSize: '19px', color: 'var(--kb-muted)', lineHeight: '1.65' }}>
            The following is a live call script interaction handled by ProtoCall AI — the
            deterministic response layer within KomBea infrastructure.
          </p>
          <div className="space-y-5">
            {[
              'Script compliance enforced at every turn',
              'Real-time system integration during the call',
              'Escalation routing with full context preserved',
              'No human agent required for Tier 1 resolution',
            ].map((point, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 mt-1.5"
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--kb-muted)',
                  }}
                />
                <p style={{ fontSize: '17px', color: 'var(--kb-muted)', lineHeight: '1.5' }}>{point}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: video */}
        <div className="flex-1 flex items-center justify-center">
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              maxHeight: '540px',
              boxShadow:
                '0 0 0 1px rgba(var(--kb-accent-blue-rgb), 0.12), 0 24px 64px rgba(0, 0, 0, 0.6)',
            }}
          >
            <video
              ref={videoRef}
              src="/pcai-demo.mp4"
              controls
              playsInline
              style={{
                maxHeight: '540px',
                maxWidth: '100%',
                width: 'auto',
                display: 'block',
                backgroundColor: '#000',
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
