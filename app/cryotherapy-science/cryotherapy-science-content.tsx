"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { m, useInView, useReducedMotion } from "motion/react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

// ============================================================================
// MAIN COMPONENT
// ============================================================================

export default function CryotherapyScienceContent() {
  return (
    <LazyMotionProvider>
      <main className="bg-white text-[var(--atmos-ink)]">
        <HeroSection />
        <IntroductionSection />
        <WhatIsCryotherapySection />
        <TypesOfColdTherapySection />
        <HowItWorksSection />
        <WhatHappensInYourBodySection />
        <EvidenceSection />
        <AthletesBanner />
        <FAQSection />
        <ClosingSection />
      </main>
    </LazyMotionProvider>
  );
}

// ============================================================================
// HERO SECTION
// ============================================================================

function HeroSection() {
  return (
    <section className="relative w-full bg-[var(--atmos-page)] px-6 pb-16 pt-32 sm:px-8 sm:pb-20 sm:pt-40 lg:px-12">
      <div className="mx-auto max-w-[720px]">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--atmos-muted)]">
          Research & Evidence
        </p>
        <h1 className="mt-4 text-[clamp(2.25rem,6vw,3.5rem)] font-semibold leading-[1.1] tracking-tight text-[var(--atmos-ink)]">
          The Science Behind Cold Therapy
        </h1>
        <p className="mt-6 text-xl leading-relaxed text-[var(--atmos-secondary)] sm:text-2xl sm:leading-relaxed">
          What decades of peer-reviewed research tell us about cryotherapy, explained in plain English.
        </p>
      </div>
    </section>
  );
}

// ============================================================================
// INTRODUCTION SECTION
// ============================================================================

function IntroductionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <m.div
        className="mx-auto max-w-[720px]"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, ease: EASE_OUT }}
      >
        <p className="text-lg leading-8 text-[var(--atmos-secondary)] sm:text-xl sm:leading-9">
          You've probably heard of cryotherapy. Maybe you've seen athletes stepping into freezing chambers or celebrities touting cold therapy benefits. But beneath the buzz, there's real science: decades of peer-reviewed research documenting exactly what happens when cold meets the human body.
        </p>
        <p className="mt-6 text-lg leading-8 text-[var(--atmos-secondary)] sm:text-xl sm:leading-9">
          This page is our attempt to lay it out clearly: what cryotherapy is, how it works, what the evidence actually shows, and what claims you should be skeptical of. We cite our sources, acknowledge limitations, and let you decide.
        </p>
      </m.div>
    </section>
  );
}

// ============================================================================
// WHAT IS CRYOTHERAPY SECTION
// ============================================================================

function WhatIsCryotherapySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <m.div
        className="mx-auto max-w-[720px]"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, ease: EASE_OUT }}
      >
        <h2 className="text-2xl font-semibold text-[var(--atmos-ink)] sm:text-3xl">
          What is cryotherapy?
        </h2>
        <p className="mt-6 text-lg leading-8 text-[var(--atmos-secondary)]">
          Cryotherapy, from the Greek <em>kryos</em> (meaning "icy cold"), is simply the therapeutic use of cold. Ice packs, cold showers, ice baths, and high-tech cryo chambers are all forms of cryotherapy. The idea isn't new: cold has been used medicinally for thousands of years.
        </p>
        <p className="mt-6 text-lg leading-8 text-[var(--atmos-secondary)]">
          The Edwin Smith Papyrus from ancient Egypt (~2500 BCE) describes using cold to treat injuries. Hippocrates recommended cold for swelling and pain. In 1845, English physician James Arnott used salt-ice mixtures to treat tumors and nerve pain.
        </p>
        <p className="mt-6 text-lg leading-8 text-[var(--atmos-secondary)]">
          The modern era of cryotherapy began in <strong>1978</strong>, when Japanese rheumatologist <strong>Dr. Toshima Yamaguchi</strong> built the first whole-body cryogenic chamber. He discovered something important: <em>rapid</em> cooling produced much stronger pain-relief and endorphin effects than slow cooling in an ice bath. That insight, that speed matters, opened the door to modern cryotherapy devices.
        </p>

        {/* Timeline */}
        <div className="mt-10 flex items-center justify-between border-t border-b border-[var(--atmos-border)] py-6 text-center">
          <div>
            <p className="text-sm font-medium text-[var(--atmos-muted)]">~2500 BCE</p>
            <p className="mt-1 text-xs text-[var(--atmos-secondary)]">Ancient Egypt</p>
          </div>
          <div className="h-px flex-1 bg-[var(--atmos-border)]" />
          <div>
            <p className="text-sm font-medium text-[var(--atmos-muted)]">1845</p>
            <p className="mt-1 text-xs text-[var(--atmos-secondary)]">James Arnott</p>
          </div>
          <div className="h-px flex-1 bg-[var(--atmos-border)]" />
          <div>
            <p className="text-sm font-medium text-[var(--atmos-blue)]">1978</p>
            <p className="mt-1 text-xs text-[var(--atmos-secondary)]">Dr. Yamaguchi</p>
          </div>
          <div className="h-px flex-1 bg-[var(--atmos-border)]" />
          <div>
            <p className="text-sm font-medium text-[var(--atmos-muted)]">Today</p>
            <p className="mt-1 text-xs text-[var(--atmos-secondary)]">Localized devices</p>
          </div>
        </div>
      </m.div>
    </section>
  );
}

