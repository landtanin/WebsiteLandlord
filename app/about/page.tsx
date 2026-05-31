import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { siteConfig } from '@/lib/site-config';
import { breadcrumbJsonLd, jsonLdScript, organizationJsonLd } from '@/lib/schema';

const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
];

export const metadata: Metadata = {
  title: 'About Us | Independent Birmingham Spray Foam Resource',
  description: 'Independent Birmingham-focused information resource on spray foam insulation removal. We connect homeowners with local removal specialists.',
  alternates: {
    canonical: '/about',
    languages: {
      'en-GB': '/about',
      'x-default': '/about',
    },
  },
};

export default function AboutPage() {
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      organizationJsonLd(),
      {
        '@type': 'AboutPage',
        '@id': `${siteConfig.url}/about#webpage`,
        url: `${siteConfig.url}/about`,
        name: `About ${siteConfig.tradingName}`,
        description: metadata.description,
        isPartOf: {
          '@id': `${siteConfig.url}/#website`,
        },
        about: {
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
          About us
        </p>
        <h1 className="text-4xl font-bold text-brand-primary mb-4">
          About {siteConfig.tradingName}
        </h1>
        <p className="text-lg text-gray-700">
          {siteConfig.tradingName} is a Birmingham-focused information resource for homeowners
          dealing with spray foam insulation problems.
        </p>
      </header>

      <div className="space-y-8 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Who runs the site?</h2>
          <p>
            The site is published under the trading name {siteConfig.tradingName}. It exists to help
            Birmingham homeowners understand spray foam insulation problems and decide what to do
            next.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">What we do</h2>
          <p>
            We help Birmingham homeowners with spray foam insulation problems by combining
            plain-English guidance with introductions to local removal specialists. We may receive a
            referral fee when introductions lead to completed work - the information on this site
            stays free either way.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Why we built it</h2>
          <p>
            Spray foam information online is often written by removal companies selling their own
            service. There is room for a Birmingham-focused resource that explains the problem first:
            mortgage concerns, surveyor questions, possible roof damage, and the practical steps a
            homeowner can take next.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Site details</h2>
          <dl className="grid grid-cols-1 gap-4 rounded-md border border-gray-200 bg-gray-50 p-6 sm:grid-cols-2">
            <div>
              <dt className="font-semibold text-gray-950">Trading name</dt>
              <dd>{siteConfig.tradingName}</dd>
            </div>
            <div>
              <dt className="font-semibold text-gray-950">Contact</dt>
              <dd>{siteConfig.email}</dd>
            </div>
          </dl>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">How our content is handled</h2>
          <p>
            Our editorial process is documented separately: how topics are researched, which sources
            we use, how often pages are reviewed, and how corrections are handled.
          </p>
          <Link href="/editorial-standards" className="mt-3 inline-block text-brand-primary underline">
            Read our editorial standards
          </Link>
        </section>

        <section className="rounded-md border border-gray-200 bg-white p-6">
          <h2 className="text-xl font-semibold text-gray-950 mb-2">Partner with us</h2>
          <p>
            Are you a Birmingham spray foam removal specialist?{' '}
            <Link href="/contact" className="text-brand-primary underline">
              Contact us
            </Link>{' '}
            to discuss local enquiries.
          </p>
        </section>
      </div>
    </article>
  );
}
