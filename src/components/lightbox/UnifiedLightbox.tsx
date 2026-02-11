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
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({x: 0, y: 0});
  const [isPanning, setIsPanning] = useState(false);
  const lastTouch = useRef<{x: number, y: number} | null>(null);
  const lastDistance = useRef<number | null>(null);
  const doubleTapTimer = useRef<NodeJS.Timeout | null>(null);
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

  // Slide: swipe left means next image comes from right (legacy)
  const slideToIndex = useCallback((newIndex: number, direction: 'left' | 'right') => {
    if (isTransitioning || newIndex === currentIndex) return;
    // For swipe left, next image slides in from right (so animate current to left, new from right)
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
    if (e.touches.length === 2) {
      setIsPanning(true);
      lastTouch.current = {
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
      };
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      lastDistance.current = Math.sqrt(dx * dx + dy * dy);
    } else if (e.touches.length === 1) {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
      setIsDragging(true);
      setDragOffset({ x: 0, y: 0 });
      resetHideTimer();
    }
  }, [resetHideTimer]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2 && isPanning) {
      // Pinch zoom
      const midX = (e.touches[0].clientX + e.touches[1].clientX) / 2;
      const midY = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (lastDistance.current) {
        let newZoom = Math.max(1, Math.min(zoom * (dist / lastDistance.current), 4));
        setZoom(newZoom);
        // Pan follows midpoint
        if (lastTouch.current) {
          setPan({
            x: pan.x + (midX - lastTouch.current.x),
            y: pan.y + (midY - lastTouch.current.y),
          });
        }
      }
      lastTouch.current = { x: midX, y: midY };
      lastDistance.current = dist;
    } else if (e.touches.length === 1 && isDragging) {
      const dx = e.touches[0].clientX - touchStartX.current;
      const dy = e.touches[0].clientY - touchStartY.current;
      setDragOffset({ x: dx, y: dy });
    }
  }, [isDragging, isPanning, pan.x, pan.y, zoom]);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (isPanning && e.touches.length < 2) {
      setIsPanning(false);
      lastTouch.current = null;
      lastDistance.current = null;
      return;
    }
    if (isDragging && e.touches.length === 0) {
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
    }
  }, [isDragging, isPanning, dragOffset, currentIndex, totalImages, slideToIndex, onClose]);

  // Compute image transform/animation
  const getImageStyle = (): React.CSSProperties => {
    if (isClosing) {
      // Zoom in and fade out (on close)
      return {
        opacity: 0,
        transform: 'scale(1.15)',
        transition: 'opacity 0.35s, transform 0.35s',
      };
    }
    if (isDragging && (dragOffset.x !== 0 || dragOffset.y !== 0)) {
      if (Math.abs(dragOffset.x) > Math.abs(dragOffset.y)) {
        return {
          transform: `translateX(${dragOffset.x}px) scale(${zoom})`,
          transition: 'none',
        };
      } else {
        return {
          transform: `translateY(${dragOffset.y}px) scale(${zoom})`,
          transition: 'none',
        };
      }
    }
    if (zoom !== 1 || isPanning) {
      return {
        transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
        transition: isPanning ? 'none' : 'transform 0.3s',
        cursor: zoom > 1 ? 'grab' : 'auto',
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
    if (slideDirection === 'up' || slideDirection === 'down') {
      return {
        opacity: 0,
        transform: 'scale(1.15)',
        transition: 'opacity 0.35s, transform 0.35s',
      };
    }
    return {
      opacity: 1,
      transform: 'translateX(0) scale(1)',
      transition: 'opacity 0.25s, transform 0.25s',
    };
  };

  // Close with animation on backdrop click (zoom in and fade out)
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
      {/* Top-right icons: fullscreen, magnifier, close */}
      <div className="unified-lightbox__icons">
        <button
          type="button"
          className="unified-lightbox__icon"
          aria-label="Fullscreen"
          tabIndex={0}
        >
          <svg width="22" height="22" viewBox="0 0 22 22"><path d="M3 9V3h6M13 3h6v6M19 13v6h-6M9 19H3v-6" stroke="currentColor" strokeWidth="2" fill="none"/></svg>
        </button>
        <button
          type="button"
          className="unified-lightbox__icon"
          aria-label="Zoom"
          tabIndex={0}
        >
          <svg width="22" height="22" viewBox="0 0 22 22"><circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="2" fill="none"/><path d="M15 15l4 4" stroke="currentColor" strokeWidth="2"/></svg>
        </button>
        <button
          type="button"
          className="unified-lightbox__icon"
          aria-label="Close"
          tabIndex={0}
          onClick={(e) => { e.stopPropagation(); handleBackdropClick(); }}
        >
          <svg width="22" height="22" viewBox="0 0 22 22"><path d="M6 6l10 10M16 6L6 16" stroke="currentColor" strokeWidth="2"/></svg>
        </button>
      </div>

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
        onDoubleClick={() => {
          setZoom(zoom === 1 ? 2 : 1);
          setPan({x: 0, y: 0});
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={images[currentIndex]}
          alt={`${altPrefix} ${currentIndex + 1}`}
          className="unified-lightbox__image"
          draggable={false}
          style={{ touchAction: 'none', userSelect: 'none' }}
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
