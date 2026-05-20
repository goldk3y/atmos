"use client";

import { m } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";
import type { VerticalPageData } from "@/data/verticals/types";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

interface HeroModuleProps {
  hero: VerticalPageData["hero"];
  trustSignals: VerticalPageData["trustSignals"];
  socialProof: VerticalPageData["socialProof"];
}

export default function HeroModule({ hero, trustSignals, socialProof }: HeroModuleProps) {
  return (
    <LazyMotionProvider>
      <section className="relative w-full overflow-hidden bg-[var(--atmos-page)]">
        <div className="mx-auto grid max-w-[1180px] grid-cols-1 gap-8 px-6 py-16 sm:px-8 sm:py-20 md:py-24 lg:grid-cols-2 lg:gap-12 lg:py-28">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <m.h1
              className="text-4xl font-semibold leading-[1.08] text-[var(--atmos-ink)] sm:text-5xl sm:leading-[1.05] lg:text-6xl text-pretty"
              initial={{ opacity: 0, transform: "translateY(16px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT }}
            >
              {hero.stat}
            </m.h1>

            <m.p
              className="mt-5 max-w-xl text-lg leading-7 text-[var(--atmos-secondary)] sm:mt-6 sm:text-xl sm:leading-8 text-pretty"
              initial={{ opacity: 0, transform: "translateY(12px)" }}
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE_OUT }}
            >
              {hero.subhead}
            </m.p>

            <m.div
              className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
              initial={{ opacity: 0, transform: "translateY(12px) scale(0.97)" }}
              animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
              transition={{ duration: 0.45, delay: 0.3, ease: EASE_OUT }}
            >
              <Link
                href="/book-demo"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--atmos-blue)] px-6 py-3 text-center text-sm font-medium text-white transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[#0064c8] active:scale-[0.97] sm:min-h-0 sm:px-8 sm:py-3.5 sm:text-base"
              >
                {hero.ctaText}
              </Link>
            </m.div>

            {/* Trust Signals */}
            <m.div
              className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--atmos-muted)]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.45, ease: EASE_OUT }}
            >
              {trustSignals.microcopy.slice(0, 3).map((signal, i) => (
                <span key={i} className="flex items-center gap-1.5">
                  <svg
                    className="size-4 text-[var(--atmos-green)]"
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

          {/* Hero Image */}
          <m.div
            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[var(--atmos-light-gray)] lg:aspect-square"
            initial={{ opacity: 0, transform: "scale(0.96)" }}
            animate={{ opacity: 1, transform: "scale(1)" }}
            transition={{ duration: 0.6, delay: 0.2, ease: EASE_OUT }}
          >
            <Image
              src={hero.heroImage}
              alt={hero.heroImageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </m.div>
        </div>

        {/* Social Proof Bar - Above the fold */}
        <m.div
          className="border-t border-[var(--atmos-border)] bg-[var(--atmos-canvas)] px-6 py-6 sm:px-8 sm:py-8"
          initial={{ opacity: 0, transform: "translateY(8px)" }}
          animate={{ opacity: 1, transform: "translateY(0px)" }}
          transition={{ duration: 0.5, delay: 0.5, ease: EASE_OUT }}
        >
          <p className="mx-auto max-w-[1180px] text-center text-base font-medium leading-7 text-[var(--atmos-ink)] sm:text-lg">
            {socialProof.statement}
          </p>
        </m.div>
      </section>
    </LazyMotionProvider>
  );
}