// ============================================================================
// TYPES OF COLD THERAPY SECTION
// ============================================================================

function TypesOfColdTherapySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <div className="mx-auto max-w-[720px]">
        <m.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <h2 className="text-2xl font-semibold text-[var(--atmos-ink)] sm:text-3xl">
            Types of cold therapy
          </h2>
          <p className="mt-6 text-lg leading-8 text-[var(--atmos-secondary)]">
            Not all cold therapy is the same. Different methods work at different temperatures, for different durations, and target different areas of the body.
          </p>
        </m.div>

        {/* Comparison Table */}
        <m.div
          className="mt-10 overflow-x-auto"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
        >
          <table className="w-full min-w-[600px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-[var(--atmos-border)]">
                <th className="py-4 pl-4 pr-4 font-medium text-[var(--atmos-ink)]">Type</th>
                <th className="py-4 pr-4 font-medium text-[var(--atmos-ink)]">Temperature</th>
                <th className="py-4 pr-4 font-medium text-[var(--atmos-ink)]">Duration</th>
                <th className="py-4 pr-4 font-medium text-[var(--atmos-ink)]">Best For</th>
              </tr>
            </thead>
            <tbody className="text-[var(--atmos-secondary)]">
              <tr className="border-b border-[var(--atmos-border)]">
                <td className="py-4 pl-4 pr-4">Ice Pack</td>
                <td className="py-4 pr-4">0°C (32°F)</td>
                <td className="py-4 pr-4">15–20 min</td>
                <td className="py-4 pr-4">Basic first aid, swelling</td>
              </tr>
              <tr className="border-b border-[var(--atmos-border)]">
                <td className="py-4 pl-4 pr-4">Ice Bath / Cold Plunge</td>
                <td className="py-4 pr-4">5–15°C (41–59°F)</td>
                <td className="py-4 pr-4">10–20 min</td>
                <td className="py-4 pr-4">Full-body recovery</td>
              </tr>
              <tr className="border-b border-[var(--atmos-border)]">
                <td className="py-4 pl-4 pr-4">Whole-Body Chamber</td>
                <td className="py-4 pr-4">−110 to −160°C</td>
                <td className="py-4 pr-4">2–4 min</td>
                <td className="py-4 pr-4">Systemic effects (requires facility)</td>
              </tr>
              <tr className="bg-[var(--atmos-blue)]/5 text-[var(--atmos-blue)]">
                <td className="py-4 pl-4 pr-4 font-medium">Localized Cryotherapy</td>
                <td className="py-4 pr-4">−78°C source</td>
                <td className="py-4 pr-4">30 sec – 4 min</td>
                <td className="py-4 pr-4">Targeted treatment, portable</td>
              </tr>
            </tbody>
          </table>
        </m.div>

        <m.p
          className="mt-8 text-lg leading-8 text-[var(--atmos-secondary)]"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE_OUT }}
        >
          Localized cryotherapy sits in the middle: colder and faster than ice packs, but far more accessible and targeted than whole-body chambers. You can use it on a specific joint, muscle, or area without the infrastructure of a cryo chamber or the commitment of an ice bath.
        </m.p>
      </div>
    </section>
  );
}

