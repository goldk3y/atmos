import type { Metadata } from "next";
import { VerticalPageTemplate } from "@/components/vertical-page";
import { equineData } from "@/data/verticals";
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
  title: equineData.metadata.title,
  description: equineData.metadata.description,
};

export default function EquinePage() {
  const structuredData = combineSchemas(
    getServiceSchema({
      name: "Equine Cryotherapy",
      description: equineData.metadata.description,
      url: `${siteUrl}/cryotherapy/equine`,
      audience: "Veterinarians, Equine Trainers, Horse Owners",
    }),
    getFAQPageSchema(equineData.faq),
    getBreadcrumbSchema([
      { name: "Home", url: siteUrl },
      { name: "Cryotherapy Solutions", url: `${siteUrl}/cryotherapy` },
      { name: "Equine", url: `${siteUrl}/cryotherapy/equine` },
    ])
  );

  return (
    <>
      <JsonLd data={structuredData} />
      <VerticalPageTemplate data={equineData} />
    </>
  );
}
