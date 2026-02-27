import type { Metadata } from "next";
// Import font dari Google (Otomatis & Gratis)
import {
  Inter,
  EB_Garamond,
  Geist,
  Instrument_Sans,
  Onest,
  Space_Grotesk,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

// --- DEFINISI VARIABLE FONT ---

// 1. INTER (Jadikan Default Sans)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// 2. EB GARAMOND
const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
});

// 3. GEIST
const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

// 4. INSTRUMENT SANS
const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

// 5. ONEST
const onest = Onest({
  subsets: ["latin"],
  variable: "--font-onest",
  display: "swap",
});

// 6. SPACE GROTESK
const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nexus Varsity Guild",
  description: "Sistem Validasi Terintegrasi TI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // suppressHydrationWarning wajib ada untuk next-themes agar tidak error saat render HTML
    <html lang="id" suppressHydrationWarning>
      <body
        className={`
          ${inter.variable}
          ${ebGaramond.variable}
          ${geist.variable}
          ${instrumentSans.variable}
          ${onest.variable}
          ${spaceGrotesk.variable}
          antialiased
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}

          <Toaster theme="dark" position="top-right" richColors /> 
        </ThemeProvider>
      </body>
    </html>
  );
}