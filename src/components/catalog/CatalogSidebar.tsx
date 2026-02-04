/**
 * ============================================================================
 * CATALOG SIDEBAR COMPONENT
 * ============================================================================
 *
 * Sticky sidebar for filtering products in catalog views.
 * Supports brands, categories, and custom filters.
 *
 * @version 1.0.0
 */

'use client';

import React, { useState, useCallback } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

// ============================================================================
// Types
// ============================================================================

export interface FilterOption {
  value: string;
  label: string;
  count?: number;
}

export interface FilterSection {
  id: string;
  title: string;
  options: FilterOption[];
  type: 'checkbox' | 'radio';
}

interface CatalogSidebarProps {
  readonly sections: FilterSection[];
  readonly activeFilters: Record<string, string[]>;
  readonly onFilterChange?: (filterId: string, values: string[]) => void;
  readonly clearAllHref?: string;
}

// ============================================================================
// Component
// ============================================================================

export function CatalogSidebar({
  sections,
  activeFilters,
  onFilterChange,
  clearAllHref,
}: CatalogSidebarProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(sections.map((s) => s.id))
  );

  const toggleSection = useCallback((sectionId: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) {
        next.delete(sectionId);
      } else {
        next.add(sectionId);
      }
      return next;
    });
  }, []);

  const handleCheckboxChange = useCallback(
    (sectionId: string, value: string, checked: boolean) => {
      if (!onFilterChange) return;

      const currentValues = activeFilters[sectionId] || [];
      const newValues = checked
        ? [...currentValues, value]
        : currentValues.filter((v) => v !== value);

      onFilterChange(sectionId, newValues);
    },
    [activeFilters, onFilterChange]
  );

  const handleRadioChange = useCallback(
    (sectionId: string, value: string) => {
      if (!onFilterChange) return;
      onFilterChange(sectionId, [value]);
    },
    [onFilterChange]
  );

  const hasActiveFilters = Object.values(activeFilters).some(
    (values) => values.length > 0
  );

  return (
    <aside className="catalog-sidebar" aria-label="Filtry produktów">
      {/* Clear All */}
      {hasActiveFilters && clearAllHref && (
        <div className="catalog-sidebar__section">
          <Link
            href={clearAllHref}
            className="catalog-sidebar__clear"
          >
            Wyczyść filtry
          </Link>
        </div>
      )}

      {/* Filter Sections */}
      {sections.map((section) => {
        const isExpanded = expandedSections.has(section.id);
        const sectionValues = activeFilters[section.id] || [];

        return (
          <div key={section.id} className="catalog-sidebar__section">
            <button
              type="button"
              className="catalog-sidebar__title"
              aria-expanded={isExpanded}
              aria-controls={`filter-section-${section.id}`}
              onClick={() => toggleSection(section.id)}
            >
              {section.title}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {isExpanded && (
              <div
                id={`filter-section-${section.id}`}
                className="catalog-sidebar__options"
              >
                {section.options.map((option) => {
                  const isChecked = sectionValues.includes(option.value);
                  const inputId = `filter-${section.id}-${option.value}`;

                  return (
                    <div key={option.value} className="catalog-sidebar__option">
                      <input
                        type={section.type}
                        id={inputId}
                        name={section.id}
                        value={option.value}
                        checked={isChecked}
                        onChange={(e) => {
                          if (section.type === 'checkbox') {
                            handleCheckboxChange(
                              section.id,
                              option.value,
                              e.target.checked
                            );
                          } else {
                            handleRadioChange(section.id, option.value);
                          }
                        }}
                        className="catalog-sidebar__checkbox"
                      />
                      <label htmlFor={inputId} className="catalog-sidebar__label">
                        {option.label}
                      </label>
                      {option.count !== undefined && (
                        <span className="catalog-sidebar__count">
                          ({option.count})
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </aside>
  );
}

// ============================================================================
// Mobile Filter Drawer
// ============================================================================

interface MobileFilterDrawerProps extends CatalogSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileFilterDrawer({
  isOpen,
  onClose,
  ...sidebarProps
}: MobileFilterDrawerProps) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`mobile-drilldown__overlay ${isOpen ? 'mobile-drilldown__overlay--visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`mobile-drilldown ${isOpen ? 'mobile-drilldown--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Filtry produktów"
      >
        <div className="mobile-drilldown__header">
          <h2 className="mobile-drilldown__panel-title">Filtry</h2>
          <button
            type="button"
            className="mobile-drilldown__close"
            onClick={onClose}
            aria-label="Zamknij filtry"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <div className="mobile-drilldown__panels">
          <div className="mobile-drilldown__panel mobile-drilldown__panel--active">
            <CatalogSidebar {...sidebarProps} />
          </div>
        </div>

        <div className="mobile-drilldown__footer">
          <button
            type="button"
            className="mobile-drilldown__cta"
            onClick={onClose}
          >
            Zastosuj filtry
          </button>
        </div>
      </div>
    </>
  );
}
