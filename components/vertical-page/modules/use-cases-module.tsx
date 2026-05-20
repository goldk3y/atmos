"use client";

import { clsx } from "clsx";
import { m, useInView, useReducedMotion, AnimatePresence } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";
import type { VerticalPageData } from "@/data/verticals/types";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const PLACEHOLDER_IMAGES = [
  "/chiro.jpg",
  "/equine.jpg",
  "/spa.jpg",
  "/sports-recovery.jpg",
];

interface UseCasesModuleProps {
  useCases: VerticalPageData["useCases"];
}

export default function UseCasesModule({ useCases }: UseCasesModuleProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -350px 0px",
  });
  const shouldReduceMotion = useReducedMotion();
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <LazyMotionProvider>
      <section
        ref={sectionRef}
        className="w-full bg-[var(--atmos-canvas)] px-6 py-20 sm:px-8 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1180px]">
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
            How it&apos;s used
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
            Real applications from facilities like yours.
          </m.p>

          <m.div
            className="mt-10 grid grid-cols-1 gap-8 sm:mt-14 lg:grid-cols-2 lg:gap-12"
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, transform: "translateY(20px)" }
            }
            animate={
              isInView
                ? { opacity: 1, transform: "translateY(0px)" }
                : undefined
            }
            transition={{ duration: 0.5, delay: 0.15, ease: EASE_OUT }}
          >
            {/* Image on the left */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--atmos-border)] bg-[var(--atmos-light-gray)] lg:aspect-square">
              <AnimatePresence initial={false}>
                <m.div
                  key={selectedIndex}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  <Image
                    src={PLACEHOLDER_IMAGES[selectedIndex % PLACEHOLDER_IMAGES.length]}
                    alt=""
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </m.div>
              </AnimatePresence>
            </div>

            {/* Selectable list on the right */}
            <div className="flex flex-col divide-y divide-[var(--atmos-border)]">
              {useCases.map((useCase, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedIndex(i)}
                  className="group w-full py-6 text-left first:pt-0 last:pb-0"
                >
                  <div className="inline-flex flex-col">
                    <h3
                      className={clsx(
                        "text-lg font-medium transition-colors duration-200 sm:text-xl",
                        selectedIndex === i
                          ? "text-[var(--atmos-ink)]"
                          : "text-[var(--atmos-secondary)] group-hover:text-[var(--atmos-ink)]"
                      )}
                    >
                      {useCase.title}
                    </h3>
                    <m.div
                      initial={false}
                      animate={{
                        width: selectedIndex === i ? "100%" : "0%",
                      }}
                      transition={{ duration: 0.3, ease: EASE_OUT }}
                      className="mt-1 h-0.5 bg-[var(--atmos-blue)]"
                    />
                  </div>
                  <m.div
                    initial={false}
                    animate={{
                      height: selectedIndex === i ? "auto" : 0,
                      opacity: selectedIndex === i ? 1 : 0,
                    }}
                    transition={{ duration: 0.25, ease: EASE_OUT }}
                    className="overflow-hidden"
                  >
                    <p className="mt-3 text-sm leading-6 text-[var(--atmos-secondary)] sm:text-base sm:leading-7">
                      {useCase.description}
                    </p>
                  </m.div>
                </button>
              ))}
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotionProvider>
  );
}
