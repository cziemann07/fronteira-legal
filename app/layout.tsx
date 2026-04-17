import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/language-context"
import { SERVICE_NAME } from "@/lib/translations"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://fronteiralegal.com.br"),
  title: {
    default: `${SERVICE_NAME} — Regularize sua situação no Brasil sem perder tempo na Polícia Federal`,
    template: `%s • ${SERVICE_NAME}`,
  },
  description:
    "Consultoria digital de imigração para mercosulinos, fronteiriços e venezuelanos. Revisamos sua documentação, orientamos sobre agendamento e preparamos tudo para você ir à Polícia Federal uma única vez.",
  keywords: [
    "CRNM",
    "autorização de residência",
    "Polícia Federal",
    "imigração Brasil",
    "Mercosul",
    "residência fronteiriça",
    "naturalização",
    "venezuelanos Brasil",
    "paraguaios Brasil",
  ],
  authors: [{ name: SERVICE_NAME }],
  creator: SERVICE_NAME,
  publisher: SERVICE_NAME,
  alternates: {
    canonical: "/",
    languages: {
      "pt-BR": "/",
      "es-ES": "/",
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://fronteiralegal.com.br",
    siteName: SERVICE_NAME,
    title: `${SERVICE_NAME} — Regularize sua situação no Brasil`,
    description:
      "Consultoria digital de imigração. Revisamos sua documentação e preparamos tudo para você ir à Polícia Federal uma única vez.",
    images: [
      {
        url: "/hero-documents.jpg",
        width: 1200,
        height: 630,
        alt: "Documentos de imigração organizados",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SERVICE_NAME} — Regularize sua situação no Brasil`,
    description:
      "Consultoria digital de imigração. Uma única ida à Polícia Federal, sem surpresas.",
    images: ["/hero-documents.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#1e40af",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        <LanguageProvider>{children}</LanguageProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
