'use client';

import { useEffect, useRef } from 'react';

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
 * A vertical line fills downward as the user scrolls.
 * Numbered circles sit on the line; each activates when the fill reaches it.
 * Content fades in from the side when its circle activates.
 */
export function DesignTimeline({ steps }: DesignTimelineProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      // Show everything immediately
      sectionRef.current?.querySelectorAll('.timeline-step').forEach((el) => {
        el.classList.add('timeline-step--active');
      });
      if (fillRef.current) fillRef.current.style.height = '100%';
      return;
    }

    const handleScroll = () => {
      const section = sectionRef.current;
      const fill = fillRef.current;
      if (!section || !fill) return;

      const sectionRect = section.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // The trigger line is at 65% of viewport height
      const triggerY = viewportHeight * 0.65;

      // Calculate fill height based on scroll progress
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;

      // How far the trigger line has traveled into the section
      const progress = (triggerY - sectionTop) / sectionHeight;
      const clampedProgress = Math.max(0, Math.min(1, progress));

      fill.style.height = `${clampedProgress * 100}%`;

      // Activate each step when the fill line reaches its circle
      const stepEls = section.querySelectorAll('.timeline-step');
      stepEls.forEach((stepEl) => {
        const stepRect = stepEl.getBoundingClientRect();
        const circleCenter = stepRect.top + 20; // approximate center of circle
        if (circleCenter < triggerY) {
          stepEl.classList.add('timeline-step--active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="design-timeline" ref={sectionRef}>
      {/* The vertical track line */}
      <div className="timeline-track">
        <div className="timeline-track-fill" ref={fillRef} />
      </div>

      {steps.map((step) => (
        <div key={step.number} className="timeline-step">
          <div className="timeline-circle">
            <span className="timeline-circle-number">{step.number}</span>
          </div>
          <div className="timeline-content">
            <h3 className="timeline-step-title">{step.title}</h3>
            <p className="timeline-step-desc">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
