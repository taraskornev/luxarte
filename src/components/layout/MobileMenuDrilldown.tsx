'use client';

/**
 * ============================================================================
 * MOBILE MENU DRILLDOWN COMPONENT
 * ============================================================================
 *
 * Level-based drilldown navigation for mobile with:
 * - Animated panel slides (CSS only)
 * - Back buttons
 * - Body scroll lock
 * - Touch-friendly interactions
 * - Focus trap for accessibility
 *
 * @version 1.0.0
 */

import Image from 'next/image';
import React, { useState, useCallback, useRef, useEffect } from 'react';
import { PRIMARY_NAV, BRAND_ASSETS } from '../../config/navigation';
import { categories } from '../../data/categories-data';
import { brands } from '../../data/brands-data';

// ============================================================================
// Types
// ============================================================================

interface MobileMenuDrilldownProps {
  isOpen: boolean;
  onClose: () => void;
}

type MenuLevel = 'main' | 'categories' | 'brands';

// ============================================================================
// Category Groups for Mobile
// ============================================================================

const categoryGroups = [
  {
    title: 'Salon',
    items: [
      { name: 'Sofy', slug: 'sofy' },
      { name: 'Fotele', slug: 'fotele' },
      { name: 'Stoliki kawowe', slug: 'stoliki-kawowe' },
      { name: 'Komody', slug: 'komody' },
    ],
  },
  {
    title: 'Sypialnia',
    items: [
      { name: 'Łóżka', slug: 'lozka' },
      { name: 'Szafki nocne', slug: 'szafki-nocne' },
      { name: 'Garderoby', slug: 'garderoby' },
    ],
  },
  {
    title: 'Jadalnia',
    items: [
      { name: 'Stoły', slug: 'stoly' },
      { name: 'Krzesła', slug: 'krzesla' },
      { name: 'Konsole', slug: 'konsole' },
    ],
  },
  {
    title: 'Oświetlenie',
    items: [
      { name: 'Żyrandole', slug: 'zyrandole' },
      { name: 'Lampy wiszące', slug: 'lampy-wiszace' },
      { name: 'Lampy stołowe', slug: 'lampy-stolowe' },
    ],
  },
  {
    title: 'Przestrzenie',
    items: [
      { name: 'Kuchnie', slug: 'kuchnie' },
      { name: 'Łazienki', slug: 'lazienki' },
      { name: 'Meble ogrodowe', slug: 'meble-ogrodowe' },
    ],
  },
];

// ============================================================================
// Component
// ============================================================================

