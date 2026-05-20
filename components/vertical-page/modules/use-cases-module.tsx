"use client";

import { clsx } from "clsx";
import { m, useInView, useReducedMotion } from "motion/react";
import Image from "next/image";
import { useRef } from "react";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";
import type { VerticalPageData } from "@/data/verticals/types";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

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

          <div className="mt-10 grid grid-cols-1 gap-5 sm:mt-14 sm:grid-cols-2">
            {useCases.map((useCase, i) => (
              <UseCaseCard
                key={i}
                title={useCase.title}
                description={useCase.description}
                image={useCase.image}
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

function UseCaseCard({
  title,
  description,
  image,
  isInView,
  index,
  shouldReduceMotion,
}: {
  title: string;
  description: string;
  image?: string;
  isInView: boolean;
  index: number;
  shouldReduceMotion: boolean;
}) {
  return (
    <m.div
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
      transition={{
        duration: 0.5,
        delay: 0.15 + index * 0.08,
        ease: EASE_OUT,
      }}
      className={clsx(
        "group flex flex-col overflow-hidden rounded-2xl",
        "border border-[var(--atmos-border)] bg-[var(--atmos-page)]",
        "transition-[transform,border-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-0.5 hover:border-[#cfcfd5]"
      )}
    >
      {image && (
        <div className="relative h-40 w-full overflow-hidden bg-[var(--atmos-light-gray)]">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      )}

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-medium text-[var(--atmos-ink)] sm:text-xl">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-6 text-[var(--atmos-secondary)] sm:text-base sm:leading-7">
          {description}
        </p>
      </div>
    </m.div>
  );
}
