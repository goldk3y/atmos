"use client";

import { useState } from "react";
import { m, useReducedMotion } from "motion/react";
import Image from "next/image";
import { ArrowRight, Image as ImageIcon } from "lucide-react";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";
import { cn } from "@/lib/utils";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const CATEGORIES = [
  { id: "all", label: "All" },
  { id: "insights", label: "Insights" },
  { id: "guides", label: "Guides" },
  { id: "news", label: "News" },
  { id: "industry", label: "Industry" },
  { id: "company", label: "Company" },
] as const;

type CategoryId = (typeof CATEGORIES)[number]["id"];

const BLOG_POSTS = [
  {
    id: "1",
    image: "/chiro.jpg",
    title: "The science behind localized cryotherapy: What practitioners need to know",
    description:
      "A deep dive into the physiological mechanisms that make localized cryotherapy effective for pain management, inflammation reduction, and accelerated recovery.",
    category: "insights",
    categoryLabel: "Insights",
    date: "May 15, 2026",
    readTime: "8 min read",
  },
  {
    id: "2",
    image: "/sports-recovery.jpg",
    title: "How to introduce cryotherapy services to your existing patients",
    description:
      "Practical communication strategies and scripts for presenting cryotherapy as a treatment option without overselling or creating unrealistic expectations.",
    category: "guides",
    categoryLabel: "Guides",
    date: "May 10, 2026",
    readTime: "6 min read",
  },
  {
    id: "3",
    image: "/spa.jpg",
    title: "Atmos announces expanded training program for 2026",
    description:
      "New certification tracks, regional workshops, and online learning modules designed to help practitioners build confidence with cryotherapy service delivery.",
    category: "news",
    categoryLabel: "News",
    date: "May 5, 2026",
    readTime: "4 min read",
  },
  {
    id: "4",
    image: "/video-placeholder.jpg",
    title: "Recovery technology trends shaping sports medicine in 2026",
    description:
      "An overview of emerging technologies and methodologies in athletic recovery, and where localized cryotherapy fits in the modern sports medicine toolkit.",
    category: "industry",
    categoryLabel: "Industry",
    date: "April 28, 2026",
    readTime: "10 min read",
  },
  {
    id: "5",
    image: "/chiro.jpg",
    title: "Setting up your treatment room for cryotherapy success",
    description:
      "Step-by-step guidance on room layout, equipment placement, patient flow, and creating an environment that supports efficient cryotherapy sessions.",
    category: "guides",
    categoryLabel: "Guides",
    date: "April 22, 2026",
    readTime: "7 min read",
  },
  {
    id: "6",
    image: "/sports-recovery.jpg",
    title: "Why we built Atmos: A letter from our founders",
    description:
      "The story behind Atmos Performance—what we observed in the market, why we believed there was a better way, and where we're headed next.",
    category: "company",
    categoryLabel: "Company",
    date: "April 15, 2026",
    readTime: "5 min read",
  },
  {
    id: "7",
    image: "/spa.jpg",
    title: "Understanding contraindications: When cryotherapy isn't appropriate",
    description:
      "A responsible guide to screening patients, recognizing contraindications, and making informed decisions about cryotherapy treatment suitability.",
    category: "insights",
    categoryLabel: "Insights",
    date: "April 8, 2026",
    readTime: "9 min read",
  },
  {
    id: "8",
    image: "/video-placeholder.jpg",
    title: "Insurance and cryotherapy: What practitioners should know",
    description:
      "Current landscape of insurance coverage for cryotherapy services, billing considerations, and how to structure your offering for different reimbursement scenarios.",
    category: "industry",
    categoryLabel: "Industry",
    date: "April 1, 2026",
    readTime: "6 min read",
  },
] as const;

