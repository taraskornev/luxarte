'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { getDictionary, type Locale } from '@/i18n';

interface ProductGalleryProps {
  heroImage: string | null;
  galleryImages: string[];
  lightboxImages: string[];
  productName: string;
  locale?: Locale;
}

/**
 * ProductGallery Component
 * 
 * Renders:
 * - Main image with soft fade/scale animation on change
 * - Thumbnail strip for image navigation
 * - Lightbox with fade-in, side previews, and keyboard navigation
 * 
 * Image Tier Rules (STEP 11):
 * - Hero/Gallery: uses *-gallery.webp (max 1400px)
 * - Lightbox: uses *-lightbox.webp (loaded on demand, NOT preloaded)
 */
export function ProductGallery({ heroImage, galleryImages, lightboxImages, productName, locale = 'pl' }: ProductGalleryProps) {
  const t = getDictionary(locale);
  // Combine all images for the carousel
  const allImages = heroImage ? [heroImage, ...galleryImages] : galleryImages;
  
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Handle image change with animation
  const handleImageChange = useCallback((newIndex: number) => {
    if (newIndex === selectedIndex || isAnimating) return;
    setIsAnimating(true);
    // Small delay to allow fade-out, then change image
    setTimeout(() => {
      setSelectedIndex(newIndex);
      // Reset animation state after fade-in
      setTimeout(() => setIsAnimating(false), 300);
    }, 150);
  }, [selectedIndex, isAnimating]);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (allImages.length <= 1 || lightboxOpen) return;
    
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setSelectedIndex((prev) => (prev + 1) % allImages.length);
        setTimeout(() => setIsAnimating(false), 300);
      }, 150);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [allImages.length, lightboxOpen]);

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
  if (allImages.length === 0) {
    return (
      <div className="pdp-gallery">
        <div className="pdp-gallery-hero">
          <div className="pdp-image-placeholder">{t.common.noPhotos}</div>
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
        {/* Main Image with soft transition animation */}
        <div
          className={`pdp-gallery-hero pdp-gallery-hero--animated ${isAnimating ? 'pdp-gallery-hero--fading' : ''}`}
          onClick={() => openLightbox(selectedIndex)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && openLightbox(selectedIndex)}
        >
          <Image
            src={allImages[selectedIndex]}
            alt={`${productName} - ${t.common.photoN} ${selectedIndex + 1}`}
            width={1200}
            height={800}
            priority={selectedIndex === 0}
            sizes="(max-width: 1400px) 100vw, 1400px"
            style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
          />
        </div>

        {/* Thumbnail Strip - click to change main image */}
        {allImages.length > 1 && (
          <div className="pdp-thumbnails">
            {allImages.map((img, idx) => (
              <button
                key={img}
                type="button"
                className={`pdp-thumb ${idx === selectedIndex ? 'pdp-thumb--active' : ''}`}
                onClick={() => handleImageChange(idx)}
                aria-label={`${t.common.photoN} ${idx + 1}`}
              >
                <Image
                  src={img}
                  alt={`${productName} - ${t.common.thumbnailN} ${idx + 1}`}
                  width={80}
                  height={60}
                  sizes="80px"
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
              aria-label={t.common.prevPhoto}
            >
              <Image
                src={lightboxImages[prevIdx]}
                alt={t.common.prevPhoto}
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
              alt={`${productName} - ${t.common.photoN} ${lightboxIndex + 1}`}
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
              aria-label={t.common.nextPhoto}
            >
              <Image
                src={lightboxImages[nextIdx]}
                alt={t.common.nextPhoto}
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
