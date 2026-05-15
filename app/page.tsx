import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import NavBar from "@/components/layout/nav-bar";
import BeliefStatementSection from "@/components/sections/belief-statement-section";
import FAQSection from "@/components/sections/faq-section";
import FinalCTASection from "@/components/sections/final-cta-section";
import HeroSection from "@/components/sections/hero-section";
import OperatorSupportBentoSection from "@/components/sections/operator-support-bento-section";
import TestimonialsSection from "@/components/sections/testimonials-section";
import UseCaseSection from "@/components/sections/use-case-section";
import VideoSection from "@/components/sections/video-section";
import VideoSwipeSection from "@/components/sections/video-swipe-section";

export const metadata: Metadata = {
  title: "Localized Cryotherapy Equipment",
  description:
    "Professional localized cryotherapy equipment, training, and support for clinics, sports recovery teams, wellness providers, and equine operators.",
};

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <BeliefStatementSection />
      <OperatorSupportBentoSection />
      <UseCaseSection />
      <VideoSection />
      <TestimonialsSection />
      <VideoSwipeSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </>
  );
}