// ============================================================================
// HOW IT WORKS SECTION
// ============================================================================

function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <m.div
        className="mx-auto max-w-[720px]"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, ease: EASE_OUT }}
      >
        <h2 className="text-2xl font-semibold text-[var(--atmos-ink)] sm:text-3xl">
          How localized cryotherapy works
        </h2>
        <p className="mt-6 text-lg leading-8 text-[var(--atmos-secondary)]">
          Devices like the CryoGun use pressurized CO₂ that expands through a specialized nozzle, creating a jet of extremely cold gas (around −78°C / −108°F). When applied to skin, three things happen simultaneously:
        </p>

        <ol className="mt-8 space-y-6 text-lg leading-8 text-[var(--atmos-secondary)]">
          <li className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--atmos-ink)] text-sm font-medium text-white">1</span>
            <div>
              <strong className="text-[var(--atmos-ink)]">Rapid cooling:</strong> Your skin temperature drops from roughly 32°C to about 4°C in around 30 seconds. This speed is key: the <em>rate</em> of temperature change triggers stronger physiological responses than slow cooling.
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--atmos-ink)] text-sm font-medium text-white">2</span>
            <div>
              <strong className="text-[var(--atmos-ink)]">Mechanical stimulation:</strong> The pressurized stream creates a gentle massage effect, driving cold deeper into tissue than passive ice and stimulating nerve receptors.
            </div>
          </li>
          <li className="flex gap-4">
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--atmos-ink)] text-sm font-medium text-white">3</span>
            <div>
              <strong className="text-[var(--atmos-ink)]">Thermal shock:</strong> The sudden cold activates your body's response systems, triggering changes in blood flow, nerve signaling, and chemical release that we'll explain next.
            </div>
          </li>
        </ol>

        {/* Diagram */}
        <div className="relative mt-10 aspect-[16/10] w-full overflow-hidden rounded-lg">
          <Image
            src="/cryo-skin-diagram.png"
            alt="Cross-section diagram showing cold CO₂ gas at -78°C cooling skin tissue from 32°C to 4°C in approximately 30 seconds, with labeled skin layers (epidermis, dermis, subcutaneous tissue) and vasoconstriction in blood vessels"
            fill
            className="object-contain"
          />
        </div>
      </m.div>
    </section>
  );
}

// ============================================================================
// WHAT HAPPENS IN YOUR BODY SECTION
// ============================================================================

function WhatHappensInYourBodySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <m.div
        className="mx-auto max-w-[720px]"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, ease: EASE_OUT }}
      >
        <h2 className="text-2xl font-semibold text-[var(--atmos-ink)] sm:text-3xl">
          What happens in your body
        </h2>
        <p className="mt-6 text-lg leading-8 text-[var(--atmos-secondary)]">
          When cold hits your skin, it triggers a cascade of well-documented physiological responses. Here are the four most important:
        </p>

        {/* Mechanism 1 */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-[var(--atmos-ink)]">
            Pain signals slow down
          </h3>
          <p className="mt-4 text-lg leading-8 text-[var(--atmos-secondary)]">
            When skin gets cold, the nerves that carry pain signals literally slow down. A 2007 study in the <em>British Journal of Sports Medicine</em> found that cooling skin to 10°C reduced nerve signaling speed by about 33% and increased pain tolerance by 89%. This is why ice has always been a go-to for acute injuries: it genuinely reduces how much pain you feel.
          </p>
          <p className="mt-3 text-sm text-[var(--atmos-muted)]">
            Source: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2465313/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--atmos-blue)]">Algafly & George, <em>Br J Sports Med</em>, 2007</a>
          </p>
        </div>

        {/* Mechanism 2 */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-[var(--atmos-ink)]">
            The "flush" effect
          </h3>
          <p className="mt-4 text-lg leading-8 text-[var(--atmos-secondary)]">
            Cold first causes blood vessels to tighten (reducing swelling). Then, as your body warms back up, those vessels open wide, flooding the area with fresh, oxygenated blood. Scientists call this the "hunting response," first documented by Sir Thomas Lewis in 1930. It's why people often feel energized and notice a healthy flush after cold therapy.
          </p>
          <p className="mt-3 text-sm text-[var(--atmos-muted)]">
            Source: <a href="https://en.wikipedia.org/wiki/Hunting_reaction" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--atmos-blue)]">Lewis, <em>Heart</em>, 1930</a>
          </p>
        </div>

        {/* Mechanism 3 */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-[var(--atmos-ink)]">
            Inflammation goes down
          </h3>
          <p className="mt-4 text-lg leading-8 text-[var(--atmos-secondary)]">
            At the cellular level, cold suppresses the inflammatory chemicals your body produces in response to injury or stress. Multiple studies show reductions in markers like IL-6 and TNF-α, the same inflammation markers that doctors measure in blood tests. A 2022 study in rheumatoid arthritis patients found that cryotherapy significantly reduced these markers and allowed 58% of participants to reduce their pain medication.
          </p>
          <p className="mt-3 text-sm text-[var(--atmos-muted)]">
            Sources: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC5536266/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--atmos-blue)]">Guillot et al., 2017</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/35238767/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--atmos-blue)]">Klemm et al., <em>Clin Exp Rheumatol</em>, 2022</a>
          </p>
        </div>

        {/* Mechanism 4 */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-[var(--atmos-ink)]">
            Natural chemical release
          </h3>
          <p className="mt-4 text-lg leading-8 text-[var(--atmos-secondary)]">
            Cold exposure triggers your body to release norepinephrine (linked to focus and alertness) and endorphins (natural painkillers). One study found norepinephrine levels increased by 200–530% during cold exposure. This may explain why many people report feeling more awake, focused, and positive after cold therapy. It's not just placebo; there's a measurable chemical change.
          </p>
          <p className="mt-3 text-sm text-[var(--atmos-muted)]">
            Sources: <a href="https://pubmed.ncbi.nlm.nih.gov/10751106/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--atmos-blue)]">Šrámek et al., 2000</a>; <a href="https://www.tandfonline.com/doi/full/10.1080/00365510701516350" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--atmos-blue)]">Leppäluoto et al., 2008</a>
          </p>
        </div>
      </m.div>
    </section>
  );
}

// ============================================================================
// EVIDENCE SECTION
// ============================================================================

function EvidenceSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <m.div
        className="mx-auto max-w-[720px]"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, ease: EASE_OUT }}
      >
        <h2 className="text-2xl font-semibold text-[var(--atmos-ink)] sm:text-3xl">
          What the research shows
        </h2>
        <p className="mt-6 text-lg leading-8 text-[var(--atmos-secondary)]">
          Cryotherapy has been studied extensively in peer-reviewed journals including the <em>New England Journal of Medicine</em>, <em>British Journal of Sports Medicine</em>, and <em>Orthopaedic Surgery</em>. Here's what the research tells us.
        </p>

        {/* Pull Quote */}
        <blockquote className="my-10 border-l-4 border-[var(--atmos-blue)] py-2 pl-6">
          <p className="text-2xl font-medium leading-relaxed text-[var(--atmos-ink)] sm:text-3xl">
            31 randomized controlled trials analyzed in 2024 found cryotherapy after knee surgery significantly reduced pain and opioid use.
          </p>
          <cite className="mt-4 block text-base font-normal not-italic text-[var(--atmos-muted)]">
            <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11608804/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--atmos-blue)]">Liang et al., <em>Orthopaedic Surgery</em>, 2024</a>
          </cite>
        </blockquote>

        {/* Evidence Areas */}
        <div className="mt-10">
          <h3 className="text-xl font-semibold text-[var(--atmos-ink)]">
            Pain relief mechanism
          </h3>
          <p className="mt-4 text-lg leading-8 text-[var(--atmos-secondary)]">
            The most direct evidence for how cryotherapy reduces pain comes from nerve conduction studies. When you cool the skin, pain signals literally slow down. A 2007 study in the <em>British Journal of Sports Medicine</em> found that cooling the ankle to 10°C reduced nerve signaling speed by 33% and increased pain tolerance by 89%. This slowing effect persisted even at sites further from the cooling, suggesting a broader analgesic benefit.
          </p>
          <p className="mt-3 text-sm text-[var(--atmos-muted)]">
            Source: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2465313/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--atmos-blue)]">Algafly & George, <em>Br J Sports Med</em>, 2007</a>
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-[var(--atmos-ink)]">
            Post-surgical recovery
          </h3>
          <p className="mt-4 text-lg leading-8 text-[var(--atmos-secondary)]">
            The 2024 Liang meta-analysis of 31 randomized controlled trials found that patients using cryotherapy after total knee replacement had significantly less pain on days 1, 2, and 3. They also needed fewer opioids, had less blood loss, and showed improved range of motion. A separate 2023 study in the <em>Journal of Arthroplasty</em> confirmed significantly less opioid use in the first post-op week.
          </p>
          <p className="mt-3 text-sm text-[var(--atmos-muted)]">
            Sources: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC11608804/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--atmos-blue)]">Liang et al., <em>Orthopaedic Surgery</em>, 2024</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/36496048/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--atmos-blue)]">Wyatt et al., <em>J Arthroplasty</em>, 2023</a>
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-[var(--atmos-ink)]">
            Exercise recovery
          </h3>
          <p className="mt-4 text-lg leading-8 text-[var(--atmos-secondary)]">
            A 2026 meta-analysis of 51 randomized controlled trials (1,243 participants) found that local cold therapy produced the greatest reduction in delayed-onset muscle soreness at 48 hours. The same analysis found cryotherapy reduced creatine kinase (a marker of muscle damage) and improved jump performance in the days following intense exercise.
          </p>
          <p className="mt-3 text-sm text-[var(--atmos-muted)]">
            Source: <a href="https://www.frontiersin.org/journals/sports-and-active-living/articles/10.3389/fspor.2026.1819396/full" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--atmos-blue)]">Zhang et al., <em>Frontiers in Sports and Active Living</em>, 2026</a>
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-[var(--atmos-ink)]">
            Inflammation reduction
          </h3>
          <p className="mt-4 text-lg leading-8 text-[var(--atmos-secondary)]">
            Multiple studies show cryotherapy reduces inflammatory markers at the cellular level. A 2022 randomized trial in rheumatoid arthritis patients found that cryotherapy significantly reduced IL-6 and TNF-α levels, with 58% of participants able to reduce their pain medication. A 2025 meta-analysis of 11 trials confirmed these anti-inflammatory effects, particularly in athletes.
          </p>
          <p className="mt-3 text-sm text-[var(--atmos-muted)]">
            Sources: <a href="https://pubmed.ncbi.nlm.nih.gov/35238767/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--atmos-blue)]">Klemm et al., <em>Clin Exp Rheumatol</em>, 2022</a>; <a href="https://www.nature.com/articles/s41598-025-90396-3" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--atmos-blue)]">He et al., <em>Scientific Reports</em>, 2025</a>
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-[var(--atmos-ink)]">
            Joint and tendon conditions
          </h3>
          <p className="mt-4 text-lg leading-8 text-[var(--atmos-secondary)]">
            Localized cryotherapy specifically has been studied for common musculoskeletal conditions. A 2015 trial found 10 sessions significantly reduced tennis elbow pain. A 2008 study showed localized cryotherapy improved blood flow in Achilles tendinopathy. For knee osteoarthritis, a 2025 meta-analysis found cryotherapy combined with exercise produced significantly better pain outcomes than exercise alone.
          </p>
          <p className="mt-3 text-sm text-[var(--atmos-muted)]">
            Sources: <a href="https://www.balticsportscience.com/journal/vol7/iss3/7/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--atmos-blue)]">Kawa & Kowza-Dzwonkowska, 2015</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/18641371/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--atmos-blue)]">Knobloch et al., <em>Am J Sports Med</em>, 2008</a>; <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC12168428/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--atmos-blue)]">Dias et al., 2025</a>
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-[var(--atmos-ink)]">
            Migraine relief
          </h3>
          <p className="mt-4 text-lg leading-8 text-[var(--atmos-secondary)]">
            Targeted cooling has shown promise for headache relief. A randomized crossover trial applied cold to the carotid arteries in the neck of 55 migraine patients. Those receiving cold treatment saw a 32% reduction in pain within 30 minutes, while the control group actually got worse. The researchers believe cooling the blood supply to the brain may reduce the inflammation and vascular changes that drive migraine pain.
          </p>
          <p className="mt-3 text-sm text-[var(--atmos-muted)]">
            Source: <a href="https://pmc.ncbi.nlm.nih.gov/articles/PMC3727573/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--atmos-blue)]">Sprouse-Blum et al., <em>Hawaii J Med Public Health</em>, 2013</a>
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-[var(--atmos-ink)]">
            Skin and aesthetics
          </h3>
          <p className="mt-4 text-lg leading-8 text-[var(--atmos-secondary)]">
            The vasoconstriction-vasodilation cycle improves local blood flow and oxygen delivery to the skin. Cold activates fibroblasts and may stimulate collagen production. Clinically, cold therapy reduces puffiness, tightens pores, and produces the visible "flush" that clients notice immediately after treatment. Studies have also shown benefits for eczema and psoriasis, with reduced itching and improved skin appearance.
          </p>
          <p className="mt-3 text-sm text-[var(--atmos-muted)]">
            Sources: <a href="https://jcadonline.com/keloids-scars-treatment-review/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--atmos-blue)]"><em>J Clin Aesthet Dermatol</em>, 2020</a>; <a href="https://pubmed.ncbi.nlm.nih.gov/33538104/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--atmos-blue)]">Lee et al., 2021</a>
          </p>
        </div>

        <div className="mt-10">
          <h3 className="text-xl font-semibold text-[var(--atmos-ink)]">
            Mood and alertness
          </h3>
          <p className="mt-4 text-lg leading-8 text-[var(--atmos-secondary)]">
            The "energized" feeling people report after cold therapy isn't imaginary. Cold exposure triggers a surge in norepinephrine, the neurotransmitter linked to focus and mood. One study found a single cold water session increased norepinephrine by 530% and dopamine by 250%. Long-term research showed these effects don't diminish over time. This may explain why cold therapy has been studied as an add-on treatment for depression, with some trials showing significant improvement in mood scores.
          </p>
          <p className="mt-3 text-sm text-[var(--atmos-muted)]">
            Sources: <a href="https://pubmed.ncbi.nlm.nih.gov/10751106/" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--atmos-blue)]">Šrámek et al., <em>Eur J Appl Physiol</em>, 2000</a>; <a href="https://www.tandfonline.com/doi/full/10.1080/00365510701516350" target="_blank" rel="noopener noreferrer" className="underline hover:text-[var(--atmos-blue)]">Leppäluoto et al., 2008</a>
          </p>
        </div>

      </m.div>
    </section>
  );
}