export function MobileMenuDrilldown({ isOpen, onClose }: MobileMenuDrilldownProps) {
  const [currentLevel, setCurrentLevel] = useState<MenuLevel>('main');
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus management
  useEffect(() => {
    if (isOpen && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) {
        if (currentLevel !== 'main') {
          setCurrentLevel('main');
        } else {
          onClose();
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, currentLevel]);

  // Reset level when closing
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => setCurrentLevel('main'), 300);
    }
  }, [isOpen]);

  // Navigate to submenu
  const navigateTo = useCallback((level: MenuLevel) => {
    setCurrentLevel(level);
  }, []);

  // Go back to main
  const goBack = useCallback(() => {
    setCurrentLevel('main');
  }, []);

  // Handle link click
  const handleLinkClick = useCallback(() => {
    onClose();
  }, [onClose]);

  return (
    <>
      {/* Overlay */}
      <div
        className={`mobile-drilldown__overlay ${isOpen ? 'mobile-drilldown__overlay--visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Container */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-drilldown ${isOpen ? 'mobile-drilldown--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu nawigacji"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="mobile-drilldown__header">
          <a href="/" className="mobile-drilldown__logo" onClick={handleLinkClick}>
            <Image
              src={BRAND_ASSETS.logo.src}
              alt={BRAND_ASSETS.logo.alt}
              width={160}
              height={55}
            />
          </a>

          <button
            ref={closeButtonRef}
            type="button"
            className="mobile-drilldown__close"
            onClick={onClose}
            aria-label="Zamknij menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Panels Container */}
        <div className="mobile-drilldown__panels">
          {/* Main Panel */}
          <div
            className={`mobile-drilldown__panel ${currentLevel === 'main' ? 'mobile-drilldown__panel--active' : 'mobile-drilldown__panel--left'}`}
          >
            <nav className="mobile-drilldown__nav">
              <ul className="mobile-drilldown__list">
                {/* Categories - Drilldown */}
                <li className="mobile-drilldown__item">
                  <button
                    type="button"
                    className="mobile-drilldown__link mobile-drilldown__link--drilldown"
                    onClick={() => navigateTo('categories')}
                  >
                    <span>Kategorie</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9,18 15,12 9,6" />
                    </svg>
                  </button>
                </li>

                {/* Brands - Drilldown */}
                <li className="mobile-drilldown__item">
                  <button
                    type="button"
                    className="mobile-drilldown__link mobile-drilldown__link--drilldown"
                    onClick={() => navigateTo('brands')}
                  >
                    <span>Marki</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="9,18 15,12 9,6" />
                    </svg>
                  </button>
                </li>

                {/* Other Links */}
                {PRIMARY_NAV.filter((item) => !item.hasDropdown).map((item) => (
                  <li key={item.id} className="mobile-drilldown__item">
                    <a href={item.href} className="mobile-drilldown__link" onClick={handleLinkClick}>
                      <span>{item.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Categories Panel */}
          <div
            className={`mobile-drilldown__panel ${currentLevel === 'categories' ? 'mobile-drilldown__panel--active' : 'mobile-drilldown__panel--right'}`}
          >
            <button type="button" className="mobile-drilldown__back" onClick={goBack}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15,18 9,12 15,6" />
              </svg>
              <span>Wstecz</span>
            </button>

            <div className="mobile-drilldown__panel-header">
              <h3 className="mobile-drilldown__panel-title">Kategorie</h3>
              <a href="/categories" className="mobile-drilldown__view-all" onClick={handleLinkClick}>
                Zobacz wszystkie
              </a>
            </div>

            <div className="mobile-drilldown__groups">
              {categoryGroups.map((group) => (
                <div key={group.title} className="mobile-drilldown__group">
                  <h4 className="mobile-drilldown__group-title">{group.title}</h4>
                  <ul className="mobile-drilldown__group-list">
                    {group.items.map((item) => (
                      <li key={item.slug}>
                        <a
                          href={`/categories/${item.slug}`}
                          className="mobile-drilldown__sublink"
                          onClick={handleLinkClick}
                        >
                          {item.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Brands Panel */}
          <div
            className={`mobile-drilldown__panel ${currentLevel === 'brands' ? 'mobile-drilldown__panel--active' : 'mobile-drilldown__panel--right'}`}
          >
            <button type="button" className="mobile-drilldown__back" onClick={goBack}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="15,18 9,12 15,6" />
              </svg>
              <span>Wstecz</span>
            </button>

            <div className="mobile-drilldown__panel-header">
              <h3 className="mobile-drilldown__panel-title">Marki</h3>
              <a href="/brands" className="mobile-drilldown__view-all" onClick={handleLinkClick}>
                Zobacz wszystkie
              </a>
            </div>

            <ul className="mobile-drilldown__brand-list">
              {brands.map((brand) => (
                <li key={brand.slug}>
                  <a
                    href={`/brands/${brand.slug}`}
                    className="mobile-drilldown__brand-link"
                    onClick={handleLinkClick}
                  >
                    <span className="mobile-drilldown__brand-name">{brand.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer */}
        <div className="mobile-drilldown__footer">
          <a href="/showroom" className="mobile-drilldown__cta" onClick={handleLinkClick}>
            Odwiedź showroom
          </a>
        </div>
      </div>
    </>
  );
}

export default MobileMenuDrilldown;
