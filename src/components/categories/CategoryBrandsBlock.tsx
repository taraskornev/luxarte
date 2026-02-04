/**
 * ============================================================================
 * CATEGORY BRANDS BLOCK COMPONENT
 * ============================================================================
 *
 * Displays related brands for a category with links to brand pages.
 *
 * @component CategoryBrandsBlock
 */

import Image from 'next/image';
import { brands, type Brand } from '@/data/brands-data';

export interface CategoryBrandsBlockProps {
  readonly brandSlugs: readonly string[];
  readonly categoryName: string;
}

/**
 * Get brands by slugs
 */
function getBrandsBySlug(slugs: readonly string[]): Brand[] {
  return slugs
    .map((slug) => brands.find((b) => b.slug === slug))
    .filter((brand): brand is Brand => brand !== undefined);
}

/**
 * CategoryBrandsBlock - Related brands section
 */
export function CategoryBrandsBlock({
  brandSlugs,
  categoryName,
}: CategoryBrandsBlockProps): JSX.Element | null {
  const relatedBrands = getBrandsBySlug(brandSlugs);

  if (relatedBrands.length === 0) {
    return null;
  }

  return (
    <section
      className="category-brands-block"
      aria-labelledby="related-brands-heading"
    >
      <div className="category-brands-block__container">
        <h2 id="related-brands-heading" className="category-brands-block__heading">
          Marki w kategorii {categoryName}
        </h2>
        <p className="category-brands-block__intro">
          Jesteśmy autoryzowanym dealerem wiodących włoskich marek.
        </p>

        <div
          className="category-brands-block__grid"
          role="list"
          aria-label="Powiązane marki"
        >
          {relatedBrands.map((brand) => (
            <a
              key={brand.slug}
              href={`/brands/${brand.slug}`}
              className="category-brands-block__card"
              role="listitem"
            >
              {brand.logo && (
                <div className="category-brands-block__logo-wrapper">
                  <Image
                    src={brand.logo}
                    alt={`Logo ${brand.name}`}
                    className="category-brands-block__logo"
                    width={180}
                    height={60}
                  />
                </div>
              )}
              <div className="category-brands-block__info">
                <h3 className="category-brands-block__brand-name">{brand.name}</h3>
                <p className="category-brands-block__brand-tagline">
                  {brand.shortDescription}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="category-brands-block__cta">
          <a href="/brands" className="category-brands-block__link">
            Zobacz wszystkie marki
            <span className="category-brands-block__arrow" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CategoryBrandsBlock;
