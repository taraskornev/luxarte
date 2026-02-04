'use client';

/**
 * ============================================================================
 * OUTLET FILTER COMPONENT
 * ============================================================================
 *
 * Client-side filter UI for outlet index page.
 * Filters by category, brand, availability, and condition.
 * Self-contained component that includes the outlet grid.
 *
 * @component OutletFilter
 */

import { useState, useMemo } from 'react';
import type { OutletItem, Availability, Condition } from '@/data/outlet-data';
import { availabilityLabels, conditionLabels } from '@/data/outlet-data';
import { categories } from '@/data/categories-data';
import { brands } from '@/data/brands-data';
import { OutletCard } from './OutletCard';

export interface OutletFilterProps {
  readonly items: readonly OutletItem[];
  readonly availableCategories: readonly string[];
  readonly availableBrands: readonly string[];
}

/**
 * Get category name by slug
 */
function getCategoryName(slug: string): string {
  const category = categories.find((c) => c.slug === slug);
  return category?.name ?? slug;
}

/**
 * Get brand name by slug
 */
function getBrandName(slug: string): string {
  const brand = brands.find((b) => b.slug === slug);
  return brand?.name ?? slug;
}

/**
 * OutletFilter - Client-side filtering for outlet items
 * Self-contained: includes both filter UI and outlet grid
 */
export function OutletFilter({
  items,
  availableCategories,
  availableBrands,
}: OutletFilterProps): JSX.Element {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeBrand, setActiveBrand] = useState<string | null>(null);
  const [activeAvailability, setActiveAvailability] =
    useState<Availability | null>(null);
  const [activeCondition, setActiveCondition] = useState<Condition | null>(
    null
  );

  const filteredItems = useMemo(() => {
    return items.filter((item) => {
      if (activeCategory && item.category !== activeCategory) {
        return false;
      }
      if (activeBrand && item.brand !== activeBrand) {
        return false;
      }
      if (activeAvailability && item.availability !== activeAvailability) {
        return false;
      }
      if (activeCondition && item.condition !== activeCondition) {
        return false;
      }
      return true;
    });
  }, [items, activeCategory, activeBrand, activeAvailability, activeCondition]);

  const clearFilters = () => {
    setActiveCategory(null);
    setActiveBrand(null);
    setActiveAvailability(null);
    setActiveCondition(null);
  };

  const hasActiveFilters =
    activeCategory || activeBrand || activeAvailability || activeCondition;

  return (
    <div className="outlet-filter">
      {/* Filter Controls */}
      <div className="outlet-filter__controls">
        {/* Category Filter */}
        <div className="outlet-filter__group">
          <label htmlFor="category-filter" className="outlet-filter__label">
            Kategoria
          </label>
          <select
            id="category-filter"
            className="outlet-filter__select"
            value={activeCategory ?? ''}
            onChange={(e) => setActiveCategory(e.target.value || null)}
          >
            <option value="">Wszystkie</option>
            {availableCategories.map((slug) => (
              <option key={slug} value={slug}>
                {getCategoryName(slug)}
              </option>
            ))}
          </select>
        </div>

        {/* Brand Filter */}
        <div className="outlet-filter__group">
          <label htmlFor="brand-filter" className="outlet-filter__label">
            Marka
          </label>
          <select
            id="brand-filter"
            className="outlet-filter__select"
            value={activeBrand ?? ''}
            onChange={(e) => setActiveBrand(e.target.value || null)}
          >
            <option value="">Wszystkie</option>
            {availableBrands.map((slug) => (
              <option key={slug} value={slug}>
                {getBrandName(slug)}
              </option>
            ))}
          </select>
        </div>

        {/* Availability Filter */}
        <div className="outlet-filter__group">
          <label htmlFor="availability-filter" className="outlet-filter__label">
            Dostępność
          </label>
          <select
            id="availability-filter"
            className="outlet-filter__select"
            value={activeAvailability ?? ''}
            onChange={(e) =>
              setActiveAvailability(
                (e.target.value as Availability) || null
              )
            }
          >
            <option value="">Wszystkie</option>
            {(Object.keys(availabilityLabels) as Availability[]).map(
              (availability) => (
                <option key={availability} value={availability}>
                  {availabilityLabels[availability]}
                </option>
              )
            )}
          </select>
        </div>

        {/* Condition Filter */}
        <div className="outlet-filter__group">
          <label htmlFor="condition-filter" className="outlet-filter__label">
            Stan
          </label>
          <select
            id="condition-filter"
            className="outlet-filter__select"
            value={activeCondition ?? ''}
            onChange={(e) =>
              setActiveCondition((e.target.value as Condition) || null)
            }
          >
            <option value="">Wszystkie</option>
            {(Object.keys(conditionLabels) as Condition[]).map((condition) => (
              <option key={condition} value={condition}>
                {conditionLabels[condition]}
              </option>
            ))}
          </select>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            type="button"
            className="outlet-filter__clear"
            onClick={clearFilters}
          >
            Wyczyść filtry
          </button>
        )}
      </div>

      {/* Results Count */}
      <div className="outlet-filter__results">
        <p className="outlet-filter__count">
          {filteredItems.length}{' '}
          {filteredItems.length === 1
            ? 'produkt'
            : filteredItems.length < 5
            ? 'produkty'
            : 'produktów'}
        </p>
      </div>

      {/* Outlet Grid */}
      <div className="outlet-index__grid">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <OutletCard key={item.id} item={item} />
          ))
        ) : (
          <div className="outlet-index__empty">
            <p>Brak produktów spełniających wybrane kryteria.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default OutletFilter;
