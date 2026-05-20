import type { Metadata } from "next";
import { VerticalPageTemplate } from "@/components/vertical-page";
import { clinicsData } from "@/data/verticals";

export const metadata: Metadata = {
  title: clinicsData.metadata.title,
  description: clinicsData.metadata.description,
};

export default function ClinicsPage() {
  return <VerticalPageTemplate data={clinicsData} />;
}
