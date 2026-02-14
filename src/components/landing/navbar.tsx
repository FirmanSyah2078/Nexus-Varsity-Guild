"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, X, LogIn, Globe, Home, Info, BookOpen 
} from "lucide-react";
import { Button } from "@/components/ui/button";

// --- TIPE DATA ---
type Language = "ID" | "EN";
type ContentData = {
  menu: { name: string; href: string; icon: React.ElementType }[];
  login: string;
  ctaLogin: string;
};

export function Navbar() {
  const [mounted, setMounted] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [language, setLanguage] = React.useState<Language>("EN"); 
  
  const pathname = usePathname();

  React.useEffect(() => {
    setMounted(true);
    // Ubah threshold scroll jadi 10px biar responsif lebih cepat
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleLanguage = () => setLanguage((prev) => (prev === "ID" ? "EN" : "ID"));
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  // --- KONTEN BAHASA ---
  const content: Record<Language, ContentData> = {
    ID: {
      menu: [ { name: "Beranda", href: "/", icon: Home }, { name: "Tentang", href: "/about", icon: Info }, { name: "Panduan", href: "/guide", icon: BookOpen } ],
      login: "Masuk", ctaLogin: "Masuk",
    },
    EN: {
      menu: [ { name: "Home", href: "/", icon: Home }, { name: "About", href: "/about", icon: Info }, { name: "Guide", href: "/guide", icon: BookOpen } ],
      login: "Login", ctaLogin: "Login",
    },
  };

  const t = content[language];

  return (
    <>
      {/* ========================================================= */}
      {/* 1. TOP NAVBAR (GLASSMORPHISM MODE)                        */}
      {/* ========================================================= */}
      <header
        className={`fixed top-0 z-101 w-full transition-all duration-500 ease-in-out ${
          isMobileMenuOpen
            // 1. MOBILE MENU OPEN: Transparan total (biar backdrop menu yang handle)
            ? "bg-transparent border-b border-transparent backdrop-blur-none"
            : isScrolled
              // 2. SCROLLED: mode "Kaca Es" (Frosted Glass)
              // - bg-white/5: Memberi tint putih sangat tipis (kaca)
              // - backdrop-blur-xl: Efek buram yang kuat
              // - border-white/5: Garis batas super halus
              // - shadow-lg: Agar terpisah dari konten di bawahnya
              ? "bg-white/2 backdrop-blur-2xl border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.1)] supports-backdrop-filter:bg-white/2"
              // 3. TOP: Transparan total
              : "bg-transparent border-b border-transparent backdrop-blur-none"
        }`}
      >
        <div className="flex h-16 w-full items-center justify-between px-6 md:px-10 lg:px-16">
          
          {/* --- LOGO --- */}
          <div className="shrink-0 w-auto"> 
              <Link href="/" className="group flex items-center gap-2 w-fit" onClick={closeMobileMenu}>
              <div className="flex size-8 items-center justify-center rounded-lg bg-indigo-600/90 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-indigo-500 group-hover:shadow-[0_0_20px_rgba(99,102,241,0.6)]">
                  <span className="font-space font-bold text-white">N</span>
              </div>
              <span className="font-space text-lg font-bold tracking-tight text-white transition-all duration-300 group-hover:text-indigo-400 group-hover:tracking-wide">
                  NVG
              </span>
              </Link>
          </div>

          {/* --- DESKTOP MENU --- */}
          <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 gap-8">
            {t.menu.map((item, index) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={index}
                  href={item.href}
                  className={`relative text-sm font-medium font-onest transition-colors py-2 group ${
                    isActive ? "text-white" : "text-zinc-400 hover:text-white"
                  }`}
                >
                  {item.name}
                  {/* Underline Indicator */}
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-indigo-500 transition-all duration-300 ${
                    isActive ? "w-full shadow-[0_0_10px_rgba(99,102,241,0.5)]" : "w-0 group-hover:w-full"
                  }`} />
                </Link>
              )
            })}
          </nav>

          {/* --- DESKTOP KANAN --- */}
          <div className="hidden md:flex items-center gap-4 shrink-0 w-auto justify-end">
            {mounted && (
              <Button variant="ghost" size="sm" onClick={toggleLanguage} className="flex items-center gap-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/10 transition-all font-onest font-medium">
                <Globe className="size-4" />
                <span>{language}</span>
              </Button>
            )}
            <Link href="/login">
              <Button className="rounded-full bg-white/10 border border-white/5 text-white px-6 font-onest font-medium hover:bg-indigo-600 hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-300 hover:scale-105 backdrop-blur-sm">
                {t.login} <LogIn className="ml-2 size-4" />
              </Button>
            </Link>
          </div>

          {/* --- MOBILE TOGGLES --- */}
          <div className="md:hidden flex items-center gap-2">
              <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLanguage}
                  className="text-zinc-400 hover:text-white hover:bg-white/10 h-8 px-2"
              >
                  <span className="font-bold text-xs">{language}</span>
              </Button>

              <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={toggleMobileMenu}
                  className={`transition-all duration-300 ${isMobileMenuOpen ? "text-white bg-white/10" : "text-white hover:bg-white/10"}`}
              >
                {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
              </Button>
          </div>

        </div>
      </header>

      {/* ========================================================= */}
      {/* 2. UNIFIED MOBILE MENU & BACKDROP (TIDAK BERUBAH)         */}
      {/* ========================================================= */}
      <div 
        className={`fixed top-0 left-0 w-full z-100 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:hidden ${
            isMobileMenuOpen 
                ? "max-h-100 opacity-100" 
                : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#02040a]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl pt-16"> 
            <div className="flex flex-wrap items-center justify-center gap-2 p-5 pb-8">
                {t.menu.map((item, index) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link 
                            key={index} 
                            href={item.href}
                            onClick={(e) => {
                                if (isActive) e.preventDefault();
                                closeMobileMenu();
                            }}
                            style={{ transitionDelay: `${index * 50}ms` }}
                            className={`
                                flex items-center gap-2 px-4 py-2 rounded-full border transition-all duration-300
                                ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
                                ${isActive 
                                    ? "bg-indigo-600/90 border-indigo-500 text-white cursor-default shadow-[0_0_15px_rgba(99,102,241,0.3)]" 
                                    : "bg-white/5 border-white/5 text-zinc-300 hover:bg-white/10 hover:text-white active:scale-95"
                                }
                            `}
                        >
                            <item.icon className="size-4" />
                            <span className="font-onest font-medium text-sm">{item.name}</span>
                        </Link>
                    )
                })}
                <Link 
                    href="/login" 
                    onClick={closeMobileMenu}
                    style={{ transitionDelay: `${t.menu.length * 50}ms` }}
                    className={`
                         flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-transparent text-white hover:bg-white/10 transition-all duration-300 active:scale-95
                        ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
                    `}
                >
                    <span className="font-onest font-medium text-sm">{t.ctaLogin}</span>
                    <LogIn className="size-4" />
                </Link>
            </div>
        </div>
      </div>
    </>
  );
}