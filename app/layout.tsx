import type React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { VisitTracker } from "@/components/analytics/visit-tracker"
import { DiscordInviteDialog } from "@/components/discord-invite-dialog"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
 // If you don't have a new website link yet, use this:
metadataBase: new URL("https://shiestyraiders.com"),
  title: {
    default: "SHiESTY - Raiders Trading Hub | Secure Item  Blueprint Exchange",
    template: "%s | SHiESTY - RAIDERS - Arc Raiders Trading",
  },
  description:
    "The #1 community marketplace for Arc Raiders item trading. Trade blueprints, mods, salvaged gear & resources safely with escrow protection. Join thousands of Raiders trading securely.",
  keywords: [
    "Arc Raiders",
    "Arc Raiders trading",
    "Arc Raiders marketplace",
    "Arc Raiders items",
    "Arc Raiders blueprints",
    "Arc Raiders mods",
    "Arc Raiders gear",
    "Arc Raiders salvage",
    "Arc Raiders trade",
    "Arc Raiders escrow",
    "Arc Raiders community",
    "Embark Studios",
    "Arc Raiders P2P",
    "Arc Raiders exchange",
    "SHiESTY - RAIDERS",
    "safe trading",
    "escrow protection",
    "game item trading",
    "Raiders trading hub",
  ],
  authors: [{ name: "SHiESTY RAiDERS" }],
  creator: "SHiESTY",
  publisher: "SHiESTY",
  category: "Gaming",
  classification: "Gaming Marketplace",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shiestyraiders.app",
    title: "SHiESTY🔻RAiDERS - Trading Hub",
    description: "Trade ARC Raiders items safely with SHiESTY protection. Blueprints, cash, and gear.",
    siteName: "SHiESTY RAiDERS",
    images: [
      {
        url: "https://drive.google.com/uc?export=view&id=1ddp3NiTGyIBn9DPSfJGqvj1GUWe3iwef",
        width: 1200,
        height: 630,
        alt: "SHiESTY RAiDERS Banner",
      },
    ],
  },
  alternates: {
    canonical: "https://shiestyraiders.app", // Changed this from shiesty.top
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  other: {
    "google-adsense-account": "ca-pub-4787371777410344",
    "google-site-verification": "your-verification-code",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0b" },
  ],
}
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://shiestyraiders.app/#website",
      url: "https://shiestyraiders.app",
      name: "SHiESTY RAiDERS",
      description: "SHiESTY RAiDERS Trading Hub - Secure ARC Raiders Item Exchange",
      publisher: { "@id": "https://shiestyraiders.app/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://shiestyraiders.app/dashboard/marketplace?search={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://shiestyraiders.app/#organization",
      name: "SHiESTY RAiDERS",
      url: "https://shiestyraiders.app",
      logo: {
        "@type": "ImageObject",
        // Using your Google Drive banner as the logo for now
        url: "https://drive.google.com/uc?export=view&id=1ddp3NiTGyIBn9DPSfJGqvj1GUWe3iwef",
        width: 1200,
        height: 630,
      },
      description: "Community-built trading hub for ARC Raiders players by SHiESTY",
      sameAs: [],
    },
    {
      "@type": "WebApplication",
      "@id": "https://shiestyraiders.app/#webapp",
      name: "SHiESTY RAiDERS Trading Hub",
      url: "https://shiestyraiders.app",
      description: "Secure marketplace for trading ARC Raiders in-game items",
      applicationCategory: "GameApplication",
      operatingSystem: "Web Browser",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      featureList: [
        "Escrow Protection",
        "Secure Item Trading",
        "Reputation System",
        "Dispute Resolution",
        "Verified Traders",
      ],
    },
    {
{
      "@type": "FAQPage",
      "@id": "https://shiestyraiders.app/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is SHiESTY RAiDERS?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "SHiESTY RAiDERS is a community-driven trading hub and inventory tracker for ARC Raiders."
          }
        }
        {
          "@type": "Question",
          name: "How does escrow protection work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Items are held securely in escrow until both parties confirm the trade is complete. Our escrow agents review evidence and resolve any disputes fairly.",
          },
        },
        {
          "@type": "Question",
          name: "Is SHiESTY RAiDERS affiliated with Embark Studios?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, SHiESTY - RAIDERS is an unofficial fan-made application created by the community for fellow Arc Raiders players. It is not affiliated with Embark Studios.",
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="google-adsense-account" content="ca-pub-4787371777410344" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Script
          id="google-adsense"
          async
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4787371777410344"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} forcedTheme="dark">
          {children}
          <DiscordInviteDialog />
          <Analytics />
          <VisitTracker />
        </ThemeProvider>
      </body>
    </html>
  )
}
