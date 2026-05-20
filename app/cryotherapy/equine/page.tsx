import type { Metadata } from "next";
import { VerticalPageTemplate } from "@/components/vertical-page";
import { equineData } from "@/data/verticals";

export const metadata: Metadata = {
  title: equineData.metadata.title,
  description: equineData.metadata.description,
};

export default function EquinePage() {
  return <VerticalPageTemplate data={equineData} />;
}
