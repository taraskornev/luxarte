'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

interface TimelineStep {
  number: number;
  title: string;
  description: string;
}

interface DesignTimelineProps {
  steps: TimelineStep[];
}

/**
 * Vertical timeline with scroll-driven animation.
 * Adapted from Retcon AnimatedTimeline pattern:
 * - Desktop: centered line, content alternating left/right
 * - Mobile: left-aligned line, content on the right
 * - Numbered circles (always visible) instead of year pills
 * - Milestone-driven fill, fully reversible on scroll-up
 */
export function DesignTimeline({ steps }: DesignTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineContainerRef = useRef<HTMLDivElement>(null);
  const bulletRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activatedIndices, setActivatedIndices] = useState<Set<number>>(new Set());
  const [lineStyles, setLineStyles] = useState({ top: 0, height: 0, fillHeight: 0 });

  const handleScroll = useCallback(() => {
    if (!containerRef.current || !lineContainerRef.current) return;
    if (bulletRefs.current.length === 0) return;

    const triggerPoint = window.innerHeight * 0.55;
    const newActivated = new Set<number>();

    bulletRefs.current.forEach((bullet, index) => {
      if (!bullet) return;
      const rect = bullet.getBoundingClientRect();
      const bulletCenter = rect.top + rect.height / 2;
      if (bulletCenter <= triggerPoint) {
        newActivated.add(index);
      }
    });

    setActivatedIndices(newActivated);

    const firstBullet = bulletRefs.current[0];
    const lastBullet = bulletRefs.current[bulletRefs.current.length - 1];

    if (firstBullet && lastBullet && lineContainerRef.current) {
      const containerRect = lineContainerRef.current.getBoundingClientRect();
      const firstRect = firstBullet.getBoundingClientRect();
      const lastRect = lastBullet.getBoundingClientRect();

      const firstCenter = firstRect.top + firstRect.height / 2 - containerRect.top;
      const lastCenter = lastRect.top + lastRect.height / 2 - containerRect.top;
      const totalHeight = lastCenter - firstCenter;

      const lastActivatedIndex = Math.max(...Array.from(newActivated), -1);
      let fillHeight = 0;

      if (lastActivatedIndex >= 0 && lastActivatedIndex < bulletRefs.current.length) {
        const lastActivatedBullet = bulletRefs.current[lastActivatedIndex];
        if (lastActivatedBullet) {
          const activatedRect = lastActivatedBullet.getBoundingClientRect();
          const activatedCenter = activatedRect.top + activatedRect.height / 2 - containerRect.top;
          fillHeight = activatedCenter - firstCenter;
        }
      }

      setLineStyles({
        top: firstCenter,
        height: totalHeight,
        fillHeight: Math.max(0, fillHeight),
      });
    }
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setActivatedIndices(new Set(steps.map((_, i) => i)));
      return;
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    const timeoutId = setTimeout(handleScroll, 50);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timeoutId);
    };
  }, [handleScroll, steps]);

  return (
    <div ref={containerRef} className="dtl">
      {/* Line container — left on mobile, center on desktop */}
      <div ref={lineContainerRef} className="dtl-line-wrap">
        <div
          className="dtl-line-bg"
          style={{ top: lineStyles.top, height: Math.max(0, lineStyles.height) }}
        />
        <div
          className="dtl-line-fill"
          style={{ top: lineStyles.top, height: lineStyles.fillHeight }}
        />
      </div>

      <div className="dtl-items">
        {steps.map((step, index) => {
          const isActivated = activatedIndices.has(index);
          const isEven = index % 2 === 0;

          return (
            <div
              key={step.number}
              className={`dtl-row${isEven ? ' dtl-row--even' : ''}`}
            >
              {/* Numbered circle — absolutely positioned on the line */}
              <div
                ref={(el) => { bulletRefs.current[index] = el; }}
                className="dtl-bullet-anchor"
              >
                <div
                  className={`dtl-circle${isActivated ? ' dtl-circle--active' : ''}`}
                >
                  <span className="dtl-circle-num">{step.number}</span>
                </div>
              </div>

              {/* Content side */}
              <div
                className={`dtl-content${isEven ? ' dtl-content--even' : ''}`}
                style={{
                  opacity: isActivated ? 1 : 0.4,
                  transition: 'opacity 500ms ease-out',
                }}
              >
                <h3 className="dtl-title">{step.title}</h3>
                <p className="dtl-desc">{step.description}</p>
              </div>

              {/* Spacer for alternating — desktop only */}
              <div className="dtl-spacer" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
