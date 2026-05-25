import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { CitationFootnote } from '@/components/citation-footnote';
import { ContactForm } from '@/components/contact-form';
import { FAQAccordion } from '@/components/faq-accordion';
import { InfoBox } from '@/components/info-box';
import { PhoneCTA } from '@/components/phone-cta';
import { TLDR } from '@/components/tldr';
import { siteConfig } from '@/lib/site-config';
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/schema';

const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/spray-foam-removal-cost', label: 'Costs' },
];

export const metadata: Metadata = {
  title: 'Spray Foam Removal Cost UK | Birmingham Price Guide',
  description:
    'What affects spray foam insulation removal cost in Birmingham: property size, foam type, access, timber condition, disposal, and documentation.',
  alternates: {
    canonical: '/spray-foam-removal-cost',
    languages: {
      'en-GB': '/spray-foam-removal-cost',
      'x-default': '/spray-foam-removal-cost',
    },
  },
};

const faqs = [
  {
    question: 'Why is there no fixed price on this page yet?',
    answer:
      'Exact public ranges need named UK source URLs before launch. Until those sources are selected, this page explains the factors that change a real quote without presenting unsupported prices.',
  },
  {
    question: 'What usually changes the price the most?',
    answer:
      'Loft size, foam type, bonding strength, timber condition, access, waste volume, and the documentation needed for a sale or mortgage case usually have the biggest effect.',
  },
  {
    question: 'Is closed-cell foam more expensive to remove?',
    answer:
      'It often can be because it is denser and can bond more aggressively to the roof structure. A survey should confirm the foam type before any quote is treated as reliable.',
  },
  {
    question: 'Can a quote change after the work starts?',
    answer:
      'It can if hidden timber damage, roof-felt damage, access issues, or disposal requirements appear after the foam is opened up. Ask what is included and what would count as extra work.',
  },
  {
    question: 'Do I need documentation after removal?',
    answer:
      'If you are selling, remortgaging, or dealing with a lender query, documentation is important. Ask what photographs, inspection notes, waste records, and completion paperwork will be provided.',
  },
];

export default function CostPage() {
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${siteConfig.url}/spray-foam-removal-cost#article`,
        headline: 'Spray Foam Removal Cost in Birmingham',
        description: metadata.description,
        author: {
          '@type': 'Organization',
          name: siteConfig.tradingName,
        },
        publisher: {
          '@id': `${siteConfig.url}/#organization`,
        },
        datePublished: '2026-05-25',
        dateModified: '2026-05-25',
        mainEntityOfPage: `${siteConfig.url}/spray-foam-removal-cost`,
      },
      breadcrumbJsonLd(breadcrumbs),
    ],
  };

  return (
    <article className="mx-auto max-w-4xl px-6 py-12">
      <Breadcrumbs items={breadcrumbs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(pageJsonLd)} />

      <header className="mb-10">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-accent">
          Cost guide
        </p>
        <h1 className="text-4xl font-bold text-brand-primary">
          Spray Foam Removal Cost in Birmingham
        </h1>
        <p className="mt-5 text-lg text-gray-700">
          A practical guide to the quote factors that affect spray foam insulation removal costs in
          Birmingham and the West Midlands.
        </p>
        <div className="mt-8">
          <PhoneCTA showHours />
        </div>
      </header>

      <TLDR>
        Spray foam removal cost depends on the property, foam type, access, timber condition, waste
        volume, and documentation required. Exact public cost ranges will be added once named UK
        sources are selected. For a property-specific quote, call {siteConfig.phone.display}.
      </TLDR>

      <section className="mt-10">
        <h2 className="text-3xl font-bold text-gray-950">What changes the quote?</h2>
        <div className="mt-6 overflow-hidden rounded-md border border-gray-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-gray-100 text-gray-950">
              <tr>
                <th className="px-4 py-3 font-semibold">Factor</th>
                <th className="px-4 py-3 font-semibold">How it affects cost</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                ['Property and loft size', 'Larger roof areas mean more removal time, more bags, and more disposal.'],
                ['Foam type', 'Closed-cell foam is usually denser and slower to separate than softer open-cell foam.'],
                ['Bonding strength', 'Foam bonded tightly to rafters or felt takes longer to remove carefully.'],
                ['Roof condition', 'Rot, damp, damaged felt, or blocked ventilation can add inspection and repair work.'],
                ['Access', 'Small hatches, awkward loft layouts, low headroom, and parking constraints all slow the job.'],
                ['Documentation', 'Mortgage and sale cases may need stronger photo evidence and written completion notes.'],
              ].map(([factor, detail]) => (
                <tr key={factor}>
                  <td className="px-4 py-3 font-medium text-gray-950">{factor}</td>
                  <td className="px-4 py-3 text-gray-700">{detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-950">UK cost ranges</h2>
        <p className="mt-4 text-gray-800">
          This page intentionally does not publish exact public ranges yet. Those figures need named
          UK sources such as Which?, MoneySavingExpert, RICS, BBC, or another credible UK source
          before launch.
          <CitationFootnote n={1} />
        </p>
        <InfoBox>
          Once the source URLs are selected, this section should become a property-type table with
          numbered citations and a source list at the foot of the page.
        </InfoBox>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-950">What is usually included?</h2>
        <ul className="mt-5 list-disc space-y-3 pl-6 text-gray-800">
          <li>Initial discussion and property details.</li>
          <li>Loft survey and foam-type assessment.</li>
          <li>Manual removal of foam from the affected roof structure.</li>
          <li>Bagging and disposal of removed foam.</li>
          <li>Photographs and completion documentation.</li>
          <li>Notes on visible timber, ventilation, or roof-felt concerns.</li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-950">What might cost extra?</h2>
        <div className="mt-5 space-y-5 text-gray-800">
          <p>
            Timber repairs, replacement insulation, roof-felt repairs, scaffold, specialist waste
            handling, or follow-up inspection can sit outside the basic removal quote. Ask for a
            written quote that separates removal from repair work.
          </p>
          <p>
            If your lender or buyer has asked for specific documentation, raise that before the
            survey. The required paperwork can change what needs to be inspected and photographed.
          </p>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-950">Cost questions</h2>
        <div className="mt-6">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 gap-8 rounded-md border border-gray-200 bg-gray-50 p-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h2 className="text-2xl font-bold text-gray-950">Get a property-specific quote</h2>
          <p className="mt-3 text-gray-700">
            Call {siteConfig.phone.display} or send your details. We will talk through the property,
            foam type, access, and any mortgage or sale deadline.
          </p>
          <div className="mt-5">
            <PhoneCTA />
          </div>
          <p className="mt-5 text-sm text-gray-600">
            For the removal sequence, see{' '}
            <Link href="/how-spray-foam-removal-works" className="text-brand-primary underline">
              how spray foam removal works
            </Link>
            .
          </p>
        </div>
        <ContactForm />
      </section>

      <section className="mt-10 text-sm text-gray-600">
        <h2 className="text-base font-semibold text-gray-950">Sources</h2>
        <p className="mt-2">
          <sup>[1]</sup> Source slot reserved for UK cost evidence. Add source URLs before exact
          public cost ranges are published.
        </p>
      </section>
    </article>
  );
}
