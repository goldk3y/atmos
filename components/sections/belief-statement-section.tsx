"use client";

import { m, useInView, useReducedMotion } from "motion/react";
import { useMemo, useRef } from "react";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";

const BELIEF_PARAGRAPHS = [
  "Fifty years of clinical evidence shows cryotherapy reduces pain, accelerates recovery, and restores range of motion.",
  "What's kept it out of more practices is not the evidence, it's the equipment. Existing options require dedicated cryotherapy facilities, Atmos was built for the practice you already run.",
];

type BeliefStatementSectionProps = {
  className?: string;
};

type ScrollRevealParagraphsProps = {
  paragraphs: string[];
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
    <LazyMotionProvider>
      <section
        id="belief"
        aria-label="Atmos belief statement"
        className={`relative w-full overflow-hidden bg-[var(--atmos-canvas)] px-6 py-32 sm:px-8 sm:py-40 md:py-48 ${className}`}
      >
        <div className="relative mx-auto max-w-4xl">
          <ScrollRevealParagraphs
            paragraphs={BELIEF_PARAGRAPHS}
            className="text-balance text-center text-2xl font-medium leading-[1.65] text-[var(--atmos-ink)] sm:text-2xl sm:leading-[1.7] lg:text-3xl"
          />
        </div>
      </section>
    </LazyMotionProvider>
  );
}

function ScrollRevealParagraphs({
  paragraphs,
  className = "",
}: ScrollRevealParagraphsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: true,
    amount: 0.35,
  });
  const shouldReduceMotion = useReducedMotion();

  const allWords = useMemo(() => {
    let globalIndex = 0;
    return paragraphs.map((text) => {
      const words = Array.from(text.matchAll(/\S+/g), (match) => {
        const word = {
          key: `${match[0]}-${match.index ?? 0}-${globalIndex}`,
          value: match[0],
          globalIndex,
        };
        globalIndex++;
        return word;
      });
      return { text, words };
    });
  }, [paragraphs]);

  if (shouldReduceMotion) {
    return (
      <div ref={containerRef} className="flex flex-col gap-6">
        {paragraphs.map((text, index) => (
          <p key={index} className={className}>
            {text}
          </p>
        ))}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="flex flex-col gap-6">
      {allWords.map((paragraph, pIndex) => (
        <p key={pIndex} className={className}>
          <span className="sr-only">{paragraph.text}</span>

          <span aria-hidden="true">
            {paragraph.words.map((word) => (
              <RevealWord
                key={word.key}
                word={word.value}
                index={word.globalIndex}
                isInView={isInView}
              />
            ))}
          </span>
        </p>
      ))}
    </div>
  );
}

function RevealWord({ word, index, isInView }: RevealWordProps) {
  return (
    <span className="relative mr-[0.28em] inline-block">
      <span className="text-[var(--atmos-ink-ghost)]">{word}</span>

      <m.span
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
      </m.span>
    </span>
  );
}
