"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  ShieldCheck,
  Zap,
  Globe,
  PlayCircle,
  Code2,       // Icon untuk Collaborative Learning
  Gamepad2,    // Icon untuk Break Room
  Rocket,      // Icon untuk Project Showcase
  LifeBuoy,    // Icon untuk Code Clinic
  Database,     // Icon untuk Resource Hub
  Users,       // Icon untuk Community/Guild
  Cpu,         // Icon untuk System/Sentinel
  Server,      // Icon Infrastructure
  Lock,        // Icon Security
  Terminal,    // Icon Native
  Box,         // Icon Frameworks
  Palette,     // Icon Styling/Design
  Layers,      // Icon Stack
  ArrowRightLeft // Icon Evolution
} from "lucide-react";
import { Meteors } from "@/components/magicui/meteors";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

export default function LandingPage() {
  return (
    <div className="flex flex-col items-center w-full overflow-x-hidden bg-background text-foreground">
      
      <section className="relative flex w-full h-[calc(100vh-64px)] min-h-150 flex-col items-center justify-center overflow-hidden">
        {/* --- LAYER 0: DEEP SPACE BACKGROUND --- */}
        <div className="absolute inset-0 bg-linear-to-b from-background via-indigo-950/10 to-background z-0" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 h-125 w-125 rounded-full bg-indigo-600/20 blur-[120px] opacity-30" />

        {/* --- LAYER 1: METEORS --- */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          <Meteors number={20} />
        </div>

        {/* --- LAYER 0: ORNAMEN (UKURAN & POSISI DIPERBAIKI) --- */}
        <div className="absolute inset-0 w-full h-full pointer-events-none z-10">
            
            {/* KIRI: PLANET */}
            <div className="hidden md:block absolute left-0 top-[65%] -translate-y-1/2 -translate-x-[20%] w-50 lg:w-70 xl:w-87.5 opacity-90 transition-all duration-1000 ease-out">
               <div className="animate-float">
                  <DotLottieReact src="animations/Planet.lottie" loop autoplay />
               </div>
            </div>

            {/* KANAN: ASTRONOT */}
            <div className="hidden md:block absolute right-0 top-[20%] translate-x-[10%] w-45 lg:w-55 xl:w-70 opacity-90 transition-all duration-1000 ease-out hover:scale-105 hover:-rotate-12">
               <div className="animate-[float_8s_ease-in-out_infinite_reverse]">
                  <DotLottieReact src="animations/Astronaut.lottie" loop autoplay />
               </div>
            </div>
        </div>

        {/* --- LAYER 3: CENTER CONTENT --- */}
        <div className="relative z-20 flex flex-col items-center text-center px-2 w-full max-w-5xl mx-auto">
          {/* BADGE */}
          <div className="mb-8 inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs sm:text-sm font-medium text-indigo-400 backdrop-blur-md shadow-[0_0_15px_rgba(99,102,241,0.3)] animate-fade-in-down">
            <Rocket className="mr-2 size-3.5" />
            <span>Future Ready v1.0</span>
          </div>

          {/* HEADLINE */}
          <div className="flex flex-col gap-2 w-full">
            <h2 className="font-space font-extrabold tracking-tight leading-tight text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl bg-linear-to-r from-white via-indigo-100 to-indigo-200 bg-clip-text text-transparent drop-shadow-sm transition-all duration-700">
              Technology Weaves Your Wildest Dreams
            </h2>
            <h3 className="font-space font-bold tracking-wide leading-tight text-l sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl text-muted-foreground/90 transition-all duration-700">
              Securely Anchored Amongst the Stars
            </h3>
          </div>

          {/* SUB-HEADLINE */}
          <p className="mt-7 max-w-xl lg:max-w-2xl mx-auto font-onest text-sm sm:text-base md:text-lg leading-relaxed text-muted-foreground/80">
            Where creativity meets technology. One account grants you unlimited
            access to learn, collaborate, and find your frequency in a verified
            ecosystem.
          </p>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center w-full transition-all duration-500">
            <Link href="/explore" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto h-12 rounded-full px-8 font-onest font-semibold text-base bg-indigo-600 hover:bg-indigo-500 text-white shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] hover:scale-105 transition-all duration-300 group"
              >
                Explore Nexus
                <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/start" className="w-full sm:w-auto">
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto h-12 rounded-full px-8 font-onest font-medium text-base border-white/10 bg-white/5 backdrop-blur-sm text-white/90 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300"
              >
                <PlayCircle className="mr-2 size-4" />
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE IT STUDENT SANCTUARY */}
      <section className="relative z-10 w-full py-20 lg:py-32 overflow-hidden border-y border-zinc-200 dark:border-white/5 bg-zinc-50/50 dark:bg-zinc-900/20">
        
        {/* --- BACKGROUND DECORATION --- */}
        {/* Glow hanya aktif di Dark Mode agar Light Mode tetap bersih */}
        <div className="absolute -z-10 top-[20%] right-[10%] w-75 h-75 bg-indigo-600/10 blur-[100px] rounded-full pointer-events-none opacity-0 dark:opacity-100" />
        <div className="absolute -z-10 bottom-[10%] left-[5%] w-62.5 h-62.5 bg-blue-600/10 blur-[100px] rounded-full pointer-events-none opacity-0 dark:opacity-100" />

        <div className="container mx-auto px-6 max-w-300">
          
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-space text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white">
              Designed for the <span className="text-indigo-600 dark:text-indigo-400">IT Student Journey</span>
            </h2>
            <p className="font-onest text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Satu frekuensi, satu tujuan. Kami membangun ekosistem lengkap untuk mendukung keseharian akademik, pengembangan skill, hingga waktu istirahatmu.
            </p>
          </div>

          {/* GRID 3x2 (6 KARTU) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">

            {/* CARD 1: COLLABORATIVE LEARNING */}
            {/* PERBAIKAN CARD THEME:
                - bg-white: Putih solid di Light Mode.
                - dark:bg-white/5: Glassmorphism di Dark Mode.
                - border-zinc-200: Border abu halus di Light Mode.
            */}
            <div className="group relative p-8 rounded-2xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-white/5 shadow-sm dark:shadow-none hover:shadow-md dark:hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-500/10 p-3 text-blue-600 dark:text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Code2 className="size-6" />
              </div>
              <h3 className="mb-3 font-space text-xl font-bold text-zinc-900 dark:text-white">Collaborative Learning</h3>
              <p className="font-onest text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Bukan kuliah kaku. Diskusikan error koding, bedah teknologi terbaru, dan asah tajam logikamu bersama teman satu frekuensi.
              </p>
            </div>

            {/* CARD 2: VERIFIED ECOSYSTEM */}
            <div className="group relative p-8 rounded-2xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-white/5 shadow-sm dark:shadow-none hover:shadow-md dark:hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-emerald-100 dark:bg-emerald-500/10 p-3 text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <ShieldCheck className="size-6" />
              </div>
              <h3 className="mb-3 font-space text-xl font-bold text-zinc-900 dark:text-white">Verified Ecosystem</h3>
              <p className="font-onest text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Komunitas sehat dimulai dari data valid. Sistem Sentinel memastikan lingkungan aman tanpa akun anonim, khusus mahasiswa terverifikasi.
              </p>
            </div>

            {/* CARD 3: THE BREAK ROOM */}
            <div className="group relative p-8 rounded-2xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-white/5 shadow-sm dark:shadow-none hover:shadow-md dark:hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-purple-100 dark:bg-purple-500/10 p-3 text-purple-600 dark:text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
                <Gamepad2 className="size-6" />
              </div>
              <h3 className="mb-3 font-space text-xl font-bold text-zinc-900 dark:text-white">The Break Room</h3>
              <p className="font-onest text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Coding butuh istirahat. Temukan teman mabar santai atau obrolan ringan untuk melepas penat sejenak dari layar terminal. &ldquo;Work hard, play chill.&rdquo;
              </p>
            </div>

            {/* CARD 4: PROJECT SHOWCASE */}
            <div className="group relative p-8 rounded-2xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-white/5 shadow-sm dark:shadow-none hover:shadow-md dark:hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-orange-100 dark:bg-orange-500/10 p-3 text-orange-600 dark:text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <Rocket className="size-6" />
              </div>
              <h3 className="mb-3 font-space text-xl font-bold text-zinc-900 dark:text-white">Project Showcase</h3>
              <p className="font-onest text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Jangan biarkan kodemu membusuk di localhost. Pamerkan karyamu di panggung komunitas dan dapatkan feedback atau apresiasi.
              </p>
            </div>

            {/* CARD 5: CODE CLINIC */}
            <div className="group relative p-8 rounded-2xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-white/5 shadow-sm dark:shadow-none hover:shadow-md dark:hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-red-100 dark:bg-red-500/10 p-3 text-red-600 dark:text-red-400 group-hover:bg-red-500 group-hover:text-white transition-colors">
                <LifeBuoy className="size-6" />
              </div>
              <h3 className="mb-3 font-space text-xl font-bold text-zinc-900 dark:text-white">Code Clinic</h3>
              <p className="font-onest text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Buntu dengan Error? Zona anti-bullying di mana senior dan mentor siap membantu membedah logikamu tanpa menghakimi.
              </p>
            </div>

            {/* CARD 6: RESOURCE HUB */}
            <div className="group relative p-8 rounded-2xl border border-zinc-200 dark:border-white/5 bg-white dark:bg-white/5 shadow-sm dark:shadow-none hover:shadow-md dark:hover:bg-white/10 hover:-translate-y-1 transition-all duration-300">
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-cyan-100 dark:bg-cyan-500/10 p-3 text-cyan-600 dark:text-cyan-400 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                <Database className="size-6" />
              </div>
              <h3 className="mb-3 font-space text-xl font-bold text-zinc-900 dark:text-white">Resource Hub</h3>
              <p className="font-onest text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                Gudang senjata mahasiswa TI. Akses ribuan referensi, modul kuliah, e-book, dan tools gratis yang dikurasi oleh komunitas.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: THE CORE DUALITY (NVG vs SENTINEL) */}
      <section className="relative w-full overflow-hidden border-y border-white/5 bg-background">
        
        {/* Grid Full Screen tapi lebih proporsional */}
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
          
          {/* ========================================= */}
          {/* PANEL KIRI: THE GUILD (NVG) - Human Side  */}
          {/* ========================================= */}
          {/* Gunakan bg-transparent agar warna 'Deep Space' dari body tembus/menyatu */}
          <div className="relative flex flex-col p-8 lg:p-16 lg:border-r border-white/5">
            
            {/* Pattern Dots: Opacity sangat rendah (5%) agar subtle */}
            <div className="absolute inset-0 bg-[radial-gradient(rgba(99,102,241,0.2)_1px,transparent_1px)] bg-size-[20px_20px] opacity-20" />
            
            {/* Ambient Glow Ungu sangat halus */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="relative z-10 max-w-lg mx-auto lg:mx-0">
              {/* Tagline Kecil & Rapi */}
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 w-fit">
                <Users className="size-4 text-indigo-400" />
                <span className="font-space font-medium tracking-wide text-xs text-indigo-300 uppercase">The Community</span>
              </div>

              {/* Headline: Tidak Terlalu Besar (4xl-5xl) */}
              <h2 className="font-space text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-foreground">
                Nexus Varsity <br/>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-purple-400">Guild</span>
              </h2>

              {/* Deskripsi: Font Onest, Warna Muted */}
              <p className="font-onest text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                Lebih dari sekadar grup chat. NVG adalah <span className="text-foreground font-medium">&ldquo;Digital Campus Simulation&rdquo;</span> yang dirancang untuk mensimulasikan dinamika dunia profesional.
              </p>

              {/* List Point: Lebih Minimalis */}
              <ul className="space-y-4 font-onest text-base text-muted-foreground/80">
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-indigo-500 shadow-[0_0_8px_#6366f1]" />
                  <span>Zona Akademik & Peer-Tutoring</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
                  <span>Kolaborasi Lintas Angkatan</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="h-1.5 w-1.5 rounded-full bg-pink-500 shadow-[0_0_8px_#ec4899]" />
                  <span>Membangun Jejaring Profesional</span>
                </li>
              </ul>
            </div>
          </div>


          {/* ========================================= */}
          {/* PANEL KANAN: THE SENTINEL (SYSTEM) - Machine Side */}
          {/* ========================================= */}
          {/* Gunakan bg-card/20 atau hitam transparan sangat tipis untuk membedakan area */}
          <div className="relative flex flex-col p-8 lg:p-16 bg-black/20">
            
            {/* Pattern Grid: Sesuai request (Kotak-kotak halus) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-size-[32px_32px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            
            {/* CPU Pulse: Diperhalus opacity-nya */}
            <div className="absolute top-10 right-10 opacity-10 pointer-events-none">
               <Cpu className="size-48 text-emerald-500 animate-pulse" />
            </div>

            <div className="relative z-10 max-w-lg mx-auto lg:mx-0">
               {/* Tagline */}
              <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 w-fit">
                <Server className="size-4 text-emerald-400" />
                <span className="font-space font-medium tracking-wide text-xs text-emerald-300 uppercase">The Engine</span>
              </div>

              {/* Headline */}
              <h2 className="font-space text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-foreground">
                NVI Sentinel <br/>
                <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">System</span>
              </h2>

              {/* Deskripsi */}
              <p className="font-onest text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                Middleware cerdas sebagai <span className="text-foreground font-medium">&ldquo;Single Source of Truth&rdquo;</span>. 
                Menghubungkan Database Akademik dengan Discord API secara real-time.
              </p>

              {/* Tech Stack Grid: Lebih kecil, lebih rapi (Card Style) */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
                   <div className="text-[10px] text-emerald-400 font-mono mb-1 uppercase tracking-wider">Frontend</div>
                   <div className="font-space font-semibold text-lg text-foreground">Next.js 14</div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
                   <div className="text-[10px] text-yellow-400 font-mono mb-1 uppercase tracking-wider">Runtime</div>
                   <div className="font-space font-semibold text-lg text-foreground">Node.js</div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
                   <div className="text-[10px] text-blue-400 font-mono mb-1 uppercase tracking-wider">Database</div>
                   <div className="font-space font-semibold text-lg text-foreground">MongoDB</div>
                </div>
                <div className="p-4 rounded-lg bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-colors backdrop-blur-sm">
                   <div className="text-[10px] text-purple-400 font-mono mb-1 uppercase tracking-wider">Integration</div>
                   <div className="font-space font-semibold text-lg text-foreground">Discord API</div>
                </div>
              </div>

              {/* Security Badge: Simpel, satu baris */}
              <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground font-mono opacity-80">
                 <Lock className="size-3 text-emerald-500" />
                 <span>OAuth2 Secure Authentication Protocol</span>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* SECTION 4: THE TECH CONSTELLATION         */}
      <section className="relative w-full py-20 lg:py-32 overflow-hidden border-b border-white/5 bg-background">
        
        {/* Dekorasi Background Grid Halus */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        <div className="container mx-auto px-6 max-w-300 relative z-10">
          
          {/* Header Section */}
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 w-fit mx-auto mb-4">
               <Layers className="size-4 text-blue-400" />
               <span className="font-space font-medium tracking-wide text-xs text-blue-300 uppercase">Our Arsenal</span>
            </div>
            <h2 className="font-space text-3xl md:text-5xl font-bold tracking-tight text-white">
              Mastering the <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-cyan-400">Digital Spectrum</span>
            </h2>
            <p className="font-onest text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Kami tidak hanya belajar cara menulis kode, tapi memahami evolusinya. Dari fondasi Native yang kokoh hingga kecepatan Framework modern.
            </p>
          </div>

          {/* GRID LAYOUT: 3 Kategori Utama */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* COLUMN 1: THE FOUNDATION (NATIVE) */}
            <div className="group relative flex flex-col h-full p-8 rounded-2xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-500">
               <div className="mb-6 inline-flex items-center justify-center size-12 rounded-xl bg-orange-500/10 border border-orange-500/20 text-orange-400">
                  <Terminal className="size-6" />
               </div>
               
               <h3 className="font-space text-2xl font-bold text-white mb-2">Native Roots</h3>
               <p className="font-onest text-zinc-500 text-sm mb-8">
                 Memahami logika dasar adalah kunci. Sebelum framework, kami menguasai bahasanya.
               </p>

               {/* Tech List */}
               <div className="space-y-4 mt-auto">
                  {/* Item 1: HTML/CSS (Orange Pulse) */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-black/40 border border-white/5 group/item hover:border-orange-500/30 transition-colors">
                     <div className="flex items-center gap-3">
                        {/* ANIMASI PULSE (Breathing) */}
                        <div className="size-2 rounded-full bg-orange-500 shadow-[0_0_8px_rgba(249,115,22,0.8)] animate-pulse" />
                        <span className="font-space font-medium text-zinc-300 group-hover/item:text-orange-200 transition-colors">HTML5 & CSS3</span>
                     </div>
                     <span className="text-xs text-zinc-600 font-mono">Structure</span>
                  </div>
                  {/* Item 2: JS (Yellow Pulse) */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-black/40 border border-white/5 group/item hover:border-yellow-500/30 transition-colors">
                     <div className="flex items-center gap-3">
                        <div className="size-2 rounded-full bg-yellow-500 shadow-[0_0_8px_rgba(234,179,8,0.8)] animate-pulse" />
                        <span className="font-space font-medium text-zinc-300 group-hover/item:text-yellow-200 transition-colors">JavaScript (ES6+)</span>
                     </div>
                     <span className="text-xs text-zinc-600 font-mono">Logic</span>
                  </div>
                  {/* Item 3: PHP (Indigo Pulse) */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-black/40 border border-white/5 group/item hover:border-indigo-500/30 transition-colors">
                     <div className="flex items-center gap-3">
                        <div className="size-2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)] animate-pulse" />
                        <span className="font-space font-medium text-zinc-300 group-hover/item:text-indigo-200 transition-colors">PHP Native</span>
                     </div>
                     <span className="text-xs text-zinc-600 font-mono">Backend</span>
                  </div>
               </div>
            </div>

            {/* COLUMN 2: THE ENGINES (FRAMEWORKS) */}
            {/* Highlighted Column */}
            <div className="group relative flex flex-col h-full p-8 rounded-2xl border border-indigo-500/20 bg-indigo-950/10 hover:bg-indigo-950/20 hover:border-indigo-500/40 transition-all duration-500 shadow-[0_0_40px_-10px_rgba(99,102,241,0.1)]">
               
               <div className="absolute top-4 right-4 px-2 py-1 rounded text-[10px] font-bold bg-indigo-500 text-white uppercase tracking-wider ">
                  Current Standard
               </div>

               <div className="mb-6 inline-flex items-center justify-center size-12 rounded-xl bg-indigo-500/20 border border-indigo-500/30 text-indigo-300">
                  <Box className="size-6" />
               </div>
               
               <h3 className="font-space text-2xl font-bold text-white mb-2">Modern Frameworks</h3>
               <p className="font-onest text-indigo-200/60 text-sm mb-8">
                 Evolusi kecepatan dan skalabilitas. Membangun aplikasi kompleks dengan efisien.
               </p>

               <div className="space-y-4 mt-auto">
                  <div className="flex items-center gap-2 text-xs text-indigo-400/50 font-mono mb-2 pl-1">
                     <ArrowRightLeft className="size-3" />
                     <span>Evolved from Native</span>
                  </div>

                  {/* Item 1: Next.js (White RADAR Effect) */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-indigo-900/20 border border-indigo-500/20 group/item hover:bg-indigo-900/40 transition-colors">
                     <div className="flex items-center gap-3">
                        {/* ANIMASI PING (Radar) - Terkesan "Live" */}
                        <span className="relative flex size-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                          <span className="relative inline-flex rounded-full size-2.5 bg-white shadow-[0_0_8px_white]"></span>
                        </span>
                        <span className="font-space text-white group-hover/item:text-indigo-100 transition-colors">Next.js & React</span>
                     </div>
                     <span className="text-xs text-indigo-300 font-mono">Frontend</span>
                  </div>

                  {/* Item 2: Laravel (Red RADAR Effect) */}
                  <div className="flex items-center justify-between p-3 rounded-lg bg-indigo-900/20 border border-indigo-500/20 group/item hover:bg-indigo-900/40 transition-colors">
                     <div className="flex items-center gap-3">
                         {/* ANIMASI PING (Radar) */}
                        <span className="relative flex size-2.5">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                          <span className="relative inline-flex rounded-full size-2.5 bg-red-500 shadow-[0_0_8px_red]"></span>
                        </span>
                        <span className="font-space group-hover/item:text-red-100 transition-colors">Laravel</span>
                     </div>
                     <span className="text-xs text-indigo-300 font-mono">Fullstack</span>
                  </div>
               </div>
            </div>

            {/* COLUMN 3: THE EVOLUTION (STYLING & TOOLS) */}
            <div className="group relative flex flex-col h-full p-8 rounded-2xl border border-white/5 bg-zinc-900/20 hover:bg-zinc-900/40 hover:border-white/10 transition-all duration-500">
               <div className="mb-6 inline-flex items-center justify-center size-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                  <Palette className="size-6" />
               </div>
               
               <h3 className="font-space text-2xl font-bold text-white mb-2">Styling & Tools</h3>
               <p className="font-onest text-zinc-500 text-sm mb-8">
                 Transformasi cara kita mendesain dan mengelola kode dalam tim.
               </p>

               <div className="space-y-4 mt-auto">
                  {/* Tailwind Highlight */}
                  <div className="relative overflow-hidden p-3 rounded-lg bg-cyan-950/30 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors group/item">
                     <div className="flex items-center justify-between relative z-10">
                        <div className="flex items-center gap-3">
                           {/* Cyan Radar */}
                           <span className="relative flex size-2.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full size-2.5 bg-cyan-400 shadow-[0_0_8px_cyan]"></span>
                           </span>
                           <span className="font-space font-medium text-zinc-200 group-hover/item:text-cyan-100 transition-colors">Tailwind CSS</span>
                        </div>
                        <span className="text-xs text-cyan-500 font-mono">Utility-First</span>
                     </div>
                     <div className="absolute -bottom-4 -right-4 size-16 bg-cyan-500/20 blur-xl rounded-full" />
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-black/40 border border-white/5 group/item hover:border-orange-600/30 transition-colors">
                     <div className="flex items-center gap-3">
                        <div className="size-2 rounded-full bg-orange-600 shadow-[0_0_8px_rgba(234,88,12,0.8)] animate-pulse" />
                        <span className="font-space font-medium text-zinc-300 group-hover/item:text-orange-200 transition-colors">Git & GitHub</span>
                     </div>
                     <span className="text-xs text-zinc-600 font-mono">Vs Code</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-black/40 border border-white/5 group/item hover:border-purple-500/30 transition-colors">
                     <div className="flex items-center gap-3">
                        <div className="size-2 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)] animate-pulse" />
                        <span className="font-space font-medium text-zinc-300 group-hover/item:text-purple-200 transition-colors">Figma</span>
                     </div>
                     <span className="text-xs text-zinc-600 font-mono">Creative</span>
                  </div>
               </div>
            </div>

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
              <h3 className="font-space text-xl font-bold">
                Validasi Otomatis
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                Tidak ada lagi pengecekan manual. Sistem Sentinel memverifikasi
                data anggota secara real-time dengan akurasi tinggi.
              </p>
            </div>
            <div className="group flex flex-col items-start space-y-4 rounded-xl border bg-background p-6 hover:shadow-lg transition-all duration-300">
              <div className="rounded-lg bg-emerald-500/10 p-3 text-emerald-500 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                <Zap className="size-6" />
              </div>
              <h3 className="font-space text-xl font-bold">Respon Instan</h3>
              <p className="leading-relaxed text-muted-foreground">
                Dibangun di atas arsitektur Serverless. Bot Discord dan Web
                Dashboard merespon permintaan dalam hitungan milidetik.
              </p>
            </div>
            <div className="group flex flex-col items-start space-y-4 rounded-xl border bg-background p-6 hover:shadow-lg transition-all duration-300">
              <div className="rounded-lg bg-blue-500/10 p-3 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-colors">
                <Globe className="size-6" />
              </div>
              <h3 className="font-space text-xl font-bold">
                Ekosistem Terpusat
              </h3>
              <p className="leading-relaxed text-muted-foreground">
                Satu akun untuk semua akses. Terintegrasi penuh dari Discord
                Role hingga akses Database khusus anggota.
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
              Pastikan data kamu sudah terdaftar sebelum melakukan verifikasi di
              Discord.
            </p>
            <div className="pt-4">
              <Link
                href="/dashboard"
                className="text-indigo-500 underline-offset-4 hover:underline"
              >
                Hubungi Admin jika ada kendala &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
