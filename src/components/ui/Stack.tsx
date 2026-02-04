/**
 * ============================================================================
 * STACK COMPONENT
 * ============================================================================
 * 
 * Vertical or horizontal flex layout with consistent spacing.
 * Uses design system spacing tokens.
 * 
 * @version 1.0.0
 */

import React, { ReactNode, ElementType, CSSProperties } from 'react';

// ============================================================================
// Types
// ============================================================================

type StackGap = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none';
type StackDirection = 'vertical' | 'horizontal';
type StackAlign = 'start' | 'center' | 'end' | 'stretch';
type StackJustify = 'start' | 'center' | 'end' | 'between' | 'around';

interface StackProps {
  children: ReactNode;
  as?: ElementType;
  direction?: StackDirection;
  gap?: StackGap;
  align?: StackAlign;
  justify?: StackJustify;
  wrap?: boolean;
  className?: string;
}

// ============================================================================
// Component
// ============================================================================

export function Stack({
  children,
  as: Component = 'div',
  direction = 'vertical',
  gap = 'md',
  align,
  justify,
  wrap = false,
  className = '',
}: StackProps) {
  const gapClasses: Record<StackGap, string> = {
    xs: 'stack--gap-xs',
    sm: 'stack--gap-sm',
    md: 'stack--gap-md',
    lg: 'stack--gap-lg',
    xl: 'stack--gap-xl',
    none: '',
  };

  const alignMap: Record<StackAlign, CSSProperties['alignItems']> = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    stretch: 'stretch',
  };

  const justifyMap: Record<StackJustify, CSSProperties['justifyContent']> = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    between: 'space-between',
    around: 'space-around',
  };

  const style: CSSProperties = {
    ...(direction === 'horizontal' && { flexDirection: 'row' }),
    ...(align && { alignItems: alignMap[align] }),
    ...(justify && { justifyContent: justifyMap[justify] }),
    ...(wrap && { flexWrap: 'wrap' }),
    ...(gap === 'none' && { gap: 0 }),
  };

  const classes = [
    'stack',
    gap !== 'none' && gap !== 'md' ? gapClasses[gap] : '',
    align === 'center' && !justify ? 'stack--center' : '',
    className,
  ].filter(Boolean).join(' ');

  return (
    <Component className={classes} style={Object.keys(style).length ? style : undefined}>
      {children}
    </Component>
  );
}

// ============================================================================
// Export
// ============================================================================

export default Stack;
