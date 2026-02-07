'use client';

import { Brand } from '@/lib/brands';
import { Category } from '@/lib/categories';

// Local type for this legacy component (not used in current implementation)
type LegacyFilterMode = 'brand' | 'category';

interface GalleryFilterProps {
  brands: Brand[];
  categories: Category[];
  mode: LegacyFilterMode;
  selectedBrands: string[];
  selectedCategory: string | null;
  onModeChange: (mode: LegacyFilterMode) => void;
  onBrandToggle: (brandSlug: string) => void;
  onCategorySelect: (categorySlug: string | null) => void;
}

export function GalleryFilter({
  brands,
  categories,
  mode,
  selectedBrands,
  selectedCategory,
  onModeChange,
  onBrandToggle,
  onCategorySelect,
}: GalleryFilterProps) {
  return (
    <div className="gallery-filter">
      {/* Mode Tabs */}
      <div className="filter-mode-tabs">
        <button
          type="button"
          className={`mode-tab ${mode === 'brand' ? 'active' : ''}`}
          onClick={() => onModeChange('brand')}
        >
          Marki ({brands.length})
        </button>
        <button
          type="button"
          className={`mode-tab ${mode === 'category' ? 'active' : ''}`}
          onClick={() => onModeChange('category')}
        >
          Kategorie ({categories.length})
        </button>
      </div>

      {/* Brand Filter (checkbox multi-select) */}
      {mode === 'brand' && (
        <div className="filter-section">
          <h3>Filtruj po marce</h3>
          {selectedBrands.length > 0 && (
            <button
              type="button"
              className="filter-clear"
              onClick={() => onModeChange('brand')}
            >
              Wyczyść filtry
            </button>
          )}
          <ul className="filter-list filter-list-brands">
            {brands.map((brand) => (
              <li key={brand.slug}>
                <label className="filter-checkbox">
                  <input
                    type="checkbox"
                    checked={selectedBrands.includes(brand.slug)}
                    onChange={() => onBrandToggle(brand.slug)}
                  />
                  <span>{brand.name}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Category Filter (single-select) */}
      {mode === 'category' && (
        <div className="filter-section">
          <h3>Filtruj po kategorii</h3>
          {selectedCategory && (
            <button
              type="button"
              className="filter-clear"
              onClick={() => onCategorySelect(null)}
            >
              Wyczyść filtr
            </button>
          )}
          <ul className="filter-list filter-list-categories">
            {categories.map((category) => (
              <li key={category.slug}>
                <button
                  type="button"
                  className={`filter-category-btn ${selectedCategory === category.slug ? 'active' : ''}`}
                  onClick={() => onCategorySelect(category.slug)}
                >
                  {category.name}
                  <span className="category-count">({category.productCount})</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
