import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SHiESTY RAiDERS | ARC Raiders Stash Sync",
  description: "Automated blueprint tracking and stash syncing for the ARC Raiders community.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Structured Data (JSON-LD) for SEO and AI Search Citations
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://shiestyraiders.app/#website",
        "url": "https://shiestyraiders.app",
        "name": "SHiESTY RAiDERS",
        "description": "ARC Raiders Stash & Blueprint Tracker",
        "publisher": {
          "@type": "Organization",
          "name": "SHiESTY RAiDERS Team",
          "logo": {
            "@type": "ImageObject",
            "url": "https://shiestyraiders.app/logo.png"
          }
        }
      },
      {
        "@type": "FAQPage",
        "@id": "https://shiestyraiders.app/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I sync my stash?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Upload a screenshot to the #sync-stash channel in Discord, and SHiESTy will update your inventory automatically."
            }
          },
          {
            "@type": "Question",
            "name": "What is SHiESTY RAiDERS?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SHiESTY RAiDERS is an automated blueprint and stash tracking system for ARC Raiders."
            }
          }
        ]
      }
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-black text-white selection:bg-red-500/30">
          {children}
        </div>
      </body>
    </html>
  );
}
