"use client";

import { ArrowDown, Play } from "lucide-react";
import { m } from "motion/react";
import { useState } from "react";
import { VideoPlayerModal } from "@/components/media/video-player";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";

const WALKTHROUGH_VIDEO_URL =
  "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
const WALKTHROUGH_VIDEO_TITLE = "Experience Atmos";

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const scrollToNextSection = () => {
    document
      .getElementById("belief")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <LazyMotionProvider>
      <div className="bg-white p-2">
        <m.section
          className="relative min-h-[calc(100dvh-1rem)] w-full overflow-hidden rounded-[1rem] bg-[length:auto_150%] bg-[position:center_0%] sm:bg-cover sm:bg-center"
          style={{
            backgroundImage: 'url("/ecmadao-T8gG3G-fWE0-unsplash.jpg")',
          }}
          initial={{ transform: "scale(1.1)" }}
          animate={{ transform: "scale(1)" }}
          transition={{ duration: 1.2, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="relative z-30 flex h-full items-start p-5 pt-10 sm:p-8 sm:pt-14 lg:p-12 lg:pt-24">
            <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-8">
              <div className="flex flex-col gap-5 sm:gap-6">
                <m.p
                  className="text-xs font-medium uppercase tracking-[0.18em] text-white/80 sm:text-sm"
                  initial={{ opacity: 0, transform: "translateY(10px)" }}
                  animate={{ opacity: 1, transform: "translateY(0px)" }}
                  transition={{
                    duration: 0.45,
                    delay: 0.3,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                >
                  Atmos Performance
                </m.p>
                <m.h1
                  className="text-4xl font-medium leading-[1.02] text-white sm:text-4xl sm:leading-[1.05] lg:text-5xl"
                  initial={{ opacity: 0, transform: "translateY(12px)" }}
                  animate={{ opacity: 1, transform: "translateY(0px)" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.4,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                >
                  Offer localized cryotherapy with confidence.
                </m.h1>
              </div>
              <div className="flex w-full items-stretch gap-2 self-start sm:col-start-1 sm:row-start-2 sm:w-auto sm:items-center sm:gap-4">
                <m.a
                  href="/book-demo"
                  className="inline-flex min-h-12 flex-1 items-center justify-center whitespace-nowrap rounded-full bg-white px-3 py-2.5 text-center text-sm font-medium text-black transition-colors hover:bg-white/90 sm:min-h-0 sm:flex-none sm:px-5 sm:py-3 sm:text-base lg:px-6"
                  initial={{ opacity: 0, transform: "scale(0.96)" }}
                  animate={{ opacity: 1, transform: "scale(1)" }}
                  transition={{
                    duration: 0.45,
                    delay: 0.75,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  whileTap={{ transform: "scale(0.97)" }}
                >
                  Book a Demo
                </m.a>
                <m.button
                  type="button"
                  onClick={() => setIsVideoOpen(true)}
                  className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-white bg-transparent px-3 py-2.5 text-sm font-medium text-white transition-colors hover:bg-white/10 sm:min-h-0 sm:flex-none sm:px-5 sm:py-3 sm:text-base lg:px-6"
                  initial={{ opacity: 0, transform: "scale(0.96)" }}
                  animate={{ opacity: 1, transform: "scale(1)" }}
                  transition={{
                    duration: 0.45,
                    delay: 0.9,
                    ease: [0.23, 1, 0.32, 1],
                  }}
                  whileTap={{ transform: "scale(0.97)" }}
                >
                  <Play className="size-4 fill-white" />
                  See how it works
                </m.button>
              </div>
              <div />
            </div>
          </div>
          <m.img
            src="/cloud 1.png"
            alt=""
            className="pointer-events-none absolute left-0 top-1/4 z-20 size-[920px] max-w-none object-contain opacity-40"
            initial={{ x: -24, y: -140, opacity: 0 }}
            animate={{ x: 0, y: -170, opacity: 0.4 }}
            transition={{
              x: { duration: 1.6, ease: [0.33, 1, 0.68, 1], delay: 0.25 },
              y: { duration: 1.6, ease: [0.33, 1, 0.68, 1], delay: 0.25 },
              opacity: { duration: 1.1, ease: "easeOut", delay: 0.25 },
            }}
          />
          <m.img
            src="/cloud 2.png"
            alt=""
            className="pointer-events-none absolute right-0 top-1/3 z-20 size-[920px] max-w-none object-contain opacity-40"
            initial={{ x: 24, y: -140, opacity: 0 }}
            animate={{ x: 0, y: -170, opacity: 0.4 }}
            transition={{
              x: { duration: 1.6, ease: [0.33, 1, 0.68, 1], delay: 0.35 },
              y: { duration: 1.6, ease: [0.33, 1, 0.68, 1], delay: 0.35 },
              opacity: { duration: 1.1, ease: "easeOut", delay: 0.35 },
            }}
          />

          <m.button
            type="button"
            aria-label="Scroll to next section"
            onClick={scrollToNextSection}
            className="absolute bottom-6 left-1/2 z-30 flex size-12 -translate-x-1/2 items-center justify-center rounded-full border border-white/40 bg-white/70 text-black backdrop-blur-md transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black/20 sm:bottom-8 sm:size-14"
            initial={{
              opacity: 0,
              transform: "translateX(-50%) translateY(10px)",
            }}
            animate={{
              opacity: 1,
              transform: "translateX(-50%) translateY(0px)",
            }}
            transition={{
              duration: 0.45,
              delay: 1.05,
              ease: [0.23, 1, 0.32, 1],
            }}
            whileTap={{ transform: "translateX(-50%) scale(0.96)" }}
          >
            <ArrowDown className="size-5 sm:size-6" strokeWidth={1.8} />
          </m.button>
        </m.section>
        <VideoPlayerModal
          isOpen={isVideoOpen}
          onOpenChange={setIsVideoOpen}
          videoUrl={WALKTHROUGH_VIDEO_URL}
          title={WALKTHROUGH_VIDEO_TITLE}
        />
      </div>
    </LazyMotionProvider>
  );
}
