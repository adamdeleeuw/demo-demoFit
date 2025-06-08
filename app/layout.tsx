import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "DemoFit - Transform Your Body & Mind | Boutique Fitness Studio",
  description:
    "Join our boutique fitness community where personalized training meets holistic wellness. Expert instructors, modern equipment, and a supportive community await you.",
  keywords: [
    "fitness studio",
    "personal training",
    "HIIT",
    "yoga",
    "strength training",
    "boutique fitness",
    "wellness",
    "demo",
  ],
  authors: [{ name: "DemoFit" }],
  creator: "DemoFit",
  publisher: "DemoFit",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://demofit-landing.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "DemoFit - Transform Your Body & Mind",
    description: "Join our boutique fitness community where personalized training meets holistic wellness.",
    url: "https://demofit-landing.vercel.app",
    siteName: "DemoFit",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DemoFit - Modern Fitness Studio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DemoFit - Transform Your Body & Mind",
    description: "Join our boutique fitness community where personalized training meets holistic wellness.",
    images: ["/og-image.jpg"],
    creator: "@demofit",
  },
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
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#f59e0b" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
