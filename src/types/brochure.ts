export type BrochureTheme = 'dark' | 'light';

export interface BrochureThemeState {
  theme: BrochureTheme;
  toggleTheme: () => void;
}

export interface BrochureNavState {
  currentPage: number;
  totalPages: number;
  canGoPrev: boolean;
  canGoNext: boolean;
  goTo: (page: number) => void;
  next: () => void;
  prev: () => void;
  touchHandlers: {
    onTouchStart: (e: React.TouchEvent) => void;
    onTouchEnd: (e: React.TouchEvent) => void;
  };
}

export interface PdfDownloadState {
  isGenerating: boolean;
  download: () => Promise<void>;
}
