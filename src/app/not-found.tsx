import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, WifiOff } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-background text-foreground">
      
      {/* --- BACKGROUND EFFECTS --- */}
      
      {/* 1. Grid Pattern */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      
      {/* 2. Glowing Orb (Fixed sizes to valid Tailwind classes) */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/20 blur-[100px] animate-pulse md:h-96 md:w-96"></div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        
        {/* Glitchy Icon Box */}
        <div className="mb-8 flex items-center justify-center rounded-2xl border border-border/50 bg-background/50 p-6 backdrop-blur-md shadow-2xl">
          <WifiOff className="size-12 text-indigo-500 animate-pulse" />
        </div>

        {/* 404 BIG TEXT (Fixed gradient class) */}
        <h1 className="font-space text-8xl font-bold tracking-tighter sm:text-9xl bg-linear-to-b from-foreground to-foreground/20 bg-clip-text text-transparent select-none">
          404
        </h1>

        {/* Subtitle */}
        <h2 className="mt-4 font-space text-2xl font-medium text-foreground sm:text-3xl">
          Sinyal Hilang
        </h2>

        {/* Description */}
        <p className="mt-4 max-w-md text-muted-foreground text-lg leading-relaxed">
          Koordinat yang kamu tuju tidak ditemukan di dalam sistem Sentinel. 
          Halaman ini mungkin telah dipindahkan ke dimensi lain.
        </p>

        {/* Action Button */}
        <div className="mt-8">
          <Link href="/">
            <Button size="lg" className="rounded-full px-8 gap-2 shadow-lg shadow-indigo-500/20 transition-transform hover:scale-105">
              <ArrowLeft className="size-4" />
              Kembali ke Markas
            </Button>
          </Link>
        </div>

      </div>

      {/* --- DECORATIVE FOOTER --- */}
      <div className="absolute bottom-8 text-xs font-mono text-muted-foreground/50 tracking-widest uppercase">
        System_Error_Code: V0ID_NULL_PTR
      </div>

    </div>
  );
}