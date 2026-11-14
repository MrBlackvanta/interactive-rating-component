import { Signature } from "@/components/layout";
import { SITE_NAME, SITE_URL } from "@/data";
import type { Metadata, Viewport } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";

const overpass = Overpass({
  variable: "--font-overpass",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const title = `${SITE_NAME} | Rate your support request`;
const description =
  "Rate your latest support request from 1 to 5, submit it in one tap, and get a thank-you that confirms the score you gave.";

const shareImage = {
  url: "/opengraph-image.jpg",
  width: 1200,
  height: 630,
  alt: "The Rapport rating card asking how we did, with scores from 1 to 5 and an orange Submit button.",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_US",
    type: "website",
    images: [shareImage],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [shareImage],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#131518",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${overpass.variable} antialiased`}>
      <body className="relative flex min-h-dvh flex-col">
        {children}
        <Signature />
      </body>
    </html>
  );
}
