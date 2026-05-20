"use client";

import { m, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";
import type { RevenuePotentialData } from "@/data/verticals/types";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

interface RevenuePotentialModuleProps {
  revenuePotential: RevenuePotentialData;
}

export default function RevenuePotentialModule({
  revenuePotential,
}: RevenuePotentialModuleProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -200px 0px",
  });
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion
    ? false
    : { opacity: 0, transform: "translateY(20px)" };

  function animateProps(delay: number) {
    return {
      initial,
      animate: isInView
        ? { opacity: 1, transform: "translateY(0px)" }
        : undefined,
      transition: { duration: 0.5, delay, ease: EASE_OUT },
    };
  }

  return (
    <LazyMotionProvider>
      <section
        ref={sectionRef}
        id="roi"
        className="w-full bg-[var(--atmos-canvas)] px-6 py-20 sm:px-8 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <div>
              <m.p
                className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--atmos-muted)]"
                {...animateProps(0)}
              >
                {revenuePotential.label}
              </m.p>
              <m.h2
                className="mt-3 text-3xl font-medium leading-[1.08] text-[var(--atmos-ink)] sm:text-4xl sm:leading-[1.05] md:text-5xl"
                {...animateProps(0.06)}
              >
                {revenuePotential.heading}
              </m.h2>
              <m.p
                className="mt-4 text-base leading-7 text-[var(--atmos-secondary)] sm:text-lg sm:leading-8 md:text-xl"
                {...animateProps(0.12)}
              >
                {revenuePotential.description}
              </m.p>
              <m.div className="mt-8" {...animateProps(0.18)}>
                <Link
                  href="/book-demo"
                  className="inline-flex items-center gap-1 text-[1.05rem] font-medium text-[var(--atmos-blue)] transition-[gap] duration-200 hover:gap-2"
                >
                  {revenuePotential.ctaText}
                  <ArrowRight className="size-4" />
                </Link>
              </m.div>
            </div>

            <m.div
              className="p-6 ring-1 ring-[var(--atmos-border)] sm:p-8"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, transform: "translateY(24px) scale(0.97)" }
              }
              animate={
                isInView
                  ? { opacity: 1, transform: "translateY(0px) scale(1)" }
                  : undefined
              }
              transition={{ duration: 0.55, delay: 0.2, ease: EASE_OUT }}
            >
              <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--atmos-muted)]">
                Revenue Calculator
              </p>

              <div className="mt-6 space-y-4">
                {revenuePotential.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="flex items-center justify-between py-1"
                  >
                    <span className="text-sm text-[var(--atmos-secondary)] sm:text-base">
                      {metric.label}
                    </span>
                    <span className="text-base font-medium text-[var(--atmos-ink)] sm:text-lg">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-[var(--atmos-border)] pt-6">
                <div>
                  <span className="block text-sm text-[var(--atmos-secondary)] sm:text-base">
                    {revenuePotential.highlight.label}
                  </span>
                  <span className="block text-xs italic text-[var(--atmos-muted)]">
                    {revenuePotential.highlight.sublabel}
                  </span>
                </div>
                <span className="text-lg font-semibold text-[var(--atmos-green)] sm:text-xl">
                  {revenuePotential.highlight.value}
                </span>
              </div>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotionProvider>
  );
}
