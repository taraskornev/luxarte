'use client';

/**
 * ============================================================================
 * NAVIGATION COMPONENT
 * ============================================================================
 * 
 * Primary desktop navigation with:
 * - Config-driven nav items
 * - Dropdown capability for Brands and Categories
 * - Keyboard navigation support
 * - Active state indication
 * 
 * @version 1.0.0
 */

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { PRIMARY_NAV, NavItem } from '../../config/navigation';

// ============================================================================
// Types
// ============================================================================

interface NavigationProps {
  className?: string;
}

interface NavItemProps {
  item: NavItem;
  isActive?: boolean;
}

// ============================================================================
// NavLink Component
// ============================================================================

function NavLink({ item, isActive = false }: NavItemProps) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  // Handle dropdown toggle
  const handleMouseEnter = useCallback(() => {
    if (item.hasDropdown) {
      setIsDropdownOpen(true);
    }
  }, [item.hasDropdown]);

  const handleMouseLeave = useCallback(() => {
    if (item.hasDropdown) {
      setIsDropdownOpen(false);
    }
  }, [item.hasDropdown]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (item.hasDropdown) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        setIsDropdownOpen(prev => !prev);
      } else if (e.key === 'Escape') {
        setIsDropdownOpen(false);
      }
    }
  }, [item.hasDropdown]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Build link classes
  const linkClasses = [
    'nav-primary__link',
    item.hasDropdown ? 'nav-primary__link--has-dropdown' : '',
    isActive ? 'nav-primary__link--active' : '',
  ].filter(Boolean).join(' ');

  return (
    <li 
      className="nav-primary__item"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a
        href={item.href}
        className={linkClasses}
        aria-expanded={item.hasDropdown ? isDropdownOpen : undefined}
        aria-haspopup={item.hasDropdown ? 'true' : undefined}
        onKeyDown={handleKeyDown}
      >
        {item.label}
      </a>

      {/* Dropdown Menu */}
      {item.hasDropdown && item.children && item.children.length > 0 && (
        <div 
          className={`nav-dropdown ${isDropdownOpen ? 'nav-dropdown--open' : ''}`}
          role="menu"
          aria-label={`${item.label} submenu`}
        >
          <ul className="nav-dropdown__list">
            {item.children.map((child) => (
              <li key={child.id} role="none">
                <a
                  href={child.href}
                  className="nav-dropdown__link"
                  role="menuitem"
                >
                  {child.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Dropdown placeholder when no children yet */}
      {item.hasDropdown && (!item.children || item.children.length === 0) && (
        <div 
          className={`nav-dropdown ${isDropdownOpen ? 'nav-dropdown--open' : ''}`}
          role="menu"
          aria-label={`${item.label} submenu`}
        >
          <ul className="nav-dropdown__list">
            <li role="none">
              <a href={item.href} className="nav-dropdown__link" role="menuitem">
                Zobacz wszystkie
              </a>
            </li>
          </ul>
        </div>
      )}
    </li>
  );
}

// ============================================================================
// Navigation Component
// ============================================================================

export function Navigation({ className = '' }: NavigationProps) {
  // TODO: Get current path from router for active state
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

  // Check if nav item is active
  const isItemActive = useCallback((item: NavItem): boolean => {
    if (currentPath === item.href) return true;
    if (item.href !== '/' && currentPath.startsWith(item.href)) return true;
    return false;
  }, [currentPath]);

  return (
    <ul className={`nav-primary ${className}`} role="menubar">
      {PRIMARY_NAV.map((item) => (
        <NavLink 
          key={item.id} 
          item={item} 
          isActive={isItemActive(item)}
        />
      ))}
    </ul>
  );
}

// ============================================================================
// Export
// ============================================================================

export default Navigation;
