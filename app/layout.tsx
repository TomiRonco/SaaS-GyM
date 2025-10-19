import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GymSaaS - Sistema de Gestión para Gimnasios",
  description: "Plataforma completa para la gestión de gimnasios. Administra miembros, pagos, clases y más con la mejor tecnología.",
  keywords: ["gimnasio", "saas", "gestión", "fitness", "miembros", "pagos"],
  authors: [{ name: "GymSaaS Team" }],
  creator: "GymSaaS",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://gymsaas.com",
    title: "GymSaaS - Sistema de Gestión para Gimnasios",
    description: "Plataforma completa para la gestión de gimnasios",
    siteName: "GymSaaS",
  },
  twitter: {
    card: "summary_large_image",
    title: "GymSaaS - Sistema de Gestión para Gimnasios",
    description: "Plataforma completa para la gestión de gimnasios",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}