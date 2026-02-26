import { useRef } from 'react';
import { useBrochureNav } from '@/hooks/useBrochureNav';
import { usePdfDownload } from '@/hooks/usePdfDownload';
import { useBrochureTheme } from '@/hooks/useBrochureTheme';
import { useViewportScale } from '@/hooks/useViewportScale';
import { BrochureCanvas } from './BrochureCanvas';
import { BrochureNav } from './BrochureNav';

export function KomBeaBrochure() {
  const canvasRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const pageRefs = useRef<(HTMLDivElement | null)[]>([]);

  const nav = useBrochureNav();
  const pdf = usePdfDownload({ canvasRef, pageRefs, navRef });
  const brochureTheme = useBrochureTheme();
  const scale = useViewportScale();

  return (
    <div
      className="fixed inset-0 overflow-auto"
      style={{ backgroundColor: 'var(--kb-outer-bg)' }}
    >
      <BrochureCanvas ref={canvasRef} currentPage={nav.currentPage} pageRefs={pageRefs} scale={scale} touchHandlers={nav.touchHandlers} />
      <BrochureNav ref={navRef} {...nav} {...pdf} {...brochureTheme} />

      {/* PDF generation overlay — sits above nav elements */}
      {pdf.isGenerating && (
        <div className="absolute inset-0 z-[99999] bg-black flex flex-col items-center justify-center gap-4">
          <div className="w-10 h-10 rounded-full border-2 border-white/20 border-t-white animate-spin" />
          <p
            style={{
              color: 'var(--kb-text)',
              fontFamily: 'Inter, sans-serif',
              fontSize: '16px',
              fontWeight: 500,
            }}
          >
            Generating PDF…
          </p>
        </div>
      )}
    </div>
  );
}
