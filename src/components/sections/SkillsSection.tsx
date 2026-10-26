"use client";

import { useState } from "react";
import { Cpu, Code2, Database, Cloud, Wrench, Sparkles, Terminal, CheckCircle2 } from "lucide-react";
import { sound } from "@/lib/audio";

interface SkillItem {
  name: string;
  category: "Frontend" | "Backend" | "AI/ML" | "Database" | "Cloud" | "Tools";
  level: number;
  description: string;
  badge: string;
}

const SKILLS_DATA: SkillItem[] = [
  // AI / ML
  { name: "Python", category: "AI/ML", level: 95, description: "Core language for ML pipelines, FastAPI services, and data transformation.", badge: "CORE" },
  { name: "Machine Learning (XGBoost, RF)", category: "AI/ML", level: 92, description: "Supervised and unsupervised models for intrusion detection and classification.", badge: "RESEARCH" },
  { name: "Generative AI & LLMs", category: "AI/ML", level: 90, description: "Gemini 2.0 API, prompt engineering, multi-turn agents, and retrieval flows.", badge: "GENAI" },
  { name: "SHAP Explainable AI", category: "AI/ML", level: 88, description: "Feature attribution and mathematical Shapley value computations for black-box models.", badge: "XAI" },

  // Frontend
  { name: "React 19 & Next.js 16", category: "Frontend", level: 96, description: "App Router, Server Components, Partial Prefetching, and Turbopack.", badge: "PRODUCTION" },
  { name: "TypeScript", category: "Frontend", level: 94, description: "Strict static typing, generic interfaces, and enterprise full-stack safety.", badge: "TYPE-SAFE" },
  { name: "Tailwind CSS", category: "Frontend", level: 95, description: "Utility-first design systems, dark modes, and modern responsive layouts.", badge: "DESIGN" },
  { name: "Three.js & WebGL", category: "Frontend", level: 86, description: "3D scene composition, custom shaders, and React Three Fiber rendering.", badge: "3D" },

  // Backend
  { name: "FastAPI", category: "Backend", level: 93, description: "High-performance asynchronous Python REST APIs with Pydantic v2 schemas.", badge: "HIGH-SPEED" },
  { name: "Node.js & Express.js", category: "Backend", level: 92, description: "Event-driven microservices, token authentication, and webhook handlers.", badge: "RUNTIME" },
  { name: "JWT & OAuth 2.0 PKCE", category: "Backend", level: 91, description: "Hardware-grade token encryption (AES-256-GCM) and stateless session security.", badge: "AUTH" },

  // Database
  { name: "PostgreSQL", category: "Database", level: 92, description: "Relational modeling, indexing, connection pooling, and complex analytical queries.", badge: "RELATIONAL" },
  { name: "MongoDB", category: "Database", level: 90, description: "Document schemas, aggregations, and high-velocity telemetry logs.", badge: "NOSQL" },
  { name: "Prisma ORM", category: "Database", level: 94, description: "Type-safe database migrations, relational joins, and automated schema generation.", badge: "ORM" },
  { name: "MySQL", category: "Database", level: 88, description: "Normalized schemas, stored procedures, and transactional integrity.", badge: "ACID" },

  // Cloud & DevOps
  { name: "Docker & Compose", category: "Cloud", level: 90, description: "Multi-container microservices virtualization and reproducible build environments.", badge: "CONTAINER" },
  { name: "Vercel & Render", category: "Cloud", level: 94, description: "Automated Git CI/CD deployments, edge edge routing, and cloud health monitors.", badge: "DEPLOY" },
  { name: "Git & GitHub Actions", category: "Cloud", level: 93, description: "Version control workflows, automated linting, and Pytest / Playwright suites.", badge: "DEVOPS" },
  { name: "AWS Basics", category: "Cloud", level: 82, description: "S3 object storage, EC2 instances, and IAM access policies.", badge: "INFRA" },

  // Tools
  { name: "Pytest & Playwright", category: "Tools", level: 90, description: "Automated end-to-end integration tests and unit test suites.", badge: "QA" },
  { name: "Postman & REST Client", category: "Tools", level: 94, description: "API contract testing, environment variables, and mock servers.", badge: "TESTING" },
  { name: "Linux & Bash", category: "Tools", level: 88, description: "Server administration, cron jobs, environment orchestration, and shell scripting.", badge: "OS" },
];

