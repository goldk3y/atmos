import type { Metadata } from "next";
import { VerticalPageTemplate } from "@/components/vertical-page";
import { medspaData } from "@/data/verticals";

export const metadata: Metadata = {
  title: medspaData.metadata.title,
  description: medspaData.metadata.description,
};

export default function MedspaPage() {
  return <VerticalPageTemplate data={medspaData} />;
}
