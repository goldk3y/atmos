"use client";

import { m, useInView, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";
import type { VerticalPageData } from "@/data/verticals/types";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

interface SocialProofBarProps {
  socialProof: VerticalPageData["socialProof"];
}

export default function SocialProofBar({ socialProof }: SocialProofBarProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -100px 0px",
  });
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotionProvider>
      <section
        ref={sectionRef}
        className="w-full border-y border-[var(--atmos-border)] bg-[var(--atmos-canvas)] px-6 py-8 sm:px-8 sm:py-10"
      >
        <div className="mx-auto max-w-[1180px]">
          <m.p
            className="text-center text-base font-medium leading-7 text-[var(--atmos-ink)] sm:text-lg"
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
            transition={{ duration: 0.5, ease: EASE_OUT }}
          >
            {socialProof.statement}
          </m.p>

          {socialProof.logos && socialProof.logos.length > 0 && (
            <m.div
              className="mt-6 flex flex-wrap items-center justify-center gap-8 opacity-60 grayscale"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, transform: "translateY(12px)" }
              }
              animate={
                isInView
                  ? { opacity: 0.6, transform: "translateY(0px)" }
                  : undefined
              }
              transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT }}
            >
              {socialProof.logos.map((logo, i) => (
                <div key={i} className="relative h-8 w-24">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                  />
                </div>
              ))}
            </m.div>
          )}
        </div>
      </section>
    </LazyMotionProvider>
  );
}
