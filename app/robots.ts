import type { MetadataRoute } from "next";

/**
 * robots.txt configuration for search engines and AI crawlers
 * @see https://developers.google.com/search/docs/crawling-indexing/robots/intro
 * @see https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots
 */
export default function robots(): MetadataRoute.Robots {
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://atmosperformance.com";

  return {
    rules: [
      // Default rules for all crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      // OpenAI GPTBot - Allow for ChatGPT citations and visibility
      {
        userAgent: "GPTBot",
        allow: "/",
      },
      // OpenAI SearchBot - Real-time search agent
      {
        userAgent: "OAI-SearchBot",
        allow: "/",
      },
      // Anthropic ClaudeBot - Allow for Claude citations
      {
        userAgent: "ClaudeBot",
        allow: "/",
      },
      // Anthropic Claude-Web - Claude's web browsing
      {
        userAgent: "Claude-Web",
        allow: "/",
      },
      // Google Extended - Gemini training and AI features
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      // Perplexity Bot - Answer engine citations
      {
        userAgent: "PerplexityBot",
        allow: "/",
      },
      // Microsoft Bing AI / Copilot
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      // Meta AI training crawler
      {
        userAgent: "Meta-ExternalAgent",
        allow: "/",
      },
      // Common AI data crawler
      {
        userAgent: "CCBot",
        allow: "/",
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
