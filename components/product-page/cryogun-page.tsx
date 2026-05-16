"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { m, useInView, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Check,
  FlaskConical,
  Shield,
  Star,
  Zap,
  Target,
  Thermometer,
  Clock,
  RefreshCw,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { VideoPlayer } from "@/components/media/video-player";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";
import IncludedSpecsCard from "@/components/product-page/included-specs-card";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

const sciencePoints = [
  { title: "Slows nerve signaling", copy: "for targeted pain relief" },
  { title: "Reduces muscle soreness", copy: "after recovery sessions" },
  { title: "Reduces inflammation", copy: "to support faster recovery" },
  { title: "Improves mobility", copy: "with targeted muscle relief" },
  { title: "Enhances performance", copy: "by speeding up muscle recovery" },
];

export default function CryogunPageContent() {
  return (
    <LazyMotionProvider>
      <main className="bg-white text-[var(--atmos-ink)]">
        <Hero />
        <StatementSection />
        <HowItWorksSection />
        <VideoSection />
        <TestimonialsSection />
        <UseCasesSection />
        <IncludedSection />
        <TrustSection />
        <ROISection />
        <TrainingSupportSection />
        <FAQSection />
        <FinalCTASection />
      </main>
    </LazyMotionProvider>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-screen min-h-[100dvh] items-center overflow-hidden bg-[var(--atmos-light-gray)] px-6 py-24 sm:px-8 lg:px-12">
      <div className="relative z-10 mx-auto grid w-full max-w-[1180px] grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,720px)_minmax(280px,360px)] lg:gap-8 xl:gap-10">
        <div className="max-w-[720px]">
          <p className="text-md font-medium text-[var(--atmos-muted)]">
            CryoGun by Atmos
          </p>
          <h1 className="mt-5 max-w-[720px] text-[clamp(1.95rem,8.6vw,2.7rem)] font-semibold leading-[1.05] text-[var(--atmos-ink)] sm:text-[4rem] sm:leading-[0.96] lg:text-[3.85rem] xl:text-[4.05rem]">
            <span className="block whitespace-nowrap">Precision cryotherapy,</span>
            <span className="block">anywhere.</span>
          </h1>
          <p className="mt-7 max-w-[700px] text-balance text-[1.25rem] leading-[1.36] text-[var(--atmos-secondary)] sm:text-[1.42rem]">
            CryoGun is a handheld cryotherapy device designed to deliver targeted
            cold therapy for recovery, relief, and performance care.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-4">
            <Link
              href="/book-demo"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--atmos-ink)] px-7 text-[0.95rem] font-medium text-white transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[var(--atmos-blue)] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--atmos-blue)] focus-visible:ring-offset-2"
            >
              Book a demo
            </Link>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-1 text-[1.05rem] font-medium text-[var(--atmos-blue)] transition-[gap] duration-200 hover:gap-2"
            >
              See how it works
              <ArrowRight className="size-4" />
            </a>
          </div>
        </div>

        <div className="relative flex items-center justify-center">
          <Image
            src="/cryogun.png"
            alt="Atmos CryoGun device"
            width={1100}
            height={1425}
            priority
            className="relative z-10 mx-auto h-[380px] w-auto object-contain sm:h-[580px] lg:h-[640px]"
          />
        </div>
      </div>
    </section>
  );
}

function StatementSection() {
  return (
    <section className="bg-[var(--atmos-light-gray)] px-4 py-5 sm:px-6 sm:py-6 md:px-8 lg:py-7">
      <div className="mx-auto max-w-[1360px]">
        <div className="flex items-center gap-2">
          <FlaskConical className="size-4 text-[var(--atmos-ink)]" strokeWidth={1.8} />
          <h2 className="text-xs font-medium leading-6 text-[var(--atmos-ink)] sm:text-sm">
            Scientifically-proven benefits
          </h2>
        </div>

        <div className="mt-5 grid border-t border-[var(--atmos-border)] pt-4 lg:grid-cols-5 lg:border-t-0 lg:pt-0">
          {sciencePoints.map((point, index) => (
            <article
              key={point.title}
              className={[
                "py-3 lg:py-0",
                index === 0
                  ? ""
                  : "border-t border-[var(--atmos-border)] lg:border-l lg:border-t-0 lg:pl-8",
                index === sciencePoints.length - 1 ? "" : "lg:pr-8",
              ].join(" ")}
            >
              <p className="text-sm font-medium leading-5 text-[var(--atmos-ink)] sm:text-[0.95rem] sm:leading-6">
                {point.title}{" "}
                <span className="font-normal text-[var(--atmos-secondary)]">
                  {point.copy}
                </span>
              </p>
            </article>
          ))}
        </div>

        <a
          href="#how-it-works"
          className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-[var(--atmos-blue)] transition-[gap] duration-200 hover:gap-2"
        >
          Explore the science behind CryoGun
          <ArrowRight className="size-4" />
        </a>
      </div>
    </section>
  );
}

