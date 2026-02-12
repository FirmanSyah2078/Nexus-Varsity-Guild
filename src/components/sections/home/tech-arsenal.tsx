"use client";

import Marquee from "react-fast-marquee";
import { Wrench } from "lucide-react";
import Image from "next/image";
import SectionTitle from "@/components/landing/title";
import {
  Code2,
  Terminal,
  Layers,
  Database,
  Layout,
  Box,
  Cloud,
  Zap,
} from "lucide-react";

// --- 1. DATA (SAMA SEPERTI SEBELUMNYA) ---
const LANGUAGES_DATA = [
  {
    image: "",
    name: "TypeScript",
    type: "Language",
    desc: "JavaScript with syntax for types. Ensures type safety across the app.",
  },
  {
    image: "",
    name: "Python",
    type: "Scripting",
    desc: "Powerful integration & automation for AI and backend logic.",
  },
  {
    image: "",
    name: "Rust",
    type: "System",
    desc: "Blazingly fast & memory-efficient core engine performance.",
  },
  {
    name: "Go Lang",
    image: "",
    type: "System",
    desc: "Build simple, secure, scalable systems.",
  },
  {
    image: "",
    name: "PHP",
    type: "Backend",
    desc: "The web veteran that powers 80% of web applications.",
  },
];

const TOOLS_DATA = [
  {
    image: "",
    name: "Next.js",
    type: "Framework",
    desc: "The React Framework for the Web. Server-side rendering mastery.",
  },
  {
    image: "",
    name: "Tailwind",
    type: "Styling",
    desc: "Utility-first CSS framework for rapid and modern UI building.",
  },
  {
    image: "",
    name: "Supabase",
    type: "Database",
    desc: "Open Source Firebase alternative. PostgreSQL power.",
  },
  {
    image: "",
    name: "Docker",
    type: "DevOps",
    desc: "Secure, isolate, and scale applications with containers.",
  },
  {
    image: "",
    name: "Vercel",
    type: "Cloud",
    desc: "Develop. Preview. Ship. The best platform for frontend.",
  },
];

// --- 2. CONFIG ---
const getCategoryConfig = (type: string) => {
    switch (type) {
        case "Language":
        case "Scripting":
            return { icon: Code2, color: "text-blue-400" };
        case "System":
        case "Backend":
            return { icon: Terminal, color: "text-orange-400" };
        case "Framework":
            return { icon: Layers, color: "text-white" };
        case "Styling":
            return { icon: Layout, color: "text-cyan-400" };
        case "Database":
            return { icon: Database, color: "text-emerald-400" };
        case "DevOps":
            return { icon: Box, color: "text-blue-500" };
        case "Cloud":
            return { icon: Cloud, color: "text-pink-400" };
        default:
            return { icon: Zap, color: "text-zinc-400" };
    }
};

// --- 3. CARD (TETAP COMPACT) ---
function TechCard({ item }: { item: typeof LANGUAGES_DATA[0], index: number }) {
    const categoryConfig = getCategoryConfig(item.type);
    const CategoryIcon = categoryConfig.icon;

    return (
        <div className="w-72 h-36 p-4 rounded-lg mx-4 shrink-0 bg-[#0d1117]/60 border border-white/5 backdrop-blur-md flex flex-col justify-start">
            <div className="flex gap-2">
                <div className="size-11 shrink-0 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center overflow-hidden relative">
                    {item.image ? (
                         <Image src={item.image} alt={item.name} fill className="object-cover" />
                    ) : (
                        <div className={`${categoryConfig.color}`}>
                           <CategoryIcon size={22} className="opacity-90" />
                        </div>
                    )}
                </div>
                
                <div className="flex flex-col justify-center">
                    <div className="flex items-center gap-1">
                        <p className="font-bold text-white font-space text-sm">{item.name}</p>
                        <div className={`p-0.5 rounded-full bg-white/5 ${categoryConfig.color}`}>
                            <CategoryIcon size={10} className="fill-current/20" /> 
                        </div>
                    </div>
                    <span className="text-xs text-zinc-500 font-mono">{item.type}</span>
                </div>
            </div>
            
            <p className="text-sm pt-3 text-zinc-400 font-onest line-clamp-2 text-left leading-snug">
                {item.desc}
            </p>
        </div>
    );
}

// --- 4. MAIN SECTION (REMASTERED STRUCTURE) ---
export default function TechArsenalSection() {
    return (
        // ANALISIS PERUBAHAN DI SINI:
        // 1. Hapus 'min-h-screen'. Biarkan tinggi section menyesuaikan isi.
        // 2. Hapus 'flex flex-col items-center justify-center'. Kita pakai flow normal div.
        // 3. Gunakan Padding Mantra: 'px-4 md:px-16 lg:px-24 xl:px-32' agar lurus sama section lain.
        // 4. py-20 atau py-24 cukup. Jangan py-32 kejauhan.
        <div id="tech-arsenal" className="px-4 md:px-16 lg:px-24 xl:px-32 py-20 overflow-hidden">

            {/* HEADER */}
            <SectionTitle
                badgeIcon={Wrench} // Icon khusus Arsenal
                badgeText="The Arsenal"
                title="Construct Modules"
                description="A comprehensive list of technologies powering our ecosystem. Selected for performance, scalability, and developer experience." 
            />

            {/* MARQUEE WRAPPER */}
            {/* max-w-5xl mx-auto: Agar konten marquee tidak terlalu lebar di layar raksasa (Sama kayak Testimonial) */}
            {/* mt-16: Jarak dari Judul */}
            <div className="mt-16 max-w-7xl mx-auto space-y-6 mask-[linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">

                {/* Marquee 1 */}
                <Marquee className="py-2" speed={30} gradient={false} pauseOnHover={false} autoFill> 
                    <div className="flex">
                        {[...LANGUAGES_DATA].map((item, index) => (
                            <TechCard key={`lang-${index}`} index={index} item={item} />
                        ))}
                    </div>
                </Marquee>

                {/* Marquee 2 */}
                <Marquee className="py-2" speed={30} direction="right" gradient={false} pauseOnHover={false} autoFill>
                    <div className="flex">
                        {[...TOOLS_DATA].map((item, index) => (
                            <TechCard key={`tools-${index}`} index={index} item={item} />
                        ))}
                    </div>
                </Marquee>

            </div>

        </div>
    );
}