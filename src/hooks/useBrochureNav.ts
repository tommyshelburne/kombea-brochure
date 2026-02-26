import { useState, useEffect, useCallback } from 'react';
import { TOTAL_PAGES } from '@/constants/brochure';
import type { BrochureNavState } from '@/types/brochure';

export function useBrochureNav(): BrochureNavState {
  const [currentPage, setCurrentPage] = useState(0);

  const next = useCallback(() => {
    setCurrentPage((p) => Math.min(p + 1, TOTAL_PAGES - 1));
  }, []);

  const prev = useCallback(() => {
    setCurrentPage((p) => Math.max(p - 1, 0));
  }, []);

  const goTo = useCallback((page: number) => {
    if (page >= 0 && page < TOTAL_PAGES) setCurrentPage(page);
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') next();
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') prev();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [next, prev]);

  return {
    currentPage,
    totalPages: TOTAL_PAGES,
    canGoPrev: currentPage > 0,
    canGoNext: currentPage < TOTAL_PAGES - 1,
    goTo,
    next,
    prev,
  };
}
