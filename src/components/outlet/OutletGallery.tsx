'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import { getDictionary, type Locale } from '@/i18n';

interface OutletGalleryProps {
  images: string[];
  productName: string;
  locale?: Locale;
}

/**
 * Outlet Product Gallery - Matches PDPGallery behavior
 * Uses regular img tags for external URLs
 * Features: magnifying glass, lightbox, zoom, thumbnail strip
 */
export function OutletGallery({ images, productName, locale = 'pl' }: OutletGalleryProps) {
  const t = getDictionary(locale);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMagnifierActive, setIsMagnifierActive] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const mainRef = useRef<HTMLDivElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  
  // Touch state for swipe
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  
  // Drag state for thumbnails
  const thumbDragStart = useRef(0);
  const thumbScrollStart = useRef(0);
  const isDragging = useRef(false);

  // Animated image change
  const changeImage = useCallback((newIndex: number) => {
    if (newIndex === selectedIndex || isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedIndex(newIndex);
      setTimeout(() => setIsAnimating(false), 300);
    }, 150);
  }, [selectedIndex, isAnimating]);

  // Auto-advance carousel every 5 seconds (paused when magnifier/lightbox active or hovering)
  useEffect(() => {
    if (isPaused || images.length <= 1 || isMagnifierActive || isLightboxOpen) return;
    
    const interval = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused, images.length, isMagnifierActive, isLightboxOpen]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMagnifierActive(false);
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    if (isMagnifierActive || isLightboxOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [isMagnifierActive, isLightboxOpen, images.length]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (!thumbsRef.current) return;
    const thumbs = thumbsRef.current;
    const activeThumb = thumbs.children[selectedIndex] as HTMLElement;
    if (activeThumb) {
      const thumbRect = activeThumb.getBoundingClientRect();
      const containerRect = thumbs.getBoundingClientRect();
      if (thumbRect.left < containerRect.left || thumbRect.right > containerRect.right) {
        activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [selectedIndex]);

  // Handle main image click
  const handleMainClick = useCallback(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsLightboxOpen(true);
    } else {
      setIsMagnifierActive((prev) => !prev);
    }
  }, []);

  // Handle magnifying glass button click
  const handleMagnifierClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setIsLightboxOpen(true);
  }, []);

  // Handle mouse move for magnifier pan
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMagnifierActive || !mainRef.current) return;
    const rect = mainRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  }, [isMagnifierActive]);

  // Handle swipe on main image
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        setSelectedIndex((prev) => (prev + 1) % images.length);
      } else {
        setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    } else if (Math.abs(diff) < 10) {
      setIsLightboxOpen(true);
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
    const diff = thumbDragStart.current - e.clientX;
    thumbsRef.current.scrollLeft = thumbScrollStart.current + diff;
  }, []);

  const handleThumbMouseUp = useCallback(() => {
    isDragging.current = false;
    if (thumbsRef.current) thumbsRef.current.style.cursor = 'grab';
  }, []);

  const handleThumbMouseLeave = useCallback(() => {
    isDragging.current = false;
    if (thumbsRef.current) thumbsRef.current.style.cursor = 'grab';
  }, []);

  // Lightbox navigation
  const goToPrev = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToNext = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const closeLightbox = useCallback(() => {
    setIsLightboxOpen(false);
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
        {/* Main Image with soft animation */}
        <div
          ref={mainRef}
          className={`pdp-gallery__main ${isMagnifierActive ? 'magnifier-active' : ''} ${isAnimating ? 'pdp-gallery__main--fading' : ''}`}
          onClick={handleMainClick}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => isMagnifierActive && setIsMagnifierActive(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={isMagnifierActive ? { cursor: 'zoom-out' } : { cursor: 'zoom-in' }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={currentImage}
            alt={`${productName} - ${t.common.photoN} ${selectedIndex + 1}`}
            className="pdp-gallery__main-img"
            style={isMagnifierActive ? {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transform: 'scale(2)',
              transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
              transition: 'transform-origin 0.1s ease-out',
            } : {
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
          
          {/* Magnifying glass button */}
          {!isMagnifierActive && (
            <button
              type="button"
              className="pdp-gallery__magnifier"
              onClick={handleMagnifierClick}
              aria-label={t.common.enlargePhoto}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="11" cy="11" r="8" />
                <path d="M21 21l-4.35-4.35" />
              </svg>
            </button>
          )}
        </div>

        {/* Thumbnails Strip */}
        {images.length > 1 && (
          <div className="pdp-gallery__thumbs-wrapper">
            {/* Sliding indicator */}
            <div 
              className="pdp-gallery__thumb-indicator"
              style={{ transform: `translateX(${selectedIndex * (64 + 8)}px)` }}
            />
            <div
              ref={thumbsRef}
              className="pdp-gallery__thumbs"
              onMouseDown={handleThumbMouseDown}
              onMouseMove={handleThumbMouseMove}
              onMouseUp={handleThumbMouseUp}
              onMouseLeave={handleThumbMouseLeave}
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

      {/* Lightbox */}
      {isLightboxOpen && images.length > 0 && (
        <div 
          className="pdp-lightbox" 
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => {
            const diff = touchStartX.current - touchEndX.current;
            if (Math.abs(diff) > 50) {
              diff > 0 ? goToNext() : goToPrev();
            }
          }}
        >
          <button
            type="button"
            className="pdp-lightbox__close"
            onClick={closeLightbox}
            aria-label={t.common.closeLabel}
          >
            ×
          </button>
          
          {images.length > 1 && (
            <>
              <button
                type="button"
                className="pdp-lightbox__nav pdp-lightbox__nav--prev"
                onClick={goToPrev}
                aria-label={t.common.prevPhoto}
              >
                ‹
              </button>
              <button
                type="button"
                className="pdp-lightbox__nav pdp-lightbox__nav--next"
                onClick={goToNext}
                aria-label={t.common.nextPhoto}
              >
                ›
              </button>
            </>
          )}

          <div className="pdp-lightbox__content" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={images[selectedIndex]}
              alt={`${productName} - ${t.common.photoN} ${selectedIndex + 1}`}
            />
          </div>

          <div className="pdp-lightbox__counter">
            {selectedIndex + 1} / {images.length}
          </div>

          {/* Lightbox indicators */}
          {images.length > 1 && (
            <div className="pdp-lightbox__indicators">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  className={`pdp-lightbox__indicator ${idx === selectedIndex ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedIndex(idx);
                  }}
                  aria-label={`${t.common.photoN} ${idx + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}
