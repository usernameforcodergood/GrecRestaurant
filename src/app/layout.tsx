import type { Metadata, Viewport } from "next";
import { Brygada_1918, Manrope } from "next/font/google";
import { getContent } from "@/content";
import { images } from "@/config/images";
import { site } from "@/config/site";
import "./globals.css";

const serif = Brygada_1918({
  subsets: ["greek", "latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-brygada",
  display: "swap",
});

const sans = Manrope({
  subsets: ["greek", "latin"],
  variable: "--font-manrope",
  display: "swap",
});

const content = getContent();

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: content.meta.title,
  description: content.meta.description,
  applicationName: site.name,
  keywords: [
    "Grec",
    "Grec Restaurant",
    "μουσική ταβέρνα Θεσσαλονίκη",
    "ταβέρνα Λαδάδικα",
    "ζωντανή μουσική Θεσσαλονίκη",
    "ρεμπέτικο Θεσσαλονίκη",
    "λαϊκό",
    "ελληνική κουζίνα Θεσσαλονίκη",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "el_GR",
    siteName: site.legalName,
    title: content.meta.title,
    description: content.meta.description,
    url: "/",
    images: [
      {
        url: images.salonPosters.src,
        width: images.salonPosters.width,
        height: images.salonPosters.height,
        alt: content.meta.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: content.meta.title,
    description: content.meta.description,
    images: [images.salonPosters.src],
  },
  formatDetection: { telephone: true, address: true },
};

export const viewport: Viewport = {
  themeColor: "#112a2e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang={content.locale} className={`${serif.variable} ${sans.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
