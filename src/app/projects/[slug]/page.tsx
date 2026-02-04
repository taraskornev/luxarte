/**
 * ============================================================================
 * PROJECT DETAIL PAGE
 * ============================================================================
 *
 * Route: /projects/[slug]
 * Purpose: Individual project portfolio page
 */

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectPage } from '@/components/projects';
import { getProjectBySlug, getAllProjectSlugs } from '@/data/projects-data';
import '@/styles/projects.css';

interface ProjectRouteProps {
  readonly params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: 'Projekt nie znaleziony | LuxArte',
      description: 'Żądany projekt nie został znaleziony.',
    };
  }

  return {
    title: project.seo.title,
    description: project.seo.description,
    openGraph: {
      title: project.seo.title,
      description: project.seo.description,
      type: 'article',
      locale: 'pl_PL',
      siteName: 'LuxArte',
      url: `/projects/${project.slug}`,
      images: [
        {
          url: project.heroImage.src,
          alt: project.heroImage.alt,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: project.seo.title,
      description: project.seo.description,
      images: [project.heroImage.src],
    },
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
  };
}

export default async function ProjectRoute({
  params,
}: ProjectRouteProps): Promise<JSX.Element> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectPage project={project} />;
}
