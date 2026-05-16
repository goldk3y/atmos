"use client";

import Image from "next/image";
import { AnimatePresence, m, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";

// ease-out-quint for entering/exiting elements
const EASE_OUT_QUINT = [0.23, 1, 0.32, 1] as const;

interface Card {
  author?: {
    name: string;
    role: string;
    image: string;
  };
  content: string;
  id: number;
  image: string;
  link?: string;
  summary?: string;
  title: string;
}

export interface ExpandableCardsProps {
  cardClassName?: string;
  cards: Card[];
  className?: string;
  onSelect?: (id: number | null) => void;
  selectedCard?: number | null;
}

export default function ExpandableCards({
  cards,
  selectedCard: controlledSelected,
  onSelect,
  className = "",
  cardClassName = "",
}: ExpandableCardsProps) {
  const [internalSelected, setInternalSelected] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const selectedCard =
    controlledSelected === undefined ? internalSelected : controlledSelected;

  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth;
      const clientWidth = scrollRef.current.clientWidth;
      scrollRef.current.scrollLeft = (scrollWidth - clientWidth) / 2;
    }
  }, []);

  const handleCardClick = (id: number) => {
    if (selectedCard === id) {
      if (onSelect) {
        onSelect(null);
      } else {
        setInternalSelected(null);
      }
    } else {
      if (onSelect) {
        onSelect(id);
      } else {
        setInternalSelected(id);
      }
      // Center the clicked card in view
      const cardElement = document.querySelector(`[data-card-id="${id}"]`);
      if (cardElement) {
        cardElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  return (
    <LazyMotionProvider>
      <div
        className={`flex w-full flex-col gap-4 overflow-hidden ${className}`}
      >
        <div
          className="scrollbar-hide flex w-full gap-3 overflow-x-auto pb-7 pt-2 sm:gap-4 sm:pb-8 sm:pt-4"
          ref={scrollRef}
          style={{
            scrollSnapType: "x mandatory",
            scrollPaddingInline: "1rem",
          }}
        >
          {cards.map((card) => (
            <m.div
              animate={{
                width:
                  selectedCard === card.id
                    ? "clamp(20rem, 88vw, 40rem)"
                    : "clamp(14.75rem, 72vw, 17.625rem)",
              }}
              aria-label={`${card.title} card${selectedCard === card.id ? ", expanded" : ""}`}
              className={`group relative h-[clamp(17rem,72vw,24rem)] shrink-0 cursor-pointer overflow-hidden rounded-2xl border border-[var(--atmos-border)] bg-[var(--atmos-canvas)] focus-visible:ring-2 focus-visible:ring-[var(--atmos-blue)] focus-visible:ring-offset-2 ${cardClassName}`}
              data-card-id={card.id}
              data-selected={selectedCard === card.id ? "true" : undefined}
              key={card.id}
              layout
              onClick={() => handleCardClick(card.id)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCardClick(card.id);
                }
              }}
              role="button"
              style={{
                scrollSnapAlign: "start",
              }}
              tabIndex={0}
              transition={
                shouldReduceMotion
                  ? { duration: 0 }
                  : {
                      duration: 0.25,
                      ease: EASE_OUT_QUINT,
                    }
              }
            >
              <div
                className="relative h-full"
                style={{
                  width: "clamp(14.75rem, 72vw, 17.625rem)",
                }}
              >
                <Image
                  alt={card.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  fill
                  sizes="(min-width: 1280px) 284px, 78vw"
                  src={card.image || "/placeholder.svg"}
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(2,2,1,0.78),rgba(2,2,1,0.18)_56%,rgba(2,2,1,0.04))]" />
                <div className="absolute inset-0 flex items-end p-5 text-white sm:p-6">
                  <h2 className="text-xl font-medium leading-7 text-white sm:text-2xl">
                    {card.title}
                  </h2>
                </div>
              </div>
              <AnimatePresence mode="popLayout">
                {selectedCard === card.id && (
                  <m.div
                    animate={
                      shouldReduceMotion
                        ? {
                            width:
                              "calc(100% - clamp(14.75rem, 72vw, 17.625rem))",
                            opacity: 1,
                          }
                        : {
                            width:
                              "calc(100% - clamp(14.75rem, 72vw, 17.625rem))",
                            opacity: 1,
                            filter: "blur(0px)",
                          }
                    }
                    className="absolute right-0 top-0 h-full bg-[var(--atmos-canvas)]"
                    exit={
                      shouldReduceMotion
                        ? { width: 0, opacity: 0 }
                        : { width: 0, opacity: 0, filter: "blur(5px)" }
                    }
                    initial={
                      shouldReduceMotion
                        ? { width: 0, opacity: 0 }
                        : { width: 0, opacity: 0, filter: "blur(5px)" }
                    }
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : {
                            duration: 0.25,
                            ease: EASE_OUT_QUINT,
                            opacity: { duration: 0.2, delay: 0.1 },
                          }
                    }
                  >
                    <m.div
                      animate={
                        shouldReduceMotion
                          ? { opacity: 1, x: 0 }
                          : { opacity: 1, x: 0, filter: "blur(0px)" }
                      }
                      className="flex h-full flex-col justify-between p-5 sm:p-8"
                      exit={
                        shouldReduceMotion
                          ? { opacity: 0, x: 20 }
                          : { opacity: 0, x: 20, filter: "blur(5px)" }
                      }
                      initial={
                        shouldReduceMotion
                          ? { opacity: 0, x: 20 }
                          : { opacity: 0, x: 20, filter: "blur(5px)" }
                      }
                      transition={
                        shouldReduceMotion
                          ? { duration: 0 }
                          : { delay: 0.2, duration: 0.2, ease: EASE_OUT_QUINT }
                      }
                    >
                      <div>
                        <h3 className="text-xl font-medium leading-7 text-[var(--atmos-ink)] sm:text-2xl sm:leading-8">
                          {card.title}
                        </h3>
                        {card.summary && (
                          <p className="mt-3 text-sm font-medium leading-6 text-[var(--atmos-ink)] sm:text-base">
                            {card.summary}
                          </p>
                        )}
                        <p className="mt-4 text-sm leading-6 text-[var(--atmos-secondary)] sm:mt-5">
                          {card.content}
                        </p>
                        {card.link && (
                          <a
                            href={card.link}
                            className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-[var(--atmos-blue)] transition-[gap] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:gap-2"
                          >
                            Learn more
                            <ArrowRight className="size-4" />
                          </a>
                        )}
                      </div>
                      {card.author && (
                        <div className="mt-4 flex items-center gap-3">
                          <div className="relative size-12 overflow-hidden rounded-full border bg-primary">
                            <Image
                              alt={card.author.name}
                              className="h-full w-full object-cover"
                              fill
                              sizes="48px"
                              src={card.author.image}
                            />
                          </div>
                          <div>
                            <p className="font-semibold text-foreground">
                              {card.author.name}
                            </p>
                            <p className="text-primary-foreground text-xs">
                              {card.author.role}
                            </p>
                          </div>
                        </div>
                      )}
                    </m.div>
                  </m.div>
                )}
              </AnimatePresence>
            </m.div>
          ))}
        </div>
      </div>
    </LazyMotionProvider>
  );
}
