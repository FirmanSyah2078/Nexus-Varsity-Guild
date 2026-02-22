"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, Check, ArrowUpRight, ArrowRight, Eye, EyeOff } from "lucide-react";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const SLIDES = [
  { src: "/animations/screening.lottie", title: "NVI Sentinel", desc: "The automated gateway for Nexus Varsity Guild." },
  { src: "/animations/Cat.lottie", title: "Focus Mode", desc: "Precision monitoring for your workspace." },
  { src: "/animations/discord.lottie", title: "Sync Community", desc: "Integrated directly with NVG Discord." },
  { src: "/animations/wumpus.lottie", title: "The Guild", desc: "Join the pioneers of Nexus Varsity." },
];

export default function RegisterPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const [stage, setStage] = useState(1);
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otpCode, setOtpCode] = useState("");
  
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleNextStage = (e: React.FormEvent) => {
    e.preventDefault();
    if (stage < 3) setStage(stage + 1);
  };

  const handlePrevStage = () => {
    if (stage > 1) setStage(stage - 1);
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Create Account Payload:", { username, email, password, otpCode });
  };

  const stageConfig = {
    1: { title: "Identity Scan" },
    2: { title: "Security Protocol" },
    3: { title: "Neural Verification" },
  };

  return (
    <div className="flex w-full px-4 sm:px-6 md:px-0 items-center justify-center">
      
      <div className="flex w-full max-w-md md:max-w-3xl rounded-3xl border border-border/40 bg-background/60 backdrop-blur-2xl shadow-2xl overflow-hidden">
        
        {/* ================= LEFT SIDE ================= */}
        <div className="hidden md:flex flex-col w-[45%] p-8 relative border-r border-border/30">
          <Link href="/" className="group absolute top-6 left-6 flex items-center text-[10px] tracking-[0.2em] font-bold text-muted-foreground hover:text-primary transition-all font-space z-10">
            <ArrowLeft className="mr-2 h-3 w-3 group-hover:-translate-x-1 transition-transform" />
            BACK
          </Link>

          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-44 h-44 mb-6">
              <DotLottieReact src={SLIDES[currentSlide].src} autoplay loop />
            </div>
            <h2 className="text-xl font-bold font-space tracking-tight mb-2">{SLIDES[currentSlide].title}</h2>
            <p className="text-muted-foreground text-xs leading-relaxed max-w-50 font-onest">{SLIDES[currentSlide].desc}</p>
          </div>

          <div className="flex justify-center gap-1.5">
            {SLIDES.map((_, i) => (
              <button key={i} onClick={() => setCurrentSlide(i)} className={`h-1 rounded-full transition-all ${currentSlide === i ? "w-6 bg-primary" : "w-1.5 bg-muted"}`} />
            ))}
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex-1 flex items-center justify-center p-10 relative">
          <div className="w-full max-w-md space-y-6 relative z-10">
            
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[10px] tracking-[0.32em] uppercase text-muted-foreground font-onest">
                <span>NVG AEROSPACE</span>
                <span className="opacity-70">v2.4.17</span>
              </div>
              <div className="space-y-3">
                <h1 className="text-2xl font-medium tracking-tight font-space">Enlist to Vanguard</h1>
                <div className="h-0.5 w-16 bg-primary/70" />
              </div>
            </div>

            {/* Social Buttons */}
            <div className="flex justify-center gap-3 mt-6">
              <button type="button" className="h-10 w-10 rounded-xl bg-muted/15 flex items-center justify-center transition-all duration-300 ease-smooth hover:bg-primary/15 active:scale-95">
                <svg viewBox="0 0 48 48" className="w-5 h-5"><path fill="#EA4335" d="M24 9.5c3.54 0 6.72 1.22 9.23 3.6l6.9-6.9C35.65 2.18 30.2 0 24 0 14.82 0 6.73 5.48 2.69 13.44l8.02 6.23C12.65 13.44 17.88 9.5 24 9.5z"/><path fill="#4285F4" d="M46.5 24c0-1.56-.14-3.06-.4-4.5H24v9h12.7c-.55 2.96-2.2 5.46-4.7 7.14l7.26 5.64C43.9 36.5 46.5 30.76 46.5 24z"/><path fill="#FBBC05" d="M10.71 28.67a14.5 14.5 0 010-9.34l-8.02-6.23A23.97 23.97 0 000 24c0 3.86.92 7.52 2.69 10.9l8.02-6.23z"/><path fill="#34A853" d="M24 48c6.2 0 11.4-2.05 15.2-5.58l-7.26-5.64c-2.02 1.36-4.6 2.17-7.94 2.17-6.12 0-11.35-3.94-13.29-9.17l-8.02 6.23C6.73 42.52 14.82 48 24 48z"/></svg>
              </button>
              <button type="button" className="h-10 w-10 rounded-xl bg-muted/15 flex items-center justify-center transition-all duration-300 ease-smooth hover:bg-primary/15 active:scale-95">
                <DiscordLogoIcon className="w-5 h-5 text-[#5865F2]" />
              </button>
              <button type="button" className="h-10 w-10 rounded-xl bg-muted/15 flex items-center justify-center transition-all duration-300 ease-smooth hover:bg-primary/15 active:scale-95">
                <Github className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Dynamic Divider (Menggantikan Progress Bar) */}
            <div className="flex items-center gap-4 my-7">
              <div className="flex-1 h-px bg-border transition-all duration-300" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-muted-foreground/60 font-onest transition-all duration-300">
                {stageConfig[stage as keyof typeof stageConfig].title}
              </span>
              <div className="flex-1 h-px bg-border transition-all duration-300" />
            </div>

            {/* FORM MULTI-STAGE */}
            <form onSubmit={stage === 3 ? handleRegister : handleNextStage} className="space-y-0 h-46 flex flex-col justify-between">
              
              {/* STAGE 1 */}
              <div className={`space-y-7 transition-all duration-500 ease-smooth ${stage === 1 ? "opacity-100 translate-x-0 block" : "opacity-0 -translate-x-4 hidden"}`}>
                <div className="relative">
                  <label htmlFor="reg-username" className={`absolute left-0 transition-all duration-300 ease-out pointer-events-none ${username ? "-top-3.5 text-[11px] text-muted-foreground/70" : "top-2 text-sm text-muted-foreground"}`}>Callsign / Username</label>
                  <input id="reg-username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} spellCheck={false} autoComplete="username" className="w-full h-8 bg-transparent border-0 outline-none px-0 pr-8 text-sm leading-none focus:outline-none appearance-none" required={stage === 1} />
                  <div className="absolute left-0 bottom-0 h-px w-full bg-muted-foreground/40" />
                  <div className={`absolute left-0 bottom-0 h-px w-full bg-primary origin-left transition-transform duration-800 ease-smooth ${username ? "scale-x-100" : "scale-x-0"}`} />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2">{username.length > 3 && <Check className="w-4 h-4 text-emerald-500" />}</div>
                </div>

                <div className="relative">
                  <label htmlFor="reg-email" className={`absolute left-0 transition-all duration-300 ease-out pointer-events-none ${email ? "-top-3.5 text-[11px] text-muted-foreground/70" : "top-2 text-sm text-muted-foreground"}`}>Transmission Address (Email)</label>
                  <input id="reg-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} spellCheck={false} autoComplete="email" className="w-full h-8 bg-transparent border-0 outline-none px-0 pr-8 text-sm leading-none focus:outline-none appearance-none" required={stage === 1} />
                  <div className="absolute left-0 bottom-0 h-px w-full bg-muted-foreground/40" />
                  <div className={`absolute left-0 bottom-0 h-px w-full bg-primary origin-left transition-transform duration-800 ease-smooth ${email ? "scale-x-100" : "scale-x-0"}`} />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2">{email.includes("@") && <Check className="w-4 h-4 text-emerald-500" />}</div>
                </div>
              </div>

              {/* STAGE 2 */}
              <div className={`space-y-7 transition-all duration-500 ease-smooth ${stage === 2 ? "opacity-100 translate-x-0 block" : "opacity-0 -translate-x-4 hidden"}`}>
                <div className="relative">
                  <label htmlFor="reg-password" className={`absolute left-0 transition-all duration-300 ease-out pointer-events-none ${password ? "-top-3.5 text-[11px] text-muted-foreground/70" : "top-2 text-sm text-muted-foreground"}`}>Encryption Key (Password)</label>
                  <input id="reg-password" type={showPassword ? "text" : "password"} value={password} onChange={(e) => setPassword(e.target.value)} spellCheck={false} autoComplete="new-password" className="w-full h-8 bg-transparent border-0 outline-none appearance-none px-0 pr-8 text-sm leading-none focus:outline-none" required={stage === 2} />
                  <div className="absolute left-0 bottom-0 h-px w-full bg-muted-foreground/40" />
                  <div className={`absolute left-0 bottom-0 h-px w-full bg-primary origin-left transition-transform duration-700 ease-smooth ${password ? "scale-x-100" : "scale-x-0"}`} />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-transform">
                    {showPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                </div>

                <div className="relative">
                  <label htmlFor="reg-confirm" className={`absolute left-0 transition-all duration-300 ease-out pointer-events-none ${confirmPassword ? "-top-3.5 text-[11px] text-muted-foreground/70" : "top-2 text-sm text-muted-foreground"}`}>Verify Encryption</label>
                  <input id="reg-confirm" type={showConfirmPassword ? "text" : "password"} value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} spellCheck={false} autoComplete="new-password" className="w-full h-8 bg-transparent border-0 outline-none appearance-none px-0 pr-8 text-sm leading-none focus:outline-none" required={stage === 2} />
                  <div className="absolute left-0 bottom-0 h-px w-full bg-muted-foreground/40" />
                  <div className={`absolute left-0 bottom-0 h-px w-full bg-primary origin-left transition-transform duration-700 ease-smooth ${confirmPassword ? "scale-x-100" : "scale-x-0"}`} />
                  <div className="absolute right-6 top-1/2 -translate-y-1/2">
                    {confirmPassword && password === confirmPassword && <Check className="w-4 h-4 text-emerald-500" />}
                  </div>
                  <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary transition-transform">
                    {showConfirmPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* STAGE 3 */}
              <div className={`space-y-5 transition-all duration-500 ease-smooth ${stage === 3 ? "opacity-100 translate-x-0 block" : "opacity-0 -translate-x-4 hidden"}`}>
                <p className="text-[11px] text-muted-foreground/70 font-onest text-center">
                  A neural decryption key has been transmitted to <br /> <span className="text-primary font-medium">{email || "your email"}</span>
                </p>
                <div className="relative mt-2">
                  <label htmlFor="reg-otp" className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-out pointer-events-none ${otpCode ? "-top-4 text-[10px] text-muted-foreground/70" : "top-2 text-sm text-muted-foreground"}`}>6-Digit Auth Code</label>
                  <input id="reg-otp" type="text" maxLength={6} value={otpCode} onChange={(e) => setOtpCode(e.target.value.toUpperCase())} spellCheck={false} autoComplete="one-time-code" className="w-full h-10 bg-transparent border-0 outline-none text-center tracking-[0.75em] text-lg font-space text-primary uppercase focus:outline-none appearance-none" required={stage === 3} />
                  <div className="absolute left-0 bottom-0 h-px w-full bg-muted-foreground/40" />
                  <div className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-px bg-primary transition-all duration-500 ease-smooth ${otpCode.length === 6 ? "w-full" : "w-0"}`} />
                </div>
              </div>

              {/* Navigation & Buttons */}
              <div className="pt-2">
                <div className="flex justify-between items-center mb-4 text-[11px]">
                  {stage > 1 ? (
                    <button type="button" onClick={handlePrevStage} className="group flex items-center gap-1 text-muted-foreground/70 transition-colors hover:text-primary">
                      <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" /> Revise Info
                    </button>
                  ) : (
                    <Link href="/login" className="text-muted-foreground/70 transition-colors hover:text-primary">
                      Already enlisted? Login
                    </Link>
                  )}
                  
                  {/* UPDATE: Tulisan step diubah menjadi STAGE 1/3 */}
                  <span className="text-muted-foreground/40 font-mono">STAGE {stage}/3</span>
                </div>

                <Button type="submit" disabled={(stage === 1 && (!username || !email)) || (stage === 2 && (!password || password !== confirmPassword)) || (stage === 3 && otpCode.length < 6)} className="group w-full h-9 rounded-md bg-white/6 ring-1 ring-white/10 backdrop-blur-sm text-foreground text-xs tracking-[0.2em] font-medium transition-all duration-300 ease-smooth hover:bg-primary hover:text-primary-foreground hover:ring-primary/60 hover:shadow-[0_0_30px_oklch(var(--primary)/0.35)] hover:-translate-y-px active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed">
                  <span className="flex items-center justify-center gap-2">
                    {stage === 3 ? "CREATE ACCOUNT" : "NEXT PHASE"}
                    {stage === 3 ? <ArrowUpRight className="w-4 h-4 opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" /> : <ArrowRight className="w-4 h-4 opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />}
                  </span>
                </Button>
              </div>

            </form>

          </div>
        </div>
      </div>
    </div>
  );
}