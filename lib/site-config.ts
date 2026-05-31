// Single source of truth for site-wide values that need swapping before launch.
// Search for "TBD" or any of the bracketed placeholders to find what's left.

export const siteConfig = {
  tradingName: 'Spray Foam Removal Birmingham',
  tradingNameShort: 'SFR Birmingham',
  legalEntity: 'Taninnovate Ltd',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN ?? 'landtanin.github.io/WebsiteLandlord',
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://landtanin.github.io/WebsiteLandlord',
  phone: {
    display: '0121 XXX XXXX',
    tel: '+441211234567',
    schema: '+44-121-XXX-XXXX',
  },
  companyNumber: 'TBD',
  icoRegNumber: 'TBD',
  email: process.env.NEXT_PUBLIC_SITE_EMAIL ?? 'hello@sprayfoamremoval-birmingham.co.uk',
  hours: 'Mon–Sat 08:00–20:00',
  geo: {
    latitude: 52.4862,
    longitude: -1.8904,
    serviceRadiusMetres: 30000,
  },
  serviceAreas: [
    'Birmingham',
    'Solihull',
    'Sutton Coldfield',
    'Wolverhampton',
    'Dudley',
    'Walsall',
  ],
  areaPages: [
    { slug: 'sutton-coldfield', name: 'Sutton Coldfield', blurb: 'Older detached and Edwardian semis, high spray-foam install rate' },
    { slug: 'solihull', name: 'Solihull', blurb: 'Premium properties under tight mortgage scrutiny' },
    { slug: 'edgbaston', name: 'Edgbaston', blurb: 'Victorian and Edwardian stock, period-property concerns' },
    { slug: 'harborne', name: 'Harborne', blurb: 'Mixed period and post-war, ventilation-sensitive roof types' },
    { slug: 'erdington', name: 'Erdington', blurb: 'Mixed housing, resale-conscious owners' },
    { slug: 'wolverhampton', name: 'Wolverhampton', blurb: 'Larger detached homes across the wider region' },
    { slug: 'dudley', name: 'Dudley', blurb: 'Black Country housing stock with similar problems' },
  ],
} as const;
