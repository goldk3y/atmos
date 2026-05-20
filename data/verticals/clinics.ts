import type { VerticalPageData } from "./types";

export const clinicsData: VerticalPageData = {
  slug: "clinics",
  metadata: {
    title: "Cryotherapy for Clinics & Chiropractic | Atmos Performance",
    description:
      "Add localized cryotherapy to your clinic. FDA-registered equipment, 2-day staff training, and 4-hour support SLA. Add $4K to $12K monthly revenue.",
  },
  hero: {
    stat: "Add a $4K to $12K monthly revenue line",
    subhead:
      "Localized cryotherapy, training, and ongoing support. One vendor.",
    ctaText: "Book a Demo",
    heroImage: "/chiro.jpg",
    heroImageAlt: "Cryotherapy treatment in a chiropractic clinic",
  },
  socialProof: {
    statement:
      "Trusted by 38 chiropractic and PT clinics across San Diego County.",
  },
  problem: {
    statement:
      "Patients ask about cryotherapy. They book it somewhere else. That is a $4K to $12K monthly revenue line walking out your front door.",
  },
  threePillars: {
    equipment: {
      outcome: "FDA-registered units sized for treatment rooms under 200 sq ft",
      detail: "Plug-and-play install in 4 hours. No facility modifications.",
    },
    training: {
      outcome: "Your PTs and chiropractors trained in 2 days",
      detail: "Certification included. Quarterly refresher training available.",
    },
    support: {
      outcome: "Local San Diego support on 4-hour SLA",
      detail: "Loaner units shipped same-day if yours goes down.",
    },
  },
  useCases: [
    {
      title: "Post-injury treatment",
      description:
        "Reduce inflammation and pain in the critical first 6 hours post-injury. Research shows cryotherapy is most effective when applied early, reducing extravasation and metabolic rate.",
    },
    {
      title: "Musculoskeletal conditions",
      description:
        "Effective for lateral epicondylitis, tendinopathy, and arthritis. Local cryotherapy causes vasoconstriction and inhibits abnormal neovascularization of tendon tissue.",
    },
    {
      title: "Post-surgical rehab",
      description:
        "Accelerate TKA and orthopedic surgery recovery. A 2024 meta-analysis found cryotherapy effectively alleviates postoperative pain and improves range of motion.",
    },
    {
      title: "Chronic pain management",
      description:
        "Reduce systemic inflammation markers (hsCRP) with regular sessions. Studies show steady reductions in inflammation with 6-7 sessions per month.",
    },
  ],
  testimonial: {
    quote:
      "We added 47 new patients in the first 90 days. The training meant my staff could deliver protocols week one. The support team in San Diego picks up the phone.",
    name: "Dr. Sarah K.",
    title: "DC",
    facility: "Peak Performance Chiropractic, San Diego",
  },
  visualProof: {
    thumbnailUrl: "/chiro.jpg",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1",
    title: "Cryotherapy in the Clinic",
    description: "Setup, treatment flow, and patient experience.",
  },
  faq: [
    {
      question: "Is the equipment FDA-registered?",
      answer:
        "Yes. All Atmos equipment carries FDA Class II registration for localized cryotherapy applications.",
    },
    {
      question: "What does install actually look like?",
      answer:
        "4 hours, plug-and-play. No facility modifications required. Standard 120V outlet. We handle delivery and setup.",
    },
    {
      question: "How long until my staff is delivering protocols?",
      answer:
        "2 days for certification. Patients on day 3. Training covers equipment operation, treatment protocols, patient communication, and safety procedures.",
    },
    {
      question: "What if the unit goes down?",
      answer:
        "4-hour response SLA in San Diego County. Loaner unit shipped same-day while yours is serviced.",
    },
    {
      question: "What about financing?",
      answer:
        "36-month financing available. Monthly payment under $1,200 on most configurations. No prepayment penalties.",
    },
    {
      question: "Do I need additional licensing?",
      answer:
        "No additional license required for chiropractic or PT clinics in California to offer localized cryotherapy services.",
    },
    {
      question: "What does support cost annually?",
      answer:
        "Included in year one. Optional service plan year two and beyond covers preventive maintenance and priority support.",
    },
  ],
  trustSignals: {
    badges: ["FDA-registered", "HIPAA compliant", "California licensed"],
    microcopy: [
      "FDA-registered equipment",
      "36-month financing available",
      "4-hour support response SLA",
      "No-cost onsite training",
    ],
  },
  finalCta: {
    heading: "Add cryotherapy to your clinic",
    subheading:
      "Talk with Atmos about equipment, training, and what it takes to launch a new service line.",
    ctaText: "Book a Demo",
    microcopy: "15-minute call. Quote within 24 hours.",
  },
};
