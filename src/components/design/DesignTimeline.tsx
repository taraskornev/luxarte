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
 * Vertical timeline with scroll-driven animation (adapted from Retcon pattern).
 * 
 * Animations:
 * 1. Central line fills bullet-to-bullet (milestone-driven, not continuous)
 * 2. Numbered circles scale up when crossing trigger point, fill with accent color
 * 3. Text transitions from 60% to 100% opacity on activation
 * 4. Numbers always visible in circles, even before activation
 * 
 * Trigger point: 55% of viewport height
 * Line starts at first bullet center, ends at last bullet center
 * All animations reverse when scrolling up.
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
    <div ref={containerRef} className="design-timeline">
      {/* Line container */}
      <div ref={lineContainerRef} className="timeline-line-container">
        {/* Background track */}
        <div
          className="timeline-line-bg"
          style={{
            top: lineStyles.top,
            height: Math.max(0, lineStyles.height),
          }}
        />
        {/* Fill line */}
        <div
          className="timeline-line-fill"
          style={{
            top: lineStyles.top,
            height: lineStyles.fillHeight,
          }}
        />
      </div>

      <div className="timeline-steps">
        {steps.map((step, index) => {
          const isActivated = activatedIndices.has(index);

          return (
            <div key={step.number} className="timeline-step">
              {/* Bullet / Circle */}
              <div
                ref={(el) => { bulletRefs.current[index] = el; }}
                className="timeline-bullet-anchor"
              >
                <div
                  className={`timeline-circle${isActivated ? ' timeline-circle--active' : ''}`}
                >
                  <span className="timeline-circle-number">{step.number}</span>
                </div>
              </div>

              {/* Content */}
              <div
                className="timeline-content"
                style={{
                  opacity: isActivated ? 1 : 0.4,
                  transform: isActivated ? 'translateX(0)' : 'translateX(16px)',
                }}
              >
                <h3 className="timeline-step-title">{step.title}</h3>
                <p className="timeline-step-desc">{step.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
