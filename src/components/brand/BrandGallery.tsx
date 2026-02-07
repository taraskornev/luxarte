'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

interface BrandGalleryProps {
  images: string[];
  lightboxImages: string[];
  brandName: string;
}

export function BrandGallery({ images, lightboxImages, brandName }: BrandGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Preload adjacent images
  useEffect(() => {
    if (lightboxOpen && lightboxImages.length > 1) {
      const prevIdx = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
      const nextIdx = (lightboxIndex + 1) % lightboxImages.length;
      
      const preloadPrev = new window.Image();
      preloadPrev.src = lightboxImages[prevIdx];
      const preloadNext = new window.Image();
      preloadNext.src = lightboxImages[nextIdx];
    }
  }, [lightboxOpen, lightboxIndex, lightboxImages]);

  // Handle keyboard navigation
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

  if (images.length === 0) {
    return null;
  }

  return (
    <>
      <div className="brand-gallery-grid">
        {images.map((src, index) => (
          <button
            key={src}
            type="button"
            className="brand-gallery-item"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={src}
              alt={`${brandName} - zdjęcie ${index + 1}`}
              width={400}
              height={400}
              loading="lazy"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-backdrop" />
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxImages[lightboxIndex]}
              alt={`${brandName} - zdjęcie ${lightboxIndex + 1}`}
              width={1600}
              height={1200}
              priority
              sizes="90vw"
            />
          </div>
          <button type="button" className="lightbox-close" onClick={closeLightbox}>
            ×
          </button>
          {lightboxImages.length > 1 && (
            <>
              <button type="button" className="lightbox-nav prev" onClick={goToPrev}>
                ‹
              </button>
              <button type="button" className="lightbox-nav next" onClick={goToNext}>
                ›
              </button>
              <div className="lightbox-counter">
                {lightboxIndex + 1} / {lightboxImages.length}
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
