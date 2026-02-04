/**
 * ============================================================================
 * ANIMATION COMPONENTS
 * ============================================================================
 *
 * Reusable animation wrapper components for motion system.
 *
 * @version 1.0.0
 */

'use client';

import React, { ReactNode } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

// ============================================================================
// FadeUp Component
// ============================================================================

interface FadeUpProps {
  children: ReactNode;
  /** Animation delay (1-5) */
  delay?: 1 | 2 | 3 | 4 | 5;
  /** Custom className */
  className?: string;
}

export function FadeUp({
  children,
  delay,
  className = '',
}: FadeUpProps) {
  const { ref, isVisible } = useIntersectionObserver<HTMLDivElement>({ triggerOnce: true });

  const delayClass = delay ? `animate-delay-${delay}` : '';
  const visibleClass = isVisible ? 'is-visible' : '';

  return (
    <div
      ref={ref}
      className={`animate-fade-up ${delayClass} ${visibleClass} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

// ============================================================================
// StaggerChildren Component
// ============================================================================

interface StaggerChildrenProps {
  children: ReactNode;
  /** Base delay before stagger starts */
  baseDelay?: number;
  /** Delay between each child (in ms) */
  staggerDelay?: number;
  /** Custom className */
  className?: string;
}

export function StaggerChildren({
  children,
  baseDelay = 0,
  staggerDelay = 100,
  className = '',
}: StaggerChildrenProps) {
  const { ref, isVisible } = useIntersectionObserver({ triggerOnce: true });

  return (
    <div
      ref={ref}
      className={className}
      style={{
        // CSS custom properties for stagger timing
        '--stagger-base': `${baseDelay}ms`,
        '--stagger-delay': `${staggerDelay}ms`,
      } as React.CSSProperties}
    >
      {React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child)) return child;

        const delay = baseDelay + index * staggerDelay;

        return (
          <div
            className={`animate-fade-up ${isVisible ? 'is-visible' : ''}`}
            style={{ transitionDelay: `${delay}ms` }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
}

// ============================================================================
// CardLift Component
// ============================================================================

interface CardLiftProps {
  children: ReactNode;
  className?: string;
}

export function CardLift({
  children,
  className = '',
}: CardLiftProps) {
  return (
    <div className={`card-lift ${className}`.trim()}>
      {children}
    </div>
  );
}

// ============================================================================
// ImageHoverScale Component
// ============================================================================

interface ImageHoverScaleProps {
  children: ReactNode;
  className?: string;
}

export function ImageHoverScale({ children, className = '' }: ImageHoverScaleProps) {
  return (
    <div className={`image-hover-scale ${className}`.trim()}>
      {children}
    </div>
  );
}
