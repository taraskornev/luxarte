/**
 * ============================================================================
 * PRODUCT GALLERY GRID COMPONENT
 * ============================================================================
 *
 * Responsive grid of product gallery images.
 * No carousel - simple grid with optional lightbox-style zoom.
 *
 * @version 1.0.0
 */

'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import type { ProductGalleryImage } from '@/data/products-data';

interface ProductGalleryGridProps {
  readonly images: readonly ProductGalleryImage[];
  readonly productName: string;
}

export default function ProductGalleryGrid({
  images,
  productName,
}: ProductGalleryGridProps) {
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  const handleImageClick = useCallback((index: number) => {
    setActiveImageIndex(index);
  }, []);

  const handleClose = useCallback(() => {
    setActiveImageIndex(null);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (activeImageIndex === null) return;

      if (e.key === 'Escape') {
        handleClose();
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) =>
          prev !== null ? (prev + 1) % images.length : 0
        );
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) =>
          prev !== null ? (prev - 1 + images.length) % images.length : 0
        );
      }
    },
    [activeImageIndex, images.length, handleClose]
  );

  if (images.length === 0) return null;

  return (
    <>
      <section
        className="product-gallery"
        aria-label={`Galeria zdjęć produktu ${productName}`}
      >
        <h2 className="product-gallery__heading">Galeria</h2>

        <div
          className={`product-gallery__grid product-gallery__grid--count-${Math.min(images.length, 4)}`}
        >
          {images.map((image, index) => (
            <button
              key={image.id}
              className="product-gallery__item"
              onClick={() => handleImageClick(index)}
              aria-label={`Powiększ zdjęcie ${index + 1} z ${images.length}`}
              type="button"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="product-gallery__image"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <span className="product-gallery__zoom-icon" aria-hidden="true">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                  <path d="M11 8v6M8 11h6" />
                </svg>
              </span>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          className="product-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Powiększone zdjęcie produktu"
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <div
            className="product-lightbox__backdrop"
            onClick={handleClose}
            aria-hidden="true"
          />

          <div className="product-lightbox__content">
            <button
              className="product-lightbox__close"
              onClick={handleClose}
              aria-label="Zamknij galerię"
              type="button"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            <figure className="product-lightbox__figure">
              <Image
                src={images[activeImageIndex].src}
                alt={images[activeImageIndex].alt}
                width={images[activeImageIndex].width}
                height={images[activeImageIndex].height}
                className="product-lightbox__image"
                sizes="90vw"
                priority
              />
              <figcaption className="product-lightbox__caption">
                {images[activeImageIndex].alt}
              </figcaption>
            </figure>

            {images.length > 1 && (
              <>
                <button
                  className="product-lightbox__nav product-lightbox__nav--prev"
                  onClick={() =>
                    setActiveImageIndex(
                      (prev) =>
                        (prev! - 1 + images.length) % images.length
                    )
                  }
                  aria-label="Poprzednie zdjęcie"
                  type="button"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                <button
                  className="product-lightbox__nav product-lightbox__nav--next"
                  onClick={() =>
                    setActiveImageIndex(
                      (prev) => (prev! + 1) % images.length
                    )
                  }
                  aria-label="Następne zdjęcie"
                  type="button"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>

                <div className="product-lightbox__counter">
                  {activeImageIndex + 1} / {images.length}
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