export function BlogClient() {
  const [activeCategory, setActiveCategory] = useState<CategoryId>("all");
  const [hasInteracted, setHasInteracted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const filteredPosts =
    activeCategory === "all"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === activeCategory);

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
                Blog
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
                Insights, guides, and updates from the Atmos team.
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
                      ? "bg-[var(--atmos-ink)] text-white"
                      : "bg-[var(--atmos-page)] text-[var(--atmos-secondary)] ring-1 ring-[var(--atmos-border)] hover:bg-[var(--atmos-border)] hover:text-[var(--atmos-ink)]",
                  )}
                >
                  {category.label}
                </button>
              ))}
            </m.div>

            {/* Blog Posts Stack */}
            <m.div
              className="mt-10 flex flex-col gap-6 sm:mt-12"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, transform: "translateY(24px)" }
              }
              animate={{ opacity: 1, transform: "translateY(0px)" }}
              transition={{ duration: 0.55, delay: 0.4, ease: EASE_OUT }}
            >
              {filteredPosts.map((post, index) => (
                <BlogPostCard
                  key={post.id}
                  post={post}
                  index={index}
                  shouldReduceMotion={!!shouldReduceMotion}
                  skipAnimation={hasInteracted}
                />
              ))}
            </m.div>

            {/* Empty State */}
            {filteredPosts.length === 0 && (
              <m.div
                className="mt-16 flex flex-col items-center justify-center py-12 text-center"
                initial={shouldReduceMotion ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, ease: EASE_OUT }}
              >
                <p className="text-lg text-[var(--atmos-secondary)]">
                  No posts found in this category.
                </p>
              </m.div>
            )}
          </div>
        </section>
      </main>
    </LazyMotionProvider>
  );
}

function BlogPostCard({
  post,
  index,
  shouldReduceMotion,
  skipAnimation,
}: {
  post: (typeof BLOG_POSTS)[number];
  index: number;
  shouldReduceMotion: boolean;
  skipAnimation: boolean;
}) {
  const noAnimation = skipAnimation || shouldReduceMotion;
  return (
    <m.article
      initial={
        noAnimation
          ? false
          : { opacity: 0, transform: "translateY(20px) scale(0.98)" }
      }
      animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
      transition={
        noAnimation
          ? { duration: 0 }
          : {
              duration: 0.5,
              delay: 0.45 + index * 0.06,
              ease: EASE_OUT,
            }
      }
      className={cn(
        "group relative flex transform-gpu flex-col overflow-hidden rounded-[1.25rem]",
        "bg-[var(--atmos-page)] ring-1 ring-[var(--atmos-border)]",
        "transition-[transform,box-shadow,ring-color] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:ring-[#cfcfd5]",
        "md:flex-row",
      )}
    >
      {/* Image */}
      <div className="relative h-56 shrink-0 p-2 md:h-auto md:w-[400px] lg:w-[480px]">
        <div className="relative flex h-full items-center justify-center overflow-hidden rounded-[1rem] bg-[var(--atmos-light-gray)]">
          {post.image ? (
            <Image
              src={post.image}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 480px"
            />
          ) : (
            <ImageIcon className="size-16 text-[var(--atmos-muted)]" />
          )}
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(253,253,253,0.08),rgba(15,16,18,0.14))]" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        {/* Meta Row */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full bg-[var(--atmos-ink)]/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.12em] text-[var(--atmos-muted)]">
            {post.categoryLabel}
          </span>
          <span className="text-sm text-[var(--atmos-muted)]">{post.date}</span>
          <span className="text-sm text-[var(--atmos-muted)]">·</span>
          <span className="text-sm text-[var(--atmos-muted)]">
            {post.readTime}
          </span>
        </div>

        <h2 className="mt-4 text-xl font-medium leading-7 text-[var(--atmos-ink)] sm:text-2xl sm:leading-8">
          {post.title}
        </h2>

        <p className="mt-3 text-sm leading-6 text-[var(--atmos-secondary)] sm:mt-4 sm:text-base sm:leading-7">
          {post.description}
        </p>

        <a
          href="#"
          className="mt-6 flex items-center gap-1 text-sm font-medium text-[var(--atmos-blue)] transition-[gap] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:gap-2 sm:mt-auto sm:pt-6"
        >
          Read article
          <ArrowRight className="size-4" />
        </a>
      </div>
    </m.article>
  );
}
