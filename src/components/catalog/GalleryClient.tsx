'use client';

import { useRouter, usePathname  } from 'next/navigation';
import { useCallback, useMemo, useState, useEffect } from 'react';
import { Product } from '@/lib/products';
import { LegacyBrand } from '@/canonical/legacyBrands';
import { LegacyCategory } from '@/canonical/legacyCategories';
import { ProductGrid } from '@/components/catalog/ProductGrid';
import { GallerySidebar } from '@/components/catalog/GallerySidebar';
import Link from 'next/link';

// Items per page for pagination
const ITEMS_PER_PAGE = 24;

interface GalleryClientProps {
  products: Product[];
  brands: LegacyBrand[];
  categories: LegacyCategory[];
  initialBrands: string[];
  initialCategories: string[];
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
}: GalleryClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  
  // Multi-select filter state (arrays)
  const [selectedBrands, setSelectedBrands] = useState<string[]>(initialBrands);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(initialCategories);
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

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

  // Mobile filter drawer
  const openMobileFilter = useCallback(() => {
    setMobileFilterOpen(true);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeMobileFilter = useCallback(() => {
    setMobileFilterOpen(false);
    document.body.style.overflow = '';
  }, []);

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
        />
      </aside>

      {/* Main Content */}
      <main className="gallery-main">
        {/* Mobile Filter Button */}
        <button
          type="button"
          className="mobile-filter-btn"
          onClick={openMobileFilter}
        >
          Filtry
          {hasFilters && <span className="filter-badge">{filterCount}</span>}
        </button>

        {/* Results Header */}
        <div className="gallery-results-header">
          <span className="gallery-count">
            {hasFilters
              ? `${filteredCount} z ${totalCount} produktów`
              : `${totalCount} produktów`}
          </span>
          {hasFilters && (
            <button
              type="button"
              className="clear-filters-btn"
              onClick={handleClearFilters}
            >
              Wyczyść filtry
            </button>
          )}
        </div>

        {/* Product Grid or Empty State */}
        {paginatedProducts.length > 0 ? (
          <>
            <ProductGrid products={paginatedProducts} />
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="gallery-pagination">
                <button
                  type="button"
                  disabled={currentPage <= 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  ← Poprzednia
                </button>
                <span className="pagination-info">
                  Strona {currentPage} z {totalPages}
                </span>
                <button
                  type="button"
                  disabled={currentPage >= totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  Następna →
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="gallery-empty">
            <div className="gallery-empty-icon">🔍</div>
            <h2 className="gallery-empty-title">Brak produktów</h2>
            <p className="gallery-empty-message">
              Nie znaleziono produktów spełniających wybrane kryteria.
            </p>
            <div className="gallery-empty-actions">
              <button
                type="button"
                className="gallery-empty-btn"
                onClick={handleClearFilters}
              >
                Wyczyść filtry
              </button>
              <Link href="/gallery" className="gallery-empty-link">
                Zobacz wszystkie produkty
              </Link>
            </div>
          </div>
        )}
      </main>

      {/* Mobile Filter Drawer */}
      {mobileFilterOpen && (
        <div className="mobile-filter-overlay" onClick={closeMobileFilter} />
      )}
      <div className={`mobile-filter-drawer ${mobileFilterOpen ? 'open' : ''}`}>
        <div className="mobile-filter-header">
          <span className="mobile-filter-title">Filtry</span>
          <button type="button" className="mobile-filter-close" onClick={closeMobileFilter}>×</button>
        </div>
        <div className="mobile-filter-content">
          <GallerySidebar
            brands={brands}
            categories={categories}
            selectedBrands={selectedBrands}
            selectedCategories={selectedCategories}
            brandCounts={brandCounts}
            categoryCounts={categoryCounts}
            onBrandToggle={handleBrandToggle}
            onCategoryToggle={handleCategoryToggle}
            onClearFilters={() => { handleClearFilters(); closeMobileFilter(); }}
            hasFilters={hasFilters}
          />
        </div>
        <div className="mobile-filter-footer">
          <button
            type="button"
            className="mobile-filter-apply"
            onClick={closeMobileFilter}
          >
            Zastosuj ({filteredCount} produktów)
          </button>
        </div>
      </div>
    </div>
  );
}
