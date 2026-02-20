"use client";

import Link from "next/link";
import { Meteors } from "@/components/magicui/meteors";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ArrowRight, PlayCircle, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    // FIX LAYOUT HERO (SPESIAL):
    // 1. pt-20 md:pt-32: INI KUNCINYA. Kita dorong konten ke bawah secara manual biar visualnya pas di tengah mata.
    // 2. min-h-[calc(100vh-64px)]: Tinggi minimal selayar (minus navbar).
    // 3. px-4 md:px-16... : Padding samping tetap pakai standar Pro agar batas kirinya lurus dengan section bawah.
    <section className="relative flex w-full min-h-[calc(100vh-64px)] flex-col items-center justify-center overflow-hidden z-10 px-4 md:px-16 lg:px-24 xl:px-32 pt-20 md:pt-32 pb-10">
      {/* Meteor (Background) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <Meteors number={20} />
      </div>

      {/* Planet & Astronaut (Background Animation) */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
        <div className="hidden md:block absolute left-0 top-[65%] -translate-y-1/2 -translate-x-[20%] w-50 lg:w-70 xl:w-87.5 opacity-90 transition-all duration-1000 ease-out">
          <div className="animate-float">
            <DotLottieReact src="animations/Planet.lottie" loop autoplay />
          </div>
        </div>
        <div className="hidden md:block absolute right-0 top-[20%] translate-x-[10%] w-45 lg:w-55 xl:w-70 opacity-90 transition-all duration-1000 ease-out hover:scale-105 hover:-rotate-12">
          <div className="animate-[float_8s_ease-in-out_infinite_reverse]">
            <DotLottieReact src="animations/Astronaut.lottie" loop autoplay />
          </div>
        </div>
      </div>

      {/* CONTENT WRAPPER */}
      {/* max-w-5xl: Agar konten tidak terlalu melebar (Pecah) saat di-zoom out */}
      <div className="relative z-20 flex flex-col items-center text-center w-full max-w-5xl mx-auto">
        {/* BADGE */}
        <div className="mb-6 sm:mb-8 inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 sm:px-4 sm:py-1.5 text-xs sm:text-sm font-medium text-indigo-400 backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.3)] animate-fade-in-down">
          <Rocket className="mr-2 size-3 sm:size-3.5" />
          <span>Future Ready v1.0</span>
        </div>

        {/* CONTAINER: max-w-5xl sesuai request */}
        <div className="flex flex-col gap-4 w-full max-w-5xl mx-auto">
          {/* 1. HEADLINE UTAMA */}
          <h2
            className="font-space font-bold leading-[1.1] tracking-tight
              text-[15px] sm:text-[28px] md:text-[34px] lg:text-[40px] xl:text-[48px]
              bg-linear-to-r from-white via-indigo-100 to-indigo-200 bg-clip-text text-transparent drop-shadow-sm transition-all duration-700"
          >
            Technology Weaves Your Wildest Dreams
          </h2>

          {/* 2. SUB-HEADLINE */}
          <h3
            className="font-space font-bold tracking-wide leading-tight
              text-[13px] sm:text-[22px] md:text-[30px] lg:text-[35px] xl:text-[40px]
              text-muted-foreground/90 transition-all duration-700"
          >
            Securely Anchored Amongst the Stars
          </h3>
        </div>

        {/* PARAGRAPH */}
        <div className="w-full max-w-70 sm:max-w-lg md:max-w-2xl lg:max-w-3xl mx-auto mt-4 sm:mt-6 md:mt-8 transition-all duration-700">
          <p
            className="font-onest leading-relaxed text-muted-foreground/80 text-balance
              text-[10px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]"
          >
            Where creativity meets technology. One account grants you unlimited
            access to learn, collaborate, and find your frequency in a verified
            ecosystem.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 flex flex-row gap-3 sm:gap-4 md:gap-6 items-center justify-center w-full transition-all duration-500">
          {/* BUTTON 1: GET STARTED */}
          <Link href="/signup" className="w-auto">
            <Button
              variant="outline"
              // PERUBAHAN DISINI (HEIGHT & PADDING):
              // - Mobile: h-[36px] (Tetap)
              // - Tablet: h-[40px] (Dikecilkan dikit dari 44)
              // - Laptop/Desktop: h-[48px] (FIX di 48px, tidak lagi 56px)
              // - Padding: Disesuaikan biar ga terlalu lebar (px-8 cukup)
              className="h-9 sm:h-10 md:h-11 lg:h-12
                 px-4 sm:px-5 md:px-6 lg:px-8
                 rounded-full border-white/10 bg-white/5 backdrop-blur-sm text-white/90
                 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300
                 font-onest font-medium"
            >
              {/* TEXT SIZE: Mentok di 16px (sebelumnya 18px) */}
              <span className="text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] flex items-center">
                {/* ICON SIZE: Mentok di size-4.5 (18px) */}
                <PlayCircle className="mr-1.5 sm:mr-2 size-3 sm:size-3.5 md:size-4 lg:size-4.5" />
                Get Started
              </span>
            </Button>
          </Link>

          {/* BUTTON 2: EXPLORE NEXUS */}
          <Link
            href="https://discord.gg/link-invite-kamu"
            target="_blank"
            className="w-auto"
          >
            <Button
              // SAMAKAN UKURAN DENGAN BUTTON 1
              className="h-9 sm:h-10 md:h-11 lg:h-12
                 px-4 sm:px-5 md:px-6 lg:px-8
                 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white
                 shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)]
                 hover:scale-105 transition-all duration-300 group
                 font-onest font-semibold"
            >
              {/* TEXT SIZE */}
              <span className="text-[11px] sm:text-[13px] md:text-[14px] lg:text-[16px] flex items-center">
                Explore Nexus
                {/* ICON SIZE & ANIMATION */}
                <ArrowRight className="ml-1.5 sm:ml-2 size-3 sm:size-3.5 md:size-4 lg:size-4.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
