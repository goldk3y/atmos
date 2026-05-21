"use client";

import Image from "next/image";
import Link from "next/link";
import {
  m,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";
import { MainNavigation } from "./main-navigation";
import { MobileNav } from "./mobile-nav";

export default function NavBar({
  alwaysVisible = false,
  ctaHref = "/book-demo",
  links: _links = [],
}: {
  alwaysVisible?: boolean;
  ctaHref?: string;
  links?: { title: string; href: string }[];
}) {
  const [isVisible, setIsVisible] = useState(false);
  const triggerTopRef = useRef(0);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const effectiveIsVisible = alwaysVisible || isVisible;

  useEffect(() => {
    if (alwaysVisible) {
      return;
    }

    const updateTriggerTop = () => {
      const beliefSection = document.getElementById("belief");
      const triggerTop = beliefSection
        ? beliefSection.getBoundingClientRect().top + window.scrollY - 80
        : window.innerHeight * 0.85;

      triggerTopRef.current = triggerTop;
      setIsVisible(window.scrollY >= triggerTop);
    };

    const frame = window.requestAnimationFrame(updateTriggerTop);
    window.addEventListener("resize", updateTriggerTop);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateTriggerTop);
    };
  }, [alwaysVisible]);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (alwaysVisible) {
      return;
    }

    setIsVisible((previous) => {
      const next = current >= triggerTopRef.current;
      return previous === next ? previous : next;
    });
  });

  return (
    <LazyMotionProvider>
      <m.header
        className="pointer-events-none fixed left-0 right-0 top-2 z-40 flex items-center justify-center gap-3 px-4"
        initial={false}
        animate={{
          opacity: effectiveIsVisible ? 1 : 0,
          y: effectiveIsVisible ? 0 : -28,
        }}
        transition={
          shouldReduceMotion
            ? { duration: 0 }
            : { duration: 0.38, ease: [0.23, 1, 0.32, 1] }
        }
        aria-hidden={!effectiveIsVisible}
      >
        <div className="pointer-events-auto mx-auto flex h-12 w-full max-w-[900px] items-center justify-between rounded-full border-[0.5px] border-[var(--atmos-border)] bg-[var(--atmos-canvas)]/80 px-3 text-[var(--atmos-ink)] shadow-[0_1px_2px_rgba(0,0,0,0.01),0_2px_4px_rgba(0,0,0,0.01),0_4px_8px_rgba(0,0,0,0.01),0_8px_16px_rgba(0,0,0,0.01),0_16px_32px_rgba(0,0,0,0.01)] dark:shadow-none dark:ring-1 dark:ring-[var(--atmos-border-subtle)] backdrop-blur-sm">
          <Link
            href="/"
            className="group rounded-full pl-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--atmos-blue)]"
          >
            <Image
              src="/atmos-logo.svg"
              alt="Atmos"
              width={100}
              height={32}
              className="h-5 w-auto transition-all duration-200 dark:invert group-hover:[filter:brightness(0)_saturate(100%)_invert(35%)_sepia(100%)_saturate(1000%)_hue-rotate(190deg)_brightness(90%)_contrast(90%)]"
            />
          </Link>

          <div className="hidden lg:flex lg:items-center">
            <MainNavigation />
          </div>

          <Link
            href={ctaHref}
            className="rounded-full bg-[var(--atmos-ink)] px-4 py-2 text-xs font-medium text-[var(--atmos-page)] transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[var(--atmos-blue)] hover:text-white active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--atmos-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--atmos-canvas)]"
          >
            Book a Demo
          </Link>
        </div>
        <MobileNav />
      </m.header>
    </LazyMotionProvider>
  );
}
