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

interface Props {
  currentPage: number;
  pageRefs: MutableRefObject<(HTMLDivElement | null)[]>;
}

export const BrochureCanvas = forwardRef<HTMLDivElement, Props>(function BrochureCanvas(
  { currentPage, pageRefs },
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
      <div ref={ref} className="relative" style={{ width: '1920px', height: '1080px' }}>
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
  );
});
