"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, ChevronRight } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const markets = [
  {
    title: "Equine",
    href: "/cryotherapy/equine",
    description: "Focused cold therapy wherever the horse is working.",
  },
  {
    title: "Clinics & Chiropractic",
    href: "/cryotherapy/clinics",
    description: "Add recovery to your treatment rooms.",
  },
  {
    title: "Sports Recovery",
    href: "/cryotherapy/sports-recovery",
    description: "Portable targeted recovery for teams and athletes.",
  },
  {
    title: "Wellness & Medspa",
    href: "/cryotherapy/medspa",
    description: "A premium treatment for your service menu.",
  },
];

const resources = [
  { title: "Training", href: "/training" },
  { title: "Support", href: "/support" },
  { title: "The Science", href: "/cryotherapy-science" },
  { title: "Blog", href: "/blog" },
  { title: "Case Studies", href: "/case-studies" },
  { title: "Videos", href: "/videos" },
];

const company = [
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
];

export function MobileNav() {
  const [isOpen, setIsOpen] = React.useState(false);

  const closeNav = () => setIsOpen(false);

  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center self-center lg:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <button
            className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border-[0.5px] border-[var(--atmos-border)] bg-[var(--atmos-canvas)]/80 text-[var(--atmos-ink)] shadow-[0_1px_2px_rgba(0,0,0,0.01),0_2px_4px_rgba(0,0,0,0.01),0_4px_8px_rgba(0,0,0,0.01),0_8px_16px_rgba(0,0,0,0.01),0_16px_32px_rgba(0,0,0,0.01)] backdrop-blur-sm transition-all duration-200 hover:bg-[var(--atmos-canvas)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--atmos-blue)] dark:shadow-none dark:ring-1 dark:ring-[var(--atmos-border-subtle)]"
            aria-label="Open navigation menu"
          >
            <Menu className="size-[1.125rem]" />
          </button>
        </SheetTrigger>
      <SheetContent
        side="right"
        className="w-full border-l-[0.5px] border-[var(--atmos-border)] bg-[var(--atmos-page)] sm:max-w-sm"
      >
        <SheetHeader className="border-b border-[var(--atmos-border)] pb-4">
          <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          <Link href="/" onClick={closeNav} className="inline-block">
            <Image
              src="/atmos-logo.svg"
              alt="Atmos"
              width={100}
              height={32}
              className="h-6 w-auto dark:invert"
            />
          </Link>
        </SheetHeader>

        <nav className="flex flex-col gap-6 overflow-y-auto px-4 py-6">
          {/* Device Link */}
          <Link
            href="/cryogun"
            onClick={closeNav}
            className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-[var(--atmos-ink)] transition-colors hover:bg-[var(--atmos-canvas)]"
          >
            Device
            <ChevronRight className="size-4 text-[var(--atmos-muted)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--atmos-secondary)]" />
          </Link>

          {/* Solutions Section */}
          <div>
            <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-[var(--atmos-muted)]">
              Solutions
            </h3>
            <div className="flex flex-col gap-1">
              {markets.map((market) => (
                <Link
                  key={market.title}
                  href={market.href}
                  onClick={closeNav}
                  className="group flex flex-col gap-0.5 rounded-lg px-3 py-2.5 transition-colors hover:bg-[var(--atmos-canvas)]"
                >
                  <span className="flex items-center justify-between text-base font-medium text-[var(--atmos-ink)]">
                    {market.title}
                    <ChevronRight className="size-4 text-[var(--atmos-muted)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--atmos-secondary)]" />
                  </span>
                  <span className="text-sm text-[var(--atmos-secondary)]">
                    {market.description}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-[var(--atmos-muted)]">
              Resources
            </h3>
            <div className="flex flex-col gap-1">
              {resources.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={closeNav}
                  className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-[var(--atmos-ink)] transition-colors hover:bg-[var(--atmos-canvas)]"
                >
                  {item.title}
                  <ChevronRight className="size-4 text-[var(--atmos-muted)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--atmos-secondary)]" />
                </Link>
              ))}
            </div>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-[var(--atmos-muted)]">
              Company
            </h3>
            <div className="flex flex-col gap-1">
              {company.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={closeNav}
                  className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-base font-medium text-[var(--atmos-ink)] transition-colors hover:bg-[var(--atmos-canvas)]"
                >
                  {item.title}
                  <ChevronRight className="size-4 text-[var(--atmos-muted)] transition-transform group-hover:translate-x-0.5 group-hover:text-[var(--atmos-secondary)]" />
                </Link>
              ))}
            </div>
          </div>
        </nav>

        {/* CTA Button */}
        <div className="mt-auto border-t border-[var(--atmos-border)] p-4">
          <Link
            href="/book-demo"
            onClick={closeNav}
            className="flex w-full items-center justify-center rounded-full bg-[var(--atmos-ink)] px-6 py-3 text-base font-medium text-[var(--atmos-page)] transition-all duration-200 hover:bg-[var(--atmos-blue)] hover:text-white active:scale-[0.98]"
          >
            Book a Demo
          </Link>
        </div>
      </SheetContent>
    </Sheet>
    </div>
  );
}
