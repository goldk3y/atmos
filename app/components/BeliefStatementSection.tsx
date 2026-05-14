"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { useMemo, useRef } from "react";

const BELIEF_STATEMENT =
  "Localized cryotherapy brings focused cold therapy into the moments where comfort, performance, and care matter most. Atmos exists to help you deliver that experience with exceptional equipment, thoughtful training, and support that carries beyond the sale.";

type BeliefStatementSectionProps = {
  className?: string;
};

type ScrollRevealParagraphProps = {
  text: string;
  className?: string;
};

type RevealWordProps = {
  word: string;
  index: number;
  isInView: boolean;
};

export default function BeliefStatementSection({
  className = "",
}: BeliefStatementSectionProps) {
  return (
    <section
      id="belief"
      aria-label="Atmos belief statement"
      className={`relative w-full overflow-hidden bg-[var(--atmos-canvas)] px-6 py-24 sm:px-8 md:py-48 ${className}`}
    >
      <div className="relative mx-auto max-w-4xl">
        <ScrollRevealParagraph
          text={BELIEF_STATEMENT}
          className="text-balance text-center text-base font-medium leading-[1.8] text-[var(--atmos-ink)] sm:text-lg md:text-xl lg:text-2xl"
        />
      </div>
    </section>
  );
}

function ScrollRevealParagraph({
  text,
  className = "",
}: ScrollRevealParagraphProps) {
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const isInView = useInView(paragraphRef, {
    once: true,
    amount: 0.35,
  });
  const shouldReduceMotion = useReducedMotion();

  const words = useMemo(() => text.trim().split(/\s+/), [text]);

  if (shouldReduceMotion) {
    return (
      <p ref={paragraphRef} className={className}>
        {text}
      </p>
    );
  }

  return (
    <p ref={paragraphRef} className={className}>
      <span className="sr-only">{text}</span>

      <span aria-hidden="true">
        {words.map((word, index) => (
          <RevealWord
            key={`${word}-${index}`}
            word={word}
            index={index}
            isInView={isInView}
          />
        ))}
      </span>
    </p>
  );
}

function RevealWord({ word, index, isInView }: RevealWordProps) {
  return (
    <span className="relative mr-[0.28em] inline-block">
      <span className="text-[color:rgba(15,16,18,0.2)]">{word}</span>

      <motion.span
        className="absolute inset-0 text-[var(--atmos-ink)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{
          duration: 0.9,
          delay: index * 0.018,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {word}
      </motion.span>
    </span>
  );
}
