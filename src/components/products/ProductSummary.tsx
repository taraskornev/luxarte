/**
 * ============================================================================
 * PRODUCT SUMMARY COMPONENT
 * ============================================================================
 *
 * Displays product description, features, and materials.
 * Conditionally renders sections only if data exists.
 *
 * @version 1.0.0
 */

import type { Product } from '@/data/products-data';

interface ProductSummaryProps {
  readonly product: Product;
}

export default function ProductSummary({ product }: ProductSummaryProps) {
  const hasFeatures = product.features && product.features.length > 0;
  const hasMaterials = product.materials && product.materials.length > 0;
  const hasDimensions = product.dimensions && product.dimensions.length > 0;

  return (
    <section className="product-summary" aria-labelledby="product-summary-heading">
      <h2 id="product-summary-heading" className="product-summary__heading">
        O produkcie
      </h2>

      {/* Description */}
      <div className="product-summary__description">
        <p>{product.shortDescription}</p>
      </div>

      {/* Dimensions */}
      {hasDimensions && (
        <div className="product-summary__dimensions">
          <h3 className="product-summary__subheading">Wymiary</h3>
          <p className="product-summary__dimension-value">{product.dimensions}</p>
        </div>
      )}

      {/* Features List */}
      {hasFeatures && (
        <div className="product-summary__features">
          <h3 className="product-summary__subheading">Cechy szczególne</h3>
          <ul className="product-summary__list">
            {product.features!.map((feature, index) => (
              <li key={index} className="product-summary__list-item">
                <svg
                  className="product-summary__check-icon"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Materials */}
      {hasMaterials && (
        <div className="product-summary__materials">
          <h3 className="product-summary__subheading">Materiały</h3>
          <ul className="product-summary__materials-list">
            {product.materials!.map((material, index) => (
              <li key={index} className="product-summary__material-item">
                {material}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
