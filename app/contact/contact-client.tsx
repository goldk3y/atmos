"use client";

import { useState } from "react";
import { m } from "motion/react";
import { LazyMotionProvider } from "@/components/ui/lazy-motion";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
};

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  subject: "",
  message: "",
};

const subjectOptions = [
  "General Inquiry",
  "Product Information",
  "Support Request",
  "Partnership Opportunity",
  "Other",
];

export function ContactClient() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => {
      const next = { ...prev };
      delete next[field];
      return next;
    });
  };

  const validateForm = () => {
    const newErrors: Partial<Record<keyof FormData, string>> = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }
    if (!formData.subject) newErrors.subject = "Please select a subject";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate form submission - replace with actual submission logic
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <main className="flex-1 bg-[var(--atmos-page)]">
      <section className="px-2 pb-16 pt-20 sm:pb-20 sm:pt-24">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8 lg:px-12">
          <div>
            <LazyMotionProvider>
              <div className="mx-auto max-w-2xl">
                <div className="mb-8 text-center">
                  <h1 className="text-3xl font-medium text-[var(--atmos-ink)] sm:text-4xl">
                    Get in Touch
                  </h1>
                  <p className="mt-3 text-[var(--atmos-secondary)]">
                    Have a question or want to learn more? We&apos;d love to hear from you.
                  </p>
                </div>

                <div className="flex flex-col gap-8">
                  {/* Contact Form */}
                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
                  >
                    {isSubmitted ? (
                      <div className="overflow-hidden rounded-[1rem] border border-[var(--atmos-border)] bg-[var(--atmos-canvas)] p-6 sm:p-8">
                        <div className="flex flex-col items-center py-8 text-center">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                            <svg
                              className="h-8 w-8 text-green-600"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <h2 className="mt-6 text-2xl font-medium text-[var(--atmos-ink)]">
                            Message Sent
                          </h2>
                          <p className="mt-2 text-[var(--atmos-secondary)]">
                            Thank you for reaching out. We&apos;ll get back to you shortly.
                          </p>
                          <button
                            onClick={() => {
                              setIsSubmitted(false);
                              setFormData(initialFormData);
                            }}
                            className="mt-8 rounded-full border border-[var(--atmos-border)] px-6 py-3 text-sm font-medium text-[var(--atmos-ink)] transition-colors hover:border-[var(--atmos-blue)]"
                          >
                            Send another message
                          </button>
                        </div>
                      </div>
                    ) : (
                      <form
                        onSubmit={handleSubmit}
                        className="overflow-hidden rounded-[1rem] border border-[var(--atmos-border)] bg-[var(--atmos-canvas)] p-6 sm:p-8"
                      >
                        <h2 className="text-xl font-medium text-[var(--atmos-ink)]">
                          Send us a message
                        </h2>
                        <p className="mt-2 text-sm text-[var(--atmos-secondary)]">
                          Fill out the form and we&apos;ll respond within 24 hours.
                        </p>

                        <div className="mt-6 space-y-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label
                                htmlFor="firstName"
                                className="block text-sm font-medium text-[var(--atmos-ink)]"
                              >
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
                              {errors.firstName && (
                                <p className="mt-1.5 text-sm text-red-600">{errors.firstName}</p>
                              )}
                            </div>

                            <div>
                              <label
                                htmlFor="lastName"
                                className="block text-sm font-medium text-[var(--atmos-ink)]"
                              >
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
                              {errors.lastName && (
                                <p className="mt-1.5 text-sm text-red-600">{errors.lastName}</p>
                              )}
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="email"
                              className="block text-sm font-medium text-[var(--atmos-ink)]"
                            >
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
                            {errors.email && (
                              <p className="mt-1.5 text-sm text-red-600">{errors.email}</p>
                            )}
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label
                                htmlFor="phone"
                                className="block text-sm font-medium text-[var(--atmos-ink)]"
                              >
                                Phone{" "}
                                <span className="font-normal text-[var(--atmos-muted)]">
                                  (optional)
                                </span>
                              </label>
                              <input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => updateField("phone", e.target.value)}
                                className="mt-1.5 h-11 w-full rounded-lg border border-[var(--atmos-border)] bg-white px-4 text-sm text-[var(--atmos-ink)] outline-none transition-[border-color,box-shadow] placeholder:text-[var(--atmos-muted)] focus:border-[var(--atmos-blue)] focus:shadow-[0_0_0_3px_rgba(0,113,227,0.1)]"
                                placeholder="+1 (555) 000-0000"
                              />
                            </div>

                            <div>
                              <label
                                htmlFor="company"
                                className="block text-sm font-medium text-[var(--atmos-ink)]"
                              >
                                Company{" "}
                                <span className="font-normal text-[var(--atmos-muted)]">
                                  (optional)
                                </span>
                              </label>
                              <input
                                id="company"
                                type="text"
                                value={formData.company}
                                onChange={(e) => updateField("company", e.target.value)}
                                className="mt-1.5 h-11 w-full rounded-lg border border-[var(--atmos-border)] bg-white px-4 text-sm text-[var(--atmos-ink)] outline-none transition-[border-color,box-shadow] placeholder:text-[var(--atmos-muted)] focus:border-[var(--atmos-blue)] focus:shadow-[0_0_0_3px_rgba(0,113,227,0.1)]"
                                placeholder="Your organization"
                              />
                            </div>
                          </div>

                          <div>
                            <label
                              htmlFor="subject"
                              className="block text-sm font-medium text-[var(--atmos-ink)]"
                            >
                              Subject
                            </label>
                            <select
                              id="subject"
                              value={formData.subject}
                              onChange={(e) => updateField("subject", e.target.value)}
                              className="mt-1.5 h-11 w-full appearance-none rounded-lg border border-[var(--atmos-border)] bg-white px-4 pr-10 text-sm text-[var(--atmos-ink)] outline-none transition-[border-color,box-shadow] focus:border-[var(--atmos-blue)] focus:shadow-[0_0_0_3px_rgba(0,113,227,0.1)]"
                              style={{
                                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                                backgroundPosition: "right 0.75rem center",
                                backgroundRepeat: "no-repeat",
                                backgroundSize: "1.25rem",
                              }}
                            >
                              <option value="">Select a subject</option>
                              {subjectOptions.map((option) => (
                                <option key={option} value={option}>
                                  {option}
                                </option>
                              ))}
                            </select>
                            {errors.subject && (
                              <p className="mt-1.5 text-sm text-red-600">{errors.subject}</p>
                            )}
                          </div>

                          <div>
                            <label
                              htmlFor="message"
                              className="block text-sm font-medium text-[var(--atmos-ink)]"
                            >
                              Message
                            </label>
                            <textarea
                              id="message"
                              value={formData.message}
                              onChange={(e) => updateField("message", e.target.value)}
                              placeholder="How can we help you?"
                              rows={5}
                              className="mt-1.5 w-full resize-none rounded-lg border border-[var(--atmos-border)] bg-white px-4 py-3 text-sm text-[var(--atmos-ink)] outline-none transition-[border-color,box-shadow] placeholder:text-[var(--atmos-muted)] focus:border-[var(--atmos-blue)] focus:shadow-[0_0_0_3px_rgba(0,113,227,0.1)]"
                            />
                            {errors.message && (
                              <p className="mt-1.5 text-sm text-red-600">{errors.message}</p>
                            )}
                          </div>
                        </div>

                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="mt-8 w-full rounded-full bg-[var(--atmos-ink)] px-6 py-3 text-sm font-medium text-white transition-[background-color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-[var(--atmos-blue)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                      </form>
                    )}
                  </m.div>

                  {/* Contact Information */}
                  <m.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1, ease: [0.23, 1, 0.32, 1] }}
                  >
                    <div className="overflow-hidden rounded-[1rem] border border-[var(--atmos-border)] bg-[var(--atmos-canvas)] p-6 sm:p-8">
                      <h2 className="text-xl font-medium text-[var(--atmos-ink)]">
                        Contact Information
                      </h2>
                      <p className="mt-2 text-sm text-[var(--atmos-secondary)]">
                        Feel free to reach out directly.
                      </p>

                      <div className="mt-6 grid gap-6 sm:grid-cols-3">
                        {/* Email */}
                        <div>
                          <h3 className="flex items-center gap-2 text-sm font-medium text-[var(--atmos-ink)]">
                            <svg
                              className="h-4 w-4 text-[var(--atmos-secondary)]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                              />
                            </svg>
                            Email
                          </h3>
                          <a
                            href="mailto:hello@atmoscryo.com"
                            className="mt-1 block text-sm text-[var(--atmos-secondary)] transition-colors hover:text-[var(--atmos-ink)]"
                          >
                            hello@atmoscryo.com
                          </a>
                        </div>

                        {/* Phone */}
                        <div>
                          <h3 className="flex items-center gap-2 text-sm font-medium text-[var(--atmos-ink)]">
                            <svg
                              className="h-4 w-4 text-[var(--atmos-secondary)]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                              />
                            </svg>
                            Phone
                          </h3>
                          <a
                            href="tel:+15551234567"
                            className="mt-1 block text-sm text-[var(--atmos-secondary)] transition-colors hover:text-[var(--atmos-ink)]"
                          >
                            +1 (555) 123-4567
                          </a>
                        </div>

                        {/* Address */}
                        <div>
                          <h3 className="flex items-center gap-2 text-sm font-medium text-[var(--atmos-ink)]">
                            <svg
                              className="h-4 w-4 text-[var(--atmos-secondary)]"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={1.5}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                              />
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                              />
                            </svg>
                            Address
                          </h3>
                          <p className="mt-1 text-sm text-[var(--atmos-secondary)]">
                            123 Innovation Drive
                            <br />
                            Suite 400
                            <br />
                            Austin, TX 78701
                          </p>
                        </div>
                      </div>
                    </div>
                  </m.div>
                </div>
              </div>
            </LazyMotionProvider>
          </div>
        </div>
      </section>
    </main>
  );
}
