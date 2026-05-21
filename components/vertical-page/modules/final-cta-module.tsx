"use client";

import { m, useInView, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";
import type { VerticalPageData } from "@/data/verticals/types";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

interface FinalCTAModuleProps {
  finalCta: VerticalPageData["finalCta"];
  trustSignals: VerticalPageData["trustSignals"];
}

export default function FinalCTAModule({
  finalCta,
  trustSignals,
}: FinalCTAModuleProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -350px 0px",
  });
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotionProvider>
      <section
        ref={sectionRef}
        id="demo"
        className="w-full bg-[var(--atmos-elevated-bg)] px-6 py-20 text-[var(--atmos-elevated-fg)] sm:px-8 sm:py-24 md:py-32"
      >
        <div className="mx-auto flex max-w-[860px] flex-col items-center text-center">
          <m.h2
            className="max-w-3xl text-3xl font-medium leading-[1.08] sm:text-4xl sm:leading-[1.05] md:text-6xl"
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
            {finalCta.heading}
          </m.h2>

          <m.p
            className="mt-4 max-w-2xl text-base leading-7 text-[var(--atmos-elevated-muted)] sm:mt-6 sm:text-lg sm:leading-8 md:text-xl"
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, transform: "translateY(12px)" }
            }
            animate={
              isInView
                ? { opacity: 1, transform: "translateY(0px)" }
                : undefined
            }
            transition={{ duration: 0.5, delay: 0.12, ease: EASE_OUT }}
          >
            {finalCta.subheading}
          </m.p>

          <m.div
            className="mt-7 flex w-full max-w-sm flex-col justify-center gap-3 sm:mt-9 sm:max-w-none sm:flex-row"
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, transform: "translateY(12px) scale(0.97)" }
            }
            animate={
              isInView
                ? { opacity: 1, transform: "translateY(0px) scale(1)" }
                : undefined
            }
            transition={{ duration: 0.45, delay: 0.2, ease: EASE_OUT }}
          >
            <Link
              href="/book-demo"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--atmos-blue)] px-6 py-3 text-center text-sm font-medium text-white transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[var(--atmos-blue-hover)] active:scale-[0.97]"
            >
              {finalCta.ctaText}
            </Link>
          </m.div>

          {/* Trust microcopy */}
          <m.p
            className="mt-5 text-sm text-[var(--atmos-elevated-secondary)]"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : undefined}
            transition={{ duration: 0.5, delay: 0.3, ease: EASE_OUT }}
          >
            {finalCta.microcopy}
          </m.p>

          {/* Trust signals */}
          <m.div
            className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-[var(--atmos-elevated-secondary)]"
            initial={shouldReduceMotion ? false : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : undefined}
            transition={{ duration: 0.5, delay: 0.35, ease: EASE_OUT }}
          >
            {trustSignals.microcopy.slice(0, 4).map((signal, i) => (
              <span key={i} className="flex items-center gap-1.5">
                <svg
                  className="size-3.5 text-[var(--atmos-green)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                {signal}
              </span>
            ))}
          </m.div>
        </div>
      </section>
    </LazyMotionProvider>
  );
}
