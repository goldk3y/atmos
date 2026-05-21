"use client";

import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon, Play } from "lucide-react";
import { m, useInView, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperInstance } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { VideoPlayerModal } from "@/components/media/video-player";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];
const WALKTHROUGH_VIDEO_URL =
  "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";

const videos = [
  {
    thumbnailUrl: "/video-placeholder.jpg",
    title: "Service flow",
    description: "See the Atmos setup in a treatment environment.",
  },
  {
    thumbnailUrl: "/video-placeholder.jpg",
    title: "Athletic recovery",
    description: "Targeted cold therapy for performance teams.",
  },
  {
    thumbnailUrl: "/video-placeholder.jpg",
    title: "Clinical care",
    description: "Focused support for patient-facing providers.",
  },
  {
    thumbnailUrl: "/video-placeholder.jpg",
    title: "Wellness services",
    description: "A premium cold therapy add-on for treatment menus.",
  },
];

export default function VideoSwipeSection() {
  const [activeVideo, setActiveVideo] = useState<
    (typeof videos)[number] | null
  >(null);
  const swiperRef = useRef<SwiperInstance | null>(null);
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
        id="video-stories"
        className="w-full overflow-hidden bg-[var(--atmos-page)] px-6 py-20 sm:px-8 sm:py-24 md:py-32"
      >
        <style>{`
        .video-swipe-carousel {
          width: 100%;
          overflow: visible;
          padding: 0 0 3.25rem;
        }

        .video-swipe-carousel .swiper-wrapper {
          align-items: center;
        }

        .video-swipe-carousel .swiper-slide {
          width: min(78vw, 860px);
          aspect-ratio: 16 / 9;
          height: auto;
          background-position: center;
          background-size: cover;
        }

        .video-swipe-carousel .swiper-slide-shadow-left,
        .video-swipe-carousel .swiper-slide-shadow-right {
          border-radius: 1rem;
          background-image: linear-gradient(to right, rgba(15, 16, 18, 0.2), rgba(15, 16, 18, 0));
        }

        .video-swipe-carousel .swiper-pagination-bullet {
          width: 0.625rem;
          height: 0.625rem;
          background: color-mix(in srgb, var(--atmos-ink) 35%, transparent);
          opacity: 1;
          transition: width 200ms ease, background-color 200ms ease;
        }

        .video-swipe-carousel .swiper-pagination-bullet-active {
          width: 2rem;
          border-radius: 999px;
          background: var(--atmos-ink);
        }
      `}</style>

        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-3xl text-center">
            <m.h2
              className="text-3xl font-medium leading-[1.08] text-[var(--atmos-ink)] sm:text-4xl md:text-5xl"
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
              Atmos in action
            </m.h2>
            <m.p
              className="mt-4 text-base leading-7 text-[var(--atmos-secondary)] sm:text-lg sm:leading-8 md:text-xl"
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
              transition={{ duration: 0.5, delay: 0.12, ease: EASE_OUT }}
            >
              Swipe through focused examples of where localized cryotherapy fits
              into professional service environments.
            </m.p>
          </div>

          <m.div
            className="relative mx-auto mt-10 max-w-6xl px-0 sm:mt-14 sm:px-10"
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, transform: "translateY(28px) scale(0.98)" }
            }
            animate={
              isInView
                ? { opacity: 1, transform: "translateY(0px) scale(1)" }
                : undefined
            }
            transition={{ duration: 0.55, delay: 0.18, ease: EASE_OUT }}
          >
            <Swiper
              className="video-swipe-carousel"
              modules={[EffectCoverflow, Navigation, Pagination]}
              effect="coverflow"
              grabCursor
              centeredSlides
              loop
              slideToClickedSlide
              slidesPerView="auto"
              speed={850}
              spaceBetween={0}
              coverflowEffect={{
                rotate: 40,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ clickable: true }}
              navigation={{
                nextEl: ".video-swipe-next",
                prevEl: ".video-swipe-prev",
              }}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
            >
              {videos.map((video) => (
                <SwiperSlide key={video.title}>
                  <button
                    type="button"
                    className="group relative block h-full w-full overflow-hidden rounded-2xl bg-[var(--atmos-fill)] text-left shadow-[0_24px_70px_rgba(15,16,18,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--atmos-blue)] focus-visible:ring-offset-4 focus-visible:ring-offset-[var(--atmos-page)]"
                    onClick={() => setActiveVideo(video)}
                    aria-label={`Play ${video.title}`}
                  >
                    <Image
                      src={video.thumbnailUrl}
                      alt=""
                      fill
                      sizes="(min-width: 1180px) 860px, 78vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--atmos-ink)]/75 via-[var(--atmos-ink)]/20 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex size-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/30">
                        <Play className="size-8 fill-white text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 p-5 sm:p-8">
                      <h3 className="text-xl font-medium leading-7 text-white sm:text-2xl">
                        {video.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/80">
                        {video.description}
                      </p>
                    </div>
                  </button>
                </SwiperSlide>
              ))}
            </Swiper>

            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className="video-swipe-prev absolute left-[calc(50%-3rem)] top-full z-30 mt-3 flex size-11 items-center justify-center rounded-full border border-[var(--atmos-border)] bg-[var(--atmos-canvas)]/80 text-[var(--atmos-ink)] shadow-[0_12px_32px_rgba(15,16,18,0.12)] dark:shadow-none backdrop-blur-md transition-colors hover:bg-[var(--atmos-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--atmos-blue)] sm:left-0 sm:top-1/2 sm:mt-0 sm:size-12 sm:-translate-y-1/2"
              aria-label="Previous video"
            >
              <ChevronLeftIcon className="size-5" strokeWidth={1.8} />
            </button>

            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className="video-swipe-next absolute right-[calc(50%-3rem)] top-full z-30 mt-3 flex size-11 items-center justify-center rounded-full border border-[var(--atmos-border)] bg-[var(--atmos-canvas)]/80 text-[var(--atmos-ink)] shadow-[0_12px_32px_rgba(15,16,18,0.12)] dark:shadow-none backdrop-blur-md transition-colors hover:bg-[var(--atmos-surface)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--atmos-blue)] sm:right-0 sm:top-1/2 sm:mt-0 sm:size-12 sm:-translate-y-1/2"
              aria-label="Next video"
            >
              <ChevronRightIcon className="size-5" strokeWidth={1.8} />
            </button>
          </m.div>
        </div>

        <VideoPlayerModal
          isOpen={activeVideo !== null}
          onOpenChange={(isOpen) => {
            if (!isOpen) {
              setActiveVideo(null);
            }
          }}
          videoUrl={WALKTHROUGH_VIDEO_URL}
          title={activeVideo?.title ?? "Atmos video"}
        />
      </section>
    </LazyMotionProvider>
  );
}
