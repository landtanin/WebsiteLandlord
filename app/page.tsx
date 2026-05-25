import type { Metadata } from 'next';
import Link from 'next/link';
import { AreaCallout } from '@/components/area-callout';
import { CitationFootnote } from '@/components/citation-footnote';
import { ContactForm } from '@/components/contact-form';
import { FAQAccordion } from '@/components/faq-accordion';
import { InfoBox } from '@/components/info-box';
import { PhoneCTA } from '@/components/phone-cta';
import { TLDR } from '@/components/tldr';
import { TrustSignals } from '@/components/trust-signals';
import { siteConfig } from '@/lib/site-config';
import { breadcrumbJsonLd, jsonLdScript, organizationJsonLd } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'Spray Foam Removal Birmingham | Get a Free Quote - Call Us Today',
  description: `Spray foam insulation removal in Birmingham and the West Midlands. Free quote, no obligation. Call ${siteConfig.phone.display} to discuss your property.`,
  alternates: {
    canonical: '/',
    languages: {
      'en-GB': '/',
      'x-default': '/',
    },
  },
  openGraph: {
    title: 'Spray Foam Insulation Removal in Birmingham',
    description: `Call ${siteConfig.phone.display} for free, no-obligation spray foam removal guidance across Birmingham and the West Midlands.`,
    url: siteConfig.url,
    siteName: siteConfig.tradingName,
    images: [{ url: '/opengraph-image', width: 1200, height: 630 }],
  },
};

const faqItems = [
  {
    question: 'Will my house sell if I have spray foam insulation?',
    answer: (
      <>
        Often yes, but mortgage-backed buyers may struggle if a lender will not accept the roof as
        it stands. Removing the foam before going to market can widen the buyer pool.{' '}
        <Link href="/guides/selling-house-with-spray-foam" className="text-brand-primary underline">
          Read more on selling with spray foam
        </Link>
        .
      </>
    ),
  },
  {
    question: 'My mortgage lender refused - what now?',
    answer:
      'Call with the lender response in hand. We can talk through what they have asked for and what a survey or removal quote usually needs to cover.',
  },
  {
    question: 'How do I know if I have open-cell or closed-cell foam?',
    answer:
      'Open-cell foam is usually softer and spongier. Closed-cell foam is harder and more rigid. A survey should identify the foam type because it affects removal difficulty and roof-risk assessment.',
  },
  {
    question: 'Is spray foam dangerous to live with?',
    answer: (
      <>
        For most homeowners, cured spray foam is not the main day-to-day risk. The larger concerns
        are roof moisture, trapped ventilation, mortgageability, and resale.{' '}
        <Link href="/guides/spray-foam-health-risks" className="text-brand-primary underline">
          We cover the health evidence here
        </Link>
        .
      </>
    ),
  },
  {
    question: 'Can I remove it myself?',
    answer: (
      <>
        DIY removal is risky. The foam bonds to rafters, creates dust, and can leave you without
        the documentation a lender or buyer asks for.{' '}
        <Link href="/guides/diy-spray-foam-removal-warning" className="text-brand-primary underline">
          Read why DIY removal goes wrong
        </Link>
        .
      </>
    ),
  },
  {
    question: 'How long does removal take?',
    answer:
      'Many jobs are completed over one to three days depending on loft size, access, foam type, and whether timber repairs are needed. A survey gives the property-specific view.',
  },
  {
    question: 'Are there grants available for removal?',
    answer: (
      <>
        Usually no. Some narrow exceptions may apply through local schemes, installer disputes, or
        insurance.{' '}
        <Link href="/guides/spray-foam-grant-removal-options" className="text-brand-primary underline">
          Our grants guide explains the exceptions
        </Link>
        .
      </>
    ),
  },
  {
    question: 'What documentation do I get after removal?',
    answer:
      'A typical completion pack includes photographs, a written report, a structural inspection note, and confirmation that the work has been completed.',
  },
];

