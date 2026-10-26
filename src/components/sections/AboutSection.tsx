"use client";

import { GraduationCap, Award, Code2, Compass, Cpu, Database, Sparkles, Terminal, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { sound } from "@/lib/audio";

export default function AboutSection() {
  const skills = [
    { name: "Full Stack Architecture (Next.js, React, Node)", level: 96, icon: Code2 },
    { name: "Machine Learning & AI Engineering (FastAPI, Python, XGBoost)", level: 94, icon: Cpu },
    { name: "Database Engineering (PostgreSQL, MongoDB, Prisma)", level: 92, icon: Database },
    { name: "Generative AI, Gemini LLMs & Multi-Agent Systems", level: 90, icon: Sparkles },
  ];

  const education = [
    {
      degree: "Master of Science in Information Technology (M.Sc. IT)",
      institution: "Advanced Computing, AI & Systems Architecture",
      timeline: "2025 — 2026 (FINAL YEAR)",
      highlights: "Capstone Research: IntelliTwin AI (Enterprise ML Intrusion Detection with SHAP Explainability & Gemini SOC Copilot).",
    },
    {
      degree: "Bachelor of Science in Information Technology (B.Sc. IT)",
      institution: "Core Computer Science & Software Engineering",
      timeline: "2022 — 2025 (COMPLETED)",
      highlights: "Graduated with top academic standing across Full-Stack Web Development, Operating Systems, Database Management, and Data Structures.",
    },
  ];

  const pillars = [
    { title: "Empirical Rigor", desc: "No fabricated metrics. Machine learning models validated across benchmark UNSW-NB15 datasets with 29 passing Pytest suites." },
    { title: "Type-Safe Full-Stack", desc: "End-to-end TypeScript, Next.js App Router, Pydantic v2 schemas, and strict relational integrity via PostgreSQL & Prisma." },
    { title: "Hardware-Grade Security", desc: "Hardware AES-256-GCM token encryption, OAuth 2.0 PKCE state verification, and sliding token bucket rate limiting." },
  ];

  return (
    <section id="about" className="relative py-28 sm:py-36 bg-[#050505] text-white overflow-hidden border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-[450px] h-[450px] bg-[#FF5A0A]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF5A0A]/30 bg-[#FF5A0A]/10 text-[#FF9D2E] text-xs font-mono tracking-wider uppercase mb-4">
              <Compass className="w-3.5 h-3.5" />
              01 // THE ENGINEER BEHIND THE CODE
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight font-[family-name:var(--font-heading)] leading-none">
              WHERE SOFTWARE ENGINEERING MEETS <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A0A] to-[#FF9D2E]">
                ARTIFICIAL INTELLIGENCE
              </span>
            </h2>
          </div>

          <p className="text-zinc-400 text-sm sm:text-base max-w-md font-light leading-relaxed">
            I build resilient, production-grade web applications and machine learning engines that solve real-world complexities with surgical precision.
          </p>
        </div>

        {/* Grid: Developer Profile + Visual Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          {/* Visual Composition Image */}
          <div className="lg:col-span-5 relative group">
            <div className="relative rounded-2xl overflow-hidden border border-[#FF5A0A]/30 aspect-square bg-zinc-950 shadow-[0_0_40px_rgba(255,90,10,0.2)]">
              <Image
                src="/assets/suraj-developer.jpg"
                alt="Suraj Vishwakarma AI Full Stack Developer"
                fill
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />

              {/* Overlay card */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-[#FF5A0A]/30">
                <span className="text-[10px] font-mono tracking-widest text-[#FF9D2E] uppercase block mb-1">
                  CORE IDENTITY
                </span>
                <p className="text-xs sm:text-sm text-zinc-200 font-medium">
                  &ldquo;Building intelligent products where software engineering meets artificial intelligence.&rdquo;
                </p>
              </div>
            </div>

            {/* Glowing Accent Border Behind Image */}
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#FF5A0A]/30 to-[#FF9D2E]/10 blur-xl -z-10 group-hover:opacity-100 transition-opacity" />
          </div>

          {/* Philosophy & Skill Matrices */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <div className="flex flex-col gap-4">
              <span className="text-xs font-mono tracking-widest text-[#FF5A0A] uppercase font-bold">
                DEVELOPER PROFILE &amp; TRAJECTORY
              </span>
              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed font-light">
                Hi, I am <strong className="text-white font-bold">Suraj Vishwakarma</strong>. I specialize in designing scalable full-stack architectures, integrating cutting-edge machine learning inference models, and deploying Generative AI platforms. Currently completing my <strong className="text-[#FF9D2E]">M.Sc. in Information Technology (2025–2026)</strong> after earning my <strong className="text-white">B.Sc. IT (2025)</strong>, I combine theoretical depth with hands-on production codebases.
              </p>
            </div>

            {/* Skills Bars */}
            <div className="flex flex-col gap-5">
              {skills.map((skill) => {
                const Icon = skill.icon;
                return (
                  <div key={skill.name} className="flex flex-col gap-2">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="flex items-center gap-2 text-zinc-200 font-medium">
                        <Icon className="w-3.5 h-3.5 text-[#FF5A0A]" />
                        {skill.name}
                      </span>
                      <span className="font-mono text-xs text-[#FF9D2E]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden p-0.5 border border-white/5">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-[#FF5A0A] to-[#FF9D2E] transition-all duration-1000 shadow-[0_0_10px_#FF5A0A]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Engineering Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              {pillars.map((p) => (
                <div key={p.title} className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5">
                  <span className="text-xs font-bold text-white font-[family-name:var(--font-heading)] block mb-1">
                    {p.title}
                  </span>
                  <p className="text-[11px] text-zinc-400 leading-normal">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education Milestone Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-white/[0.02] via-[#FF5A0A]/[0.05] to-white/[0.02] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#FF5A0A]/20 border border-[#FF5A0A]/40 flex items-center justify-center text-[#FF5A0A]">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">
                ACADEMIC FOUNDATION
              </span>
              <span className="text-base sm:text-lg font-bold text-white font-[family-name:var(--font-heading)]">
                HIGHER EDUCATION IN INFORMATION TECHNOLOGY
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-auto">
            {education.map((edu) => (
              <div key={edu.degree} className="flex flex-col">
                <span className="text-xs font-mono text-[#FF9D2E] font-bold">
                  {edu.timeline}
                </span>
                <span className="text-xs sm:text-sm font-bold text-white font-[family-name:var(--font-heading)]">
                  {edu.degree}
                </span>
                <span className="text-[11px] text-zinc-400 leading-normal mt-0.5">
                  {edu.highlights}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
