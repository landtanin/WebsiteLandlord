import type { Metadata } from 'next';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { siteConfig } from '@/lib/site-config';
import { breadcrumbJsonLd, jsonLdScript } from '@/lib/schema';

const breadcrumbs = [
  { href: '/', label: 'Home' },
  { href: '/cookies', label: 'Cookies' },
];

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: `How ${siteConfig.tradingName} uses cookies and similar technology.`,
  alternates: {
    canonical: '/cookies',
    languages: {
      'en-GB': '/cookies',
      'x-default': '/cookies',
    },
  },
};

export default function CookiesPage() {
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${siteConfig.url}/cookies#webpage`,
        url: `${siteConfig.url}/cookies`,
        name: 'Cookie Policy',
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
          Cookies
        </p>
        <h1 className="text-4xl font-bold text-brand-primary mb-4">Cookie Policy</h1>
        <p className="text-lg text-gray-700">
          This policy explains how {siteConfig.tradingName} uses cookies and similar browser
          storage.
        </p>
        <p className="mt-3 text-sm text-gray-600">Last updated: 24 May 2026</p>
      </header>

      <div className="space-y-8 text-gray-800">
        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Current cookie use</h2>
          <p>
            At this stage, the site is designed to work without advertising cookies or behavioural
            tracking cookies. We only use cookies or similar storage where necessary for the site to
            function, protect forms, remember basic preferences, or support hosting and security.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Analytics</h2>
          <p>
            Analytics is not currently wired into the site. If Plausible, Vercel Analytics, or
            another privacy-friendly analytics tool is added, this policy will be updated to name
            the provider and explain what is collected.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Third-party cookies</h2>
          <p>
            Embedded third-party tools can set their own cookies. The current site avoids embedded
            maps, videos, advertising widgets, and social media widgets on these disclosure pages.
            If that changes, this page will be updated.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Managing cookies</h2>
          <p>
            You can block or delete cookies in your browser settings. Blocking essential cookies may
            affect how some website features work.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold text-gray-950 mb-3">Contact</h2>
          <p>
            Questions about this policy can be sent to{' '}
            <a href={`mailto:${siteConfig.email}`} className="text-brand-primary underline">
              {siteConfig.email}
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
