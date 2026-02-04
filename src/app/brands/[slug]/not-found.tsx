/**
 * ============================================================================
 * NOT FOUND PAGE - BRANDS
 * ============================================================================
 *
 * Custom 404 page for brands section.
 *
 * @version 1.0.0
 */

import { AppShell } from '@/components/layout';

export default function BrandNotFound() {
  return (
    <AppShell>
      <div className="not-found">
        <div className="not-found__container">
          <h1 className="not-found__title">Marka nie znaleziona</h1>
          <p className="not-found__text">
            Przepraszamy, nie znaleźliśmy marki, której szukasz.
          </p>
          <div className="not-found__actions">
            <a href="/brands" className="not-found__link">
              Zobacz wszystkie marki
            </a>
            <a href="/" className="not-found__link not-found__link--secondary">
              Strona główna
            </a>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
