"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { ArrowRight, FileText, Sparkles, Code2, Terminal, Cpu, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { sound } from "@/lib/audio";
import HeroHaloCharacter from "./HeroHaloCharacter";

// Dynamically import Three.js Hero Canvas with SSR disabled
const HeroCanvas = dynamic(() => import("../canvas/HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-[#050505] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-16 h-16 rounded-full border-2 border-[#FF5A0A]/30 border-t-[#FF5A0A] animate-spin" />
        <span className="text-xs font-mono tracking-widest text-[#FF9D2E] uppercase">
          INITIALIZING AI 3D WORKSPACE...
        </span>
      </div>
    </div>
  ),
});

interface HeroSectionProps {
  onResumeClick: () => void;
}

export default function HeroSection({ onResumeClick }: HeroSectionProps) {
  const scrollToProjects = () => {
    sound.playClick();
    const sec = document.getElementById("projects");
    if (sec) sec.scrollIntoView({ behavior: "smooth" });
  };

  const handleResume = () => {
    sound.playClick();
    onResumeClick();
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-center overflow-hidden bg-[#050505] pt-32 sm:pt-36 lg:pt-40 pb-20 sm:pb-24"
    >
      {/* Three.js 3D Real-time Scene Canvas */}
      <HeroCanvas />

      {/* Atmospheric Ember and Smoke Background Glow */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        {/* Warm halo diffusion glow */}
        <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#FF5A0A]/20 rounded-full blur-[140px] mix-blend-screen animate-pulse-glow" />
        {/* Secondary soft amber aura */}
        <div className="absolute top-[40%] right-[18%] -translate-y-1/2 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-[#FF9D2E]/15 rounded-full blur-[100px] mix-blend-screen" />
        {/* Ambient Top Glow for visual separation */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[250px] bg-[#FF5A0A]/10 rounded-full blur-[120px]" />
        {/* Bottom edge fade gradient into about section */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
      </div>

      {/* Hero Foreground Content Grid */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 h-full flex flex-col justify-center pointer-events-none">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center py-4 sm:py-8">
          {/* Left Column: Typography, Copy, CTAs & Real Tech Badges */}
          <div className="lg:col-span-7 flex flex-col justify-center pointer-events-auto">
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2.5 mb-4 sm:mb-5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A0A] shadow-[0_0_12px_#FF5A0A] animate-pulse" />
              <span className="text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-zinc-300 font-[family-name:var(--font-heading)]">
                HELLO, I&apos;M <span className="text-[#FF5A0A]">SURAJ VISHWAKARMA</span>
              </span>
            </div>

            {/* Giant Editorial Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-[76px] font-black uppercase tracking-tight leading-[0.92] text-white font-[family-name:var(--font-heading)] mb-6 select-none">
              <span className="block">I BUILD</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A0A] via-[#FF8A24] to-[#FF9D2E] glow-orange">
                AI POWERED
              </span>
              <span className="block">FULL STACK</span>
              <span className="block">APPLICATIONS</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base md:text-lg text-zinc-300 max-w-xl font-normal leading-relaxed mb-8 sm:mb-10 text-balance">
              Full Stack Developer crafting scalable web applications, AI platforms, and intelligent digital products using modern technologies.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-10 sm:mb-12">
              {/* Primary: VIEW PROJECTS */}
              <button
                onClick={scrollToProjects}
                onMouseEnter={() => sound.playHover()}
                className="group relative inline-flex items-center justify-between gap-4 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#FF5A0A] hover:bg-[#FF6D24] text-white font-[family-name:var(--font-heading)] font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 box-glow-orange hover:box-glow-orange-intense"
              >
                <span>VIEW PROJECTS</span>
                <span className="w-7 h-5 rounded-full bg-[#050505] flex items-center justify-center transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="w-3 h-3 text-[#FF9D2E]" />
                </span>
              </button>

              {/* Secondary: DOWNLOAD RESUME */}
              <button
                onClick={handleResume}
                onMouseEnter={() => sound.playHover()}
                className="group inline-flex items-center gap-3 px-6 py-3.5 sm:py-4 rounded-full border border-white/20 hover:border-[#FF5A0A] bg-white/5 hover:bg-[#FF5A0A]/10 text-zinc-200 hover:text-white transition-all duration-300"
              >
                <FileText className="w-4 h-4 text-[#FF5A0A] group-hover:scale-110 transition-transform" />
                <span className="font-[family-name:var(--font-heading)] text-xs sm:text-sm font-bold tracking-widest uppercase group-hover:text-[#FF9D2E] transition-colors">
                  VIEW RESUME
                </span>
              </button>
            </div>

            {/* Real Metrics & Educational Credentials */}
            <div className="flex flex-col gap-5 pt-4 border-t border-white/10 max-w-xl">
              <div className="grid grid-cols-3 gap-4 sm:gap-6">
                <div>
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#FF5A0A]" />
                    <span className="text-xl sm:text-2xl font-black text-white font-[family-name:var(--font-heading)] tracking-tight">
                      9.04
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase">
                    CGPA (B.SC IT)
                  </span>
                </div>

                <div className="border-l border-white/10 pl-4 sm:pl-6">
                  <div className="flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-[#FF9D2E]" />
                    <span className="text-xl sm:text-2xl font-black text-white font-[family-name:var(--font-heading)] tracking-tight">
                      94.48%
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase">
                    ML CYBER ACCURACY
                  </span>
                </div>

                <div className="border-l border-white/10 pl-4 sm:pl-6">
                  <div className="flex items-center gap-1.5">
                    <Code2 className="w-3.5 h-3.5 text-[#FF5A0A]" />
                    <span className="text-xl sm:text-2xl font-black text-white font-[family-name:var(--font-heading)] tracking-tight">
                      104+
                    </span>
                  </div>
                  <span className="text-[10px] font-mono tracking-wider text-zinc-400 uppercase">
                    GIT REPOSITORIES
                  </span>
                </div>
              </div>

              {/* Social Connect & Core Tech Tags */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                    CONNECT:
                  </span>
                  <a
                    href="https://github.com/Vishwakarmasuraj333"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-white/10 hover:border-[#FF5A0A] hover:text-[#FF9D2E] text-zinc-300 transition-colors"
                    title="GitHub: @Vishwakarmasuraj333"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/suraj-vishwakarma-2ab64436a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-white/10 hover:border-[#FF5A0A] hover:text-[#FF9D2E] text-zinc-300 transition-colors"
                    title="LinkedIn: suraj-vishwakarma-2ab64436a"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>
                  <a
                    href="mailto:itxsurajofficial@gmail.com"
                    className="p-2 rounded-lg border border-white/10 hover:border-[#FF5A0A] hover:text-[#FF9D2E] text-zinc-300 transition-colors"
                    title="Direct Email: itxsurajofficial@gmail.com"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-300">
                    Next.js 16
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-[#FF5A0A]">
                    FastAPI
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-[#FF9D2E]">
                    Gemini AI
                  </span>
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-300">
                    PostgreSQL
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dedicated Animated Halo ("Gola") Character Portal */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center pointer-events-auto py-6 lg:py-0">
            <HeroHaloCharacter />
          </div>
        </div>
      </div>
    </section>
  );
}
