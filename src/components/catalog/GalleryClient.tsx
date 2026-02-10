'use client';

import { useRouter, usePathname  } from 'next/navigation';
import { useCallback, useMemo, useState, useEffect, useRef } from 'react';
import { Product } from '@/lib/products';
import { LegacyBrand } from '@/canonical/legacyBrands';
import { LegacyCategory } from '@/canonical/legacyCategories';
import { ProductGrid } from '@/components/catalog/ProductGrid';
import { GallerySidebar } from '@/components/catalog/GallerySidebar';
import { getDictionary, type Locale } from '@/i18n';
import Link from 'next/link';

// Items per page for pagination
const ITEMS_PER_PAGE = 24;

interface GalleryClientProps {
  products: Product[];
  brands: LegacyBrand[];
  categories: LegacyCategory[];
  initialBrands: string[];
  initialCategories: string[];
  locale?: Locale;
}

/**
 * Gallery Filter Logic:
 * 
 * URL Format:
 * ?brand=slug1,slug2           → multi-brand (OR within)
 * ?category=slug1,slug2        → multi-category (OR within)
 * ?brand=X&category=Y          → AND between groups
 * 
 * Filter Logic:
 * - OR within same group (any brand selected, any category selected)
 * - AND between groups (must match brand AND category)
 */
