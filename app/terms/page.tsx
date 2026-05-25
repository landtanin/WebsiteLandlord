import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { siteConfig } from '@/lib/site-config';
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/schema';

const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/terms', label: 'Terms' },
];

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms for using ${siteConfig.tradingName}, a Birmingham spray foam information and enquiry-routing website.`,
  alternates: {
    canonical: '/terms',
    languages: {
      'en-GB': '/terms',
      'x-default': '/terms',
    },
  },
};

export default function TermsPage() {
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${siteConfig.url}/terms#webpage`,
        url: `${siteConfig.url}/terms`,
        name: 'Terms of Service',
        description: metadata.description,
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
          Terms
        </p>
        <h1 className="text-4xl font-bold text-brand-primary mb-4">Terms of Service</h1>
        <p className="text-lg text-gray-700">
          These terms apply when you use {siteConfig.tradingName}, contact us, or submit an enquiry
          through this website.
        </p>
        <p className="mt-3 text-sm text-gray-600">Last updated: 24 May 2026</p>
      </header>

      <div className="space-y-8 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Who operates this site</h2>
          <p>
            {siteConfig.tradingName} is operated by {siteConfig.legalEntity}. Company number:{' '}
            {siteConfig.companyNumber}. Contact email:{' '}
            <a href={`mailto:${siteConfig.email}`} className="text-brand-primary underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Information on this site</h2>
          <p>
            The content is general information for UK homeowners, with a Birmingham and West
            Midlands focus. It is not legal, financial, surveying, structural, or mortgage advice.
            You should take advice from an appropriately qualified professional before making a
            decision about your property.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Enquiries and introductions</h2>
          <p>
            When you call or submit a form, we may discuss your situation and, with your consent,
            pass your details to a suitable removal specialist. You decide whether to speak with
            that specialist, request a survey, accept a quote, or proceed with work.
          </p>
        </section>

        <section className="rounded-md border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-xl font-semibold text-gray-950 mb-2">Specialist contracts</h2>
          <p>
            Any contract for survey, removal, inspection, repair, certification, or related work is
            between you and the specialist who provides that service. You should check their quote,
            credentials, insurance, terms, and cancellation rights before agreeing to work.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Prices and availability</h2>
          <p>
            Any cost ranges on this site are general UK industry ranges or cited examples, not a
            firm offer from {siteConfig.tradingName}. Your final quote depends on property size,
            foam type, access, timber condition, waste disposal, and the specialist's own pricing.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Your responsibilities</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Provide accurate details when submitting an enquiry.</li>
            <li>Check any specialist's quote, documents, and suitability before proceeding.</li>
            <li>Do not rely on this site as a substitute for property-specific professional advice.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Liability</h2>
          <p>
            We take care to keep the site accurate and useful, but we do not guarantee that every
            page is complete, current, or suitable for your specific property. Nothing in these
            terms limits liability that cannot be limited under UK law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Changes to these terms</h2>
          <p>
            We may update these terms as the site, enquiry process, or partner model changes. The
            latest version will be published on this page.
          </p>
        </section>
      </div>
    </article>
  );
}
