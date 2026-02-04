/**
 * ============================================================================
 * VALUE PROPOSITIONS COMPONENT
 * ============================================================================
 *
 * Displays 3-5 value proposition bullet points with inline icons.
 *
 * @component ValuePropositions
 */

import { valuePropositions, type ValueProposition } from '@/data/service-data';

/**
 * Simple inline icon component
 */
function PropIcon({ icon }: { icon: ValueProposition['icon'] }): JSX.Element {
  const icons: Record<ValueProposition['icon'], JSX.Element> = {
    compass: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <polygon points="16.24,7.76 14.12,14.12 7.76,16.24 9.88,9.88" />
      </svg>
    ),
    palette: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
        <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
        <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
        <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.555C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
    crown: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2 17l3-7 5 5 2-8 2 8 5-5 3 7" />
        <path d="M2 17h20v4H2z" />
      </svg>
    ),
    handshake: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 8.5l-3.5-3.5-6 6 7 7 3.5-3.5" />
        <path d="M12 8.5l3.5-3.5 6 6-7 7-3.5-3.5" />
        <path d="M9 12l3 3" />
        <path d="M12 9l3 3" />
      </svg>
    ),
    check: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="M22 4L12 14.01l-3-3" />
      </svg>
    ),
  };

  return icons[icon];
}

/**
 * ValuePropositions - Key benefits display
 */
export function ValuePropositions(): JSX.Element {
  return (
    <section className="value-propositions" aria-labelledby="vp-heading">
      <div className="value-propositions__container">
        <h2 id="vp-heading" className="value-propositions__heading">
          Dlaczego LuxArte?
        </h2>

        <ul className="value-propositions__list" role="list">
          {valuePropositions.map((vp) => (
            <li key={vp.id} className="value-propositions__item" role="listitem">
              <div className="value-propositions__icon">
                <PropIcon icon={vp.icon} />
              </div>
              <div className="value-propositions__content">
                <h3 className="value-propositions__title">{vp.title}</h3>
                <p className="value-propositions__description">{vp.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ValuePropositions;
