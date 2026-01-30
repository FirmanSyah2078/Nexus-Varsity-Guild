// src/components/navbar.tsx
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        {/* LOGO KIRI */}
        <Link href="/" className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-indigo-600 flex items-center justify-center">
            <span className="font-bold text-white">N</span>
          </div>
          <span className="text-lg font-bold font-space tracking-tight">
            NVG Sentinel
          </span>
        </Link>

        {/* MENU TENGAH (Desktop) */}
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Beranda
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Tentang
          </Link>
          <Link href="/guide" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Panduan
          </Link>
        </nav>

        {/* TOMBOL KANAN */}
        <div className="flex items-center gap-4">
          <Link 
            href="/dashboard"
            className="hidden md:block rounded-full bg-foreground text-background px-5 py-2 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Dashboard Admin
          </Link>
        </div>
      </div>
    </header>
  );
}