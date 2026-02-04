/**
 * ============================================================================
 * CATEGORY CTA COMPONENT
 * ============================================================================
 *
 * Call-to-action block for category pages.
 * Encourages showroom visits and interior design consultations.
 *
 * @component CategoryCTA
 */

export interface CategoryCTAProps {
  readonly categoryName: string;
  readonly variant?: 'default' | 'compact';
}

/**
 * CategoryCTA - Call to action section
 */
export function CategoryCTA({
  categoryName,
  variant = 'default',
}: CategoryCTAProps): JSX.Element {
  return (
    <section
      className={`category-cta category-cta--${variant}`}
      aria-labelledby="cta-heading"
    >
      <div className="category-cta__container">
        <div className="category-cta__content">
          <h2 id="cta-heading" className="category-cta__heading">
            Zapraszamy do showroomu
          </h2>
          <p className="category-cta__text">
            Odkryj kolekcję {categoryName.toLowerCase()} na żywo w naszym showroomie
            w Warszawie. Nasi doradcy pomogą dobrać idealne rozwiązania do Twojego
            wnętrza.
          </p>
        </div>

        <div className="category-cta__actions">
          <a
            href="/showroom?intent=visit"
            className="category-cta__button category-cta__button--primary"
          >
            Umów wizytę
          </a>
          <a
            href="/interior-design"
            className="category-cta__button category-cta__button--secondary"
          >
            Projektowanie wnętrz
          </a>
        </div>

        <address className="category-cta__address">
          <p className="category-cta__address-line">
            <strong>Showroom LuxArte</strong>
          </p>
          <p className="category-cta__address-line">
            Plac Piłsudskiego 9, 00-078 Warszawa
          </p>
          <p className="category-cta__address-line">
            <a href="tel:+48224333883" className="category-cta__phone">
              +48 22 433 38 83
            </a>
          </p>
        </address>
      </div>
    </section>
  );
}

export default CategoryCTA;
