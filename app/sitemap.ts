import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';
import { areaContent } from '@/lib/areas';
import { guideContent } from '@/lib/guides';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  return [
    { url: `${baseUrl}/`, lastModified: new Date(), priority: 1.0 },
    { url: `${baseUrl}/about`, lastModified: new Date(), priority: 0.6 },
    { url: `${baseUrl}/how-spray-foam-removal-works`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/spray-foam-removal-cost`, lastModified: new Date(), priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), priority: 0.7 },
    { url: `${baseUrl}/areas`, lastModified: new Date(), priority: 0.7 },
    ...areaContent.map((area) => ({
      url: `${baseUrl}/areas/${area.slug}`,
      lastModified: new Date(),
      priority: 0.6,
    })),
    { url: `${baseUrl}/guides`, lastModified: new Date(), priority: 0.7 },
    ...guideContent.map((guide) => ({
      url: `${baseUrl}/guides/${guide.slug}`,
      lastModified: new Date(),
      priority: 0.6,
    })),
    { url: `${baseUrl}/editorial-standards`, lastModified: new Date(), priority: 0.5 },
    { url: `${baseUrl}/privacy`, lastModified: new Date(), priority: 0.4 },
    { url: `${baseUrl}/terms`, lastModified: new Date(), priority: 0.4 },
    { url: `${baseUrl}/cookies`, lastModified: new Date(), priority: 0.4 },
  ];
}
