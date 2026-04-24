const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const isPreviewBuild = process.env.NEXT_PUBLIC_PREVIEW_BUILD === 'true';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Configure image optimization
  images: {
    // Enable image optimization
    formats: ['image/avif', 'image/webp'],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    // Image sizes for smaller images
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Allow remote images from Hetzner media server and WordPress source
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.luxarte.pl',
        pathname: '/wp-content/**',
      },
      {
        protocol: 'http',
        hostname: '89.167.13.229',
        pathname: '/media/**',
      },
      {
        protocol: 'http',
        hostname: '89.167.13.229',
        pathname: '/catalog/**',
      },
      {
        protocol: 'http',
        hostname: '89.167.13.229',
        pathname: '/brands/**',
      },
      {
        protocol: 'http',
        hostname: '89.167.13.229',
        pathname: '/preview/**',
      },
      {
        protocol: 'http',
        hostname: '89.167.13.229',
        pathname: '/videos/**',
      },
    ],
  },

  // Optimize fonts
  optimizeFonts: true,

  // Production optimizations
  poweredByHeader: false,

  // Enable experimental features if needed
  experimental: {
    // Optimize package imports
    optimizePackageImports: ['@/components'],
    // Inline critical CSS, lazy-load the rest (requires critters)
    optimizeCss: true,
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_PREVIEW_BUILD: process.env.NEXT_PUBLIC_PREVIEW_BUILD || 'false',
  },

  // Proxy media through Vercel HTTPS to avoid mixed-content blocking
  async rewrites() {
    return [
      { source: '/media/:path*', destination: 'http://89.167.13.229/media/:path*' },
      { source: '/catalog/:path*', destination: 'http://89.167.13.229/catalog/:path*' },
      { source: '/brands/:path*', destination: 'http://89.167.13.229/brands/:path*' },
      { source: '/preview/:path*', destination: 'http://89.167.13.229/preview/:path*' },
    ];
  },

  // Preview mode logging
  ...(isPreviewBuild && {
    onDemandEntries: {
      // Keep pages in memory for shorter time in preview
      maxInactiveAge: 15 * 1000,
      pagesBufferLength: 2,
    },
  }),
};

// Log build mode
if (isPreviewBuild) {
  console.log('\n🔍 PREVIEW BUILD MODE ENABLED');
  console.log('   - Using /preview/ image paths');
  console.log('   - Limited galleries\n');
}

module.exports = withBundleAnalyzer(nextConfig);
