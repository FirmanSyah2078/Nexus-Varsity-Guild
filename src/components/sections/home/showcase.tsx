"use client";

import { useState } from "react";
import Image from "next/image";
import SectionTitle from "@/components/landing/title";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  Check, 
  Cpu, 
  Database,
  Play,
  ShieldCheck,
  Zap,
  LayoutTemplate
} from "lucide-react";

// --- 1. UTILITY: SAFE SYNTAX HIGHLIGHTER ---
const highlightCode = (code: string) => {
  return code
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(
      /(\/\/.*)|(".*?")|\b(import|from|export|default|class|return|if|else|async|await|while|for|use|fn|let|mut|match)\b|\b(const|var|function|struct|impl|type|interface)\b|\b(string|number|boolean|void|u32|Vec|Option|Result)\b|\b(console|log|print|println|format)\b|\b(UserCard|Avatar|Badge|motion|SentinelSystem|Monitor|HttpServer|App)\b/g,
      (match, comment, string, purple, indigo, yellow, cyan, custom) => {
        if (comment) return `<span class="text-zinc-500 italic">${comment}</span>`;
        if (string) return `<span class="text-green-400">${string}</span>`;
        if (purple) return `<span class="text-purple-400">${purple}</span>`;
        if (indigo) return `<span class="text-indigo-400">${indigo}</span>`;
        if (yellow) return `<span class="text-yellow-300">${yellow}</span>`;
        if (cyan) return `<span class="text-cyan-300">${cyan}</span>`;
        if (custom) return `<span class="text-yellow-200">${custom}</span>`;
        return match;
      }
    );
};


// --- 2. PREVIEW COMPONENTS ---
// Output: TypeScript
const CommunityPreview = () => (
  <div className="flex flex-col items-center justify-center h-full w-full">
    <motion.div 
      initial={{ scale: 0.8, opacity: 0, y: 20 }}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ type: "spring", duration: 0.6 }}
      className="relative w-64 p-4 rounded-xl border border-indigo-500/30 bg-[#0f1115]/90 backdrop-blur-xl shadow-[0_0_30px_rgba(99,102,241,0.2)]"
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-indigo-500 to-purple-500 rounded-t-xl" />
      
      {/* Badge Centang tetap ada di pojok */}
      <div className="absolute -top-3 -right-3 p-1.5 rounded-full bg-indigo-500 text-white shadow-[0_0_15px_#6366f1] z-10">
        <Check size={12} strokeWidth={3} />
      </div>

      <div className="flex items-center gap-3 mb-4 mt-1">
        {/* --- UPDATE: Menggunakan Image Asli --- */}
        <div className="relative size-10 rounded-full overflow-hidden ring-2 ring-indigo-500/20">
           <Image 
             src="/images/profile2.jpg" // Pastikan file ada di folder public/images/
             alt="Profile"
             fill
             className="object-cover"
           />
        </div>

        <div>
          <h4 className="font-space font-bold text-white text-sm">Anantara</h4>
          <div className="flex items-center gap-1.5 mt-0.5">
             <div className="size-1.5 rounded-full bg-emerald-400 animate-pulse" />
             <span className="text-[10px] font-mono text-zinc-400">Online</span>
          </div>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex justify-between text-[10px] text-zinc-500 font-mono">
           <span>CONTRIBUTIONS</span>
           <span className="text-white">1,240</span>
        </div>
        <div className="h-1.5 w-full rounded-full bg-white/5 overflow-hidden">
           <motion.div 
             initial={{ width: 0 }}
             animate={{ width: "75%" }}
             transition={{ delay: 0.5, duration: 1 }}
             className="h-full bg-indigo-500" 
           />
        </div>
      </div>

      <div className="flex gap-1.5 flex-wrap">
        {["React", "Next.js", "UI"].map((tag) => (
          <span key={tag} className="text-[10px] text-indigo-200 font-mono bg-indigo-500/10 border border-indigo-500/20 px-1.5 py-0.5 rounded">
            {tag}
          </span>
        ))}
      </div>
    </motion.div>
  </div>
);

