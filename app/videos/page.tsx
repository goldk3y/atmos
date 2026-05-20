import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import NavBar from "@/components/layout/nav-bar";
import { VideosClient } from "./videos-client";

export const metadata: Metadata = {
  title: "Videos | Atmos Performance",
  description:
    "Watch training videos, equipment demonstrations, and success stories from Atmos Performance practitioners.",
};

export default function VideosPage() {
  return (
    <>
      <NavBar alwaysVisible />
      <VideosClient />
      <Footer />
    </>
  );
}
