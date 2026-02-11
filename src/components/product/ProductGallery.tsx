'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { getDictionary, type Locale } from '@/i18n';
import { UnifiedLightbox } from '@/components/lightbox/UnifiedLightbox';

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

  // Lock scroll when lightbox is open (keyboard nav handled by UnifiedLightbox)
  useEffect(() => {
    if (!lightboxOpen) return;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, [lightboxOpen]);

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

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

      {/* Lightbox */}
      {lightboxOpen && (
        <UnifiedLightbox
          images={lightboxImages}
          currentIndex={lightboxIndex}
          onClose={closeLightbox}
          onIndexChange={setLightboxIndex}
          altPrefix={productName}
        />
      )}
    </>
  );
}
