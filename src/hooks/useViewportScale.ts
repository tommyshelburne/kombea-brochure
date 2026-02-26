import { useState, useEffect } from 'react';
import { CANVAS_WIDTH, CANVAS_HEIGHT } from '@/constants/brochure';

export function useViewportScale(): number {
  const [scale, setScale] = useState(() =>
    Math.min(window.innerWidth / CANVAS_WIDTH, window.innerHeight / CANVAS_HEIGHT)
  );
  useEffect(() => {
    const update = () =>
      setScale(Math.min(window.innerWidth / CANVAS_WIDTH, window.innerHeight / CANVAS_HEIGHT));
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return scale;
}
