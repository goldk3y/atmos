"use client";

import { clsx } from "clsx";
import { m, useInView, useReducedMotion } from "motion/react";
import { ImageIcon } from "lucide-react";
import { useRef } from "react";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";
import type { VerticalPageData } from "@/data/verticals/types";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

interface ThreePillarSolutionProps {
  threePillars: VerticalPageData["threePillars"];
}

const PILLAR_DATA = [
  {
    key: "equipment" as const,
    eyebrow: "Equipment",
  },
  {
    key: "training" as const,
    eyebrow: "Training",
  },
  {
    key: "support" as const,
    eyebrow: "Support",
  },
];

export default function ThreePillarSolution({
  threePillars,
}: ThreePillarSolutionProps) {
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
        className="w-full bg-[var(--atmos-page)] px-6 py-20 sm:px-8 sm:py-24 md:py-32"
      >
        <div className="mx-auto flex max-w-[1180px] flex-col">
          <m.h2
            className="max-w-3xl text-3xl font-medium leading-[1.08] text-[var(--atmos-ink)] sm:text-4xl sm:leading-[1.05] md:text-5xl"
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
            Everything you need to deliver
          </m.h2>

          <m.p
            className="mt-4 max-w-2xl text-base leading-7 text-[var(--atmos-secondary)] sm:text-lg sm:leading-8 md:text-xl"
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
            transition={{ duration: 0.5, delay: 0.08, ease: EASE_OUT }}
          >
            Equipment, training, and support designed to help localized
            cryotherapy become a service you can offer professionally.
          </m.p>

          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 lg:grid-cols-3">
            {PILLAR_DATA.map((pillar, i) => (
              <PillarCard
                key={pillar.key}
                eyebrow={pillar.eyebrow}
                outcome={threePillars[pillar.key].outcome}
                detail={threePillars[pillar.key].detail}
                isInView={isInView}
                index={i}
                shouldReduceMotion={!!shouldReduceMotion}
              />
            ))}
          </div>
        </div>
      </section>
    </LazyMotionProvider>
  );
}

function PillarCard({
  eyebrow,
  outcome,
  detail,
  isInView,
  index,
  shouldReduceMotion,
}: {
  eyebrow: string;
  outcome: string;
  detail: string;
  isInView: boolean;
  index: number;
  shouldReduceMotion: boolean;
}) {
  return (
    <m.div
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
      transition={{
        duration: 0.55,
        delay: 0.15 + index * 0.07,
        ease: EASE_OUT,
      }}
      className={clsx(
        "group relative flex transform-gpu flex-col overflow-hidden rounded-[1.25rem]",
        "bg-[var(--atmos-canvas)] ring-1 ring-[var(--atmos-border)]",
        "transition-[transform,box-shadow,ring-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:ring-[var(--atmos-secondary)]"
      )}
    >
      <div className="relative h-56 shrink-0 p-2 sm:h-[18rem]">
        <div className="relative flex h-full flex-col items-center justify-center overflow-hidden rounded-[1rem] bg-[var(--atmos-fill)]">
          <ImageIcon className="size-12 text-[var(--atmos-muted)]" />
        </div>
      </div>

      <div className="relative isolate z-20 flex min-h-[13rem] flex-col p-6 text-[var(--atmos-ink)] sm:min-h-[15rem] sm:p-8">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--atmos-muted)]">
          {eyebrow}
        </p>

        <p className="mt-3 text-xl font-medium leading-7 text-[var(--atmos-ink)] sm:mt-4 sm:text-2xl sm:leading-8">
          {outcome}
        </p>

        <p className="mt-3 max-w-[600px] text-sm leading-6 text-[var(--atmos-secondary)] sm:mt-4">
          {detail}
        </p>
      </div>
    </m.div>
  );
}
