import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import RevealFooter from "./_components/RevealFooter";
import SmoothScroll from "./_components/Lenis";
import Nav from "./_components/nav";
import MobileNav from "./_components/mobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ff5a1f",
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.SITE_URL!),

  title: "Ahmed Adel | Full-Stack Developer & Designer",

  description:
    "Ahmed Adel — a versatile full-stack developer & designer who turns ideas into real products. I build modern web experiences, clean interfaces, fast applications, and creative digital identities. Skilled in React, Next.js, Node.js, UI/UX, animations, and performance-driven design.",

  keywords: [
    "Ahmed Adel",
    "Full Stack Developer",
    "Web Developer",
    "Next.js",
    "React Developer",
    "UI UX Designer",
    "Frontend Developer",
    "Backend Developer",
    "Portfolio",
  ],

  authors: [{ name: "Ahmed Adel" }],

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title: "Ahmed Adel | Developer & Designer Portfolio",
    description:
      "A creative developer & designer delivering modern, fast, and visually refined digital products.",
    url: "/",
    siteName: "Ahmed Adel Portfolio",
    images: [
      {
        url: "/og-image.avif",
        width: 1200,
        height: 630,
        alt: "Ahmed Adel Portfolio Preview",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ahmed Adel | Developer & Designer",
    description:
      "A versatile developer & designer creating modern digital experiences.",
    images: ["/og-image.avif"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-clip w-screen`}
      >
        <SmoothScroll />
        <SpeedInsights />
        <nav
          id="Nav"
          className="z-50 relative w-full  overflow-visible h-fit text-white mix-blend-difference"
        >
          <Nav />
          <MobileNav />
        </nav>
        {children}
        <RevealFooter />
      </body>
    </html>
  );
}
