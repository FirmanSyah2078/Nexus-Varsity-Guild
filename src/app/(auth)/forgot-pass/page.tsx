"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Check,
  ArrowUpRight,
  ArrowRight,
  Eye,
  EyeOff,
  ShieldAlert,
  Fingerprint,
  Loader2,
  X,
} from "lucide-react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const SLIDES = [
  {
    src: "/animations/screening.lottie",
    title: "System Recovery",
    desc: "Bypassing standard protocols to restore your access.",
  },
  {
    src: "/animations/Cat.lottie",
    title: "Secure Channel",
    desc: "Establishing a temporary encrypted neural link.",
  }
];

export default function ForgotPasswordPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [stage, setStage] = useState(1);

  const [identifier, setIdentifier] = useState(""); 
  const [otpCode, setOtpCode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // --- STATE UNTUK ADVANCED ANTI-BOT ---
  const [scanState, setScanState] = useState<"idle" | "scanning" | "success" | "error">("idle");
  const [scanLog, setScanLog] = useState("Initiate Protocol");

  const handleVerifyHuman = () => {
    if (scanState === "scanning" || scanState === "success") return;

    setScanState("scanning");
    setScanLog("Querying NVI-CORE-DB...");

    setTimeout(() => {
      setScanLog("Validating Bio-Signatures...");
      
      setTimeout(() => {
        // Simulasi Logika Anti-Jahil: Harus >= 5 karakter
        if (!identifier || identifier.length < 5) {
          setScanState("error");
          setScanLog("ERR: Subject Not Found");
          
          setTimeout(() => {
            setScanState("idle");
            setScanLog("Initiate Protocol");
          }, 3000);
        } else {
          setScanState("success");
          setScanLog("Clearance Granted");
        }
      }, 2000); 
    }, 1500); 
  };

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

  const handleResetPassword = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Reset Password Payload:", {
      identifier,
      otpCode,
      newPassword,
    });
  };

  const stageConfig = {
    1: { title: "Identification" },
    2: { title: "Neural Verification" },
    3: { title: "New Encryption" },
  };

  return (
    <div className="flex w-full px-4 sm:px-6 md:px-0 items-center justify-center">
      {/* CARD CONTAINER */}
      <div className="flex w-full max-w-md md:max-w-3xl rounded-3xl border border-auth-border bg-auth-card backdrop-blur-2xl shadow-2xl overflow-hidden">
        
        {/* ================= LEFT SIDE ================= */}
        <div className="hidden md:flex flex-col w-[45%] p-8 relative border-r border-auth-border/50">
          <Link
            href="/login"
            className="group absolute top-6 left-6 flex items-center text-[10px] tracking-[0.2em] font-bold text-auth-desc hover:text-auth-accent transition-all font-space z-10"
          >
            <ArrowLeft className="mr-2 h-3 w-3 group-hover:-translate-x-1 transition-transform" />
            ABORT
          </Link>

          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <div className="w-44 h-44 mb-6">
              <DotLottieReact src={SLIDES[currentSlide].src} autoplay loop />
            </div>
            <h2 className="text-xl font-bold font-space tracking-tight mb-2 text-auth-title">
              {SLIDES[currentSlide].title}
            </h2>
            <p className="text-auth-desc text-xs leading-relaxed max-w-50 font-onest">
              {SLIDES[currentSlide].desc}
            </p>
          </div>

          <div className="flex justify-center gap-1.5">
            {SLIDES.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-1 rounded-full transition-all ${currentSlide === i ? "w-6 bg-auth-accent" : "w-1.5 bg-auth-desc/30"}`}
              />
            ))}
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex-1 flex items-center justify-center p-10 relative">
          <div className="w-full max-w-md space-y-6 relative z-10">
            
            {/* Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[10px] tracking-[0.32em] uppercase text-auth-desc font-onest">
                <span>NVG AEROSPACE</span>
                <span className="opacity-70">v2.4.17</span>
              </div>
              <div className="space-y-3">
                <h1 className="text-2xl font-medium tracking-tight font-space text-auth-title">
                  Recover Access
                </h1>
                <div className="h-0.5 w-16 bg-auth-accent/70" />
              </div>
            </div>

            {/* Balancer Tinggi (Sama dengan tombol Social di Register) */}
            <div className="flex items-center justify-center gap-3 mt-6 h-10 px-4 rounded-xl bg-auth-social border border-auth-border/50">
              <ShieldAlert className="w-4 h-4 text-warning" />
              <span className="text-[10px] tracking-[0.2em] uppercase text-warning/80 font-space">
                Protocol Override Active
              </span>
            </div>

            {/* Dynamic Divider */}
            <div className="flex items-center gap-4 my-7">
              <div className="flex-1 h-px bg-auth-border transition-all duration-300" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-auth-desc/60 font-onest transition-all duration-300">
                {stageConfig[stage as keyof typeof stageConfig].title}
              </span>
              <div className="flex-1 h-px bg-auth-border transition-all duration-300" />
            </div>

            {/* FORM MULTI-STAGE */}
            <form
              onSubmit={stage === 3 ? handleResetPassword : handleNextStage}
              className="space-y-0 h-46 flex flex-col justify-between"
            >
              {/* STAGE 1: IDENTIFICATION */}
              <div
                className={`space-y-7 transition-all duration-500 ease-smooth ${stage === 1 ? "opacity-100 translate-x-0 block" : "opacity-0 -translate-x-4 hidden"}`}
              >
                {/* Identifier Field */}
                <div className="relative">
                  <label
                    htmlFor="reset-identifier"
                    className={`absolute left-0 transition-all duration-300 ease-out pointer-events-none ${identifier ? "-top-3.5 text-[11px] text-auth-desc/70" : "top-2 text-sm text-auth-desc"}`}
                  >
                    Callsign / Registered Email
                  </label>
                  <input
                    id="reset-identifier"
                    name="reset-identifier"
                    type="text"
                    value={identifier}
                    onChange={(e) => {
                      setIdentifier(e.target.value);
                      // Sensor perubahan (anti double-render ESLint)
                      if (scanState !== "idle") {
                        setScanState("idle");
                        setScanLog("Initiate Protocol");
                      }
                    }}
                    spellCheck={false}
                    autoComplete="off"
                    className="w-full h-8 bg-transparent border-0 outline-none px-0 pr-8 text-sm leading-none focus:outline-none appearance-none text-auth-title"
                    required={stage === 1}
                  />
                  <div className="absolute left-0 bottom-0 h-px w-full bg-auth-input-line" />
                  <div
                    className={`absolute left-0 bottom-0 h-px w-full bg-auth-accent origin-left transition-transform duration-800 ease-smooth ${identifier ? "scale-x-100" : "scale-x-0"}`}
                  />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2">
                    {identifier.length >= 5 && (
                      <Check className="w-4 h-4 text-emerald-500" />
                    )}
                  </div>
                </div>

                {/* MODERN ANTI-BOT */}
                <button
                  type="button"
                  onClick={handleVerifyHuman}
                  disabled={scanState === "success" || scanState === "scanning"}
                  className={`w-full h-8 flex items-center justify-between px-3 rounded-md border transition-all duration-500 overflow-hidden relative group ${
                    scanState === "success"
                      ? "bg-emerald-500/10 border-emerald-500/30 cursor-default"
                      : scanState === "error"
                      ? "bg-destructive/10 border-destructive/30 cursor-pointer"
                      : scanState === "scanning"
                      ? "bg-auth-accent/10 border-auth-accent/50 cursor-wait"
                      : "bg-white/5 border-auth-border/50 cursor-pointer hover:bg-auth-accent/10 hover:border-auth-accent/50"
                  }`}
                >
                  {scanState === "scanning" && (
                    <div className="absolute top-0 left-0 h-full w-full bg-linear-to-r from-transparent via-auth-accent/20 to-transparent -translate-x-full animate-[marquee_1.5s_ease-in-out_infinite]" />
                  )}

                  <div className="flex items-center gap-3 z-10">
                    <Fingerprint className={`w-3.5 h-3.5 transition-colors duration-500 ${
                      scanState === "success" ? "text-emerald-400" 
                      : scanState === "error" ? "text-destructive" 
                      : scanState === "scanning" ? "text-auth-accent"
                      : "text-auth-desc group-hover:text-auth-accent"
                    }`} />

                    <span className={`text-[10px] font-space tracking-widest uppercase transition-colors duration-500 ${
                      scanState === "success" ? "text-emerald-400" 
                      : scanState === "error" ? "text-destructive" 
                      : scanState === "scanning" ? "text-auth-accent"
                      : "text-auth-title group-hover:text-auth-accent"
                    }`}>
                      {scanLog}
                    </span>
                  </div>

                  {/* Ikon Kanan: Lingkaran Loading -> Centang Hijau -> Silang Merah */}
                  <div className="flex items-center justify-center z-10 w-4">
                    {scanState === "scanning" ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-auth-accent" />
                    ) : scanState === "success" ? (
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                    ) : scanState === "error" ? (
                      <X className="w-3.5 h-3.5 text-destructive" />
                    ) : (
                      // Titik Dormant: Animasi Deep Breath (Napas Halus)
                      <div className="w-1.5 h-1.5 rounded-full bg-auth-accent animate-deep-breath" />
                    )}
                  </div>
                </button>
              </div>

              {/* STAGE 2: NEURAL VERIFICATION (OTP) */}
              <div
                className={`space-y-5 transition-all duration-500 ease-smooth ${stage === 2 ? "opacity-100 translate-x-0 block" : "opacity-0 -translate-x-4 hidden"}`}
              >
                <p className="text-[11px] text-auth-desc/70 font-onest text-center">
                  A temporary override token has been routed to <br />{" "}
                  <span className="text-auth-accent font-medium">
                    {identifier || "your endpoint"}
                  </span>
                </p>
                <div className="relative mt-2">
                  <label
                    htmlFor="reset-otp"
                    className={`absolute left-1/2 -translate-x-1/2 transition-all duration-300 ease-out pointer-events-none ${otpCode ? "-top-4 text-[10px] text-auth-desc/70" : "top-2 text-sm text-auth-desc"}`}
                  >
                    6-Digit Token
                  </label>
                  <input
                    id="reset-otp"
                    type="text"
                    maxLength={6}
                    value={otpCode}
                    onChange={(e) => setOtpCode(e.target.value.toUpperCase())}
                    spellCheck={false}
                    autoComplete="one-time-code"
                    className="w-full h-10 bg-transparent border-0 outline-none text-center tracking-[0.75em] text-lg font-space text-auth-accent uppercase focus:outline-none appearance-none"
                    required={stage === 2}
                  />
                  <div className="absolute left-0 bottom-0 h-px w-full bg-auth-input-line" />
                  <div
                    className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-px bg-auth-accent transition-all duration-500 ease-smooth ${otpCode.length === 6 ? "w-full" : "w-0"}`}
                  />
                </div>
              </div>

              {/* STAGE 3: NEW ENCRYPTION */}
              <div
                className={`space-y-7 transition-all duration-500 ease-smooth ${stage === 3 ? "opacity-100 translate-x-0 block" : "opacity-0 -translate-x-4 hidden"}`}
              >
                <div className="relative">
                  <label
                    htmlFor="new-password"
                    className={`absolute left-0 transition-all duration-300 ease-out pointer-events-none ${newPassword ? "-top-3.5 text-[11px] text-auth-desc/70" : "top-2 text-sm text-auth-desc"}`}
                  >
                    New Encryption Key
                  </label>
                  <input
                    id="new-password"
                    type={showPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    spellCheck={false}
                    autoComplete="new-password"
                    className="w-full h-8 bg-transparent border-0 outline-none appearance-none px-0 pr-8 text-sm leading-none focus:outline-none text-auth-title"
                    required={stage === 3}
                  />
                  <div className="absolute left-0 bottom-0 h-px w-full bg-auth-input-line" />
                  <div
                    className={`absolute left-0 bottom-0 h-px w-full bg-auth-accent origin-left transition-transform duration-700 ease-smooth ${newPassword ? "scale-x-100" : "scale-x-0"}`}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-auth-desc hover:text-auth-accent transition-transform"
                  >
                    {showPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                </div>

                <div className="relative">
                  <label
                    htmlFor="confirm-new-password"
                    className={`absolute left-0 transition-all duration-300 ease-out pointer-events-none ${confirmPassword ? "-top-3.5 text-[11px] text-auth-desc/70" : "top-2 text-sm text-auth-desc"}`}
                  >
                    Verify New Key
                  </label>
                  <input
                    id="confirm-new-password"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    spellCheck={false}
                    autoComplete="new-password"
                    className="w-full h-8 bg-transparent border-0 outline-none appearance-none px-0 pr-8 text-sm leading-none focus:outline-none text-auth-title"
                    required={stage === 3}
                  />
                  <div className="absolute left-0 bottom-0 h-px w-full bg-auth-input-line" />
                  <div
                    className={`absolute left-0 bottom-0 h-px w-full bg-auth-accent origin-left transition-transform duration-700 ease-smooth ${confirmPassword ? "scale-x-100" : "scale-x-0"}`}
                  />
                  <div className="absolute right-6 top-1/2 -translate-y-1/2">
                    {confirmPassword && newPassword === confirmPassword && (
                      <Check className="w-4 h-4 text-emerald-500" />
                    )}
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 text-auth-desc hover:text-auth-accent transition-transform"
                  >
                    {showConfirmPassword ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <div className="flex justify-between items-center mb-4 text-[11px]">
                  {stage > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrevStage}
                      className="group flex items-center gap-1 text-auth-link transition-colors hover:text-auth-accent"
                    >
                      <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />{" "}
                      Revise Info
                    </button>
                  ) : (
                    <Link
                      href="/login"
                      className="text-auth-link transition-colors hover:text-auth-accent"
                    >
                      Return to Login
                    </Link>
                  )}

                  <span className="text-auth-desc/40 font-mono">
                    STAGE {stage}/3
                  </span>
                </div>

                <Button
                  type="submit"
                  disabled={
                    (stage === 1 && scanState !== "success") || 
                    (stage === 2 && otpCode.length < 6) ||
                    (stage === 3 && (!newPassword || newPassword !== confirmPassword))
                  }
                  className="group w-full h-9 rounded-md bg-white/6 ring-1 ring-white/10 backdrop-blur-sm text-auth-title text-xs tracking-[0.2em] font-medium transition-all duration-300 ease-smooth hover:bg-auth-accent hover:text-black hover:ring-auth-accent/60 hover:shadow-[0_0_30px_oklch(var(--auth-accent)/0.35)] hover:-translate-y-px active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center justify-center gap-2">
                    {stage === 1 && "SEARCH DATABASE"}
                    {stage === 2 && "VERIFY TOKEN"}
                    {stage === 3 && "RE-ENCRYPT KEY"}
                    {stage === 3 ? (
                      <ArrowUpRight className="w-4 h-4 opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                    ) : (
                      <ArrowRight className="w-4 h-4 opacity-70 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                    )}
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