export default function HomePage() {
  const pageJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      organizationJsonLd(),
      {
        '@type': 'Service',
        '@id': `${siteConfig.url}/#service`,
        name: 'Spray foam removal enquiry matching',
        provider: {
          '@id': `${siteConfig.url}/#organization`,
        },
        areaServed: {
          '@type': 'GeoCircle',
          geoMidpoint: {
            '@type': 'GeoCoordinates',
            latitude: siteConfig.geo.latitude,
            longitude: siteConfig.geo.longitude,
          },
          geoRadius: siteConfig.geo.serviceRadiusMetres,
        },
        serviceType: 'Spray foam insulation removal guidance and specialist introduction',
      },
      breadcrumbJsonLd([{ href: '/', label: 'Home' }]),
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(pageJsonLd)} />

      <section className="bg-gray-50 border-b border-gray-200">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:py-20">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-brand-accent">
              Birmingham &amp; West Midlands
            </p>
            <h1 className="text-4xl font-bold tracking-normal text-brand-primary sm:text-5xl">
              Spray Foam Insulation Removal in Birmingham
            </h1>
            <p className="mt-5 max-w-2xl text-xl text-gray-700">
              Free, no-obligation quote. Speak to us about your spray foam problem today.
            </p>
            <p className="mt-5 max-w-2xl text-gray-700">
              If spray foam insulation is causing mortgage problems, sale difficulties, or roof
              damage worries, call today and we will talk through your options.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <PhoneCTA variant="large" showHours />
              <Link
                href="#contact"
                className="inline-flex justify-center rounded-md border border-brand-primary px-5 py-3 font-semibold text-brand-primary hover:bg-brand-primary hover:text-white"
              >
                Send your details
              </Link>
            </div>
            <div className="mt-8">
              <TrustSignals />
            </div>
          </div>

          <div className="space-y-5">
            <figure className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm">
              <img
                src="https://commons.wikimedia.org/wiki/Special:FilePath/WALLTITE_spray_foam_insulation_being_applied.jpg"
                alt="Spray foam insulation being applied between roof timbers in a loft space"
                className="h-64 w-full object-cover"
              />
              <figcaption className="px-3 py-2 text-xs text-gray-500">
                Image: Cdpweb161,{' '}
                <a
                  href="https://commons.wikimedia.org/wiki/File:WALLTITE_spray_foam_insulation_being_applied.jpg"
                  className="underline"
                >
                  CC BY-SA 3.0 / GFDL via Wikimedia Commons
                </a>
                .
              </figcaption>
            </figure>

            <div className="rounded-md border border-gray-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-gray-950">Quick enquiry</h2>
              <p className="mt-2 text-sm text-gray-600">
                Tell us what is happening with the property and we will call back.
              </p>
              <div className="mt-5">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-12">
        <TLDR>
          Spray foam insulation removal across Birmingham and the West Midlands. Costs depend on
          property size, foam type, access, and timber condition. Call {siteConfig.phone.display}{' '}
          for a free, no-obligation conversation about your property.
        </TLDR>
      </div>

      <section className="mx-auto max-w-4xl px-6 pb-14">
        <h2 className="text-3xl font-bold text-gray-950">
          Why has spray foam insulation become a problem?
        </h2>
        <div className="mt-6 space-y-5 text-gray-800">
          <p>
            Spray foam was sold to thousands of UK homeowners through the 2010s as an energy
            efficiency upgrade, often under grant schemes or doorstep sales. A decade on, many
            homeowners are finding that the mortgage, survey, and roof-risk questions are harder
            than they expected.
          </p>
          <p>
            <strong>Mortgage lenders have tightened up.</strong> Many UK lenders now treat spray
            foam in the loft as a concern, particularly where foam is applied directly to the
            underside of the roof. If your remortgage was declined or your buyer's mortgage offer
            fell through,{' '}
            <Link href="/guides/spray-foam-mortgage-problems" className="text-brand-primary underline">
              read our guide to spray foam and mortgages
            </Link>
            .
          </p>
          <p>
            <strong>Surveyors flag it on home buyer reports.</strong> Following RICS guidance, many
            surveyors identify spray foam as a material issue on valuation reports. That can lead to
            more questions, lower offers, or a delayed sale.{' '}
            <Link href="/guides/rics-guidance-spray-foam" className="text-brand-primary underline">
              See our RICS guidance explainer
            </Link>
            .
          </p>
          <p>
            <strong>It can affect the roof it was meant to protect.</strong> Foam can restrict
            ventilation and trap moisture against roof timbers. The earlier you understand what is
            in the loft, the more options you have.{' '}
            <Link href="/guides/signs-spray-foam-needs-removal" className="text-brand-primary underline">
              Check the signs that removal may be needed
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <h2 className="text-3xl font-bold text-gray-950">
            Which areas of the West Midlands do we cover?
          </h2>
          <p className="mt-4 max-w-3xl text-gray-700">
            We work across Greater Birmingham and the surrounding West Midlands. Choose your area
            for local detail as those pages go live.
          </p>
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.areaPages.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="rounded-md border border-gray-200 bg-white p-5 shadow-sm hover:border-brand-primary"
              >
                <h3 className="text-lg font-semibold text-brand-primary">{area.name}</h3>
                <p className="mt-2 text-sm text-gray-700">{area.blurb}</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <InfoBox>
              Not on this list? We cover most postcodes within 30 miles of Birmingham city centre.{' '}
              <a href={`tel:${siteConfig.phone.tel}`} className="font-semibold underline">
                Call {siteConfig.phone.display}
              </a>{' '}
              and we will tell you straight away whether we can help.
            </InfoBox>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <h2 className="text-3xl font-bold text-gray-950">How does spray foam removal work?</h2>
        <p className="mt-4 text-gray-700">
          Here is the usual spray foam removal process.{' '}
          <Link href="/how-spray-foam-removal-works" className="text-brand-primary underline">
            The full process is here
          </Link>
          .
        </p>
        <ol className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {[
            ['Survey', 'A specialist identifies the foam type, photographs the loft, checks moisture risk, and quotes.'],
            ['Site preparation', 'The loft is isolated from the rest of the home with PPE and dust protection.'],
            ['Manual removal', 'Foam is mechanically cut and scraped from rafters where removal is needed.'],
            ['Disposal', 'Debris is bagged, removed from site, and sent to a licensed waste facility.'],
            ['Structural inspection', 'Timbers are checked for rot, condensation damage, and ventilation issues.'],
            ['Documentation', 'You receive photographs, written notes, and completion documentation.'],
          ].map(([title, text], index) => (
            <li key={title} className="rounded-md border border-gray-200 bg-white p-5">
              <span className="text-sm font-semibold text-brand-accent">Step {index + 1}</span>
              <h3 className="mt-1 text-lg font-semibold text-gray-950">{title}</h3>
              <p className="mt-2 text-sm text-gray-700">{text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <h2 className="text-3xl font-bold text-gray-950">
            How much does spray foam removal cost?
          </h2>
          <p className="mt-4 text-gray-700">
            The exact cost depends on property size, foam type, how strongly the foam has bonded to
            roof timbers, access difficulty, waste volume, and whether timber repair is needed. We
            will add source-backed UK cost ranges once the citation URLs are selected.
            <CitationFootnote n={1} />
          </p>
          <div className="mt-8 overflow-hidden rounded-md border border-gray-200 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-gray-100 text-gray-950">
                <tr>
                  <th className="px-4 py-3 font-semibold">Cost factor</th>
                  <th className="px-4 py-3 font-semibold">Why it changes the quote</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {[
                  ['Loft size', 'More square metres means more cutting, bagging, and disposal.'],
                  ['Foam type', 'Closed-cell foam is denser and usually slower to remove.'],
                  ['Timber condition', 'Rot, damp, or damaged felt can add inspection and repair work.'],
                  ['Access', 'Tight loft hatches, low headroom, and steep roofs slow the job down.'],
                  ['Documentation', 'Mortgage or sale cases often need clearer photographic evidence.'],
                ].map(([factor, reason]) => (
                  <tr key={factor}>
                    <td className="px-4 py-3 font-medium text-gray-950">{factor}</td>
                    <td className="px-4 py-3 text-gray-700">{reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 font-semibold text-gray-900">
            For a property-specific quote, call {siteConfig.phone.display}. The initial conversation
            is free.
          </p>
          <Link href="/spray-foam-removal-cost" className="mt-3 inline-block text-brand-primary underline">
            Full cost breakdown
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-14">
        <h2 className="text-3xl font-bold text-gray-950">Why does spray foam removal matter now?</h2>
        <div className="mt-6 space-y-5 text-gray-800">
          <p>
            If you are not planning to sell or remortgage, you might wonder whether you can leave it
            alone. The answer depends on the foam type, roof condition, ventilation, and your plans
            for the property.
          </p>
          <p>
            <strong>The lender market has become more cautious.</strong> RICS guidance and lender
            policies have made spray foam a more common mortgage and valuation issue.
          </p>
          <p>
            <strong>Damage can compound.</strong> Moisture trapped against timber for extra years
            can turn a simpler removal job into removal plus repair.
          </p>
          <p>
            <strong>Grants are limited.</strong> Spray foam removal is not usually covered by main
            retrofit schemes.{' '}
            <Link href="/guides/spray-foam-grant-removal-options" className="text-brand-primary underline">
              Our grants guide
            </Link>{' '}
            explains the narrow exceptions.
          </p>
        </div>
        <div className="mt-8">
          <AreaCallout area="Sutton Coldfield" slug="sutton-coldfield" />
        </div>
      </section>

      <section className="bg-gray-50 border-y border-gray-200">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <h2 className="text-3xl font-bold text-gray-950">
            Common questions about spray foam removal
          </h2>
          <div className="mt-8">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-14 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <h2 className="text-3xl font-bold text-gray-950">
            Get a free spray foam removal quote - call us today
          </h2>
          <p className="mt-4 text-gray-700">
            No charge, no obligation, no high-pressure sales. We will talk through your property
            and the next practical step.
          </p>
          <div className="mt-8">
            <PhoneCTA variant="large" showHours />
          </div>
        </div>
        <div className="rounded-md border border-gray-200 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-950">Send your details</h3>
          <p className="mt-2 text-sm text-gray-600">
            Fill in the form and we will call you back within one working day.
          </p>
          <div className="mt-5">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 pb-12 text-sm text-gray-600">
        <h2 className="text-base font-semibold text-gray-950">Sources</h2>
        <p className="mt-2">
          <sup>[1]</sup> Source slot reserved for UK cost evidence. Add real UK source URLs before
          publishing exact cost ranges on commercial pages.
        </p>
      </section>
    </>
  );
}
