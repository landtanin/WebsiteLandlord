import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { siteConfig } from '@/lib/site-config';
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/schema';

const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/privacy', label: 'Privacy Policy' },
];

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `How ${siteConfig.tradingName} collects, uses, shares, and protects enquiry data.`,
  alternates: {
    canonical: '/privacy',
    languages: {
      'en-GB': '/privacy',
      'x-default': '/privacy',
    },
  },
};

export default function PrivacyPage() {
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${siteConfig.url}/privacy#webpage`,
        url: `${siteConfig.url}/privacy`,
        name: 'Privacy Policy',
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
          Privacy
        </p>
        <h1 className="text-4xl font-bold text-brand-primary mb-4">Privacy Policy</h1>
        <p className="text-lg text-gray-700">
          This policy explains how {siteConfig.legalEntity}, operating the trading name{' '}
          {siteConfig.tradingName}, handles personal data from this website and our advertised
          phone number.
        </p>
        <p className="mt-3 text-sm text-gray-600">Last updated: 24 May 2026</p>
      </header>

      <div className="space-y-8 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Data controller</h2>
          <p>
            The data controller is {siteConfig.legalEntity}. ICO registration number:{' '}
            {siteConfig.icoRegNumber}. You can contact us at{' '}
            <a href={`mailto:${siteConfig.email}`} className="text-brand-primary underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">What data we collect</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Name, phone number, email address if provided, postcode, property type, and message.</li>
            <li>Consent choices submitted through the enquiry form.</li>
            <li>Call metadata and call recordings where our phone system records calls.</li>
            <li>Basic technical data such as IP address, browser, device, and page activity.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">How we use enquiry data</h2>
          <p>
            We use enquiry data to respond to your request, understand your spray foam insulation
            issue, discuss next steps, and make an introduction to a removal specialist where you
            have consented to that sharing.
          </p>
        </section>

        <section className="rounded-md border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-xl font-semibold text-gray-950 mb-2">Data sharing consent</h2>
          <p>
            By submitting an enquiry, you consent to your details being shared with a removal
            specialist in your area for the purpose of providing you with a quote. You can withdraw
            consent at any time by emailing {siteConfig.email}. Until a partner specialist has been
            signed for your area, we will hold your details only as long as needed to make an
            introduction or close your enquiry.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Referral fee disclosure</h2>
          <p>
            We may receive a referral fee from a removal specialist if your introduction leads to
            completed work. This does not affect the price you pay the specialist.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Lawful basis</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Consent: sharing enquiry details with removal specialists.</li>
            <li>Legitimate interests: responding to enquiries, call handling, quality review, and lead tracking.</li>
            <li>Legal obligation: handling data rights requests and compliance records.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Call recording</h2>
          <p>
            Calls to our advertised number may be recorded for quality, training, and lead-tracking
            purposes. A recorded announcement should play before each call connects. Recordings and
            call data may be shared with partner removal specialists to facilitate your enquiry.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Processors and services</h2>
          <p>
            We may use service providers for phone routing, email, enquiry storage, hosting, and
            analytics. Planned providers include Twilio for calls, Resend or email forwarding for
            messages, Supabase for enquiry storage, Vercel for hosting, and Plausible or Vercel
            Analytics if analytics is enabled.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Retention periods</h2>
          <p>
            Enquiry data is kept only as long as needed to respond, make an introduction, manage a
            follow-up, or keep necessary business records. Call recordings, if enabled, are reviewed
            periodically and deleted when no longer needed.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Your rights</h2>
          <p>
            You can ask for access to your data, correction, deletion, restriction, portability, or
            objection where those rights apply. You can also withdraw consent for specialist sharing
            at any time by emailing {siteConfig.email}.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Cookies</h2>
          <p>
            We currently use only cookies and similar storage that are necessary for the site to
            work. If analytics is added, this policy and the cookie policy will be updated to match
            what is actually set.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Complaints</h2>
          <p>
            Please contact us first so we can investigate. You also have the right to complain to
            the Information Commissioner's Office at ico.org.uk.
          </p>
        </section>
      </div>
    </article>
  );
}
