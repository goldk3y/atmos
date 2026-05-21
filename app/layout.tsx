import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { JsonLd } from "@/components/seo/json-ld";
import {
  getOrganizationSchema,
  getWebSiteSchema,
  combineSchemas,
} from "@/lib/structured-data";
import { SupportChat } from "@/components/support-chat";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://atmos-red.vercel.app";
const siteTitle = "Atmos Performance";
const siteDescription =
  "Offer localized cryotherapy with confidence. Atmos provides professional cryotherapy equipment, training, and support for service environments.";

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
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteTitle} | Localized Cryotherapy Equipment`,
    description: siteDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Combine Organization and WebSite schemas for the root layout
  const structuredData = combineSchemas(
    getOrganizationSchema(),
    getWebSiteSchema()
  );

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd data={structuredData} />
      </head>
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SupportChat />
        </ThemeProvider>
      </body>
    </html>
  );
}
