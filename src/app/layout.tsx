import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { offer } from "@/data/site";
import { MotionRoot } from "@/components/shared/MotionRoot";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Grow Smart Wealth — TradingView Chart Indicator",
  description: `A TradingView indicator that marks trend, structure and key zones in one overlay. ${offer.price} one-time.`,
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#1C1917",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("h-full antialiased", inter.variable)}>
      <body className="flex min-h-full flex-col bg-pf-page font-sans text-pf-copy">
        <a
          href="#content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-full focus:bg-white focus:px-4 focus:py-2 focus:text-pf-ink"
        >
          Skip to content
        </a>
        <MotionRoot>{children}</MotionRoot>
      </body>
    </html>
  );
}
