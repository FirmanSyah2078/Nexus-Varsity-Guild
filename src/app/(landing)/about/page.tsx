"use client";

import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Shield, 
  Cpu, 
  Zap, 
  Flag, 
  BookOpen, 
  Code,
  ArrowRight
} from "lucide-react";
import { Meteors } from "@/components/magicui/meteors";

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center w-full min-h-screen bg-background text-foreground overflow-x-hidden">
      
      {/* ========================================= */}
      {/* HERO SECTION: THE PHILOSOPHY              */}
      {/* ========================================= */}
      <section className="relative w-full py-24 lg:py-32 flex flex-col items-center text-center overflow-hidden border-b border-white/5">
        
        {/* Background Deep Space */}
        <div className="absolute inset-0 bg-linear-to-b from-background via-indigo-950/10 to-background z-0" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-100 bg-indigo-500/10 blur-[120px] rounded-full pointer-events-none" />
        
        {/* Meteors */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Meteors number={15} />
        </div>

        <div className="relative z-10 container px-4 max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-800/50 border border-white/10 backdrop-blur-md mx-auto">
             <Flag className="size-3.5 text-indigo-400" />
             <span className="text-xs font-medium text-zinc-300 uppercase tracking-wider">Our Origin Story</span>
          </div>
          
          <h1 className="font-space text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">
            Building the <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 to-cyan-400">Digital Campus</span> <br/> 
            of Tomorrow.
          </h1>
          
          <p className="font-onest text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl mx-auto">
            NVG lahir dari keresahan akan fragmentasi. Kami hadir untuk menyatukan kreativitas, teknologi, dan kolaborasi dalam satu ekosistem terverifikasi.
          </p>
        </div>
      </section>


      {/* ========================================= */}
      {/* SECTION 2: THE PROBLEM & SOLUTION         */}
      {/* ========================================= */}
      <section className="relative w-full py-20 bg-zinc-950/50 border-b border-white/5">
        <div className="container mx-auto px-6 max-w-6xl">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* KIRI: THE CHAOS (Masalah) */}
              <div className="space-y-6">
                 <h2 className="font-space text-3xl font-bold text-white">
                    Berawal dari <span className="text-red-400">Fragmentasi</span>
                 </h2>
                 <p className="font-onest text-zinc-400 leading-relaxed">
                    Sebelum NVG, komunikasi mahasiswa tersebar tanpa arah. Grup WhatsApp yang penuh spam, server Discord tanpa validasi, dan data angkatan yang tidak terdata rapi.
                 </p>
                 <p className="font-onest text-zinc-400 leading-relaxed">
                    Kami menyadari bahwa mahasiswa TI butuh lebih dari sekadar grup chat. Mereka butuh simulasi dunia kerja yang nyata, aman, dan profesional.
                 </p>
                 
                 <div className="flex gap-4 pt-4">
                    <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                       <h4 className="font-bold text-red-400 text-lg mb-1">Unverified</h4>
                       <p className="text-xs text-zinc-500">Banyak akun anonim & intruder.</p>
                    </div>
                    <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                       <h4 className="font-bold text-red-400 text-lg mb-1">Scattered</h4>
                       <p className="text-xs text-zinc-500">Info penting tenggelam.</p>
                    </div>
                 </div>
              </div>

              {/* KANAN: THE ORDER (Solusi) */}
              <div className="relative p-8 rounded-3xl bg-linear-to-br from-indigo-900/20 to-black border border-indigo-500/20 shadow-2xl">
                 <div className="absolute top-0 right-0 p-32 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />
                 
                 <div className="relative z-10 space-y-6">
                    <div className="inline-flex items-center gap-2 text-emerald-400 mb-2">
                       <Zap className="size-5" />
                       <span className="font-bold tracking-wide uppercase text-sm">The Solution</span>
                    </div>
                    <h2 className="font-space text-3xl font-bold text-white">
                       NVI Sentinel <span className="text-indigo-400">System</span>
                    </h2>
                    <p className="font-onest text-zinc-300 leading-relaxed">
                       Sebuah <i>Middleware</i> cerdas yang menghubungkan Database Akademik dengan Discord. Menciptakan ekosistem <b>&ldquo;Single Source of Truth&rdquo;</b>.
                    </p>
                    
                    <ul className="space-y-3 font-onest text-zinc-400">
                       <li className="flex items-center gap-3">
                          <Shield className="size-5 text-emerald-500" />
                          <span>Validasi Identitas Otomatis (NIM & Nama)</span>
                       </li>
                       <li className="flex items-center gap-3">
                          <Cpu className="size-5 text-indigo-500" />
                          <span>Role Management Berbasis Angkatan</span>
                       </li>
                       <li className="flex items-center gap-3">
                          <Users className="size-5 text-blue-500" />
                          <span>Lingkungan Aman & Kondusif</span>
                       </li>
                    </ul>
                 </div>
              </div>

           </div>
        </div>
      </section>


      {/* ========================================= */}
      {/* SECTION 3: GUILD STRUCTURE (TIM)          */}
      {/* ========================================= */}
      <section className="relative w-full py-24 bg-background border-b border-white/5">
         
         <div className="container mx-auto px-6 max-w-6xl">
            <div className="text-center mb-16">
               <h2 className="font-space text-3xl md:text-5xl font-bold text-white mb-4">The Guild Structure</h2>
               <p className="font-onest text-zinc-400 max-w-2xl mx-auto">
                  Berbeda dengan organisasi konvensional, kami mengadopsi struktur fungsional berbasis peran (Role-Based Management).
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
               
               {/* DIVISI 1: THE ARCHITECTS (R&D) */}
               <div className="group relative p-1 rounded-2xl bg-linear-to-b from-white/10 to-transparent hover:from-indigo-500/50 transition-all duration-500">
                  <div className="relative h-full bg-zinc-900/80 backdrop-blur-xl p-8 rounded-xl border border-white/5 flex flex-col items-center text-center">
                     <div className="mb-6 p-4 rounded-full bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                        <Code className="size-8" />
                     </div>
                     <h3 className="font-space text-xl font-bold text-white mb-2">The Architects</h3>
                     <p className="text-xs font-mono text-indigo-400 mb-4 uppercase tracking-widest">Tim R&D Mandiri</p>
                     <p className="font-onest text-sm text-zinc-400 leading-relaxed">
                        Bertanggung jawab atas &ldquo;Jantung&rdquo; sistem. Mengelola kode NVI Sentinel, database, dan keamanan server.
                     </p>
                  </div>
               </div>

               {/* DIVISI 2: THE GUARDIANS (MODERATOR) */}
               <div className="group relative p-1 rounded-2xl bg-linear-to-b from-white/10 to-transparent hover:from-emerald-500/50 transition-all duration-500">
                  <div className="relative h-full bg-zinc-900/80 backdrop-blur-xl p-8 rounded-xl border border-white/5 flex flex-col items-center text-center">
                     <div className="mb-6 p-4 rounded-full bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                        <Shield className="size-8" />
                     </div>
                     <h3 className="font-space text-xl font-bold text-white mb-2">The Guardians</h3>
                     <p className="text-xs font-mono text-emerald-400 mb-4 uppercase tracking-widest">Moderator Komunitas</p>
                     <p className="font-onest text-sm text-zinc-400 leading-relaxed">
                        Penegak aturan komunitas. Menjaga kondusivitas, menyambut anggota baru, dan menangani laporan.
                     </p>
                  </div>
               </div>

               {/* DIVISI 3: QUEST GIVERS (ACARA) */}
               <div className="group relative p-1 rounded-2xl bg-linear-to-b from-white/10 to-transparent hover:from-orange-500/50 transition-all duration-500">
                  <div className="relative h-full bg-zinc-900/80 backdrop-blur-xl p-8 rounded-xl border border-white/5 flex flex-col items-center text-center">
                     <div className="mb-6 p-4 rounded-full bg-orange-500/10 text-orange-400 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                        <BookOpen className="size-8" />
                     </div>
                     <h3 className="font-space text-xl font-bold text-white mb-2">Quest Givers</h3>
                     <p className="text-xs font-mono text-orange-400 mb-4 uppercase tracking-widest">Divisi Pendidikan</p>
                     <p className="font-onest text-sm text-zinc-400 leading-relaxed">
                        Merancang kegiatan &ldquo;Misi&rdquo; (Quest). Mulai dari Study Jam, Webinar, hingga tantangan koding mingguan.
                     </p>
                  </div>
               </div>

            </div>
         </div>
      </section>


      {/* ========================================= */}
      {/* SECTION 4: STRATEGIC PARTNER              */}
      {/* ========================================= */}
      <section className="w-full py-20 bg-zinc-950">
         <div className="container mx-auto px-6 max-w-4xl text-center">
            <p className="font-space text-sm text-zinc-500 uppercase tracking-widest mb-8">
               Strategically Supported By
            </p>
            
            <div className="p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-sm">
               <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                  {/* Logo Placeholder (Bisa diganti Image) */}
                  <div className="size-24 rounded-full bg-zinc-800 flex items-center justify-center border border-white/10">
                     <span className="font-bold text-zinc-500">HIMA-TI</span>
                  </div>
                  
                  <div className="text-left max-w-lg">
                     <h3 className="font-space text-2xl font-bold text-white mb-2">
                        Himpunan Mahasiswa Teknik Informatika
                     </h3>
                     <p className="font-onest text-zinc-400 leading-relaxed">
                        NVG beroperasi di bawah naungan legitimasi HIMA-TI UNISBA sebagai mitra strategis untuk pengembangan ekosistem digital yang berkelanjutan.
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* CTA FOOTER */}
      <section className="w-full py-20 flex flex-col items-center text-center">
         <h2 className="font-space text-3xl font-bold text-white mb-6">Siap Menjadi Bagian dari Sejarah?</h2>
         <Link href="/register">
            <Button size="lg" className="rounded-full px-8 h-12 bg-white text-black hover:bg-zinc-200 font-bold">
               Bergabung Sekarang <ArrowRight className="ml-2 size-4" />
            </Button>
         </Link>
      </section>

    </div>
  );
}