'use client';

/**
 * Global Error Boundary
 * Handles runtime errors with graceful fallback UI
 * Uses existing global CSS and design tokens only
 */
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  // Detect locale from URL
  const isEnglish = typeof window !== 'undefined' && window.location.pathname.startsWith('/en');
  const t = isEnglish
    ? { title: 'An error occurred', text: 'Sorry, something went wrong. Try refreshing the page.', retry: 'Try again', home: 'Home' }
    : { title: 'Wystąpił błąd', text: 'Przepraszamy, coś poszło nie tak. Spróbuj odświeżyć stronę.', retry: 'Spróbuj ponownie', home: 'Strona główna' };

  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-title">{t.title}</h1>
        <p className="error-text">{t.text}</p>
        {process.env.NODE_ENV === 'development' && error?.message && (
          <p className="error-details">{error.message}</p>
        )}
        <div className="error-actions">
          <button
            type="button"
            onClick={reset}
            className="error-btn primary"
          >
            {t.retry}
          </button>
          <a href={isEnglish ? '/en' : '/'} className="error-btn secondary">
            {t.home}
          </a>
        </div>
      </div>
    </div>
  );
}
