/**
 * JSON-LD structured data component for SEO
 * Renders schema.org markup in a script tag
 * @see https://developers.google.com/search/docs/appearance/structured-data
 */

interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
