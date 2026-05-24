import type { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/site-config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  return [
    { url: `${baseUrl}/`, lastModified: new Date(), priority: 1.0 },
    // Additional pages added as they're built.
  ];
}
