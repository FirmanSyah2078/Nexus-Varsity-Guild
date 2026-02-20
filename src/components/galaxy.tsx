"use client";
import React from "react";
import StarField from "@/components/star";

export default function GalaxyBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      
      {/* 1. LAYER BINTANG (UPDATED) */}
      <div className="absolute inset-0 z-0">
        {/* --- UPDATE BAGIAN INI --- */}
        {/* Ubah url eksternal menjadi url lokal ('/images/stardust.png') */}
        <div className="absolute inset-0 bg-[url('/images/stardust.png')] opacity-20"></div>
        
        {/* GUNAKAN STARFIELD DISINI */}
        {/* count={50} artinya akan ada 50 bintang random */}
        <StarField count={40} />

      </div>

      {/* 2. LAYER AURORA (ABSOLUTE - IKUT SCROLL BERSAMA KONTEN) */}
      {/* Kita bungkus dalam div absolute w-full h-full agar posisinya sinkron dengan scrollbar */}
      <div className="absolute top-0 left-0 w-full h-full overflow-visible">
        
        {/* --- HERO (Section 1): INDIGO DEEP --- */}
        {/* Posisi: Paling atas. Pusat cahaya utama. */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[140vw] h-[80vh] bg-[radial-gradient(ellipse_at_center,rgba(49,46,129,0.3)_0%,transparent_70%)] blur-[120px]" />
        <div className="absolute top-[10%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vh] bg-[radial-gradient(circle,rgba(99,102,241,0.15)_0%,transparent_60%)] blur-[100px]" />

        {/* --- TRANSISI HERO KE ECOSYSTEM (JEMBATAN) --- */}
        {/* Menghubungkan Indigo (Hero) ke Purple (Ecosystem). Posisi overlap. */}
        <div className="absolute top-[60vh] left-[-10%] w-[80vw] h-[80vh] bg-[radial-gradient(circle,rgba(76,29,149,0.2)_0%,transparent_70%)] blur-[130px]" />

        {/* --- ECOSYSTEM (Section 2): PURPLE/MYSTIC --- */}
        {/* Cahaya di kanan untuk menyeimbangkan layout */}
        <div className="absolute top-[120vh] right-[-20%] w-screen h-screen bg-[radial-gradient(circle,rgba(109,40,217,0.15)_0%,transparent_60%)] blur-[150px]" />

        {/* --- FEATURES (Section 3): CYAN/TEAL --- */}
        {/* Transisi warna drastis ke Cyan agar section Features terasa fresh */}
        <div className="absolute top-[220vh] left-1/2 -translate-x-1/2 w-[120vw] h-screen bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)] blur-[120px]" />

        {/* --- SHOWCASE (Section 4): BLUE ELECTRIC --- */}
        {/* Cahaya tajam di belakang code editor */}
        <div className="absolute top-[320vh] left-[-20%] w-[90vw] h-[90vh] bg-[radial-gradient(circle,rgba(37, 99, 235, 0.15)_0%,transparent_60%)] blur-[130px]" />

        {/* --- ARSENAL (Section 5): MAGENTA/PINK --- */}
        {/* Penutup di bawah */}
        <div className="absolute top-[400vh] right-[-10%] w-[80vw] h-[80vh] bg-[radial-gradient(circle,rgba(219,39,119,0.1)_0%,transparent_60%)] blur-[150px]" />

        {/* --- LAUNCH (Section 6 - FINAL): GOLDEN HOUR --- */}
        {/* Cahaya Oranye/Emas di tengah bawah sebagai penutup yang hangat & epik */}
        <div className="absolute top-[480vh] left-1/2 -translate-x-1/2 w-screen h-[80vh] bg-[radial-gradient(ellipse_at_bottom,rgba(249,115,22,0.2)_0%,transparent_70%)] blur-[120px]" />

      </div>
    </div>
  );
}