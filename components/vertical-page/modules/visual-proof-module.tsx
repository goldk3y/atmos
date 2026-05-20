"use client";

import { m, useInView, useReducedMotion } from "motion/react";
import { Video } from "lucide-react";
import { useRef } from "react";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";
import type { VerticalPageData } from "@/data/verticals/types";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

interface VisualProofModuleProps {
  visualProof: VerticalPageData["visualProof"];
}

export default function VisualProofModule({
  visualProof: _visualProof,
}: VisualProofModuleProps) {
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
        id="walkthrough"
        className="w-full bg-[var(--atmos-page)] px-6 py-20 sm:px-8 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1180px]">
          <m.h2
            className="mb-10 text-center text-3xl font-medium leading-[1.08] text-[var(--atmos-ink)] sm:mb-14 sm:text-4xl sm:leading-[1.05] md:text-5xl"
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
            See it in action
          </m.h2>

          <m.div
            className="mx-auto max-w-3xl"
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, transform: "translateY(32px) scale(0.97)" }
            }
            animate={
              isInView
                ? { opacity: 1, transform: "translateY(0px) scale(1)" }
                : undefined
            }
            transition={{ duration: 0.65, ease: EASE_OUT }}
          >
            {/* Placeholder for short video loop */}
            <div className="flex aspect-video flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[var(--atmos-border)] bg-[var(--atmos-light-gray)]">
              <Video className="size-12 text-[var(--atmos-muted)]" />
              <p className="mt-4 text-sm font-medium text-[var(--atmos-muted)]">
                Short video loop (3 to 5 seconds)
              </p>
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotionProvider>
  );
}