// Output: Python
const PythonPreview = () => (
  <div className="flex flex-col items-center justify-center h-full w-full relative py-4">
    <div className="relative size-40 md:size-48 flex items-center justify-center mb-4">
       <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 rounded-full border border-yellow-500/10 border-t-yellow-500/60 bg-[conic-gradient(from_0deg,transparent_0deg,rgba(234,179,8,0.1)_360deg)]"
       />
       <div className="absolute inset-4 rounded-full border border-dashed border-yellow-500/20" />
       <div className="absolute inset-12 rounded-full border border-yellow-500/10" />
       
       <div className="relative z-10 flex flex-col items-center text-center">
          <ShieldCheck className="size-8 text-yellow-400 mb-2 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]" />
          <h4 className="font-space font-bold text-yellow-100 text-sm">Sentinel System</h4>
       </div>
    </div>
    
    <div className="w-48 p-3 bg-[#0d1117]/80 backdrop-blur-md rounded border border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.1)]">
       <div className="flex justify-between text-[10px] font-mono text-zinc-400 mb-1.5">
          <span>THREAT_LEVEL</span>
          <span className="text-emerald-400 font-bold">LOW (0.02)</span>
       </div>
       <div className="flex gap-0.5 h-1.5 w-full">
          {[1,2,3,4,5,6,7,8].map(i => (
             <div key={i} className={`h-full w-full rounded-full ${i < 2 ? 'bg-emerald-500' : 'bg-white/10'}`} />
          ))}
       </div>
       <div className="mt-2 text-[8px] font-mono text-yellow-500/60 text-center">
          &gt; SYSTEM SECURE
       </div>
    </div>
  </div>
);

// Output: Rust
const RustPreview = () => (
  <div className="flex flex-col items-center justify-center h-full w-full p-4">
    <div className="w-full max-w-70 rounded-xl border border-orange-500/20 bg-[#0f1115]/90 backdrop-blur-xl shadow-[0_0_30px_rgba(249,115,22,0.1)] overflow-hidden">
      
      <div className="flex items-center justify-between p-4 pb-2">
        <span className="flex items-center gap-2 font-mono text-xs text-orange-400 font-bold">
          <Zap size={14} fill="currentColor" /> CORE_ENGINE
        </span>
        <div className="flex gap-1.5 items-center">
           <span className="text-[10px] text-zinc-500 font-mono">LIVE</span>
           <div className="size-1.5 rounded-full bg-orange-500 animate-pulse" />
        </div>
      </div>
      
      <div className="relative h-24 w-full px-4 flex items-end justify-between gap-1 mb-4">
        <div className="absolute inset-0 px-4 flex flex-col justify-between py-2 pointer-events-none opacity-20">
           <div className="w-full h-px bg-orange-500/30 dashed" />
           <div className="w-full h-px bg-orange-500/30 dashed" />
           <div className="w-full h-px bg-orange-500/30 dashed" />
        </div>

        {[40, 70, 45, 90, 60, 80, 50, 95, 30, 65, 85, 55].map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: "10%" }}
            animate={{ height: `${h}%` }}
            transition={{ 
              repeat: Infinity, 
              repeatType: "reverse", 
              duration: 1 + (i % 4) * 0.2,
              delay: i * 0.05 
            }}
            className="w-full bg-orange-500/80 rounded-t-[1px] shadow-[0_0_10px_#f97316]"
          />
        ))}
      </div>

      <div className="grid grid-cols-2 gap-2 px-4 mb-4">
         <div className="p-2 bg-orange-500/5 rounded border border-orange-500/10">
            <span className="block text-[8px] text-zinc-500 font-mono">LATENCY</span>
            <span className="block text-xs text-white font-bold font-mono">4.2ms</span>
         </div>
         <div className="p-2 bg-orange-500/5 rounded border border-orange-500/10">
            <span className="block text-[8px] text-zinc-500 font-mono">MEMORY</span>
            <span className="block text-xs text-white font-bold font-mono">12MB</span>
         </div>
      </div>

      <div className="bg-black/40 border-t border-white/5 p-3 font-mono text-[9px] leading-relaxed text-zinc-400">
         <div className="flex gap-2">
            <span className="text-zinc-600">$</span>
            <span>cargo run --release</span>
         </div>
         <div className="text-orange-300 mt-1">
            &gt; 🚀 Nexus Engine v2.0 Ignite...
         </div>
         <div className="text-emerald-400">
            &gt; Server listening on 127.0.0.1:8080
         </div>
      </div>

    </div>
  </div>
);


