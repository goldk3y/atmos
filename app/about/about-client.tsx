"use client";

import { m, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { Image as ImageIcon, Target, Heart, Users, Zap } from "lucide-react";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

export function AboutClient() {
  return (
    <main>
      <HeroSection />
      <MissionSection />
      <StorySection />
      <ValuesSection />
      <TeamSection />
      <StatsSection />
      <CTASection />
    </main>
  );
}

function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotionProvider>
      <section className="w-full bg-[var(--atmos-canvas)] px-6 pb-20 pt-32 sm:px-8 sm:pb-24 sm:pt-36 md:pb-32 md:pt-44">
        <div className="mx-auto max-w-[1180px]">
          <m.p
            className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--atmos-muted)] sm:text-sm"
            initial={shouldReduceMotion ? false : { opacity: 0, transform: "translateY(10px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.45, delay: 0.1, ease: EASE_OUT }}
          >
            About Atmos
          </m.p>
          <m.h1
            className="mt-4 max-w-4xl text-4xl font-medium leading-[1.05] text-[var(--atmos-ink)] sm:text-5xl md:text-6xl"
            initial={shouldReduceMotion ? false : { opacity: 0, transform: "translateY(16px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.5, delay: 0.2, ease: EASE_OUT }}
          >
            We believe cryotherapy should be accessible to every practice.
          </m.h1>
          <m.p
            className="mt-6 max-w-2xl text-lg leading-8 text-[var(--atmos-secondary)] sm:text-xl"
            initial={shouldReduceMotion ? false : { opacity: 0, transform: "translateY(12px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.5, delay: 0.3, ease: EASE_OUT }}
          >
            Atmos Performance was founded to bridge the gap between proven cold therapy science and the practitioners who want to offer it.
          </m.p>
        </div>
      </section>
    </LazyMotionProvider>
  );
}

function MissionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotionProvider>
      <section
        ref={sectionRef}
        className="w-full bg-[var(--atmos-canvas)] px-6 py-20 sm:px-8 sm:py-24 md:py-32"
      >
        <div className="mx-auto grid max-w-[1180px] gap-12 lg:grid-cols-2 lg:gap-16">
          <m.div
            className="flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-[var(--atmos-page)] ring-1 ring-[var(--atmos-border)]"
            initial={shouldReduceMotion ? false : { opacity: 0, transform: "translateY(24px)" }}
            animate={isInView ? { opacity: 1, transform: "translateY(0px)" } : undefined}
            transition={{ duration: 0.55, ease: EASE_OUT }}
          >
            <ImageIcon className="size-20 text-[var(--atmos-muted)]" />
          </m.div>

          <div className="flex flex-col justify-center">
            <m.p
              className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--atmos-muted)] sm:text-sm"
              initial={shouldReduceMotion ? false : { opacity: 0, transform: "translateY(10px)" }}
              animate={isInView ? { opacity: 1, transform: "translateY(0px)" } : undefined}
              transition={{ duration: 0.45, delay: 0.1, ease: EASE_OUT }}
            >
              Our Mission
            </m.p>
            <m.h2
              className="mt-4 text-3xl font-medium leading-[1.08] text-[var(--atmos-ink)] sm:text-4xl"
              initial={shouldReduceMotion ? false : { opacity: 0, transform: "translateY(16px)" }}
              animate={isInView ? { opacity: 1, transform: "translateY(0px)" } : undefined}
              transition={{ duration: 0.5, delay: 0.15, ease: EASE_OUT }}
            >
              Empowering practitioners to deliver cold therapy with confidence.
            </m.h2>
            <m.p
              className="mt-5 text-base leading-7 text-[var(--atmos-secondary)] sm:text-lg sm:leading-8"
              initial={shouldReduceMotion ? false : { opacity: 0, transform: "translateY(12px)" }}
              animate={isInView ? { opacity: 1, transform: "translateY(0px)" } : undefined}
              transition={{ duration: 0.5, delay: 0.2, ease: EASE_OUT }}
            >
              Our mission is to remove the barriers that have kept localized cryotherapy out of more practices. We provide the equipment, training, and ongoing support that practitioners need to add cryotherapy as a professional service offering, without the complexity of dedicated facilities or uncertain implementation paths.
            </m.p>
          </div>
        </div>
      </section>
    </LazyMotionProvider>
  );
}

function StorySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotionProvider>
      <section
        ref={sectionRef}
        className="w-full bg-[var(--atmos-canvas)] px-6 py-20 sm:px-8 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1180px]">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="order-2 flex flex-col justify-center lg:order-1">
              <m.p
                className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--atmos-muted)] sm:text-sm"
                initial={shouldReduceMotion ? false : { opacity: 0, transform: "translateY(10px)" }}
                animate={isInView ? { opacity: 1, transform: "translateY(0px)" } : undefined}
                transition={{ duration: 0.45, delay: 0.1, ease: EASE_OUT }}
              >
                Our Story
              </m.p>
              <m.h2
                className="mt-4 text-3xl font-medium leading-[1.08] text-[var(--atmos-ink)] sm:text-4xl"
                initial={shouldReduceMotion ? false : { opacity: 0, transform: "translateY(16px)" }}
                animate={isInView ? { opacity: 1, transform: "translateY(0px)" } : undefined}
                transition={{ duration: 0.5, delay: 0.15, ease: EASE_OUT }}
              >
                Built from a simple observation.
              </m.h2>
              <m.div
                className="mt-5 space-y-4 text-base leading-7 text-[var(--atmos-secondary)] sm:text-lg sm:leading-8"
                initial={shouldReduceMotion ? false : { opacity: 0, transform: "translateY(12px)" }}
                animate={isInView ? { opacity: 1, transform: "translateY(0px)" } : undefined}
                transition={{ duration: 0.5, delay: 0.2, ease: EASE_OUT }}
              >
                <p>
                  Cryotherapy has decades of clinical evidence behind it. Physical therapists, athletic trainers, chiropractors, and sports medicine professionals have long understood its benefits for pain management, inflammation reduction, and recovery acceleration.
                </p>
                <p>
                  But we noticed something: the equipment available either required dedicated cryotherapy facilities with significant buildout costs, or lacked the professional-grade performance that practitioners needed to deliver consistent results.
                </p>
                <p>
                  Atmos was founded to solve this problem. We designed portable, professional-grade localized cryotherapy systems specifically for the practices and facilities that already exist, combined with the training and support to implement them successfully.
                </p>
              </m.div>
            </div>

            <m.div
              className="order-1 flex aspect-[4/3] items-center justify-center rounded-[1.25rem] bg-[var(--atmos-page)] ring-1 ring-[var(--atmos-border)] lg:order-2"
              initial={shouldReduceMotion ? false : { opacity: 0, transform: "translateY(24px)" }}
              animate={isInView ? { opacity: 1, transform: "translateY(0px)" } : undefined}
              transition={{ duration: 0.55, delay: 0.1, ease: EASE_OUT }}
            >
              <ImageIcon className="size-20 text-[var(--atmos-muted)]" />
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotionProvider>
  );
}

const VALUES = [
  {
    icon: Target,
    title: "Practitioner-First Design",
    description:
      "Every decision we make starts with the practitioner. Our equipment, training, and support are designed around the real-world needs of busy clinics, athletic departments, and wellness facilities.",
  },
  {
    icon: Heart,
    title: "Evidence-Based Approach",
    description:
      "We build on decades of cryotherapy research and clinical use. Our training emphasizes responsible service delivery and realistic expectations grounded in what the science actually shows.",
  },
  {
    icon: Users,
    title: "Partnership Over Transaction",
    description:
      "We view every customer relationship as a partnership. From pre-purchase consultations to ongoing support, we stay involved to help practitioners succeed with their cryotherapy service.",
  },
  {
    icon: Zap,
    title: "Practical Innovation",
    description:
      "Innovation means nothing if it doesn't solve real problems. We focus on practical improvements that make cryotherapy easier to deliver, more consistent in results, and simpler to integrate.",
  },
];

function ValuesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotionProvider>
      <section
        ref={sectionRef}
        className="w-full bg-[var(--atmos-canvas)] px-6 py-20 sm:px-8 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-2xl">
            <m.p
              className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--atmos-muted)] sm:text-sm"
              initial={shouldReduceMotion ? false : { opacity: 0, transform: "translateY(10px)" }}
              animate={isInView ? { opacity: 1, transform: "translateY(0px)" } : undefined}
              transition={{ duration: 0.45, ease: EASE_OUT }}
            >
              Our Values
            </m.p>
            <m.h2
              className="mt-4 text-3xl font-medium leading-[1.08] text-[var(--atmos-ink)] sm:text-4xl md:text-5xl"
              initial={shouldReduceMotion ? false : { opacity: 0, transform: "translateY(16px)" }}
              animate={isInView ? { opacity: 1, transform: "translateY(0px)" } : undefined}
              transition={{ duration: 0.5, delay: 0.06, ease: EASE_OUT }}
            >
              What guides everything we do.
            </m.h2>
            <m.p
              className="mt-4 text-base leading-7 text-[var(--atmos-secondary)] sm:text-lg sm:leading-8"
              initial={shouldReduceMotion ? false : { opacity: 0, transform: "translateY(12px)" }}
              animate={isInView ? { opacity: 1, transform: "translateY(0px)" } : undefined}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT }}
            >
              These principles shape how we build products, support customers, and make decisions as a company.
            </m.p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16">
            {VALUES.map((value, index) => (
              <m.div
                key={value.title}
                className="flex flex-col rounded-[1.25rem] bg-[var(--atmos-page)] p-6 ring-1 ring-[var(--atmos-border)] sm:p-8"
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
                transition={{ duration: 0.55, delay: 0.15 + index * 0.07, ease: EASE_OUT }}
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-[var(--atmos-canvas)]">
                  <value.icon className="size-6 text-[var(--atmos-ink)]" strokeWidth={1.5} />
                </div>
                <h3 className="mt-5 text-xl font-medium text-[var(--atmos-ink)]">{value.title}</h3>
                <p className="mt-3 text-base leading-7 text-[var(--atmos-secondary)]">
                  {value.description}
                </p>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotionProvider>
  );
}

const TEAM_MEMBERS = [
  {
    name: "Leadership Team",
    role: "Executive",
    bio: "Bringing together experience in medical equipment, sports medicine, and business operations to guide Atmos's mission.",
  },
  {
    name: "Product Team",
    role: "Engineering & Design",
    bio: "Engineers and designers focused on creating equipment that meets the real-world demands of professional practice environments.",
  },
  {
    name: "Training Team",
    role: "Education & Certification",
    bio: "Experts in cryotherapy application and practitioner education who develop and deliver our training programs.",
  },
  {
    name: "Support Team",
    role: "Customer Success",
    bio: "Dedicated professionals who help practitioners succeed from first conversation through ongoing operation.",
  },
];

function TeamSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotionProvider>
      <section
        ref={sectionRef}
        className="w-full bg-[var(--atmos-canvas)] px-6 py-20 sm:px-8 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1180px]">
          <div className="max-w-2xl">
            <m.p
              className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--atmos-muted)] sm:text-sm"
              initial={shouldReduceMotion ? false : { opacity: 0, transform: "translateY(10px)" }}
              animate={isInView ? { opacity: 1, transform: "translateY(0px)" } : undefined}
              transition={{ duration: 0.45, ease: EASE_OUT }}
            >
              Our Team
            </m.p>
            <m.h2
              className="mt-4 text-3xl font-medium leading-[1.08] text-[var(--atmos-ink)] sm:text-4xl md:text-5xl"
              initial={shouldReduceMotion ? false : { opacity: 0, transform: "translateY(16px)" }}
              animate={isInView ? { opacity: 1, transform: "translateY(0px)" } : undefined}
              transition={{ duration: 0.5, delay: 0.06, ease: EASE_OUT }}
            >
              The people behind Atmos.
            </m.h2>
            <m.p
              className="mt-4 text-base leading-7 text-[var(--atmos-secondary)] sm:text-lg sm:leading-8"
              initial={shouldReduceMotion ? false : { opacity: 0, transform: "translateY(12px)" }}
              animate={isInView ? { opacity: 1, transform: "translateY(0px)" } : undefined}
              transition={{ duration: 0.5, delay: 0.1, ease: EASE_OUT }}
            >
              A focused team committed to making professional cryotherapy accessible.
            </m.p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {TEAM_MEMBERS.map((member, index) => (
              <m.div
                key={member.name}
                className="flex flex-col rounded-[1.25rem] bg-[var(--atmos-page)] ring-1 ring-[var(--atmos-border)] overflow-hidden"
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
                transition={{ duration: 0.55, delay: 0.15 + index * 0.07, ease: EASE_OUT }}
              >
                <div className="flex aspect-square items-center justify-center bg-[var(--atmos-canvas)]">
                  <ImageIcon className="size-16 text-[var(--atmos-muted)]" />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-medium text-[var(--atmos-ink)]">{member.name}</h3>
                  <p className="mt-1 text-sm text-[var(--atmos-muted)]">{member.role}</p>
                  <p className="mt-3 text-sm leading-6 text-[var(--atmos-secondary)]">
                    {member.bio}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotionProvider>
  );
}

const STATS = [
  { value: "500+", label: "Active Practitioners" },
  { value: "12 min", label: "Average Session Time" },
  { value: "4 hr", label: "Support Response SLA" },
  { value: "98%", label: "Customer Satisfaction" },
];

function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotionProvider>
      <section
        ref={sectionRef}
        className="w-full bg-[var(--atmos-canvas)] px-6 py-20 sm:px-8 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1180px]">
          <m.div
            className="rounded-[1.25rem] bg-[#0f1012] px-6 py-12 sm:px-12 sm:py-16 md:py-20"
            initial={shouldReduceMotion ? false : { opacity: 0, transform: "translateY(24px)" }}
            animate={isInView ? { opacity: 1, transform: "translateY(0px)" } : undefined}
            transition={{ duration: 0.55, ease: EASE_OUT }}
          >
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {STATS.map((stat, index) => (
                <m.div
                  key={stat.label}
                  className="text-center"
                  initial={shouldReduceMotion ? false : { opacity: 0, transform: "translateY(16px)" }}
                  animate={isInView ? { opacity: 1, transform: "translateY(0px)" } : undefined}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.07, ease: EASE_OUT }}
                >
                  <p className="text-4xl font-medium text-white sm:text-5xl">{stat.value}</p>
                  <p className="mt-2 text-sm text-white/60">{stat.label}</p>
                </m.div>
              ))}
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotionProvider>
  );
}

