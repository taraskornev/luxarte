'use client';

import { useState } from 'react';
import { LegacyBrand } from '@/canonical/legacyBrands';
import { LegacyCategory } from '@/canonical/legacyCategories';

interface GallerySidebarProps {
  brands: LegacyBrand[];
  categories: LegacyCategory[];
  selectedBrands: string[];
  selectedCategories: string[];
  brandCounts: Map<string, number>;
  categoryCounts: Map<string, number>;
  onBrandToggle: (brandSlug: string) => void;
  onCategoryToggle: (categorySlug: string) => void;
  onClearFilters: () => void;
  hasFilters: boolean;
}

/**
 * Gallery Sidebar Filter Panel
 * 
 * Data sources (canonical only):
 * - brands: LEGACY_BRANDS from /src/canonical/legacyBrands.ts
 * - categories: LEGACY_CATEGORIES from /src/canonical/legacyCategories.ts
 * 
 * Filter groups:
 * 1. Brands (checkbox multi-select)
 * 2. Categories (checkbox multi-select)
 * 
 * Labels come from canonical sources - no hardcoding.
 */
export function GallerySidebar({
  brands,
  categories,
  selectedBrands,
  selectedCategories,
  brandCounts,
  categoryCounts,
  onBrandToggle,
  onCategoryToggle,
  onClearFilters,
  hasFilters,
}: GallerySidebarProps) {
  const [brandsExpanded, setBrandsExpanded] = useState(true);
  const [categoriesExpanded, setCategoriesExpanded] = useState(true);

  return (
    <div className="sidebar-filters">
      {/* Clear All */}
      {hasFilters && (
        <button
          type="button"
          className="sidebar-clear-all"
          onClick={onClearFilters}
        >
          Wyczyść wszystkie filtry
        </button>
      )}

      {/* Brands Section */}
      <div className="filter-group">
        <button
          type="button"
          className={`filter-group-header ${brandsExpanded ? 'expanded' : ''}`}
          onClick={() => setBrandsExpanded(!brandsExpanded)}
        >
          <span>Marki{selectedBrands.length > 0 && ` (${selectedBrands.length})`}</span>
          <span className="filter-group-toggle">{brandsExpanded ? '−' : '+'}</span>
        </button>
        {brandsExpanded && (
          <ul className="filter-group-list">
            {brands.map((brand) => {
              const count = brandCounts.get(brand.slug) || 0;
              const isSelected = selectedBrands.includes(brand.slug);
              return (
                <li key={brand.slug}>
                  <label className={`filter-checkbox ${count === 0 && !isSelected ? 'disabled' : ''}`}>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => onBrandToggle(brand.slug)}
                      disabled={count === 0 && !isSelected}
                    />
                    <span className="filter-checkbox-box" />
                    <span className="filter-item-name">{brand.label}</span>
                    <span className="filter-count">({count})</span>
                  </label>
                </li>
              );
            })}
          </ul>
        )}
      </div>

      {/* Categories Section */}
      <div className="filter-group">
        <button
          type="button"
          className={`filter-group-header ${categoriesExpanded ? 'expanded' : ''}`}
          onClick={() => setCategoriesExpanded(!categoriesExpanded)}
        >
          <span>Kategorie{selectedCategories.length > 0 && ` (${selectedCategories.length})`}</span>
          <span className="filter-group-toggle">{categoriesExpanded ? '−' : '+'}</span>
        </button>
        {categoriesExpanded && (
          <ul className="filter-group-list">
            {categories.map((category) => {
              const count = categoryCounts.get(category.slug) || 0;
              const isSelected = selectedCategories.includes(category.slug);
              return (
                <li key={category.slug}>
                  <label className={`filter-checkbox ${count === 0 && !isSelected ? 'disabled' : ''}`}>
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={() => onCategoryToggle(category.slug)}
                      disabled={count === 0 && !isSelected}
                    />
                    <span className="filter-checkbox-box" />
                    <span className="filter-item-name">{category.label}</span>
                    <span className="filter-count">({count})</span>
                  </label>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
