/**
 * ============================================================================
 * DYNAMIC SITEMAP - LUXARTE
 * ============================================================================
 *
 * Generates sitemap.xml dynamically including all static and dynamic routes.
 * Follows Next.js App Router sitemap convention.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 * @version 1.0.0
 */

import type { MetadataRoute } from 'next';
import { brands } from '@/data/brands-data';
import { categories } from '@/data/categories-data';
import { getAllProductSlugs } from '@/data/products-data';
import { projects } from '@/data/projects-data';
import { outletItems } from '@/data/outlet-data';
import { articles } from '@/data/knowledge-data';

const BASE_URL = 'https://www.luxarte.pl';

/**
 * Generate complete sitemap for all routes
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date().toISOString();

  // Static routes with priorities
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/brands`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/categories`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/outlet`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/interior-design-service`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/knowledge-base`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/showroom`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];

  // Dynamic brand routes
  const brandRoutes: MetadataRoute.Sitemap = brands.map((brand) => ({
    url: `${BASE_URL}/brands/${brand.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Dynamic category routes
  const categoryRoutes: MetadataRoute.Sitemap = categories.map((category) => ({
    url: `${BASE_URL}/categories/${category.slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Dynamic product routes
  const productSlugs = getAllProductSlugs();
  const productRoutes: MetadataRoute.Sitemap = productSlugs.map((slug) => ({
    url: `${BASE_URL}/products/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic project routes
  const projectRoutes: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/projects/${project.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Dynamic outlet routes
  const outletRoutes: MetadataRoute.Sitemap = outletItems.map((item) => ({
    url: `${BASE_URL}/outlet/${item.slug}`,
    lastModified: currentDate,
    changeFrequency: 'daily' as const,
    priority: 0.6,
  }));

  // Dynamic article routes
  const articleRoutes: MetadataRoute.Sitemap = articles.map((article) => ({
    url: `${BASE_URL}/knowledge-base/${article.slug}`,
    lastModified: article.publishDate || currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [
    ...staticRoutes,
    ...brandRoutes,
    ...categoryRoutes,
    ...productRoutes,
    ...projectRoutes,
    ...outletRoutes,
    ...articleRoutes,
  ];
}
