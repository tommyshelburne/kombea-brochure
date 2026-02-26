import { useState, useEffect } from 'react';
import type { BrochureTheme } from '@/types/brochure';

export function useBrochureTheme(): { theme: BrochureTheme; toggleTheme: () => void } {
  const [theme, setTheme] = useState<BrochureTheme>('dark');
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);
  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'));
  return { theme, toggleTheme };
}
