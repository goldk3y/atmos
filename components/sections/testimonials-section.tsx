"use client";

import { m, useInView, useReducedMotion } from "motion/react";
import { useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";

const EASE_OUT: [number, number, number, number] = [0.23, 1, 0.32, 1];

export default function TestimonialsSection() {
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
    <LazyMotionProvider>
      <section
        ref={sectionRef}
        id="testimonials"
        className="w-full bg-[var(--atmos-canvas)] px-6 py-20 sm:px-8 sm:py-24 md:py-32"
      >
        <div className="mx-auto max-w-[1180px]">
          <div className="mb-8 max-w-2xl sm:mb-10">
            <m.h2
              className="text-3xl font-medium leading-[1.08] text-[var(--atmos-ink)] sm:text-4xl md:text-5xl"
              {...animateProps(0)}
            >
              Trusted by providers
            </m.h2>
            <m.p
              className="mt-4 text-base leading-7 text-[var(--atmos-secondary)] sm:text-lg sm:leading-8 md:text-xl text-pretty"
              {...animateProps(0.06)}
            >
              See how teams and businesses are using Atmos to deliver focused
              cold therapy.
            </m.p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
            <m.div
              {...animateProps(0.1)}
              className="sm:col-span-2 lg:row-span-2"
            >
              <Card className="h-full border-[var(--atmos-border)] bg-[var(--atmos-surface)] shadow-none sm:grid sm:grid-rows-[auto_1fr] sm:gap-8 sm:p-6">
                <CardHeader className="hidden sm:block">
                  <div className="h-6 w-fit font-semibold text-[var(--atmos-ink)]">
                    Performance Physical Therapy
                  </div>
                </CardHeader>
                <CardContent className="pt-6 sm:pt-0">
                  <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                    <p className="leading-7 text-[var(--atmos-ink)] sm:text-lg sm:font-medium md:text-xl md:leading-normal">
                      Atmos has become essential to our recovery protocols. The
                      portability lets us treat patients anywhere in the clinic,
                      and the training gave our team confidence from day one.
                      Patients notice the difference in targeted relief.
                    </p>

                    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                      <Avatar className="size-12">
                        <AvatarImage
                          src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&h=400&fit=crop&crop=face"
                          alt="Dr. Sarah Mitchell"
                        />
                        <AvatarFallback className="bg-[var(--atmos-fill)] text-[var(--atmos-ink)] ring-1 ring-[var(--atmos-border)]">
                          SM
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <cite className="text-sm font-medium text-[var(--atmos-ink)]">
                          Dr. Sarah Mitchell
                        </cite>
                        <span className="block text-sm text-[var(--atmos-secondary)]">
                          Clinic Director, Physical Therapy
                        </span>
                      </div>
                    </div>
                  </blockquote>
                </CardContent>
              </Card>
            </m.div>

            <m.div {...animateProps(0.17)} className="h-full md:col-span-2">
              <Card className="h-full border-[var(--atmos-border)] bg-[var(--atmos-surface)] shadow-none md:col-span-2">
                <CardContent className="h-full pt-6">
                  <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                    <p className="leading-7 text-[var(--atmos-ink)] sm:text-lg sm:font-medium md:text-xl md:leading-normal">
                      We needed cryotherapy that could travel with our athletes.
                      Atmos delivers exactly that: professional-grade treatment
                      without the facility constraints. Our sports medicine team
                      uses it daily for injury management and recovery.
                    </p>

                    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                      <Avatar className="size-12">
                        <AvatarImage
                          src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
                          alt="James Chen"
                        />
                        <AvatarFallback className="bg-[var(--atmos-fill)] text-[var(--atmos-ink)] ring-1 ring-[var(--atmos-border)]">
                          JC
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <cite className="text-sm font-medium text-[var(--atmos-ink)]">
                          James Chen
                        </cite>
                        <span className="block text-sm text-[var(--atmos-secondary)]">
                          Head Athletic Trainer
                        </span>
                      </div>
                    </div>
                  </blockquote>
                </CardContent>
              </Card>
            </m.div>

            <m.div {...animateProps(0.24)}>
              <Card className="border-[var(--atmos-border)] bg-[var(--atmos-surface)] shadow-none h-full">
                <CardContent className="h-full pt-6">
                  <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                    <p className="leading-7 text-[var(--atmos-ink)]">
                      The setup was straightforward, and the support team
                      actually helped us think through our service offerings.
                      It&apos;s rare to find equipment that comes with this
                      level of guidance.
                    </p>

                    <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                      <Avatar className="size-12">
                        <AvatarImage
                          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face"
                          alt="Maria Rodriguez"
                        />
                        <AvatarFallback className="bg-[var(--atmos-fill)] text-[var(--atmos-ink)] ring-1 ring-[var(--atmos-border)]">
                          MR
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <cite className="text-sm font-medium text-[var(--atmos-ink)]">
                          Maria Rodriguez
                        </cite>
                        <span className="block text-sm text-[var(--atmos-secondary)]">
                          Wellness Center Owner
                        </span>
                      </div>
                    </div>
                  </blockquote>
                </CardContent>
              </Card>
            </m.div>

            <m.div {...animateProps(0.31)}>
              <Card className="border-[var(--atmos-border)] bg-[var(--atmos-surface)] shadow-none h-full">
                <CardContent className="h-full pt-6">
                  <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                    <p className="leading-7 text-[var(--atmos-ink)]">
                      Our athletes request Atmos by name now. The targeted
                      approach means we can treat specific areas without
                      full-body exposure. It&apos;s changed how we handle acute
                      injuries.
                    </p>

                    <div className="grid grid-cols-[auto_1fr] gap-3">
                      <Avatar className="size-12">
                        <AvatarImage
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                          alt="David Park"
                        />
                        <AvatarFallback className="bg-[var(--atmos-fill)] text-[var(--atmos-ink)] ring-1 ring-[var(--atmos-border)]">
                          DP
                        </AvatarFallback>
                      </Avatar>

                      <div>
                        <cite className="text-sm font-medium text-[var(--atmos-ink)]">
                          David Park
                        </cite>
                        <span className="block text-sm text-[var(--atmos-secondary)]">
                          Sports Medicine Director
                        </span>
                      </div>
                    </div>
                  </blockquote>
                </CardContent>
              </Card>
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotionProvider>
  );
}
