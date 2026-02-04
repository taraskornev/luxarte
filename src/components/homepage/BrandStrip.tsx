/**
 * ============================================================================
 * BRAND STRIP COMPONENT
 * ============================================================================
 * 
 * Premium brand logo showcase with grayscale-to-color hover effect.
 * Links to individual brand pages.
 * 
 * @version 1.0.0
 */

import React from 'react';
import Image from 'next/image';

export interface Brand {
  id: string;
  name: string;
  slug: string;
  logo: string;
}

export interface BrandStripProps {
  /** Section title */
  title?: string;
  /** Array of brand objects */
  brands: readonly Brand[];
  /** Base URL for brand pages */
  basePath?: string;
}

/**
 * BrandStrip Component
 * 
 * Displays a horizontal grid of brand logos.
 * Logos are grayscale by default, color on hover.
 */
export const BrandStrip: React.FC<BrandStripProps> = ({
  title = 'Nasze Marki',
  brands,
  basePath = '/marki',
}) => {
  return (
    <section className="brand-strip" aria-labelledby="brand-strip-title">
      <div className="brand-strip__container">
        {title && (
          <h2 id="brand-strip-title" className="brand-strip__title">
            {title}
          </h2>
        )}
        <div className="brand-strip__grid" role="list">
          {brands.map((brand) => (
            <a
              key={brand.id}
              href={`${basePath}/${brand.slug}`}
              className="brand-strip__item"
              role="listitem"
              aria-label={`Zobacz markę ${brand.name}`}
            >
              <Image
                src={brand.logo}
                alt={brand.name}
                className="brand-strip__logo"
                width={120}
                height={60}
              />
              <span className="brand-strip__name">{brand.name}</span>
            </a>
          ))}
        </div>
        <div className="brand-strip__cta">
          <a href="/marki" className="brand-strip__link">
            Zobacz wszystkie marki
          </a>
        </div>
      </div>
    </section>
  );
};

export default BrandStrip;
