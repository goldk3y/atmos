"use client";
import React from "react";
import Image from "next/image";
import type { ComponentProps, ReactNode } from "react";
import { m, useReducedMotion } from "motion/react";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";
import { ThemeToggle } from "@/components/theme-toggle";

const COPYRIGHT_YEAR = 2026;

interface FooterLink {
  title: string;
  href: string;
}

interface FooterSection {
  label: string;
  links: FooterLink[];
}

const footerLinks: FooterSection[] = [
  {
    label: "Product",
    links: [
      { title: "Features", href: "#features" },
      { title: "Use Cases", href: "#use-cases" },
      { title: "Videos", href: "#walkthrough" },
      { title: "Testimonials", href: "#testimonials" },
    ],
  },
  {
    label: "Company",
    links: [
      { title: "About", href: "/about" },
      { title: "FAQ", href: "#faq" },
      { title: "Book a Demo", href: "/book-demo" },
      { title: "Contact", href: "/contact" },
    ],
  },
  {
    label: "Resources",
    links: [
      { title: "Equipment", href: "#features" },
      { title: "Training", href: "#features" },
      { title: "Operator Support", href: "#features" },
    ],
  },
];

export function Footer() {
  return (
    <div className="bg-[var(--atmos-elevated-bg)] p-2 pt-0">
      <footer className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-t-2xl border-t border-[var(--atmos-elevated-border)] bg-[var(--atmos-elevated-bg)] px-6 py-14 text-[var(--atmos-elevated-fg)] sm:px-8 lg:px-12 lg:py-16">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--atmos-elevated-border)] to-transparent" />

        <div className="grid w-full max-w-[1180px] gap-12 xl:grid-cols-3 xl:gap-16">
          <AnimatedContainer className="space-y-4">
            <Image
              src="/atmos-logo.svg"
              alt="Atmos"
              width={120}
              height={45}
              className="h-8 w-auto brightness-0 invert"
            />
            <p className="mt-6 max-w-xs text-sm leading-6 text-[var(--atmos-elevated-tertiary)] md:mt-8">
              © <time dateTime={`${COPYRIGHT_YEAR}`}>{COPYRIGHT_YEAR}</time>{" "}
              Atmos Performance. All rights reserved.
            </p>
            <div className="flex items-center gap-2 pt-2">
              <ThemeToggle />
            </div>
          </AnimatedContainer>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 xl:col-span-2">
            {footerLinks.map((section, index) => (
              <AnimatedContainer key={section.label} delay={0.1 + index * 0.1}>
                <div className="mb-10 md:mb-0">
                  <h3 className="text-xs font-medium uppercase tracking-[0.16em] text-[var(--atmos-elevated-tertiary)]">
                    {section.label}
                  </h3>
                  <ul className="mt-4 space-y-2.5 text-sm text-[var(--atmos-elevated-muted)]">
                    {section.links.map((link) => (
                      <li key={link.title}>
                        <a
                          href={link.href}
                          className="inline-flex items-center transition-colors duration-300 hover:text-[var(--atmos-elevated-fg)]"
                        >
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedContainer>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: ComponentProps<typeof m.div>["className"];
  children: ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return children;
  }

  return (
    <LazyMotionProvider>
      <m.div
        initial={{ transform: "translateY(10px)", opacity: 0 }}
        whileInView={{ transform: "translateY(0px)", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.45, ease: [0.23, 1, 0.32, 1] }}
        className={className}
      >
        {children}
      </m.div>
    </LazyMotionProvider>
  );
}
