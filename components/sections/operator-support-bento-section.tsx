"use client";

import { clsx } from "clsx";
import { m, useInView, useReducedMotion } from "motion/react";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { useRef, type ReactNode } from "react";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];
const EMPTY_FADE: ("top" | "bottom")[] = [];

export default function OperatorSupportBentoSection() {
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
        id="features"
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
            Designed to help you deliver
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
            {[
              {
                eyebrow: "Equipment",
                title: "Portable, no buildout",
                description:
                  "A portable localized cryotherapy system designed for professional service environments without a full-room buildout.",
                link: "#equipment",
              },
              {
                eyebrow: "Training",
                title: "Confidence from day one",
                description:
                  "Operator training covers setup, handling, use-case framing, and responsible service delivery before your system moves forward.",
                link: "#training",
              },
              {
                eyebrow: "Support",
                title: "Support that stays with you",
                description:
                  "From first conversation to launch, Atmos helps you answer the practical questions that come up before and after purchase.",
                link: "#support",
              },
            ].map((card, i) => (
              <BentoCard
                key={card.eyebrow}
                eyebrow={card.eyebrow}
                title={card.title}
                description={card.description}
                link={card.link}
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

function BentoCard({
  dark = false,
  className = "",
  eyebrow,
  title,
  description,
  fade = EMPTY_FADE,
  link,
  isInView = true,
  index = 0,
  shouldReduceMotion = false,
}: {
  dark?: boolean;
  className?: string;
  eyebrow: ReactNode;
  title: ReactNode;
  description: ReactNode;
  fade?: ("top" | "bottom")[];
  link?: string;
  isInView?: boolean;
  index?: number;
  shouldReduceMotion?: boolean;
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
      data-dark={dark ? "true" : undefined}
      className={clsx(
        className,
        "group relative flex transform-gpu flex-col overflow-hidden rounded-[var(--card-radius)] [--card-padding:0.5rem] [--card-radius:1.25rem] [--image-radius:calc(var(--card-radius)-var(--card-padding))]",
        "bg-[var(--atmos-canvas)] ring-1 ring-[var(--atmos-border)]",
        "transition-[transform,box-shadow,ring-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:ring-[#cfcfd5]",
      )}
    >
      <div className="relative h-56 shrink-0 p-[var(--card-padding)] sm:h-[18rem]">
        <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[var(--image-radius)] bg-[var(--atmos-light-gray)]">
          <ImageIcon className="size-16 text-[var(--atmos-muted)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(253,253,253,0.08),rgba(15,16,18,0.14))]" />

          {fade.includes("top") && (
            <div className="absolute inset-0 bg-gradient-to-b from-white to-50% opacity-25 group-data-[dark]:from-neutral-800 group-data-[dark]:from-[-25%]" />
          )}

          {fade.includes("bottom") && (
            <div className="absolute inset-0 bg-gradient-to-t from-white to-50% opacity-25 group-data-[dark]:from-neutral-800 group-data-[dark]:from-[-25%]" />
          )}
        </div>
      </div>

      <div className="relative isolate z-20 flex min-h-[13rem] flex-col p-6 text-[var(--atmos-ink)] sm:min-h-[15rem] sm:p-8">
        <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--atmos-muted)]">
          {eyebrow}
        </p>

        <p className="mt-3 text-xl font-medium leading-7 text-[var(--atmos-ink)] sm:mt-4 sm:text-2xl sm:leading-8">
          {title}
        </p>

        <p className="mt-3 max-w-[600px] text-sm leading-6 text-[var(--atmos-secondary)] sm:mt-4">
          {description}
        </p>

        {link && (
          <a
            href={link}
            className="mt-auto flex items-center gap-1 pt-6 text-sm font-medium text-[var(--atmos-blue)] transition-[gap] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:gap-2"
          >
            Learn more
            <ArrowRight className="size-4" />
          </a>
        )}
      </div>
    </m.div>
  );
}
