import Link from 'next/link';
import { siteConfig } from '@/lib/site-config';

const NAV_ITEMS = [
  { href: '/', label: 'Home' },
  { href: '/how-spray-foam-removal-works', label: 'How Removal Works' },
  { href: '/areas', label: 'Areas' },
  { href: '/spray-foam-removal-cost', label: 'Costs' },
  { href: '/contact', label: 'Contact' },
  { href: '/about', label: 'About' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 min-w-0">
          <Link href="/" className="font-bold text-base sm:text-lg text-brand-primary truncate">
            <span className="sm:hidden">{siteConfig.tradingNameShort}</span>
            <span className="hidden sm:inline">{siteConfig.tradingName}</span>
          </Link>
          <span className="hidden lg:inline text-xs text-gray-500 whitespace-nowrap">
            Birmingham &amp; West Midlands
          </span>
        </div>

        <nav className="hidden md:flex items-center gap-5 text-sm">
          {NAV_ITEMS.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-brand-primary whitespace-nowrap"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={`tel:${siteConfig.phone.tel}`}
          className="inline-flex items-center gap-2 rounded-md bg-brand-accent px-3 py-2 sm:px-4 text-white font-semibold text-sm sm:text-base hover:bg-orange-600 transition-colors whitespace-nowrap"
          aria-label={`Call ${siteConfig.phone.display}`}
        >
          <span aria-hidden>📞</span>
          <span>{siteConfig.phone.display}</span>
        </a>
      </div>
    </header>
  );
}
