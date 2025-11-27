import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ahmed Adel | Full-Stack Developer & Designer",
  description:
    "Ahmed Adel — a versatile full-stack developer & designer who turns ideas into real products. I build modern web experiences, clean interfaces, fast applications, and creative digital identities. Skilled in React, Next.js, Node.js, MongoDB, UI/UX, animations, and performance-driven design.",
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
  openGraph: {
    title: "Ahmed Adel | Developer & Designer Portfolio",
    description:
      "A creative developer & designer delivering modern, fast, and visually refined digital products.",
    url: "https://ahmedfoliodula.vercel.app/",
    siteName: "Ahmed Adel Portfolio",
    images: [
      {
        url: "https://ahmedfoliodula.vercel.app/og-image.png",
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
    images: ["https://ahmedfoliodula.vercel.app/og-image.png"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SpeedInsights/>
        {children}
      </body>
    </html>
  );
}
