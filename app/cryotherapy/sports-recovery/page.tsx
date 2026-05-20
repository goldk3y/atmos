import type { Metadata } from "next";
import { VerticalPageTemplate } from "@/components/vertical-page";
import { sportsRecoveryData } from "@/data/verticals";

export const metadata: Metadata = {
  title: sportsRecoveryData.metadata.title,
  description: sportsRecoveryData.metadata.description,
};

export default function SportsRecoveryPage() {
  return <VerticalPageTemplate data={sportsRecoveryData} />;
}
