import Link from 'next/link';
import { headers } from 'next/headers';
import type { Locale } from '@/i18n';

const content = {
  pl: {
    subtitle: 'Strona nie została znaleziona',
    text: 'Przepraszamy, ale strona której szukasz nie istnieje lub została przeniesiona.',
    home: 'Strona główna',
    gallery: 'Galeria produktów',
  },
  en: {
    subtitle: 'Page not found',
    text: 'Sorry, the page you are looking for does not exist or has been moved.',
    home: 'Home',
    gallery: 'Product gallery',
  },
};

/**
 * Custom 404 Not Found Page
 * Uses existing global CSS and design tokens only
 */
export default async function NotFound() {
  const headersList = await headers();
  const locale = (headersList.get('x-locale') || 'pl') as Locale;
  const t = content[locale];
  const homeHref = locale === 'en' ? '/en' : '/';
  const galleryHref = locale === 'en' ? '/en/gallery' : '/gallery';

  return (
    <div className="not-found-page">
      <div className="not-found-container">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">{t.subtitle}</h2>
        <p className="not-found-text">{t.text}</p>
        <div className="not-found-actions">
          <Link href={homeHref} className="not-found-btn primary">
            {t.home}
          </Link>
          <Link href={galleryHref} className="not-found-btn secondary">
            {t.gallery}
          </Link>
        </div>
      </div>
    </div>
  );
}
