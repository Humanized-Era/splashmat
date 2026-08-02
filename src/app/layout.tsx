import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { themeInitScript } from "@/lib/theme-script";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = "https://splashmat.nl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "SplashMat™ — Een schoner toilet. Zonder moeite.",
    template: "%s | SplashMat™",
  },
  description:
    "SplashMat™ is de biologisch afbreekbare inleg-wc-mat die urinespetters opvangt, een frisse geur verspreidt en na meerdere spoelbeurten vanzelf oplost. Minder schoonmaken, altijd fris.",
  keywords: [
    "SplashMat",
    "wc mat",
    "urinespetters",
    "biologisch afbreekbaar",
    "toiletmat",
    "hygiëne",
  ],
  authors: [{ name: "SplashMat" }],
  openGraph: {
    title: "SplashMat™ — Een schoner toilet. Zonder moeite.",
    description:
      "De biologisch afbreekbare inleg-wc-mat die spetters opvangt, geurt en vanzelf oplost.",
    url: siteUrl,
    siteName: "SplashMat",
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SplashMat™ — Een schoner toilet. Zonder moeite.",
    description:
      "De biologisch afbreekbare inleg-wc-mat die spetters opvangt, geurt en vanzelf oplost.",
  },
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className={`${manrope.variable} h-full antialiased`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground">{children}</body>
    </html>
  );
}
