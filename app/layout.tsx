import type { Metadata } from 'next';
import { siteConfig } from '@/lib/site-config';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Spray Foam Removal Birmingham | Get a Free Quote — Call Us Today',
    template: `%s | ${siteConfig.tradingName}`,
  },
  description: `Spray foam insulation removal in Birmingham and the West Midlands. Free quote, no obligation. Call ${siteConfig.phone.display} to discuss your property.`,
  alternates: {
    canonical: '/',
    languages: {
      'en-GB': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: siteConfig.url,
    siteName: siteConfig.tradingName,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
