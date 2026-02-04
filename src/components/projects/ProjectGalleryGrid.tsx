/**
 * ============================================================================
 * PROJECT GALLERY GRID COMPONENT
 * ============================================================================
 *
 * Responsive image gallery grid for project pages.
 * No carousel - static editorial grid layout.
 *
 * @component ProjectGalleryGrid
 */

import Image from 'next/image';
import type { GalleryImage } from '@/data/projects-data';

export interface ProjectGalleryGridProps {
  readonly images: readonly GalleryImage[];
  readonly projectTitle: string;
}

/**
 * Generate srcset string from image srcset array
 */
function generateSrcSet(
  srcset?: readonly { src: string; width: number }[]
): string | undefined {
  if (!srcset || srcset.length === 0) return undefined;
  return srcset.map((item) => `${item.src} ${item.width}w`).join(', ');
}

/**
 * ProjectGalleryGrid - Responsive image gallery
 */
export function ProjectGalleryGrid({
  images,
  projectTitle,
}: ProjectGalleryGridProps): JSX.Element {
  if (images.length === 0) {
    return <></>;
  }

  return (
    <section
      className="project-gallery"
      aria-labelledby="gallery-heading"
      itemScope
      itemType="https://schema.org/ImageGallery"
    >
      <div className="project-gallery__container">
        <h2 id="gallery-heading" className="project-gallery__heading">
          Galeria projektu
        </h2>

        <meta itemProp="name" content={`Galeria: ${projectTitle}`} />

        <div className="project-gallery__grid" role="list">
          {images.map((image, index) => (
            <figure
              key={image.id}
              className={`project-gallery__item ${
                index === 0 ? 'project-gallery__item--featured' : ''
              }`}
              role="listitem"
              itemProp="image"
              itemScope
              itemType="https://schema.org/ImageObject"
            >
              <Image
                src={image.src}
                alt={image.alt}
                className="project-gallery__image"
                width={image.width}
                height={image.height}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={index < 2}
                itemProp="contentUrl"
              />
              <meta itemProp="name" content={image.alt} />
              <figcaption className="project-gallery__caption sr-only">
                {image.alt}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectGalleryGrid;
