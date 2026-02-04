/**
 * ============================================================================
 * PROCESS TIMELINE COMPONENT
 * ============================================================================
 *
 * Displays 6-step process timeline.
 * Vertical on mobile, horizontal on desktop.
 *
 * @component ProcessTimeline
 */

import { processSteps } from '@/data/service-data';

/**
 * ProcessTimeline - Collaboration process visualization
 */
export function ProcessTimeline(): JSX.Element {
  return (
    <section className="process-timeline" aria-labelledby="process-heading">
      <div className="process-timeline__container">
        <h2 id="process-heading" className="process-timeline__heading">
          Etapy współpracy
        </h2>
        <p className="process-timeline__intro">
          Nasz sprawdzony proces gwarantuje realizację projektu na najwyższym poziomie.
        </p>

        <ol className="process-timeline__steps" role="list">
          {processSteps.map((step, index) => (
            <li
              key={step.id}
              className="process-timeline__step"
              role="listitem"
              aria-label={`Krok ${step.number}: ${step.title}`}
            >
              <div className="process-timeline__step-marker">
                <span className="process-timeline__step-number">{step.number}</span>
              </div>
              <div className="process-timeline__step-content">
                <h3 className="process-timeline__step-title">{step.title}</h3>
                <p className="process-timeline__step-description">
                  {step.description}
                </p>
              </div>
              {/* Connector line (not on last item) */}
              {index < processSteps.length - 1 && (
                <div className="process-timeline__connector" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default ProcessTimeline;
