"use client";

import { useState } from "react";
import { Search, Lightbulb, PenTool, Sliders, Rocket, CheckCircle2 } from "lucide-react";
import { sound } from "@/lib/audio";

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: "01",
      name: "RESEARCH & DISCOVERY",
      icon: Search,
      tag: "PHASE 01 — RECONNAISSANCE",
      desc: "Deep visual archaeology, competitive positioning analysis, moodboarding, and semantic brand territory mapping. We uncover the core tension that makes the brand unique.",
      deliverables: ["Visual Audit", "Competitor Matrix", "Aesthetic Moodboard", "Creative Brief Alignment"],
    },
    {
      num: "02",
      name: "CONCEPT & EXPERIMENTATION",
      icon: Lightbulb,
      tag: "PHASE 02 — THE FORGE",
      desc: "Rapid 3D procedural prototyping, kinetic typography trials, lighting look-dev, and spatial wireframes. Exploring radical visual directions without compromise.",
      deliverables: ["3 Distinct Concept Routes", "Styleframes", "Spatial Wireframes", "Material & Lighting Explorations"],
    },
    {
      num: "03",
      name: "DESIGN & CRAFT",
      icon: PenTool,
      tag: "PHASE 03 — ARCHITECTURE",
      desc: "Executing high-fidelity visual assets, PBR surface textures, bespoke vector marks, and comprehensive design token hierarchies with millimeter precision.",
      deliverables: ["High-Res Key Visuals", "Design Systems", "Typography Hierarchy", "Vector Geometry Files"],
    },
    {
      num: "04",
      name: "REFINEMENT & MOTION",
      icon: Sliders,
      tag: "PHASE 04 — KINETICS & POLISH",
      desc: "Fine-tuning shader curves, micro-interactions, rim light reflections, spatial sound design, and easing curves for natural fluid dynamics.",
      deliverables: ["Shader Optimization", "Motion Choreography", "Sound Layering", "Cross-Device Validation"],
    },
    {
      num: "05",
      name: "DELIVERY & GOVERNANCE",
      icon: Rocket,
      tag: "PHASE 05 — DEPLOYMENT",
      desc: "Packaging full-resolution render archives, compressed WebGL assets, design system documentation, and providing ongoing creative governance.",
      deliverables: ["Production WebGL Bundle", "Asset Vault", "Design System Guidelines", "Post-Launch Support"],
    },
  ];

  return (
    <section id="process" className="relative py-28 sm:py-36 bg-[#050303] text-white border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#FF4A0A]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF4A0A]/30 bg-[#FF4A0A]/10 text-[#FF8A24] text-xs font-mono tracking-wider uppercase mb-4">
              <Sliders className="w-3.5 h-3.5" />
              05 // METHODOLOGY
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight font-[family-name:var(--font-heading)] leading-none">
              THE 5-STEP DESIGN <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4A0A] via-[#FF8A24] to-[#FFA034]">
                WORKFLOW
              </span>
            </h2>
          </div>

          <p className="text-zinc-400 text-sm max-w-sm font-light">
            A battle-tested creative pipeline designed to eliminate ambiguity, accelerate iteration, and deliver peerless craft.
          </p>
        </div>

        {/* Process Timeline Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Step Selector List (Left Side) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.num}
                  onClick={() => {
                    sound.playClick();
                    setActiveStep(idx);
                  }}
                  onMouseEnter={() => sound.playHover()}
                  className={`group cursor-pointer p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between ${
                    isActive
                      ? "bg-[#FF4A0A]/10 border-[#FF4A0A] shadow-[0_0_25px_rgba(255,74,10,0.25)]"
                      : "bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span
                      className={`font-mono text-sm font-bold ${
                        isActive ? "text-[#FF8A24]" : "text-zinc-500 group-hover:text-zinc-300"
                      }`}
                    >
                      {step.num}
                    </span>
                    <div>
                      <h3
                        className={`text-base font-bold uppercase font-[family-name:var(--font-heading)] tracking-tight ${
                          isActive ? "text-white" : "text-zinc-300 group-hover:text-white"
                        }`}
                      >
                        {step.name}
                      </h3>
                      <span className="text-[10px] font-mono text-zinc-500 block">
                        {step.tag}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 ${
                      isActive
                        ? "bg-[#FF4A0A] text-white border-[#FF4A0A]"
                        : "bg-white/5 border-white/10 text-zinc-400"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Detailed View (Right Side) */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-[#FF4A0A]/30 relative overflow-hidden shadow-[0_0_40px_rgba(255,74,10,0.15)]">
            {/* Glowing corner orb */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF4A0A]/15 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                <span className="text-xs font-mono tracking-widest text-[#FF4A0A] font-bold">
                  {steps[activeStep].tag}
                </span>
                <span className="text-2xl font-black font-mono text-zinc-600">
                  {steps[activeStep].num} / 05
                </span>
              </div>

              <h4 className="text-2xl sm:text-3xl font-black uppercase text-white font-[family-name:var(--font-heading)] mb-6">
                {steps[activeStep].name}
              </h4>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-8 font-light">
                {steps[activeStep].desc}
              </p>

              <div className="pt-6 border-t border-white/10">
                <span className="text-xs font-mono text-zinc-400 uppercase tracking-widest block mb-4">
                  DOCUMENTED DELIVERABLES & ARTIFACTS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {steps[activeStep].deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs font-mono text-zinc-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#FF8A24] shrink-0" />
                      <span>{item}</span>
                    </div>
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
