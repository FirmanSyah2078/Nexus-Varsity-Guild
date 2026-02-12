// src/components/ui/global-background.tsx
import React from "react";

export default function Galaxyackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* 1. GLOBAL ATMOSPHERE & STARS */}
      <div className="absolute inset-0 z-0">
        {/* Texture Noise Halus */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-20"></div>

        {/* Bintang-bintang */}
        <div className="absolute top-[10%] left-[20%] size-0.5 bg-white rounded-full animate-pulse shadow-[0_0_8px_white]" />
        <div className="absolute top-[40%] left-[80%] size-1 bg-white rounded-full animate-pulse delay-700 shadow-[0_0_10px_white]" />
        <div className="absolute top-[70%] left-[15%] size-0.5 bg-white rounded-full animate-pulse delay-300 shadow-[0_0_8px_white]" />
        <div className="absolute top-[25%] left-[50%] size-0.5 bg-white rounded-full animate-pulse delay-500 shadow-[0_0_8px_white]" />
        <div className="absolute top-[60%] right-[10%] size-0.5 bg-indigo-200 rounded-full animate-pulse delay-200" />
      </div>

      {/* 2. THE GIANT NEBULA CANVAS */}
      <div className="absolute inset-0 w-full h-full z-0">
        {/* HERO ATMOSPHERE */}
        <div className="absolute top-[-10vh] left-1/2 -translate-x-1/2 w-[120vw] h-screen bg-[radial-gradient(ellipse_at_center,rgba(49,46,129,0.2)_0%,rgba(17,24,39,0)_70%)] blur-[120px]" />

        {/* Highlight Tengah */}
        <div className="absolute top-[10vh] left-1/2 -translate-x-1/2 w-[60vw] h-[60vh] bg-[radial-gradient(circle,rgba(79,70,229,0.1)_0%,transparent_60%)] blur-[100px]" />

        {/* SISA SECTION NEBULA */}
        <div className="absolute top-[80vh] left-[-20%] w-screen h-screen bg-[radial-gradient(circle,rgba(88,28,135,0.2)_0%,transparent_70%)] blur-[150px]" />
        <div className="absolute top-[180vh] right-[-20%] w-screen h-screen bg-[radial-gradient(circle,rgba(6,182,212,0.15)_0%,transparent_70%)] blur-[150px]" />
        <div className="absolute top-[280vh] left-[20%] w-[80vw] h-[80vh] bg-[radial-gradient(circle,rgba(67,56,202,0.2)_0%,transparent_70%)] blur-[150px]" />
      </div>
    </div>
  );
}