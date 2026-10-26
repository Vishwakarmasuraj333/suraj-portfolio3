"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, FileText, Sparkles, Terminal, Sun, Moon } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { sound } from "@/lib/audio";

interface NavbarProps {
  onResumeClick?: () => void;
}

export default function Navbar({ onResumeClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [activeSection, setActiveSection] = useState("home");
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    // Check saved theme or system preference
    const savedTheme = localStorage.getItem("portfolio-theme") as "dark" | "light" | null;
    if (savedTheme === "light") {
      setTheme("light");
      document.documentElement.classList.add("light");
    } else {
      setTheme("dark");
      document.documentElement.classList.remove("light");
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);

      // Calculate scroll progress percentage for top progress bar
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollPercent(Math.min(100, Math.max(0, (scrollY / totalHeight) * 100)));
      }

      const sections = ["home", "about", "skills", "ai-engine", "projects", "experience", "contact"];
      const current = sections.find((sec) => {
        const el = document.getElementById(sec);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 250 && rect.bottom >= 250;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleToggleTheme = () => {
    sound.playClick();
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("portfolio-theme", nextTheme);
    if (nextTheme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  };

  const navLinks = [
    { label: "HOME", href: "#home", id: "home" },
    { label: "ABOUT", href: "#about", id: "about" },
    { label: "SKILLS", href: "#skills", id: "skills" },
    { label: "AI SYSTEMS", href: "#ai-engine", id: "ai-engine" },
    { label: "PROJECTS", href: "#projects", id: "projects" },
    { label: "EXPERIENCE", href: "#experience", id: "experience" },
    { label: "CONTACT", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (href: string) => {
    sound.playClick();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Window Global Scroll Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-50 bg-black/40 pointer-events-none">
        <div
          className="h-full bg-gradient-to-r from-[#FF5A0A] via-[#FF8A24] to-[#FF9D2E] shadow-[0_0_12px_#FF5A0A] transition-all duration-150"
          style={{ width: `${scrollPercent}%` }}
        />
      </div>

      {/* Floating Island Navigation Header */}
      <header className="fixed top-3 sm:top-5 left-0 right-0 z-40 px-3 sm:px-6 pointer-events-none transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Main Floating Glass Capsule */}
          <div
            className={`w-full flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-400 pointer-events-auto ${
              isScrolled
                ? "bg-[#050505]/90 backdrop-blur-xl border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.9),0_0_20px_rgba(255,90,10,0.15)]"
                : "bg-[#050505]/75 backdrop-blur-md border border-white/[0.08] shadow-[0_10px_30px_rgba(0,0,0,0.6)]"
            }`}
          >
            {/* Brand Logo Monogram */}
            <Link
              href="#home"
              onClick={() => handleNavClick("#home")}
              onMouseEnter={() => sound.playHover()}
              className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            >
              {/* Geometric SV Emblem */}
              <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-xl bg-gradient-to-br from-[#FF5A0A]/20 via-black to-black border border-[#FF5A0A]/50 group-hover:border-[#FF5A0A] shadow-[0_0_12px_rgba(255,90,10,0.35)] transition-all">
                <span className="font-mono font-black text-xs sm:text-sm tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-[#FF5A0A]">
                  SV
                </span>
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#FF5A0A] shadow-[0_0_8px_#FF5A0A] animate-pulse" />
              </div>

              <div className="flex flex-col">
                <span className="text-white font-extrabold text-xs sm:text-sm tracking-[0.2em] uppercase font-[family-name:var(--font-heading)] leading-none group-hover:text-[#FF9D2E] transition-colors">
                  SURAJ VISHWAKARMA
                </span>
                <div className="flex items-center gap-1.5 mt-1">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-emerald-500 shadow-[0_0_6px_#10B981]" />
                  </span>
                  <span className="text-[#FF5A0A] font-mono text-[8px] sm:text-[9px] tracking-[0.25em] uppercase leading-tight font-semibold">
                    AI FULL STACK ENGINEER
                  </span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Links Pill Strip */}
            <nav className="hidden xl:flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/[0.02] border border-white/5">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    onMouseEnter={() => sound.playHover()}
                    className={`relative px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-[0.12em] font-[family-name:var(--font-heading)] transition-all duration-200 ${
                      isActive
                        ? "text-white bg-[#FF5A0A]/20 border border-[#FF5A0A]/40 shadow-[0_0_12px_rgba(255,90,10,0.3)] font-bold"
                        : "text-zinc-400 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Island - Compact & Zero Overflow */}
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              {/* GitHub Icon Link */}
              <a
                href="https://github.com/Vishwakarmasuraj333"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-[#FF5A0A] hover:bg-[#FF5A0A]/10 text-zinc-300 hover:text-white transition-all hover:scale-105"
                title="GitHub: @Vishwakarmasuraj333"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#FF5A0A]" />
              </a>

              {/* LinkedIn Icon Link */}
              <a
                href="https://www.linkedin.com/in/suraj-vishwakarma-2ab64436a/"
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-[#FF9D2E] hover:bg-[#FF9D2E]/10 text-zinc-300 hover:text-white transition-all hover:scale-105"
                title="LinkedIn: suraj-vishwakarma-2ab64436a"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-[#FF9D2E]" />
              </a>

              {/* Dark / Light Mode Toggle */}
              <button
                onClick={handleToggleTheme}
                onMouseEnter={() => sound.playHover()}
                title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
                aria-label="Toggle Theme"
                className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:border-[#FF5A0A]/50 text-zinc-300 hover:text-[#FF9D2E] transition-all hover:scale-105"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-[#FF9D2E] animate-pulse" />
                ) : (
                  <Moon className="w-4 h-4 text-zinc-800" />
                )}
              </button>

              {/* Quick Resume Button */}
              <button
                onClick={() => {
                  sound.playClick();
                  onResumeClick?.();
                }}
                onMouseEnter={() => sound.playHover()}
                className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full border border-white/10 hover:border-[#FF5A0A]/50 text-[11px] font-mono text-zinc-200 hover:text-white bg-white/5 hover:bg-[#FF5A0A]/10 transition-all"
                title="View & Download Curriculum Vitae"
              >
                <FileText className="w-3 h-3 text-[#FF5A0A]" />
                <span>RESUME</span>
              </button>

              {/* Glowing 'LET'S TALK' Pill CTA */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("#contact");
                }}
                onMouseEnter={() => sound.playHover()}
                className="group relative inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full border border-[#FF5A0A]/70 bg-gradient-to-r from-[#FF5A0A]/20 to-[#FF5A0A]/10 hover:from-[#FF5A0A] hover:to-[#FF6D24] text-white font-[family-name:var(--font-heading)] text-xs tracking-wider uppercase font-semibold transition-all duration-300 shadow-[0_0_12px_rgba(255,90,10,0.3)] hover:shadow-[0_0_20px_rgba(255,90,10,0.6)]"
              >
                <span>LET&apos;S TALK</span>
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5A0A] opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FF5A0A] shadow-[0_0_6px_#FF5A0A]" />
                </span>
              </a>

              {/* Mobile Drawer Trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="xl:hidden flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 text-white"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 p-6 rounded-3xl bg-[#050505]/98 backdrop-blur-2xl border border-[#FF5A0A]/30 shadow-[0_20px_50px_rgba(0,0,0,0.95)] pointer-events-auto flex flex-col gap-4 animate-in slide-in-from-top-4 duration-300">
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest">
                NAVIGATION MATRIX
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-full text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-sm font-bold tracking-widest py-2 px-3 rounded-xl font-[family-name:var(--font-heading)] flex items-center justify-between transition-colors ${
                    activeSection === link.id
                      ? "bg-[#FF5A0A]/20 text-[#FF9D2E] border border-[#FF5A0A]/40"
                      : "text-zinc-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5A0A]" />
                </a>
              ))}
            </nav>

            <div className="flex items-center justify-between pt-3 border-t border-white/10">
              <a
                href="https://github.com/Vishwakarmasuraj333"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/20 text-xs font-mono text-white bg-white/5 hover:border-[#FF5A0A]"
              >
                <GithubIcon className="w-3.5 h-3.5 text-[#FF5A0A]" />
                <span>GITHUB</span>
              </a>

              <button
                onClick={handleToggleTheme}
                className="flex items-center gap-2 px-3 py-2 rounded-full border border-white/20 text-xs font-mono text-white bg-white/5"
              >
                {theme === "dark" ? <Sun className="w-3.5 h-3.5 text-[#FF9D2E]" /> : <Moon className="w-3.5 h-3.5 text-zinc-800" />}
                <span>{theme === "dark" ? "LIGHT" : "DARK"}</span>
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
