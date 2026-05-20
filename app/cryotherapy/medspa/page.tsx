import type { Metadata } from "next";
import { VerticalPageTemplate } from "@/components/vertical-page";
import { medspaData } from "@/data/verticals";
import { JsonLd } from "@/components/seo/json-ld";
import {
  getFAQPageSchema,
  getBreadcrumbSchema,
  getServiceSchema,
  combineSchemas,
} from "@/lib/structured-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://atmosperformance.com";

export const metadata: Metadata = {
  title: medspaData.metadata.title,
  description: medspaData.metadata.description,
};

export default function MedspaPage() {
  const structuredData = combineSchemas(
    getServiceSchema({
      name: "MedSpa & Wellness Cryotherapy",
      description: medspaData.metadata.description,
      url: `${siteUrl}/cryotherapy/medspa`,
      audience: "Spa Owners, Aestheticians, Wellness Practitioners",
    }),
    getFAQPageSchema(medspaData.faq),
    getBreadcrumbSchema([
      { name: "Home", url: siteUrl },
      { name: "Cryotherapy Solutions", url: `${siteUrl}/cryotherapy` },
      { name: "MedSpa & Wellness", url: `${siteUrl}/cryotherapy/medspa` },
    ])
  );

  return (
    <>
      <JsonLd data={structuredData} />
      <VerticalPageTemplate data={medspaData} />
    </>
  );
}
