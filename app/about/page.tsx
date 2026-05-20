import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import NavBar from "@/components/layout/nav-bar";
import { AboutClient } from "./about-client";

export const metadata: Metadata = {
  title: "About Us | Atmos Performance",
  description:
    "Learn about Atmos Performance - our mission to make professional localized cryotherapy accessible to every practice, our story, and the team behind the equipment.",
};

export default function AboutPage() {
  return (
    <>
      <NavBar alwaysVisible />
      <AboutClient />
      <Footer />
    </>
  );
}
