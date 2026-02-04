/**
 * ============================================================================
 * CONTEXT SUMMARY COMPONENT
 * ============================================================================
 *
 * Resolves query params into human-readable inquiry context.
 * Uses existing data files to map slugs to names.
 *
 * @version 1.0.0
 */

'use client';

import { useSearchParams } from 'next/navigation';
import { useMemo } from 'react';
import { getBrandBySlug } from '@/data/brands-data';
import { getCategoryBySlug } from '@/data/categories-data';
import { getProductBySlug } from '@/data/products-data';
import { getProjectBySlug } from '@/data/projects-data';
import { getOutletItemBySlug } from '@/data/outlet-data';
import type { InquiryIntent } from '@/data/showroom-data';

export interface InquiryContext {
  intent: InquiryIntent;
  summary: string;
  details: {
    type: string;
    name: string;
    slug: string;
  } | null;
}

/**
 * Parse search params and resolve into inquiry context
 */
export function useInquiryContext(): InquiryContext {
  const searchParams = useSearchParams();

  return useMemo(() => {
    // Check for brand
    const brandSlug = searchParams.get('brand');
    if (brandSlug) {
      const brand = getBrandBySlug(brandSlug);
      const name = brand?.name ?? brandSlug;
      return {
        intent: 'brand' as InquiryIntent,
        summary: `Zapytanie dotyczące marki ${name}`,
        details: { type: 'Marka', name, slug: brandSlug },
      };
    }

    // Check for product
    const productSlug = searchParams.get('product');
    if (productSlug) {
      const product = getProductBySlug(productSlug);
      const name = product?.name ?? productSlug;
      return {
        intent: 'product' as InquiryIntent,
        summary: `Zapytanie o produkt: ${name}`,
        details: { type: 'Produkt', name, slug: productSlug },
      };
    }

    // Check for category
    const categorySlug = searchParams.get('category');
    if (categorySlug) {
      const category = getCategoryBySlug(categorySlug);
      const name = category?.name ?? categorySlug;
      return {
        intent: 'product' as InquiryIntent,
        summary: `Zapytanie o kategorię: ${name}`,
        details: { type: 'Kategoria', name, slug: categorySlug },
      };
    }

    // Check for project
    const projectSlug = searchParams.get('project');
    if (projectSlug) {
      const project = getProjectBySlug(projectSlug);
      const name = project?.title ?? projectSlug;
      return {
        intent: 'project' as InquiryIntent,
        summary: `Zapytanie o realizację: ${name}`,
        details: { type: 'Realizacja', name, slug: projectSlug },
      };
    }

    // Check for outlet item (supports both ?outlet= and ?item=)
    const outletSlug = searchParams.get('outlet') ?? searchParams.get('item');
    if (outletSlug) {
      const item = getOutletItemBySlug(outletSlug);
      const name = item?.title ?? outletSlug;
      return {
        intent: 'outlet' as InquiryIntent,
        summary: `Zapytanie o produkt outlet: ${name}`,
        details: { type: 'Outlet', name, slug: outletSlug },
      };
    }

    // Check for intent param
    const intentParam = searchParams.get('intent');
    if (intentParam) {
      const intentMap: Record<string, { intent: InquiryIntent; summary: string }> = {
        outlet: { intent: 'outlet', summary: 'Zapytanie o produkty outlet' },
        design: { intent: 'design', summary: 'Zapytanie o projektowanie wnętrz' },
        visit: { intent: 'visit', summary: 'Umówienie wizyty w showroomie' },
      };

      const mapped = intentMap[intentParam];
      if (mapped) {
        return {
          ...mapped,
          details: null,
        };
      }
    }

    // Default: general inquiry
    return {
      intent: 'general',
      summary: '',
      details: null,
    };
  }, [searchParams]);
}

interface ContextSummaryProps {
  readonly context: InquiryContext;
}

export default function ContextSummary({ context }: ContextSummaryProps) {
  if (!context.summary) return null;

  return (
    <div className="context-summary">
      <div className="context-summary__header">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
        <span className="context-summary__label">Kontekst zapytania</span>
      </div>
      <p className="context-summary__text">{context.summary}</p>
      {context.details && (
        <dl className="context-summary__details">
          <dt>{context.details.type}:</dt>
          <dd>{context.details.name}</dd>
        </dl>
      )}
    </div>
  );
}
