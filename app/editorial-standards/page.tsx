import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { siteConfig } from '@/lib/site-config';
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/schema';

const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/editorial-standards', label: 'Editorial Standards' },
];

export const metadata: Metadata = {
  title: 'Editorial Standards',
  description: `${siteConfig.tradingName} explains how spray foam removal guides are researched, reviewed, updated, and corrected.`,
  alternates: {
    canonical: '/editorial-standards',
    languages: {
      'en-GB': '/editorial-standards',
      'x-default': '/editorial-standards',
    },
  },
};

export default function EditorialStandardsPage() {
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'AboutPage',
        '@id': `${siteConfig.url}/editorial-standards#webpage`,
        url: `${siteConfig.url}/editorial-standards`,
        name: 'Editorial Standards',
        description: metadata.description,
        publisher: {
          '@id': `${siteConfig.url}/#organization`,
        },
      },
      breadcrumbJsonLd(breadcrumbs),
    ],
  };

  return (
    <article className="mx-auto max-w-4xl px-6 py-12">
      <Breadcrumbs items={breadcrumbs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(pageJsonLd)} />

      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-accent mb-3">
          Editorial standards
        </p>
        <h1 className="text-4xl font-bold text-brand-primary mb-4">Editorial Standards</h1>
        <p className="text-lg text-gray-700">
          Our goal is to publish practical, plain-English guidance for Birmingham homeowners making
          decisions about spray foam insulation problems.
        </p>
      </header>

      <div className="space-y-8 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">How we research guides</h2>
          <p>
            We prioritise primary and authoritative UK sources, including RICS guidance, PAS 2035
            retrofit standards, HSE material, lender policy pages, government guidance, and named UK
            consumer sources. Numeric claims are either cited, hedged, or removed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Who writes the content</h2>
          <p>
            Content is written and maintained for {siteConfig.tradingName}. Pages are reviewed
            against the source and substantiation rules before publication.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Who reviews it</h2>
          <p>
            Pages are checked for clarity, source quality, and compliance with the site's
            substantiation rules before publication. Technical review credits will be added when a
            qualified removal or retrofit partner is signed and has reviewed a page.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Update cadence</h2>
          <p>
            Commercial and guide pages are reviewed at least quarterly, and sooner when UK lender
            guidance, RICS material, PAS 2035 references, or relevant consumer guidance changes.
            Dates are shown on long-form guides once those guides are published.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Corrections policy</h2>
          <p>
            If a page is unclear, out of date, or missing a source, contact us at{' '}
            <a href={`mailto:${siteConfig.email}`} className="text-brand-primary underline">
              {siteConfig.email}
            </a>
            . We review corrections promptly and update the page where a change is warranted.
          </p>
        </section>

        <section className="rounded-md border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-xl font-semibold text-gray-950 mb-2">Commercial disclosure</h2>
          <p>
            The site is free for homeowners to use. We may receive a referral fee when an
            introduction to a removal specialist leads to completed work. That does not change the
            editorial standard for source quality or the guidance we publish.
          </p>
        </section>

        <p>
          For the business model and company details, see{' '}
          <Link href="/about" className="text-brand-primary underline">
            About {siteConfig.tradingName}
          </Link>
          .
        </p>
      </div>
    </article>
  );
}
