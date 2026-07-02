/** Root layout – font loading, metadata, and top‑level HTML structure. */

import type { Metadata } from "next";
import { Cormorant_Garamond, Inter_Tight } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant"
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter-tight"
});

export const metadata: Metadata = {
  title: "mazarq | Modelado 3D sin concesiones",
  description:
    "Landing page de Miguel Angel Zulueta, arquitecto y artista 3D especializado en modelado, render y visualizacion interactiva.",
  icons: {
    icon: { url: "/favicon.svg", type: "image/svg+xml" },
    apple: "/brand/masarq-logo.jpg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${cormorant.variable} ${interTight.variable}`}>
      <body>{children}</body>
    </html>
  );
}
