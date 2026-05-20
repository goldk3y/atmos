import type { MetadataRoute } from "next";

/**
 * Dynamic sitemap generation for search engine discovery
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap
 * @see https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://atmosperformance.com";
  const lastModified = new Date();

  // Core pages with highest priority
  const corePages = [
    {
      url: siteUrl,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${siteUrl}/cryogun`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.95,
    },
    {
      url: `${siteUrl}/book-demo`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
  ];

  // Solution/vertical pages - high priority conversion pages
  const verticalPages = [
    "sports-recovery",
    "equine",
    "clinics",
    "medspa",
  ].map((slug) => ({
    url: `${siteUrl}/cryotherapy/${slug}`,
    lastModified,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Resource pages
  const resourcePages = [
    {
      url: `${siteUrl}/cryotherapy-science`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/blog`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/case-studies`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${siteUrl}/videos`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  // Company pages
  const companyPages = [
    {
      url: `${siteUrl}/about`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  return [...corePages, ...verticalPages, ...resourcePages, ...companyPages];
}
