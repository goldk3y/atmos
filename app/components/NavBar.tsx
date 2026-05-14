"use client";

import { motion, useMotionValueEvent, useReducedMotion, useScroll } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

export default function NavBar() {
  const [isVisible, setIsVisible] = useState(false);
  const triggerTopRef = useRef(0);
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();

  const updateTriggerTop = useCallback(() => {
    const beliefSection = document.getElementById("belief");
    const triggerTop = beliefSection
      ? beliefSection.getBoundingClientRect().top + window.scrollY - 80
      : window.innerHeight * 0.85;

    triggerTopRef.current = triggerTop;
    setIsVisible(window.scrollY >= triggerTop);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(updateTriggerTop);
    window.addEventListener("resize", updateTriggerTop);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("resize", updateTriggerTop);
    };
  }, [updateTriggerTop]);

  useMotionValueEvent(scrollY, "change", (current) => {
    setIsVisible((previous) => {
      const next = current >= triggerTopRef.current;
      return previous === next ? previous : next;
    });
  });

  return (
    <motion.header
      className="pointer-events-none fixed left-0 right-0 top-4 z-40 flex justify-center px-4"
      initial={false}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : -28,
      }}
      transition={
        shouldReduceMotion
          ? { duration: 0 }
          : { duration: 0.38, ease: [0.23, 1, 0.32, 1] }
      }
      aria-hidden={!isVisible}
    >
      <div className="pointer-events-auto flex w-full max-w-[760px] items-center justify-between rounded-full bg-white/80 px-3 py-2 text-[var(--atmos-ink)] shadow-[0_18px_50px_rgba(15,16,18,0.14)] backdrop-blur-sm">
        <a
          href="#"
          className="rounded-full px-3 py-2 text-base font-medium tracking-normal transition-colors hover:bg-black/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--atmos-blue)]"
        >
          Atmos
        </a>

        <a
          href="#demo"
          className="rounded-full bg-[var(--atmos-ink)] px-5 py-2.5 text-sm font-medium text-white transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-black active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--atmos-blue)] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          Book a Demo
        </a>
      </div>
    </motion.header>
  );
}
