import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import NavBar from "@/components/layout/nav-bar";
import { BlogClient } from "./blog-client";

export const metadata: Metadata = {
  title: "Blog | Atmos Performance",
  description:
    "Insights, guides, and news about cryotherapy, recovery science, and building a successful practice with Atmos equipment.",
};

export default function BlogPage() {
  return (
    <>
      <NavBar alwaysVisible />
      <BlogClient />
      <Footer />
    </>
  );
}
