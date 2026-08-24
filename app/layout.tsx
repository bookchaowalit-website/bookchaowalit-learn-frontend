import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Learn Paths | Bookchaowalit",
  description: "Learning tracks and modules.",
  keywords: ["learn", "catalog"],
  authors: [{ name: "Bookchaowalit", url: "https://bookchaowalit.com" }],
  creator: "Bookchaowalit",
  metadataBase: new URL("https://bookchaowalit.com"),
  openGraph: {
    type: "website",
    title: "Learn Paths | Bookchaowalit",
    description: "Learning tracks and modules.",
    siteName: "Bookchaowalit",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* THESIS: make learning feel like a chosen route, not a content dump.
OWN-WORLD: a field notebook with cream paper, colored subject tabs, and a coral pencil mark for the next step.
STORY: name the noise, search the paths, compare honest scope, then mark one route as in progress.
FIRST VIEWPORT: the learning promise, search, subject filters, and first path are visible without a wall of cards.
FORM: editorial path rows, numbered trails, short metadata, and a single next-step action define the system.
SEED: assigned direction 4 · read mode.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance */}
        {children}
      </body>
    </html>
  );
}
