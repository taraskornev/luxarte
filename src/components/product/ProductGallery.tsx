'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  heroImage: string | null;
  galleryImages: string[];
  lightboxImages: string[];
  productName: string;
}

/**
 * ProductGallery Component
 * 
 * Renders:
 * - Hero image (first product image, priority loading, 100vw)
 * - Gallery grid (remaining images, lazy loading, responsive sizes)
 * - Lightbox with fade-in, side previews, and keyboard navigation
 * 
 * Image Tier Rules (STEP 11):
 * - Hero/Gallery: uses *-gallery.webp (max 1400px)
 * - Lightbox: uses *-lightbox.webp (loaded on demand, NOT preloaded)
 * 
 * Lightbox UX Rules:
 * - No close button - click outside or ESC to close
 * - Click side previews to navigate
 * - Arrow keys navigate
 * - Fixed height viewport
 * - No zoom/scale effects
 */
export function ProductGallery({ heroImage, galleryImages, lightboxImages, productName }: ProductGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Keyboard navigation: ESC closes, arrows navigate
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxOpen(false);
      } else if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
      } else if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen, lightboxImages.length]);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const goToPrev = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length);
  }, [lightboxImages.length]);

  const goToNext = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setLightboxIndex((prev) => (prev + 1) % lightboxImages.length);
  }, [lightboxImages.length]);

  // No images at all
  if (!heroImage && galleryImages.length === 0) {
    return (
      <div className="pdp-gallery">
        <div className="pdp-gallery-hero">
          <div className="pdp-image-placeholder">Brak zdjęć</div>
        </div>
      </div>
    );
  }

  // Get side preview indices for lightbox
  const prevIdx = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
  const nextIdx = (lightboxIndex + 1) % lightboxImages.length;

  return (
    <>
      <div className="pdp-gallery">
        {/* Hero Image (first image, priority loading, gallery-tier) */}
        {heroImage && (
          <div
            className="pdp-gallery-hero"
            onClick={() => openLightbox(0)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && openLightbox(0)}
          >
            <Image
              src={heroImage}
              alt={`${productName} - główne zdjęcie`}
              width={1200}
              height={800}
              priority
              sizes="(max-width: 1400px) 100vw, 1400px"
              style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
            />
          </div>
        )}

        {/* Gallery Grid (remaining images, lazy loading, gallery-tier) */}
        {galleryImages.length > 0 && (
          <div className="pdp-gallery-grid">
            {galleryImages.map((img, idx) => (
              <button
                key={img}
                type="button"
                className="pdp-gallery-item"
                onClick={() => openLightbox(idx + 1)}
              >
                <Image
                  src={img}
                  alt={`${productName} - zdjęcie ${idx + 2}`}
                  width={400}
                  height={400}
                  sizes="(max-width: 768px) 50vw, 25vw"
                  loading="lazy"
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox - images loaded on demand (not in DOM until open) */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox} role="dialog" aria-modal="true">
          {/* Side preview - previous (click to navigate) */}
          {lightboxImages.length > 2 && (
            <button
              type="button"
              className="lightbox-preview lightbox-preview-prev"
              onClick={goToPrev}
              aria-label="Poprzednie zdjęcie"
            >
              <Image
                src={lightboxImages[prevIdx]}
                alt="Poprzednie"
                width={100}
                height={100}
                sizes="100px"
                loading="lazy"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </button>
          )}

          {/* Main lightbox image (lightbox-tier, loaded on demand) */}
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxImages[lightboxIndex]}
              alt={`${productName} - powiększenie ${lightboxIndex + 1}`}
              width={1600}
              height={1200}
              sizes="90vw"
              priority
              style={{ objectFit: 'contain', maxHeight: '85vh', width: 'auto', height: 'auto' }}
            />
          </div>

          {/* Side preview - next (click to navigate) */}
          {lightboxImages.length > 2 && (
            <button
              type="button"
              className="lightbox-preview lightbox-preview-next"
              onClick={goToNext}
              aria-label="Następne zdjęcie"
            >
              <Image
                src={lightboxImages[nextIdx]}
                alt="Następne"
                width={100}
                height={100}
                sizes="100px"
                loading="lazy"
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </button>
          )}

          {/* Counter */}
          <div className="lightbox-counter">
            {lightboxIndex + 1} / {lightboxImages.length}
          </div>
        </div>
      )}
    </>
  );
}
