import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import NavBar from "@/components/layout/nav-bar";
import CryogunPageContent from "@/components/product-page/cryogun-page";
import { JsonLd } from "@/components/seo/json-ld";
import {
  getCryoGunProductSchema,
  getFAQPageSchema,
  getBreadcrumbSchema,
  combineSchemas,
} from "@/lib/structured-data";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://atmosperformance.com";

export const metadata: Metadata = {
  title: "CryoGun - Focused Cold Therapy Device",
  description:
    "CryoGun is a handheld localized cryotherapy device designed for targeted cold application in real treatment environments.",
};

// FAQ data for structured data
const cryogunFaqs = [
  {
    question: "What gas does CryoGun use?",
    answer:
      "CryoGun uses medical-grade compressed CO2 (carbon dioxide). Each standard tank provides approximately 200-300 treatments depending on application duration.",
  },
  {
    question: "How cold does it get?",
    answer:
      "The CO2 expands to approximately -78°C (-108°F) at the nozzle. Actual tissue temperature depends on distance, duration, and application technique covered in training.",
  },
  {
    question: "Do I need special facilities or ventilation?",
    answer:
      "No special facilities required. CryoGun is designed for standard treatment rooms, training facilities, and clinical environments. Basic ventilation (a window or standard HVAC) is sufficient.",
  },
  {
    question: "Is training included?",
    answer:
      "Yes. Comprehensive operator training is included with every CryoGun purchase. Training covers setup, technique, safety protocols, and use-case guidance before your device ships.",
  },
  {
    question: "What's the warranty?",
    answer:
      "CryoGun includes a 2-year warranty covering parts and labor. Extended warranty options are available.",
  },
  {
    question: "How long does shipping take?",
    answer:
      "After training completion, devices typically ship within 5-7 business days. Delivery time depends on your location.",
  },
  {
    question: "Can I finance the purchase?",
    answer:
      "Yes. We offer flexible financing options including payment plans and leasing. Contact us to discuss what works for your business.",
  },
  {
    question: "What if it's not right for my practice?",
    answer:
      "We offer a 30-day satisfaction guarantee. If CryoGun isn't the right fit for your practice, return it for a full refund.",
  },
];

export default function CryogunPage() {
  const structuredData = combineSchemas(
    getCryoGunProductSchema(),
    getFAQPageSchema(cryogunFaqs),
    getBreadcrumbSchema([
      { name: "Home", url: siteUrl },
      { name: "CryoGun", url: `${siteUrl}/cryogun` },
    ])
  );

  return (
    <>
      <JsonLd data={structuredData} />
      <NavBar />
      <CryogunPageContent />
      <Footer />
    </>
  );
}
