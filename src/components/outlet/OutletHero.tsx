/**
 * ============================================================================
 * OUTLET HERO COMPONENT
 * ============================================================================
 *
 * Hero section for outlet item detail page.
 * Displays H1, breadcrumb, and primary image.
 *
 * @component OutletHero
 */

import Image from 'next/image';
import Link from 'next/link';
import type { OutletItem } from '@/data/outlet-data';
import { availabilityLabels, conditionLabels } from '@/data/outlet-data';

export interface OutletHeroProps {
  readonly item: OutletItem;
}

/**
 * OutletHero - Hero section for outlet item detail
 */
export function OutletHero({ item }: OutletHeroProps): JSX.Element {
  // Generate BreadcrumbList schema
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Strona główna',
        item: 'https://www.luxarte.pl/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Outlet',
        item: 'https://www.luxarte.pl/outlet',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: item.title,
        item: `https://www.luxarte.pl/outlet/${item.slug}`,
      },
    ],
  };

  return (
    <section className="outlet-hero" aria-labelledby="outlet-item-title">
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="outlet-hero__container">
        {/* Breadcrumb Navigation */}
        <nav className="outlet-hero__breadcrumb" aria-label="Nawigacja okruszkowa">
          <ol className="outlet-hero__breadcrumb-list">
            <li className="outlet-hero__breadcrumb-item">
              <Link href="/">Strona główna</Link>
            </li>
            <li className="outlet-hero__breadcrumb-separator" aria-hidden="true">
              /
            </li>
            <li className="outlet-hero__breadcrumb-item">
              <Link href="/outlet">Outlet</Link>
            </li>
            <li className="outlet-hero__breadcrumb-separator" aria-hidden="true">
              /
            </li>
            <li className="outlet-hero__breadcrumb-item outlet-hero__breadcrumb-item--current">
              {item.title}
            </li>
          </ol>
        </nav>

        {/* Title & Status */}
        <div className="outlet-hero__header">
          <h1 id="outlet-item-title" className="outlet-hero__title">
            {item.title}
          </h1>
          <div className="outlet-hero__badges">
            <span
              className={`outlet-hero__badge outlet-hero__badge--${item.availability}`}
            >
              {availabilityLabels[item.availability]}
            </span>
            <span className="outlet-hero__badge outlet-hero__badge--condition">
              {conditionLabels[item.condition]}
            </span>
          </div>
        </div>

        {/* Primary Image */}
        <div className="outlet-hero__image-wrapper">
          <Image
            src={item.primaryImage.src}
            alt={item.primaryImage.alt}
            className="outlet-hero__image"
            width={item.primaryImage.width}
            height={item.primaryImage.height}
            priority
          />
        </div>
      </div>
    </section>
  );
}

export default OutletHero;
