/**
 * ============================================================================
 * BUTTON COMPONENT
 * ============================================================================
 * 
 * Versatile button component mapping to design system button styles.
 * Supports primary, outline, ghost variants and size modifiers.
 * 
 * @version 1.0.0
 */

import React, { ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';

// ============================================================================
// Types
// ============================================================================

type ButtonVariant = 'primary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    as?: 'button';
    href?: never;
  };

type ButtonAsLink = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    as: 'a';
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

// ============================================================================
// Component
// ============================================================================

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  children,
  ...props
}: ButtonProps) {
  const variantClasses: Record<ButtonVariant, string> = {
    primary: 'btn-primary',
    outline: 'btn-outline',
    ghost: 'btn-ghost',
  };

  const sizeClasses: Record<ButtonSize, string> = {
    sm: 'btn-sm',
    md: '',
    lg: 'btn-lg',
  };

  const classes = [
    'btn',
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? 'w-full' : '',
    className,
  ].filter(Boolean).join(' ');

  if (props.as === 'a') {
    const { as, ...linkProps } = props;
    return (
      <a className={classes} {...linkProps}>
        {children}
      </a>
    );
  }

  const { as, ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

// ============================================================================
// Export
// ============================================================================

export default Button;