// ============================================================================
// ATHLETES BANNER
// ============================================================================

function AthletesBanner() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#0f1012] px-6 py-20 text-white sm:px-8 sm:py-28 lg:px-12"
    >
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/cristiano.avif"
          alt=""
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f1012] via-[#0f1012]/80 to-transparent" />
      </div>

      <m.div
        className="relative mx-auto max-w-[1180px]"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, ease: EASE_OUT }}
      >
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-white/50">
          Professional Use
        </p>
        <h2 className="mt-4 max-w-[600px] text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          Trusted by elite athletes worldwide
        </h2>

        {/* Stats Row */}
        <div className="mt-10 flex flex-wrap gap-x-12 gap-y-4 text-lg">
          <span>15+ NFL teams</span>
          <span className="text-white/40">•</span>
          <span>UFC Performance Institute</span>
          <span className="text-white/40">•</span>
          <span>Olympic training centers</span>
        </div>

        {/* Specific Examples */}
        <div className="mt-10 max-w-[720px] space-y-4 text-base leading-7 text-white/70">
          <p>
            <strong className="text-white">Cristiano Ronaldo</strong> spent €45,000 to install a cryotherapy chamber in his Madrid home. When he moved to Manchester, the chamber came with him.
          </p>
          <p>
            The <strong className="text-white">2011 Dallas Mavericks</strong> used cryotherapy throughout their championship playoff run, a recovery edge that helped them outlast younger, deeper teams.
          </p>
          <p>
            <strong className="text-white">Leicester City FC</strong> incorporated cryotherapy during their improbable 2015–16 Premier League title season, helping players recover faster between matches.
          </p>
        </div>
      </m.div>
    </section>
  );
}

