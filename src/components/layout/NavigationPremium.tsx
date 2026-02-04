'use client';

/**
 * ============================================================================
 * NAVIGATION COMPONENT - PREMIUM EDITION
 * ============================================================================
 *
 * Primary desktop navigation with:
 * - Mega-menu for Categories and Brands
 * - Smooth hover transitions
 * - Active route highlighting
 * - Keyboard navigation support
 *
 * @version 2.0.0
 */

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { PRIMARY_NAV, NavItem } from '../../config/navigation';
import { MegaMenu } from './MegaMenu';

// ============================================================================
// Types
// ============================================================================

interface NavigationPremiumProps {
  className?: string;
  currentPath?: string;
}

// ============================================================================
// Component
// ============================================================================

export function NavigationPremium({ className = '', currentPath = '/' }: NavigationPremiumProps) {
  const [activeMegaMenu, setActiveMegaMenu] = useState<'categories' | 'brands' | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Handle mouse enter on nav item
  const handleMouseEnter = useCallback((itemId: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    if (itemId === 'categories' || itemId === 'brands') {
      setActiveMegaMenu(itemId);
    } else {
      setActiveMegaMenu(null);
    }
  }, []);

  // Handle mouse leave with delay
  const handleMouseLeave = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setActiveMegaMenu(null);
    }, 150);
  }, []);

  // Keep menu open when hovering mega-menu
  const handleMegaMenuMouseEnter = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, []);

  // Close mega menu
  const closeMegaMenu = useCallback(() => {
    setActiveMegaMenu(null);
  }, []);

  // Check if nav item is active
  const isItemActive = useCallback(
    (item: NavItem): boolean => {
      if (currentPath === item.href) return true;
      if (item.href !== '/' && currentPath.startsWith(item.href)) return true;
      return false;
    },
    [currentPath]
  );

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <nav ref={navRef} className={`nav-premium ${className}`} aria-label="Główna nawigacja">
      <ul className="nav-premium__list" role="menubar">
        {PRIMARY_NAV.map((item) => {
          const isActive = isItemActive(item);
          const hasMegaMenu = item.id === 'categories' || item.id === 'brands';
          const isMegaOpen = activeMegaMenu === item.id;

          return (
            <li
              key={item.id}
              className={`nav-premium__item ${isMegaOpen ? 'nav-premium__item--open' : ''}`}
              onMouseEnter={() => handleMouseEnter(item.id)}
              onMouseLeave={handleMouseLeave}
            >
              <a
                href={item.href}
                className={`nav-premium__link ${isActive ? 'nav-premium__link--active' : ''} ${hasMegaMenu ? 'nav-premium__link--has-mega' : ''}`}
                aria-expanded={hasMegaMenu ? isMegaOpen : undefined}
                aria-haspopup={hasMegaMenu ? 'true' : undefined}
              >
                <span className="nav-premium__label">{item.label}</span>
                {hasMegaMenu && (
                  <svg
                    className="nav-premium__arrow"
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    aria-hidden="true"
                  >
                    <polyline points="6,9 12,15 18,9" />
                  </svg>
                )}
              </a>

              {/* Active indicator line */}
              <span
                className={`nav-premium__indicator ${isActive ? 'nav-premium__indicator--active' : ''}`}
                aria-hidden="true"
              />
            </li>
          );
        })}
      </ul>

      {/* Mega Menus */}
      <div
        className="nav-premium__mega-container"
        onMouseEnter={handleMegaMenuMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <MegaMenu type="categories" isOpen={activeMegaMenu === 'categories'} onClose={closeMegaMenu} />
        <MegaMenu type="brands" isOpen={activeMegaMenu === 'brands'} onClose={closeMegaMenu} />
      </div>
    </nav>
  );
}

export default NavigationPremium;