export function GalleryClient({ 
  products, 
  brands, 
  categories,
  initialBrands,
  initialCategories,
  locale = 'pl',
}: GalleryClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const t = getDictionary(locale);
  
  // Multi-select filter state (arrays)
  const [selectedBrands, setSelectedBrands] = useState<string[]>(initialBrands);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialCategories);
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  
  // Mobile drawer section expand/collapse state
  const [mobileBrandsExpanded, setMobileBrandsExpanded] = useState(true);
  const [mobileCategoriesExpanded, setMobileCategoriesExpanded] = useState(true);
  
  // Refs for drag handling
  const drawerRef = useRef<HTMLDivElement>(null);
  const tabRef = useRef<HTMLButtonElement>(null);
  const dragStartX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  // Sync URL when filter state changes
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedBrands.length > 0) {
      params.set('brand', selectedBrands.join(','));
    }
    if (selectedCategories.length > 0) {
      params.set('category', selectedCategories.join(','));
    }
    
    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;
    
    // Use replaceState for URL sync without navigation
    window.history.replaceState(null, '', newUrl);
  }, [selectedBrands, selectedCategories, pathname]);

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const brandParam = params.get('brand');
      const categoryParam = params.get('category');
      
      setSelectedBrands(brandParam ? brandParam.split(',').filter(Boolean) : []);
      setSelectedCategories(categoryParam ? categoryParam.split(',').filter(Boolean) : []);
      setCurrentPage(1);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Filter pipeline with AND/OR logic
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // 1. Filter by brands (OR within group)
    if (selectedBrands.length > 0) {
      result = result.filter((p) => selectedBrands.includes(p.brandSlug));
    }

    // 2. Filter by categories (OR within group)
    // AND with brand filter if both are active
    if (selectedCategories.length > 0) {
      result = result.filter((p) => selectedCategories.includes(p.categorySlug));
    }

    return result;
  }, [products, selectedBrands, selectedCategories]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedBrands, selectedCategories]);

  // Brand counts - based on category filter only
  const brandCounts = useMemo(() => {
    const counts = new Map<string, number>();
    let base = [...products];
    if (selectedCategories.length > 0) {
      base = base.filter((p) => selectedCategories.includes(p.categorySlug));
    }
    base.forEach((p) => {
      counts.set(p.brandSlug, (counts.get(p.brandSlug) || 0) + 1);
    });
    return counts;
  }, [products, selectedCategories]);

  // Category counts - based on brand filter only
  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>();
    let base = [...products];
    if (selectedBrands.length > 0) {
      base = base.filter((p) => selectedBrands.includes(p.brandSlug));
    }
    base.forEach((p) => {
      counts.set(p.categorySlug, (counts.get(p.categorySlug) || 0) + 1);
    });
    return counts;
  }, [products, selectedBrands]);

  // Toggle brand selection (multi-select)
  const handleBrandToggle = useCallback((brandSlug: string) => {
    setSelectedBrands((prev) => {
      if (prev.includes(brandSlug)) {
        return prev.filter((s) => s !== brandSlug);
      }
      return [...prev, brandSlug];
    });
  }, []);

  // Toggle category selection (multi-select)
  const handleCategoryToggle = useCallback((categorySlug: string) => {
    setSelectedCategories((prev) => {
      if (prev.includes(categorySlug)) {
        return prev.filter((s) => s !== categorySlug);
      }
      return [...prev, categorySlug];
    });
  }, []);

  // Clear all filters
  const handleClearFilters = useCallback(() => {
    setSelectedBrands([]);
    setSelectedCategories([]);
    setCurrentPage(1);
    router.push('/gallery');
  }, [router]);

  // Page change
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Mobile filter drawer - toggle
  const toggleMobileFilter = useCallback(() => {
    setMobileFilterOpen(prev => {
      document.body.style.overflow = !prev ? 'hidden' : '';
      return !prev;
    });
  }, []);

  const closeMobileFilter = useCallback(() => {
    setMobileFilterOpen(false);
    document.body.style.overflow = '';
  }, []);

  // Drag handling for edge tab
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
    isDragging.current = false;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    const deltaX = e.touches[0].clientX - dragStartX.current;
    // If dragging right (closing) more than 50px, mark as dragging
    if (mobileFilterOpen && deltaX > 30) {
      isDragging.current = true;
    }
    // If dragging left (opening) more than 30px, mark as dragging
    if (!mobileFilterOpen && deltaX < -30) {
      isDragging.current = true;
    }
  }, [mobileFilterOpen]);

  const handleTouchEnd = useCallback(() => {
    if (isDragging.current) {
      toggleMobileFilter();
    }
    isDragging.current = false;
  }, [toggleMobileFilter]);

  // Cleanup scroll lock on unmount
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  // Stats
  const totalCount = products.length;
  const filteredCount = filteredProducts.length;
  const hasFilters = selectedBrands.length > 0 || selectedCategories.length > 0;
  const filterCount = selectedBrands.length + selectedCategories.length;

  return (
    <div className="gallery-layout">
      {/* Desktop Sidebar */}
      <aside className="gallery-sidebar">
        <GallerySidebar
          brands={brands}
          categories={categories}
          selectedBrands={selectedBrands}
          selectedCategories={selectedCategories}
          brandCounts={brandCounts}
          categoryCounts={categoryCounts}
          onBrandToggle={handleBrandToggle}
          onCategoryToggle={handleCategoryToggle}
          onClearFilters={handleClearFilters}
          hasFilters={hasFilters}
          locale={locale}
        />
      </aside>

      {/* Main Content */}
      <main className="gallery-main">
        {/* Results Header - count only, no clear button (clear is in sidebar) */}
        <div className="gallery-results-header">
          <span className="gallery-count">
            {hasFilters
              ? `${filteredCount} ${t.common.productsOf} ${totalCount} ${t.common.products}`
              : `${totalCount} ${t.common.products}`}
          </span>
        </div>

        {/* Product Grid or Empty State */}
        {paginatedProducts.length > 0 ? (
          <>
            <ProductGrid products={paginatedProducts} locale={locale} />
            {/* Pagination */}
            {totalPages > 1 && (
              <nav className="gallery-pagination" aria-label={t.common.pagination}>
                <button
                  type="button"
                  className="pagination-arrow"
                  disabled={currentPage <= 1}
                  onClick={() => handlePageChange(1)}
                  aria-label={t.common.firstPage}
                >
                  «
                </button>
                <button
                  type="button"
                  className="pagination-arrow"
                  disabled={currentPage <= 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                  aria-label={t.common.prevPage}
                >
                  ‹
                </button>
                <span className="pagination-info">
                  {currentPage} / {totalPages}
                </span>
                <button
                  type="button"
                  className="pagination-arrow"
                  disabled={currentPage >= totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                  aria-label={t.common.nextPage}
                >
                  ›
                </button>
                <button
                  type="button"
                  className="pagination-arrow"
                  disabled={currentPage >= totalPages}
                  onClick={() => handlePageChange(totalPages)}
                  aria-label={t.common.lastPage}
                >
                  »
                </button>
              </nav>
            )}
          </>
        ) : (
          <div className="gallery-empty">
            <div className="gallery-empty-icon">🔍</div>
            <h2 className="gallery-empty-title">{t.common.noProducts}</h2>
            <p className="gallery-empty-message">
              {t.common.noProductsMessage}
            </p>
            <div className="gallery-empty-actions">
              <button
                type="button"
                className="gallery-empty-btn"
                onClick={handleClearFilters}
              >
                {t.common.clearFilters}
              </button>
              <Link href={locale === 'en' ? '/en/gallery' : '/gallery'} className="gallery-empty-link">
                {t.common.seeAllProducts}
              </Link>
            </div>
          </div>
        )}
      </main>

      {/* Mobile Filter Edge Tab Handle */}
      <button
        ref={tabRef}
        type="button"
        className={`filter-edge-tab ${mobileFilterOpen ? 'drawer-open' : ''}`}
        onClick={toggleMobileFilter}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        aria-label={t.common.openFilters}
      >
        {t.common.filters}
      </button>

      {/* Mobile Filter Overlay - closes drawer on tap */}
      {mobileFilterOpen && (
        <div className="mobile-filter-overlay" onClick={closeMobileFilter} />
      )}

      {/* Mobile Filter Drawer - Brands + Categories with collapsible sections */}
      <div 
        ref={drawerRef}
        className={`mobile-filter-drawer ${mobileFilterOpen ? 'open' : ''}`}
      >
        <div className="mobile-filter-content">
          {/* Brands Section */}
          <div className={`mobile-filter-section ${mobileBrandsExpanded ? 'expanded' : 'collapsed'}`}>
            <button
              type="button"
              className="mobile-filter-section-header"
              onClick={() => setMobileBrandsExpanded(!mobileBrandsExpanded)}
            >
              <span>{t.common.brands} {selectedBrands.length > 0 && `(${selectedBrands.length})`}</span>
              <span className="mobile-filter-section-toggle">{mobileBrandsExpanded ? '−' : '+'}</span>
            </button>
            <div className="mobile-filter-section-content">
              <ul className="mobile-filter-section-list">
                {brands.map((brand) => {
                  const count = brandCounts.get(brand.slug) || 0;
                  const isSelected = selectedBrands.includes(brand.slug);
                  return (
                    <li key={brand.slug}>
                      <label className={`filter-checkbox ${count === 0 && !isSelected ? 'disabled' : ''}`}>
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleBrandToggle(brand.slug)}
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

          {/* Categories Section */}
          <div className={`mobile-filter-section ${mobileCategoriesExpanded ? 'expanded' : 'collapsed'}`}>
            <button
              type="button"
              className="mobile-filter-section-header"
              onClick={() => setMobileCategoriesExpanded(!mobileCategoriesExpanded)}
            >
              <span>{t.common.categories} {selectedCategories.length > 0 && `(${selectedCategories.length})`}</span>
              <span className="mobile-filter-section-toggle">{mobileCategoriesExpanded ? '−' : '+'}</span>
            </button>
            <div className="mobile-filter-section-content">
              <ul className="mobile-filter-section-list">
                {categories.map((category) => {
                  const count = categoryCounts.get(category.slug) || 0;
                  const isSelected = selectedCategories.includes(category.slug);
                  return (
                    <li key={category.slug}>
                      <label className={`filter-checkbox ${count === 0 && !isSelected ? 'disabled' : ''}`}>
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleCategoryToggle(category.slug)}
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
            </div>
          </div>
        </div>
        
        {/* Clear filters button - sticky at bottom */}
        {hasFilters && (
          <div className="mobile-filter-footer">
            <button
              type="button"
              className="sidebar-clear-all"
              onClick={handleClearFilters}
            >
              {t.common.clearAllFilters}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
