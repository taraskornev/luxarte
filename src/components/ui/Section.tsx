/**
 * ============================================================================
 * SECTION COMPONENT
 * ============================================================================
 * 
 * Section wrapper with configurable vertical padding and background.
 * Uses design system section padding tokens.
 * 
 * @version 1.0.0
 */

import React, { ReactNode, ElementType } from 'react';

// ============================================================================
// Types
// ============================================================================

type SectionPadding = 'sm' | 'md' | 'lg' | 'none';
type SectionBackground = 'default' | 'secondary' | 'tertiary' | 'dark';

interface SectionProps {
  children: ReactNode;
  as?: ElementType;
  padding?: SectionPadding;
  paddingTop?: SectionPadding;
  paddingBottom?: SectionPadding;
  background?: SectionBackground;
  id?: string;
  className?: string;
}

// ============================================================================
// Component
// ============================================================================

export function Section({
  children,
  as: Component = 'section',
  padding = 'md',
  paddingTop,
  paddingBottom,
  background = 'default',
  id,
  className = '',
}: SectionProps) {
  const paddingClasses: Record<SectionPadding, string> = {
    sm: 'section--sm',
    md: '',
    lg: 'section--lg',
    none: 'section--no-padding-top section--no-padding-bottom',
  };

  const backgroundClasses: Record<SectionBackground, string> = {
    default: '',
    secondary: 'section--bg-secondary',
    tertiary: 'section--bg-tertiary',
    dark: 'section--bg-dark',
  };

  const classes = [
    'section',
    padding !== 'md' && !paddingTop && !paddingBottom ? paddingClasses[padding] : '',
    paddingTop === 'none' ? 'section--no-padding-top' : '',
    paddingBottom === 'none' ? 'section--no-padding-bottom' : '',
    backgroundClasses[background],
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component id={id} className={classes}>
      {children}
    </Component>
  );
}

// ============================================================================
// Export
// ============================================================================

export default Section;
