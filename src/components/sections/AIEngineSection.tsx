"use client";

import { useEffect, useRef, useState } from "react";
import { Brain, Cpu, Network, Sparkles, ShieldCheck, Zap, Activity } from "lucide-react";
import { sound } from "@/lib/audio";

export default function AIEngineSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activePillar, setActivePillar] = useState(0);

  const pillars = [
    {
      title: "AI AGENTS & MULTI-TURN ORCHESTRATION",
      badge: "AUTONOMOUS",
      icon: Brain,
      desc: "Architecting goal-driven autonomous agent networks equipped with memory states, structured JSON tool calling, and human-in-the-loop validation.",
      metrics: "Sub-500ms agent triage latency",
      tech: ["Gemini 2.0 Flash", "LangChain", "Tool Calling", "Pydantic v2"],
    },
    {
      title: "ENTERPRISE LLM INTEGRATION",
      badge: "REASONING",
      icon: Sparkles,
      desc: "Transforming high-dimensional telemetry and structured logs into actionable executive intelligence, threat summaries, and automated resolution playbooks.",
      metrics: "Deterministic prompt engineering",
      tech: ["Gemini API", "Retrieval Flows", "Context Windows", "Zero-Crash Fallback"],
    },
    {
      title: "SUPERVISED & UNSUPERVISED MACHINE LEARNING",
      badge: "ANOMALY DETECTION",
      icon: Network,
      desc: "Trained and cross-validated multi-model classifier ensembles (XGBoost Champion, Random Forest, Isolation Forest) evaluated across authentic UNSW-NB15 datasets.",
      metrics: "94.48% Test Accuracy • 0.9602 F1-Score",
      tech: ["XGBoost", "Scikit-Learn", "FastAPI Engine", "Stratified Cross-Val"],
    },
    {
      title: "EXPLAINABLE AI (XAI) & SHAPLEY VALUES",
      badge: "TRANSPARENCY",
      icon: ShieldCheck,
      desc: "Computing mathematical feature contributions via shap.TreeExplainer, decomposing black-box model inferences into transparent decision vectors.",
      metrics: "Mathematical Shapley vectors (φ)",
      tech: ["SHAP", "TreeExplainer", "MITRE ATT&CK", "SOC Intelligence"],
    },
    {
      title: "AUTOMATED EVENT WORKERS & TRIAGE",
      badge: "REAL-TIME",
      icon: Zap,
      desc: "Background ingestion pipelines, sliding-window rate limiters, token bucket safeguards, and append-only cryptographic audit logs for resilient operations.",
      metrics: "12.4 GB/s telemetry throughput capacity",
      tech: ["FastAPI Async", "PostgreSQL", "Docker", "Event Queues"],
    },
  ];

  // Animated Neural Network Graph Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", handleResize);

    // Node graph points
    const nodeCount = 38;
    const nodes = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      radius: Math.random() * 2.5 + 1.5,
      isCore: Math.random() > 0.8,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw synapse connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(255, 90, 10, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // Draw and update nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.isCore ? "#FF9D2E" : "#FF5A0A";
        ctx.shadowColor = "#FF5A0A";
        ctx.shadowBlur = n.isCore ? 12 : 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <section id="ai-engine" className="relative py-28 sm:py-36 bg-[#050505] text-white border-t border-white/5 overflow-hidden">
      {/* Background Animated Neural Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
      />

      {/* Radiant radial glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF5A0A]/10 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF5A0A]/30 bg-[#FF5A0A]/10 text-[#FF9D2E] text-xs font-mono tracking-wider uppercase mb-4">
              <Activity className="w-3.5 h-3.5" />
              03 // INTELLIGENCE MATRIX
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight font-[family-name:var(--font-heading)] leading-none">
              ENGINEERING THE FUTURE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A0A] via-[#FF8A24] to-[#FF9D2E]">
                WITH ARTIFICIAL INTELLIGENCE
              </span>
            </h2>
          </div>

          <p className="text-zinc-400 text-sm sm:text-base max-w-md font-light leading-relaxed">
            Bridging foundational machine learning with cutting-edge Generative AI copilots, explainable decision vectors, and automated operational pipelines.
          </p>
        </div>

        {/* Interactive Neural Pillars Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Pillar Selectors */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              const isActive = activePillar === idx;
              return (
                <div
                  key={p.title}
                  onClick={() => {
                    sound.playClick();
                    setActivePillar(idx);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className={`group cursor-pointer p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? "bg-[#FF5A0A]/15 border-[#FF5A0A] shadow-[0_0_25px_rgba(255,90,10,0.3)]"
                      : "bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-all ${
                        isActive
                          ? "bg-[#FF5A0A] text-white border-[#FF5A0A]"
                          : "bg-white/5 border-white/10 text-zinc-400"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3
                        className={`text-sm font-bold uppercase font-[family-name:var(--font-heading)] tracking-tight ${
                          isActive ? "text-white" : "text-zinc-300 group-hover:text-white"
                        }`}
                      >
                        {p.title}
                      </h3>
                      <span className="text-[10px] font-mono text-[#FF9D2E] block">
                        {p.badge}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono text-xs text-zinc-600 group-hover:text-zinc-400">
                    0{idx + 1}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Column: Detailed Architecture Card */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.04] to-white/[0.01] border border-[#FF5A0A]/40 relative overflow-hidden shadow-[0_0_50px_rgba(255,90,10,0.15)]">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <span className="text-xs font-mono tracking-widest text-[#FF9D2E] uppercase font-bold">
                  {pillars[activePillar].badge} ARCHITECTURE
                </span>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#FF5A0A]/10 border border-[#FF5A0A]/30 text-[#FF5A0A]">
                  STATUS: OPERATIONAL
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white font-[family-name:var(--font-heading)] mb-4">
                {pillars[activePillar].title}
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6 font-light">
                {pillars[activePillar].desc}
              </p>

              {/* Verified Metric */}
              <div className="p-4 rounded-xl bg-black/60 border border-[#FF5A0A]/30 mb-8 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400 uppercase">
                  VERIFIED BENCHMARK:
                </span>
                <span className="text-sm font-mono text-[#FF9D2E] font-bold">
                  {pillars[activePillar].metrics}
                </span>
              </div>

              {/* Technologies */}
              <div>
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-3">
                  UNDERLYING STACK &amp; PROTOCOLS
                </span>
                <div className="flex flex-wrap gap-2">
                  {pillars[activePillar].tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
