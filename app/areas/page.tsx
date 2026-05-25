import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { PhoneCTA } from '@/components/phone-cta';
import { siteConfig } from '@/lib/site-config';
import { areaContent } from '@/lib/areas';
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/schema';

const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/areas', label: 'Areas' },
];

export const metadata: Metadata = {
  title: 'Spray Foam Removal Service Areas | Birmingham & West Midlands',
  description: `Spray foam removal guidance and specialist introductions across ${siteConfig.serviceAreas.join(', ')} and the surrounding West Midlands.`,
  alternates: {
    canonical: '/areas',
    languages: {
      'en-GB': '/areas',
      'x-default': '/areas',
    },
  },
};

export default function AreasPage() {
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        '@id': `${siteConfig.url}/areas#itemlist`,
        name: 'Spray Foam Removal Service Areas',
        itemListElement: areaContent.map((area, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: area.name,
          url: `${siteConfig.url}/areas/${area.slug}`,
        })),
      },
      breadcrumbJsonLd(breadcrumbs),
    ],
  };

  return (
    <article className="mx-auto max-w-6xl px-6 py-12">
      <Breadcrumbs items={breadcrumbs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(pageJsonLd)} />

      <header className="max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-accent">
          Service areas
        </p>
        <h1 className="text-4xl font-bold text-brand-primary">
          Spray Foam Removal Service Areas
        </h1>
        <p className="mt-5 text-lg text-gray-700">
          Spray foam removal guidance and specialist introductions across Birmingham, Solihull,
          Sutton Coldfield, Wolverhampton, Dudley, and nearby West Midlands postcodes.
        </p>
        <div className="mt-8">
          <PhoneCTA showHours />
        </div>
      </header>

      <section className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {areaContent.map((area) => (
          <Link
            key={area.slug}
            href={`/areas/${area.slug}`}
            className="rounded-md border border-gray-200 bg-white p-5 shadow-sm hover:border-brand-primary"
          >
            <h2 className="text-xl font-semibold text-brand-primary">{area.name}</h2>
            <p className="mt-3 text-sm text-gray-700">{area.blurb}</p>
            <p className="mt-4 text-sm font-semibold text-brand-primary">
              Spray foam removal in {area.name}
            </p>
          </Link>
        ))}
      </section>

      <section className="mt-12 rounded-md border border-gray-200 bg-gray-50 p-6">
        <h2 className="text-2xl font-semibold text-gray-950">Do we cover your postcode?</h2>
        <p className="mt-3 text-gray-700">
          If you are within roughly 30 miles of Birmingham city centre, call anyway. We will ask for
          your postcode, property type, and what prompted the enquiry, then tell you whether we can
          help.
        </p>
      </section>
    </article>
  );
}
