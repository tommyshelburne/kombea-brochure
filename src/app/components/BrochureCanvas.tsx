import { forwardRef } from 'react';
import type { MutableRefObject } from 'react';
import {
  Page1Cover,
  Page2Problem,
  Page3Proof,
  Page4Video,
  Page5Category,
  Page6Financial,
  Page7Vision,
} from './pages';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '@/constants/brochure';

interface Props {
  currentPage: number;
  pageRefs: MutableRefObject<(HTMLDivElement | null)[]>;
  scale: number;
  touchHandlers: {
    onTouchStart: (e: React.TouchEvent) => void;
    onTouchEnd: (e: React.TouchEvent) => void;
  };
}

export const BrochureCanvas = forwardRef<HTMLDivElement, Props>(function BrochureCanvas(
  { currentPage, pageRefs, scale, touchHandlers },
  ref,
) {
  const pages = [
    <Page1Cover />,
    <Page2Problem />,
    <Page3Proof />,
    <Page4Video isActive={currentPage === 3} />,
    <Page5Category />,
    <Page6Financial />,
    <Page7Vision />,
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div style={{ width: CANVAS_WIDTH * scale, height: CANVAS_HEIGHT * scale }}>
        <div
          ref={ref}
          className="relative"
          style={{
            width: CANVAS_WIDTH,
            height: CANVAS_HEIGHT,
            transform: `scale(${scale})`,
            transformOrigin: '0 0',
          }}
          {...touchHandlers}
        >
          {pages.map((page, idx) => (
            <div
              key={idx}
              ref={(el) => {
                pageRefs.current[idx] = el;
              }}
              className={`absolute inset-0 transition-opacity duration-500 ${
                currentPage === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
            >
              {page}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});
