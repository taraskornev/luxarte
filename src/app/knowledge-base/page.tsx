/**
 * ============================================================================
 * KNOWLEDGE BASE INDEX ROUTE
 * ============================================================================
 *
 * /knowledge-base route - Expert knowledge hub.
 *
 * @route /knowledge-base
 */

import type { Metadata } from 'next';
import { knowledgeBaseIndexSeo } from '@/data/knowledge-data';
import { KnowledgeBasePage } from '@/components/knowledge';

/**
 * Page Metadata
 */
export const metadata: Metadata = {
  title: knowledgeBaseIndexSeo.title,
  description: knowledgeBaseIndexSeo.description,
  openGraph: {
    title: knowledgeBaseIndexSeo.title,
    description: knowledgeBaseIndexSeo.description,
    url: 'https://www.luxarte.pl/knowledge-base',
    siteName: 'LuxArte',
    locale: 'pl_PL',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.luxarte.pl/knowledge-base',
  },
};

/**
 * Knowledge Base Index Page
 */
export default function KnowledgeBaseRoute() {
  return <KnowledgeBasePage />;
}
