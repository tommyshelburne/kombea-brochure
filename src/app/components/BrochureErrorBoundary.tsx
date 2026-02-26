import { Component, type ReactNode } from 'react';

interface State {
  hasError: boolean;
  message: string;
}

interface Props {
  children: ReactNode;
}

export class BrochureErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false, message: '' };

  static getDerivedStateFromError(error: unknown): State {
    return {
      hasError: true,
      message: error instanceof Error ? error.message : 'An unexpected error occurred.',
    };
  }

  componentDidCatch(error: unknown, info: { componentStack: string }) {
    console.error('[BrochureErrorBoundary]', error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div
          className="w-full h-screen flex flex-col items-center justify-center bg-black gap-4"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          <p style={{ color: '#E6EAF2', fontSize: '20px', fontWeight: 600 }}>
            Something went wrong loading the brochure.
          </p>
          <p style={{ color: '#6E7A99', fontSize: '15px' }}>{this.state.message}</p>
          <button
            onClick={() => this.setState({ hasError: false, message: '' })}
            className="mt-4 px-6 py-3 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 transition-all"
            style={{ color: '#E6EAF2', fontSize: '15px' }}
          >
            Try again
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
