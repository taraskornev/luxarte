'use client';

/**
 * ============================================================================
 * MEGA MENU COMPONENT
 * ============================================================================
 *
 * Premium mega-menu for desktop navigation with:
 * - Categories: multi-column layout with product types
 * - Brands: alphabetical grid with logos
 * - Smooth enter/exit animations
 * - Keyboard accessible
 *
 * @version 1.0.0
 */

import Image from 'next/image';
import React, { useRef, useEffect } from 'react';
import { categories } from '../../data/categories-data';
import { brands } from '../../data/brands-data';

// ============================================================================
// Types
// ============================================================================

interface MegaMenuProps {
  type: 'categories' | 'brands';
  isOpen: boolean;
  onClose: () => void;
}

// ============================================================================
// Category Group Data
// ============================================================================

const categoryGroups = [
  {
    title: 'Salon',
    items: [
      { name: 'Sofy', slug: 'sofy', icon: '🛋️' },
      { name: 'Fotele', slug: 'fotele', icon: '💺' },
      { name: 'Stoliki kawowe', slug: 'stoliki-kawowe', icon: '☕' },
      { name: 'Komody', slug: 'komody', icon: '🗄️' },
      { name: 'Regały', slug: 'regaly', icon: '📚' },
    ],
  },
  {
    title: 'Sypialnia',
    items: [
      { name: 'Łóżka', slug: 'lozka', icon: '🛏️' },
      { name: 'Szafki nocne', slug: 'szafki-nocne', icon: '🪑' },
      { name: 'Garderoby', slug: 'garderoby', icon: '👗' },
      { name: 'Lustra', slug: 'lustra', icon: '🪞' },
    ],
  },
  {
    title: 'Jadalnia',
    items: [
      { name: 'Stoły', slug: 'stoly', icon: '🍽️' },
      { name: 'Krzesła', slug: 'krzesla', icon: '🪑' },
      { name: 'Konsole', slug: 'konsole', icon: '🗃️' },
      { name: 'Hokery', slug: 'hokery', icon: '🪑' },
    ],
  },
  {
    title: 'Oświetlenie',
    items: [
      { name: 'Żyrandole', slug: 'zyrandole', icon: '💡' },
      { name: 'Lampy wiszące', slug: 'lampy-wiszace', icon: '🔦' },
      { name: 'Lampy stołowe', slug: 'lampy-stolowe', icon: '🏮' },
      { name: 'Lampy podłogowe', slug: 'lampy-podlogowe', icon: '🪔' },
      { name: 'Kinkiety', slug: 'kinkiety', icon: '💡' },
    ],
  },
  {
    title: 'Przestrzenie',
    items: [
      { name: 'Kuchnie', slug: 'kuchnie', icon: '🍳' },
      { name: 'Łazienki', slug: 'lazienki', icon: '🛁' },
      { name: 'Meble ogrodowe', slug: 'meble-ogrodowe', icon: '🌳' },
      { name: 'Biurka', slug: 'biurka', icon: '💼' },
    ],
  },
];

// ============================================================================
// Brand Grouping by First Letter
// ============================================================================

function groupBrandsByLetter() {
  const grouped: Record<string, Array<typeof brands[number]>> = {};

  brands.forEach((brand) => {
    const letter = brand.name.charAt(0).toUpperCase();
    if (!grouped[letter]) {
      grouped[letter] = [];
    }
    grouped[letter].push(brand);
  });

  return Object.entries(grouped).sort(([a], [b]) => a.localeCompare(b));
}

// ============================================================================
// Component
// ============================================================================

export function MegaMenu({ type, isOpen, onClose }: MegaMenuProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on escape
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={menuRef}
      className={`mega-menu mega-menu--${type} ${isOpen ? 'mega-menu--open' : ''}`}
      role="menu"
      aria-label={type === 'categories' ? 'Menu kategorii' : 'Menu marek'}
    >
      <div className="container">
        {type === 'categories' ? (
          <CategoriesMenu onClose={onClose} />
        ) : (
          <BrandsMenu onClose={onClose} />
        )}
      </div>
    </div>
  );
}

// ============================================================================
// Categories Menu
// ============================================================================

function CategoriesMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="mega-menu__categories">
      <div className="mega-menu__header">
        <h3 className="mega-menu__title">Kategorie produktów</h3>
        <a href="/categories" className="mega-menu__view-all" onClick={onClose}>
          Zobacz wszystkie
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div className="mega-menu__grid mega-menu__grid--categories">
        {categoryGroups.map((group) => (
          <div key={group.title} className="mega-menu__group">
            <h4 className="mega-menu__group-title">{group.title}</h4>
            <ul className="mega-menu__list">
              {group.items.map((item) => (
                <li key={item.slug}>
                  <a
                    href={`/categories/${item.slug}`}
                    className="mega-menu__link"
                    onClick={onClose}
                  >
                    <span className="mega-menu__link-icon">{item.icon}</span>
                    <span className="mega-menu__link-text">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Featured Category */}
      <div className="mega-menu__featured">
        <a href="/categories/sofy" className="mega-menu__featured-card" onClick={onClose}>
          <div className="mega-menu__featured-image">
            <Image
              src="https://www.luxarte.pl/wp-content/uploads/2025/10/sofa-visionnaire-loving-frank-luxarte-ekskluzywne-meble-do-salonu.webp"
              alt="Sofy premium"
              width={300}
              height={200}
            />
          </div>
          <div className="mega-menu__featured-content">
            <span className="mega-menu__featured-label">Popularne</span>
            <span className="mega-menu__featured-title">Luksusowe Sofy</span>
            <span className="mega-menu__featured-cta">Zobacz kolekcję →</span>
          </div>
        </a>
      </div>
    </div>
  );
}

// ============================================================================
// Brands Menu
// ============================================================================

function BrandsMenu({ onClose }: { onClose: () => void }) {
  const groupedBrands = groupBrandsByLetter();

  return (
    <div className="mega-menu__brands">
      <div className="mega-menu__header">
        <h3 className="mega-menu__title">Nasze marki</h3>
        <a href="/brands" className="mega-menu__view-all" onClick={onClose}>
          Zobacz wszystkie
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      <div className="mega-menu__grid mega-menu__grid--brands">
        {groupedBrands.map(([letter, letterBrands]) => (
          <div key={letter} className="mega-menu__brand-group">
            <span className="mega-menu__letter">{letter}</span>
            <ul className="mega-menu__brand-list">
              {letterBrands.map((brand) => (
                <li key={brand.slug}>
                  <a
                    href={`/brands/${brand.slug}`}
                    className="mega-menu__brand-link"
                    onClick={onClose}
                  >
                    {brand.logo ? (
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        className="mega-menu__brand-logo"
                        width={80}
                        height={40}
                      />
                    ) : (
                      <span className="mega-menu__brand-name">{brand.name}</span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Featured Brands */}
      <div className="mega-menu__featured-brands">
        <span className="mega-menu__featured-label">Wyróżnione marki</span>
        <div className="mega-menu__featured-brands-grid">
          {brands.slice(0, 5).map((brand) => (
            <a
              key={brand.slug}
              href={`/brands/${brand.slug}`}
              className="mega-menu__featured-brand"
              onClick={onClose}
            >
              <Image
                src={brand.image}
                alt={brand.name}
                className="mega-menu__featured-brand-image"
                width={150}
                height={100}
              />
              <span className="mega-menu__featured-brand-name">{brand.name}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MegaMenu;
