/**
 * ============================================================================
 * ERROR BOUNDARY COMPONENT
 * ============================================================================
 *
 * React Error Boundary for catching and handling runtime errors gracefully.
 * Prevents entire app crash from component-level failures.
 *
 * @version 1.0.0
 */

'use client';

import React, { Component, ReactNode, ErrorInfo } from 'react';

// ============================================================================
// Types
// ============================================================================

interface ErrorBoundaryProps {
  /** Child components to wrap */
  children: ReactNode;
  /** Fallback UI to show when an error occurs */
  fallback?: ReactNode;
  /** Optional callback when error is caught */
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  /** Component name for logging */
  componentName?: string;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

// ============================================================================
// Component
// ============================================================================

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.error(`Error in ${this.props.componentName || 'component'}:`, error, errorInfo);
    }

    // Call optional error callback
    this.props.onError?.(error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      // Use custom fallback if provided
      if (this.props.fallback) {
        return this.props.fallback;
      }

      // Default fallback UI
      return (
        <div className="error-fallback">
          <div className="error-fallback__content">
            <h2 className="error-fallback__title">Przepraszamy</h2>
            <p className="error-fallback__message">
              Wystąpił nieoczekiwany błąd. Prosimy odświeżyć stronę.
            </p>
            <button
              type="button"
              className="error-fallback__action btn btn-primary"
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
            >
              Odśwież stronę
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// ============================================================================
// Styles (inline for self-contained component)
// ============================================================================

const errorFallbackStyles = `
.error-fallback {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
  padding: var(--space-8, 2rem);
  background-color: var(--color-bg-secondary, #f8f8f6);
  border-radius: var(--radius-md, 4px);
}

.error-fallback__content {
  text-align: center;
  max-width: 400px;
}

.error-fallback__title {
  font-family: var(--font-family-heading, serif);
  font-size: var(--font-size-xl, 1.25rem);
  color: var(--color-text-heading, #1a1a1a);
  margin-bottom: var(--space-3, 0.75rem);
}

.error-fallback__message {
  color: var(--color-text-secondary, #6b6b6b);
  margin-bottom: var(--space-6, 1.5rem);
}
`;

// Inject styles on first render
if (typeof document !== 'undefined') {
  const styleId = 'error-boundary-styles';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = errorFallbackStyles;
    document.head.appendChild(style);
  }
}

// ============================================================================
// Safe Render Helper
// ============================================================================

/**
 * Safe render helper for handling potentially null/undefined values
 */
export function safeRender<T>(
  value: T | null | undefined,
  render: (value: T) => ReactNode,
  fallback: ReactNode = null
): ReactNode {
  if (value === null || value === undefined) {
    return fallback;
  }
  return render(value);
}

/**
 * Safe string helper - returns empty string for null/undefined
 */
export function safeString(value: string | null | undefined): string {
  return value ?? '';
}

/**
 * Safe array helper - returns empty array for null/undefined
 */
export function safeArray<T>(value: T[] | null | undefined): T[] {
  return value ?? [];
}
