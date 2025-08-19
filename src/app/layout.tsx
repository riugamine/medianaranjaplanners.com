import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Media Naranja Planners | Event Planning & Wedding Design",
  description: "Creemos que un evento no debería ser solo bonito: debe sentirse. Más de una década creando celebraciones inolvidables en la Isla de Margarita.",
  keywords: "event planning, wedding planner, bodas, eventos corporativos, celebraciones, Isla de Margarita, Venezuela",
  authors: [{ name: "Media Naranja Planners" }],
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
        {children}
      </body>
    </html>
  );
}
