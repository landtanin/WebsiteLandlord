import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { PhoneCTA } from '@/components/phone-cta';
import { guideContent } from '@/lib/guides';
import { siteConfig } from '@/lib/site-config';
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/schema';

const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/guides', label: 'Guides' },
];

export const metadata: Metadata = {
  title: 'Spray Foam Removal Guides',
  description:
    'Plain-English UK guides on spray foam mortgage problems, RICS guidance, health risks, removal timing, DIY risks, grants, and selling a house with spray foam.',
  alternates: {
    canonical: '/guides',
    languages: {
      'en-GB': '/guides',
      'x-default': '/guides',
    },
  },
};

export default function GuidesPage() {
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'CollectionPage',
        '@id': `${siteConfig.url}/guides#webpage`,
        url: `${siteConfig.url}/guides`,
        name: 'Spray Foam Removal Guides',
        hasPart: guideContent.map((guide) => ({
          '@type': 'Article',
          headline: guide.title,
          url: `${siteConfig.url}/guides/${guide.slug}`,
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
          Guides
        </p>
        <h1 className="text-4xl font-bold text-brand-primary">Spray Foam Removal Guides</h1>
        <p className="mt-5 text-lg text-gray-700">
          Plain-English guides for homeowners dealing with mortgage problems, survey questions,
          roof concerns, removal timing, costs, grants, and selling a property with spray foam.
        </p>
        <div className="mt-8">
          <PhoneCTA showHours />
        </div>
      </header>

      <section className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
        {guideContent.map((guide) => (
          <Link
            key={guide.slug}
            href={`/guides/${guide.slug}`}
            className="rounded-md border border-gray-200 bg-white p-5 shadow-sm hover:border-brand-primary"
          >
            <h2 className="text-xl font-semibold text-brand-primary">{guide.title}</h2>
            <p className="mt-3 text-sm text-gray-700">{guide.description}</p>
          </Link>
        ))}
      </section>
    </article>
  );
}
