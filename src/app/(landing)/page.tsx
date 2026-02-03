"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShieldCheck, Zap, Globe } from "lucide-react";
import { Meteors } from "@/components/magicui/meteors";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden">

      {/* ========================================= */}
      {/* HERO SECTION (COMPACT FULL SCREEN)      */}
      {/* ========================================= */}
      {/* h-[calc(100vh-64px)]: Tinggi pas 1 layar dikurangi navbar.
          min-h-[550px]: Mencegah layout rusak di HP landscape pendek. 
      */}
      <section className="relative flex w-full h-[calc(100vh-64px)] min-h-137.5 flex-col items-center justify-center overflow-hidden">

        {/* --- LAYER 0: ORNAMEN (PERBAIKAN POSISI: GESER DIKIT AJA) --- */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-10">

          {/* KIRI: PLANET */}
          <div className="hidden md:block absolute left-0 lg:left-[1%] xl:left-[2%] top-[65%] -translate-y-1/2 -translate-x-[20%] lg:translate-x-0 w-50 lg:w-70 xl:w-87.5 opacity-90 transition-all duration-1000 ease-out">
            <div className="animate-float">
              <DotLottieReact src="animations/Planet.lottie" loop autoplay />
            </div>
          </div>

          {/* KANAN: ASTRONOT */}
          <div className="hidden md:block absolute right-0 lg:right-[1%] xl:right-[2%] top-[20%] translate-x-[10%] lg:translate-x-0 w-45 lg:w-55 xl:w-70 opacity-90 transition-all duration-1000 ease-out hover:scale-105 hover:-rotate-12">
            <div className="animate-[float_8s_ease-in-out_infinite_reverse]">
              <DotLottieReact src="animations/Astronaut.lottie" loop autoplay />
            </div>
          </div>
        </div>

        {/* --- LAYER 1: BACKGROUND EFFECTS --- */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 mask-[linear-gradient(to_bottom,white_60%,transparent_100%)]">
          <Meteors number={20} />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-125 w-125 rounded-full bg-indigo-500/20 blur-[120px] opacity-40 dark:opacity-20" />

        {/* --- LAYER 2: KONTEN TENGAH (KOMPAK) --- */}
        <div className="relative z-20 flex flex-col items-center text-center px-4 w-full max-w-[90%] md:max-w-[80%] lg:max-w-225">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 text-[10px] sm:text-xs font-semibold text-indigo-500 transition-colors hover:bg-indigo-500/20 backdrop-blur-md">
            <span className="mr-2 flex h-2 w-2 animate-pulse rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]"></span>
            System Online v1.0
          </div>

          {/* HEADLINE (DIPERKECIL AGAR CENTER) */}
          {/* lg:text-5xl: Ukuran pas untuk laptop 1366x768 (tidak terlalu raksasa). */}
          <h1 className="transition-all duration-700 ease-out
              bg-linear-to-b from-foreground via-foreground/90 to-foreground/60 bg-clip-text 
              font-space font-bold tracking-tight text-transparent 
              text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl leading-[1.15]">
            Sistem Verifikasi Terpadu <br className="hidden md:block" />
            Untuk Komunitas Digital
          </h1>

          {/* SUB HEADLINE */}
          {/* lg:text-lg: Ukuran standar, enak dibaca. */}
          <p className="mt-6 transition-all duration-700 ease-out
              w-full max-w-125 lg:max-w-150
              font-onest text-sm sm:text-base md:text-lg lg:text-lg
              leading-relaxed tracking-wide text-muted-foreground/90 mx-auto">
            NVG Sentinel adalah garda terdepan manajemen data dan validasi
            anggota. Cepat, aman, dan terintegrasi langsung dengan ekosistem
            Discord kami.
          </p>

          {/* BUTTONS (DIPERKECIL DIKIT) */}
          {/* h-11: Tinggi 44px (standar UI modern), tidak terlalu tebal seperti h-12 (48px). */}
          <div className="mt-8 flex flex-col w-full sm:w-auto sm:flex-row gap-3 justify-center transition-all duration-500">
            <Link href="/dashboard" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto rounded-full px-6 h-11 font-onest font-medium text-sm sm:text-base shadow-[0_4px_14px_0_rgba(99,102,241,0.39)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.23)] hover:scale-105 transition-all">
                Masuk Dashboard <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>
            <Link href="/about" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-6 h-11 font-onest text-sm sm:text-base backdrop-blur-sm bg-background/30 hover:bg-background/50 border-white/10 hover:border-white/20 hover:scale-105 transition-all">
                Tentang Sistem
              </Button>
            </Link>
          </div>

        </div>
      </section>

      {/* --- FEATURE SECTION (Tidak Diubah) --- */}
      <section className="relative z-10 w-full border-y border-border/40 bg-zinc-50/50 py-12 dark:bg-zinc-900/20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="group flex flex-col items-start space-y-4 rounded-xl border bg-background p-6 hover:shadow-lg transition-all duration-300">
              <div className="rounded-lg bg-indigo-500/10 p-3 text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                <ShieldCheck className="size-6" />
              </div>
              <h3 className="font-space text-xl font-bold">Validasi Otomatis</h3>
              <p className="leading-relaxed text-muted-foreground">
                Tidak ada lagi pengecekan manual. Sistem Sentinel memverifikasi data anggota secara real-time dengan akurasi tinggi.
              </p>
            </div>
            <div className="group flex flex-col items-start space-y-4 rounded-xl border bg-background p-6 hover:shadow-lg transition-all duration-300">
              <div className="rounded-lg bg-emerald-500/10 p-3 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Zap className="size-6" />
              </div>
              <h3 className="font-space text-xl font-bold">Respon Instan</h3>
              <p className="leading-relaxed text-muted-foreground">
                Dibangun di atas arsitektur Serverless. Bot Discord dan Web Dashboard merespon permintaan dalam hitungan milidetik.
              </p>
            </div>
            <div className="group flex flex-col items-start space-y-4 rounded-xl border bg-background p-6 hover:shadow-lg transition-all duration-300">
              <div className="rounded-lg bg-blue-500/10 p-3 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Globe className="size-6" />
              </div>
              <h3 className="font-space text-xl font-bold">Ekosistem Terpusat</h3>
              <p className="leading-relaxed text-muted-foreground">
                Satu akun untuk semua akses. Terintegrasi penuh dari Discord Role hingga akses Database khusus anggota.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 text-center md:px-6">
          <div className="mx-auto max-w-2xl space-y-4">
            <h2 className="font-space text-3xl font-bold tracking-tighter md:text-4xl">
              Siap Bergabung?
            </h2>
            <p className="text-muted-foreground md:text-xl">
              Pastikan data kamu sudah terdaftar sebelum melakukan verifikasi di Discord.
            </p>
            <div className="pt-4">
              <Link href="/dashboard" className="text-indigo-500 underline-offset-4 hover:underline">
                Hubungi Admin jika ada kendala &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}