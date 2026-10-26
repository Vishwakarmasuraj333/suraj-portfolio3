"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ArrowUpRight, X, ChevronLeft, ChevronRight, ExternalLink, Sparkles, Layers, Shield, Globe2, Cpu, CheckCircle2 } from "lucide-react";
import { GithubIcon } from "@/components/ui/BrandIcons";
import { sound } from "@/lib/audio";

export interface Project {
  id: string;
  title: string;
  client: string;
  category: "AI & CYBERSECURITY" | "FULL STACK SAAS" | "SEO ANALYTICS" | "AI AGENTS";
  year: string;
  image: string;
  tagline: string;
  summary: string;
  challenge: string;
  solution: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  colors: string[];
  githubUrl?: string;
  demoUrl?: string;
  isFeatured?: boolean;
}

const PROJECTS: Project[] = [
  {
    id: "intellitwin-ai",
    title: "INTELLITWIN AI: CYBERSECURITY PLATFORM",
    client: "M.Sc. IT CAPSTONE & RESEARCH PORTFOLIO",
    category: "AI & CYBERSECURITY",
    year: "2026",
    image: "/assets/project-intellitwin.jpg",
    tagline: "Enterprise intrusion detection, UNSW-NB15 ML inference & GenAI SOC copilot",
    summary:
      "IntelliTwin AI is an enterprise-grade full-stack cybersecurity intrusion detection and automated Security Operations Center (SOC) triage platform. It unifies authentic machine learning (XGBoost 94.48% accuracy, Random Forest, Isolation Forest) evaluated across 25,000 flows from the benchmark UNSW-NB15 dataset, explainable AI (SHAP TreeExplainer), and a Google Gemini GenAI SOC Copilot with zero-crash fallbacks.",
    challenge:
      "Modern SOC analysts suffer from alert fatigue. Black-box ML models flag anomalies without explaining the underlying packet attributes, leading to delayed incident response and potential breach escalations.",
    solution:
      "Integrated shap.TreeExplainer computing mathematical Shapley values (φ) for packet rate, byte ratios, and connection windows. Synthesized with a Gemini GenAI engine that outputs structured Tier-3 SOC incident reports mapped directly to the MITRE ATT&CK framework with actionable remediation playbooks.",
    technologies: ["Python 3.12", "FastAPI", "XGBoost", "SHAP XAI", "Next.js 16", "PostgreSQL", "UNSW-NB15", "Pytest (29 Passed)"],
    metrics: [
      { label: "Champion Test Accuracy", value: "94.48%" },
      { label: "Champion F1-Score", value: "0.9602" },
      { label: "Evaluated Network Flows", value: "25,000" },
      { label: "Integration Tests", value: "29 Passed" },
    ],
    colors: ["#050505", "#FF5A0A", "#FF9D2E", "#00B4D8", "#1E293B"],
    githubUrl: "https://github.com/Vishwakarmasuraj333",
    demoUrl: "#",
    isFeatured: true,
  },
  {
    id: "pulsesocial-saas",
    title: "PULSESOCIAL: ENTERPRISE SOCIAL SAAS",
    client: "FULL-STACK SAAS PRODUCT",
    category: "FULL STACK SAAS",
    year: "2025-2026",
    image: "/assets/project-pulsesocial.jpg",
    tagline: "Multi-channel social management SaaS with Gemini AI copilot & AES-256-GCM encryption",
    summary:
      "PulseSocial is an enterprise social media management SaaS platform built with the Next.js App Router, Prisma ORM, and comprehensive OAuth integrations. Features a unified studio composer, real-time live preview simulators for 13 social networks, an interactive content calendar, cross-network analytics, and hardware-grade token security.",
    challenge:
      "Managing disparate social networks requires seamless multi-tenant authentication, strict rate limit handling across various third-party APIs, and hardware-grade credential security.",
    solution:
      "Engineered an AES-256-GCM encrypted token vault that never stores raw passwords. Integrated OAuth 2.0 with PKCE and state protection, paired with Gemini AI for automated contextual caption generation across Instagram, X, LinkedIn, and Facebook.",
    technologies: ["Next.js 15/16", "React 19", "TypeScript", "Prisma ORM", "Tailwind CSS", "Gemini AI", "AES-256-GCM", "OAuth PKCE"],
    metrics: [
      { label: "Supported Platforms", value: "13 Networks" },
      { label: "Security Encryption", value: "AES-256-GCM" },
      { label: "Verification Flow", value: "Hashed OTP" },
      { label: "Live Simulators", value: "4 Platforms" },
    ],
    colors: ["#050505", "#FF5A0A", "#FF9D2E", "#38B2AC", "#2D3748"],
    githubUrl: "https://github.com/Vishwakarmasuraj333",
    demoUrl: "#",
    isFeatured: true,
  },
  {
    id: "seranking-clone",
    title: "SE RANKING CLONE: SEO ANALYTICS SUITE",
    client: "ORGANIC INTELLIGENCE PLATFORM",
    category: "SEO ANALYTICS",
    year: "2025",
    image: "/assets/project-seranking.jpg",
    tagline: "Comprehensive keyword ranking tracker, technical site auditor & backlink monitor",
    summary:
      "A high-performance full-stack SEO analytics platform modeled after industry leader SE Ranking. Features organic keyword distribution tracking, real-time site audit crawlers, domain authority scoring, and automated reporting dashboards.",
    challenge:
      "Aggregating and graphing hundreds of thousands of organic search data points in real time without bogging down client browser performance.",
    solution:
      "Built a specialized analytical query pipeline with Supabase and Next.js Server Components, delivering instant sub-second chart rendering for traffic trends, backlink health, and top competitor rankings.",
    technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Recharts", "SEO Crawler APIs"],
    metrics: [
      { label: "Organic Keywords Tracked", value: "68,500+" },
      { label: "Site Audit Health Score", value: "88/100" },
      { label: "Referring Domains Monitored", value: "28,000" },
      { label: "Chart Render Latency", value: "< 250ms" },
    ],
    colors: ["#050505", "#FF5A0A", "#FFA629", "#22C55E", "#1E293B"],
    githubUrl: "https://github.com/Vishwakarmasuraj333",
    demoUrl: "#",
    isFeatured: true,
  },
  {
    id: "ai-agents-orchestrator",
    title: "AUTONOMOUS MULTI-AGENT SWARM",
    client: "RESEARCH & AUTOMATION LAB",
    category: "AI AGENTS",
    year: "2025-2026",
    image: "/assets/project-cyberpunk.jpg",
    tagline: "Autonomous task-decomposing agent swarms with structured tool invocation",
    summary:
      "A distributed AI multi-agent orchestration framework where primary planner agents decompose complex technical tasks, assign subtasks to specialist agents (Code Writer, Security Auditor, Test Runner), and aggregate verified results.",
    challenge:
      "Preventing hallucinations and infinite loops in autonomous LLM workflows while ensuring strictly formatted JSON responses.",
    solution:
      "Implemented Pydantic v2 validation filters, schema enforcement, sliding context windows, and automated fallback breakers to guarantee 100% deterministic execution.",
    technologies: ["Python", "Gemini 2.0 API", "Pydantic v2", "LangChain", "FastAPI", "WebSockets"],
    metrics: [
      { label: "Tool Calling Precision", value: "99.2%" },
      { label: "Task Convergence Rate", value: "96.5%" },
      { label: "Average Execution Time", value: "3.2s" },
      { label: "Subagent Handshake", value: "Zero-Loss" },
    ],
    colors: ["#050505", "#FF5A0A", "#FF9D2E", "#F43F5E", "#0F172A"],
    githubUrl: "https://github.com/Vishwakarmasuraj333",
    demoUrl: "#",
  },
  {
    id: "suraj-portfolio-3d",
    title: "CINEMATIC 3D DEVELOPER ECOSYSTEM",
    client: "PERSONAL TECHNICAL PORTFOLIO",
    category: "FULL STACK SAAS",
    year: "2026",
    image: "/assets/suraj-developer.jpg",
    tagline: "Interactive Three.js & WebGL portfolio engineered with Next.js 16 and R3F",
    summary:
      "A futuristic, Awwwards-grade developer portfolio featuring real-time Three.js scene rendering, GPU-instanced floating particles, interactive 3D code symbols, Web Audio synthesizer, and server-side API validation.",
    challenge:
      "Balancing high-end WebGL 3D graphics and glowing volumetric shaders with high 60fps performance across desktop, tablet, and mobile devices.",
    solution:
      "Constructed isolated Three.js client modules, dynamic viewport scaling, DPR throttling for mobile, and GPU instancing for rock shards and code particles.",
    technologies: ["Next.js 16", "Three.js", "React Three Fiber", "Drei", "Tailwind CSS", "Framer Motion"],
    metrics: [
      { label: "Target Frame Rate", value: "60 FPS Locked" },
      { label: "Build Output Errors", value: "0 Errors" },
      { label: "Prerender Coverage", value: "100% Static + API" },
      { label: "Responsive Range", value: "320px — 4K" },
    ],
    colors: ["#050505", "#FF5A0A", "#FF9D2E", "#E2E8F0", "#18181B"],
    githubUrl: "https://github.com/Vishwakarmasuraj333",
    demoUrl: "#",
  },
];

