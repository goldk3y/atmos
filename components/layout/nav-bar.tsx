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

export default function NavBar({
  alwaysVisible = false,
  ctaHref = "/book-demo",
  links = [],
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
        className="pointer-events-none fixed left-0 right-0 top-2 z-40 flex justify-center px-4"
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
        <div className="pointer-events-auto mx-auto flex h-12 w-full max-w-[1180px] items-center justify-between rounded-full bg-white/80 px-3 text-[var(--atmos-ink)] shadow-[0_18px_50px_rgba(15,16,18,0.14)] backdrop-blur-sm">
          <Link
            href="/"
            className="group rounded-full pl-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--atmos-blue)]"
          >
            <Image
              src="/atmos-logo.svg"
              alt="Atmos"
              width={100}
              height={32}
              className="h-5 w-auto transition-all duration-200 group-hover:[filter:brightness(0)_saturate(100%)_invert(35%)_sepia(100%)_saturate(1000%)_hue-rotate(190deg)_brightness(90%)_contrast(90%)]"
            />
          </Link>

          {links.length > 0 && (
            <nav
              aria-label="Product navigation"
              className="hidden items-center gap-7 text-sm font-medium text-[var(--atmos-secondary)] lg:flex"
            >
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="transition-colors hover:text-[var(--atmos-ink)]"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          )}

          <Link
            href={ctaHref}
            className="rounded-full bg-[var(--atmos-ink)] px-4 py-2 text-xs font-medium text-white transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[var(--atmos-blue)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--atmos-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          >
            Book a Demo
          </Link>
        </div>
      </m.header>
    </LazyMotionProvider>
  );
}
