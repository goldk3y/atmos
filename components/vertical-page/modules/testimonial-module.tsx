"use client";

import { m, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";
import type { VerticalPageData } from "@/data/verticals/types";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

interface TestimonialModuleProps {
  testimonial: VerticalPageData["testimonial"];
}

export default function TestimonialModule({
  testimonial,
}: TestimonialModuleProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -200px 0px",
  });
  const shouldReduceMotion = useReducedMotion();

  const initials = testimonial.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <LazyMotionProvider>
      <section
        ref={sectionRef}
        className="w-full bg-[var(--atmos-page)] px-6 py-20 sm:px-8 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-3xl">
          <m.div
            className="rounded-2xl border border-[var(--atmos-border)] bg-[var(--atmos-canvas)] p-8 sm:p-10 md:p-12"
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, transform: "translateY(24px) scale(0.98)" }
            }
            animate={
              isInView
                ? { opacity: 1, transform: "translateY(0px) scale(1)" }
                : undefined
            }
            transition={{ duration: 0.55, ease: EASE_OUT }}
          >
            {/* Quote mark */}
            <div className="mb-6 text-5xl leading-none text-[var(--atmos-muted)] opacity-40">
              &ldquo;
            </div>

            <blockquote>
              <p className="text-lg font-medium leading-8 text-[var(--atmos-ink)] sm:text-xl sm:leading-9 md:text-2xl md:leading-10">
                {testimonial.quote}
              </p>
            </blockquote>

            <div className="mt-8 flex items-center gap-4">
              <Avatar className="size-14">
                {testimonial.avatar && (
                  <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                )}
                <AvatarFallback className="bg-[var(--atmos-light-gray)] text-[var(--atmos-ink)] ring-1 ring-[var(--atmos-border)]">
                  {initials}
                </AvatarFallback>
              </Avatar>

              <div>
                <cite className="block text-base font-medium not-italic text-[var(--atmos-ink)]">
                  {testimonial.name}
                </cite>
                <span className="block text-sm text-[var(--atmos-secondary)]">
                  {testimonial.title}, {testimonial.facility}
                </span>
              </div>
            </div>

          </m.div>
        </div>
      </section>
    </LazyMotionProvider>
  );
}
