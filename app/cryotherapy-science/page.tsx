import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import NavBar from "@/components/layout/nav-bar";
import CryotherapyScienceContent from "./cryotherapy-science-content";

export const metadata: Metadata = {
  title: "The Science of Cryotherapy",
  description:
    "Explore 50+ peer-reviewed studies supporting cryotherapy for pain relief, recovery, and performance. Backed by research from NEJM, JAMA, and leading sports medicine journals.",
};

export default function CryotherapySciencePage() {
  return (
    <>
      <NavBar alwaysVisible />
      <CryotherapyScienceContent />
      <Footer />
    </>
  );
}
