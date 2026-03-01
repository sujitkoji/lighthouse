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
    default: "Lighthouse | A Cinematic WebGL Experience",
    template: "%s | Sujit Koji",
  },
  description: "Explore Lighthouse, a high-fidelity 3D digital sentinel standing against the oceanic tides of data. Created by Sujit Koji.",
  keywords: ["WebGL", "Three.js", "Next.js", "Creative Developer", "Sujit Koji", "3D Portfolio", "Awwwards", "Digital Art"],
  authors: [{ name: "Sujit Koji", url: "https://sujitkoji.com" }],
  creator: "Sujit Koji",
  
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lighthouse.sujitkoji.com",
    title: "Lighthouse | Digital Sentinel",
    description: "An immersive architectural beacon standing against the digital tides.",
    siteName: "Lighthouse by Sujit Koji",
    images: [
      {
        url: "https://lighthouse.sujitkoji.com/og-img.png", 
        width: 1200,
        height: 630,
        alt: "Lighthouse WebGL Experience Preview",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Lighthouse | WebGL Experience",
    description: "Immersive 3D beacon experience created with Next.js & Three.js",
    creator: "@sujitkoji", 
    images: ["https://lighthouse.sujitkoji.com/og-img.png"],
  },

  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" }, 
    ],
    apple: [
        { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
  },

  manifest: "/manifest.json",
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, 
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased bg-black text-white selection:bg-red-500 selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  );
}