// ============================================================================
// FAQ SECTION
// ============================================================================

function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });
  const shouldReduceMotion = useReducedMotion();

  const faqItems = [
    {
      id: "faq-1",
      question: "Is it safe?",
      answer:
        "Yes. Localized cryotherapy has an excellent safety profile. You control the device, treat small areas at a time, and modern units include temperature sensors with automatic shutoffs. The most common effects are temporary redness and tingling that resolve within minutes. Standard precautions apply for conditions like Raynaud's disease, cold allergies, or pregnancy.",
    },
    {
      id: "faq-2",
      question: "Does cryotherapy burn 500 calories per session?",
      answer:
        "No. This is a popular claim with no peer-reviewed support. While cold exposure does activate brown fat and can increase your metabolic rate, studies suggest only about a 15% increase in resting metabolism, not several hundred calories per session. We don't make this claim.",
    },
    {
      id: "faq-3",
      question: "How does a handheld device compare to a cryo chamber?",
      answer:
        "Whole-body chambers have more clinical research, especially for systemic conditions. But localized devices are dramatically more accessible, lower-cost, and allow precise targeting of specific areas. For many use cases like targeted pain relief, sports recovery, and facial treatments, localized cryotherapy is more practical.",
    },
    {
      id: "faq-4",
      question: "Can cryotherapy treat arthritis or fibromyalgia?",
      answer:
        "Some studies show symptom improvement in conditions like rheumatoid arthritis. However, the FDA has explicitly warned against marketing cryotherapy as a treatment for medical conditions including arthritis, fibromyalgia, Alzheimer's, and MS. We position the CryoGun for recovery, pain relief, and aesthetics, not disease treatment.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <m.div
        className="mx-auto max-w-[720px]"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, ease: EASE_OUT }}
      >
        <h2 className="text-2xl font-semibold text-[var(--atmos-ink)] sm:text-3xl">
          Common questions
        </h2>

        <Accordion type="single" collapsible className="mt-8">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={item.id}
              value={item.id}
              className={index === faqItems.length - 1 ? "border-b-0" : ""}
            >
              <AccordionTrigger className="text-left text-lg font-medium text-[var(--atmos-ink)] hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-7 text-[var(--atmos-secondary)]">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </m.div>
    </section>
  );
}

// ============================================================================
// CLOSING SECTION
// ============================================================================

function ClosingSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white px-6 py-16 sm:px-8 sm:py-20 lg:px-12"
    >
      <m.div
        className="mx-auto max-w-[720px] text-center"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : undefined}
        transition={{ duration: 0.6, ease: EASE_OUT }}
      >
        <p className="text-lg leading-8 text-[var(--atmos-secondary)] sm:text-xl">
          We built this page because we believe informed buyers make better decisions. If you have questions about how localized cryotherapy might fit your practice, we're happy to talk through the evidence with you.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/book-demo"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--atmos-ink)] px-8 text-base font-medium text-white transition-colors duration-200 hover:bg-[var(--atmos-blue)]"
          >
            Book a Demo
          </Link>
          <Link
            href="/cryogun"
            className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--atmos-border)] px-8 text-base font-medium text-[var(--atmos-ink)] transition-colors duration-200 hover:bg-[var(--atmos-page)]"
          >
            View the CryoGun
          </Link>
        </div>
      </m.div>
    </section>
  );
}
