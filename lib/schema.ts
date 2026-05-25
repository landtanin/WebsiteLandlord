import { siteConfig } from '@/lib/site-config';

type BreadcrumbItem = {
  href: string;
  label: string;
};

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: absoluteSiteUrl(item.href),
    })),
  };
}

function absoluteSiteUrl(href: string) {
  const base = siteConfig.url.replace(/\/$/, '');
  if (href === '/') return `${base}/`;
  return `${base}${href.startsWith('/') ? href : `/${href}`}`;
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteConfig.url}/#organization`,
    name: siteConfig.tradingName,
    legalName: siteConfig.legalEntity,
    url: siteConfig.url,
    telephone: siteConfig.phone.schema,
    email: siteConfig.email,
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      geoRadius: siteConfig.geo.serviceRadiusMetres,
    },
    knowsAbout: [
      'Spray foam insulation removal',
      'PAS 2035 retrofit standard',
      'RICS spray foam guidance',
      'Open-cell and closed-cell foam',
      'Loft insulation remediation',
      'Mortgage implications of spray foam',
    ],
    sameAs: [
      `https://find-and-update.company-information.service.gov.uk/company/${siteConfig.companyNumber}`,
    ],
  };
}

export function jsonLdScript(data: unknown) {
  return {
    __html: JSON.stringify(data).replace(/</g, '\\u003c'),
  };
}
