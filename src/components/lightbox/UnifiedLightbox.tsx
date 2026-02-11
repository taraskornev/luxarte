'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface UnifiedLightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
  altPrefix?: string;
}

/**
 * Unified Lightbox Component
 * 
 * Matches luxarte.pl gallery behavior:
 * - Swipe: image slides in swipe direction
 * - Arrow click: smooth crossfade (no slide)
 * - Arrows auto-hide after 3s of no mouse/touch activity
 * - Close: click backdrop, ESC, or × button
 * - Keyboard: arrow keys navigate, ESC closes
 * - Counter: X / Y at bottom center
 */
export function UnifiedLightbox({ images, currentIndex, onClose, onIndexChange, altPrefix = 'Photo' }: UnifiedLightboxProps) {
  const [slideDirection, setSlideDirection] = useState<'none' | 'left' | 'right'>('none');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const hideTimer = useRef<ReturnType<typeof setTimeout>>();
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalImages = images.length;

  // Reset controls timer
  const resetHideTimer = useCallback(() => {
    setShowControls(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShowControls(false), 3000);
  }, []);

  // Navigate with crossfade (arrows/keyboard)
  const goTo = useCallback((newIndex: number) => {
    if (isTransitioning || newIndex === currentIndex) return;
    setSlideDirection('none');
    setIsTransitioning(true);
    // Short fade-out, swap, fade-in
    setTimeout(() => {
      onIndexChange(newIndex);
      setTimeout(() => setIsTransitioning(false), 250);
    }, 150);
    resetHideTimer();
  }, [currentIndex, isTransitioning, onIndexChange, resetHideTimer]);

  const goNext = useCallback(() => {
    goTo((currentIndex + 1) % totalImages);
  }, [currentIndex, totalImages, goTo]);

  const goPrev = useCallback(() => {
    goTo((currentIndex - 1 + totalImages) % totalImages);
  }, [currentIndex, totalImages, goTo]);

  // Navigate with slide (swipe)
  const slideToIndex = useCallback((newIndex: number, direction: 'left' | 'right') => {
    if (isTransitioning) return;
    setSlideDirection(direction);
    setIsTransitioning(true);
    setTimeout(() => {
      onIndexChange(newIndex);
      setSlideDirection('none');
      setTimeout(() => setIsTransitioning(false), 50);
    }, 300);
  }, [isTransitioning, onIndexChange]);

  // Keyboard
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, goNext, goPrev]);

  // Mouse movement shows controls
  useEffect(() => {
    const handleMouseMove = () => resetHideTimer();
    window.addEventListener('mousemove', handleMouseMove);
    resetHideTimer();
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [resetHideTimer]);

  // Touch handlers for swipe with drag preview
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    setIsDragging(true);
    setDragOffset(0);
    resetHideTimer();
  }, [resetHideTimer]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;
    // Only track horizontal swipe if primarily horizontal
    if (Math.abs(dx) > Math.abs(dy)) {
      setDragOffset(dx);
    }
  }, [isDragging]);

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    const diff = dragOffset;
    setDragOffset(0);
    if (Math.abs(diff) > 60) {
      if (diff < 0) {
        // Swiped left → next
        slideToIndex((currentIndex + 1) % totalImages, 'left');
      } else {
        // Swiped right → prev
        slideToIndex((currentIndex - 1 + totalImages) % totalImages, 'right');
      }
    }
  }, [dragOffset, currentIndex, totalImages, slideToIndex]);

  // Compute image transform
  const getImageStyle = (): React.CSSProperties => {
    if (isDragging && dragOffset !== 0) {
      return {
        transform: `translateX(${dragOffset}px)`,
        transition: 'none',
      };
    }
    if (slideDirection === 'left') {
      return {
        transform: isTransitioning ? 'translateX(-100%)' : 'translateX(0)',
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      };
    }
    if (slideDirection === 'right') {
      return {
        transform: isTransitioning ? 'translateX(100%)' : 'translateX(0)',
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      };
    }
    // Crossfade for arrow navigation
    return {
      opacity: isTransitioning ? 0 : 1,
      transition: 'opacity 0.25s ease',
      transform: 'translateX(0)',
    };
  };

  return (
    <div
      ref={containerRef}
      className="unified-lightbox"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
    >
      {/* Close button */}
      <button
        type="button"
        className={`unified-lightbox__close ${showControls ? 'visible' : ''}`}
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>

      {/* Left arrow */}
      {totalImages > 1 && (
        <button
          type="button"
          className={`unified-lightbox__arrow unified-lightbox__arrow--prev ${showControls ? 'visible' : ''}`}
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          aria-label="Previous"
        >
          ‹
        </button>
      )}

      {/* Image container */}
      <div
        className="unified-lightbox__image-wrap"
        onClick={(e) => e.stopPropagation()}
        style={getImageStyle()}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[currentIndex]}
          alt={`${altPrefix} ${currentIndex + 1}`}
          className="unified-lightbox__image"
          draggable={false}
        />
      </div>

      {/* Right arrow */}
      {totalImages > 1 && (
        <button
          type="button"
          className={`unified-lightbox__arrow unified-lightbox__arrow--next ${showControls ? 'visible' : ''}`}
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          aria-label="Next"
        >
          ›
        </button>
      )}

      {/* Counter */}
      {totalImages > 1 && (
        <div className="unified-lightbox__counter">
          {currentIndex + 1} / {totalImages}
        </div>
      )}
    </div>
  );
}
