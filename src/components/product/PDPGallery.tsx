'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { getDictionary, type Locale } from '@/i18n';

interface PDPGalleryProps {
  images: string[];
  lightboxImages: string[];
  productName: string;
  locale?: Locale;
}

/**
 * PDPGallery Component - Premium Product Gallery (Brand-style)
 * 
 * - Auto-rotating images (every 4s, paused on hover/interaction)
 * - Square main image
 * - Thumbnail strip with outline border on active, horizontal scroll on desktop
 * - Magnifier mode (desktop) and lightbox (mobile tap / magnifier button)
 * - Lightbox: tap left half = prev, right half = next
 */
export function PDPGallery({ images, lightboxImages, productName, locale = 'pl' }: PDPGalleryProps) {
  const t = getDictionary(locale);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isMagnifierActive, setIsMagnifierActive] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const [isPaused, setIsPaused] = useState(false);
  const mainRef = useRef<HTMLDivElement>(null);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<ReturnType<typeof setInterval> | null>(null);
  
  // Touch state for swipe
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  
  // Drag state for thumbnails
  const thumbDragStart = useRef(0);
  const thumbScrollStart = useRef(0);
  const isDragging = useRef(false);

  // Use lightbox images if available
  const fullResImages = lightboxImages && lightboxImages.length > 0 ? lightboxImages : images;

  // Auto-rotate images
  useEffect(() => {
    if (isPaused || isMagnifierActive || isLightboxOpen || images.length <= 1) return;
    
    autoPlayRef.current = setInterval(() => {
      setSelectedIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, isMagnifierActive, isLightboxOpen, images.length]);

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

  // Desktop: horizontal wheel scroll on thumbnail strip
  const handleThumbWheel = useCallback((e: React.WheelEvent) => {
    if (!thumbsRef.current) return;
    // Only intercept if thumbnails overflow
    const el = thumbsRef.current;
    if (el.scrollWidth <= el.clientWidth) return;
    e.preventDefault();
    el.scrollLeft += e.deltaY;
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

  // Lightbox tap navigation: left half = prev, right half = next
  const handleLightboxTap = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    if (x < rect.width / 2) {
      setSelectedIndex((prev) => (prev - 1 + fullResImages.length) % fullResImages.length);
    } else {
      setSelectedIndex((prev) => (prev + 1) % fullResImages.length);
    }
  }, [fullResImages.length]);

  // No images fallback
  if (images.length === 0) {
    return (
      <div className="pdp-gallery">
        <div className="pdp-gallery__main pdp-gallery__main--empty">
          <span>{t.common.noPhotos}</span>
        </div>
      </div>
    );
  }

  const currentImage = images[selectedIndex] || images[0];
  const currentFullRes = fullResImages[selectedIndex] || fullResImages[0];

  return (
    <>
      <div 
        className="pdp-gallery"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Main Image */}
        <div
          ref={mainRef}
          className={`pdp-gallery__main ${isMagnifierActive ? 'magnifier-active' : ''}`}
          onClick={handleMainClick}
          onMouseMove={handleMouseMove}
          onMouseLeave={() => isMagnifierActive && setIsMagnifierActive(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          style={isMagnifierActive ? { cursor: 'zoom-out' } : { cursor: 'zoom-in' }}
        >
          <Image
            src={isMagnifierActive ? currentFullRes : currentImage}
            alt={`${productName} - ${t.common.photoN} ${selectedIndex + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 800px"
            priority={selectedIndex === 0}
            style={isMagnifierActive ? {
              objectFit: 'cover',
              transform: 'scale(2)',
              transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
              transition: 'transform-origin 0.1s ease-out',
            } : {
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
            <div
              ref={thumbsRef}
              className="pdp-gallery__thumbs"
              onMouseDown={handleThumbMouseDown}
              onMouseMove={handleThumbMouseMove}
              onMouseUp={handleThumbMouseUp}
              onMouseLeave={handleThumbMouseLeave}
              onWheel={handleThumbWheel}
            >
              {images.map((img, idx) => (
                <button
                  key={img}
                  type="button"
                  className={`pdp-gallery__thumb ${idx === selectedIndex ? 'active' : ''}`}
                  onClick={() => {
                    if (!isDragging.current) {
                      setSelectedIndex(idx);
                      setIsPaused(true);
                    }
                  }}
                  aria-label={`${t.common.photoN} ${idx + 1}`}
                >
                  <Image
                    src={img}
                    alt={`${t.common.thumbnailN} ${idx + 1}`}
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

      {/* Lightbox */}
      {isLightboxOpen && fullResImages.length > 0 && (
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

          <div className="pdp-lightbox__content" onClick={(e) => {
            e.stopPropagation();
            handleLightboxTap(e);
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={fullResImages[selectedIndex]}
              alt={`${productName} - ${t.common.photoN} ${selectedIndex + 1}`}
            />
          </div>

          <div className="pdp-lightbox__counter">
            {selectedIndex + 1} / {fullResImages.length}
          </div>

          {/* Lightbox indicators */}
          {fullResImages.length > 1 && (
            <div className="pdp-lightbox__indicators">
              {fullResImages.map((_, idx) => (
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
