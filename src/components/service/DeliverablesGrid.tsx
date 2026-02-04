/**
 * ============================================================================
 * DELIVERABLES GRID COMPONENT
 * ============================================================================
 *
 * Displays what client receives in card grid format.
 *
 * @component DeliverablesGrid
 */

import { deliverables } from '@/data/service-data';

/**
 * DeliverablesGrid - Client deliverables display
 */
export function DeliverablesGrid(): JSX.Element {
  return (
    <section className="deliverables-grid" aria-labelledby="deliverables-heading">
      <div className="deliverables-grid__container">
        <h2 id="deliverables-heading" className="deliverables-grid__heading">
          Co otrzymujesz?
        </h2>
        <p className="deliverables-grid__intro">
          Kompletna dokumentacja i wsparcie na każdym etapie realizacji projektu.
        </p>

        <div
          className="deliverables-grid__grid"
          role="list"
          aria-label="Lista produktów projektowych"
        >
          {deliverables.map((deliverable) => (
            <article
              key={deliverable.id}
              className="deliverables-grid__card"
              role="listitem"
            >
              <h3 className="deliverables-grid__card-title">{deliverable.title}</h3>
              <p className="deliverables-grid__card-description">
                {deliverable.description}
              </p>
              <ul className="deliverables-grid__card-items">
                {deliverable.items.map((item, index) => (
                  <li key={index} className="deliverables-grid__card-item">
                    <span className="deliverables-grid__check" aria-hidden="true">
                      ✓
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DeliverablesGrid;
