'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { getDictionary, type Locale } from '@/i18n';

interface BrandHeroGalleryProps {
  images: string[];
  brandName: string;
  lightboxImages?: string[];
  locale?: Locale;
}

/**
 * Brand Hero Gallery Slider
 * 
 * Clean gallery with:
 * - 2:1 aspect ratio hero slider with fade transitions
 * - Auto-advance every 5 seconds
 * - Click opens fullscreen lightbox
 * - Swipe navigation (mobile)
 * - Horizontal thumbnail strip
 * - Keyboard: ESC closes lightbox, arrows navigate
 */
export function BrandHeroGallery({ images, brandName, lightboxImages, locale = 'pl' }: BrandHeroGalleryProps) {
  const t = getDictionary(locale);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const thumbsRef = useRef<HTMLDivElement>(null);
  
  // Touch/drag state
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  
  // Drag state for thumbnails
  const thumbDragStart = useRef(0);
  const thumbScrollStart = useRef(0);
  const isDragging = useRef(false);

  // Use lightbox images if available, otherwise fallback to gallery images
  const fullResImages = lightboxImages && lightboxImages.length > 0 ? lightboxImages : images;

  // Auto-advance
  useEffect(() => {
    if (isPaused || images.length <= 1 || isLightboxOpen) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, images.length, isLightboxOpen]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (!thumbsRef.current) return;
    const activeThumb = thumbsRef.current.children[activeIndex] as HTMLElement;
    if (activeThumb) {
      const thumbRect = activeThumb.getBoundingClientRect();
      const containerRect = thumbsRef.current.getBoundingClientRect();
      if (thumbRect.left < containerRect.left || thumbRect.right > containerRect.right) {
        activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsLightboxOpen(false);
      else if (e.key === 'ArrowRight') setActiveIndex((prev) => (prev + 1) % images.length);
      else if (e.key === 'ArrowLeft') setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, images.length]);

  // Swipe handlers
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleSwipeEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) setActiveIndex((prev) => (prev + 1) % images.length);
      else setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  }, [images.length]);

  // Thumbnail drag
  const handleThumbMouseDown = useCallback((e: React.MouseEvent) => {
    if (!thumbsRef.current) return;
    isDragging.current = true;
    thumbDragStart.current = e.clientX;
    thumbScrollStart.current = thumbsRef.current.scrollLeft;
    thumbsRef.current.style.cursor = 'grabbing';
  }, []);

  const handleThumbMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isDragging.current || !thumbsRef.current) return;
    thumbsRef.current.scrollLeft = thumbScrollStart.current + (thumbDragStart.current - e.clientX);
  }, []);

  const handleThumbMouseUp = useCallback(() => {
    isDragging.current = false;
    if (thumbsRef.current) thumbsRef.current.style.cursor = 'grab';
  }, []);

  const goToSlide = useCallback((index: number) => {
    if (!isDragging.current) setActiveIndex(index);
  }, []);

  if (images.length === 0) return null;

  return (
    <>
      <div className="brand-hero-gallery">
        {/* Main Hero Slider */}
        <div
          className="brand-hero-main"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={() => setIsLightboxOpen(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleSwipeEnd}
          style={{ cursor: 'pointer' }}
        >
          {images.map((src, index) => (
            <div
              key={src}
              className={`brand-hero-slide ${index === activeIndex ? 'active' : ''}`}
            >
              <Image
                src={src}
                alt={`${brandName} - ${index + 1}`}
                fill
                sizes="(max-width: 1400px) 100vw, 1400px"
                style={{ objectFit: 'cover' }}
                priority={index === 0}
              />
            </div>
          ))}
        </div>

        {/* Thumbnail Strip */}
        {images.length > 1 && (
          <div className="brand-hero-thumbs-wrapper">
            <div
              ref={thumbsRef}
              className="brand-hero-thumbs"
              onMouseDown={handleThumbMouseDown}
              onMouseMove={handleThumbMouseMove}
              onMouseUp={handleThumbMouseUp}
              onMouseLeave={handleThumbMouseUp}
            >
              {images.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  className={`brand-hero-thumb ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                >
                  <Image
                    src={src}
                    alt={`${brandName} - ${t.common.thumbnailN} ${index + 1}`}
                    width={64}
                    height={64}
                    style={{ objectFit: 'cover' }}
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox */}
      {isLightboxOpen && (
        <div
          className="brand-lightbox"
          onClick={() => setIsLightboxOpen(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleSwipeEnd}
        >
          <button
            className="brand-lightbox-close"
            onClick={() => setIsLightboxOpen(false)}
            aria-label={t.common.closeLabel}
          >
            ×
          </button>

          <div className="brand-lightbox-image" onClick={(e) => e.stopPropagation()}>
            <Image
              src={fullResImages[activeIndex] || images[activeIndex]}
              alt={`${brandName} - ${activeIndex + 1}`}
              fill
              sizes="100vw"
              style={{ objectFit: 'contain' }}
            />
          </div>

          {/* Counter */}
          {images.length > 1 && (
            <div className="brand-lightbox-counter">
              {activeIndex + 1} / {images.length}
            </div>
          )}
        </div>
      )}
    </>
  );
}
