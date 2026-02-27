"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Github,
  Check,
  ArrowUpRight,
  Eye,
  EyeOff,
  X,
} from "lucide-react";
import { DiscordLogoIcon } from "@radix-ui/react-icons";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { loginUser } from "@/logic/auth/login-action";
import { signIn } from "next-auth/react";
import { toast } from "sonner";

const SLIDES = [
  {
    src: "/animations/screening.lottie",
    title: "NVI Sentinel",
    desc: "The automated gateway for Nexus Varsity Guild.",
  },
  {
    src: "/animations/Cat.lottie",
    title: "Focus Mode",
    desc: "Precision monitoring for your workspace.",
  },
  {
    src: "/animations/discord.lottie",
    title: "Sync Community",
    desc: "Integrated directly with NVG Discord.",
  },
  {
    src: "/animations/wumpus.lottie",
    title: "The Guild",
    desc: "Join the pioneers of Nexus Varsity.",
  },
];

export default function LoginPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData();
    formData.append("email", username);
    formData.append("password", password);

    const res = await loginUser(formData);

    if (res?.error) {
      toast.error(res.error);
      setIsLoading(false);
    } else {
      toast.success("Otorisasi Berhasil. Memasuki NVI Core...");
      window.location.href = "/dashboard";
    }
  };

  return (
    <div className="flex w-full px-4 sm:px-6 md:px-0 items-center justify-center">
      <div className="flex w-full max-w-md md:max-w-3xl rounded-3xl border border-auth-border bg-auth-card backdrop-blur-2xl shadow-2xl overflow-hidden">
        <div className="hidden md:flex flex-col w-[45%] p-8 relative border-r border-auth-border/70">
          <Link
            href="/"
            className="group absolute top-6 left-6 flex items-center text-[10px] tracking-[0.2em] font-bold text-auth-desc hover:text-auth-accent transition-all font-space z-10"
          >
            <ArrowLeft className="mr-2 h-3 w-3 group-hover:-translate-x-1 transition-transform" />
            BACK
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
                className={`h-1 rounded-full transition-all ${currentSlide === i ? "w-6 bg-auth-accent" : "w-1.5 bg-auth-desc/40"}`}
              />
            ))}
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center p-10">
          <div className="w-full max-w-md space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between text-[10px] tracking-[0.32em] uppercase text-auth-desc font-onest">
                <span>NVG AEROSPACE</span>
                <span className="opacity-70">v2.4.17</span>
              </div>
              <div className="space-y-3">
                <h1 className="text-2xl font-medium tracking-tight font-space text-auth-title">
                  Secure Terminal Access
                </h1>
                <div className="h-0.5 w-16 bg-auth-accent/70" />
              </div>
            </div>

            <div className="flex justify-center gap-3 mt-6">
              <button
                type="button"
                onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
                className="h-10 w-10 rounded-xl bg-auth-social flex items-center justify-center transition-all duration-300 ease-smooth hover:bg-auth-accent/15 active:scale-95"
              >
                <svg viewBox="0 0 48 48" className="w-5 h-5">
                  <path
                    fill="#EA4335"
                    d="M24 9.5c3.54 0 6.72 1.22 9.23 3.6l6.9-6.9C35.65 2.18 30.2 0 24 0 14.82 0 6.73 5.48 2.69 13.44l8.02 6.23C12.65 13.44 17.88 9.5 24 9.5z"
                  />
                  <path
                    fill="#4285F4"
                    d="M46.5 24c0-1.56-.14-3.06-.4-4.5H24v9h12.7c-.55 2.96-2.2 5.46-4.7 7.14l7.26 5.64C43.9 36.5 46.5 30.76 46.5 24z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M10.71 28.67a14.5 14.5 0 010-9.34l-8.02-6.23A23.97 23.97 0 000 24c0 3.86.92 7.52 2.69 10.9l8.02-6.23z"
                  />
                  <path
                    fill="#34A853"
                    d="M24 48c6.2 0 11.4-2.05 15.2-5.58l-7.26-5.64c-2.02 1.36-4.6 2.17-7.94 2.17-6.12 0-11.35-3.94-13.29-9.17l-8.02 6.23C6.73 42.52 14.82 48 24 48z"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => signIn("discord", { callbackUrl: "/dashboard" })}
                className="h-10 w-10 rounded-xl bg-auth-social flex items-center justify-center transition-all duration-300 ease-smooth hover:bg-auth-accent/15 active:scale-95"
              >
                <DiscordLogoIcon className="w-5 h-5 text-[#5865F2]" />
              </button>
              <button
                type="button"
                onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
                className="h-10 w-10 rounded-xl bg-auth-social flex items-center justify-center transition-all duration-300 ease-smooth hover:bg-auth-accent/15 active:scale-95"
              >
                <Github className="w-5 h-5 text-white" />
              </button>
            </div>

            <div className="flex items-center gap-4 my-7">
              <div className="flex-1 h-px bg-auth-border" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-auth-desc/60 font-onest">
                or authenticate manually
              </span>
              <div className="flex-1 h-px bg-auth-border" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-0">
              <div className="relative">
                <label
                  htmlFor="username"
                  className={`absolute left-0 transition-all duration-300 ease-out pointer-events-none ${username ? "-top-3.5 text-[11px] text-auth-desc/70" : "top-2 text-sm text-auth-desc"}`}
                >
                  Username or UserID
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  spellCheck={false}
                  autoComplete="off"
                  inputMode="text"
                  className="w-full h-8 bg-transparent border-0 outline-none px-0 pr-8 text-sm leading-none focus:outline-none appearance-none text-auth-title"
                />
                <div className="absolute left-0 bottom-0 h-px w-full bg-auth-input-line" />
                <div
                  className={`absolute left-0 bottom-0 h-px w-full bg-auth-accent origin-left transition-transform duration-800 ease-smooth ${username ? "scale-x-100" : "scale-x-0"}`}
                />
                <div className="absolute right-0 top-1/2 -translate-y-1/2">
                  {username.length > 3 ? (
                    <Check className="w-4 h-4 text-emerald-500 transition" />
                  ) : username.length > 0 ? (
                    <X className="w-4 h-4 text-red-500 transition" />
                  ) : null}
                </div>
              </div>

              <div className="relative mt-7">
                <label
                  htmlFor="password"
                  className={`absolute left-0 transition-all duration-300 ease-out pointer-events-none ${password ? "-top-3.5 text-[11px] text-auth-desc/70" : "top-2 text-sm text-auth-desc"}`}
                >
                  Secure Password
                </label>
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  spellCheck={false}
                  autoComplete="current-password"
                  className="w-full h-8 bg-transparent border-0 outline-none appearance-none px-0 pr-8 text-sm leading-none focus:outline-none text-auth-title"
                />
                <div className="absolute left-0 bottom-0 h-px w-full bg-auth-input-line" />
                <div
                  className={`absolute left-0 bottom-0 h-px w-full bg-auth-accent origin-left transition-transform duration-700 ease-smooth ${password ? "scale-x-100" : "scale-x-0"}`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-auth-desc hover:text-auth-accent transition-transform duration-150 ease-out active:scale-95"
                >
                  {showPassword ? (
                    <Eye className="w-4 h-4" />
                  ) : (
                    <EyeOff className="w-4 h-4" />
                  )}
                </button>
              </div>

              <div className="flex justify-between items-center mt-4 text-[11px]">
                <Link
                  href="/forgot-pass"
                  className="group relative text-auth-link transition-colors duration-300 ease-smooth hover:text-auth-accent"
                >
                  Forgot access?
                  <span className="absolute left-0 -bottom-1 h-px w-0 bg-auth-accent transition-[width] duration-500 ease-smooth group-hover:w-full" />
                </Link>
                <Link
                  href="/register"
                  className="text-auth-link transition-colors duration-300 ease-smooth hover:text-auth-accent"
                >
                  Register
                </Link>
              </div>

              <Button
                type="submit"
                disabled={!username || !password || isLoading}
                className="group w-full h-9 mt-6 rounded-md bg-white/6 ring-1 ring-white/10 backdrop-blur-sm text-auth-title text-xs tracking-[0.2em] font-medium transition-all duration-300 ease-smooth hover:bg-auth-accent hover:text-black hover:ring-auth-accent/60 hover:shadow-[0_0_30px_oklch(var(--auth-accent)/0.35)] hover:-translate-y-px active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="flex items-center justify-center gap-2">
                  {isLoading ? "PROCESSING..." : "AUTHENTICATE"}
                  {!isLoading && (
                    <ArrowUpRight className="w-4 h-4 opacity-70 transition-all duration-300 ease-smooth group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                  )}
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}