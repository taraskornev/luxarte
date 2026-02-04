/**
 * ============================================================================
 * BRAND CARD COMPONENT - LUXARTE
 * ============================================================================
 *
 * Reusable brand card for the brands index grid.
 * Premium editorial styling with hover effects.
 *
 * @version 1.0.0
 */

import Image from 'next/image';
import type { Brand } from '../../data/brands-data';

export interface BrandCardProps {
  readonly brand: Brand;
  readonly variant?: 'default' | 'compact' | 'featured';
  readonly priority?: boolean;
}

/**
 * Category labels mapping
 */
const categoryLabels: Record<string, string> = {
  meble: 'Meble',
  oswietlenie: 'Oświetlenie',
  kuchnie: 'Kuchnie',
  garderoby: 'Garderoby',
  lazienki: 'Łazienki',
  'meble-ogrodowe': 'Ogród',
  agd: 'AGD',
};

/**
 * BrandCard Component
 *
 * Renders a brand card with image, name, description and category badges.
 * Links to the brand detail page.
 */
export function BrandCard({
  brand,
  variant = 'default',
  priority = false,
}: BrandCardProps) {
  const variantClass = variant !== 'default' ? `brand-card--${variant}` : '';

  return (
    <article className={`brand-card ${variantClass}`} itemScope itemType="https://schema.org/Brand">
      <a href={`/brands/${brand.slug}`} className="brand-card__link" aria-label={`Zobacz markę ${brand.name}`}>
        <figure className="brand-card__media">
          <Image
            src={brand.image}
            alt={`${brand.name} - luksusowe meble`}
            className="brand-card__image"
            width={600}
            height={400}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
          />
          <div className="brand-card__overlay" aria-hidden="true" />
        </figure>

        <div className="brand-card__content">
          <div className="brand-card__badges" aria-label="Kategorie">
            {brand.categories.slice(0, 2).map((cat) => (
              <span key={cat} className="brand-card__badge">
                {categoryLabels[cat] || cat}
              </span>
            ))}
          </div>

          <h3 className="brand-card__title" itemProp="name">{brand.name}</h3>

          <p className="brand-card__description" itemProp="description">
            {brand.shortDescription}
          </p>

          <span className="brand-card__cta">
            Poznaj markę
            <svg className="brand-card__arrow" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </a>

      <meta itemProp="url" content={`https://www.luxarte.pl/brands/${brand.slug}`} />
    </article>
  );
}

/**
 * Legacy string-based render for static HTML generation
 */
function renderCategoryBadges(categories: readonly string[]): string {
  return categories
    .slice(0, 2)
    .map(
      (cat) => `<span class="brand-card__badge">${categoryLabels[cat] || cat}</span>`
    )
    .join('');
}

/**
 * Legacy string-based BrandCardGrid for static HTML (kept for backwards compatibility)
 * For Next.js usage, map over brands and use <BrandCard /> component directly
 */
export function BrandCardGrid(_brands: readonly Brand[]): null {
  console.warn('BrandCardGrid string-based render is deprecated. Use BrandCard component directly in React.');
  return null;
}

export default BrandCard;
