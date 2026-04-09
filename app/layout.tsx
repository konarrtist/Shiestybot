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
  metadataBase: new URL("https://bunkerfy.top"),
  title: {
    default: "Bunkerfy - Arc Raiders Trading Hub | Secure Item Exchange & Escrow",
    template: "%s | Bunkerfy - Arc Raiders Trading",
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
    "bunkerfy",
    "safe trading",
    "escrow protection",
    "game item trading",
    "Raiders trading hub",
  ],
  authors: [{ name: "Bunkerfy Community" }],
  creator: "Bunkerfy",
  publisher: "Bunkerfy",
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
    url: "https://bunkerfy.top",
    siteName: "Bunkerfy - Arc Raiders Trading Hub",
    title: "Bunkerfy - Arc Raiders Trading Hub | Secure Item Exchange",
    description:
      "The #1 community marketplace for Arc Raiders item trading. Trade blueprints, mods, salvaged gear & resources safely with escrow protection.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bunkerfy - Arc Raiders Secure Trading Hub",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bunkerfy - Arc Raiders Trading Hub",
    description: "Trade Arc Raiders items safely with escrow protection. Blueprints, mods, gear & more.",
    images: ["/og-image.jpg"],
    creator: "@bunkerfy",
    site: "@bunkerfy",
  },
  alternates: {
    canonical: "https://bunkerfy.top",
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
      "@id": "https://bunkerfy.top/#website",
      url: "https://bunkerfy.top",
      name: "Bunkerfy",
      description: "Arc Raiders Trading Hub - Secure Item Exchange with Escrow Protection",
      publisher: { "@id": "https://bunkerfy.top/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: "https://bunkerfy.top/dashboard/marketplace?search={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://bunkerfy.top/#organization",
      name: "Bunkerfy",
      url: "https://bunkerfy.top",
      logo: {
        "@type": "ImageObject",
        url: "https://bunkerfy.top/icon-dark-32x32.png",
        width: 32,
        height: 32,
      },
      description: "Community-built trading hub for Arc Raiders players",
      sameAs: [],
    },
    {
      "@type": "WebApplication",
      "@id": "https://bunkerfy.top/#webapp",
      name: "Bunkerfy Trading Hub",
      url: "https://bunkerfy.top",
      description: "Secure marketplace for trading Arc Raiders in-game items with escrow protection",
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
      "@type": "FAQPage",
      "@id": "https://bunkerfy.top/#faq",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Bunkerfy?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Bunkerfy is a community-built trading hub for Arc Raiders players to safely exchange in-game items like blueprints, mods, and salvaged gear using escrow protection.",
          },
        },
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
          name: "Is Bunkerfy affiliated with Embark Studios?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No, Bunkerfy is an unofficial fan-made application created by the community for fellow Arc Raiders players. It is not affiliated with Embark Studios.",
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
