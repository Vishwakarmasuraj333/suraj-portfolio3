"use client";

import { useEffect } from "react";
import { X, Download, Printer, ExternalLink, Mail, CheckCircle2, GraduationCap, Briefcase, Award } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import { sound } from "@/lib/audio";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    sound.playClick();
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-2xl animate-in fade-in duration-300 overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#0c0807] border border-[#FF5A0A]/40 rounded-3xl overflow-hidden shadow-[0_0_80px_rgba(255,90,10,0.35)] my-auto max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="p-5 sm:p-6 flex items-center justify-between border-b border-white/10 bg-black/60 shrink-0">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5A0A] animate-pulse" />
            <span className="text-xs sm:text-sm font-mono text-zinc-300 font-bold uppercase tracking-wider">
              CURRICULUM VITAE // SURAJ VISHWAKARMA
            </span>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/assets/suraj-vishwakarma-resume.pdf"
              download="Suraj_Vishwakarma_Resume.pdf"
              onClick={() => sound.playClick()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#FF5A0A] hover:bg-[#FF6D24] text-xs font-mono text-white font-bold transition-all shadow-[0_0_12px_#FF5A0A]"
              title="Download Official PDF Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span>DOWNLOAD PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-[#FF5A0A] text-xs font-mono text-zinc-200 hover:text-white bg-white/5 transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5 text-[#FF9D2E]" />
              <span className="hidden sm:inline">PRINT</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-[#FF5A0A] hover:text-white text-zinc-300 transition-colors"
              aria-label="Close Resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Resume Content Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 text-zinc-200 font-sans">
          {/* Header Block */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-black text-white font-[family-name:var(--font-heading)] uppercase tracking-tight">
                SURAJ VISHWAKARMA
              </h1>
              <p className="text-sm sm:text-base text-[#FF9D2E] font-mono font-semibold tracking-wider mt-1">
                Frontend &amp; Full Stack Developer | AI Systems Builder
              </p>
              <p className="text-xs text-zinc-400 mt-2 max-w-xl font-light leading-relaxed">
                Motivated Developer skilled in HTML5, CSS3, JavaScript (ES6+), ReactJS, Next.js, and Tailwind CSS. Focused on building clean, responsive, and user-friendly interfaces. Passionate about performance optimization, clean code, and transforming UI/UX ideas into fast, accessible web experiences.
              </p>
            </div>

            <div className="flex flex-col gap-1.5 text-xs font-mono text-zinc-300 sm:text-right">
              <a href="mailto:itxsurajofficial@gmail.com" className="text-[#FF9D2E] hover:underline">
                itxsurajofficial@gmail.com
              </a>
              <span>+91 93709 44696</span>
              <a
                href="https://github.com/Vishwakarmasuraj333"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white text-zinc-400"
              >
                github.com/Vishwakarmasuraj333
              </a>
              <a
                href="https://www.linkedin.com/in/suraj-vishwakarma-2ab64436a/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white text-zinc-400"
              >
                linkedin.com/in/suraj-vishwakarma-2ab64436a
              </a>
              <span className="text-emerald-400 font-semibold">AVAILABLE FOR FULL-TIME ROLES</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono text-[#FF5A0A] uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              EDUCATION
            </h2>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex flex-wrap justify-between items-center mb-1">
                  <h3 className="text-sm font-bold text-white">B.Sc. Information Technology — University of Mumbai</h3>
                  <span className="text-xs font-mono text-[#FF9D2E] font-bold">2022 — 2025</span>
                </div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-xs font-mono font-bold">
                    CGPA: 9.04 (A Grade)
                  </span>
                  <span className="text-xs text-zinc-400">• Distinction</span>
                </div>
                <p className="text-xs text-zinc-300">
                  Core competencies: Data Structures, Web Development, Object-Oriented Programming, Database Management Systems, Computer Networks.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex flex-wrap justify-between items-center mb-1">
                  <h3 className="text-sm font-bold text-white">Higher Secondary Certificate (12th), IT–Maths</h3>
                  <span className="text-xs font-mono text-zinc-400">2021 — 2022</span>
                </div>
                <span className="text-xs text-zinc-400">Percentage: 55%</span>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex flex-wrap justify-between items-center mb-1">
                  <h3 className="text-sm font-bold text-white">Secondary School Certificate (10th)</h3>
                  <span className="text-xs font-mono text-zinc-400">2019 — 2020</span>
                </div>
                <span className="text-xs text-zinc-400">Percentage: 66%</span>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-xs font-mono text-[#FF5A0A] uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
              <Award className="w-4 h-4" />
              OFFICIAL CERTIFICATIONS
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono text-[#FF9D2E] font-bold block mb-1">FreeCodeCamp</span>
                <span className="text-zinc-300">Front End Development Libraries (React, Redux, Bootstrap, jQuery)</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono text-[#FF9D2E] font-bold block mb-1">FreeCodeCamp</span>
                <span className="text-zinc-300">Responsive Web Design (HTML5, CSS3, Flexbox, CSS Grid)</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono text-[#FF9D2E] font-bold block mb-1">FreeCodeCamp</span>
                <span className="text-zinc-300">JavaScript Algorithms and Data Structures</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono text-[#FF9D2E] font-bold block mb-1">Simplilearn</span>
                <span className="text-zinc-300">Web Development for Beginners (HTML, CSS, JavaScript)</span>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-mono text-[#FF5A0A] uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
              <Award className="w-4 h-4" />
              TECHNICAL COMPETENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono text-[#FF9D2E] font-bold block mb-1">FRONTEND ARCHITECTURE</span>
                <span className="text-zinc-300">React 19, Next.js 16 (App Router), TypeScript, Tailwind CSS, Three.js, React Three Fiber, Framer Motion.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono text-[#FF9D2E] font-bold block mb-1">BACKEND &amp; MICROSERVICES</span>
                <span className="text-zinc-300">FastAPI, Python 3.12, Node.js, Express.js, Pydantic v2, RESTful APIs, WebSockets, JWT, OAuth 2.0 PKCE.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono text-[#FF9D2E] font-bold block mb-1">AI, ML &amp; DATA SCIENCE</span>
                <span className="text-zinc-300">XGBoost, Random Forest, Scikit-Learn, SHAP Explainable AI, Google Gemini API, LangChain, Multi-Agent Swarms.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                <span className="font-mono text-[#FF9D2E] font-bold block mb-1">DATABASES &amp; DEVOPS</span>
                <span className="text-zinc-300">PostgreSQL, MongoDB, MySQL, Supabase, Prisma ORM, Docker, Docker Compose, Git, Vercel, Render.</span>
              </div>
            </div>
          </div>

          {/* Featured Projects */}
          <div>
            <h2 className="text-xs font-mono text-[#FF5A0A] uppercase tracking-widest font-bold mb-4 flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              PRODUCTION CODEBASES &amp; PROJECTS
            </h2>
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex flex-wrap justify-between items-center mb-1">
                  <h3 className="text-sm font-bold text-white">IntelliTwin AI — Enterprise Cybersecurity &amp; GenAI Platform</h3>
                  <span className="text-xs font-mono text-[#FF5A0A]">2026 // CAPSTONE</span>
                </div>
                <p className="text-xs text-zinc-300 mb-2">
                  Engineered an end-to-end intrusion detection system utilizing real UNSW-NB15 benchmark telemetry. Developed FastAPI microservices, SHAP XAI attribution, and Gemini SOC triage reports with zero-crash fallback. 29 automated Pytest integration tests passed.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-zinc-400">
                  <span className="px-2 py-0.5 rounded bg-white/5">Python 3.12</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">FastAPI</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">XGBoost</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">SHAP</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">Next.js 16</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">PostgreSQL</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex flex-wrap justify-between items-center mb-1">
                  <h3 className="text-sm font-bold text-white">PulseSocial — Enterprise Social Media Management SaaS</h3>
                  <span className="text-xs font-mono text-[#FF5A0A]">2025-2026 // SAAS</span>
                </div>
                <p className="text-xs text-zinc-300 mb-2">
                  Built a standalone multi-channel social SaaS supporting 13 networks. Features studio post authoring with real-time live preview simulators, interactive calendar, AES-256-GCM token encryption, hashed email OTP authentication, and Gemini AI caption copilot.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-zinc-400">
                  <span className="px-2 py-0.5 rounded bg-white/5">Next.js 15/16</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">React 19</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">Prisma ORM</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">AES-256-GCM</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">OAuth PKCE</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="flex flex-wrap justify-between items-center mb-1">
                  <h3 className="text-sm font-bold text-white">SE Ranking Clone — Full-Stack SEO Analytics Suite</h3>
                  <span className="text-xs font-mono text-[#FF5A0A]">2025 // ANALYTICS</span>
                </div>
                <p className="text-xs text-zinc-300 mb-2">
                  Architected a high-performance organic keyword tracking suite, technical site audit engine, backlink monitor, and automated client reporting dashboard using Supabase and Next.js.
                </p>
                <div className="flex flex-wrap gap-1.5 text-[10px] font-mono text-zinc-400">
                  <span className="px-2 py-0.5 rounded bg-white/5">Next.js</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">TypeScript</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">Supabase</span>
                  <span className="px-2 py-0.5 rounded bg-white/5">Recharts</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom Actions */}
        <div className="p-5 sm:p-6 border-t border-white/10 bg-black/60 flex items-center justify-between shrink-0">
          <span className="text-xs font-mono text-zinc-400 hidden sm:inline">
            DOCUMENT VERIFIED // ZERO FABRICATION POLICY
          </span>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-5 py-2 rounded-full border border-white/20 text-xs font-mono text-white hover:border-[#FF5A0A] transition-colors"
            >
              PRINT RESUME
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2 rounded-full bg-[#FF5A0A] hover:bg-[#FF6D24] text-white text-xs font-mono uppercase font-bold shadow-[0_0_15px_rgba(255,90,10,0.5)]"
            >
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
