"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShieldCheck, ChevronRight, Activity } from "lucide-react";

export default function LaunchSection() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center py-24 md:py-32 z-10 px-4 md:px-16 lg:px-24 xl:px-32">
      {/* Container utama rata tengah */}
      <div className="flex flex-col items-center text-center justify-center relative z-20 max-w-4xl mx-auto">
        {/* 1. BADGE PILL (FIXED) */}
        {/* SEBELUMNYA SALAH: Lupa wrapper 'inline-flex ... rounded-full' disini. */}
        {/* SEKARANG BENAR: Icon & Teks dibungkus dalam satu kotak kapsul. */}
        <div className="inline-flex items-center justify-center px-3 py-1 mb-6 rounded-full border border-indigo-500/30 bg-indigo-500/10 backdrop-blur-md">
          {/* Icon Wrapper (Activity + Ping) */}
          <div className="relative flex items-center justify-center mr-2 md:mr-2.5 size-3.5 md:size-4">
            {/* Gelombang luar (Ping) */}
            <span className="absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-60 animate-ping"></span>
            {/* Inti (Activity) */}
            <Activity
              className="relative z-10 text-indigo-300 drop-shadow-[0_0_8px_rgba(165,180,252,0.9)]"
              strokeWidth={2.5}
            />
          </div>

          {/* Teks Badge */}
          <span className="font-space text-[10px] md:text-xs font-medium tracking-[0.25em] text-indigo-300 uppercase">
            System Ready
          </span>
        </div>

        {/* 2. MAIN TITLE */}
        <h2 className="font-space text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
          Ready to{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-300 to-indigo-500 drop-shadow-sm">
            Initialize?
          </span>
        </h2>

        {/* 3. DESCRIPTION */}
        <p className="font-onest text-sm md:text-base text-zinc-400 leading-relaxed max-w-2xl mx-auto mb-10">
          Join the vanguard of developers building the future of the Nexus
          ecosystem. The modules are primed, and your seat is waiting.
        </p>

        {/* 4. BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          {/* Primary Button */}
          <Link href="/login" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto h-12 px-8 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-space font-bold text-base tracking-wide shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] transition-all duration-300 group"
            >
              <ShieldCheck className="mr-2 size-5 transition-transform group-hover:scale-110" />
              Authenticate
            </Button>
          </Link>

          {/* Secondary Button */}
          <Link href="/about" className="w-full sm:w-auto">
            <Button
              variant="outline"
              size="lg"
              className="w-full sm:w-auto h-12 px-8 rounded-lg border-white/10 bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white font-onest font-medium text-base transition-all duration-300 group"
            >
              View Protocols{" "}
              <ChevronRight className="ml-1 size-4 text-zinc-500 group-hover:text-white transition-colors" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
