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
    // Allow remote images from Hetzner media server
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '95.216.162.38',
        pathname: '/media/**',
      },
      {
        protocol: 'http',
        hostname: '95.216.162.38',
        pathname: '/catalog/**',
      },
      {
        protocol: 'http',
        hostname: '95.216.162.38',
        pathname: '/brands/**',
      },
      {
        protocol: 'http',
        hostname: '95.216.162.38',
        pathname: '/preview/**',
      },
      {
        protocol: 'http',
        hostname: '95.216.162.38',
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
  },

  // Environment variables
  env: {
    NEXT_PUBLIC_PREVIEW_BUILD: process.env.NEXT_PUBLIC_PREVIEW_BUILD || 'false',
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
