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
  const [slideDirection, setSlideDirection] = useState<'none' | 'left' | 'right' | 'up' | 'down'>('none');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
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

  // Always use slide for navigation (legacy behavior)
  const slideToIndex = useCallback((newIndex: number, direction: 'left' | 'right') => {
    if (isTransitioning || newIndex === currentIndex) return;
    setSlideDirection(direction);
    setIsTransitioning(true);
    setTimeout(() => {
      onIndexChange(newIndex);
      setTimeout(() => {
        setIsTransitioning(false);
        setSlideDirection('none');
      }, 300);
    }, 20);
    resetHideTimer();
  }, [currentIndex, isTransitioning, onIndexChange, resetHideTimer]);

  const goNext = useCallback(() => {
    slideToIndex((currentIndex + 1) % totalImages, 'left');
  }, [currentIndex, totalImages, slideToIndex]);

  const goPrev = useCallback(() => {
    slideToIndex((currentIndex - 1 + totalImages) % totalImages, 'right');
  }, [currentIndex, totalImages, slideToIndex]);

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

  // Touch handlers for swipe with drag preview and up/down to close
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    setIsDragging(true);
    setDragOffset({ x: 0, y: 0 });
    resetHideTimer();
  }, [resetHideTimer]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;
    setDragOffset({ x: dx, y: dy });
  }, [isDragging]);

  const handleTouchEnd = useCallback(() => {
    if (!isDragging) return;
    setIsDragging(false);
    const { x: dx, y: dy } = dragOffset;
    setDragOffset({ x: 0, y: 0 });
    // Horizontal swipe
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) {
        slideToIndex((currentIndex + 1) % totalImages, 'left');
      } else {
        slideToIndex((currentIndex - 1 + totalImages) % totalImages, 'right');
      }
    }
    // Vertical swipe
    else if (Math.abs(dy) > 60 && Math.abs(dy) > Math.abs(dx)) {
      setSlideDirection(dy < 0 ? 'up' : 'down');
      setIsClosing(true);
      setTimeout(() => {
        setIsClosing(false);
        setSlideDirection('none');
        onClose();
      }, 350);
    }
  }, [isDragging, dragOffset, currentIndex, totalImages, slideToIndex, onClose]);

  // Compute image transform/animation
  const getImageStyle = (): React.CSSProperties => {
    if (isClosing) {
      // Zoom out and fade
      return {
        opacity: 0,
        transform: 'scale(0.85)',
        transition: 'opacity 0.35s, transform 0.35s',
      };
    }
    if (isDragging && (dragOffset.x !== 0 || dragOffset.y !== 0)) {
      if (Math.abs(dragOffset.x) > Math.abs(dragOffset.y)) {
        return {
          transform: `translateX(${dragOffset.x}px)`,
          transition: 'none',
        };
      } else {
        return {
          transform: `translateY(${dragOffset.y}px)`,
          transition: 'none',
        };
      }
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
    if (slideDirection === 'up' || slideDirection === 'down') {
      return {
        opacity: 0,
        transform: 'scale(0.85)',
        transition: 'opacity 0.35s, transform 0.35s',
      };
    }
    return {
      opacity: 1,
      transform: 'translateX(0)',
      transition: 'opacity 0.25s, transform 0.25s',
    };
  };

  // Close with animation on backdrop click
  const handleBackdropClick = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 350);
  }, [onClose]);

  return (
    <div
      ref={containerRef}
      className={`unified-lightbox${isClosing ? ' unified-lightbox--closing' : ''}`}
      onClick={handleBackdropClick}
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
        onClick={(e) => { e.stopPropagation(); handleBackdropClick(); }}
        aria-label="Close"
      >
        ×
      </button>

      {/* Left arrow */}
      {totalImages > 1 && (
        <button
          type="button"
          className={`unified-lightbox__arrow unified-lightbox__arrow--prev ${showControls ? 'visible' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            if (!isTransitioning && !isDragging) goPrev();
          }}
          aria-label="Previous"
        >
          <span className="unified-lightbox__arrow-icon">&#x2039;</span>
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
          onClick={(e) => {
            e.stopPropagation();
            if (!isTransitioning && !isDragging) goNext();
          }}
          aria-label="Next"
        >
          <span className="unified-lightbox__arrow-icon">&#x203A;</span>
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
