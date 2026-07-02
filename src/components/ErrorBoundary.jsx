import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo });
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          padding: '40px',
          fontFamily: 'Inter, sans-serif',
          textAlign: 'center',
          background: 'var(--card-bg)',
          borderRadius: '12px',
          border: '1px solid var(--border)',
          maxWidth: '500px',
          margin: '80px auto',
          color: 'var(--text-main)'
        }}>
          <h2 style={{ color: 'var(--error)', marginBottom: '12px', fontSize: '24px', fontWeight: '700' }}>
            Oops! Something went wrong
          </h2>
          <p style={{ marginBottom: '20px', fontSize: '14px', lineHeight: '1.6' }}>
            The app encountered an unexpected error. Please refresh the page or contact support.
          </p>
          <details style={{ textAlign: 'left', marginBottom: '20px', padding: '12px', background: 'var(--input-bg)', borderRadius: '8px', border: '1px solid var(--border)' }}>
            <summary style={{ cursor: 'pointer', fontWeight: '600', userSelect: 'none' }}>
              Technical details
            </summary>
            <pre style={{ whiteSpace: 'pre-wrap', fontSize: '12px', marginTop: '8px', fontFamily: 'monospace', color: 'var(--text-secondary)' }}>
              {this.state.error?.toString()}
            </pre>
          </details>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '10px 24px',
              background: 'var(--primary)',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: '600',
              fontSize: '14px'
            }}
          >
            Reload Application
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;