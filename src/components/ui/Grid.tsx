/**
 * ============================================================================
 * GRID COMPONENT
 * ============================================================================
 * 
 * Responsive grid layout component.
 * Uses design system grid tokens (12-column, 2rem gap).
 * 
 * @version 1.0.0
 */

import React, { ReactNode, ElementType, CSSProperties } from 'react';

// ============================================================================
// Types
// ============================================================================

type GridColumns = 1 | 2 | 3 | 4 | 6 | 12;
type GridGap = 'sm' | 'md' | 'lg';

interface GridProps {
  children: ReactNode;
  as?: ElementType;
  cols?: GridColumns;
  colsMd?: GridColumns;
  colsLg?: GridColumns;
  gap?: GridGap;
  alignItems?: CSSProperties['alignItems'];
  justifyItems?: CSSProperties['justifyItems'];
  className?: string;
}

// ============================================================================
// Component
// ============================================================================

export function Grid({
  children,
  as: Component = 'div',
  cols = 1,
  colsMd,
  colsLg,
  gap = 'md',
  alignItems,
  justifyItems,
  className = '',
}: GridProps) {
  const colClasses: Record<GridColumns, string> = {
    1: '',
    2: 'grid--cols-2',
    3: 'grid--cols-3',
    4: 'grid--cols-4',
    6: 'grid--cols-6',
    12: 'grid--cols-12',
  };

  const gapClasses: Record<GridGap, string> = {
    sm: 'grid--gap-sm',
    md: '',
    lg: 'grid--gap-lg',
  };

  // For responsive columns, we'll use CSS custom properties
  const style: CSSProperties = {
    ...(alignItems && { alignItems }),
    ...(justifyItems && { justifyItems }),
  };

  // Build responsive classes
  // Note: For full responsive control, use data attributes or CSS custom properties
  const responsiveClass = colsLg 
    ? `grid--cols-${colsLg}` 
    : colsMd 
      ? `grid--cols-${colsMd}` 
      : colClasses[cols];

  const classes = [
    'grid',
    responsiveClass,
    gapClasses[gap],
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} style={Object.keys(style).length ? style : undefined}>
      {children}
    </Component>
  );
}

// ============================================================================
// Grid Item Component
// ============================================================================

interface GridItemProps {
  children: ReactNode;
  as?: ElementType;
  span?: number;
  spanMd?: number;
  spanLg?: number;
  start?: number;
  className?: string;
}

export function GridItem({
  children,
  as: Component = 'div',
  span,
  spanMd,
  spanLg,
  start,
  className = '',
}: GridItemProps) {
  const style: CSSProperties = {
    ...(span && { gridColumn: `span ${span}` }),
    ...(start && { gridColumnStart: start }),
  };

  // For responsive spans, add data attributes or inline media queries
  // This is a simplified implementation - full responsive would need CSS

  return (
    <Component 
      className={className || undefined} 
      style={Object.keys(style).length ? style : undefined}
    >
      {children}
    </Component>
  );
}

// ============================================================================
// Export
// ============================================================================

export default Grid;
