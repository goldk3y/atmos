"use client";

import { m, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

export default function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -350px 0px",
  });
  const shouldReduceMotion = useReducedMotion();

  const faqItems = [
    {
      id: "item-1",
      question: "What is localized cryotherapy?",
      answer:
        "Localized cryotherapy delivers focused cold therapy to specific areas of the body, providing targeted relief for pain, inflammation, and muscle recovery. Unlike whole-body cryotherapy, it treats precise areas for more concentrated results.",
    },
    {
      id: "item-2",
      question:
        "How does Atmos equipment differ from other cryotherapy systems?",
      answer:
        "Atmos equipment is designed for precision, safety, and ease of use. Our systems feature advanced temperature control, ergonomic designs for practitioner comfort, and comprehensive training programs to ensure optimal treatment outcomes.",
    },
    {
      id: "item-3",
      question: "What training and support do you provide?",
      answer:
        "We provide comprehensive onboarding training, ongoing educational resources, and dedicated customer support. Our team helps you master equipment operation, treatment protocols, and best practices for integrating cryotherapy into your practice.",
    },
    {
      id: "item-4",
      question: "Do you offer financing options?",
      answer:
        "Yes, we offer flexible financing solutions to help you acquire Atmos equipment. Contact our sales team to discuss payment plans, leasing options, and packages that fit your business needs and budget.",
    },
    {
      id: "item-5",
      question: "What is your warranty and maintenance policy?",
      answer:
        "All Atmos equipment comes with a comprehensive warranty covering parts and labor. We also offer preventive maintenance plans and priority service options to keep your equipment running smoothly and minimize downtime.",
    },
  ];

  return (
    <LazyMotionProvider>
      <section
        ref={sectionRef}
        id="faq"
        className="w-full bg-[var(--atmos-page)] px-6 py-20 sm:px-8 sm:py-24 md:py-32"
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
              Find answers to common questions about our cryotherapy equipment,
              training programs, and support services.
            </m.p>
          </div>

          <m.div
            className="mx-auto mt-10 max-w-3xl sm:mt-12"
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
              className="w-full rounded-2xl border border-[var(--atmos-border)] bg-[var(--atmos-canvas)] px-5 py-2 shadow-none sm:px-8 sm:py-3"
            >
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className={
                    index === faqItems.length - 1
                      ? "!border-0"
                      : "border-dashed"
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
              Can&apos;t find what you&apos;re looking for? Contact our{" "}
              <Link
                href="/book-demo"
                className="font-medium text-[var(--atmos-blue)] hover:underline"
              >
                support team
              </Link>
            </p>
          </m.div>
        </div>
      </section>
    </LazyMotionProvider>
  );
}
