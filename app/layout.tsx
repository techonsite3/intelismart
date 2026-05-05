import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://intelismart.com";
const title = "Intelismart | Smart Technology. Reliable Infrastructure.";
const description =
  "Intelismart designs, deploys, and supports secure technology infrastructure including managed IT, network infrastructure, surveillance, fiber connectivity, and AV systems.";
const previewImage = {
  url: "/og-image.jpg",
  width: 1200,
  height: 630,
  alt: "Intelismart smart technology infrastructure in a modern server room"
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: "%s | Intelismart"
  },
  description,
  applicationName: "Intelismart",
  alternates: {
    canonical: "/"
  },
  icons: {
    icon: [{ url: "/inteli-trans.png", sizes: "1024x1024", type: "image/png" }],
    apple: [{ url: "/inteli-trans.png", type: "image/png" }]
  },
  openGraph: {
    title,
    description,
    type: "website",
    url: siteUrl,
    siteName: "Intelismart",
    locale: "en_US",
    images: [previewImage]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [previewImage]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
