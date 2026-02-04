/**
 * ============================================================================
 * PAGE CONTAINER COMPONENT
 * ============================================================================
 * 
 * Wrapper component that provides consistent horizontal padding and max-width.
 * Uses design system container tokens.
 * 
 * @version 1.0.0
 */

import React, { ReactNode, ElementType } from 'react';

// ============================================================================
// Types
// ============================================================================

interface PageContainerProps {
  children: ReactNode;
  as?: ElementType;
  size?: 'default' | 'narrow' | 'wide';
  className?: string;
}

// ============================================================================
// Component
// ============================================================================

export function PageContainer({
  children,
  as: Component = 'div',
  size = 'default',
  className = '',
}: PageContainerProps) {
  const sizeClasses: Record<string, string> = {
    default: '',
    narrow: 'page-container--narrow',
    wide: 'page-container--wide',
  };

  const classes = [
    'page-container',
    sizeClasses[size],
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes}>
      {children}
    </Component>
  );
}

// ============================================================================
// Export
// ============================================================================

export default PageContainer;
