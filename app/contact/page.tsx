import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ContactForm } from '@/components/contact-form';
import { PhoneCTA } from '@/components/phone-cta';
import { TrustSignals } from '@/components/trust-signals';
import { siteConfig } from '@/lib/site-config';
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/schema';

const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/contact', label: 'Contact' },
];

export const metadata: Metadata = {
  title: 'Contact Birmingham Spray Foam Removal | Free Guidance',
  description: `Free, no-obligation enquiry on spray foam insulation in Birmingham. Call ${siteConfig.phone.display} or send your property details.`,
  alternates: {
    canonical: '/contact',
    languages: {
      'en-GB': '/contact',
      'x-default': '/contact',
    },
  },
};

export default function ContactPage() {
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ContactPage',
        '@id': `${siteConfig.url}/contact#webpage`,
        url: `${siteConfig.url}/contact`,
        name: 'Contact Birmingham Spray Foam Removal',
        description: metadata.description,
      },
      breadcrumbJsonLd(breadcrumbs),
    ],
  };

  return (
    <article className="mx-auto max-w-6xl px-6 py-12">
      <Breadcrumbs items={breadcrumbs} />
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(pageJsonLd)} />

      <header className="mb-10 max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-brand-accent">
          Contact
        </p>
        <h1 className="text-4xl font-bold text-brand-primary">
          Get Free Spray Foam Removal Guidance
        </h1>
        <p className="mt-5 text-lg text-gray-700">
          Call us or send your details. We will talk through the property, foam type, mortgage or
          sale pressure, and the next practical step.
        </p>
      </header>

      <section className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <div className="rounded-md border border-gray-200 bg-gray-50 p-6">
            <h2 className="text-2xl font-semibold text-gray-950">Call us</h2>
            <p className="mt-3 text-gray-700">
              Phone is the fastest route if a sale, remortgage, or survey deadline is driving the
              enquiry.
            </p>
            <div className="mt-5">
              <PhoneCTA variant="large" showHours />
            </div>
            <p className="mt-5 text-sm text-gray-600">
              Calls may be recorded once call tracking is live. The phone number is currently a
              placeholder until the Twilio number is added.
            </p>
          </div>

          <div className="mt-8">
            <TrustSignals />
          </div>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-950">What happens next?</h2>
            <ol className="mt-5 space-y-4 text-gray-800">
              <li>
                <strong>1. You call or fill in the form.</strong> There is no charge and no
                obligation.
              </li>
              <li>
                <strong>2. We talk through your situation.</strong> We ask what has happened, what
                type of property it is, and whether a lender, buyer, or surveyor is involved.
              </li>
              <li>
                <strong>3. We discuss the next step.</strong> If a survey or quote makes sense,
                your details can be shared with a removal specialist with your consent.
              </li>
            </ol>
          </section>
        </div>

        <div className="rounded-md border border-gray-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-950">Send your details</h2>
          <p className="mt-2 text-sm text-gray-600">
            The consent box is required before the form can be sent.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="mt-12 rounded-md border border-gray-200 bg-gray-50 p-6">
        <h2 className="text-2xl font-semibold text-gray-950">Service area</h2>
        <p className="mt-3 text-gray-700">
          We cover {siteConfig.serviceAreas.join(', ')} and surrounding West Midlands postcodes.
          If you are outside this list but not too far, it may be worth a call anyway and we will
          let you know whether we are able to help.
        </p>
      </section>
    </article>
  );
}
