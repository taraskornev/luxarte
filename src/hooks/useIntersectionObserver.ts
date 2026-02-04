/**
 * ============================================================================
 * INTERSECTION OBSERVER HOOK
 * ============================================================================
 *
 * Custom hook for triggering animations when elements enter the viewport.
 * Used for fade-up animations and lazy loading.
 *
 * @version 1.0.0
 */

'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

// ============================================================================
// Types
// ============================================================================

interface UseIntersectionObserverOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
  root?: Element | null;
}

// ============================================================================
// Hook
// ============================================================================

/**
 * Observe when an element enters or exits the viewport
 * 
 * @example
 * const { ref, isVisible } = useIntersectionObserver({ triggerOnce: true });
 * 
 * <div ref={ref} className={isVisible ? 'animate-in' : ''}>
 *   Content
 * </div>
 */
export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>(
  options: UseIntersectionObserverOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    root = null,
  } = options;

  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Skip if already triggered and triggerOnce is true
    if (triggerOnce && hasTriggered) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasTriggered(true);
          
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin,
        root,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, root, triggerOnce, hasTriggered]);

  return { ref, isVisible };
}

// ============================================================================
// Multiple Elements Hook
// ============================================================================

/**
 * Observe multiple elements with staggered animations
 * 
 * @example
 * const { observe, isVisible } = useIntersectionObserverMany();
 * 
 * {items.map((item, index) => (
 *   <div 
 *     key={item.id}
 *     ref={observe(index)}
 *     className={isVisible(index) ? 'animate-in' : ''}
 *   >
 *     {item.content}
 *   </div>
 * ))}
 */
export function useIntersectionObserverMany<T extends HTMLElement = HTMLDivElement>(
  options: UseIntersectionObserverOptions = {}
) {
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true,
    root = null,
  } = options;

  const elementsRef = useRef<Map<number, T>>(new Map());
  const [visibleIndexes, setVisibleIndexes] = useState<Set<number>>(new Set());

  const observe = useCallback(
    (index: number) => (element: T | null) => {
      if (element) {
        elementsRef.current.set(index, element);
      } else {
        elementsRef.current.delete(index);
      }
    },
    []
  );

  const isVisible = useCallback(
    (index: number) => visibleIndexes.has(index),
    [visibleIndexes]
  );

  useEffect(() => {
    const elements = elementsRef.current;
    if (elements.size === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const element = entry.target as T;
          const index = Array.from(elements.entries()).find(
            ([, el]) => el === element
          )?.[0];

          if (index !== undefined) {
            if (entry.isIntersecting) {
              setVisibleIndexes((prev) => {
                const next = new Set(Array.from(prev));
                next.add(index);
                return next;
              });
              
              if (triggerOnce) {
                observer.unobserve(element);
              }
            } else if (!triggerOnce) {
              setVisibleIndexes((prev) => {
                const next = new Set(Array.from(prev));
                next.delete(index);
                return next;
              });
            }
          }
        });
      },
      {
        threshold,
        rootMargin,
        root,
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, root, triggerOnce]);

  return { observe, isVisible };
}
