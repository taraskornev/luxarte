/**
 * ============================================================================
 * ROBOTS.TXT - LUXARTE
 * ============================================================================
 *
 * Generates robots.txt dynamically.
 * Follows Next.js App Router robots convention.
 *
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 * @version 1.0.0
 */

import type { MetadataRoute } from 'next';

const BASE_URL = 'https://www.luxarte.pl';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/static/',
          '*.json$',
          '/preview/',
          '/admin/',
          '/wp-admin/',
          '/wp-login.php',
        ],
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
