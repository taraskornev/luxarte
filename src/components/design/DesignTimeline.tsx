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

const TRIGGER = 0.55;

export function DesignTimeline({ steps }: DesignTimelineProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState<Set<number>>(new Set());

  const recalc = useCallback(() => {
    if (!containerRef.current || !itemRefs.current.length) return;
    const trigger = window.innerHeight * TRIGGER;
    const next = new Set<number>();
    itemRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.top + r.height / 2 <= trigger) next.add(i);
    });
    setActive(next);
  }, []);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setActive(new Set(steps.map((_, i) => i)));
      return;
    }
    window.addEventListener('scroll', recalc, { passive: true });
    window.addEventListener('resize', recalc, { passive: true });
    const id = setTimeout(recalc, 50);
    return () => {
      window.removeEventListener('scroll', recalc);
      window.removeEventListener('resize', recalc);
      clearTimeout(id);
    };
  }, [recalc, steps]);

  return (
    <div ref={containerRef} className="dtl">
      <div className="dtl-items">
        {steps.map((step, i) => {
          const on = active.has(i);
          const even = i % 2 === 0;
          return (
            <div
              key={step.number}
              ref={el => { itemRefs.current[i] = el; }}
              className={`dtl-row${even ? ' dtl-row--even' : ''}`}
            >
              <div className={`dtl-content${even ? ' dtl-content--even' : ''}`}
                style={{ opacity: on ? 1 : 0.3 }}
              >
                <div className="dtl-num">{step.number}.</div>
                <h3 className="dtl-title">{step.title}</h3>
                <p className="dtl-desc">{step.description}</p>
              </div>
              <div className="dtl-spacer" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
