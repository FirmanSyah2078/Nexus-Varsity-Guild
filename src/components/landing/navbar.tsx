"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, LogIn, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md transition-all duration-500">
      {/* PERBAIKAN:
         1. max-w-[1400px]: Agar di layar ultrawide, logo tidak terlalu mojok ke pinggir.
         2. px-6 md:px-10 lg:px-16: Padding disinkronkan persis dengan Hero Section di bawah.
      */}
      <div className="mx-auto flex h-16 w-full max-w-350 items-center justify-between px-6 md:px-10 lg:px-16 transition-all duration-500 ease-out">
        
        {/* --- LOGO --- */}
        <Link href="/" className="group flex items-center gap-2">
          <div className="flex size-8 items-center justify-center rounded-lg bg-indigo-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-indigo-500 group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]">
            <span className="font-space font-bold text-white">N</span>
          </div>
          <span className="font-space text-lg font-bold tracking-tight transition-colors duration-300 group-hover:text-indigo-500">
            NVG Sentinel
          </span>
        </Link>

        {/* --- MENU TENGAH --- */}
        <nav className="hidden gap-8 md:flex">
          <Link href="/" className="text-sm font-medium font-onest text-muted-foreground transition-colors hover:text-foreground hover:scale-105">
            Beranda
          </Link>
          <Link href="/about" className="text-sm font-medium font-onest text-muted-foreground transition-colors hover:text-foreground hover:scale-105">
            Tentang
          </Link>
          <Link href="/guide" className="text-sm font-medium font-onest text-muted-foreground transition-colors hover:text-foreground hover:scale-105">
            Panduan
          </Link>
        </nav>

        {/* --- KANAN --- */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          {mounted && (
            <Button
              variant="outline"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className={`group relative overflow-hidden rounded-full transition-all duration-500 ${
                theme === "dark"
                  ? "bg-slate-950 border-slate-800 hover:border-slate-700"
                  : "bg-background border-border/50 hover:bg-muted"
              }`}
            >
              <div className={`absolute inset-0 pointer-events-none transition-opacity duration-500 ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`}>
                 <div className="absolute top-1.5 left-2 h-0.5 w-0.5 rounded-full bg-white shadow-[0_0_2px_white]"></div>
                 <div className="absolute bottom-1.5 right-2 h-0.5 w-0.5 rounded-full bg-white shadow-[0_0_2px_white]"></div>
                 <div className="absolute top-1 right-1.5 h-0.5 w-0.5 rounded-full bg-white/70"></div>
              </div>
              <div className="relative z-10 flex items-center justify-center">
                {theme === "dark" ? (
                  <Moon className="size-5 text-gray-400 transition-transform duration-500 group-hover:-rotate-12 group-hover:scale-110" />
                ) : (
                  <Sun className="size-5 text-yellow-500 transition-transform duration-500 group-hover:rotate-90 group-hover:scale-110" fill="currentColor" />
                )}
              </div>
            </Button>
          )}

          {/* Login Button */}
          <Link href="/login" className="hidden md:block">
            <Button className="rounded-full px-6 font-onest font-medium shadow-lg hover:shadow-indigo-500/20 transition-all hover:scale-105">
              Login <LogIn className="ml-2 size-4" />
            </Button>
          </Link>

          {/* Mobile Menu */}
          <div className="md:hidden">
            {mounted && (
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon"><Menu className="size-6" /></Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-72">
                  <SheetHeader><SheetTitle className="text-left font-space font-bold">Navigasi</SheetTitle></SheetHeader>
                  <div className="mt-8 flex flex-col gap-6">
                    <Link href="/" className="text-lg font-medium font-onest hover:text-indigo-500">Beranda</Link>
                    <Link href="/about" className="text-lg font-medium font-onest hover:text-indigo-500">Tentang</Link>
                    <Link href="/guide" className="text-lg font-medium font-onest hover:text-indigo-500">Panduan</Link>
                    <hr className="border-border" />
                    <Link href="/login"><Button className="w-full rounded-full font-onest">Login</Button></Link>
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