// --- 3. DATA SNIPPETS ---
const CODE_SNIPPETS = [
  {
    id: "typescript",
    lang: "React / TSX",
    icon: LayoutTemplate,
    color: "text-blue-400",
    borderColor: "border-t-blue-500",
    filename: "UserCard.tsx",
    preview: CommunityPreview,
    code: `import { motion } from "framer-motion";

export const UserCard = ({ user }) => {
  return (
    <div className="card-glass">
      {/* User Header */}
      <div className="flex items-center gap-3">
        <Avatar src={user.image} />
        <div>
          <h4>{user.name}</h4>
          <Badge variant="success">Online</Badge>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="progress-bar mt-4">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: user.xp + "%" }}
          className="bg-indigo-500 h-1"
        />
      </div>
      
      {/* Skills Tags */}
      <div className="tags">
        {user.skills.map(skill => (
          <Tag key={skill}>{skill}</Tag>
        ))}
      </div>
    </div>
  );
}`
  },
  {
    id: "python",
    lang: "Python",
    icon: Database,
    color: "text-yellow-400",
    borderColor: "border-t-yellow-500",
    filename: "sentinel_core.py",
    preview: PythonPreview,
    code: `class SentinelSystem:
    def __init__(self):
        self.status = "ACTIVE"
        self.scan_interval = 500 # ms

    async def monitor_network(self):
        while self.status == "ACTIVE":
            # Real-time packet analysis
            nodes = await self.get_active_nodes()
            
            for node in nodes:
                risk_score = self.ai_engine.predict(node)
                
                if risk_score > THRESHOLD:
                    self.quarantine(node)
                    print(f"THREAT DETECTED: {node.id}")
                else:
                    self.sync_data(node)
            
            await asyncio.sleep(0.5)

# Init System
sentinel = SentinelSystem()
await sentinel.monitor_network()`
  },
  {
    id: "rust",
    lang: "Rust",
    icon: Cpu,
    color: "text-orange-400",
    borderColor: "border-t-orange-500",
    filename: "main.rs",
    preview: RustPreview,
    code: `use actix_web::{get, App, HttpServer, Responder};
use nexus_engine::Monitor;

#[get("/metrics")]
async fn metrics() -> impl Responder {
    let stats = Monitor::get_system_stats();
    
    // Zero-allocation JSON serialization
    // Performance: < 5ms response time
    format!(
        "latency": {}, "memory": {},
        stats.latency, stats.memory_usage
    )
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    println!("🚀 Nexus Engine v2.0 Ignite...");
    
    HttpServer::new(|| App::new().service(metrics))
        .bind(("127.0.0.1", 8080))?
        .run()
        .await
}`
  }
];