const howItWorksSteps = [
  {
    icon: Thermometer,
    title: "Compressed CO2 cooling",
    description:
      "CryoGun uses medical-grade compressed CO2 to generate extreme cold on demand. The gas expands rapidly at the nozzle, creating temperatures as low as -78°C (-108°F).",
  },
  {
    icon: Target,
    title: "Targeted application",
    description:
      "The ergonomic handpiece directs cold precisely where needed. Adjustable distance and spray duration let operators control intensity for different treatment areas.",
  },
  {
    icon: Clock,
    title: "30-90 second treatments",
    description:
      "Most applications take under two minutes. The localized approach means faster sessions compared to whole-body cryotherapy, with focused results.",
  },
  {
    icon: RefreshCw,
    title: "Immediate response",
    description:
      "Cold triggers vasoconstriction and slows nerve signaling on contact. Clients feel relief during the session, with benefits continuing as the tissue warms.",
  },
];

function HowItWorksSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -350px 0px",
  });
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion
    ? false
    : { opacity: 0, transform: "translateY(20px)" };

  function animateProps(delay: number) {
    return {
      initial,
      animate: isInView
        ? { opacity: 1, transform: "translateY(0px)" }
        : undefined,
      transition: { duration: 0.5, delay, ease: EASE_OUT },
    };
  }

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="w-full bg-[var(--atmos-page)] px-6 py-20 sm:px-8 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="max-w-3xl">
          <m.p
            className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--atmos-muted)]"
            {...animateProps(0)}
          >
            How It Works
          </m.p>
          <m.h2
            className="mt-3 text-3xl font-medium leading-[1.08] text-[var(--atmos-ink)] sm:text-4xl sm:leading-[1.05] md:text-5xl"
            {...animateProps(0.06)}
          >
            Cold therapy, precisely delivered.
          </m.h2>
          <m.p
            className="mt-4 text-base leading-7 text-[var(--atmos-secondary)] sm:text-lg sm:leading-8 md:text-xl"
            {...animateProps(0.12)}
          >
            CryoGun converts compressed CO2 into targeted cold that reaches
            treatment temperatures instantly, without the infrastructure of
            whole-body chambers.
          </m.p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-4">
          {howItWorksSteps.map((step, index) => (
            <m.div
              key={step.title}
              className="rounded-2xl bg-[var(--atmos-canvas)] p-6 ring-1 ring-[var(--atmos-border)] sm:p-8"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, transform: "translateY(24px) scale(0.97)" }
              }
              animate={
                isInView
                  ? { opacity: 1, transform: "translateY(0px) scale(1)" }
                  : undefined
              }
              transition={{
                duration: 0.55,
                delay: 0.15 + index * 0.07,
                ease: EASE_OUT,
              }}
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-[var(--atmos-light-gray)] text-[var(--atmos-blue)]">
                <step.icon className="size-6" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 text-lg font-medium text-[var(--atmos-ink)] sm:text-xl">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--atmos-secondary)]">
                {step.description}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -350px 0px",
  });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      id="demo-video"
      className="w-full bg-[var(--atmos-canvas)] px-6 py-20 sm:px-8 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1180px]">
        <m.div
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
            thumbnailUrl="/cryogun-smoke.png"
            videoUrl="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="CryoGun in Action"
            description="See setup, treatment application, and real-world use."
            className="rounded-2xl"
          />
        </m.div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "CryoGun has become essential to our recovery protocols. The portability lets us treat patients anywhere in the clinic.",
    name: "Dr. Sarah Mitchell",
    role: "Clinic Director, Performance Physical Therapy",
    avatar:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face",
  },
  {
    quote:
      "We needed cryotherapy that could travel with our athletes. CryoGun delivers professional-grade treatment without facility constraints.",
    name: "James Chen",
    role: "Head Athletic Trainer, Elite Sports Medicine",
    avatar:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
  },
  {
    quote:
      "The setup was straightforward, and Atmos helped us think through our service offerings. Rare to find equipment with this level of guidance.",
    name: "Maria Rodriguez",
    role: "Owner, Harmony Wellness Center",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
  },
  {
    quote:
      "Our horses respond immediately to treatments. It's become part of our daily care routine for competition and recovery.",
    name: "David Park",
    role: "Facility Manager, Riverside Equine",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    quote:
      "The training gave our team confidence from day one. We were treating clients within hours of setup.",
    name: "Dr. Rachel Kim",
    role: "Chiropractor, Summit Spine & Sport",
    avatar:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop&crop=face",
  },
  {
    quote:
      "Our clients love it. The targeted approach means we can address specific areas without full-body exposure.",
    name: "Marcus Webb",
    role: "Director, Apex Recovery Lab",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
];

function TestimonialsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -350px 0px",
  });
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion
    ? false
    : { opacity: 0, transform: "translateY(20px)" };

  function animateProps(delay: number) {
    return {
      initial,
      animate: isInView
        ? { opacity: 1, transform: "translateY(0px)" }
        : undefined,
      transition: { duration: 0.5, delay, ease: EASE_OUT },
    };
  }

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="w-full bg-[var(--atmos-page)] px-6 py-20 sm:px-8 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <m.h2
            className="text-3xl font-medium leading-[1.08] text-[var(--atmos-ink)] sm:text-4xl md:text-5xl"
            {...animateProps(0)}
          >
            Trusted by providers
          </m.h2>
          <m.p
            className="mt-4 text-base leading-7 text-[var(--atmos-secondary)] sm:text-lg sm:leading-8 md:text-xl"
            {...animateProps(0.06)}
          >
            See how clinics, trainers, and wellness providers use CryoGun to
            deliver focused cold therapy.
          </m.p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <m.div
              key={testimonial.name}
              className="flex flex-col rounded-2xl bg-[var(--atmos-canvas)] p-6 ring-1 ring-[var(--atmos-border)]"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, transform: "translateY(20px)" }
              }
              animate={
                isInView
                  ? { opacity: 1, transform: "translateY(0px)" }
                  : undefined
              }
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.05,
                ease: EASE_OUT,
              }}
            >
              <blockquote className="flex flex-1 flex-col">
                <div className="mb-3 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="flex-1 text-[0.95rem] leading-relaxed text-[var(--atmos-ink)]">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-3 border-t border-[var(--atmos-border)] pt-5">
                  <Avatar className="size-10">
                    <AvatarImage
                      src={testimonial.avatar}
                      alt={testimonial.name}
                    />
                    <AvatarFallback className="bg-[var(--atmos-light-gray)] text-sm text-[var(--atmos-ink)] ring-1 ring-[var(--atmos-border)]">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <cite className="block text-sm font-medium not-italic text-[var(--atmos-ink)]">
                      {testimonial.name}
                    </cite>
                    <span className="block text-xs text-[var(--atmos-secondary)]">
                      {testimonial.role}
                    </span>
                  </div>
                </div>
              </blockquote>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const useCases = [
  {
    title: "Equine",
    description: "Barns, trailers, and training environments.",
    image: "/equine.jpg",
  },
  {
    title: "Clinics",
    description: "Treatment rooms and chiropractic practices.",
    image: "/chiro.jpg",
  },
  {
    title: "Sports",
    description: "Teams, trainers, and recovery facilities.",
    image: "/sports-recovery.jpg",
  },
  {
    title: "Wellness",
    description: "Medspas and wellness centers.",
    image: "/spa.jpg",
  },
];

function UseCasesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -350px 0px",
  });
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion
    ? false
    : { opacity: 0, transform: "translateY(20px)" };

  function animateProps(delay: number) {
    return {
      initial,
      animate: isInView
        ? { opacity: 1, transform: "translateY(0px)" }
        : undefined,
      transition: { duration: 0.5, delay, ease: EASE_OUT },
    };
  }

  return (
    <section
      ref={sectionRef}
      id="use-cases"
      className="w-full bg-[var(--atmos-canvas)] px-6 py-20 sm:px-8 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-10 max-w-2xl sm:mb-12">
          <m.p
            className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--atmos-muted)]"
            {...animateProps(0)}
          >
            Industries
          </m.p>
          <m.h2
            className="mt-3 text-3xl font-medium leading-[1.08] text-[var(--atmos-ink)] sm:text-4xl sm:leading-[1.05] md:text-5xl"
            {...animateProps(0.06)}
          >
            Built for real service settings.
          </m.h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((useCase, index) => (
            <m.article
              key={useCase.title}
              className="group relative overflow-hidden rounded-xl"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, transform: "translateY(20px)" }
              }
              animate={
                isInView
                  ? { opacity: 1, transform: "translateY(0px)" }
                  : undefined
              }
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.05,
                ease: EASE_OUT,
              }}
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--atmos-light-gray)]">
                <Image
                  src={useCase.image}
                  alt={useCase.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-5">
                  <h3 className="text-lg font-medium text-white">
                    {useCase.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">
                    {useCase.description}
                  </p>
                </div>
              </div>
            </m.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function IncludedSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -350px 0px",
  });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      id="included"
      className="w-full bg-[var(--atmos-page)] px-6 py-20 sm:px-8 sm:py-24 md:py-32"
    >
      <m.div
        className="mx-auto max-w-[1180px]"
        initial={
          shouldReduceMotion
            ? false
            : { opacity: 0, transform: "translateY(24px)" }
        }
        animate={
          isInView ? { opacity: 1, transform: "translateY(0px)" } : undefined
        }
        transition={{ duration: 0.55, ease: EASE_OUT }}
      >
        <IncludedSpecsCard />
      </m.div>
    </section>
  );
}

const trustPoints = [
  {
    icon: Shield,
    title: "2-Year Warranty",
    description:
      "Full coverage on parts and labor. If something goes wrong, we handle it.",
  },
  {
    icon: Zap,
    title: "FDA Class I Medical Device",
    description:
      "Registered with the FDA as a Class I medical device for cold therapy applications.",
  },
  {
    icon: Check,
    title: "Satisfaction Guarantee",
    description:
      "30-day satisfaction period. If CryoGun isn't right for your practice, return it.",
  },
];

function TrustSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -350px 0px",
  });
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion
    ? false
    : { opacity: 0, transform: "translateY(20px)" };

  function animateProps(delay: number) {
    return {
      initial,
      animate: isInView
        ? { opacity: 1, transform: "translateY(0px)" }
        : undefined,
      transition: { duration: 0.5, delay, ease: EASE_OUT },
    };
  }

  return (
    <section
      ref={sectionRef}
      id="trust"
      className="w-full bg-[#0f1012] px-6 py-20 text-white sm:px-8 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="max-w-3xl">
          <m.p
            className="text-sm font-medium uppercase tracking-[0.16em] text-white/50"
            {...animateProps(0)}
          >
            Your Investment Protected
          </m.p>
          <m.h2
            className="mt-3 text-3xl font-medium leading-[1.08] sm:text-4xl sm:leading-[1.05] md:text-5xl"
            {...animateProps(0.06)}
          >
            Buy with confidence.
          </m.h2>
          <m.p
            className="mt-4 text-base leading-7 text-white/68 sm:text-lg sm:leading-8 md:text-xl"
            {...animateProps(0.12)}
          >
            CryoGun is backed by warranty, regulatory compliance, and a team
            that stands behind every unit we sell.
          </m.p>
        </div>

        <div className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-3">
          {trustPoints.map((point, index) => (
            <m.div
              key={point.title}
              className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, transform: "translateY(24px) scale(0.97)" }
              }
              animate={
                isInView
                  ? { opacity: 1, transform: "translateY(0px) scale(1)" }
                  : undefined
              }
              transition={{
                duration: 0.55,
                delay: 0.15 + index * 0.07,
                ease: EASE_OUT,
              }}
            >
              <div className="flex size-12 items-center justify-center rounded-xl bg-[var(--atmos-blue)]/20 text-[var(--atmos-blue)]">
                <point.icon className="size-6" strokeWidth={1.5} />
              </div>
              <h3 className="mt-5 text-lg font-medium sm:text-xl">
                {point.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-white/68">
                {point.description}
              </p>
            </m.div>
          ))}
        </div>

        <m.div
          className="mt-10 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-10 sm:mt-14 sm:gap-12 sm:pt-14"
          {...animateProps(0.4)}
        >
          <div className="text-center">
            <p className="text-3xl font-semibold sm:text-4xl">200+</p>
            <p className="mt-1 text-sm text-white/50">Units deployed</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-semibold sm:text-4xl">4.9/5</p>
            <p className="mt-1 text-sm text-white/50">Operator rating</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-semibold sm:text-4xl">98%</p>
            <p className="mt-1 text-sm text-white/50">Would recommend</p>
          </div>
        </m.div>
      </div>
    </section>
  );
}