type CategoryFilter = "ALL" | "AI & CYBERSECURITY" | "FULL STACK SAAS" | "SEO ANALYTICS" | "AI AGENTS";

export default function WorkSection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("ALL");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories: CategoryFilter[] = [
    "ALL",
    "AI & CYBERSECURITY",
    "FULL STACK SAAS",
    "SEO ANALYTICS",
    "AI AGENTS",
  ];

  const filteredProjects =
    activeCategory === "ALL"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  const handleOpenProject = (project: Project) => {
    sound.playClick();
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const handleCloseProject = useCallback(() => {
    sound.playClick();
    setSelectedProject(null);
    document.body.style.overflow = "auto";
  }, []);

  const handleNextProject = useCallback(() => {
    if (!selectedProject) return;
    sound.playClick();
    const currIdx = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const nextIdx = (currIdx + 1) % PROJECTS.length;
    setSelectedProject(PROJECTS[nextIdx]);
  }, [selectedProject]);

  const handlePrevProject = useCallback(() => {
    if (!selectedProject) return;
    sound.playClick();
    const currIdx = PROJECTS.findIndex((p) => p.id === selectedProject.id);
    const prevIdx = (currIdx - 1 + PROJECTS.length) % PROJECTS.length;
    setSelectedProject(PROJECTS[prevIdx]);
  }, [selectedProject]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) return;
      if (e.key === "Escape") handleCloseProject();
      if (e.key === "ArrowRight") handleNextProject();
      if (e.key === "ArrowLeft") handlePrevProject();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedProject, handleCloseProject, handleNextProject, handlePrevProject]);

  return (
    <section id="projects" className="relative py-28 sm:py-36 bg-[#050505] text-white border-t border-white/5">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#FF5A0A]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF5A0A]/30 bg-[#FF5A0A]/10 text-[#FF9D2E] text-xs font-mono tracking-wider uppercase mb-4">
              <Layers className="w-3.5 h-3.5" />
              04 // PRODUCTION PLATFORMS
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight font-[family-name:var(--font-heading)] leading-none">
              FEATURED ENGINEERING <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A0A] via-[#FF8A24] to-[#FF9D2E]">
                PROJECTS &amp; CASE STUDIES
              </span>
            </h2>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-1.5 font-mono text-xs">
            <span className="text-zinc-400 uppercase tracking-widest">
              AUTHENTIC CODEBASES &amp; DATASETS
            </span>
            <span className="text-[#FF9D2E] font-bold">
              ZERO FAKE METRICS • REAL ARCHITECTURES
            </span>
          </div>
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

        {/* Editorial Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => handleOpenProject(project)}
              onMouseEnter={() => sound.playHover()}
              className="group cursor-pointer flex flex-col rounded-2xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 hover:border-[#FF5A0A]/80 transition-all duration-500 overflow-hidden hover:shadow-[0_0_35px_rgba(255,90,10,0.3)] hover:-translate-y-1"
            >
              {/* Project Image Container */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-zinc-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/30 to-transparent opacity-75 group-hover:opacity-40 transition-opacity" />

                {/* Badges on Top */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-wider text-[#FF9D2E] font-semibold">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono tracking-wider text-zinc-300">
                    {project.year}
                  </span>
                </div>

                {/* Hover Action Indicator */}
                <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#FF5A0A] text-white flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_15px_#FF5A0A]">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-1">
                    SCOPE: {project.client}
                  </span>
                  <h3 className="text-xl font-bold uppercase tracking-tight text-white font-[family-name:var(--font-heading)] group-hover:text-[#FF9D2E] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-[#FF5A0A] font-medium tracking-wider">
                    VIEW CASE STUDY &amp; STACK →
                  </span>
                  <div className="flex items-center gap-1.5">
                    {project.colors.slice(0, 3).map((c, i) => (
                      <span
                        key={i}
                        className="w-2.5 h-2.5 rounded-full border border-black/40"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Accessible Interactive Case Study Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300 overflow-y-auto"
          onClick={handleCloseProject}
        >
          <div
            className="relative w-full max-w-4xl bg-[#0c0807] border border-[#FF5A0A]/40 rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(255,90,10,0.35)] my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="p-6 sm:p-8 flex items-center justify-between border-b border-white/10 bg-black/40">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-[#FF5A0A]/20 border border-[#FF5A0A]/40 text-[#FF9D2E] text-xs font-mono tracking-wider font-semibold">
                  {selectedProject.category}
                </span>
                <span className="text-xs font-mono text-zinc-400">
                  DEVELOPED: {selectedProject.year}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrevProject}
                  className="p-2 rounded-full border border-white/10 hover:border-[#FF5A0A] text-zinc-300 hover:text-white transition-colors"
                  aria-label="Previous Project"
                  title="Previous Project (Left Arrow)"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextProject}
                  className="p-2 rounded-full border border-white/10 hover:border-[#FF5A0A] text-zinc-300 hover:text-white transition-colors"
                  aria-label="Next Project"
                  title="Next Project (Right Arrow)"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <button
                  onClick={handleCloseProject}
                  className="p-2 rounded-full bg-white/5 border border-white/10 hover:bg-[#FF5A0A] hover:text-white text-zinc-300 transition-colors ml-2"
                  aria-label="Close Project Modal"
                  title="Close Modal (Escape)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Hero Visual */}
            <div className="relative aspect-[16/9] w-full bg-black">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0807] via-transparent to-transparent opacity-90" />
              <div className="absolute bottom-6 left-6 right-6">
                <span className="text-xs font-mono tracking-widest text-[#FF9D2E] uppercase block mb-1">
                  PROJECT SPECIFICATION ARCHIVE
                </span>
                <h3 className="text-2xl sm:text-4xl font-black uppercase text-white font-[family-name:var(--font-heading)]">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Body Content */}
            <div className="p-6 sm:p-10 space-y-8">
              {/* Empirical Metrics Strip */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                {selectedProject.metrics.map((m, idx) => (
                  <div key={idx} className="flex flex-col">
                    <span className="text-lg sm:text-xl font-black text-white font-[family-name:var(--font-heading)] text-[#FF9D2E]">
                      {m.value}
                    </span>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-wider">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Summary */}
              <div>
                <h4 className="text-xs font-mono text-[#FF5A0A] uppercase tracking-widest mb-2 font-bold">
                  EXECUTIVE SUMMARY &amp; ARCHITECTURE
                </h4>
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-light">
                  {selectedProject.summary}
                </p>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <h5 className="text-xs font-mono text-zinc-300 uppercase tracking-widest mb-2 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF5A0A]" />
                    TECHNICAL CHALLENGE
                  </h5>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-white/[0.02] border border-white/5">
                  <h5 className="text-xs font-mono text-zinc-300 uppercase tracking-widest mb-2 font-semibold flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FF9D2E]" />
                    ENGINEERING SOLUTION
                  </h5>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest block mb-2.5">
                  TECHNOLOGY STACK &amp; FRAMEWORKS
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-md bg-white/5 text-xs font-mono text-zinc-200 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/Vishwakarmasuraj333"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-[#FF5A0A] text-xs font-mono text-zinc-200 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-[#FF5A0A]" />
                    <span>VIEW GITHUB REPO</span>
                  </a>

                  <a
                    href="#contact"
                    onClick={() => {
                      handleCloseProject();
                      const c = document.getElementById("contact");
                      if (c) c.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 hover:border-[#FF5A0A] text-xs font-mono text-zinc-200 hover:text-white transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 text-[#FF9D2E]" />
                    <span>DISCUSS ARCHITECTURE</span>
                  </a>
                </div>

                <button
                  onClick={handleCloseProject}
                  className="px-6 py-2.5 rounded-full bg-[#FF5A0A] hover:bg-[#FF6D24] text-white text-xs font-mono uppercase tracking-wider font-bold shadow-[0_0_20px_rgba(255,90,10,0.5)]"
                >
                  CLOSE PREVIEW
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
