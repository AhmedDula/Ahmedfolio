import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

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

const baseUrl = process.env.SITE_URL;
if (!baseUrl) {
  throw new Error("SITE_URL is not defined");
}
export const metadata: Metadata = {
  verification: {
    google: "fDo1kE5zborpSNJP1pzAnEbQWCF6jjH6_mRAxSuQais",
  },

  metadataBase: new URL(baseUrl),

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
    "Ahmed Adel Portfolio",
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

    siteName: "Ahmed Adel",

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

const jsonLd = {
  "@context": "https://schema.org",

  "@graph": [
    {
      "@type": "Person",

      "@id": `${baseUrl}/#person`,

      name: "Ahmed Adel",

      url: baseUrl,

      jobTitle: "Full-Stack Developer & Designer",

      description:
        "Ahmed Adel is a Full-Stack Developer & Designer specializing in modern web experiences, React, Next.js, Node.js, UI/UX, animations, and performance.",
    },

    {
      "@type": "WebSite",

      "@id": `${baseUrl}/#website`,

      url: baseUrl,

      name: "Ahmed Adel",

      alternateName: "Ahmed Adel Portfolio",

      description:
        "Portfolio of Ahmed Adel, a Full-Stack Developer & Designer.",

      publisher: {
        "@id": `${baseUrl}/#person`,
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <SpeedInsights />
        {children}
      </body>
    </html>
  );
}
