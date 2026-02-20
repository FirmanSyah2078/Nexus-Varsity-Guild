"use client";

import Link from "next/link";
import { Github, Twitter, Disc, Command } from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export function Footer() {
  // --- KONFIGURASI BINTANG ---
  const stars = [
    { top: "15%", right: "25%", size: 2, delay: "0s" },
    { top: "25%", right: "15%", size: 3, delay: "1.2s" },
    { top: "10%", right: "35%", size: 1.5, delay: "0.5s" },
    { top: "35%", right: "25%", size: 2.5, delay: "2.5s" },
    { top: "5%", right: "15%", size: 2, delay: "3.1s" },
    { top: "30%", right: "40%", size: 1.5, delay: "1.8s" },
    { top: "20%", right: "5%", size: 3, delay: "0.2s" },
  ];

  return (
    <footer className="relative w-full py-10 overflow-hidden">

      {/* ========================================= */}
      {/* 1. VIGNETTE & TRANSISI (SMOOTH DARK)      */}
      {/* ========================================= */}
      
      {/* Shadow Bawah (Hitam Transparan ke Atas) */}
      {/* Kita pakai hex #02040a sesuai warna gelap GalaxyBackground biar nyatu */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#02040a] via-[#02040a]/80 to-transparent z-0 pointer-events-none" />
      
      {/* Shadow Kiri & Kanan (Vignette Halus) */}
      <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#02040a]/80 to-transparent z-0 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-linear-to-l from-[#02040a]/80 to-transparent z-0 pointer-events-none" />


      {/* ========================================= */}
      {/* 2. ATMOSFER SISA "GOLDEN HOUR" & INDIGO   */}
      {/* ========================================= */}
      
      {/* Sisa Cahaya Emas dari Section 6 (Sangat Halus di Tengah Bawah) */}
      {/* Ini kuncinya! Menyambungkan footer dengan section sebelumnya yang oranye. */}
      {/* <div className="absolute -top-12.5 left-1/2 -translate-x-1/2 w-[80%] h-37.5 bg-orange-500/5 blur-[100px] rounded-full pointer-events-none z-0" /> */}
      
      {/* Glow Indigo Khas NVG di Bawah (Penutup Brand) */}
      <div className="absolute -bottom-25 left-1/2 -translate-x-1/2 w-[60%] h-50 bg-indigo-900/20 blur-[120px] rounded-full pointer-events-none z-0" />


      {/* ========================================= */}
      {/* 3. SPACE SCENE (MOON & STARS)             */}
      {/* ========================================= */}
      <div className="absolute top-0 right-0 w-full h-full md:w-1/2 pointer-events-none z-0 overflow-hidden">
        {/* MOON LOTTIE */}
        <div className="absolute -top-20 -right-20 md:-top-24 md:-right-16 w-64 h-64 md:w-87.5 md:h-87.5 opacity-40 mix-blend-screen">
          <DotLottieReact src="animations/moon.lottie" loop autoplay />
        </div>

        {/* TWINKLING STARS (Warna Indigo Muda, bukan Biru Langit) */}
        {stars.map((star, i) => (
          <div
            key={i}
            className="animate-twinkle absolute rounded-full bg-indigo-200 shadow-[0_0_4px_rgba(199,210,254,0.8)]"
            style={{
              top: star.top,
              right: star.right,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: star.delay,
            }}
          />
        ))}
      </div>


      {/* ========================================= */}
      {/* 4. CONTENT (FOREGROUND)                   */}
      {/* ========================================= */}
      <div className="relative z-10 w-full px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-7xl mx-auto flex flex-col gap-8">
          
          {/* ROW 1: BRAND & NAVIGASI */}
          <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-4 relative">
            
            {/* KIRI: BRANDING (KEMBALI KE INDIGO ASLI) */}
            <div className="flex flex-col gap-4 max-w-sm text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-3 text-white font-space font-bold text-xl">
                {/* Logo Box - Indigo Original */}
                <div className="size-10 shrink-0 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                  <Command size={20} />
                </div>
                <span>Nexus Varsity Guild</span>
              </div>
              <p className="font-onest text-sm text-zinc-400 leading-relaxed text-balance drop-shadow-md">
                Forged in the void, built for builders. Establish your legacy in
                the digital frontier with a verified ecosystem.
              </p>
            </div>

            {/* KANAN: NAVIGASI */}
            <div className="flex flex-col items-center md:items-end gap-4 mt-2">
              <h4 className="font-mono text-[10px] font-bold text-white/50 uppercase tracking-[0.2em] drop-shadow-md">
                Navigation
              </h4>

              {/* Nav Container */}
              <div className="flex items-center gap-6 md:gap-8 md:px-4 md:py-2 md:rounded-full transition-all duration-300">
                {["Home", "About", "Guide"].map((item) => (
                  <Link
                    key={item}
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-sm font-medium text-zinc-300 hover:text-white hover:scale-110 transition-all duration-300 drop-shadow-md hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* ROW 2: BOTTOM BAR */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-white/10 relative">
            <div className="flex flex-col md:flex-row items-center gap-2 text-xs text-zinc-500 font-mono drop-shadow-sm">
              <span>
                &copy; {new Date().getFullYear()} Nexus Varsity Guild.
              </span>
              <span className="hidden md:inline text-zinc-600">|</span>
              <span>All systems nominal.</span>
            </div>

            <div className="flex items-center gap-4">
              {[
                { icon: Github, href: "https://github.com" },
                { icon: Twitter, href: "https://twitter.com" },
                { icon: Disc, href: "https://discord.com" },
              ].map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className="text-zinc-500 hover:text-white hover:scale-110 transition-all duration-300 drop-shadow-md"
                >
                  <social.icon size={16} />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}