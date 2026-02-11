'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useCallback, useMemo, useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { OutletProduct, OutletCategory } from '@/lib/outlet';
import { getDictionary, type Locale } from '@/i18n';

// Items per page for pagination
const ITEMS_PER_PAGE = 12;

interface OutletClientProps {
  categories: OutletCategory[];
  initialCategory?: string;
  locale?: Locale;
}

interface FlatOutletProduct extends OutletProduct {
  categorySlug: string;
  categoryName: string;
}

/**
 * Outlet Gallery Client with sidebar filters
 * 
 * URL Format:
 * /outlet?category=sofy          → single category filter
 * /outlet?category=sofy,fotele   → multi-category (OR)
 * 
 * Similar structure to GalleryClient
 */
export function OutletClient({ categories, initialCategory, locale = 'pl' }: OutletClientProps) {
  const router = useRouter();
  const pathname = usePathname();
  const t = getDictionary(locale);

  // Flatten all products with category info
  const allProducts: FlatOutletProduct[] = useMemo(() => {
    const products: FlatOutletProduct[] = [];
    for (const category of categories) {
      for (const product of category.products) {
        products.push({
          ...product,
          categorySlug: category.slug,
          categoryName: category.name,
        });
      }
    }
    return products;
  }, [categories]);

  // Filter state
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [categoriesExpanded, setCategoriesExpanded] = useState(true);

  // Ref for scroll-to-grid on pagination
  const mainRef = useRef<HTMLDivElement>(null);

  // Refs for drag handling
  const dragStartX = useRef<number>(0);
  const isDragging = useRef<boolean>(false);

  // Sync URL when filter state changes
  useEffect(() => {
    const params = new URLSearchParams();
    if (selectedCategories.length > 0) {
      params.set('category', selectedCategories.join(','));
    }

    const queryString = params.toString();
    const newUrl = queryString ? `${pathname}?${queryString}` : pathname;

    window.history.replaceState(null, '', newUrl);
  }, [selectedCategories, pathname]);

  // Handle browser back/forward
  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const categoryParam = params.get('category');
      setSelectedCategories(categoryParam ? categoryParam.split(',').filter(Boolean) : []);
      setCurrentPage(1);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Filter products by selected categories
  const filteredProducts = useMemo(() => {
    if (selectedCategories.length === 0) {
      return allProducts;
    }
    return allProducts.filter((p) => selectedCategories.includes(p.categorySlug));
  }, [allProducts, selectedCategories]);

  // Pagination
  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);
  const paginatedProducts = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredProducts.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredProducts, currentPage]);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategories]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = new Map<string, number>();
    for (const product of allProducts) {
      counts.set(product.categorySlug, (counts.get(product.categorySlug) || 0) + 1);
    }
    return counts;
  }, [allProducts]);

  // Toggle category selection
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
    setSelectedCategories([]);
    setCurrentPage(1);
    router.push(locale === 'en' ? '/en/outlet' : '/outlet');
  }, [router, locale]);

  // Page change
  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
    if (mainRef.current) {
      mainRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  // Mobile filter drawer - toggle
  const toggleMobileFilter = useCallback(() => {
    setMobileFilterOpen((prev) => {
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

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      const deltaX = e.touches[0].clientX - dragStartX.current;
      if (mobileFilterOpen && deltaX > 30) {
        isDragging.current = true;
      }
      if (!mobileFilterOpen && deltaX < -30) {
        isDragging.current = true;
      }
    },
    [mobileFilterOpen]
  );

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
  const totalCount = allProducts.length;
  const filteredCount = filteredProducts.length;
  const hasFilters = selectedCategories.length > 0;

  return (
    <div className="outlet-layout">
      {/* Hero Section */}
      <div className="outlet-hero-banner">
        <h1 className="outlet-hero-title">OUTLET</h1>
        <h2 className="outlet-hero-subtitle">
          {t.outlet.heroSubtitle}
        </h2>
        <p className="outlet-hero-discount">{t.outlet.heroDiscount}</p>
      </div>

      <div className="outlet-content">
        {/* Desktop Sidebar */}
        <aside className="outlet-sidebar">
          <div className="sidebar-filters">
            {/* Categories Section */}
            <div className={`filter-group ${categoriesExpanded ? 'expanded' : 'collapsed'}`}>
              <button
                type="button"
                className="filter-group-header"
                onClick={() => setCategoriesExpanded(!categoriesExpanded)}
              >
                <span>
                  {t.common.categories}{selectedCategories.length > 0 && ` (${selectedCategories.length})`}
                </span>
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
                            onChange={() => handleCategoryToggle(category.slug)}
                            disabled={count === 0 && !isSelected}
                          />
                          <span className="filter-checkbox-box" />
                          <span className="filter-item-name">{category.name}</span>
                          <span className="filter-count">({count})</span>
                        </label>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            {/* Clear All - always visible */}
            <div className="sidebar-clear-all-wrapper">
              <button type="button" className={`sidebar-clear-all${!hasFilters ? ' sidebar-clear-all--disabled' : ''}`} onClick={handleClearFilters} disabled={!hasFilters}>
                {t.common.clearFilters}
              </button>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="outlet-main" ref={mainRef}>
          {/* Mobile Category Buttons (visible only on mobile) */}
          <div className="outlet-mobile-categories">
            <button
              type="button"
              className={`outlet-category-btn ${selectedCategories.length === 0 ? 'active' : ''}`}
              onClick={handleClearFilters}
            >
              {t.common.all}
            </button>
            {categories.map((category) => {
              const isSelected = selectedCategories.includes(category.slug);
              return (
                <button
                  key={category.slug}
                  type="button"
                  className={`outlet-category-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => handleCategoryToggle(category.slug)}
                >
                  {category.name}
                </button>
              );
            })}
          </div>

          {/* Results Header */}
          <div className="outlet-results-header">
            <span className="outlet-count">
              {hasFilters
                ? `${filteredCount} ${t.common.productsOf} ${totalCount} ${t.common.products}`
                : `${totalCount} ${t.common.products}`}
            </span>
          </div>

          {/* Product Grid */}
          {paginatedProducts.length > 0 ? (
            <>
              <div className="outlet-products-grid">
                {paginatedProducts.map((product) => (
                  <OutletProductCard key={product.id} product={product} locale={locale} />
                ))}
              </div>

              {/* Pagination — all pages */}
              {totalPages > 1 && (
                <nav className="outlet-pagination" aria-label={t.common.pagination}>
                  <button
                    type="button"
                    className="pagination-page pagination-arrow"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label={t.common.prevPage}
                  >‹</button>
                  <div className="pagination-pages">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <button
                        key={page}
                        type="button"
                        className={`pagination-page ${page === currentPage ? 'active' : ''}`}
                        onClick={() => handlePageChange(page)}
                        aria-current={page === currentPage ? 'page' : undefined}
                      >
                        {page}
                      </button>
                    ))}
                  </div>
                  <button
                    type="button"
                    className="pagination-page pagination-arrow"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label={t.common.nextPage}
                  >›</button>
                </nav>
              )}
            </>
          ) : (
            <div className="outlet-empty-state">
              <p>{t.common.categoryProducts}</p>
              <button type="button" onClick={handleClearFilters} className="outlet-empty-cta">
                {t.common.seeAllProducts}
              </button>
            </div>
          )}
        </main>
      </div>

      {/* Mobile Edge Tab */}
      <button
        type="button"
        className={`filter-edge-tab ${mobileFilterOpen ? 'hidden' : ''}`}
        onClick={toggleMobileFilter}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        aria-label={t.common.openFilters}
        aria-expanded={mobileFilterOpen}
      >
        <span className="filter-edge-tab-icon">☰</span>
        {hasFilters && <span className="filter-edge-tab-badge">{selectedCategories.length}</span>}
      </button>

      {/* Mobile Filter Drawer Overlay */}
      {mobileFilterOpen && (
        <div className="mobile-filter-overlay" onClick={closeMobileFilter} aria-hidden="true" />
      )}

      {/* Mobile Filter Drawer */}
      <div
        className={`mobile-filter-drawer ${mobileFilterOpen ? 'open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={t.common.filters}
      >
        <div className="mobile-filter-drawer-header">
          <h2>{t.common.filters}</h2>
          <button type="button" className="mobile-filter-close" onClick={closeMobileFilter}>
            ✕
          </button>
        </div>

        <div className="mobile-filter-drawer-content">
          {/* Clear All */}
          {hasFilters && (
            <button
              type="button"
              className="mobile-filter-clear-all"
              onClick={() => {
                handleClearFilters();
                closeMobileFilter();
              }}
            >
              {t.common.clearFilters} ({selectedCategories.length})
            </button>
          )}

          {/* Categories Section */}
          <div className={`filter-group ${categoriesExpanded ? 'expanded' : 'collapsed'}`}>
            <button
              type="button"
              className="filter-group-header"
              onClick={() => setCategoriesExpanded(!categoriesExpanded)}
            >
              <span>
                {t.common.categories}{selectedCategories.length > 0 && ` (${selectedCategories.length})`}
              </span>
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
                          onChange={() => handleCategoryToggle(category.slug)}
                          disabled={count === 0 && !isSelected}
                        />
                        <span className="filter-checkbox-box" />
                        <span className="filter-item-name">{category.name}</span>
                        <span className="filter-count">({count})</span>
                      </label>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Apply button for mobile */}
        <div className="mobile-filter-drawer-footer">
          <button type="button" className="mobile-filter-apply" onClick={closeMobileFilter}>
            {t.common.show} ({filteredCount})
          </button>
        </div>
      </div>

      {/* Contact section */}
      <section className="outlet-locations">
        <div className="outlet-location">
          <h3>{t.footer.warsawTitle}</h3>
          <address>
            {t.footer.buildingName}
            <br />
            Plac Piłsudskiego 9
            <br />
            00-078 Warszawa
          </address>
          <p className="outlet-contact">
            <a href="tel:+48226290458">+48 22 629 04 58</a>
            <br />
            <a href="mailto:warszawa@luxarte.pl">warszawa@luxarte.pl</a>
          </p>
        </div>

        <div className="outlet-location">
          <h3>{t.footer.wroclawTitle}</h3>
          <address>
            ul. Księcia Witolda 42/1
            <br />
            50-202 Wrocław
          </address>
          <p className="outlet-contact">
            <a href="tel:+48507047399">+48 507 047 399</a>
            <br />
            <a href="mailto:wroclaw@luxarte.pl">wroclaw@luxarte.pl</a>
          </p>
        </div>
      </section>
    </div>
  );
}

// Outlet Product Card Component - matches gallery-card style
function OutletProductCard({ product, locale = 'pl' }: { product: FlatOutletProduct; locale?: Locale }) {
  const t = getDictionary(locale);
  const hasImages = product.images.length > 0;
  const mainImage = hasImages ? product.images[0] : null;
  const outletPrefix = locale === 'en' ? '/en/outlet' : '/outlet';

  return (
    <Link href={`${outletPrefix}/${product.id}`} className="outlet-product-card">
      <div className="outlet-product-image-container">
        {mainImage ? (
          <Image
            src={mainImage}
            alt={product.name}
            width={400}
            height={400}
            className="outlet-product-image"
            unoptimized
          />
        ) : (
          <div className="outlet-product-placeholder">
            <span>{t.common.noPhoto}</span>
          </div>
        )}
        <span className="outlet-product-quantity">{product.quantity}</span>
      </div>

      <div className="outlet-product-info">
        <span className="outlet-product-brand">{product.brand}</span>
        <h3 className="outlet-product-name">{product.name}</h3>
      </div>
    </Link>
  );
}
