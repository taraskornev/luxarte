/**
 * ============================================================================
 * CATEGORY CARD COMPONENT
 * ============================================================================
 *
 * Card component for displaying categories in the index grid.
 *
 * @component CategoryCard
 */

import Image from 'next/image';
import type { Category } from '@/data/categories-data';

export interface CategoryCardProps {
  readonly category: Category;
}

/**
 * CategoryCard - Category preview card for index page
 */
export function CategoryCard({ category }: CategoryCardProps): JSX.Element {
  return (
    <article className="category-card">
      <a href={`/categories/${category.slug}`} className="category-card__link">
        <div className="category-card__image-wrapper">
          <Image
            src={category.heroImage.src}
            alt={category.heroImage.alt}
            className="category-card__image"
            width={600}
            height={400}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="category-card__overlay" aria-hidden="true" />
        </div>

        <div className="category-card__content">
          <h2 className="category-card__title">{category.name}</h2>
          <p className="category-card__description">{category.shortIntro}</p>

          {category.relatedBrands.length > 0 && (
            <p className="category-card__brands-count">
              {category.relatedBrands.length}{' '}
              {category.relatedBrands.length === 1 ? 'marka' : 'marek'}
            </p>
          )}

          <span className="category-card__cta" aria-hidden="true">
            Zobacz kategorię →
          </span>
        </div>
      </a>
    </article>
  );
}

export default CategoryCard;
