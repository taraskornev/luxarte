/**
 * ============================================================================
 * TEXT COMPONENT
 * ============================================================================
 * 
 * Body text component with size variants and semantic element options.
 * Uses design system typography tokens.
 * 
 * @version 1.0.0
 */

import React, { ReactNode, ElementType, HTMLAttributes } from 'react';

// ============================================================================
// Types
// ============================================================================

type TextSize = 'xs' | 'sm' | 'base' | 'lg' | 'xl';
type TextWeight = 'normal' | 'medium' | 'semibold' | 'bold';
type TextColor = 'primary' | 'secondary' | 'accent' | 'inverse' | 'inherit';

interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  size?: TextSize;
  weight?: TextWeight;
  color?: TextColor;
  children: ReactNode;
  className?: string;
}

// ============================================================================
// Component
// ============================================================================

export function Text({
  as: Component = 'p',
  size = 'base',
  weight,
  color,
  children,
  className = '',
  ...props
}: TextProps) {
  const sizeClasses: Record<TextSize, string> = {
    xs: 'text--xs',
    sm: 'text--sm',
    base: '',
    lg: 'text--lg',
    xl: 'text--xl',
  };

  const weightClasses: Record<TextWeight, string> = {
    normal: 'text--weight-normal',
    medium: 'text--weight-medium',
    semibold: 'text--weight-semibold',
    bold: 'text--weight-bold',
  };

  const colorClasses: Record<TextColor, string> = {
    primary: '',
    secondary: 'text--secondary',
    accent: 'text--accent',
    inverse: 'text--inverse',
    inherit: 'text--inherit',
  };

  const classes = [
    'text',
    sizeClasses[size],
    weight ? weightClasses[weight] : '',
    color ? colorClasses[color] : '',
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

export default Text;
