"use client";

import { m, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { VideoPlayer } from "@/components/media/video-player";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

export default function VideoSection() {
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
        id="walkthrough"
        className="w-full bg-[var(--atmos-page)] px-6 py-24 sm:px-8 md:py-32"
      >
        <m.div
          className="mx-auto max-w-[1180px]"
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, transform: "translateY(32px) scale(0.97)" }
          }
          animate={
            isInView
              ? { opacity: 1, transform: "translateY(0px) scale(1)" }
              : undefined
          }
          transition={{ duration: 0.65, ease: EASE_OUT }}
        >
          <VideoPlayer
            thumbnailUrl="/ecmadao-T8gG3G-fWE0-unsplash.jpg"
            videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="Experience Atmos"
            description="Setup, service flow, and support in context."
            className="rounded-2xl"
          />
        </m.div>
      </section>
    </LazyMotionProvider>
  );
}
