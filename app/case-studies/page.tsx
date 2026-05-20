import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import NavBar from "@/components/layout/nav-bar";
import { CaseStudiesClient } from "./case-studies-client";

export const metadata: Metadata = {
  title: "Case Studies | Atmos Performance",
  description:
    "Real-world success stories from clinics, sports teams, wellness centers, and equine facilities using Atmos cryotherapy equipment.",
};

export default function CaseStudiesPage() {
  return (
    <>
      <NavBar alwaysVisible />
      <CaseStudiesClient />
      <Footer />
    </>
  );
}
