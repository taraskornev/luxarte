/**
 * ============================================================================
 * ERROR PAGE COMPONENT
 * ============================================================================
 *
 * Next.js App Router error page for route segment errors.
 * Provides a user-friendly error message with retry option.
 *
 * @version 1.0.0
 */

'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import '@/styles/not-found.css';

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log error to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error('Page error:', error);
    }
  }, [error]);

  return (
    <main className="error-page" id="main-content">
      <div className="error-page__container">
        <div className="error-page__content">
          <h1 className="error-page__title">Przepraszamy</h1>
          <p className="error-page__message">
            Wystąpił błąd podczas ładowania tej strony.
            Prosimy spróbować ponownie lub wrócić do strony głównej.
          </p>
          <div className="error-page__actions">
            <button
              type="button"
              className="btn btn-primary"
              onClick={reset}
            >
              Spróbuj ponownie
            </button>
            <Link href="/" className="btn btn-ghost">
              Strona główna
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
