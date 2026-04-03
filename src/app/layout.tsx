import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import CampaignDetector from "@/components/CampaignDetector/CampaignDetector";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dealcoupon.de'),
  title: {
    default: "DealCoupon – Beste Gutscheine & Rabattcodes Deutschland 2026",
    template: "%s | DealCoupon",
  },
  description:
    "Spare Geld mit den besten Gutscheincodes, Rabattcodes und Deals aus über 500 deutschen Online-Shops. Täglich neue Angebote bei DealCoupon – Deutschlands #1 Gutscheinportal.",
  keywords: [
    "Gutscheine",
    "Rabattcodes",
    "Gutscheincodes",
    "Angebote",
    "Deals",
    "Sparen",
    "Deutschland",
    "Online Shopping",
    "Rabatt",
    "Coupon",
    "Schnäppchen",
    "Sale",
  ],
  authors: [{ name: "DealCoupon Team" }],
  creator: "DealCoupon",
  publisher: "DealCoupon",
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
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://dealcoupon.de",
    siteName: "DealCoupon",
    title: "DealCoupon – Beste Gutscheine & Rabattcodes Deutschland",
    description: "Täglich neue Gutscheine und Rabattcodes für über 500 Top-Shops. Spare jetzt mit DealCoupon!",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DealCoupon – Deutschlands #1 Gutscheinportal",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DealCoupon – Beste Gutscheine & Rabattcodes",
    description: "Täglich neue Gutscheine für über 500 Shops. Jetzt sparen!",
    images: ["/og-image.jpg"],
    creator: "@dealcoupon",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body className={inter.className}>
        <Header />
        <Suspense fallback={null}>
          <CampaignDetector />
        </Suspense>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
