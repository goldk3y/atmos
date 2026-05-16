"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const includedItems = [
  {
    title: "CryoGun device",
    copy: "The handheld localized cryotherapy system with ergonomic grip and precision nozzle.",
  },
  {
    title: "CO2 tank adapter",
    copy: "Medical-grade adapter compatible with standard CO2 tanks (tank not included).",
  },
  {
    title: "Treatment nozzles (3)",
    copy: "Wide, medium, and precision nozzles for different treatment areas.",
  },
  {
    title: "6ft insulated hose",
    copy: "Flexible hose for comfortable positioning during treatments.",
  },
  {
    title: "Operator training",
    copy: "Comprehensive training covering setup, technique, safety, and use-case guidance.",
  },
  {
    title: "Carrying case",
    copy: "Hard-shell protective case for storage and transport.",
  },
  {
    title: "Support resources",
    copy: "Ongoing access to our team before and after delivery.",
  },
  {
    title: "2-year warranty",
    copy: "Full coverage on parts and labor.",
  },
];

const specs = [
  {
    label: "Dimensions",
    value: "14.5\" × 3.2\" × 6.8\" (handpiece)",
  },
  {
    label: "Weight",
    value: "2.4 lbs (handpiece only)",
  },
  {
    label: "Cooling medium",
    value: "Medical-grade compressed CO2",
  },
  {
    label: "Temperature range",
    value: "-78°C to -40°C (-108°F to -40°F)",
  },
  {
    label: "Treatment area",
    value: "1-6 inch diameter (nozzle dependent)",
  },
  {
    label: "Tank compatibility",
    value: "Standard 20lb or 50lb CO2 tanks",
  },
  {
    label: "Treatments per tank",
    value: "200-300 (20lb tank, typical usage)",
  },
  {
    label: "Power requirements",
    value: "None (pneumatic operation)",
  },
  {
    label: "Warranty",
    value: "2 years, parts and labor",
  },
  {
    label: "Lead time",
    value: "5-7 business days after training",
  },
];

type Tab = "included" | "specs";

export default function IncludedSpecsCard() {
  const [activeTab, setActiveTab] = useState<Tab>("included");

  useEffect(() => {
    const syncTabToHash = () => {
      if (window.location.hash === "#specs") {
        setActiveTab("specs");
      }

      if (window.location.hash === "#included") {
        setActiveTab("included");
      }
    };

    syncTabToHash();
    window.addEventListener("hashchange", syncTabToHash);

    return () => window.removeEventListener("hashchange", syncTabToHash);
  }, []);

  return (
    <div id="specs" className="scroll-mt-28">
      <div className="flex gap-8 border-b border-[var(--atmos-border)] text-xl font-medium sm:text-2xl">
        <button
          type="button"
          onClick={() => setActiveTab("included")}
          className={[
            "-mb-px border-b-2 pb-4 transition-colors",
            activeTab === "included"
              ? "border-[var(--atmos-ink)] text-[var(--atmos-ink)]"
              : "border-transparent text-[var(--atmos-muted)] hover:text-[var(--atmos-secondary)]",
          ].join(" ")}
          aria-pressed={activeTab === "included"}
        >
          What&apos;s Included
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("specs")}
          className={[
            "-mb-px border-b-2 pb-4 transition-colors",
            activeTab === "specs"
              ? "border-[var(--atmos-ink)] text-[var(--atmos-ink)]"
              : "border-transparent text-[var(--atmos-muted)] hover:text-[var(--atmos-secondary)]",
          ].join(" ")}
          aria-pressed={activeTab === "specs"}
        >
          Specifications
        </button>
      </div>

      <div className="mt-10 sm:mt-12">
        {activeTab === "included" ? <IncludedPanel /> : <SpecsPanel />}
      </div>
    </div>
  );
}

function IncludedPanel() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-start lg:gap-16">
      <div className="flex min-h-[320px] items-center justify-center rounded-2xl bg-[var(--atmos-canvas)] p-8 ring-1 ring-[var(--atmos-border)] sm:min-h-[400px] lg:min-h-[520px]">
        <Image
          src="/cryogun.png"
          alt="CryoGun device"
          width={630}
          height={1277}
          className="h-[260px] w-auto object-contain drop-shadow-[0_26px_45px_rgba(29,29,31,0.12)] sm:h-[340px] lg:h-[440px]"
        />
      </div>

      <ul className="grid gap-5 self-center sm:grid-cols-2 lg:grid-cols-1">
        {includedItems.map((item) => (
          <li key={item.title} className="flex gap-3">
            <span className="mt-[0.55rem] size-1.5 shrink-0 rounded-full bg-[var(--atmos-blue)]" />
            <span>
              <span className="block font-medium text-[var(--atmos-ink)]">
                {item.title}
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-[var(--atmos-secondary)]">
                {item.copy}
              </span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function SpecsPanel() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.45fr_0.55fr] lg:items-start lg:gap-16">
      <div className="flex min-h-[320px] items-center justify-center rounded-2xl bg-[var(--atmos-canvas)] p-8 ring-1 ring-[var(--atmos-border)] sm:min-h-[400px] lg:min-h-[520px]">
        <Image
          src="/cryogun.png"
          alt="CryoGun device"
          width={630}
          height={1277}
          className="h-[260px] w-auto object-contain drop-shadow-[0_26px_45px_rgba(29,29,31,0.12)] sm:h-[340px] lg:h-[440px]"
        />
      </div>

      <div>
        <p className="text-xl font-medium text-[var(--atmos-ink)] sm:text-2xl">
          Technical specifications
        </p>
        <p className="mt-2 text-sm leading-relaxed text-[var(--atmos-secondary)] sm:text-base">
          CryoGun is designed for professional use in clinics, training
          facilities, wellness centers, and equine environments.
        </p>

        <dl className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="flex items-start justify-between gap-4 border-b border-[var(--atmos-border)] pb-3"
            >
              <dt className="text-sm text-[var(--atmos-secondary)]">
                {spec.label}
              </dt>
              <dd className="text-right text-sm font-medium text-[var(--atmos-ink)]">
                {spec.value}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 rounded-xl bg-[var(--atmos-blue)]/8 p-4">
          <p className="text-sm font-medium text-[var(--atmos-ink)]">
            CO2 tank not included
          </p>
          <p className="mt-1 text-sm leading-relaxed text-[var(--atmos-secondary)]">
            Compatible with standard 20lb or 50lb medical-grade CO2 tanks. We
            provide sourcing guidance during training.
          </p>
        </div>
      </div>
    </div>
  );
}
