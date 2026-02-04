/**
 * ============================================================================
 * GLOBAL NOT FOUND PAGE
 * ============================================================================
 *
 * 404 error page for the entire application.
 * Provides helpful links and maintains brand consistency.
 *
 * @version 1.0.0
 */

import Link from 'next/link';
import { Metadata } from 'next';
import '@/styles/not-found.css';

export const metadata: Metadata = {
  title: 'Strona nie znaleziona | LuxArte',
  description: 'Przepraszamy, strona której szukasz nie istnieje.',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="not-found-page" id="main-content">
      <div className="not-found-page__container">
        <div className="not-found-page__content">
          <span className="not-found-page__code">404</span>
          <h1 className="not-found-page__title">
            Strona nie znaleziona
          </h1>
          <p className="not-found-page__message">
            Przepraszamy, strona której szukasz nie istnieje lub została przeniesiona.
          </p>

          <div className="not-found-page__actions">
            <Link href="/" className="btn btn-primary">
              Strona główna
            </Link>
            <Link href="/brands" className="btn btn-ghost">
              Nasze marki
            </Link>
          </div>

          <nav className="not-found-page__nav" aria-label="Pomocne linki">
            <h2 className="not-found-page__nav-title">Pomocne linki</h2>
            <ul className="not-found-page__nav-list">
              <li>
                <Link href="/categories">Kategorie produktów</Link>
              </li>
              <li>
                <Link href="/outlet">Outlet</Link>
              </li>
              <li>
                <Link href="/interior-design-service">Usługa projektowania</Link>
              </li>
              <li>
                <Link href="/showroom">Kontakt</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}
