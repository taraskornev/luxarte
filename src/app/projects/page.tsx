/**
 * ============================================================================
 * PROJECTS INDEX PAGE
 * ============================================================================
 *
 * Route: /projects
 * Purpose: Portfolio overview with filterable project grid
 */

import type { Metadata } from 'next';
import { ProjectsPage } from '@/components/projects';
import { projectsIndexSeo } from '@/data/projects-data';
import '@/styles/projects.css';

export const metadata: Metadata = {
  title: projectsIndexSeo.title,
  description: projectsIndexSeo.description,
  openGraph: {
    title: projectsIndexSeo.title,
    description: projectsIndexSeo.description,
    type: 'website',
    locale: 'pl_PL',
    siteName: 'LuxArte',
    url: '/projects',
  },
  twitter: {
    card: 'summary_large_image',
    title: projectsIndexSeo.title,
    description: projectsIndexSeo.description,
  },
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsRoute(): JSX.Element {
  return <ProjectsPage />;
}
