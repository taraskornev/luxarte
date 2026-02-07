'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LEGACY_BRANDS } from '@/canonical/legacyBrands';
import { 
  LEGACY_CATEGORIES, 
  getCategoriesByNavGroup, 
  NAV_GROUP_LABELS, 
  NAV_GROUP_ORDER,
  type LegacyCategory 
} from '@/canonical/legacyCategories';

// Build brand list sorted by sortOrder (canonical order)
const brands = [...LEGACY_BRANDS].sort((a, b) => a.sortOrder - b.sortOrder);

// Get categories grouped by nav group for dropdown display
const categoriesByGroup = getCategoriesByNavGroup();

type MobilePanel = 'main' | 'brands' | 'categories';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobilePanel, setMobilePanel] = useState<MobilePanel>('main');

  const openMobileMenu = useCallback(() => {
    setMobileMenuOpen(true);
    setMobilePanel('main');
    document.body.style.overflow = 'hidden';
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
    setMobilePanel('main');
    document.body.style.overflow = '';
  }, []);

  const navigateMobilePanel = useCallback((panel: MobilePanel) => {
    setMobilePanel(panel);
  }, []);

  return (
    <>
      <header className="site-header">
        <div className="header-container">
          <Link href="/" className="logo">
            <Image
              src="/media/luxarte-logo.png"
              alt="LuxArte"
              width={180}
              height={60}
              sizes="180px"
              priority
            />
          </Link>

          {/* Desktop Navigation - exact order per spec */}
          <nav className="main-nav desktop-nav">
            <ul>
              {/* MARKI dropdown - gallery filter by brand */}
              <li className="nav-item-dropdown">
                <Link href="/gallery?mode=brand" className="nav-link-parent">
                  MARKI
                </Link>
                <div className="dropdown-bridge" />
                <div className="dropdown-panel dropdown-brands">
                  <ul className="dropdown-list">
                    {brands.map((brand) => (
                      <li key={brand.slug}>
                        <Link href={`/gallery?brand=${brand.slug}`}>
                          {brand.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>

              {/* KATEGORIE dropdown - grouped by navGroup */}
              <li className="nav-item-dropdown">
                <Link href="/gallery?mode=category" className="nav-link-parent">
                  KATEGORIE
                </Link>
                <div className="dropdown-bridge" />
                <div className="dropdown-panel dropdown-categories">
                  <div className="dropdown-grouped">
                    {NAV_GROUP_ORDER.map((group) => {
                      const groupCategories = categoriesByGroup[group];
                      if (groupCategories.length === 0) return null;
                      return (
                        <div key={group} className="dropdown-group">
                          <span className="dropdown-group-label">
                            {NAV_GROUP_LABELS[group]}
                          </span>
                          <ul className="dropdown-list">
                            {groupCategories.map((category: LegacyCategory) => (
                              <li key={category.slug}>
                                <Link href={`/gallery?category=${category.slug}`}>
                                  {category.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </li>

              <li><Link href="/bentley-home-cinema">BENTLEY&nbsp;HOME&nbsp;CINEMA</Link></li>
              <li><Link href="/outlet">OUTLET</Link></li>
              <li><Link href="/aktualnosci">AKTUALNOŚCI</Link></li>
              <li><Link href="/o-nas">O&nbsp;NAS</Link></li>
              <li><Link href="/kontakt">KONTAKT</Link></li>
            </ul>
          </nav>

          <div className="header-right">
            <div className="language-switch">
              <span className="lang-active">PL</span>
              <span className="lang-separator">|</span>
              <span className="lang-inactive">EN</span>
            </div>

            {/* Mobile hamburger button */}
            <button
              type="button"
              className="mobile-menu-toggle"
              onClick={openMobileMenu}
              aria-label="Otwórz menu"
            >
              <span className="hamburger-line" />
              <span className="hamburger-line" />
              <span className="hamburger-line" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" onClick={closeMobileMenu} />
      )}

      {/* Mobile Menu Drawer - 80% viewport, slides from right */}
      <div className={`mobile-menu-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-title">Menu</span>
          <button
            type="button"
            className="mobile-menu-close"
            onClick={closeMobileMenu}
            aria-label="Zamknij menu"
          >
            ×
          </button>
        </div>

        {/* Main Panel - same order as desktop */}
        {mobilePanel === 'main' && (
          <nav className="mobile-nav-panel">
            <ul className="mobile-nav-list">
              <li>
                <button
                  type="button"
                  className="mobile-nav-drill"
                  onClick={() => navigateMobilePanel('brands')}
                >
                  MARKI
                  <span className="drill-arrow">→</span>
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="mobile-nav-drill"
                  onClick={() => navigateMobilePanel('categories')}
                >
                  KATEGORIE
                  <span className="drill-arrow">→</span>
                </button>
              </li>
              <li><Link href="/bentley-home-cinema" onClick={closeMobileMenu}>BENTLEY&nbsp;HOME&nbsp;CINEMA</Link></li>
              <li><Link href="/outlet" onClick={closeMobileMenu}>OUTLET</Link></li>
              <li><Link href="/aktualnosci" onClick={closeMobileMenu}>AKTUALNOŚCI</Link></li>
              <li><Link href="/o-nas" onClick={closeMobileMenu}>O&nbsp;NAS</Link></li>
              <li><Link href="/kontakt" onClick={closeMobileMenu}>KONTAKT</Link></li>
            </ul>
            <div className="mobile-lang-switch">
              <span className="lang-active">PL</span>
              <span className="lang-separator">|</span>
              <span className="lang-inactive">EN</span>
            </div>
          </nav>
        )}

        {/* Brands Panel - drilldown */}
        {mobilePanel === 'brands' && (
          <nav className="mobile-nav-panel">
            <button
              type="button"
              className="mobile-nav-back"
              onClick={() => navigateMobilePanel('main')}
            >
              ← Wstecz
            </button>
            <Link
              href="/gallery?mode=brand"
              className="mobile-nav-parent-link"
              onClick={closeMobileMenu}
            >
              Wszystkie marki
            </Link>
            <ul className="mobile-nav-list mobile-nav-sublist">
              {brands.map((brand) => (
                <li key={brand.slug}>
                  <Link
                    href={`/gallery?brand=${brand.slug}`}
                    onClick={closeMobileMenu}
                  >
                    {brand.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}

        {/* Categories Panel - drilldown with groups */}
        {mobilePanel === 'categories' && (
          <nav className="mobile-nav-panel">
            <button
              type="button"
              className="mobile-nav-back"
              onClick={() => navigateMobilePanel('main')}
            >
              ← Wstecz
            </button>
            <Link
              href="/gallery?mode=category"
              className="mobile-nav-parent-link"
              onClick={closeMobileMenu}
            >
              Wszystkie kategorie
            </Link>
            <div className="mobile-nav-grouped">
              {NAV_GROUP_ORDER.map((group) => {
                const groupCategories = categoriesByGroup[group];
                if (groupCategories.length === 0) return null;
                return (
                  <div key={group} className="mobile-nav-group">
                    <span className="mobile-nav-group-label">
                      {NAV_GROUP_LABELS[group]}
                    </span>
                    <ul className="mobile-nav-list mobile-nav-sublist">
                      {groupCategories.map((category: LegacyCategory) => (
                        <li key={category.slug}>
                          <Link
                            href={`/gallery?category=${category.slug}`}
                            onClick={closeMobileMenu}
                          >
                            {category.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </nav>
        )}
      </div>
    </>
  );
}
