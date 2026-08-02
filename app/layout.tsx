import type { Metadata, Viewport } from "next";
import { Inter, Manrope } from "next/font/google";
import { SITE } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `Thank You | ${SITE.name.toUpperCase()}`,
    template: `%s | ${SITE.name.toUpperCase()}`,
  },
  description: SITE.description,
  openGraph: {
    title: `Thank You | ${SITE.name.toUpperCase()}`,
    description: SITE.description,
    siteName: SITE.name.toUpperCase(),
    locale: "en_IN",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${manrope.variable} ${inter.variable} h-full`}>
      <body className="flex min-h-full flex-col">
        {/* Scroll-in effects start at opacity 0; without JS they'd never reveal.
            A stylesheet !important beats Framer Motion's plain inline style. */}
        <noscript>
          <style>{`.reveal, .fade-in { opacity: 1 !important; transform: none !important; }`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
