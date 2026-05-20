"use client";

import { m, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";
import type { VerticalPageData } from "@/data/verticals/types";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

interface ProblemStatementProps {
  problem: VerticalPageData["problem"];
}

export default function ProblemStatement({ problem }: ProblemStatementProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -200px 0px",
  });
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotionProvider>
      <section
        ref={sectionRef}
        className="w-full bg-[var(--atmos-light-gray)] px-6 py-16 sm:px-8 sm:py-20 md:py-24"
      >
        <div className="mx-auto max-w-3xl text-center">
          <m.p
            className="text-xl leading-8 text-[var(--atmos-ink)] sm:text-2xl sm:leading-9 md:text-3xl md:leading-10"
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, transform: "translateY(16px)" }
            }
            animate={
              isInView
                ? { opacity: 1, transform: "translateY(0px)" }
                : undefined
            }
            transition={{ duration: 0.5, ease: EASE_OUT }}
          >
            {problem.statement}
          </m.p>
        </div>
      </section>
    </LazyMotionProvider>
  );
}
