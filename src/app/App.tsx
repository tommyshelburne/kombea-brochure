import { BrochureErrorBoundary } from './components/BrochureErrorBoundary';
import { KomBeaBrochure } from './components/KomBeaBrochure';

export default function App() {
  return (
    <BrochureErrorBoundary>
      <KomBeaBrochure />
    </BrochureErrorBoundary>
  );
}
