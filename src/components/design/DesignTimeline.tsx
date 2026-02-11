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
  const lineRef = useRef<HTMLDivElement>(null);
  const bulletRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState<Set<number>>(new Set());
  const [line, setLine] = useState({ top: 0, height: 0, fill: 0 });

  const recalc = useCallback(() => {
    if (!containerRef.current || !lineRef.current || !bulletRefs.current.length) return;

    const trigger = window.innerHeight * TRIGGER;
    const next = new Set<number>();

    bulletRefs.current.forEach((el, i) => {
      if (!el) return;
      const r = el.getBoundingClientRect();
      if (r.top + r.height / 2 <= trigger) next.add(i);
    });

    setActive(next);

    const first = bulletRefs.current[0];
    const last = bulletRefs.current[bulletRefs.current.length - 1];
    if (!first || !last) return;

    const base = lineRef.current.getBoundingClientRect().top;
    const y = (el: HTMLDivElement) => {
      const r = el.getBoundingClientRect();
      return r.top + r.height / 2 - base;
    };

    const firstY = y(first);
    const lastY = y(last);
    const maxIdx = Math.max(...Array.from(next), -1);
    const fillTarget = maxIdx >= 0 && bulletRefs.current[maxIdx]
      ? y(bulletRefs.current[maxIdx]!) - firstY
      : 0;

    setLine({ top: firstY, height: lastY - firstY, fill: Math.max(0, fillTarget) });
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
      <div ref={lineRef} className="dtl-line-wrap">
        <div className="dtl-line-bg" style={{ top: line.top, height: Math.max(0, line.height) }} />
        <div className="dtl-line-fill" style={{ top: line.top, height: line.fill }} />
      </div>

      <div className="dtl-items">
        {steps.map((step, i) => {
          const on = active.has(i);
          const even = i % 2 === 0;
          return (
            <div key={step.number} className={`dtl-row${even ? ' dtl-row--even' : ''}`}>
              {/* Empty dot on the line */}
              <div
                ref={el => { bulletRefs.current[i] = el; }}
                className="dtl-bullet-anchor"
                style={{ marginTop: '0.5rem' }}
              >
                <div className={`dtl-dot${on ? ' dtl-dot--active' : ''}`} />
              </div>

              {/* Content */}
              <div
                className={`dtl-content${even ? ' dtl-content--even' : ''}`}
                style={{ opacity: on ? 1 : 0.4 }}
              >
                {/* Pill: number → expands to show title on activation */}
                <div className="dtl-pill-wrap">
                  <div className={`dtl-pill${on ? ' dtl-pill--active' : ''}`}>
                    <span className="dtl-pill-num">{step.number}</span>
                    <span
                      className="dtl-pill-label"
                      style={{
                        opacity: on ? 1 : 0,
                        maxWidth: on ? '300px' : '0px',
                      }}
                    >
                      {step.title}
                    </span>
                  </div>
                </div>

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
