import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import NavBar from "@/components/layout/nav-bar";
import { ContactClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Atmos for questions about localized cryotherapy equipment, support, or business inquiries.",
};

export default function ContactPage() {
  return (
    <>
      <NavBar alwaysVisible />
      <ContactClient />
      <Footer />
    </>
  );
}
