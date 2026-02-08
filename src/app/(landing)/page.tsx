"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, PlayCircle, Rocket } from "lucide-react";
import { Meteors } from "@/components/magicui/meteors";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ReactLenis } from "lenis/react";

export default function LandingPage() {
  return (
    <ReactLenis root>
      {/* Container Utama: Hitam Pekat */}
      <div className="relative w-full min-h-screen bg-[#02040a] text-white selection:bg-indigo-500/30 overflow-x-hidden">
        {/* ========================================================= */}
        {/* 1. GLOBAL ATMOSPHERE & STARS (Latar Belakang Satu Kesatuan) */}
        {/* ========================================================= */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          {/* Texture Noise Halus */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

          {/* Bintang-bintang (Tetap ada) */}
          <div className="absolute top-[10%] left-[20%] size-0.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]" />
          <div className="absolute top-[40%] left-[80%] size-1 bg-white rounded-full animate-pulse delay-700 shadow-[0_0_10px_white]" />
          <div className="absolute top-[70%] left-[15%] size-0.5 bg-white rounded-full animate-pulse delay-300 shadow-[0_0_8px_white]" />
          <div className="absolute top-[25%] left-[50%] size-0.5 bg-white rounded-full animate-pulse delay-500 shadow-[0_0_8px_white]" />
          <div className="absolute top-[60%] right-[10%] size-0.5 bg-indigo-200 rounded-full animate-pulse delay-200" />
        </div>

        {/* ========================================================= */}
        {/* 2. THE GIANT NEBULA CANVAS (Updated: Lebih Redup/Soft)    */}
        {/* ========================================================= */}
        <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
          {/* HERO ATMOSPHERE: Opacity dikurangi dari 0.4 jadi 0.2 agar tidak silau */}
          <div className="absolute top-[-10vh] left-1/2 -translate-x-1/2 w-[120vw] h-screen bg-[radial-gradient(ellipse_at_center,rgba(49,46,129,0.2)_0%,rgba(17,24,39,0)_70%)] blur-[120px]" />

          {/* Highlight Tengah: Opacity dikurangi dari 0.15 jadi 0.1 */}
          <div className="absolute top-[10vh] left-1/2 -translate-x-1/2 w-[60vw] h-[60vh] bg-[radial-gradient(circle,rgba(79,70,229,0.1)_0%,transparent_60%)] blur-[100px]" />

          {/* SISA SECTION (Tetap sama, atau bisa disesuaikan selera) */}
          <div className="absolute top-[80vh] left-[-20%] w-screen h-screen bg-[radial-gradient(circle,rgba(88,28,135,0.2)_0%,transparent_70%)] blur-[150px]" />
          <div className="absolute top-[180vh] right-[-20%] w-screen h-screen bg-[radial-gradient(circle,rgba(6,182,212,0.15)_0%,transparent_70%)] blur-[150px]" />
          <div className="absolute top-[280vh] left-[20%] w-[80vw] h-[80vh] bg-[radial-gradient(circle,rgba(67,56,202,0.2)_0%,transparent_70%)] blur-[150px]" />
        </div>

        {/* ========================================================= */}
        {/* SECTION 1: HERO (CONTENT ONLY - BACKGROUND REMOVED)       */}
        {/* ========================================================= */}
        <section className="relative flex w-full h-[calc(100vh-64px)] min-h-170 flex-col items-center justify-center overflow-hidden z-10">
          {/* HAPUS BACKGROUND DISINI, DIGANTI DENGAN GIANT NEBULA DI ATAS */}

          {/* Meteor Tetap Ada */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            <Meteors number={20} />
          </div>

          {/* Planet & Astronaut (Tetap Ada) */}
          <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
            <div className="hidden md:block absolute left-0 top-[65%] -translate-y-1/2 -translate-x-[20%] w-50 lg:w-70 xl:w-87.5 opacity-90 transition-all duration-1000 ease-out">
              <div className="animate-float">
                <DotLottieReact src="animations/Planet.lottie" loop autoplay />
              </div>
            </div>
            <div className="hidden md:block absolute right-0 top-[20%] translate-x-[10%] w-45 lg:w-55 xl:w-70 opacity-90 transition-all duration-1000 ease-out hover:scale-105 hover:-rotate-12">
              <div className="animate-[float_8s_ease-in-out_infinite_reverse]">
                <DotLottieReact
                  src="animations/Astronaut.lottie"
                  loop
                  autoplay
                />
              </div>
            </div>
          </div>

          {/* Text Content (Tetap Ada) */}
          {/* Container Utama: Ditambah px-4 sm:px-6 agar di HP tidak mepet pinggir */}
          <div className="relative z-20 flex flex-col items-center text-center px-4 sm:px-6 md:px-10 w-full max-w-5xl mx-auto">
            {/* --- BADGE --- */}
            <div className="mb-6 sm:mb-8 inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium text-indigo-400 backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.3)] animate-fade-in-down">
              <Rocket className="mr-2 size-3 sm:size-3.5" />
              <span>Future Ready v1.0</span>
            </div>

            {/* --- HEADLINE WRAPPER --- */}
            {/* Kita batasi max-width-nya agar di layar ultra-wide tidak terlalu panjang */}
            <div className="flex flex-col gap-3 w-full max-w-5xl mx-auto">
              <h2 className="font-space font-extrabold tracking-tight leading-[1.1] text-2xl sm:text-3xl md:text-4xl lg:text-5xl bg-linear-to-r from-white via-indigo-100 to-indigo-200 bg-clip-text text-transparent drop-shadow-sm transition-all duration-700">
                Technology Weaves Your Wildest Dreams
              </h2>
              <h3 className="font-space font-bold tracking-wide leading-tight text-xl sm:text-2xl md:text-3xl lg:text-4xl text-muted-foreground/90 transition-all duration-700">
                Securely Anchored Amongst the Stars
              </h3>
            </div>

            {/* --- PARAGRAPH WRAPPER (PERBAIKAN UTAMA) --- */}
            {/* 1. Dibungkus DIV agar lebar bisa dikontrol terpisah dari headline */}
            {/* 2. max-w-2xl: Agar paragraf lebih sempit dari headline (Estetik) */}
            {/* 3. mx-auto: Agar tetap di tengah */}
            <div className="w-full max-w-lg sm:max-w-3xl mx-auto mt-6 sm:mt-8">
              <p className="font-onest text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground/80 text-balance">
                Where creativity meets technology. One account grants you
                unlimited access to learn, collaborate, and find your frequency
                in a verified ecosystem.
              </p>
            </div>

            {/* --- BUTTONS WRAPPER --- */}
            {/* mt-8 sm:mt-10: Jarak responsif */}
            {/* w-full sm:w-auto: Di HP full width container, di PC menyesuaikan isi */}
            {/* --- BUTTONS WRAPPER --- */}
            <div className="mt-8 sm:mt-10 flex flex-row gap-3 items-center justify-center w-full transition-all duration-500">

              {/* TOMBOL 1: SIGN UP */}
              <Link
                href="/signup"
                className="w-auto"
              >
                <Button variant="outline" size="lg" className="h-10 sm:h-12 rounded-full px-5 sm:px-8 font-onest font-medium text-sm sm:text-base border-white/10 bg-white/5 backdrop-blur-sm text-white/90 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300">
                  <PlayCircle className="mr-1.5 sm:mr-2 size-3.5 sm:size-4" />{" "}
                  Get Started
                </Button>
              </Link>

              {/* TOMBOL 2: DISCORD INVITE */}
              <Link
                href="https://discord.gg/link-invite-kamu"
                target="_blank"
                className="w-auto"
              >
                <Button size="lg" className="h-10 sm:h-12 rounded-full px-5 sm:px-8 font-onest font-semibold text-sm sm:text-base bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] hover:scale-105 transition-all duration-300 group">
                  Explore Nexus{" "}
                  <ArrowRight className="ml-1.5 sm:ml-2 size-3.5 sm:size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* ========================================================= */}
        {/* SECTIONS 2-6 (TRANSPARENT PLACEHOLDERS)                   */}
        {/* ========================================================= */}
        {/* Latar belakangnya sudah di-handle oleh Giant Nebula Canvas di atas */}

        {/* SECTION 2 */}
        <section className="relative flex w-full h-screen flex-col items-center justify-center z-10">
          <div className="relative z-10 text-center opacity-40">
            <span className="font-space text-xs tracking-[0.5em] text-indigo-300 uppercase">
              Section 02
            </span>
          </div>
        </section>

        {/* SECTION 3 */}
        <section className="relative flex w-full h-screen flex-col items-center justify-center z-10">
          <div className="relative z-10 text-center opacity-40">
            <span className="font-space text-xs tracking-[0.5em] text-purple-300 uppercase">
              Section 03
            </span>
          </div>
        </section>

        {/* SECTION 4 */}
        <section className="relative flex w-full h-screen flex-col items-center justify-center z-10">
          <div className="relative z-10 text-center opacity-40">
            <span className="font-space text-xs tracking-[0.5em] text-cyan-300 uppercase">
              Section 04
            </span>
          </div>
        </section>

        {/* SECTION 5 */}
        <section className="relative flex w-full h-screen flex-col items-center justify-center z-10">
          <div className="relative z-10 text-center opacity-40">
            <span className="font-space text-xs tracking-[0.5em] text-indigo-300 uppercase">
              Section 05
            </span>
          </div>
        </section>

        {/* SECTION 6 */}
        <section className="relative flex w-full h-screen flex-col items-center justify-center z-10">
          <div className="relative z-10 text-center opacity-40">
            <span className="font-space text-xs tracking-[0.5em] text-slate-500 uppercase">
              Section 06
            </span>
          </div>
        </section>
      </div>
    </ReactLenis>
  );
}