export default function CodeShowcaseSection() {
  const [activeTab, setActiveTab] = useState("typescript");
  const activeCode = CODE_SNIPPETS.find(s => s.id === activeTab) || CODE_SNIPPETS[0];
  const ActivePreview = activeCode.preview;

  return (
    <section className="relative flex w-full min-h-screen flex-col items-center justify-center py-5 z-10 px-4 sm:px-6">

      {/* HEADER */}
      <SectionTitle
        badgeIcon={Terminal}
        badgeText="Developers Native"
        title="Speak the Language"
        description="Built for developers, by developers. See how our core systems reflect the code you write every day."
      />

      {/* CONTAINER */}
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-stretch gap-6 lg:gap-0">

        {/* 1. CODE EDITOR */}
        <div className="
          w-full lg:w-[60%] order-2 lg:order-1
          flex flex-col
          rounded-xl lg:rounded-r-none lg:rounded-l-2xl
          border border-white/10
          bg-[#0d1117]
          shadow-[0_0_50px_rgba(0,0,0,0.3)]
          overflow-hidden
        ">
          
          {/* Editor Header (Tabs) */}
          <div className="flex items-center overflow-x-auto bg-black/20 border-b border-white/5 scrollbar-hide
            [&::-webkit-scrollbar]:h-1.5 
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:bg-white/10
            [&::-webkit-scrollbar-thumb]:rounded-full
            transition-colors
          ">
             {CODE_SNIPPETS.map((item) => (
               <button
                 key={item.id}
                 onClick={() => setActiveTab(item.id)}
                 className={`
                   flex items-center gap-2 px-4 md:px-6 py-3 md:py-4 text-[10px] md:text-xs font-mono border-r border-white/5 transition-all whitespace-nowrap
                   ${activeTab === item.id 
                     ? `bg-[#0d1117] text-white border-t-2 ${item.borderColor}`
                     : "text-zinc-500 hover:text-zinc-300 hover:bg-white/5 border-t-2 border-t-transparent"
                   }
                 `}
               >
                 <item.icon className={`size-3.5 ${activeTab === item.id ? item.color : "text-zinc-600"}`} />
                 {item.filename}
               </button>
             ))}
          </div>

          {/* Editor Content (SAFE HIGHLIGHTING HERE) */}
          <div className="relative flex-1 p-4 md:p-6 font-mono text-[10px] md:text-sm overflow-x-auto lg:min-h-111.25
            [&::-webkit-scrollbar]:w-1.5
            [&::-webkit-scrollbar]:h-1.5
            [&::-webkit-scrollbar-track]:bg-transparent
            [&::-webkit-scrollbar-thumb]:bg-white/10
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:hover:bg-zinc-700
          ">
             <AnimatePresence mode="wait">
               <motion.div
                 key={activeTab}
                 initial={{ opacity: 0, x: 10 }}
                 animate={{ opacity: 1, x: 0 }}
                 exit={{ opacity: 0, x: -10 }}
                 transition={{ duration: 0.2 }}
               >
                 <div className="flex gap-3 md:gap-4">
                   <div className="flex flex-col text-right select-none text-zinc-700">
                     {activeCode.code.split('\n').map((_, i) => (
                       <span key={i} className="leading-5 md:leading-6">{i + 1}</span>
                     ))}
                   </div>
                   <pre className="text-zinc-300 leading-5 md:leading-6">
                     <code dangerouslySetInnerHTML={{ 
                       __html: highlightCode(activeCode.code) 
                      }} />
                   </pre>
                 </div>
               </motion.div>
             </AnimatePresence>
          </div>

          {/* Editor Footer */}
          <div className="px-4 py-2 border-t border-white/5 bg-black/40 flex items-center justify-between text-[10px] font-mono text-zinc-500">
            <div className="flex items-center gap-2">
               <div className="size-2 rounded-full bg-emerald-500" />
               <span className="truncate">Running: {activeCode.filename}</span>
            </div>
            <div className="flex items-center gap-2">
               <span className="hidden sm:inline">Ln {activeCode.code.split('\n').length}, Col 1</span>
               <span className="uppercase">{activeCode.lang}</span>
            </div>
          </div>
        </div>

        {/* 2. PREVIEW SECTION */}
        <div className={`
           hidden md:flex 
           w-full lg:w-[40%] order-1 lg:order-2
           items-center justify-center 
           md:h-90 lg:h-auto
           lg:border-l lg:border-white/5 lg:bg-[#080a0f]
           lg:rounded-r-2xl lg:min-h-125
           relative flex-col
           mb-4 lg:mb-0
        `}>
           {/* Desktop Only Header */}
           <div className="hidden lg:flex w-full items-center justify-between px-4 py-3 border-b border-white/5 bg-white/5 absolute top-0 left-0 z-20">
               <span className="text-xs font-bold text-zinc-400 tracking-wider flex items-center gap-2">
                  <Play size={12} className="text-emerald-400 fill-emerald-400" />
                  LIVE PREVIEW
               </span>
               <div className="flex gap-1.5">
                  <div className="size-2 rounded-full bg-zinc-700" />
                  <div className="size-2 rounded-full bg-zinc-700" />
               </div>
           </div>

           {/* Preview Content */}
           <div className="flex-1 w-full h-full relative overflow-hidden flex items-center justify-center p-4 lg:p-0">
               <div className="hidden lg:block absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none" />
               
               <AnimatePresence mode="wait">
                 <motion.div 
                    key={activeTab}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center justify-center w-full"
                 >
                    <ActivePreview />
                 </motion.div>
               </AnimatePresence>
           </div>
        </div>

      </div>

    </section>
  );
}