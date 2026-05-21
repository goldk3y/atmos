"use client";

import { m, useInView, useReducedMotion } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";
import type { VerticalPageData } from "@/data/verticals/types";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

interface FAQModuleProps {
  faq: VerticalPageData["faq"];
}

export default function FAQModule({ faq }: FAQModuleProps) {
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
        id="faq"
        className="w-full bg-[var(--atmos-canvas)] px-6 py-20 sm:px-8 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
            <m.h2
              className="text-3xl font-medium leading-[1.08] text-[var(--atmos-ink)] sm:text-4xl md:text-5xl"
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
              Frequently Asked Questions
            </m.h2>
            <m.p
              className="mt-4 text-base leading-7 text-[var(--atmos-secondary)] sm:text-lg sm:leading-8 md:text-xl"
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
              Common questions about equipment, training, and support.
            </m.p>
          </div>

          <m.div
            className="mx-auto mt-10 max-w-3xl sm:mt-14"
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, transform: "translateY(24px)" }
            }
            animate={
              isInView
                ? { opacity: 1, transform: "translateY(0px)" }
                : undefined
            }
            transition={{ duration: 0.55, delay: 0.18, ease: EASE_OUT }}
          >
            <Accordion
              type="single"
              collapsible
              className="w-full rounded-2xl border border-[var(--atmos-border)] bg-[var(--atmos-surface)] px-5 py-2 shadow-none sm:px-8 sm:py-3"
            >
              {faq.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className={
                    index === faq.length - 1 ? "!border-0" : "border-dashed"
                  }
                >
                  <AccordionTrigger className="cursor-pointer text-left text-base font-medium leading-6 text-[var(--atmos-ink)] hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-base text-[var(--atmos-secondary)]">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            <p className="mt-6 px-2 text-center text-sm leading-6 text-[var(--atmos-secondary)] sm:px-8 sm:text-base">
              Have other questions?{" "}
              <Link
                href="/book-demo"
                className="font-medium text-[var(--atmos-blue)] hover:underline"
              >
                Talk to our team
              </Link>
            </p>
          </m.div>
        </div>
      </section>
    </LazyMotionProvider>
  );
}
