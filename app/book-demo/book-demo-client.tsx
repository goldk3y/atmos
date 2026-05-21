"use client";

import Image from "next/image";
import { useState } from "react";
import { DemoBookingFlow } from "@/components/booking/demo-booking-flow";

export function BookDemoClient() {
  const [_eventScheduled, setEventScheduled] = useState(false);

  return (
    <main className="flex min-h-screen flex-col bg-[var(--atmos-page)]">
      <section className="flex-1 px-2 pb-12 pt-2 sm:pb-12">
        <div className="mx-auto max-w-[1180px] px-5 pt-6 sm:px-8 sm:pt-8 lg:px-12">
          <div className="mt-6">
            <DemoBookingFlow onEventScheduled={setEventScheduled} />
          </div>
        </div>
      </section>

      <div className="py-6">
        <div className="mx-auto flex max-w-lg items-center justify-between px-5 sm:px-8">
          <Image
            src="/atmos-logo.svg"
            alt="Atmos"
            width={40}
            height={40}
            loading="eager"
            className="dark:invert"
          />
          <h1 className="text-sm font-normal sm:text-base">
            <span className="font-medium text-[var(--atmos-ink)]">Atmos</span>
            <span className="ml-1 text-[var(--atmos-secondary)]">Demo</span>
          </h1>
        </div>
      </div>
    </main>
  );
}
