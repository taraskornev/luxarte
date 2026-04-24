'use client';

import { useState, useEffect, useRef, useCallback } from 'react';

interface UnifiedLightboxProps {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
  altPrefix?: string;
}

export function UnifiedLightbox({ images, currentIndex, onClose, onIndexChange, altPrefix = 'Photo' }: UnifiedLightboxProps) {
  const totalImages = images.length;

  // --- UI state ---
  const [showControls, setShowControls] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  // --- Zoom / pan state ---
  const [zoomScale, setZoomScale] = useState(1);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);

  // --- Strip swipe state ---
  // dragX: live pixel offset of the strip while finger is down
  // settling: after release, animate strip to final position then commit
  const [dragX, setDragX] = useState(0);
  const [dragY, setDragY] = useState(0);
  const [settling, setSettling] = useState<{ targetIndex: number; direction: 'left' | 'right' } | null>(null);

  // --- Axis lock ---
  const axisLock = useRef<'none' | 'h' | 'v'>('none');

  // --- Refs ---
  const containerRef = useRef<HTMLDivElement>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>();
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const isDragging = useRef(false);
  const isPinching = useRef(false);
  const pinchStartDist = useRef(0);
  const pinchStartScale = useRef(1);
  const pinchMidX = useRef(0);
  const pinchMidY = useRef(0);
  const pinchStartPanX = useRef(0);
  const pinchStartPanY = useRef(0);
  const panStartX = useRef(0);
  const panStartY = useRef(0);
  const panStartPX = useRef(0);
  const panStartPY = useRef(0);
  const lastTapTime = useRef(0);
  const doubleTapFired = useRef(false);
  const justSettled = useRef(false);

  // --- Neighbors ---
  const prevIndex = (currentIndex - 1 + totalImages) % totalImages;
  const nextIndex = (currentIndex + 1) % totalImages;

  // Reset zoom on image change
  useEffect(() => {
    setZoomScale(1);
    setPanX(0);
    setPanY(0);
  }, [currentIndex]);

  // ─── Controls auto-hide ───
  const resetHideTimer = useCallback(() => {
    setShowControls(true);
    if (hideTimer.current) clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setShowControls(false), 3000);
  }, []);

  useEffect(() => {
    const onMove = () => resetHideTimer();
    window.addEventListener('mousemove', onMove);
    resetHideTimer();
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (hideTimer.current) clearTimeout(hideTimer.current);
    };
  }, [resetHideTimer]);

  // ─── Close: zoom IN + fade out ───
  const handleClose = useCallback(() => {
    if (isClosing) return;
    setIsClosing(true);
    setTimeout(() => { setIsClosing(false); onClose(); }, 350);
  }, [isClosing, onClose]);

  // ─── Navigate via button/keyboard: animate the strip ───
  const goTo = useCallback((direction: 'left' | 'right') => {
    if (settling || zoomScale > 1) return;
    const target = direction === 'left' ? nextIndex : prevIndex;
    setSettling({ targetIndex: target, direction });
    resetHideTimer();
  }, [settling, zoomScale, nextIndex, prevIndex, resetHideTimer]);

  // When settle transition ends, commit the index
  const onSettleEnd = useCallback(() => {
    if (!settling) return;
    const idx = settling.targetIndex;
    justSettled.current = true;
    setSettling(null);
    setDragX(0);
    onIndexChange(idx);
  }, [settling, onIndexChange]);

  // ─── Keyboard ───
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
      else if (e.key === 'ArrowRight') goTo('left');
      else if (e.key === 'ArrowLeft') goTo('right');
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', onKey); };
  }, [goTo, handleClose]);

  // ─── Touch ───
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    resetHideTimer();

    // Pinch
    if (e.touches.length === 2) {
      isPinching.current = true;
      doubleTapFired.current = false;
      const dx = e.touches[1].clientX - e.touches[0].clientX;
      const dy = e.touches[1].clientY - e.touches[0].clientY;
      pinchStartDist.current = Math.sqrt(dx * dx + dy * dy);
      pinchStartScale.current = zoomScale;
      pinchMidX.current = (e.touches[0].clientX + e.touches[1].clientX) / 2;
      pinchMidY.current = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      pinchStartPanX.current = panX;
      pinchStartPanY.current = panY;
      return;
    }

    if (e.touches.length !== 1) return;

    // Double-tap → reset zoom
    const now = Date.now();
    if (now - lastTapTime.current < 300) {
      doubleTapFired.current = true;
      lastTapTime.current = 0;
      setZoomScale(1); setPanX(0); setPanY(0);
      return;
    }
    lastTapTime.current = now;
    doubleTapFired.current = false;

    if (zoomScale > 1) {
      // Pan mode
      panStartX.current = e.touches[0].clientX;
      panStartY.current = e.touches[0].clientY;
      panStartPX.current = panX;
      panStartPY.current = panY;
    } else {
      // Swipe mode
      isDragging.current = true;
      axisLock.current = 'none';
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
      setDragX(0);
      setDragY(0);
    }
  }, [resetHideTimer, zoomScale, panX, panY]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    // Pinch + pan
    if (isPinching.current && e.touches.length === 2) {
      const dx = e.touches[1].clientX - e.touches[0].clientX;
      const dy = e.touches[1].clientY - e.touches[0].clientY;
      const dist = Math.sqrt(dx * dx + dy * dy);
      setZoomScale(Math.max(0.5, Math.min(8, pinchStartScale.current * (dist / pinchStartDist.current))));
      const mx = (e.touches[0].clientX + e.touches[1].clientX) / 2;
      const my = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      setPanX(pinchStartPanX.current + (mx - pinchMidX.current));
      setPanY(pinchStartPanY.current + (my - pinchMidY.current));
      return;
    }

    if (e.touches.length !== 1) return;

    if (zoomScale > 1) {
      setPanX(panStartPX.current + (e.touches[0].clientX - panStartX.current));
      setPanY(panStartPY.current + (e.touches[0].clientY - panStartY.current));
    } else if (isDragging.current) {
      const rawX = e.touches[0].clientX - touchStartX.current;
      const rawY = e.touches[0].clientY - touchStartY.current;

      // Lock axis after initial movement (>8px)
      if (axisLock.current === 'none' && (Math.abs(rawX) > 8 || Math.abs(rawY) > 8)) {
        axisLock.current = Math.abs(rawX) >= Math.abs(rawY) ? 'h' : 'v';
      }

      if (axisLock.current === 'h') {
        setDragX(rawX);
        setDragY(0);
      } else if (axisLock.current === 'v') {
        setDragX(0);
        setDragY(rawY);
      }
    }
  }, [zoomScale]);

  const handleTouchEnd = useCallback(() => {
    if (isPinching.current) {
      isPinching.current = false;
      if (zoomScale < 1) { setZoomScale(1); setPanX(0); setPanY(0); }
      return;
    }
    if (doubleTapFired.current) { doubleTapFired.current = false; return; }
    if (!isDragging.current) return;
    isDragging.current = false;

    const axis = axisLock.current;
    axisLock.current = 'none';

    // Vertical swipe → close
    if (axis === 'v' && Math.abs(dragY) > 80) {
      setDragX(0);
      setDragY(0);
      handleClose();
      return;
    }

    // Horizontal swipe → navigate
    if (axis === 'h' && totalImages > 1) {
      if (dragX < -50) {
        // Swiped left → show next: strip will animate from current dragX to -100%
        setSettling({ targetIndex: nextIndex, direction: 'left' });
        return;
      }
      if (dragX > 50) {
        // Swiped right → show prev: strip will animate from current dragX to +100%
        setSettling({ targetIndex: prevIndex, direction: 'right' });
        return;
      }
    }

    // Snap back (not enough distance)
    setDragX(0);
    setDragY(0);
  }, [dragX, dragY, totalImages, nextIndex, prevIndex, handleClose, zoomScale]);

  // ─── Fullscreen ───
  const handleFullscreen = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;
    if (!document.fullscreenElement) el.requestFullscreen?.().catch(() => {});
    else document.exitFullscreen?.().catch(() => {});
  }, []);

  // ─── Magnifier ───
  const handleMagnifier = useCallback(() => {
    if (zoomScale > 1) { setZoomScale(1); setPanX(0); setPanY(0); }
    else setZoomScale(3);
  }, [zoomScale]);

  // ─── Backdrop click = close ───
  const handleBackdropClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget) handleClose();
  }, [handleClose]);

  // ─── Strip transform ───
  // The strip has 3 panels: [prev | current | next] each 100% wide.
  // Default: translateX(0) shows the center (current). -100% = next, +100% = prev.
  const getStripStyle = (): React.CSSProperties => {
    // Closing animation on the center image is handled separately
    if (isClosing) return {};

    // While settling (after finger release, completing the slide)
    if (settling) {
      const target = settling.direction === 'left' ? '-100%' : '100%';
      // If we have a dragX from the swipe, we need transition from current position
      return {
        transform: `translateX(${target})`,
        transition: 'transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
      };
    }

    // Live dragging (horizontal)
    if (dragX !== 0) {
      return {
        transform: `translateX(${dragX}px)`,
        transition: 'none',
      };
    }

    // After settling, skip transition so new images don't slide backwards
    if (justSettled.current) {
      justSettled.current = false;
      return { transform: 'translateX(0)', transition: 'none' };
    }

    // Snap back with animation if needed
    return {
      transform: 'translateX(0)',
      transition: 'transform 0.25s ease',
    };
  };

  // ─── Image style for zoom/pan and close animation ───
  const getCenterImageStyle = (): React.CSSProperties => {
    if (isClosing) {
      return {
        transform: 'scale(1.3)',
        opacity: 0,
        transition: 'transform 0.35s ease, opacity 0.35s ease',
      };
    }
    // Vertical drag → the center image moves vertically + fades slightly
    if (dragY !== 0) {
      return {
        transform: `translateY(${dragY}px)`,
        opacity: Math.max(0.3, 1 - Math.abs(dragY) / 400),
        transition: 'none',
      };
    }
    // Zoom + pan
    if (zoomScale !== 1 || panX !== 0 || panY !== 0) {
      return {
        transform: `scale(${zoomScale}) translate(${panX / zoomScale}px, ${panY / zoomScale}px)`,
        transition: 'none',
      };
    }
    return {};
  };

  return (
    <div
      ref={containerRef}
      className="unified-lightbox"
      style={isClosing ? { background: 'rgba(0,0,0,0)', transition: 'background 0.35s ease' } : undefined}
      onClick={handleBackdropClick}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
    >
      {/* Top-right icons */}
      <div className={`unified-lightbox__icons${showControls ? ' visible' : ''}`}>
        <button type="button" className="unified-lightbox__icon" aria-label="Fullscreen"
          onClick={(e) => { e.stopPropagation(); handleFullscreen(); }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 7V3h4M13 3h4v4M17 13v4h-4M7 17H3v-4"/>
          </svg>
        </button>
        <button type="button" className="unified-lightbox__icon" aria-label="Zoom"
          onClick={(e) => { e.stopPropagation(); handleMagnifier(); }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="9" r="6"/><path d="M13.5 13.5L18 18"/><path d="M9 6.5v5M6.5 9h5"/>
          </svg>
        </button>
        <button type="button" className="unified-lightbox__icon" aria-label="Close"
          onClick={(e) => { e.stopPropagation(); handleClose(); }}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 5l10 10M15 5L5 15"/>
          </svg>
        </button>
      </div>

      {/* Prev arrow */}
      {totalImages > 1 && (
        <button type="button"
          className={`unified-lightbox__arrow unified-lightbox__arrow--prev${showControls ? ' visible' : ''}`}
          onClick={(e) => { e.stopPropagation(); goTo('right'); }}
          aria-label="Previous">
          <span className="unified-lightbox__arrow-icon">&#x2039;</span>
        </button>
      )}

      {/* ─── Image strip: [prev | current | next] ─── */}
      <div
        className="unified-lightbox__strip"
        style={getStripStyle()}
        onTransitionEnd={settling ? onSettleEnd : undefined}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Prev image (left of center) */}
        {totalImages > 1 && (
          <div className="unified-lightbox__panel unified-lightbox__panel--prev">
            <img src={images[prevIndex]} alt={`${altPrefix} ${prevIndex + 1}`}
              className="unified-lightbox__img" draggable={false} />
          </div>
        )}

        {/* Current image (center) */}
        <div className="unified-lightbox__panel unified-lightbox__panel--center">
          <img src={images[currentIndex]} alt={`${altPrefix} ${currentIndex + 1}`}
            className="unified-lightbox__img" draggable={false}
            style={getCenterImageStyle()} />
        </div>

        {/* Next image (right of center) */}
        {totalImages > 1 && (
          <div className="unified-lightbox__panel unified-lightbox__panel--next">
            <img src={images[nextIndex]} alt={`${altPrefix} ${nextIndex + 1}`}
              className="unified-lightbox__img" draggable={false} />
          </div>
        )}
      </div>

      {/* Next arrow */}
      {totalImages > 1 && (
        <button type="button"
          className={`unified-lightbox__arrow unified-lightbox__arrow--next${showControls ? ' visible' : ''}`}
          onClick={(e) => { e.stopPropagation(); goTo('left'); }}
          aria-label="Next">
          <span className="unified-lightbox__arrow-icon">&#x203A;</span>
        </button>
      )}

      {/* Counter */}
      {totalImages > 1 && (
        <div className="unified-lightbox__counter">{currentIndex + 1} / {totalImages}</div>
      )}
    </div>
  );
}
