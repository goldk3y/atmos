"use client";

import { m, useScroll, useTransform, useReducedMotion } from "motion/react";
import Link from "next/link";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";

interface StickyBottomCTAProps {
  ctaText: string;
}

export default function StickyBottomCTA({ ctaText }: StickyBottomCTAProps) {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  // Show after scrolling 600px
  const opacity = useTransform(scrollY, [400, 600], [0, 1]);
  const y = useTransform(scrollY, [400, 600], [100, 0]);

  return (
    <LazyMotionProvider>
      <m.div
        className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--atmos-border)] bg-[var(--atmos-canvas)]/95 px-4 py-3 backdrop-blur-md sm:px-6 md:hidden"
        style={shouldReduceMotion ? { opacity: 1, y: 0 } : { opacity, y }}
      >
        <Link
          href="/book-demo"
          className="flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--atmos-blue)] px-6 py-3 text-center text-sm font-medium text-white transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[#0064c8] active:scale-[0.98]"
        >
          {ctaText}
        </Link>
      </m.div>
    </LazyMotionProvider>
  );
}
