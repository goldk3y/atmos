/**
 * Structured Data (JSON-LD) utilities for SEO and AI discoverability
 * @see https://schema.org
 * @see https://developers.google.com/search/docs/appearance/structured-data
 */

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://atmosperformance.com";

/**
 * Organization schema for the root layout
 * Establishes brand identity for search engines and AI systems
 */
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "Atmos Performance",
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/atmos-logo.svg`,
      width: 180,
      height: 40,
    },
    description:
      "Professional-grade localized cryotherapy equipment for sports recovery, equine therapy, medical spas, and clinical practices.",
    foundingDate: "2020",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: `${SITE_URL}/contact`,
      availableLanguage: ["English"],
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    knowsAbout: [
      "Cryotherapy",
      "Localized Cryotherapy",
      "Cold Therapy",
      "Sports Recovery",
      "Equine Therapy",
      "Physical Therapy Equipment",
      "Medical Spa Equipment",
    ],
  };
}

/**
 * WebSite schema for search features
 */
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Atmos Performance",
    description:
      "Professional cryotherapy equipment, training, and support for service environments.",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
  };
}

/**
 * Product schema for the CryoGun page
 */
export function getCryoGunProductSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${SITE_URL}/cryogun#product`,
    name: "CryoGun",
    description:
      "Professional handheld localized cryotherapy device using medical-grade compressed CO2 for targeted cold therapy treatments.",
    image: `${SITE_URL}/cryogun.png`,
    brand: {
      "@type": "Brand",
      name: "Atmos Performance",
    },
    manufacturer: {
      "@id": `${SITE_URL}/#organization`,
    },
    category: "Medical Equipment",
    audience: {
      "@type": "Audience",
      audienceType:
        "Healthcare Professionals, Athletic Trainers, Spa Owners, Veterinarians",
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceCurrency: "USD",
      url: `${SITE_URL}/cryogun`,
      seller: {
        "@id": `${SITE_URL}/#organization`,
      },
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Temperature Range",
        value: "-78°C (-108°F)",
      },
      {
        "@type": "PropertyValue",
        name: "Cooling Agent",
        value: "Medical-grade compressed CO2",
      },
      {
        "@type": "PropertyValue",
        name: "Treatment Time",
        value: "30-90 seconds",
      },
      {
        "@type": "PropertyValue",
        name: "Warranty",
        value: "2 years",
      },
      {
        "@type": "PropertyValue",
        name: "FDA Status",
        value: "FDA Class I Medical Device",
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      bestRating: "5",
      ratingCount: "200",
    },
  };
}

/**
 * FAQPage schema generator
 * @param faqs Array of question/answer pairs
 */
export function getFAQPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * BreadcrumbList schema generator
 * @param items Array of breadcrumb items with name and url
 */
export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Service schema for vertical pages
 */
export function getServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  provider?: string;
  areaServed?: string;
  audience?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    areaServed: {
      "@type": "Country",
      name: service.areaServed ?? "United States",
    },
    audience: {
      "@type": "Audience",
      audienceType: service.audience ?? "Healthcare Professionals",
    },
  };
}

/**
 * MedicalDevice schema (more specific than Product for CryoGun)
 */
export function getMedicalDeviceSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalDevice",
    name: "CryoGun",
    description:
      "FDA Class I registered handheld cryotherapy device for localized cold therapy applications.",
    manufacturer: {
      "@id": `${SITE_URL}/#organization`,
    },
    url: `${SITE_URL}/cryogun`,
    image: `${SITE_URL}/cryogun.png`,
    medicalSpecialty: [
      "Sports Medicine",
      "Physical Therapy",
      "Chiropractic",
      "Veterinary Medicine",
    ],
  };
}

/**
 * Helper to combine multiple schemas into a single graph
 */
export function combineSchemas(
  ...schemas: Record<string, unknown>[]
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@graph": schemas.map((schema) => {
      // Remove @context from individual schemas when combining
      const { "@context": _unusedContext, ...rest } = schema;
      void _unusedContext;
      return rest;
    }),
  };
}
