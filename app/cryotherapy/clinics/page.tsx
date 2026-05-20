import type { Metadata } from "next";
import { VerticalPageTemplate } from "@/components/vertical-page";
import { clinicsData } from "@/data/verticals";
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
  title: clinicsData.metadata.title,
  description: clinicsData.metadata.description,
};

export default function ClinicsPage() {
  const structuredData = combineSchemas(
    getServiceSchema({
      name: "Cryotherapy for Clinics & Chiropractic",
      description: clinicsData.metadata.description,
      url: `${siteUrl}/cryotherapy/clinics`,
      audience: "Chiropractors, Physical Therapists, Clinical Practitioners",
    }),
    getFAQPageSchema(clinicsData.faq),
    getBreadcrumbSchema([
      { name: "Home", url: siteUrl },
      { name: "Cryotherapy Solutions", url: `${siteUrl}/cryotherapy` },
      { name: "Clinics & Chiropractic", url: `${siteUrl}/cryotherapy/clinics` },
    ])
  );

  return (
    <>
      <JsonLd data={structuredData} />
      <VerticalPageTemplate data={clinicsData} />
    </>
  );
}
