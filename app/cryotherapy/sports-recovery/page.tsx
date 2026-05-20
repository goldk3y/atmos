import type { Metadata } from "next";
import { VerticalPageTemplate } from "@/components/vertical-page";
import { sportsRecoveryData } from "@/data/verticals";
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
  title: sportsRecoveryData.metadata.title,
  description: sportsRecoveryData.metadata.description,
};

export default function SportsRecoveryPage() {
  const structuredData = combineSchemas(
    getServiceSchema({
      name: "Sports Recovery Cryotherapy",
      description: sportsRecoveryData.metadata.description,
      url: `${siteUrl}/cryotherapy/sports-recovery`,
      audience: "Athletic Trainers, Sports Medicine Professionals, Coaches",
    }),
    getFAQPageSchema(sportsRecoveryData.faq),
    getBreadcrumbSchema([
      { name: "Home", url: siteUrl },
      { name: "Cryotherapy Solutions", url: `${siteUrl}/cryotherapy` },
      { name: "Sports Recovery", url: `${siteUrl}/cryotherapy/sports-recovery` },
    ])
  );

  return (
    <>
      <JsonLd data={structuredData} />
      <VerticalPageTemplate data={sportsRecoveryData} />
    </>
  );
}
