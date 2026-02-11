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
 * STEP_FIXES_08 Features:
 * - 2:1 aspect ratio hero slider
 * - Fade animation between slides
 * - Auto-advance every 5 seconds
 * - Pause on hover (desktop)
 * - Swipe support (mobile)
 * - Horizontal thumbnail strip with drag/swipe navigation
 * - Desktop: Click to toggle magnifier mode (mouse pan)
 * - Mobile: Tap opens fullscreen lightbox with swipe navigation
 * - ESC key exits magnifier/lightbox
 * - Arrow keys navigate images
 * - No external dependencies
 */
export function BrandHeroGallery({ images, brandName, lightboxImages, locale = 'pl' }: BrandHeroGalleryProps) {
  const t = getDictionary(locale);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMagnifierActive, setIsMagnifierActive] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 50, y: 50 });
  const thumbsRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);
  
  // Touch/drag state for hero
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  
  // Drag state for thumbnails
  const thumbDragStart = useRef(0);
  const thumbScrollStart = useRef(0);
  const isDragging = useRef(false);
  
  // Detect mobile
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Use lightbox images if available, otherwise fallback to gallery images
  const fullResImages = lightboxImages && lightboxImages.length > 0 ? lightboxImages : images;

  // Auto-advance (paused when magnifier/lightbox active)
  useEffect(() => {
    if (isPaused || images.length <= 1 || isMagnifierActive || isLightboxOpen) return;
    
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isPaused, images.length, isMagnifierActive, isLightboxOpen]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (!thumbsRef.current) return;
    const thumbs = thumbsRef.current;
    const activeThumb = thumbs.children[activeIndex] as HTMLElement;
    if (activeThumb) {
      const thumbRect = activeThumb.getBoundingClientRect();
      const containerRect = thumbs.getBoundingClientRect();
      
      if (thumbRect.left < containerRect.left || thumbRect.right > containerRect.right) {
        activeThumb.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' });
      }
    }
  }, [activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMagnifierActive(false);
        setIsLightboxOpen(false);
      } else if (e.key === 'ArrowRight') {
        setActiveIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === 'ArrowLeft') {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    if (isMagnifierActive || isLightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isMagnifierActive, isLightboxOpen, images.length]);

  // Handle hero click - toggle magnifier on desktop, open lightbox on mobile
  const handleHeroClick = useCallback(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 768) {
      setIsLightboxOpen(true);
    } else {
      setIsMagnifierActive((prev) => !prev);
    }
  }, []);

  // Handle mouse move for magnifier pan
  const handleHeroMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isMagnifierActive || !heroRef.current) return;
    
    const rect = heroRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    setZoomPosition({ x, y });
  }, [isMagnifierActive]);

  // Handle swipe on hero
  const handleHeroTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleHeroTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleHeroTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        // Swipe left → next
        setActiveIndex((prev) => (prev + 1) % images.length);
      } else {
        // Swipe right → prev
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    } else if (Math.abs(diff) < 10) {
      // Small movement = tap → open lightbox on mobile
      if (typeof window !== 'undefined' && window.innerWidth < 768) {
        setIsLightboxOpen(true);
      }
    }
  }, [images.length]);

  // Lightbox swipe handlers
  const handleLightboxTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleLightboxTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleLightboxTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;
    const threshold = 50;
    
    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        setActiveIndex((prev) => (prev + 1) % images.length);
      } else {
        setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    }
  }, [images.length]);

  // Handle thumbnail drag
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
    if (thumbsRef.current) {
      thumbsRef.current.style.cursor = 'grab';
    }
  }, []);

  const handleThumbMouseLeave = useCallback(() => {
    isDragging.current = false;
    if (thumbsRef.current) {
      thumbsRef.current.style.cursor = 'grab';
    }
  }, []);

  // Touch events for thumbnail strip
  const handleThumbTouchStart = useCallback((e: React.TouchEvent) => {
    if (!thumbsRef.current) return;
    thumbDragStart.current = e.touches[0].clientX;
    thumbScrollStart.current = thumbsRef.current.scrollLeft;
  }, []);

  const handleThumbTouchMove = useCallback((e: React.TouchEvent) => {
    if (!thumbsRef.current) return;
    const diff = thumbDragStart.current - e.touches[0].clientX;
    thumbsRef.current.scrollLeft = thumbScrollStart.current + diff;
  }, []);

  const goToSlide = useCallback((index: number) => {
    // Only navigate if not dragging
    if (!isDragging.current) {
      setActiveIndex(index);
    }
  }, []);

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  if (images.length === 0) {
    return null;
  }

  // Single image - no slider needed, but still allow magnifier/lightbox
  if (images.length === 1) {
    return (
      <>
        <div className="brand-hero-gallery">
          <div 
            className={`brand-hero-main ${isMagnifierActive ? 'magnifier-active' : ''}`}
            onClick={handleHeroClick}
            onMouseMove={handleHeroMouseMove}
            style={isMagnifierActive ? {
              cursor: 'zoom-out',
            } : {
              cursor: 'zoom-in',
            }}
          >
            <Image
              src={isMagnifierActive ? fullResImages[0] : images[0]}
              alt={brandName}
              fill
              sizes="(max-width: 1400px) 100vw, 1400px"
              style={isMagnifierActive ? {
                objectFit: 'cover',
                transform: 'scale(2)',
                transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
              } : {
                objectFit: 'cover',
              }}
              priority
            />
          </div>
        </div>
        
        {/* Mobile Lightbox */}
        {isLightboxOpen && (
          <div 
            className="brand-lightbox"
            onClick={() => setIsLightboxOpen(false)}
            onTouchStart={handleLightboxTouchStart}
            onTouchMove={handleLightboxTouchMove}
            onTouchEnd={handleLightboxTouchEnd}
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
                src={fullResImages[0]}
                alt={brandName}
                fill
                sizes="100vw"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <>
      <div className="brand-hero-gallery">
        {/* Main Hero Slider */}
        <div 
          ref={heroRef}
          className={`brand-hero-main ${isMagnifierActive ? 'magnifier-active' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            if (isMagnifierActive) setIsMagnifierActive(false);
          }}
          onClick={handleHeroClick}
          onMouseMove={handleHeroMouseMove}
          onTouchStart={handleHeroTouchStart}
          onTouchMove={handleHeroTouchMove}
          onTouchEnd={handleHeroTouchEnd}
          style={isMagnifierActive ? {
            cursor: 'zoom-out',
          } : {
            cursor: 'zoom-in',
          }}
        >
          {images.map((src, index) => (
            <div
              key={src}
              className={`brand-hero-slide ${index === activeIndex ? 'active' : ''}`}
            >
              <Image
                src={isMagnifierActive && index === activeIndex ? fullResImages[index] || src : src}
                alt={`${brandName} - ${index + 1}`}
                fill
                sizes="(max-width: 1400px) 100vw, 1400px"
                style={isMagnifierActive && index === activeIndex ? {
                  objectFit: 'cover',
                  transform: 'scale(2)',
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  transition: 'transform-origin 0.1s ease-out',
                } : {
                  objectFit: 'cover',
                }}
                priority={index === 0}
              />
            </div>
          ))}
          
          {/* Slide indicators (squares) */}
          {!isMagnifierActive && (
            <>
              <div className="brand-hero-indicators">
                {images.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    className={`brand-hero-indicator ${index === activeIndex ? 'active' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveIndex(index);
                    }}
                    aria-label={`${t.common.photoN} ${index + 1}`}
                  />
                ))}
              </div>
              
              {/* Magnifying glass button */}
              <button
                type="button"
                className="brand-hero-magnifier"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsLightboxOpen(true);
                }}
                aria-label={t.common.enlargePhoto}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Thumbnail Strip with Sliding Indicator */}
        <div className="brand-hero-thumbs-wrapper">
          {/* Sliding position indicator - outside scroll container */}
          <div 
            className="brand-hero-thumb-indicator"
            style={{
              transform: `translateX(${activeIndex * (64 + 8)}px)`,
            }}
          />
          <div 
            ref={thumbsRef}
            className="brand-hero-thumbs"
            onMouseDown={handleThumbMouseDown}
            onMouseMove={handleThumbMouseMove}
            onMouseUp={handleThumbMouseUp}
            onMouseLeave={handleThumbMouseLeave}
            onTouchStart={handleThumbTouchStart}
            onTouchMove={handleThumbTouchMove}
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
      </div>

      {/* Mobile Fullscreen Lightbox */}
      {isLightboxOpen && (
        <div 
          ref={lightboxRef}
          className="brand-lightbox"
          onTouchStart={handleLightboxTouchStart}
          onTouchMove={handleLightboxTouchMove}
          onTouchEnd={handleLightboxTouchEnd}
        >
          <button 
            className="brand-lightbox-close"
            onClick={() => setIsLightboxOpen(false)}
            aria-label={t.common.closeLabel}
          >
            ×
          </button>
          
          <div className="brand-lightbox-image">
            <Image
              src={fullResImages[activeIndex] || images[activeIndex]}
              alt={`${brandName} - ${activeIndex + 1}`}
              fill
              sizes="100vw"
              style={{ objectFit: 'contain' }}
            />
          </div>
          
          {/* Lightbox navigation */}
          {images.length > 1 && (
            <>
              <button
                type="button"
                className="brand-lightbox-nav brand-lightbox-nav-prev"
                onClick={goToPrev}
                aria-label={t.common.prevPhoto}
              >
                ‹
              </button>
              <button
                type="button"
                className="brand-lightbox-nav brand-lightbox-nav-next"
                onClick={goToNext}
                aria-label={t.common.nextPhoto}
              >
                ›
              </button>
            </>
          )}
          
          {/* Lightbox indicators */}
          <div className="brand-lightbox-indicators">
            {images.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`brand-lightbox-indicator ${index === activeIndex ? 'active' : ''}`}
                onClick={() => setActiveIndex(index)}
                aria-label={`${t.common.photoN} ${index + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
