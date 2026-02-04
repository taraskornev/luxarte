/**
 * ============================================================================
 * GLOBAL ERROR BOUNDARY
 * ============================================================================
 *
 * Next.js App Router error boundary for handling unhandled errors gracefully.
 * This component catches errors in the rendering tree and displays a fallback UI.
 *
 * @version 1.0.0
 */

'use client';

import { useEffect } from 'react';

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Global error:', error);
    }
    // In production, you could send to error tracking service
  }, [error]);

  return (
    <html lang="pl">
      <body>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '100vh',
            backgroundColor: '#f8f8f6',
            fontFamily: 'system-ui, sans-serif',
            padding: '2rem',
          }}
        >
          <div
            style={{
              textAlign: 'center',
              maxWidth: '500px',
            }}
          >
            <h1
              style={{
                fontSize: '2rem',
                color: '#1a1a1a',
                marginBottom: '1rem',
                fontWeight: '400',
              }}
            >
              Przepraszamy
            </h1>
            <p
              style={{
                fontSize: '1rem',
                color: '#6b6b6b',
                marginBottom: '2rem',
                lineHeight: '1.6',
              }}
            >
              Wystąpił nieoczekiwany błąd. Prosimy spróbować ponownie.
            </p>
            <button
              onClick={reset}
              style={{
                padding: '0.875rem 2rem',
                backgroundColor: '#967f65',
                color: 'white',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'inherit',
                fontSize: '0.875rem',
                fontWeight: '500',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Spróbuj ponownie
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}
