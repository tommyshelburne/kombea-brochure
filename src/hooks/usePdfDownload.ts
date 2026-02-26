import { useState, useCallback } from 'react';
import type { RefObject } from 'react';
import { toCanvas } from 'html-to-image';
import jsPDF from 'jspdf';
import {
  TOTAL_PAGES,
  PDF_SKIP_PAGES,
  CANVAS_WIDTH,
  CANVAS_HEIGHT,
  PDF_BG_COLOR,
} from '@/constants/brochure';
import type { PdfDownloadState } from '@/types/brochure';

interface Options {
  canvasRef: RefObject<HTMLDivElement | null>;
  pageRefs: { current: (HTMLDivElement | null)[] };
  navRef: RefObject<HTMLDivElement | null>;
}

export function usePdfDownload({ canvasRef, pageRefs, navRef }: Options): PdfDownloadState {
  const [isGenerating, setIsGenerating] = useState(false);

  // Restores nav visibility and page opacities.
  // Canvas style is NOT reset here — callers must restore it via setAttribute before calling this,
  // otherwise React's vdom won't patch back the width/height and the canvas stays invisible.
  const restore = useCallback(() => {
    if (navRef.current) navRef.current.style.visibility = '';
    pageRefs.current.forEach((p) => {
      if (p) {
        p.style.opacity = '';
        p.style.transition = '';
      }
    });
  }, [navRef, pageRefs]);

  const download = useCallback(async () => {
    const el = canvasRef.current;
    const nav = navRef.current;
    if (!el) return;

    setIsGenerating(true);
    if (nav) nav.style.visibility = 'hidden';

    // Capture original canvas style before pinning it for capture
    const prevStyle = el.getAttribute('style') || '';

    // Pin the canvas to top-left so html-to-image captures it unclipped
    el.setAttribute(
      'style',
      `position:fixed;top:0;left:0;width:${CANVAS_WIDTH}px;height:${CANVAS_HEIGHT}px;z-index:99998;`,
    );

    try {
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [CANVAS_WIDTH, CANVAS_HEIGHT],
      });

      let pagesAdded = 0;

      for (let i = 0; i < TOTAL_PAGES; i++) {
        if (PDF_SKIP_PAGES.has(i)) continue;

        pageRefs.current.forEach((p, idx) => {
          if (!p) return;
          p.style.opacity = idx === i ? '1' : '0';
          p.style.transition = 'none';
        });

        await new Promise<void>((resolve) => setTimeout(resolve, 150));

        const canvas = await toCanvas(el, {
          width: CANVAS_WIDTH,
          height: CANVAS_HEIGHT,
          pixelRatio: 1,
          backgroundColor: PDF_BG_COLOR,
          fetchRequestInit: { mode: 'cors' },
        });

        if (pagesAdded > 0) pdf.addPage([CANVAS_WIDTH, CANVAS_HEIGHT], 'landscape');
        pdf.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        pagesAdded++;
      }

      el.setAttribute('style', prevStyle);
      restore();
      await pdf.save('kombea-brochure.pdf', { returnPromise: true });
    } catch (err) {
      console.error('PDF generation failed:', err);
      el.setAttribute('style', prevStyle);
      restore();
      alert('PDF generation failed — check the browser console for details.');
    } finally {
      setIsGenerating(false);
    }
  }, [canvasRef, navRef, pageRefs, restore]);

  return { isGenerating, download };
}