const revenuePoints = [
  { label: "Average treatment price", value: "$50-150" },
  { label: "Treatments per day", value: "3-5 typical" },
  { label: "Daily revenue potential", value: "$150-750" },
  { label: "Monthly revenue potential", value: "$3,750-18,750" },
];

function ROISection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -350px 0px",
  });
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion
    ? false
    : { opacity: 0, transform: "translateY(20px)" };

  function animateProps(delay: number) {
    return {
      initial,
      animate: isInView
        ? { opacity: 1, transform: "translateY(0px)" }
        : undefined,
      transition: { duration: 0.5, delay, ease: EASE_OUT },
    };
  }

  return (
    <section
      ref={sectionRef}
      id="roi"
      className="w-full bg-[var(--atmos-canvas)] px-6 py-20 sm:px-8 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <m.p
              className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--atmos-muted)]"
              {...animateProps(0)}
            >
              Revenue Potential
            </m.p>
            <m.h2
              className="mt-3 text-3xl font-medium leading-[1.08] text-[var(--atmos-ink)] sm:text-4xl sm:leading-[1.05] md:text-5xl"
              {...animateProps(0.06)}
            >
              Add a new revenue stream to your practice.
            </m.h2>
            <m.p
              className="mt-4 text-base leading-7 text-[var(--atmos-secondary)] sm:text-lg sm:leading-8 md:text-xl"
              {...animateProps(0.12)}
            >
              Localized cryotherapy treatments command premium pricing. With
              short session times and high client demand, CryoGun creates
              consistent recurring revenue.
            </m.p>
            <m.div className="mt-8" {...animateProps(0.18)}>
              <Link
                href="/book-demo"
                className="inline-flex items-center gap-1 text-[1.05rem] font-medium text-[var(--atmos-blue)] transition-[gap] duration-200 hover:gap-2"
              >
                Talk to us about your business model
                <ArrowRight className="size-4" />
              </Link>
            </m.div>
          </div>

          <m.div
            className="p-6 ring-1 ring-[var(--atmos-border)] sm:p-8"
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, transform: "translateY(24px) scale(0.97)" }
            }
            animate={
              isInView
                ? { opacity: 1, transform: "translateY(0px) scale(1)" }
                : undefined
            }
            transition={{ duration: 0.55, delay: 0.2, ease: EASE_OUT }}
          >
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-[var(--atmos-muted)]">
              Revenue Calculator
            </p>

            <div className="mt-6 space-y-4">
              {revenuePoints.map((point) => (
                <div
                  key={point.label}
                  className="flex items-center justify-between py-1"
                >
                  <span className="text-sm text-[var(--atmos-secondary)] sm:text-base">
                    {point.label}
                  </span>
                  <span className="text-base font-medium text-[var(--atmos-ink)] sm:text-lg">
                    {point.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-[var(--atmos-border)] pt-6">
              <div>
                <span className="block text-sm text-[var(--atmos-secondary)] sm:text-base">
                  Potential first-year revenue
                </span>
                <span className="block text-xs italic text-[var(--atmos-muted)]">
                  Based on 250 working days per year
                </span>
              </div>
              <span className="text-lg font-semibold text-[var(--atmos-green)] sm:text-xl">
                $45,000 - $225,000
              </span>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}

const supportTimeline = [
  {
    step: "1",
    title: "Demo",
    description: "See the device, ask questions, confirm fit for your setting.",
  },
  {
    step: "2",
    title: "Training",
    description:
      "Comprehensive operator training before your device ships.",
  },
  {
    step: "3",
    title: "Delivery",
    description: "Device arrives ready to use with all included components.",
  },
  {
    step: "4",
    title: "Support",
    description: "Ongoing access to our team as real questions come up.",
  },
];

function TrainingSupportSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -350px 0px",
  });
  const shouldReduceMotion = useReducedMotion();

  const initial = shouldReduceMotion
    ? false
    : { opacity: 0, transform: "translateY(20px)" };

  function animateProps(delay: number) {
    return {
      initial,
      animate: isInView
        ? { opacity: 1, transform: "translateY(0px)" }
        : undefined,
      transition: { duration: 0.5, delay, ease: EASE_OUT },
    };
  }

  return (
    <section
      ref={sectionRef}
      id="training"
      className="w-full bg-[var(--atmos-page)] px-6 py-20 sm:px-8 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="max-w-3xl">
          <m.h2
            className="text-3xl font-medium leading-[1.08] text-[var(--atmos-ink)] sm:text-4xl sm:leading-[1.05] md:text-5xl"
            {...animateProps(0)}
          >
            Training before first use.
            <br />
            Support after delivery.
          </m.h2>
          <m.p
            className="mt-4 text-base leading-7 text-[var(--atmos-secondary)] sm:text-lg sm:leading-8 md:text-xl"
            {...animateProps(0.06)}
          >
            Before CryoGun enters active use, Atmos helps your team understand
            setup, handling, use-case fit, and responsible application. After
            delivery, support continues as real questions come up.
          </m.p>
        </div>

        <div className="mt-10 grid gap-px overflow-hidden rounded-2xl bg-[var(--atmos-border)] sm:mt-14 md:grid-cols-4">
          {supportTimeline.map((item, index) => (
            <m.div
              key={item.step}
              className="bg-[var(--atmos-canvas)] p-6 sm:p-8"
              initial={
                shouldReduceMotion
                  ? false
                  : { opacity: 0, transform: "translateY(20px)" }
              }
              animate={
                isInView
                  ? { opacity: 1, transform: "translateY(0px)" }
                  : undefined
              }
              transition={{
                duration: 0.5,
                delay: 0.1 + index * 0.07,
                ease: EASE_OUT,
              }}
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-[var(--atmos-blue)] text-sm font-semibold text-white">
                {item.step}
              </span>
              <h3 className="mt-4 text-lg font-medium text-[var(--atmos-ink)] sm:text-xl">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--atmos-secondary)]">
                {item.description}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqItems = [
  {
    id: "faq-1",
    question: "What gas does CryoGun use?",
    answer:
      "CryoGun uses medical-grade compressed CO2 (carbon dioxide). Each standard tank provides approximately 200-300 treatments depending on application duration.",
  },
  {
    id: "faq-2",
    question: "How cold does it get?",
    answer:
      "The CO2 expands to approximately -78°C (-108°F) at the nozzle. Actual tissue temperature depends on distance, duration, and application technique covered in training.",
  },
  {
    id: "faq-3",
    question: "Do I need special facilities or ventilation?",
    answer:
      "No special facilities required. CryoGun is designed for standard treatment rooms, training facilities, and clinical environments. Basic ventilation (a window or standard HVAC) is sufficient.",
  },
  {
    id: "faq-4",
    question: "Is training included?",
    answer:
      "Yes. Comprehensive operator training is included with every CryoGun purchase. Training covers setup, technique, safety protocols, and use-case guidance before your device ships.",
  },
  {
    id: "faq-5",
    question: "What's the warranty?",
    answer:
      "CryoGun includes a 2-year warranty covering parts and labor. Extended warranty options are available.",
  },
  {
    id: "faq-6",
    question: "How long does shipping take?",
    answer:
      "After training completion, devices typically ship within 5-7 business days. Delivery time depends on your location.",
  },
  {
    id: "faq-7",
    question: "Can I finance the purchase?",
    answer:
      "Yes. We offer flexible financing options including payment plans and leasing. Contact us to discuss what works for your business.",
  },
  {
    id: "faq-8",
    question: "What if it's not right for my practice?",
    answer:
      "We offer a 30-day satisfaction guarantee. If CryoGun isn't the right fit for your practice, return it for a full refund.",
  },
];

function FAQSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -350px 0px",
  });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="w-full bg-[var(--atmos-canvas)] px-6 py-20 sm:px-8 sm:py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
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
            Questions before you buy.
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
            Find answers to common questions about CryoGun, training, and
            support.
          </m.p>
        </div>

        <m.div
          className="mx-auto mt-10 max-w-3xl sm:mt-12"
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, transform: "translateY(24px)" }
          }
          animate={
            isInView
              ? { opacity: 1, transform: "translateY(0px)" }
              : undefined
          }
          transition={{ duration: 0.55, delay: 0.18, ease: EASE_OUT }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full rounded-2xl border border-[var(--atmos-border)] bg-[var(--atmos-page)] px-5 py-2 shadow-none sm:px-8 sm:py-3"
          >
            {faqItems.map((item, index) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className={
                  index === faqItems.length - 1 ? "!border-0" : "border-dashed"
                }
              >
                <AccordionTrigger className="cursor-pointer text-left text-base font-medium leading-6 text-[var(--atmos-ink)] hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-base text-[var(--atmos-secondary)]">
                    {item.answer}
                  </p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <p className="mt-6 px-2 text-center text-sm leading-6 text-[var(--atmos-secondary)] sm:px-8 sm:text-base">
            Have a different question?{" "}
            <Link
              href="/book-demo"
              className="font-medium text-[var(--atmos-blue)] hover:underline"
            >
              Talk to our team
            </Link>
          </p>
        </m.div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: "0px 0px -350px 0px",
  });
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      ref={sectionRef}
      id="cta"
      className="w-full bg-[#0f1012] px-6 py-20 text-white sm:px-8 sm:py-24 md:py-32"
    >
      <div className="mx-auto flex max-w-[860px] flex-col items-center text-center">
        <m.h2
          className="max-w-3xl text-3xl font-medium leading-[1.08] sm:text-4xl sm:leading-[1.05] md:text-6xl"
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
          See if CryoGun fits your setting.
        </m.h2>
        <m.p
          className="mt-4 max-w-2xl text-base leading-7 text-white/68 sm:mt-6 sm:text-lg sm:leading-8 md:text-xl"
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
          Book a demo to review the device, training, pricing, and delivery
          timeline with our team.
        </m.p>

        <m.div
          className="mt-8 flex w-full max-w-sm flex-col justify-center gap-3 sm:mt-10 sm:max-w-none sm:flex-row"
          initial={
            shouldReduceMotion
              ? false
              : { opacity: 0, transform: "translateY(12px) scale(0.97)" }
          }
          animate={
            isInView
              ? { opacity: 1, transform: "translateY(0px) scale(1)" }
              : undefined
          }
          transition={{ duration: 0.45, delay: 0.18, ease: EASE_OUT }}
        >
          <Link
            href="/book-demo"
            className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--atmos-blue)] px-7 text-center text-[0.95rem] font-medium text-white transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[#0064c8] active:scale-[0.97]"
          >
            Book a Demo
          </Link>
          <a
            href="#specs"
            className="inline-flex min-h-12 items-center justify-center rounded-full border-2 border-white/20 px-7 text-center text-[0.95rem] font-medium text-white transition-[background-color,border-color,transform] duration-200 hover:border-white/40 hover:bg-white/5 active:scale-[0.97]"
          >
            View Full Specs
          </a>
        </m.div>
      </div>
    </section>
  );
}
