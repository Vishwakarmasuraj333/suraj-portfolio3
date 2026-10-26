"use client";

import { Calendar, Briefcase, GraduationCap, Code2, Sparkles, CheckCircle2 } from "lucide-react";
import { sound } from "@/lib/audio";

export default function ExperienceSection() {
  const timeline = [
    {
      year: "2026 — PRESENT",
      title: "Full Stack Developer & AI Systems Builder",
      organization: "Autonomous Projects & Research Lab",
      type: "ENGINEERING",
      icon: Code2,
      description:
        "Building production-grade full-stack SaaS platforms, agentic LLM workflows, and high-performance WebGL 3D web flagships. Delivering enterprise software architectures with zero-crash resilience.",
      achievements: [
        "Architected IntelliTwin AI: Multi-model cybersecurity intrusion detection (XGBoost 94.48% accuracy) with Gemini SOC Copilot.",
        "Built PulseSocial SaaS: Multi-channel social composer with 13-platform live preview simulators and AES-256-GCM token encryption.",
        "Developed SE Ranking Clone: Full-stack SEO analytics platform with Supabase and real-time organic keyword distribution.",
      ],
    },
    {
      year: "2025 — 2026",
      title: "Master of Science in Information Technology (M.Sc. IT)",
      organization: "Postgraduate Academic Program",
      type: "ACADEMICS & RESEARCH",
      icon: GraduationCap,
      description:
        "Specializing in Advanced Machine Learning, Explainable AI (XAI), Cloud Microservices, and Distributed Computing Systems. Authored capstone research benchmarked on UNSW-NB15.",
      achievements: [
        "Conducted empirical evaluation across 25,000 stratified network flows using 5-fold cross validation.",
        "Integrated shap.TreeExplainer computing mathematical Shapley values (φ) for packet feature contribution.",
        "Mastered advanced Python 3.12, FastAPI async pipelines, Docker virtualization, and PostgreSQL relational schemas.",
      ],
    },
    {
      year: "2022 — 2025",
      title: "Bachelor of Science in Information Technology (B.Sc. IT)",
      organization: "Undergraduate Academic Program",
      type: "ACADEMICS",
      icon: GraduationCap,
      description:
        "Completed comprehensive computer science curriculum with distinction. Built foundational strength in Object-Oriented Programming, Data Structures & Algorithms, and Database Management Systems.",
      achievements: [
        "Graduated with top academic standing across Software Engineering and Web Architecture modules.",
        "Developed multiple full-stack web applications using React, Node.js, Express, and MongoDB.",
        "Led student technical projects and conducted peer code reviews on clean code standards.",
      ],
    },
  ];

  return (
    <section id="experience" className="relative py-28 sm:py-36 bg-[#050505] text-white border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#FF5A0A]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF5A0A]/30 bg-[#FF5A0A]/10 text-[#FF9D2E] text-xs font-mono tracking-wider uppercase mb-4">
              <Calendar className="w-3.5 h-3.5" />
              05 // TRAJECTORY &amp; MILESTONES
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight font-[family-name:var(--font-heading)] leading-none">
              EXPERIENCE &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A0A] via-[#FF8A24] to-[#FF9D2E]">
                ACADEMIC TIMELINE
              </span>
            </h2>
          </div>

          <p className="text-zinc-400 text-sm sm:text-base max-w-md font-light leading-relaxed">
            A chronological timeline of hands-on production software engineering, postgraduate research, and foundational academic achievements.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12 sm:space-y-16">
          {timeline.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.year}
                onMouseEnter={() => sound.playHover()}
                className="relative group"
              >
                {/* Glowing Node on Timeline Axis */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#050505] border-2 border-[#FF5A0A] flex items-center justify-center group-hover:scale-115 transition-transform shadow-[0_0_12px_#FF5A0A]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF9D2E]" />
                </div>

                {/* Timeline Card */}
                <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-[#FF5A0A]/60 transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full bg-[#FF5A0A]/15 border border-[#FF5A0A]/30 text-xs font-mono text-[#FF9D2E] font-bold">
                      {item.year}
                    </span>
                    <span className="text-xs font-mono text-zinc-500 uppercase tracking-widest">
                      {item.type}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold uppercase text-white font-[family-name:var(--font-heading)] mb-1 group-hover:text-[#FF9D2E] transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-sm font-mono text-[#FF5A0A] block mb-4">
                    {item.organization}
                  </span>

                  <p className="text-zinc-300 text-sm leading-relaxed mb-6 font-light">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-4 border-t border-white/5">
                    {item.achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                        <CheckCircle2 className="w-4 h-4 text-[#FF5A0A] shrink-0 mt-0.5" />
                        <span className="leading-normal">{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
