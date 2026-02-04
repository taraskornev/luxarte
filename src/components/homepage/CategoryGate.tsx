/**
 * ============================================================================
 * CATEGORY GATE COMPONENT
 * ============================================================================
 * 
 * Grid layout showcasing 4-6 featured product categories.
 * Uses CategoryCard components in a masonry-style grid.
 * 
 * @version 1.0.0
 */

import React from 'react';
import { CategoryCard, CategoryCardProps } from './CategoryCard';

export interface CategoryGateProps {
  /** Section title */
  title?: string;
  /** Subtitle/description */
  subtitle?: string;
  /** Array of category items */
  categories: readonly Omit<CategoryCardProps, 'aspectRatio'>[];
}

/**
 * CategoryGate Component
 * 
 * Premium category showcase grid with varying card sizes.
 */
export const CategoryGate: React.FC<CategoryGateProps> = ({
  title = 'Odkryj nasze kolekcje',
  subtitle,
  categories,
}) => {
  // Assign aspect ratios for visual interest
  const getAspectRatio = (index: number): 'square' | 'portrait' | 'landscape' => {
    const patterns: ('square' | 'portrait' | 'landscape')[] = [
      'portrait',
      'landscape',
      'square',
      'portrait',
      'square',
      'landscape',
    ];
    return patterns[index % patterns.length];
  };

  return (
    <section className="category-gate" aria-labelledby="category-gate-title">
      <div className="category-gate__container">
        <header className="category-gate__header">
          <h2 id="category-gate-title" className="category-gate__title">
            {title}
          </h2>
          {subtitle && (
            <p className="category-gate__subtitle">{subtitle}</p>
          )}
        </header>

        <div className="category-gate__grid">
          {categories.slice(0, 6).map((category, index) => (
            <div
              key={category.id}
              className={`category-gate__item category-gate__item--${index + 1}`}
            >
              <CategoryCard
                {...category}
                aspectRatio={getAspectRatio(index)}
              />
            </div>
          ))}
        </div>

        <div className="category-gate__footer">
          <a href="/oferta" className="category-gate__link">
            Zobacz pełną ofertę
          </a>
        </div>
      </div>
    </section>
  );
};

export default CategoryGate;
