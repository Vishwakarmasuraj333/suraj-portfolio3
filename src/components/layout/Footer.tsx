"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUp, Terminal, Mail, Cpu, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { sound } from "@/lib/audio";

interface FooterProps {
  onResumeClick?: () => void;
}

export default function Footer({ onResumeClick }: FooterProps) {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socials = [
    { label: "GITHUB", href: "https://github.com/Vishwakarmasuraj333", icon: GithubIcon },
    { label: "LINKEDIN", href: "https://www.linkedin.com/in/suraj-vishwakarma-2ab64436a/", icon: LinkedinIcon },
    { label: "EMAIL", href: "mailto:itxsurajofficial@gmail.com", icon: Mail },
  ];

  return (
    <footer className="relative bg-[#050505] text-zinc-400 border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Subtle bottom ember glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-32 bg-[#FF5A0A]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-white/5">
          {/* Brand Monogram */}
          <div className="flex items-center gap-3">
            <div className="relative w-9 h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#FF5A0A]/20 to-black/80 border border-[#FF5A0A]/40 shadow-[0_0_12px_rgba(255,90,10,0.3)]">
              <span className="font-black text-sm font-mono tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FF5A0A]">
                SV
              </span>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-extrabold text-sm tracking-[0.2em] uppercase font-[family-name:var(--font-heading)] leading-none">
                SURAJ VISHWAKARMA
              </span>
              <span className="text-[#FF5A0A] font-mono text-[9px] tracking-[0.25em] uppercase leading-tight font-semibold mt-0.5">
                FULL STACK DEVELOPER • AI ENGINEER
              </span>
            </div>
          </div>

          {/* Social Links Row */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-mono">
            {socials.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  className="flex items-center gap-1.5 text-zinc-400 hover:text-[#FF9D2E] transition-colors tracking-wider"
                >
                  <Icon className="w-3.5 h-3.5 text-[#FF5A0A]" />
                  <span>{s.label}</span>
                </a>
              );
            })}

            {/* Quick Resume Trigger */}
            <button
              onClick={() => {
                sound.playClick();
                onResumeClick?.();
              }}
              onMouseEnter={() => sound.playHover()}
              className="text-[#FF9D2E] hover:text-white transition-colors tracking-wider"
            >
              RESUME (PDF)
            </button>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => sound.playHover()}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-[#FF5A0A] text-xs font-mono text-zinc-300 hover:text-white transition-all duration-300 bg-white/[0.02]"
            title="Scroll to Top of Page"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF5A0A]" />
          </button>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-500">
          <div>
            © {currentYear} SURAJ VISHWAKARMA. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-2">
            <span>BUILT WITH NEXT.JS 16 &amp; THREE.JS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF5A0A]" />
            <span className="text-zinc-400">ENGINEERED FOR PRODUCTION</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
