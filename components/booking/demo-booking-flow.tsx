"use client";

import { m } from "motion/react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  role: string;
  useCases: string[];
  timeline: string;
  notes: string;
};

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  role: "",
  useCases: [],
  timeline: "",
  notes: "",
};

const useCaseOptions = [
  {
    value: "equine",
    label: "Equine",
    description: "Barns, trainers, mobile care, and event recovery.",
  },
  {
    value: "clinics",
    label: "Clinics & Chiropractic",
    description: "Treatment rooms, patient workflows, and provider teams.",
  },
  {
    value: "sports-recovery",
    label: "Sports Recovery",
    description: "Athletes, trainers, teams, and recovery facilities.",
  },
  {
    value: "wellness-medspa",
    label: "Wellness & Medspa",
    description: "Premium service menus and guest-facing recovery.",
  },
  {
    value: "other",
    label: "Other",
    description: "A different professional service environment.",
  },
];

const timelineOptions = [
  "As soon as possible",
  "1-3 months",
  "3-6 months",
  "Just researching",
];

export function DemoBookingFlow({ onEventScheduled }: { onEventScheduled?: (scheduled: boolean) => void }) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [eventScheduled, setEventScheduled] = useState(false);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const toggleUseCase = (value: string) => {
    setFormData((prev) => {
      const nextUseCases = prev.useCases.includes(value)
        ? prev.useCases.filter((item) => item !== value)
        : [...prev.useCases, value];
      return { ...prev, useCases: nextUseCases };
    });
    setErrors((prev) => {
      const next = { ...prev };
      delete next.useCases;
      return next;
    });
  };

  const validateStep1 = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.company.trim()) newErrors.company = "Company is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (formData.useCases.length === 0) newErrors.useCases = "Select at least one use case";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep4 = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.timeline) newErrors.timeline = "Please select a timeline";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (step === 1 && validateStep1()) {
      setStep(2);
    } else if (step === 2 && validateStep2()) {
      setStep(3);
    } else if (step === 3 && validateStep3()) {
      setStep(4);
    } else if (step === 4 && validateStep4()) {
      setStep(5);
    }
  };

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };

  useEffect(() => {
    if (step === 5) {
      const script = document.createElement("script");
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.body.appendChild(script);

      const handleEventScheduled = (e: MessageEvent) => {
        if (e.data.event === "calendly.event_scheduled") {
          setEventScheduled(true);
          onEventScheduled?.(true);
        }
      };

      window.addEventListener("message", handleEventScheduled);

      return () => {
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
        window.removeEventListener("message", handleEventScheduled);
      };
    }
  }, [step, onEventScheduled]);

  return (
    <LazyMotionProvider>
      <div className="mx-auto max-w-lg">
        {step < 5 && (
          <div className="mb-8 flex gap-2 px-4">
            {[1, 2, 3, 4, 5].map((stepNumber) => (
              <div
                key={stepNumber}
                className={`flex-1 rounded-full py-1 text-center text-xs font-medium ${
                  step >= stepNumber
                    ? "bg-[var(--atmos-ink)] text-white"
                    : "bg-[var(--atmos-border)] text-[var(--atmos-secondary)]"
                }`}
              />
            ))}
          </div>
        )}

        {step === 5 ? (
          <m.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          >
            <div
              id="calendly-embed"
              className="calendly-inline-widget"
              data-url={`https://calendly.com/stan-generative/atmos-performance-demo?name=${encodeURIComponent(`${formData.firstName} ${formData.lastName}`)}&email=${encodeURIComponent(formData.email)}&a1=${encodeURIComponent(`Phone: ${formData.phone}\n\nOrganization: ${formData.company}\n\nRole: ${formData.role}\n\nUse Cases: ${formData.useCases.map((uc) => useCaseOptions.find((o) => o.value === uc)?.label).join(", ")}\n\nTimeline: ${formData.timeline}\n\nNotes: ${formData.notes}`)}`}
              data-resize="true"
              style={{ minWidth: '320px' }}
            />

            <button
              onClick={() => {
                if (eventScheduled) {
                  router.push("/");
                } else {
                  handleBack();
                }
              }}
              className={`mt-6 w-full rounded-full px-6 py-3 text-sm font-medium transition-colors ${
                eventScheduled
                  ? "bg-[var(--atmos-blue)] text-white hover:bg-[var(--atmos-blue)]/90"
                  : "border border-[var(--atmos-border)] text-[var(--atmos-ink)] hover:border-[var(--atmos-blue)]"
              }`}
            >
              {eventScheduled ? "Back to site" : "Back"}
            </button>
          </m.div>
        ) : (
          <div className="overflow-hidden rounded-[1rem] border border-[var(--atmos-border)] bg-[var(--atmos-canvas)] p-6 sm:p-8">
            {step === 1 && (
              <m.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              >
                <h2 className="text-2xl font-medium text-[var(--atmos-ink)]">
                  Contact information
                </h2>
                <p className="mt-2 text-sm text-[var(--atmos-secondary)]">
                  Tell us how to reach you for your demo.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-[var(--atmos-ink)]">
                        First name
                      </label>
                      <input
                        id="firstName"
                        type="text"
                        value={formData.firstName}
                        onChange={(e) => updateField("firstName", e.target.value)}
                        className="mt-1.5 h-11 w-full rounded-lg border border-[var(--atmos-border)] bg-white px-4 text-sm text-[var(--atmos-ink)] outline-none transition-[border-color,box-shadow] placeholder:text-[var(--atmos-muted)] focus:border-[var(--atmos-blue)] focus:shadow-[0_0_0_3px_rgba(0,113,227,0.1)]"
                        placeholder="First"
                      />
                      {errors.firstName && <p className="mt-1.5 text-sm text-red-600">{errors.firstName}</p>}
                    </div>

                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-[var(--atmos-ink)]">
                        Last name
                      </label>
                      <input
                        id="lastName"
                        type="text"
                        value={formData.lastName}
                        onChange={(e) => updateField("lastName", e.target.value)}
                        className="mt-1.5 h-11 w-full rounded-lg border border-[var(--atmos-border)] bg-white px-4 text-sm text-[var(--atmos-ink)] outline-none transition-[border-color,box-shadow] placeholder:text-[var(--atmos-muted)] focus:border-[var(--atmos-blue)] focus:shadow-[0_0_0_3px_rgba(0,113,227,0.1)]"
                        placeholder="Last"
                      />
                      {errors.lastName && <p className="mt-1.5 text-sm text-red-600">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--atmos-ink)]">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateField("email", e.target.value)}
                      className="mt-1.5 h-11 w-full rounded-lg border border-[var(--atmos-border)] bg-white px-4 text-sm text-[var(--atmos-ink)] outline-none transition-[border-color,box-shadow] placeholder:text-[var(--atmos-muted)] focus:border-[var(--atmos-blue)] focus:shadow-[0_0_0_3px_rgba(0,113,227,0.1)]"
                      placeholder="you@company.com"
                    />
                    {errors.email && <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-[var(--atmos-ink)]">
                      Phone
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField("phone", e.target.value)}
                      className="mt-1.5 h-11 w-full rounded-lg border border-[var(--atmos-border)] bg-white px-4 text-sm text-[var(--atmos-ink)] outline-none transition-[border-color,box-shadow] placeholder:text-[var(--atmos-muted)] focus:border-[var(--atmos-blue)] focus:shadow-[0_0_0_3px_rgba(0,113,227,0.1)]"
                      placeholder="+1 (555) 000-0000"
                    />
                    {errors.phone && <p className="mt-1.5 text-sm text-red-600">{errors.phone}</p>}
                  </div>
                </div>

                <button
                  onClick={handleContinue}
                  className="mt-8 w-full rounded-full bg-[var(--atmos-ink)] px-6 py-3 text-sm font-medium text-white transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[var(--atmos-blue)] active:scale-[0.98]"
                >
                  Continue
                </button>
              </m.div>
            )}

            {step === 2 && (
              <m.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              >
                <h2 className="text-2xl font-medium text-[var(--atmos-ink)]">
                  Business information
                </h2>
                <p className="mt-2 text-sm text-[var(--atmos-secondary)]">
                  Help us tailor the demo to your setting.
                </p>

                <div className="mt-6 space-y-4">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-[var(--atmos-ink)]">
                      Organization
                    </label>
                    <input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => updateField("company", e.target.value)}
                      className="mt-1.5 h-11 w-full rounded-lg border border-[var(--atmos-border)] bg-white px-4 text-sm text-[var(--atmos-ink)] outline-none transition-[border-color,box-shadow] placeholder:text-[var(--atmos-muted)] focus:border-[var(--atmos-blue)] focus:shadow-[0_0_0_3px_rgba(0,113,227,0.1)]"
                      placeholder="Your organization"
                    />
                    {errors.company && <p className="mt-1.5 text-sm text-red-600">{errors.company}</p>}
                  </div>

                  <div>
                    <label htmlFor="role" className="block text-sm font-medium text-[var(--atmos-ink)]">
                      Role
                    </label>
                    <input
                      id="role"
                      type="text"
                      value={formData.role}
                      onChange={(e) => updateField("role", e.target.value)}
                      className="mt-1.5 h-11 w-full rounded-lg border border-[var(--atmos-border)] bg-white px-4 text-sm text-[var(--atmos-ink)] outline-none transition-[border-color,box-shadow] placeholder:text-[var(--atmos-muted)] focus:border-[var(--atmos-blue)] focus:shadow-[0_0_0_3px_rgba(0,113,227,0.1)]"
                      placeholder="Owner, director, trainer..."
                    />
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <button
                    onClick={handleBack}
                    className="flex-1 rounded-full border border-[var(--atmos-border)] px-6 py-3 text-sm font-medium text-[var(--atmos-ink)] transition-colors hover:border-[var(--atmos-blue)]"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleContinue}
                    className="flex-1 rounded-full bg-[var(--atmos-ink)] px-6 py-3 text-sm font-medium text-white transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[var(--atmos-blue)] active:scale-[0.98]"
                  >
                    Continue
                  </button>
                </div>
              </m.div>
            )}

            {step === 3 && (
              <m.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              >
                <h2 className="text-2xl font-medium text-[var(--atmos-ink)]">
                  Use cases
                </h2>
                <p className="mt-2 text-sm text-[var(--atmos-secondary)]">
                  Select every environment you want to discuss.
                </p>

                <div className="mt-6 space-y-2">
                  {useCaseOptions.map((option) => {
                    const isSelected = formData.useCases.includes(option.value);
                    return (
                      <button
                        key={option.value}
                        type="button"
                        onClick={() => toggleUseCase(option.value)}
                        className={`w-full rounded-lg border p-4 text-left transition-all ${
                          isSelected
                            ? "border-[var(--atmos-blue)] bg-[#f3f8ff]"
                            : "border-[var(--atmos-border)] bg-white hover:border-[var(--atmos-blue)]"
                        }`}
                      >
                        <span className="block text-sm font-medium text-[var(--atmos-ink)]">
                          {option.label}
                        </span>
                        <span className="mt-1 block text-sm text-[var(--atmos-secondary)]">
                          {option.description}
                        </span>
                      </button>
                    );
                  })}
                </div>
                {errors.useCases && <p className="mt-1.5 text-sm text-red-600">{errors.useCases}</p>}

                <div className="mt-8 flex gap-3">
                  <button
                    onClick={handleBack}
                    className="flex-1 rounded-full border border-[var(--atmos-border)] px-6 py-3 text-sm font-medium text-[var(--atmos-ink)] transition-colors hover:border-[var(--atmos-blue)]"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleContinue}
                    className="flex-1 rounded-full bg-[var(--atmos-ink)] px-6 py-3 text-sm font-medium text-white transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[var(--atmos-blue)] active:scale-[0.98]"
                  >
                    Continue
                  </button>
                </div>
              </m.div>
            )}

            {step === 4 && (
              <m.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              >
                <h2 className="text-2xl font-medium text-[var(--atmos-ink)]">
                  Timeline
                </h2>
                <p className="mt-2 text-sm text-[var(--atmos-secondary)]">
                  When are you looking to integrate Atmos into your business?
                </p>

                <div className="mt-6 space-y-3">
                  {timelineOptions.map((timeline) => {
                    const isSelected = formData.timeline === timeline;
                    return (
                      <button
                        key={timeline}
                        type="button"
                        onClick={() => updateField("timeline", timeline)}
                        className={`w-full rounded-lg border px-4 py-3 text-left text-sm font-medium transition-all ${
                          isSelected
                            ? "border-[var(--atmos-blue)] bg-[#f3f8ff] text-[var(--atmos-blue)]"
                            : "border-[var(--atmos-border)] bg-white text-[var(--atmos-ink)] hover:border-[var(--atmos-blue)]"
                        }`}
                      >
                        {timeline}
                      </button>
                    );
                  })}
                  {errors.timeline && <p className="mt-1.5 text-sm text-red-600">{errors.timeline}</p>}
                </div>

                <div className="mt-6">
                  <label htmlFor="notes" className="block text-sm font-medium text-[var(--atmos-ink)]">
                    Anything we should prepare for?
                  </label>
                  <textarea
                    id="notes"
                    value={formData.notes}
                    onChange={(e) => updateField("notes", e.target.value)}
                    placeholder="Questions, goals, current setup, or team size."
                    rows={4}
                    className="mt-1.5 w-full resize-none rounded-lg border border-[var(--atmos-border)] bg-white px-4 py-3 text-sm text-[var(--atmos-ink)] outline-none transition-[border-color,box-shadow] placeholder:text-[var(--atmos-muted)] focus:border-[var(--atmos-blue)] focus:shadow-[0_0_0_3px_rgba(0,113,227,0.1)]"
                  />
                </div>

                <div className="mt-8 flex gap-3">
                  <button
                    onClick={handleBack}
                    className="flex-1 rounded-full border border-[var(--atmos-border)] px-6 py-3 text-sm font-medium text-[var(--atmos-ink)] transition-colors hover:border-[var(--atmos-blue)]"
                  >
                    Back
                  </button>
                  <button
                    onClick={handleContinue}
                    className="flex-1 rounded-full bg-[var(--atmos-ink)] px-6 py-3 text-sm font-medium text-white transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[var(--atmos-blue)] active:scale-[0.98]"
                  >
                    Continue
                  </button>
                </div>
              </m.div>
            )}
          </div>
        )}
      </div>
    </LazyMotionProvider>
  );
}
