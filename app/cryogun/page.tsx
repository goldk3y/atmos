import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import NavBar from "@/components/layout/nav-bar";
import CryogunPageContent from "@/components/product-page/cryogun-page";

export const metadata: Metadata = {
  title: "CryoGun - Focused Cold Therapy Device",
  description:
    "CryoGun is a handheld localized cryotherapy device designed for targeted cold application in real treatment environments.",
};

export default function CryogunPage() {
  return (
    <>
      <NavBar />
      <CryogunPageContent />
      <Footer />
    </>
  );
}
