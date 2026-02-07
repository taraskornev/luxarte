'use client';

/**
 * ============================================================================
 * GALLERY FILTER URL SYNCHRONIZATION HOOK
 * ============================================================================
 *
 * Bidirectional sync between filter state and URL query parameters.
 *
 * URL Format:
 * /gallery?brand=versace&brand=bentley&category=sofy&type=corner
 *
 * Features:
 * - Multi-value params allowed
 * - Order independent
 * - Parse on page load
 * - Update URL on change (shallow push)
 * - No full reload
 * - Back/forward buttons restore state
 *
 * @version 1.0.0
 */

import { useCallback, useEffect, useRef, useMemo } from 'react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import {
  GalleryFilterState,
  GallerySidebarMode,
  EMPTY_FILTER_STATE,
  FILTER_PARAM_NAMES,
  areFiltersEqual,
} from './filter-state';

// ============================================================================
// Types
// ============================================================================

export interface UseGalleryFilterUrlSyncResult {
  /** Current filter state from URL */
  filterState: GalleryFilterState;
  /** Update URL with new filter state */
  setFilterState: (state: GalleryFilterState) => void;
  /** Toggle a single brand selection */
  toggleBrand: (slug: string) => void;
  /** Toggle a single category selection */
  toggleCategory: (slug: string) => void;
  /** Toggle a single type selection */
  toggleType: (slug: string) => void;
  /** Set sidebar mode (brands vs categories) */
  setMode: (mode: GallerySidebarMode) => void;
  /** Clear all brand filters */
  clearBrands: () => void;
  /** Clear all category filters */
  clearCategories: () => void;
  /** Clear all type filters */
  clearTypes: () => void;
  /** Clear all filters */
  clearAll: () => void;
}

// ============================================================================
// URL Parsing
// ============================================================================

/**
 * Parse filter state from URL search params
 * Note: type param is ignored (not exposed in UI)
 */
function parseFilterStateFromUrl(
  searchParams: URLSearchParams
): GalleryFilterState {
  const brands = searchParams.getAll(FILTER_PARAM_NAMES.brand);
  const categories = searchParams.getAll(FILTER_PARAM_NAMES.category);
  const modeParam = searchParams.get(FILTER_PARAM_NAMES.mode);
  // Validate mode param - default to 'categories' if invalid
  const mode: GallerySidebarMode = 
    modeParam === 'brands' || modeParam === 'categories' 
      ? modeParam 
      : 'categories';

  return {
    brands: brands.filter(Boolean),
    categories: categories.filter(Boolean),
    types: [], // Always empty - type filter removed from UI
    mode,
  };
}

/**
 * Build URL search params from filter state
 * Note: types are not written to URL (not exposed in UI)
 */
function buildUrlFromFilterState(state: GalleryFilterState): URLSearchParams {
  const params = new URLSearchParams();

  // Always write mode first for cleaner URLs
  if (state.mode && state.mode !== 'categories') {
    params.set(FILTER_PARAM_NAMES.mode, state.mode);
  }

  state.brands.forEach((slug) => {
    params.append(FILTER_PARAM_NAMES.brand, slug);
  });

  state.categories.forEach((slug) => {
    params.append(FILTER_PARAM_NAMES.category, slug);
  });

  // Types not written to URL - filter removed from UI

  return params;
}

// ============================================================================
// Toggle Utility
// ============================================================================

function toggleInArray(arr: readonly string[], item: string): string[] {
  const index = arr.indexOf(item);
  if (index === -1) {
    return [...arr, item];
  }
  return arr.filter((_, i) => i !== index);
}

// ============================================================================
// Hook
// ============================================================================

/**
 * Hook for bidirectional URL <-> filter state synchronization
 */
export function useGalleryFilterUrlSync(): UseGalleryFilterUrlSyncResult {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  
  // Track if we're updating URL programmatically to avoid loops
  const isUpdatingRef = useRef(false);

  // Parse current filter state from URL
  const filterState = useMemo(
    () => parseFilterStateFromUrl(searchParams),
    [searchParams]
  );

  // Update URL with new filter state
  const setFilterState = useCallback(
    (newState: GalleryFilterState) => {
      // Skip if state hasn't changed
      if (areFiltersEqual(newState, filterState)) {
        return;
      }

      isUpdatingRef.current = true;

      const params = buildUrlFromFilterState(newState);
      const queryString = params.toString();
      const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

      // Shallow push - no full page reload
      router.push(newUrl, { scroll: false });

      // Reset flag after navigation
      requestAnimationFrame(() => {
        isUpdatingRef.current = false;
      });
    },
    [router, pathname, filterState]
  );

  // Toggle brand
  const toggleBrand = useCallback(
    (slug: string) => {
      setFilterState({
        ...filterState,
        brands: toggleInArray(filterState.brands, slug),
      });
    },
    [filterState, setFilterState]
  );

  // Toggle category
  const toggleCategory = useCallback(
    (slug: string) => {
      setFilterState({
        ...filterState,
        categories: toggleInArray(filterState.categories, slug),
      });
    },
    [filterState, setFilterState]
  );

  // Toggle type
  const toggleType = useCallback(
    (slug: string) => {
      setFilterState({
        ...filterState,
        types: toggleInArray(filterState.types, slug),
      });
    },
    [filterState, setFilterState]
  );

  // Set sidebar mode
  const setMode = useCallback(
    (mode: GallerySidebarMode) => {
      if (mode !== filterState.mode) {
        setFilterState({
          ...filterState,
          mode,
        });
      }
    },
    [filterState, setFilterState]
  );

  // Clear brands
  const clearBrands = useCallback(() => {
    setFilterState({
      ...filterState,
      brands: [],
    });
  }, [filterState, setFilterState]);

  // Clear categories
  const clearCategories = useCallback(() => {
    setFilterState({
      ...filterState,
      categories: [],
    });
  }, [filterState, setFilterState]);

  // Clear types
  const clearTypes = useCallback(() => {
    setFilterState({
      ...filterState,
      types: [],
    });
  }, [filterState, setFilterState]);

  // Clear all (preserve mode)
  const clearAll = useCallback(() => {
    setFilterState({
      ...EMPTY_FILTER_STATE,
      mode: filterState.mode,
    });
  }, [filterState.mode, setFilterState]);

  return {
    filterState,
    setFilterState,
    toggleBrand,
    toggleCategory,
    toggleType,
    setMode,
    clearBrands,
    clearCategories,
    clearTypes,
    clearAll,
  };
}

export default useGalleryFilterUrlSync;
