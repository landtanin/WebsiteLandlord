import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { ContactForm } from '@/components/contact-form';
import { FAQAccordion } from '@/components/faq-accordion';
import { PhoneCTA } from '@/components/phone-cta';
import { TLDR } from '@/components/tldr';
import { getGuideBySlug, guideContent } from '@/lib/guides';
import { siteConfig } from '@/lib/site-config';
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/schema';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return guideContent.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.description,
    alternates: {
      canonical: `/guides/${guide.slug}`,
      languages: {
        'en-GB': `/guides/${guide.slug}`,
        'x-default': `/guides/${guide.slug}`,
      },
    },
  };
}

export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const guide = getGuideBySlug(slug);
  if (!guide) notFound();

  const breadcrumbs = [
    { href: '/', label: 'Home' },
    { href: '/guides', label: 'Guides' },
    { href: `/guides/${guide.slug}`, label: guide.title },
  ];

  const relatedGuides = guide.related
    .map((relatedSlug) => guideContent.find((item) => item.slug === relatedSlug))
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${siteConfig.url}/guides/${guide.slug}#article`,
        headline: guide.title,
        description: guide.description,
        author: {
          '@type': 'Organization',
          name: siteConfig.tradingName,
        },
        publisher: {
          '@id': `${siteConfig.url}/#organization`,
        },
        datePublished: '2026-05-25',
        dateModified: '2026-05-25',
        mainEntityOfPage: `${siteConfig.url}/guides/${guide.slug}`,
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
          Guide
        </p>
        <h1 className="text-4xl font-bold text-brand-primary">{guide.title}</h1>
        <p className="mt-5 text-lg text-gray-700">{guide.description}</p>
      </header>

      <TLDR>{guide.tldr}</TLDR>

      <div className="mt-10 space-y-10 text-gray-800">
        {guide.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-3xl font-bold text-gray-950">{section.heading}</h2>
            <div className="mt-5 space-y-4">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="mt-12">
        <h2 className="text-3xl font-bold text-gray-950">Common questions</h2>
        <div className="mt-6">
          <FAQAccordion items={guide.faqs} />
        </div>
      </section>

      {relatedGuides.length > 0 && (
        <section className="mt-12 rounded-md border border-gray-200 bg-gray-50 p-6">
          <h2 className="text-2xl font-bold text-gray-950">Related guides</h2>
          <ul className="mt-4 space-y-2">
            {relatedGuides.map((related) => (
              <li key={related.slug}>
                <Link href={`/guides/${related.slug}`} className="text-brand-primary underline">
                  {related.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}

      <section className="mt-12 grid grid-cols-1 gap-8 rounded-md border border-gray-200 bg-gray-50 p-6 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <h2 className="text-2xl font-bold text-gray-950">Need help with a Birmingham property?</h2>
          <p className="mt-3 text-gray-700">
            Call {siteConfig.phone.display} or send your details. We will talk through the property,
            the spray foam issue, and the next practical step.
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
