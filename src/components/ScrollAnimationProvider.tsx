'use client';

import { useEffect } from 'react';

/**
 * Global scroll animation initializer
 * Add this component to your root layout to enable scroll animations
 * for any element with data-scroll-animate attribute
 */
export function ScrollAnimationProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('scroll-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    // Initial observation
    const observeElements = () => {
      document.querySelectorAll('[data-scroll-animate]:not(.scroll-visible)').forEach((el) => {
        observer.observe(el);
      });
    };

    // Observe initial elements
    observeElements();

    // Re-observe on route changes (for Next.js navigation)
    const mutationObserver = new MutationObserver(() => {
      observeElements();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  return <>{children}</>;
}
