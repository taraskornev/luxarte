import type { Metadata } from 'next';
import { headers } from 'next/headers';
import { Jost } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ScrollAnimationProvider } from '@/components/ScrollAnimationProvider';
import { getAlternateRoute, type Locale } from '@/i18n';
import '@/styles/globals.css';

const jost = Jost({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--font-jost',
});

export async function generateMetadata(): Promise<Metadata> {
  const headersList = await headers();
  const locale = (headersList.get('x-locale') || 'pl') as Locale;
  const pathname = headersList.get('x-pathname') || '/';
  const baseUrl = 'https://www.luxarte.pl';
  const alternate = getAlternateRoute(pathname, locale);

  return {
    title: 'LuxArte - Fashion for Home',
    description: locale === 'en'
      ? 'Exclusive furniture and home accessories from the world\'s finest brands.'
      : 'Ekskluzywne meble i akcesoria domowe od najlepszych światowych marek.',
    alternates: {
      canonical: `${baseUrl}${pathname}`,
      languages: {
        'pl': `${baseUrl}${locale === 'pl' ? pathname : alternate}`,
        'en': `${baseUrl}${locale === 'en' ? pathname : alternate}`,
      },
    },
    icons: {
      icon: '/favicon.ico',
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const locale = (headersList.get('x-locale') || 'pl') as Locale;

  return (
    <html lang={locale} className={jost.variable}>
      <body className={jost.className}>
        <ScrollAnimationProvider>
          <Header locale={locale} />
          <main>{children}</main>
          <Footer locale={locale} />
        </ScrollAnimationProvider>
      </body>
    </html>
  );
}
