import Link from 'next/link';
import { PhoneCTA } from '@/components/phone-cta';
import { TLDR } from '@/components/tldr';
import { TrustSignals } from '@/components/trust-signals';
import { FAQAccordion } from '@/components/faq-accordion';
import { ContactForm } from '@/components/contact-form';
import { DefinitionBox } from '@/components/definition-box';
import { CitationFootnote } from '@/components/citation-footnote';
import { AreaCallout } from '@/components/area-callout';
import { InfoBox } from '@/components/info-box';
import { Breadcrumbs } from '@/components/breadcrumbs';

export default function HomePage() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-4xl font-bold mb-4 text-brand-primary">
        Foundation scaffold
      </h1>
      <p className="text-lg text-gray-700 mb-8">
        Layout chrome (sticky header phone CTA, footer disclosure) and global components are wired up.
        Real homepage copy from <code>/content/homepage.md</code> lands in the next pass.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
        <ComponentDemo name="PhoneCTA" />
        <ComponentDemo name="PhoneCTA (large)" />
        <ComponentDemo name="TLDR" />
        <ComponentDemo name="TrustSignals" />
        <ComponentDemo name="FAQAccordion" />
        <ComponentDemo name="ContactForm" />
        <ComponentDemo name="DefinitionBox" />
        <ComponentDemo name="CitationFootnote" />
        <ComponentDemo name="AreaCallout" />
        <ComponentDemo name="InfoBox" />
        <ComponentDemo name="Breadcrumbs" />
      </div>

      <section className="space-y-12">
        <Demo title="PhoneCTA (default)">
          <PhoneCTA />
        </Demo>

        <Demo title="PhoneCTA (large, with hours)">
          <PhoneCTA variant="large" showHours />
        </Demo>

        <Demo title="TLDR">
          <TLDR>
            Spray foam insulation removal across Birmingham and the West Midlands. Typical UK
            removal costs are £1,500–£5,000 depending on property and foam type
            <CitationFootnote n={1} />.
          </TLDR>
        </Demo>

        <Demo title="TrustSignals">
          <TrustSignals />
        </Demo>

        <Demo title="DefinitionBox">
          <DefinitionBox term="Open-cell spray foam">
            A softer, more porous spray foam that lets moisture pass through it. Often used as
            insulation on the underside of pitched roofs.
          </DefinitionBox>
        </Demo>

        <Demo title="InfoBox">
          <InfoBox>
            <strong>Mortgage refused?</strong> You're not alone — <Link href="/guides/spray-foam-mortgage-problems" className="underline">read our guide</Link>.
          </InfoBox>
        </Demo>

        <Demo title="AreaCallout">
          <AreaCallout area="Sutton Coldfield" slug="sutton-coldfield" />
        </Demo>

        <Demo title="Breadcrumbs">
          <Breadcrumbs
            items={[
              { href: '/', label: 'Home' },
              { href: '/areas', label: 'Areas' },
              { href: '/areas/sutton-coldfield', label: 'Sutton Coldfield' },
            ]}
          />
        </Demo>

        <Demo title="FAQAccordion">
          <FAQAccordion
            items={[
              {
                question: 'Will my house sell if I have spray foam insulation?',
                answer:
                  'Often yes — but usually only to cash buyers, and usually at a reduced price.',
              },
              {
                question: 'How long does removal take?',
                answer: 'Most jobs are completed in one to two days.',
              },
            ]}
          />
        </Demo>

        <Demo title="ContactForm">
          <ContactForm />
        </Demo>
      </section>
    </div>
  );
}

function ComponentDemo({ name }: { name: string }) {
  return (
    <div className="text-sm text-gray-600 rounded border border-gray-200 px-3 py-2">
      <code>{name}</code>
    </div>
  );
}

function Demo({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-sm font-semibold uppercase tracking-wide text-gray-500 mb-2">
        {title}
      </h2>
      <div className="rounded-md border border-gray-200 bg-white p-6">{children}</div>
    </div>
  );
}
