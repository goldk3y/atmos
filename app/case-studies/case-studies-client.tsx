"use client";

import { useState } from "react";
import { m, useReducedMotion } from "motion/react";
import Image from "next/image";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";
import { cn } from "@/lib/utils";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "clinic", label: "Clinics" },
  { id: "sports", label: "Sports Recovery" },
  { id: "wellness", label: "Wellness" },
  { id: "equine", label: "Equine" },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

const CASE_STUDIES = [
  {
    id: "1",
    image: "/chiro.jpg",
    title: "Summit Physical Therapy doubles recovery session volume",
    description:
      "A mid-sized physical therapy clinic integrated Atmos into their post-treatment protocol, reducing patient recovery time and increasing session capacity without additional staff.",
    category: "clinic",
    categoryLabel: "Clinic",
  },
  {
    id: "2",
    image: "/sports-recovery.jpg",
    title: "Division I athletic department streamlines injury management",
    description:
      "Learn how a university athletic training facility used localized cryotherapy to provide faster, more targeted treatment for student athletes across multiple sports programs.",
    category: "sports",
    categoryLabel: "Sports Recovery",
  },
  {
    id: "3",
    image: "/spa.jpg",
    title: "Luxury spa adds premium cryotherapy to treatment menu",
    description:
      "A high-end wellness spa differentiated their service offering by adding localized cryotherapy as a premium add-on, increasing average ticket value by 40%.",
    category: "wellness",
    categoryLabel: "Wellness",
  },
  {
    id: "4",
    image: "/video-placeholder.jpg",
    title: "Equine rehabilitation center reduces horse recovery time",
    description:
      "An equine therapy facility incorporated Atmos into their rehabilitation protocols, helping horses return to training faster while reducing inflammation-related complications.",
    category: "equine",
    categoryLabel: "Equine",
  },
  {
    id: "5",
    image: "/chiro.jpg",
    title: "Chiropractic practice expands service offerings",
    description:
      "A solo chiropractor added localized cryotherapy to complement adjustments, creating a new revenue stream and improving patient outcomes for chronic pain management.",
    category: "clinic",
    categoryLabel: "Clinic",
  },
  {
    id: "6",
    image: "/sports-recovery.jpg",
    title: "Professional soccer team optimizes match-day recovery",
    description:
      "Discover how a professional sports organization integrated portable cryotherapy into their travel kit, ensuring consistent recovery protocols home and away.",
    category: "sports",
    categoryLabel: "Sports Recovery",
  },
] as const;

