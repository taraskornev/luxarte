/**
 * ============================================================================
 * CATEGORY IMAGE GRID COMPONENT
 * ============================================================================
 *
 * Editorial image gallery for category pages.
 * Features: Responsive masonry-style grid, large whitespace.
 *
 * @component CategoryImageGrid
 */

import Image from 'next/image';
import type { FeaturedImage } from '@/data/categories-data';

export interface CategoryImageGridProps {
  readonly images: readonly FeaturedImage[];
  readonly categoryName: string;
}

/**
 * CategoryImageGrid - Featured images in editorial layout
 */
export function CategoryImageGrid({
  images,
  categoryName,
}: CategoryImageGridProps): JSX.Element | null {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <section className="category-image-grid" aria-label={`Galeria ${categoryName}`}>
      <div className="category-image-grid__container">
        <h2 className="category-image-grid__heading">Galeria</h2>

        <div
          className="category-image-grid__grid"
          role="list"
          aria-label="Zdjęcia produktów"
        >
          {images.map((image, index) => (
            <figure
              key={image.id}
              className={`category-image-grid__item category-image-grid__item--${
                index === 0 ? 'featured' : 'standard'
              }`}
              role="listitem"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="category-image-grid__image"
                width={image.width}
                height={image.height}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
              />
              <figcaption className="category-image-grid__caption">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoryImageGrid;
