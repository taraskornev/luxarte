'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { getDictionary, type Locale } from '@/i18n';
import { UnifiedLightbox } from '@/components/lightbox/UnifiedLightbox';

interface OutletGalleryProps {
  images: string[];
  productName: string;
  locale?: Locale;
}

/**
 * Outlet Product Gallery — matches Brand gallery behavior
 * Click opens fullscreen lightbox, thumbnail strip, auto-advance
 */
export function OutletGallery({ images, productName, locale = 'pl' }: OutletGalleryProps) {
  const t = getDictionary(locale);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const thumbsRef = useRef<HTMLDivElement>(null);
  
  // Touch state for swipe
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  
  // Drag state for thumbnails
  const thumbDragStart = useRef(0);
  const thumbScrollStart = useRef(0);
  const isDragging = useRef(false);

  // Direct image change
  const changeImage = useCallback((newIndex: number) => {
    if (newIndex === selectedIndex) return;
    setSelectedIndex(newIndex);
  }, [selectedIndex]);

  // Auto-advance carousel every 5 seconds
  useEffect(() => {
    if (isPaused || images.length <= 1 || isLightboxOpen) return;
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, images.length, isLightboxOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!isLightboxOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsLightboxOpen(false);
      else if (e.key === 'ArrowRight') setSelectedIndex((prev) => (prev + 1) % images.length);
      else if (e.key === 'ArrowLeft') setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen, images.length]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (!thumbsRef.current) return;
    const activeThumb = thumbsRef.current.children[selectedIndex] as HTMLElement;
    if (activeThumb) {
      const thumbRect = activeThumb.getBoundingClientRect();
      const containerRect = thumbsRef.current.getBoundingClientRect();
      if (thumbRect.left < containerRect.left || thumbRect.right > containerRect.right) {
        activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [selectedIndex]);

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
      if (diff > 0) setSelectedIndex((prev) => (prev + 1) % images.length);
      else setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  }, [images.length]);

  // Thumbnail drag handlers
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

  // No images fallback
  if (!images || images.length === 0) {
    return (
      <div className="pdp-gallery">
        <div className="pdp-gallery__main pdp-gallery__main--empty">
          <span>{t.common.noPhotos}</span>
        </div>
      </div>
    );
  }

  const currentImage = images[selectedIndex] || images[0];

  return (
    <>
      <div 
        className="pdp-gallery"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Main Image — click opens lightbox */}
        <div
          className="pdp-gallery__main"
          onClick={() => setIsLightboxOpen(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleSwipeEnd}
          style={{ cursor: 'pointer' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentImage}
            alt={`${productName} - ${t.common.photoN} ${selectedIndex + 1}`}
            className="pdp-gallery__main-img"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Thumbnails Strip */}
        {images.length > 1 && (
          <div className="pdp-gallery__thumbs-wrapper">
            <div
              ref={thumbsRef}
              className="pdp-gallery__thumbs"
              onMouseDown={handleThumbMouseDown}
              onMouseMove={handleThumbMouseMove}
              onMouseUp={handleThumbMouseUp}
              onMouseLeave={handleThumbMouseUp}
            >
              {images.map((img, idx) => (
                <button
                  key={img}
                  type="button"
                  className={`pdp-gallery__thumb ${idx === selectedIndex ? 'active' : ''}`}
                  onClick={() => !isDragging.current && changeImage(idx)}
                  aria-label={`${t.common.photoN} ${idx + 1}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img}
                    alt={`${t.common.thumbnailN} ${idx + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox */}
      {isLightboxOpen && (
        <UnifiedLightbox
          images={images}
          currentIndex={selectedIndex}
          onClose={() => setIsLightboxOpen(false)}
          onIndexChange={setSelectedIndex}
          altPrefix={productName}
        />
      )}
    </>
  );
}
