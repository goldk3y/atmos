import type { Metadata } from "next";
import { BookDemoClient } from "./book-demo-client";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Schedule an Atmos demo for localized cryotherapy equipment, training, and operator support.",
};

export default function BookDemoPage() {
  return <BookDemoClient />;
}
