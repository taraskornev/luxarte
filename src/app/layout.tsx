import type { Metadata } from 'next';
import { Jost } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import '@/styles/globals.css';

const jost = Jost({
  subsets: ['latin', 'latin-ext'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
  variable: '--font-jost',
});

export const metadata: Metadata = {
  title: 'LuxArte - Fashion for Home',
  description: 'Ekskluzywne meble i akcesoria domowe od najlepszych światowych marek.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={jost.variable}>
      <body className={jost.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
