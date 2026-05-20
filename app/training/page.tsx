import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import NavBar from "@/components/layout/nav-bar";
import { TrainingClient } from "./training-client";

export const metadata: Metadata = {
  title: "Training | Atmos Performance",
  description:
    "Access Atmos Performance training materials and certification resources for cryotherapy equipment operation.",
};

export default function TrainingPage() {
  return (
    <>
      <NavBar alwaysVisible />
      <TrainingClient />
      <Footer />
    </>
  );
}
