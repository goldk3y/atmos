import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import BeliefStatementSection from "./components/BeliefStatementSection";
import OperatorSupportBentoSection from "./components/BentoSection";
import UseCaseSection from "./components/UseCaseSection";
import VideoSection from "./components/VideoSection";
import TestimonialsSection from "./components/TestimonialsSection";
import VideoSwipeSection from "./components/VideoSwipeSection";
import FAQSection from "./components/FAQSection";
import FinalCTASection from "./components/FinalCTASection";
import { Footer } from "./components/FooterSection";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
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
