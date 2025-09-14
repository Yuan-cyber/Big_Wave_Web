import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { Header, Footer } from "./components";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default:
      "Nazaré Big Wave Experience | Portugal's Ultimate Surfing Adventure",
    template: "%s | Nazaré Big Wave Experience",
  },
  description:
    "Experience the legendary giant waves of Nazaré, Portugal. Book your big wave adventure, learn about wave science, and discover the world's most spectacular surfing destination.",
  keywords: [
    "Nazaré",
    "big waves",
    "surfing",
    "Portugal",
    "wave watching",
    "tourism",
    "adventure",
    "ocean",
    "extreme sports",
  ],
  authors: [{ name: "Nazaré Big Wave Experience Team" }],
  creator: "Nazaré Big Wave Experience",
  publisher: "Nazaré Big Wave Experience",
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://nazarebigwave.com",
    siteName: "Nazaré Big Wave Experience",
    title: "Nazaré Big Wave Experience | Portugal's Ultimate Surfing Adventure",
    description:
      "Experience the legendary giant waves of Nazaré, Portugal. Book your big wave adventure today.",
    images: [
      {
        url: "/images/nazare-hero.jpg",
        width: 1200,
        height: 630,
        alt: "Nazaré Big Wave Experience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nazaré Big Wave Experience",
    description: "Experience the legendary giant waves of Nazaré, Portugal.",
    images: ["/images/nazare-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}