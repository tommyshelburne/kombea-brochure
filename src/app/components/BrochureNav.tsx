import { forwardRef } from 'react';
import { ChevronLeft, ChevronRight, Download, Sun, Moon } from 'lucide-react';
import type { BrochureNavState, PdfDownloadState, BrochureThemeState } from '@/types/brochure';

type Props = BrochureNavState & PdfDownloadState & BrochureThemeState;

export const BrochureNav = forwardRef<HTMLDivElement, Props>(function BrochureNav(
  { currentPage, totalPages, canGoPrev, canGoNext, goTo, next, prev, isGenerating, download, theme, toggleTheme },
  ref,
) {
  const btnClass =
    'transition-all border border-[var(--kb-nav-btn-border)] bg-[var(--kb-nav-btn)] hover:bg-[var(--kb-nav-btn-hover)]';

  return (
    <div ref={ref}>
      {/* Theme toggle button */}
      <div className="fixed top-6 left-6 z-50">
        <button
          onClick={toggleTheme}
          className={`w-8 h-8 sm:w-12 sm:h-12 flex items-center justify-center rounded-full ${btnClass}`}
          aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? (
            <Sun className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--kb-text)' }} />
          ) : (
            <Moon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: 'var(--kb-text)' }} />
          )}
        </button>
      </div>

      {/* Download PDF button */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={download}
          disabled={isGenerating}
          className={`flex items-center gap-2 px-5 py-3 rounded-full disabled:opacity-40 disabled:cursor-not-allowed ${btnClass}`}
          style={{ color: 'var(--kb-text)', fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '15px' }}
        >
          <Download className="w-4 h-4" />
          <span className="hidden sm:inline">Download PDF</span>
        </button>
      </div>

      {/* Prev / Next */}
      <div className="fixed bottom-6 right-6 flex items-center gap-6 z-50">
        <button
          onClick={prev}
          disabled={!canGoPrev}
          className={`w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center rounded-full disabled:opacity-20 disabled:cursor-not-allowed ${btnClass}`}
          aria-label="Previous page"
        >
          <ChevronLeft className="w-5 h-5 sm:w-8 sm:h-8" style={{ color: 'var(--kb-text)' }} />
        </button>
        <span
          className="hidden sm:inline text-xl tabular-nums tracking-tight min-w-[80px] text-center"
          style={{ color: 'var(--kb-text)', fontFamily: 'Inter, sans-serif', fontWeight: 600 }}
        >
          {currentPage + 1} / {totalPages}
        </span>
        <button
          onClick={next}
          disabled={!canGoNext}
          className={`w-10 h-10 sm:w-16 sm:h-16 flex items-center justify-center rounded-full disabled:opacity-20 disabled:cursor-not-allowed ${btnClass}`}
          aria-label="Next page"
        >
          <ChevronRight className="w-5 h-5 sm:w-8 sm:h-8" style={{ color: 'var(--kb-text)' }} />
        </button>
      </div>

      {/* Dot indicators */}
      <div className="fixed bottom-6 left-6 flex gap-2 sm:gap-3 z-50">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className="w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all hover:scale-125"
            style={{
              backgroundColor: currentPage === idx ? 'var(--kb-accent-blue)' : 'var(--kb-muted)',
              opacity: currentPage === idx ? 1 : 0.5,
            }}
            aria-label={`Go to page ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
});
