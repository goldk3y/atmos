"use client";

import { m, useReducedMotion } from "motion/react";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";
import { VideoPlayer } from "@/components/media/video-player";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

export function TrainingClient() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="min-h-screen bg-[var(--atmos-canvas)]">
      <LazyMotionProvider>
        <section className="w-full px-6 pb-20 pt-24 sm:px-8 sm:pb-24 sm:pt-28 md:pb-32 md:pt-32">
          <div className="mx-auto max-w-[860px]">
            <div className="text-center">
              <m.h1
                className="text-4xl font-medium leading-[1.05] text-[var(--atmos-ink)] sm:text-5xl"
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, transform: "translateY(16px)" }
                }
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT }}
              >
                Atmos Training
              </m.h1>
              <m.p
                className="mt-6 text-lg leading-8 text-[var(--atmos-secondary)] sm:text-xl"
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, transform: "translateY(12px)" }
                }
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                transition={{ duration: 0.5, delay: 0.2, ease: EASE_OUT }}
              >
                Comprehensive 1-on-1 training for members to help you master
                Atmos cryotherapy equipment operation and deliver exceptional
                results for your clients.
              </m.p>

              <m.div
                className="mt-8"
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, transform: "translateY(12px)" }
                }
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                transition={{ duration: 0.45, delay: 0.3, ease: EASE_OUT }}
              >
                <button
                  type="button"
                  className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--atmos-blue)] px-8 py-3 text-base font-medium text-white transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[#0064c8] active:scale-[0.97]"
                >
                  Sign In
                </button>
                <p className="mt-4 text-sm text-[var(--atmos-secondary)]">
                  Not a member?{" "}
                  <a
                    href="/book-demo"
                    className="text-[var(--atmos-blue)] underline underline-offset-2 transition-colors hover:text-[#0064c8]"
                  >
                    Get started today
                  </a>
                </p>
              </m.div>
            </div>

            <m.div
              className="mt-12 sm:mt-16"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, transform: "translateY(24px)" }
              }
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ duration: 0.55, delay: 0.3, ease: EASE_OUT }}
            >
              <VideoPlayer
                thumbnailUrl="/video-placeholder.jpg"
                videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Training Overview"
                description="Get started with your Atmos equipment"
              />
            </m.div>
          </div>
        </section>
      </LazyMotionProvider>
    </main>
  );
}
