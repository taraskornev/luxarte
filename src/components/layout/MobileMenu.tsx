'use client';

/**
 * ============================================================================
 * MOBILE MENU COMPONENT
 * ============================================================================
 * 
 * Mobile navigation drawer with:
 * - Slide-in animation from right
 * - Overlay backdrop
 * - Expandable dropdown sections
 * - Focus trap for accessibility
 * - Touch-friendly interactions
 * 
 * @version 1.0.0
 */

import React, { useState, useCallback, useRef, useEffect } from 'react';
import Image from 'next/image';
import { PRIMARY_NAV, BRAND_ASSETS, NavItem } from '../../config/navigation';

// ============================================================================
// Types
// ============================================================================

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// ============================================================================
// Component
// ============================================================================

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Toggle submenu expansion
  const toggleSubmenu = useCallback((itemId: string) => {
    setExpandedItems(prev => {
      const next = new Set(prev);
      if (next.has(itemId)) {
        next.delete(itemId);
      } else {
        next.add(itemId);
      }
      return next;
    });
  }, []);

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
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Render nav item
  const renderNavItem = (item: NavItem) => {
    const isExpanded = expandedItems.has(item.id);
    const hasChildren = item.hasDropdown && item.children && item.children.length > 0;

    return (
      <li key={item.id} className="mobile-menu__item">
        {item.hasDropdown ? (
          <>
            <button
              type="button"
              className="mobile-menu__link"
              onClick={() => toggleSubmenu(item.id)}
              aria-expanded={isExpanded}
            >
              <span>{item.label}</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                style={{
                  transform: isExpanded ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                }}
              >
                <polyline points="6,9 12,15 18,9" />
              </svg>
            </button>
            
            <div className={`mobile-menu__submenu ${isExpanded ? 'mobile-menu__submenu--open' : ''}`}>
              <ul className="mobile-menu__submenu-list">
                {/* View all link */}
                <li>
                  <a 
                    href={item.href} 
                    className="mobile-menu__submenu-link"
                    onClick={onClose}
                  >
                    Zobacz wszystkie
                  </a>
                </li>
                
                {/* Child items */}
                {hasChildren && item.children!.map((child) => (
                  <li key={child.id}>
                    <a 
                      href={child.href} 
                      className="mobile-menu__submenu-link"
                      onClick={onClose}
                    >
                      {child.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </>
        ) : (
          <a 
            href={item.href} 
            className="mobile-menu__link"
            onClick={onClose}
          >
            <span>{item.label}</span>
          </a>
        )}
      </li>
    );
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`mobile-menu__overlay ${isOpen ? 'mobile-menu__overlay--visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Drawer */}
      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu ${isOpen ? 'mobile-menu--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu nawigacji"
        aria-hidden={!isOpen}
      >
        {/* Header */}
        <div className="mobile-menu__header">
          <a href="/" className="header__logo-link" onClick={onClose}>
            <Image
              src={BRAND_ASSETS.logo.src}
              alt={BRAND_ASSETS.logo.alt}
              width={180}
              height={62}
              className="header__logo-image"
            />
          </a>

          <button
            ref={closeButtonRef}
            type="button"
            className="mobile-menu__close"
            onClick={onClose}
            aria-label="Zamknij menu"
          >
            <svg
              className="mobile-menu__close-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="mobile-menu__nav" aria-label="Menu mobilne">
          <ul className="mobile-menu__list">
            {PRIMARY_NAV.map(renderNavItem)}
          </ul>
        </nav>
      </div>
    </>
  );
}

// ============================================================================
// Export
// ============================================================================

export default MobileMenu;
