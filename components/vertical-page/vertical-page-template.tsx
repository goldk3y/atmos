"use client";

import NavBar from "@/components/layout/nav-bar";
import { Footer } from "@/components/layout/footer";
import HeroModule from "./modules/hero-module";
import SocialProofBar from "./modules/social-proof-bar";
import ProblemStatement from "./modules/problem-statement";
import ThreePillarSolution from "./modules/three-pillar-solution";
import UseCasesModule from "./modules/use-cases-module";
import TestimonialModule from "./modules/testimonial-module";
import VisualProofModule from "./modules/visual-proof-module";
import FAQModule from "./modules/faq-module";
import FinalCTAModule from "./modules/final-cta-module";
import StickyBottomCTA from "./sticky-bottom-cta";
import type { VerticalPageData } from "@/data/verticals/types";

interface VerticalPageTemplateProps {
  data: VerticalPageData;
}

export default function VerticalPageTemplate({
  data,
}: VerticalPageTemplateProps) {
  return (
    <>
      <NavBar alwaysVisible />

      {/* Module 1: Hero */}
      <HeroModule hero={data.hero} trustSignals={data.trustSignals} />

      {/* Module 2: Social Proof Bar */}
      <SocialProofBar socialProof={data.socialProof} />

      {/* Module 3: Problem Statement */}
      <ProblemStatement problem={data.problem} />

      {/* Module 4: Three Pillar Solution */}
      <ThreePillarSolution threePillars={data.threePillars} />

      {/* Module 5: Use Cases */}
      <UseCasesModule useCases={data.useCases} />

      {/* Module 6: Testimonial */}
      <TestimonialModule
        testimonial={data.testimonial}
        trustSignals={data.trustSignals}
      />

      {/* Module 7: Visual Proof */}
      <VisualProofModule visualProof={data.visualProof} />

      {/* Module 8: FAQ */}
      <FAQModule faq={data.faq} />

      {/* Module 10: Final CTA */}
      <FinalCTAModule
        finalCta={data.finalCta}
        trustSignals={data.trustSignals}
      />

      <Footer />

      {/* Sticky Bottom CTA (mobile) */}
      <StickyBottomCTA ctaText={data.hero.ctaText} />
    </>
  );
}