function CTASection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "0px 0px -200px 0px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <LazyMotionProvider>
      <section
        ref={sectionRef}
        className="w-full bg-[#0f1012] px-6 py-20 text-white sm:px-8 sm:py-24 md:py-32"
      >
        <div className="mx-auto flex max-w-[860px] flex-col items-center text-center">
          <m.h2
            className="max-w-3xl text-3xl font-medium leading-[1.08] sm:text-4xl sm:leading-[1.05] md:text-5xl"
            initial={shouldReduceMotion ? false : { opacity: 0, transform: "translateY(16px)" }}
            animate={isInView ? { opacity: 1, transform: "translateY(0px)" } : undefined}
            transition={{ duration: 0.5, ease: EASE_OUT }}
          >
            Ready to bring cryotherapy to your practice?
          </m.h2>
          <m.p
            className="mt-4 max-w-2xl text-base leading-7 text-white/68 sm:mt-6 sm:text-lg sm:leading-8 md:text-xl"
            initial={shouldReduceMotion ? false : { opacity: 0, transform: "translateY(12px)" }}
            animate={isInView ? { opacity: 1, transform: "translateY(0px)" } : undefined}
            transition={{ duration: 0.5, delay: 0.12, ease: EASE_OUT }}
          >
            Talk with our team about how Atmos can help you add localized cryotherapy as a professional service. We&apos;ll answer your questions about equipment, training, implementation, and support.
          </m.p>

          <m.div
            className="mt-7 flex w-full max-w-sm flex-col justify-center gap-3 sm:mt-9 sm:max-w-none sm:flex-row"
            initial={
              shouldReduceMotion
                ? false
                : { opacity: 0, transform: "translateY(12px) scale(0.97)" }
            }
            animate={
              isInView ? { opacity: 1, transform: "translateY(0px) scale(1)" } : undefined
            }
            transition={{ duration: 0.45, delay: 0.2, ease: EASE_OUT }}
          >
            <a
              href="/book-demo"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--atmos-blue)] px-6 py-3 text-center text-sm font-medium text-white transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[#0064c8] active:scale-[0.97]"
            >
              Book a Demo
            </a>
            <a
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 bg-transparent px-6 py-3 text-center text-sm font-medium text-white transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-white/10 active:scale-[0.97]"
            >
              Contact Us
            </a>
          </m.div>
        </div>
      </section>
    </LazyMotionProvider>
  );
}
