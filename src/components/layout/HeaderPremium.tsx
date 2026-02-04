'use client';

/**
 * ============================================================================
 * HEADER COMPONENT - PREMIUM EDITION
 * ============================================================================
 *
 * Site header with:
 * - Premium mega-menu navigation
 * - Transparent mode over hero → solid on scroll
 * - Smoother compact mode transition
 * - Improved logo scaling curve
 * - Active route highlighting
 *
 * @version 2.0.0
 */

import Image from 'next/image';
import React, { useState, useEffect, useCallback } from 'react';
import { NavigationPremium } from './NavigationPremium';
import { MobileMenuDrilldown } from './MobileMenuDrilldown';
import { BRAND_ASSETS } from '../../config/navigation';

// ============================================================================
// Types
// ============================================================================

interface HeaderPremiumProps {
  className?: string;
  transparentMode?: boolean; // Enable transparent mode over hero
}

// ============================================================================
// Constants
// ============================================================================

const SCROLL_THRESHOLD = 80; // px to trigger compact mode
const SOLID_THRESHOLD = 20; // px to switch from transparent to solid

// ============================================================================
// Component
// ============================================================================

export function HeaderPremium({ className = '', transparentMode = false }: HeaderPremiumProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [isSolid, setIsSolid] = useState(!transparentMode);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState('/');

  // Handle scroll behavior
  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 0);
    setIsCompact(scrollY > SCROLL_THRESHOLD);
    
    if (transparentMode) {
      setIsSolid(scrollY > SOLID_THRESHOLD);
    }
  }, [transparentMode]);

  useEffect(() => {
    // Get current path
    if (typeof window !== 'undefined') {
      setCurrentPath(window.location.pathname);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Toggle mobile menu
  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => !prev);

    // Prevent body scroll when menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  // Close mobile menu
  const closeMobileMenu = useCallback(() => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = '';
  }, []);

  // Build class names
  const headerClasses = [
    'header-premium',
    isScrolled ? 'header-premium--scrolled' : '',
    isCompact ? 'header-premium--compact' : '',
    isSolid ? 'header-premium--solid' : 'header-premium--transparent',
    isMobileMenuOpen ? 'header-premium--menu-open' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <header className={headerClasses} role="banner">
        <div className="container">
          <div className="header-premium__inner">
            {/* Logo */}
            <div className="header-premium__logo">
              <a href="/" className="header-premium__logo-link" aria-label="LuxArte - Strona główna">
                <Image
                  src={BRAND_ASSETS.logo.src}
                  alt={BRAND_ASSETS.logo.alt}
                  width={BRAND_ASSETS.logo.width}
                  height={BRAND_ASSETS.logo.height}
                  className="header-premium__logo-image"
                  priority
                />
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="header-premium__nav">
              <NavigationPremium currentPath={currentPath} />
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="header-premium__mobile-toggle"
              onClick={toggleMobileMenu}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMobileMenuOpen ? 'Zamknij menu' : 'Otwórz menu'}
            >
              <span className="header-premium__hamburger" aria-hidden="true">
                <span className="header-premium__hamburger-line"></span>
                <span className="header-premium__hamburger-line"></span>
                <span className="header-premium__hamburger-line"></span>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenuDrilldown isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </>
  );
}

export default HeaderPremium;
