import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Alan Nunes | Desenvolvedor Full Stack",
  description:
    "Portfólio de Alan Nunes, desenvolvedor Full Stack especializado em Next.js, React e aplicações modernas. Veja meus projetos e experiências.",

  keywords: [
    "Alan Nunes",
    "desenvolvedor full stack",
    "next.js",
    "react",
    "typescript",
    "portfólio desenvolvedor",
    "frontend",
    "backend",
    "web developer",
  ],

  authors: [{ name: "Alan Nunes" }],
  creator: "Alan Nunes",
  publisher: "Alan Nunes",
  applicationName: "Portfólio Alan Nunes",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Alan Nunes | Desenvolvedor Full Stack",
    description:
      "Confira meus projetos, experiências e habilidades como desenvolvedor Full Stack.",
    url: process.env.NEXT_PUBLIC_URL,
    siteName: "Alan Nunes Portfolio",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Portfólio Alan Nunes",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Alan Nunes | Desenvolvedor Full Stack",
    description:
      "Confira meus projetos e habilidades como desenvolvedor.",
    images: [`${process.env.NEXT_PUBLIC_URL}/og-image.png`],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
