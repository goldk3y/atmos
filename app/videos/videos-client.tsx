"use client";

import { useState } from "react";
import { m, useReducedMotion } from "motion/react";
import { VideoPlayer } from "@/components/media/video-player";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";
import { cn } from "@/lib/utils";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "training", label: "Training" },
  { id: "demonstrations", label: "Demonstrations" },
  { id: "testimonials", label: "Testimonials" },
  { id: "tutorials", label: "Tutorials" },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

const VIDEOS = [
  {
    id: "1",
    thumbnailUrl: "/video-placeholder.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    title: "Getting Started with Atmos",
    description: "Complete setup and first session walkthrough.",
    category: "training",
  },
  {
    id: "2",
    thumbnailUrl: "/video-placeholder.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    title: "Athletic Recovery Protocol",
    description: "Targeted cold therapy for performance teams.",
    category: "demonstrations",
  },
  {
    id: "3",
    thumbnailUrl: "/video-placeholder.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    title: "Clinical Care Integration",
    description: "How to add cryotherapy to your patient workflow.",
    category: "training",
  },
  {
    id: "4",
    thumbnailUrl: "/video-placeholder.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    title: "Wellness Service Enhancement",
    description: "Premium cold therapy add-on for treatment menus.",
    category: "demonstrations",
  },
  {
    id: "5",
    thumbnailUrl: "/video-placeholder.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    title: "Practitioner Success Story",
    description: "Dr. Smith shares her experience with Atmos.",
    category: "testimonials",
  },
  {
    id: "6",
    thumbnailUrl: "/video-placeholder.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    title: "Equipment Maintenance",
    description: "Keep your Atmos running at peak performance.",
    category: "tutorials",
  },
  {
    id: "7",
    thumbnailUrl: "/video-placeholder.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    title: "Advanced Treatment Techniques",
    description: "Master the nuances of localized cryotherapy.",
    category: "training",
  },
  {
    id: "8",
    thumbnailUrl: "/video-placeholder.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    title: "Client Communication Tips",
    description: "How to explain cryotherapy benefits effectively.",
    category: "tutorials",
  },
  {
    id: "9",
    thumbnailUrl: "/video-placeholder.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    title: "Clinic Transformation Story",
    description: "How one clinic doubled recovery sessions.",
    category: "testimonials",
  },
] as const;

export function VideosClient() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [hasInteracted, setHasInteracted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const filteredVideos =
    activeCategory === "all"
      ? VIDEOS
      : VIDEOS.filter((video) => video.category === activeCategory);

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
                Videos
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
                Training resources, equipment demonstrations, and success
                stories from practitioners using Atmos.
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

            {/* Video Grid */}
            <m.div
              className="mt-10 grid gap-6 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, transform: "translateY(24px)" }
              }
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ duration: 0.55, delay: 0.4, ease: EASE_OUT }}
            >
              {filteredVideos.map((video, index) => {
                const noAnimation = hasInteracted || shouldReduceMotion;
                return (
                  <m.div
                    key={video.id}
                    initial={
                      noAnimation
                        ? false
                        : { opacity: 0, transform: "translateY(20px) scale(0.97)" }
                    }
                    animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
                    transition={
                      noAnimation
                        ? { duration: 0 }
                        : {
                            duration: 0.5,
                            delay: 0.45 + index * 0.05,
                            ease: EASE_OUT,
                          }
                    }
                  >
                    <VideoPlayer
                      thumbnailUrl={video.thumbnailUrl}
                      videoUrl={video.videoUrl}
                      title={video.title}
                      description={video.description}
                      className="h-full"
                    />
                  </m.div>
                );
              })}
            </m.div>

            {/* Empty State */}
            {filteredVideos.length === 0 && (
              <m.div
                className="mt-16 flex flex-col items-center justify-center py-12 text-center"
                initial={shouldReduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: EASE_OUT }}
              >
                <p className="text-lg text-[var(--atmos-secondary)]">
                  No videos found in this category.
                </p>
              </m.div>
            )}
          </div>
        </section>
      </main>
    </LazyMotionProvider>
  );
}
