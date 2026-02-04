/**
 * ============================================================================
 * CATEGORY CARD COMPONENT
 * ============================================================================
 * 
 * Reusable card component for product categories.
 * Features image, title, and optional description with hover effect.
 * 
 * @version 1.0.0
 */

import React from 'react';
import Image from 'next/image';

export interface CategoryCardProps {
  /** Category ID */
  id: string;
  /** Category name */
  name: string;
  /** URL slug */
  slug: string;
  /** Category image */
  image: string;
  /** Optional description */
  description?: string;
  /** Optional: aspect ratio class */
  aspectRatio?: 'square' | 'portrait' | 'landscape';
}

/**
 * CategoryCard Component
 * 
 * Individual category card with image overlay and hover effects.
 */
export const CategoryCard: React.FC<CategoryCardProps> = ({
  id,
  name,
  slug,
  image,
  description,
  aspectRatio = 'portrait',
}) => {
  return (
    <a
      href={`/${slug}`}
      className={`category-card category-card--${aspectRatio}`}
      aria-label={`Zobacz kategorię ${name}`}
    >
      <div className="category-card__media">
        <Image
          src={image}
          alt={name}
          fill
          className="category-card__image"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'cover' }}
        />
        <div className="category-card__overlay" aria-hidden="true" />
      </div>
      <div className="category-card__content">
        <h3 className="category-card__title">{name}</h3>
        {description && (
          <p className="category-card__description">{description}</p>
        )}
        <span className="category-card__cta" aria-hidden="true">
          Odkryj
        </span>
      </div>
    </a>
  );
};

export default CategoryCard;
