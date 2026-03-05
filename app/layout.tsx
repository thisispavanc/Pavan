import type React from "react"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Pavan C — AI Product Engineer | LLMs, RAG & AI Automation",
  description:
    "AI Product Engineer specializing in LLMs, RAG systems, and automation. I build AI products that reduce manual work, cut costs, and drive measurable business impact.",
  keywords: [
    "AI Engineer",
    "LLMs",
    "RAG",
    "Generative AI",
    "Product Engineering",
    "AI Automation",
    "Python",
    "LangChain",
    "Pavan C",
    "Pavan Shetty",
    "thisispavanc",
  ],
  authors: [{ name: "Pavan C", url: "https://thisispavanc.me" }],
  creator: "Pavan C",
  metadataBase: new URL("https://thisispavanc.me"),
  alternates: {
    canonical: "https://thisispavanc.me",
    languages: {
      'en': "https://thisispavanc.me",
      'x-default': "https://pavanc.dev",
    },
  },
  openGraph: {
    title: "Pavan C — AI Product Engineer",
    description:
      "Building AI systems that deliver measurable impact. Expertise in LLMs, RAG, prompt engineering, and full product lifecycle.",
    type: "website",
    locale: "en_US",
    url: "https://thisispavanc.me",
    siteName: "Pavan C - AI Engineer",
    images: [
      {
        url: "https://thisispavanc.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Pavan C - AI Product Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pavan C — AI Product Engineer",
    description: "Building AI systems that deliver measurable impact. LLMs, RAG, Automation.",
    creator: "@pavanc",
    images: ["https://thisispavanc.me/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  category: "Technology",
  referrer: "strict-origin-when-cross-origin",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://thisispavanc.me" />
        <link rel="alternate" href="https://pavanc.dev" hrefLang="en" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#667eea" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Pavan C" />
        <meta name="format-detection" content="telephone=no" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Pavan C",
            alternateName: ["Pavan Shetty", "thisispavanc"],
            jobTitle: "AI Product Engineer",
            description:
              "AI Product Engineer specializing in Large Language Models, RAG, and AI Automation",
            url: "https://thisispavanc.me",
            sameAs: [
              "https://linkedin.com/in/thisispavanc1",
              "https://github.com/thisispavanc",
              "https://twitter.com/thisispavanc1",
            ],
            knownFor:
              "Building AI products that reduce manual work, cut costs, and drive measurable business impact",
            skills: [
              "Large Language Models",
              "Retrieval Augmented Generation",
              "Prompt Engineering",
              "Generative AI",
              "Product Engineering",
              "Python",
              "LangChain",
            ],
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfilePage",
            dateCreated: "2025-01-25T00:00:00+00:00",
            dateModified: new Date().toISOString(),
            mainEntity: {
              "@type": "Person",
              name: "Pavan C",
              jobTitle: "AI Product Engineer",
              url: "https://thisispavanc.me",
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Pavan C - AI Product Engineer",
            url: "https://thisispavanc.me",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://thisispavanc.me/#work?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: "https://thisispavanc.me",
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Projects",
                item: "https://thisispavanc.me/#projects",
              },
              {
                "@type": "ListItem",
                position: 3,
                name: "Experience",
                item: "https://thisispavanc.me/#experience",
              },
              {
                "@type": "ListItem",
                position: 4,
                name: "Skills",
                item: "https://thisispavanc.me/#skills",
              },
            ],
          })}
        </script>
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
