import type { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ContactForm } from '@/components/contact-form';
import { FAQAccordion } from '@/components/faq-accordion';
import { InfoBox } from '@/components/info-box';
import { PhoneCTA } from '@/components/phone-cta';
import { TLDR } from '@/components/tldr';
import { siteConfig } from '@/lib/site-config';
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/schema';

const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/how-spray-foam-removal-works', label: 'How Removal Works' },
];

export const metadata: Metadata = {
  title: 'How Spray Foam Removal Works | Step-by-Step UK Process Guide',
  description:
    'The spray foam insulation removal process explained: survey, preparation, manual extraction, disposal, roof checks, and completion documentation.',
  alternates: {
    canonical: '/how-spray-foam-removal-works',
    languages: {
      'en-GB': '/how-spray-foam-removal-works',
      'x-default': '/how-spray-foam-removal-works',
    },
  },
};

const faqs = [
  {
    question: 'Can I stay in the house during spray foam removal?',
    answer:
      'In many cases, yes. The work is normally isolated to the loft, with dust protection between the loft and living space. The survey should confirm whether your property needs any extra precautions.',
  },
  {
    question: 'Does all spray foam need removing?',
    answer:
      'Not always. The decision depends on foam type, how it was installed, lender requirements, roof condition, moisture risk, and whether you are selling or remortgaging.',
  },
  {
    question: 'How is spray foam removed from rafters?',
    answer:
      'Removal is usually manual and mechanical: cutting, scraping, and controlled separation from rafters and roof felt. Chemical shortcuts can create extra damage or residue risk.',
  },
  {
    question: 'What happens if timber damage is found?',
    answer:
      'The job may need a timber inspection, repairs, improved ventilation, or further roofing work. That should be quoted separately and documented clearly.',
  },
  {
    question: 'Will removal satisfy a mortgage lender?',
    answer:
      'That depends on the lender and the documentation they request. A completion report, photographs, and inspection notes usually help, but lender acceptance is never automatic.',
  },
];

export default function ProcessPage() {
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${siteConfig.url}/how-spray-foam-removal-works#article`,
        headline: 'How Spray Foam Insulation Removal Works',
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
        mainEntityOfPage: `${siteConfig.url}/how-spray-foam-removal-works`,
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
          Removal process
        </p>
        <h1 className="text-4xl font-bold text-brand-primary">
          How Spray Foam Insulation Removal Works
        </h1>
        <p className="mt-5 text-lg text-gray-700">
          A practical guide to the survey, preparation, removal, disposal, roof checks, and
          documentation homeowners should expect.
        </p>
        <div className="mt-8">
          <PhoneCTA showHours />
        </div>
      </header>

      <TLDR>
        Spray foam removal usually starts with a loft survey, then isolation of the work area,
        manual foam removal, waste disposal, timber checks, and completion documentation. The right
        process depends on foam type, roof condition, and lender or sale requirements.
      </TLDR>

      <section className="space-y-10 text-gray-800">
        <ProcessStep
          n={1}
          title="Initial survey and assessment"
          body="A specialist inspects the loft, identifies open-cell or closed-cell foam, checks how the foam is bonded to rafters and felt, looks for condensation or timber damage, and records photographs. This is where mortgage or sale paperwork requirements should be raised."
        />
        <ProcessStep
          n={2}
          title="Site preparation and isolation"
          body="The loft is separated from the living space, access routes are protected, and dust-control measures are put in place. Workers should use suitable PPE because removal creates dust and debris."
        />
        <ProcessStep
          n={3}
          title="Manual foam removal"
          body="Foam is normally removed by mechanical cutting, scraping, and careful separation from the roof structure. This is slow work because the aim is to remove foam without causing avoidable damage to rafters, felt, wiring, or stored items."
        />
        <ProcessStep
          n={4}
          title="Debris removal and disposal"
          body="Removed foam is bagged and cleared from the property. Waste should be handled through appropriate disposal routes, not left for household bins or council tips that will not accept it."
        />
        <ProcessStep
          n={5}
          title="Timber and roof inspection"
          body="Once the foam is off, the roof structure can be checked properly. This may reveal damp staining, rot, felt damage, blocked ventilation, or areas that need a roofer or timber specialist."
        />
        <ProcessStep
          n={6}
          title="Completion documentation"
          body="For sale or mortgage cases, documentation matters. A useful completion pack normally includes before and after photos, a summary of the work, waste notes where available, and any timber or roof inspection findings."
        />
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-950">What should you avoid?</h2>
        <div className="mt-5 space-y-5 text-gray-800">
          <p>
            Avoid DIY removal unless a qualified professional has advised otherwise. Spray foam can
            bond hard to rafters and roof felt, and rough removal can create a larger repair bill.
          </p>
          <p>
            Be cautious with chemical dissolvers or shortcuts. They can leave residue, damage roof
            materials, and may still fail to provide the documentation a lender or buyer asks for.
          </p>
        </div>
        <InfoBox variant="warning">
          Mortgage or sale problem? Keep the lender, broker, or solicitor requirements to hand
          before asking for a quote. The paperwork requested often shapes the job.
        </InfoBox>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-950">Common process questions</h2>
        <div className="mt-6">
          <FAQAccordion items={faqs} />
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 gap-8 rounded-md border border-gray-200 bg-gray-50 p-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h2 className="text-2xl font-bold text-gray-950">Want to discuss your roof?</h2>
          <p className="mt-3 text-gray-700">
            Call {siteConfig.phone.display} or send your details and we will talk through your
            property, foam type, and the next practical step.
          </p>
          <div className="mt-5">
            <PhoneCTA />
          </div>
          <p className="mt-5 text-sm text-gray-600">
            For cost factors, see the{' '}
            <Link href="/spray-foam-removal-cost" className="text-brand-primary underline">
              spray foam removal cost guide
            </Link>
            .
          </p>
        </div>
        <ContactForm />
      </section>
    </article>
  );
}

function ProcessStep({ n, title, body }: { n: number; title: string; body: string }) {
  return (
    <section className="border-l-4 border-brand-primary pl-5">
      <p className="text-sm font-semibold text-brand-accent">Step {n}</p>
      <h2 className="mt-1 text-2xl font-semibold text-gray-950">{title}</h2>
      <p className="mt-3">{body}</p>
    </section>
  );
}
