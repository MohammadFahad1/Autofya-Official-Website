import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import AnalyticsTracker from "@/components/AnalyticsTracker";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Autofya | Software • AI • Automation",
  description: "Scale your tech and AI engineering team with top-tier global talents.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Autofya",
  "alternateName": "Autofya Software, AI & Automation",
  "url": "https://autofya.com",
  "logo": "https://autofya.com/favicon.png",
  "image": "https://autofya.com/favicon.png",
  "description":
    "A global software, AI, and automation engineering firm specializing in resource augmentation, custom software development, and AI-driven automation workflows.",
  "founder": {
    "@type": "Person",
    "name": "Engr. Kamrul Hasan",
    "url": "https://autofya.com/about"
  },
  "ceo": {
    "@type": "Person",
    "name": "Engr. Kamrul Hasan",
    "url": "https://autofya.com/about"
  },
  "co-founder": {
    "@type": "Person",
    "name": "Md. Fahad Monshi",
    "url": "https://www.fahadbd.com"
  },
  "cto": {
    "@type": "Person",
    "name": "Md. Fahad Monshi",
    "url": "https://www.fahadbd.com"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dhaka",
    "addressCountry": "BD",
  },
  "sameAs": [
    "https://www.facebook.com/autofya/",
    "https://www.linkedin.com/company/autofya/"
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${manrope.variable} h-full antialiased font-sans`}
    >
      <head>
        <link rel="icon" href="/favicon.png" type="image/png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-[#0B1340] bg-white">
        <AnalyticsTracker />
        {children}
      </body>
    </html>
  );
}


