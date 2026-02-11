'use client';

import { useState } from 'react';
import { LegacyBrand } from '@/canonical/legacyBrands';
import { LegacyCategory } from '@/canonical/legacyCategories';
import { getDictionary, type Locale } from '@/i18n';

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
  locale?: Locale;
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
 * 
 * Accordion behavior matches mobile drawer:
 * - Both expanded: 50/50 height split
 * - One expanded: takes 100% available height
 * - Both collapsed: headers only
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
  locale = 'pl',
}: GallerySidebarProps) {
  const [brandsExpanded, setBrandsExpanded] = useState(true);
  const [categoriesExpanded, setCategoriesExpanded] = useState(true);
  const t = getDictionary(locale);

  return (
    <div className="sidebar-filters">
      {/* Brands Section - accordion behavior */}
      <div className={`filter-group ${brandsExpanded ? 'expanded' : 'collapsed'}`}>
        <button
          type="button"
          className="filter-group-header"
          onClick={() => setBrandsExpanded(!brandsExpanded)}
        >
          <span>{t.common.brands}{selectedBrands.length > 0 && ` (${selectedBrands.length})`}</span>
          <span className="filter-group-toggle">{brandsExpanded ? '−' : '+'}</span>
        </button>
        <div className="filter-group-content">
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
        </div>
      </div>

      {/* Categories Section - accordion behavior */}
      <div className={`filter-group ${categoriesExpanded ? 'expanded' : 'collapsed'}`}>
        <button
          type="button"
          className="filter-group-header"
          onClick={() => setCategoriesExpanded(!categoriesExpanded)}
        >
          <span>{t.common.categories}{selectedCategories.length > 0 && ` (${selectedCategories.length})`}</span>
          <span className="filter-group-toggle">{categoriesExpanded ? '−' : '+'}</span>
        </button>
        <div className="filter-group-content">
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
                    <span className="filter-item-name">{locale === 'en' ? category.labelEn : category.label}</span>
                    <span className="filter-count">({count})</span>
                  </label>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Clear All - always visible, disabled when no filters */}
      <div className="sidebar-clear-all-wrapper">
        <button
          type="button"
          className={`sidebar-clear-all${!hasFilters ? ' sidebar-clear-all--disabled' : ''}`}
          onClick={onClearFilters}
          disabled={!hasFilters}
        >
          {t.common.clearAllFilters}
        </button>
      </div>
    </div>
  );
}
