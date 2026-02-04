/**
 * ============================================================================
 * SHOWROOM HERO COMPONENT
 * ============================================================================
 *
 * Hero section for /showroom page with H1 and breadcrumb schema.
 *
 * @version 1.0.0
 */

import Image from 'next/image';
import Link from 'next/link';
import { showroomData } from '@/data/showroom-data';

/**
 * Generate BreadcrumbList schema
 */
function generateBreadcrumbSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Strona główna',
        item: 'https://www.luxarte.pl',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Showroom',
        item: 'https://www.luxarte.pl/showroom',
      },
    ],
  };
}

export default function ShowroomHero() {
  const breadcrumbSchema = generateBreadcrumbSchema();

  return (
    <section className="showroom-hero" aria-labelledby="showroom-title">
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      {/* Background Image */}
      <div className="showroom-hero__background">
        <Image
          src={showroomData.heroImage.src}
          alt={showroomData.heroImage.alt}
          width={showroomData.heroImage.width}
          height={showroomData.heroImage.height}
          className="showroom-hero__image"
          priority
          sizes="100vw"
        />
        <div className="showroom-hero__overlay" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="showroom-hero__content">
        {/* Breadcrumb Navigation */}
        <nav className="showroom-hero__breadcrumb" aria-label="Ścieżka nawigacji">
          <ol className="showroom-hero__breadcrumb-list">
            <li className="showroom-hero__breadcrumb-item">
              <Link href="/" className="showroom-hero__breadcrumb-link">
                Strona główna
              </Link>
            </li>
            <li
              className="showroom-hero__breadcrumb-item showroom-hero__breadcrumb-item--current"
              aria-current="page"
            >
              Showroom
            </li>
          </ol>
        </nav>

        {/* Title */}
        <h1 id="showroom-title" className="showroom-hero__title">
          Showroom
        </h1>

        {/* Subtitle */}
        <p className="showroom-hero__subtitle">
          Odwiedź nas, aby doświadczyć luksusu na żywo. Umów wizytę lub skontaktuj się
          z naszymi ekspertami.
        </p>
      </div>
    </section>
  );
}
