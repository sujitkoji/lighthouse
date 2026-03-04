import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lighthouse.sujitkoji.com"), 
  title: {
    default: "Lighthouse | Digital Sentinel by Sujit Koji",
    template: "%s | Sujit Koji",
  },
  description: "Experience Lighthouse: An immersive architectural WebGL storytelling journey. A high-fidelity 3D experience built with React Three Fiber and Next.js.",
  keywords: ["WebGL Portfolio", "Three.js Experience", "Creative Developer India", "Sujit Koji", "3D Web Design", "Awwwards Nominee"],
  authors: [{ name: "Sujit Koji", url: "https://sujitkoji.com" }],
  creator: "Sujit Koji",
  category: "technology",
  
  alternates: {
    canonical: "https://lighthouse.sujitkoji.com",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lighthouse.sujitkoji.com/",
    title: "Lighthouse | Digital Sentinel",
    description: "Immersive architectural WebGL journey by Sujit Koji.",
    siteName: "Lighthouse by Sujit Koji",
    images: [
      {
        url: "/og-img.jpg", 
        width: 1200,
        height: 630,
        alt: "Lighthouse WebGL Experience Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lighthouse | Digital Sentinel",
    description: "Immersive architectural WebGL journey by Sujit Koji.",
    creator: "@sujitkoji", 
    images: ["/og-img.jpg"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" }, 
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/web-app-manifest-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon-167x167.png", sizes: "167x167", type: "image/png" },
      { url: "/web-app-manifest-512x512.png", sizes: "552x552", type: "image/png" },

    ],
  },

  manifest: "/manifest.json",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5, 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "VisualArtsEvent", 
              "name": "Lighthouse Digital Experience",
              "description": "A high-fidelity WebGL storytelling journey.",
              "image": "https://lighthouse.sujitkoji.com/og-img.jpg",
              "organizer": {
                "@type": "Person",
                "name": "Sujit Koji",
                "url": "https://sujitkoji.com"
              }
            })
          }}
        />
      </head>
      <body className="antialiased bg-black text-white selection:bg-red-500 selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}