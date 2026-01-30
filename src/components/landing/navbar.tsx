
"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, LogIn, Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        
        {/* --- LOGO (KIRI) --- */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-indigo-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-indigo-500 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]">
            <span className="font-bold text-white">N</span>
          </div>
          <span className="font-space text-lg font-bold tracking-tight transition-colors duration-300 group-hover:text-indigo-500">
            NVG Sentinel
          </span>
        </Link>

        {/* --- MENU TENGAH --- */}
        <nav className="hidden gap-6 md:flex">
          <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Beranda
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Tentang
          </Link>
          <Link href="/guide" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
            Panduan
          </Link>
        </nav>

        {/* --- KANAN --- */}
        <div className="flex items-center gap-4">
          
          {/* THEME TOGGLE: HYBRID STYLE */}
          {mounted && (
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`group relative overflow-hidden rounded-full transition-all duration-500 ${
                theme === "dark"
                  ? "bg-slate-950 border-slate-800 hover:border-slate-700" // Dark: Langit Malam
                  : "bg-background border-border/50 hover:bg-muted"        // Light: Simpel
              }`}
              title="Ganti Tema"
            >
              
              {/* --- BACKGROUND BINTANG (Hanya muncul saat Dark) --- */}
              {/* POSISI DIPERBAIKI: Digeser lebih ke pinggir (menjauh dari tengah) */}
              <div 
                className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${
                  theme === 'dark' ? 'opacity-100' : 'opacity-0'
                }`}
              >
                 <div className="absolute top-1.5 left-2 h-0.5 w-0.5 rounded-full bg-white shadow-[0_0_2px_white]"></div>
                 <div className="absolute bottom-1.5 right-2 h-0.5 w-0.5 rounded-full bg-white shadow-[0_0_2px_white]"></div>
                 <div className="absolute top-1 right-1.5 h-0.5 w-0.5 rounded-full bg-white/70"></div>
                 <div className="absolute bottom-2 left-1.5 h-1 w-1 rounded-full bg-white/80 shadow-[0_0_4px_white]"></div>
              </div>

              {/* --- ICON --- */}
              <div className="relative z-10 flex items-center justify-center">
                {theme === "dark" ? (
                  // IKON BULAN: OUTLINE (Tanpa Fill), Abu-abu
                  <Moon 
                    className="size-5 text-gray-400 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(122, 122, 136, 0.6)]" 
                  />
                ) : (
                  // IKON MATAHARI: SOLID (Kuning), Simpel
                  <Sun 
                    className="size-5 text-yellow-500 transition-transform duration-500 group-hover:rotate-90 group-hover:scale-110" 
                    fill="currentColor"
                  />
                )}
              </div>
            </Button>
          )}

          {/* Tombol Login (Desktop) */}
          <Link href="/dashboard" className="hidden md:block">
            <Button className="rounded-full px-6 font-medium shadow-lg hover:shadow-indigo-500/20 transition-all hover:scale-105">
              Login
              <LogIn className="ml-2 size-4" />
            </Button>
          </Link>

          {/* Mobile Menu */}
          <div className="md:hidden">
            {mounted && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="size-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-75">
                  <SheetHeader>
                    <SheetTitle className="text-left font-space font-bold">Navigasi</SheetTitle>
                  </SheetHeader>
                  <div className="mt-8 flex flex-col gap-6">
                    <Link href="/" className="text-lg font-medium hover:text-indigo-500">Beranda</Link>
                    <Link href="/about" className="text-lg font-medium hover:text-indigo-500">Tentang</Link>
                    <Link href="/guide" className="text-lg font-medium hover:text-indigo-500">Panduan</Link>
                    <hr className="border-border" />
                    <Link href="/dashboard">
                      <Button className="w-full rounded-full">Login Dashboard</Button>
                    </Link>
                  </div>
                </SheetContent>
              </Sheet>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}