export function CaseStudiesClient() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [hasInteracted, setHasInteracted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const filteredCaseStudies =
    activeCategory === "all"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((study) => study.category === activeCategory);

  return (
    <LazyMotionProvider>
      <main className="min-h-screen bg-[var(--atmos-canvas)]">
        <section className="w-full px-6 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 md:pb-32 md:pt-32">
          <div className="mx-auto max-w-[1180px]">
            {/* Header */}
            <div className="max-w-2xl">
              <m.h1
                className="text-4xl font-medium leading-[1.05] text-[var(--atmos-ink)] sm:text-5xl md:text-6xl"
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, transform: "translateY(16px)" }
                }
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT }}
              >
                Case Studies
              </m.h1>
              <m.p
                className="mt-4 text-lg leading-8 text-[var(--atmos-secondary)] sm:text-xl"
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, transform: "translateY(12px)" }
                }
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                transition={{ duration: 0.5, delay: 0.2, ease: EASE_OUT }}
              >
                Real results from practitioners who have integrated Atmos into
                their practice.
              </m.p>
            </div>

            {/* Filter Pills */}
            <m.div
              className="mt-10 flex flex-wrap gap-2 sm:mt-12"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, transform: "translateY(12px)" }
              }
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ duration: 0.5, delay: 0.3, ease: EASE_OUT }}
            >
              {CATEGORIES.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setHasInteracted(true);
                    setActiveCategory(category.id);
                  }}
                  className={cn(
                    "rounded-full px-4 py-2 text-sm font-medium transition-all duration-200",
                    activeCategory === category.id
                      ? "bg-[var(--atmos-ink)] text-[var(--atmos-page)]"
                      : "bg-[var(--atmos-surface)] text-[var(--atmos-secondary)] ring-1 ring-[var(--atmos-border)] hover:bg-[var(--atmos-border)] hover:text-[var(--atmos-ink)]",
                  )}
                >
                  {category.label}
                </button>
              ))}
            </m.div>

            {/* Case Studies Stack */}
            <m.div
              className="mt-10 flex flex-col gap-6 sm:mt-12"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, transform: "translateY(24px)" }
              }
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ duration: 0.55, delay: 0.4, ease: EASE_OUT }}
            >
              {filteredCaseStudies.map((study, index) => (
                <CaseStudyCard
                  key={study.id}
                  study={study}
                  index={index}
                  shouldReduceMotion={!!shouldReduceMotion}
                  skipAnimation={hasInteracted}
                />
              ))}
            </m.div>

            {/* Empty State */}
            {filteredCaseStudies.length === 0 && (
              <m.div
                className="mt-16 flex flex-col items-center justify-center py-12 text-center"
                initial={shouldReduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: EASE_OUT }}
              >
                <p className="text-lg text-[var(--atmos-secondary)]">
                  No case studies found in this category.
                </p>
              </m.div>
            )}
          </div>
        </section>
      </main>
    </LazyMotionProvider>
  );
}

function CaseStudyCard({
  study,
  index,
  shouldReduceMotion,
  skipAnimation,
}: {
  study: (typeof CASE_STUDIES)[number];
  index: number;
  shouldReduceMotion: boolean;
  skipAnimation: boolean;
}) {
  const noAnimation = skipAnimation || shouldReduceMotion;
  return (
    <m.article
      initial={
        noAnimation
          ? false
          : { opacity: 0, transform: "translateY(20px) scale(0.98)" }
      }
      animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
      transition={
        noAnimation
          ? { duration: 0 }
          : {
              duration: 0.5,
              delay: 0.45 + index * 0.06,
              ease: EASE_OUT,
            }
      }
      className={cn(
        "group relative flex transform-gpu flex-col overflow-hidden rounded-[1.25rem]",
        "bg-[var(--atmos-surface)] ring-1 ring-[var(--atmos-border)]",
        "transition-[transform,box-shadow,ring-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:ring-[var(--atmos-secondary)]",
        "md:flex-row",
      )}
    >
      {/* Image */}
      <div className="relative h-56 shrink-0 p-2 md:h-auto md:w-[400px] lg:w-[480px]">
        <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[1rem] bg-[var(--atmos-fill)]">
          {study.image ? (
            <Image
              src={study.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 480px"
            />
          ) : (
            <ImageIcon className="size-16 text-[var(--atmos-muted)]" />
          )}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(253,253,253,0.08),rgba(15,16,18,0.14))]" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        {/* Category Badge */}
        <span className="w-fit rounded-full bg-[var(--atmos-ink)]/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-[var(--atmos-muted)]">
          {study.categoryLabel}
        </span>

        <h2 className="mt-4 text-xl font-medium leading-7 text-[var(--atmos-ink)] sm:text-2xl sm:leading-8">
          {study.title}
        </h2>

        <p className="mt-3 text-sm leading-6 text-[var(--atmos-secondary)] sm:mt-4 sm:text-base sm:leading-7">
          {study.description}
        </p>

        <a
          href="#"
          className="mt-6 flex items-center gap-1 text-sm font-medium text-[var(--atmos-blue)] transition-[gap] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:gap-2 sm:mt-auto sm:pt-6"
        >
          Read case study
          <ArrowRight className="size-4" />
        </a>
      </div>
    </m.article>
  );
}