type SkillCategory = "ALL" | "AI/ML" | "Frontend" | "Backend" | "Database" | "Cloud" | "Tools";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("ALL");
  const [hoveredSkill, setHoveredSkill] = useState<SkillItem | null>(null);

  const categories: SkillCategory[] = ["ALL", "AI/ML", "Frontend", "Backend", "Database", "Cloud", "Tools"];

  const filteredSkills =
    activeCategory === "ALL"
      ? SKILLS_DATA
      : SKILLS_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative py-28 sm:py-36 bg-[#050505] text-white border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[550px] h-[550px] bg-[#FF5A0A]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14 sm:mb-18">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF5A0A]/30 bg-[#FF5A0A]/10 text-[#FF9D2E] text-xs font-mono tracking-wider uppercase mb-4">
              <Cpu className="w-3.5 h-3.5" />
              02 // TECHNICAL ARSENAL
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight font-[family-name:var(--font-heading)] leading-none">
              TECH STACK &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A0A] via-[#FF8A24] to-[#FF9D2E]">
                SYSTEM CAPABILITIES
              </span>
            </h2>
          </div>

          <p className="text-zinc-400 text-sm sm:text-base max-w-md font-light leading-relaxed">
            Spanning full-stack software architecture, artificial intelligence engineering, and enterprise database systems.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-12 sm:mb-16">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  sound.playClick();
                  setActiveCategory(cat);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs font-mono tracking-wider uppercase transition-all duration-300 ${
                  isActive
                    ? "bg-[#FF5A0A] text-white shadow-[0_0_20px_rgba(255,90,10,0.5)] font-bold border border-[#FF5A0A]"
                    : "bg-white/[0.03] text-zinc-400 hover:text-white border border-white/10 hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Skills Grid with Interactive Cards & Progress Bars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              onMouseEnter={() => {
                sound.playHover();
                setHoveredSkill(skill);
              }}
              onMouseLeave={() => setHoveredSkill(null)}
              className="group p-6 rounded-2xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-[#FF5A0A]/70 hover:shadow-[0_0_25px_rgba(255,90,10,0.2)] transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono tracking-wider px-2.5 py-0.5 rounded-full bg-[#FF5A0A]/10 border border-[#FF5A0A]/30 text-[#FF9D2E] font-semibold">
                    {skill.badge}
                  </span>
                  <span className="text-xs font-mono text-zinc-400 font-bold">
                    {skill.level}%
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white font-[family-name:var(--font-heading)] group-hover:text-[#FF9D2E] transition-colors mb-2">
                  {skill.name}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed font-light mb-5">
                  {skill.description}
                </p>
              </div>

              {/* Animated Progress Bar */}
              <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden p-px">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#FF5A0A] to-[#FF9D2E] transition-all duration-700 shadow-[0_0_8px_#FF5A0A]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Quick Tech Architecture Summary Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#FF5A0A]/10 via-black to-white/[0.02] border border-[#FF5A0A]/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#FF5A0A]/20 border border-[#FF5A0A]/40 flex items-center justify-center text-[#FF5A0A]">
              <Terminal className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block">
                SYSTEM PHILOSOPHY
              </span>
              <span className="text-base sm:text-lg font-bold text-white font-[family-name:var(--font-heading)]">
                PRODUCTION-FIRST, TYPE-SAFE &amp; RESILIENT ARCHITECTURES
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-zinc-300">
            <span className="px-3 py-1 rounded-md bg-black/60 border border-white/10">Zero-Crash Fallbacks</span>
            <span className="px-3 py-1 rounded-md bg-black/60 border border-white/10">REST &amp; WebSockets</span>
            <span className="px-3 py-1 rounded-md bg-black/60 border border-white/10">CI/CD Tested</span>
          </div>
        </div>
      </div>
    </section>
  );
}
