"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Sparkles, ShieldCheck, Code2, Zap } from "lucide-react";
import { sound } from "@/lib/audio";

export default function HeroHaloCharacter() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    sound.playHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePos({ x: 0, y: 0 });
  };

  // 3D Parallax dynamic tilt calculations
  const rotateY = mousePos.x * 14;
  const rotateX = -mousePos.y * 14;
  const shiftX = mousePos.x * 10;
  const shiftY = mousePos.y * 10;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-[380px] sm:max-w-[460px] lg:max-w-[500px] h-[460px] sm:h-[540px] lg:h-[580px] mx-auto flex items-center justify-center select-none group"
      style={{ perspective: "1200px" }}
    >
      {/* 3D Dynamic Tilt Wrapper */}
      <div
        className="relative w-full h-full flex items-center justify-center transition-transform duration-200 ease-out"
        style={{
          transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${shiftX}px, ${shiftY}px, 0)`,
          transformStyle: "preserve-3d",
        }}
      >
        {/* ============================================================ */}
        {/* 1. GIANT GLOWING BACKGROUND CYBER SUN & ORBITAL RINGS        */}
        {/* ============================================================ */}

        {/* Ambient Volumetric Corona Blur */}
        <div className="absolute inset-0 m-auto w-[320px] sm:w-[420px] lg:w-[480px] h-[320px] sm:h-[420px] lg:h-[480px] rounded-full bg-gradient-to-tr from-[#FF5A0A]/40 via-[#FF8A24]/25 to-[#FF9D2E]/15 blur-[90px] pointer-events-none animate-pulse-glow" />

        {/* Outer Glowing Cyber Orange Sun Disc */}
        <div
          className="absolute w-[300px] sm:w-[400px] lg:w-[460px] h-[300px] sm:h-[400px] lg:h-[460px] rounded-full pointer-events-none opacity-90 transition-transform duration-700 ease-out group-hover:scale-105"
          style={{
            background:
              "radial-gradient(circle, rgba(255,90,10,0.5) 0%, rgba(255,138,36,0.3) 45%, rgba(255,90,10,0.08) 70%, transparent 75%)",
          }}
        />

        {/* Outer Rotating Cyber Orbital Ring with SVG Coordinate Markings */}
        <div className="absolute w-[340px] sm:w-[440px] lg:w-[490px] h-[340px] sm:h-[440px] lg:h-[490px] rounded-full pointer-events-none animate-spin-slow opacity-75">
          <svg className="w-full h-full" viewBox="0 0 500 500">
            <circle
              cx="250"
              cy="250"
              r="244"
              fill="none"
              stroke="#FF5A0A"
              strokeWidth="1.5"
              strokeDasharray="6 14 2 14"
              opacity="0.65"
            />
            {/* Cardinal Navigation Marks */}
            <circle cx="250" cy="6" r="4" fill="#FF9D2E" />
            <circle cx="494" cy="250" r="4" fill="#FF5A0A" />
            <circle cx="250" cy="494" r="4" fill="#FF9D2E" />
            <circle cx="6" cy="250" r="4" fill="#FF5A0A" />

            <text x="256" y="22" fill="#FF9D2E" fontSize="9" fontFamily="monospace" letterSpacing="2">
              000° // APEX
            </text>
            <text x="390" y="246" fill="#FF5A0A" fontSize="9" fontFamily="monospace" letterSpacing="2">
              090°
            </text>
            <text x="256" y="486" fill="#FF9D2E" fontSize="9" fontFamily="monospace" letterSpacing="2">
              180° // NADIR
            </text>
            <text x="18" y="246" fill="#FF5A0A" fontSize="9" fontFamily="monospace" letterSpacing="2">
              270°
            </text>
          </svg>
        </div>

        {/* Counter-Rotating Inner Tech Segmented Ring */}
        <div
          className="absolute w-[290px] sm:w-[380px] lg:w-[430px] h-[290px] sm:h-[380px] lg:h-[430px] rounded-full pointer-events-none"
          style={{ animation: "spinSlow 45s linear infinite reverse" }}
        >
          <svg className="w-full h-full" viewBox="0 0 440 440">
            <circle
              cx="220"
              cy="220"
              r="214"
              fill="none"
              stroke="#FF9D2E"
              strokeWidth="1"
              strokeDasharray="3 18"
              opacity="0.45"
            />
          </svg>
        </div>

        {/* ============================================================ */}
        {/* 2. ARCHED PORTAL CARD WITH PROPER CUTOUT PNG                */}
        {/* ============================================================ */}
        <div
          className="relative z-10 w-[270px] sm:w-[340px] lg:w-[370px] h-[370px] sm:h-[460px] lg:h-[500px] p-[2px] rounded-t-[135px] sm:rounded-t-[170px] lg:rounded-t-[185px] rounded-b-[24px] sm:rounded-b-[28px] bg-gradient-to-b from-[#FF5A0A] via-[#FF8A24]/40 to-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.95),0_0_35px_rgba(255,90,10,0.3)] transition-all duration-500 group-hover:shadow-[0_25px_70px_rgba(0,0,0,0.98),0_0_55px_rgba(255,90,10,0.5)]"
          style={{ transform: "translateZ(30px)" }}
        >
          {/* Inner Arched Window Container */}
          <div className="relative w-full h-full rounded-t-[133px] sm:rounded-t-[168px] lg:rounded-t-[183px] rounded-b-[22px] sm:rounded-b-[26px] overflow-hidden bg-gradient-to-b from-[#140803] via-[#080403] to-[#050505]">
            {/* Subtle cyber background grid & flare */}
            <div
              className="absolute inset-0 opacity-20 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#FF5A0A 1px, transparent 1px), radial-gradient(#FF9D2E 1px, transparent 1px)",
                backgroundSize: "20px 20px",
                backgroundPosition: "0 0, 10px 10px",
              }}
            />

            {/* Orange Aura Glow behind Developer's Silhouette */}
            <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[220px] sm:w-[280px] h-[220px] sm:h-[280px] rounded-full bg-gradient-to-b from-[#FF5A0A]/40 to-transparent blur-[50px] pointer-events-none" />

            {/* Target Reticle Accent Ring (matching reference screenshot) */}
            <div className="absolute top-[36%] left-6 sm:left-8 w-6 h-6 rounded-full border border-[#FF5A0A]/70 flex items-center justify-center pointer-events-none z-20 animate-pulse">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FF5A0A] shadow-[0_0_8px_#FF5A0A]" />
            </div>

            {/* Proper Developer Portrait Cutout PNG */}
            <div className="relative w-full h-full flex items-end justify-center">
              <Image
                src="/assets/suraj-cutout.png"
                alt="Suraj Vishwakarma — Full Stack Developer & AI Engineer"
                fill
                priority
                sizes="(max-width: 768px) 340px, 400px"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Bottom Vignette to blend body smoothly into card bottom */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050505] via-[#050505]/70 to-transparent pointer-events-none z-10" />

              {/* Dynamic Cyber Laser Scanning Beam */}
              <div
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#FF5A0A] to-transparent shadow-[0_0_12px_#FF5A0A] pointer-events-none z-20"
                style={{
                  animation: "laserScan 4s ease-in-out infinite alternate",
                }}
              >
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded bg-black/90 border border-[#FF5A0A]/60 text-[8px] font-mono text-[#FF9D2E] tracking-widest uppercase">
                  SYSTEM // VERIFIED
                </div>
              </div>
            </div>

            {/* Bottom Identity Badge (Docked inside bottom of the arch) */}
            <div className="absolute bottom-3 sm:bottom-4 left-3 right-3 sm:left-4 sm:right-4 z-30 px-3.5 py-2.5 rounded-xl bg-black/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.85),0_0_15px_rgba(255,90,10,0.25)] flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5A0A] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF5A0A]" />
                </span>
                <div className="flex flex-col">
                  <span className="text-[11px] sm:text-xs font-black uppercase tracking-wider text-white font-[family-name:var(--font-heading)] leading-none">
                    SURAJ VISHWAKARMA
                  </span>
                  <span className="text-[8px] sm:text-[9px] font-mono text-[#FF9D2E] tracking-widest uppercase mt-0.5">
                    FULL STACK DEVELOPER
                  </span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded-md bg-[#FF5A0A]/20 border border-[#FF5A0A]/40 text-[9px] sm:text-[10px] font-mono text-[#FF9D2E] font-bold">
                CGPA 9.04
              </span>
            </div>
          </div>
        </div>

        {/* ============================================================ */}
        {/* 3. ORBITING INTERACTIVE TECH SATELLITE BADGES                */}
        {/* ============================================================ */}

        {/* Top-Left Satellite: Full Stack Architect */}
        <div
          className="absolute -top-2 left-2 sm:-left-4 lg:-left-6 z-20 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-[#050505]/90 backdrop-blur-md border border-[#FF5A0A]/50 shadow-[0_0_20px_rgba(255,90,10,0.35)] flex items-center gap-2 pointer-events-auto hover:border-[#FF5A0A] hover:scale-105 transition-all duration-300"
          style={{ transform: "translateZ(65px)" }}
          onMouseEnter={() => sound.playHover()}
        >
          <div className="p-1 rounded-full bg-[#FF5A0A]/20 text-[#FF5A0A]">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] sm:text-[10px] font-extrabold tracking-wider uppercase text-white font-[family-name:var(--font-heading)] leading-tight">
              FULL STACK
            </span>
            <span className="text-[7px] sm:text-[8px] font-mono text-zinc-400">REACT &amp; NEXT.JS</span>
          </div>
        </div>

        {/* Top-Right Satellite: ML Cyber Accuracy */}
        <div
          className="absolute top-8 right-2 sm:-right-4 lg:-right-6 z-20 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-[#050505]/90 backdrop-blur-md border border-[#FF9D2E]/50 shadow-[0_0_20px_rgba(255,157,46,0.35)] flex items-center gap-2 pointer-events-auto hover:border-[#FF9D2E] hover:scale-105 transition-all duration-300"
          style={{ transform: "translateZ(75px)" }}
          onMouseEnter={() => sound.playHover()}
        >
          <div className="p-1 rounded-full bg-[#FF9D2E]/20 text-[#FF9D2E]">
            <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] sm:text-[10px] font-extrabold tracking-wider uppercase text-[#FF9D2E] font-[family-name:var(--font-heading)] leading-tight">
              94.48% ACCURACY
            </span>
            <span className="text-[7px] sm:text-[8px] font-mono text-zinc-400">UNSW-NB15 ML MODEL</span>
          </div>
        </div>

        {/* Bottom-Left Satellite: JavaScript + Tailwind */}
        <div
          className="absolute bottom-20 -left-2 sm:-left-8 lg:-left-10 z-20 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-[#050505]/90 backdrop-blur-md border border-white/20 shadow-[0_10px_25px_rgba(0,0,0,0.85)] flex items-center gap-2 pointer-events-auto hover:border-[#FF5A0A] hover:scale-105 transition-all duration-300"
          style={{ transform: "translateZ(55px)" }}
          onMouseEnter={() => sound.playHover()}
        >
          <div className="p-1 rounded-full bg-white/10 text-white">
            <Code2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#FF5A0A]" />
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] sm:text-[10px] font-extrabold tracking-wider uppercase text-white font-[family-name:var(--font-heading)] leading-tight">
              JAVASCRIPT // REACT
            </span>
            <span className="text-[7px] sm:text-[8px] font-mono text-zinc-400">TAILWIND CSS</span>
          </div>
        </div>

        {/* Bottom-Right Satellite: B.Sc IT CGPA: 9.04 */}
        <div
          className="absolute bottom-16 -right-2 sm:-right-8 lg:-right-10 z-20 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-full bg-[#050505]/90 backdrop-blur-md border border-[#FF5A0A]/40 shadow-[0_10px_25px_rgba(255,90,10,0.25)] flex items-center gap-2 pointer-events-auto hover:border-[#FF9D2E] hover:scale-105 transition-all duration-300"
          style={{ transform: "translateZ(70px)" }}
          onMouseEnter={() => sound.playHover()}
        >
          <div className="p-1 rounded-full bg-[#FF5A0A]/20 text-[#FF9D2E]">
            <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] sm:text-[10px] font-extrabold tracking-wider uppercase text-white font-[family-name:var(--font-heading)] leading-tight">
              B.SC IT // CGPA 9.04
            </span>
            <span className="text-[7px] sm:text-[8px] font-mono text-emerald-400 font-semibold">MUMBAI UNIVERSITY</span>
          </div>
        </div>
      </div>
    </div>
  );
}
