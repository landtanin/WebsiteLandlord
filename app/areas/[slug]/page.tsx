import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ContactForm } from '@/components/contact-form';
import { FAQAccordion } from '@/components/faq-accordion';
import { PhoneCTA } from '@/components/phone-cta';
import { TLDR } from '@/components/tldr';
import { areaContent, getAreaBySlug } from '@/lib/areas';
import { siteConfig } from '@/lib/site-config';
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/schema';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return areaContent.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) return {};

  return {
    title: `Spray Foam Removal ${area.name} | Independent Guide & Specialist Matching`,
    description: `Spray foam removal guidance for ${area.name} homeowners. Free, no-obligation quote discussion and specialist introduction where appropriate.`,
    alternates: {
      canonical: `/areas/${area.slug}`,
      languages: {
        'en-GB': `/areas/${area.slug}`,
        'x-default': `/areas/${area.slug}`,
      },
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { slug } = await params;
  const area = getAreaBySlug(slug);
  if (!area) notFound();

  const breadcrumbs = [
    { href: '/', label: 'Home' },
    { href: '/areas', label: 'Areas' },
    { href: `/areas/${area.slug}`, label: area.name },
  ];

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${siteConfig.url}/areas/${area.slug}#service`,
        name: `Spray foam removal guidance in ${area.name}`,
        provider: {
          '@id': `${siteConfig.url}/#organization`,
        },
        areaServed: {
          '@type': 'City',
          name: area.name,
        },
        serviceType: 'Spray foam insulation removal guidance and specialist introduction',
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
          {area.name}
        </p>
        <h1 className="text-4xl font-bold text-brand-primary">
          Spray Foam Removal in {area.name}
        </h1>
        <p className="mt-5 text-lg text-gray-700">{area.intro}</p>
        <div className="mt-8">
          <PhoneCTA variant="large" showHours />
        </div>
      </header>

      <TLDR>
        {area.name} homeowners can call {siteConfig.phone.display} for a free conversation about
        spray foam insulation problems, survey concerns, lender questions, and the next practical
        step for the property.
      </TLDR>

      <section className="mt-10">
        <h2 className="text-3xl font-bold text-gray-950">
          Why {area.name} homeowners ask about removal
        </h2>
        <p className="mt-5 text-gray-800">
          Spray foam becomes urgent when a mortgage lender, buyer, surveyor, or solicitor asks for
          evidence. Even when there is no immediate sale, foam can make it harder to inspect roof
          timbers and ventilation. A sensible next step is usually to understand the foam type, roof
          condition, and documentation needed before making a decision.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-950">Local property types</h2>
        <ul className="mt-5 list-disc space-y-3 pl-6 text-gray-800">
          {area.propertyTypes.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-950">Local considerations</h2>
        <div className="mt-5 space-y-4 text-gray-800">
          {area.localNotes.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-950">Removal process in {area.name}</h2>
        <p className="mt-5 text-gray-800">
          The process starts with a loft survey, foam-type assessment, and photographs. If removal
          goes ahead, the loft is isolated, foam is manually removed, debris is cleared, timbers are
          checked, and completion notes are prepared. Read the full{' '}
          <Link href="/how-spray-foam-removal-works" className="text-brand-primary underline">
            spray foam removal process
          </Link>
          .
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-950">Costs in {area.name}</h2>
        <p className="mt-5 text-gray-800">
          Local prices depend on the same quote factors as the wider West Midlands: property size,
          foam type, access, timber condition, waste volume, and paperwork required. Exact public
          cost ranges will be added once UK source URLs are selected. For quote factors, see the{' '}
          <Link href="/spray-foam-removal-cost" className="text-brand-primary underline">
            spray foam removal cost guide
          </Link>
          .
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-950">{area.name} questions</h2>
        <div className="mt-6">
          <FAQAccordion
            items={area.faq.map((item) => ({
              question: item.question,
              answer: item.answer,
            }))}
          />
        </div>
      </section>

      <section className="mt-12 grid grid-cols-1 gap-8 rounded-md border border-gray-200 bg-gray-50 p-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h2 className="text-2xl font-bold text-gray-950">
            Discuss a {area.name} property
          </h2>
          <p className="mt-3 text-gray-700">
            Call {siteConfig.phone.display} or send your details. Include the postcode, property
            type, and any surveyor or lender wording if you have it.
          </p>
          <div className="mt-5">
            <PhoneCTA />
          </div>
        </div>
        <ContactForm />
      </section>
    </article>
  );
}
