/**
 * ============================================================================
 * HEADING COMPONENT
 * ============================================================================
 * 
 * Semantic heading component using design system typography scale.
 * Allows visual size to differ from semantic level.
 * 
 * @version 1.0.0
 */

import React, { ReactNode, ElementType, HTMLAttributes } from 'react';

// ============================================================================
// Types
// ============================================================================

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingSize = 'display' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  level?: HeadingLevel;
  as?: ElementType;
  size?: HeadingSize;
  children: ReactNode;
  className?: string;
}

// ============================================================================
// Component
// ============================================================================

export function Heading({
  level = 2,
  as,
  size,
  children,
  className = '',
  ...props
}: HeadingProps) {
  // Determine the HTML element
  const Component = as || (`h${level}` as ElementType);

  // Map sizes to CSS classes (from design-system.css)
  const sizeClasses: Record<HeadingSize, string> = {
    display: 'heading--display',
    h1: 'heading--1',
    h2: 'heading--2',
    h3: 'heading--3',
    h4: 'heading--4',
    h5: 'heading--5',
    h6: 'heading--6',
  };

  // Default size based on level if not specified
  const defaultSize = `h${level}` as HeadingSize;
  const resolvedSize = size || defaultSize;

  const classes = [
    'heading',
    sizeClasses[resolvedSize] || '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}

// ============================================================================
// Export
// ============================================================================

export default Heading;
