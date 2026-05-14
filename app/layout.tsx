import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://atmosperformance.com";
const siteTitle = "Atmos Performance";
const siteDescription =
  "Offer localized cryotherapy with confidence. Atmos provides professional cryotherapy equipment, training, and support for service environments.";
const ogImage = "/ecmadao-T8gG3G-fWE0-unsplash.jpg";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteTitle} | Localized Cryotherapy Equipment`,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  applicationName: siteTitle,
  openGraph: {
    title: `${siteTitle} | Localized Cryotherapy Equipment`,
    description: siteDescription,
    url: "/",
    siteName: siteTitle,
    images: [
      {
        url: ogImage,
        width: 5472,
        height: 3080,
        alt: "Atmos localized cryotherapy service environment",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteTitle} | Localized Cryotherapy Equipment`,
    description: siteDescription,
    images: [ogImage],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
