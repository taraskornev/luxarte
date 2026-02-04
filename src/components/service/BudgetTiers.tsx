/**
 * ============================================================================
 * BUDGET TIERS COMPONENT
 * ============================================================================
 *
 * Displays project type/budget tiers.
 *
 * @component BudgetTiers
 */

import { budgetTiers } from '@/data/service-data';

/**
 * BudgetTiers - Project types and budget ranges
 */
export function BudgetTiers(): JSX.Element {
  return (
    <section className="budget-tiers" aria-labelledby="budget-heading">
      <div className="budget-tiers__container">
        <h2 id="budget-heading" className="budget-tiers__heading">
          Typy projektów
        </h2>
        <p className="budget-tiers__intro">
          Dostosowujemy zakres usług do skali i charakteru inwestycji.
        </p>

        <div
          className="budget-tiers__grid"
          role="list"
          aria-label="Poziomy projektów"
        >
          {budgetTiers.map((tier) => (
            <article key={tier.id} className="budget-tiers__card" role="listitem">
              <h3 className="budget-tiers__card-name">{tier.name}</h3>
              <p className="budget-tiers__card-description">{tier.description}</p>
              <div className="budget-tiers__card-examples">
                {tier.examples.map((example, index) => (
                  <span key={index} className="budget-tiers__example-tag">
                    {example}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BudgetTiers;
