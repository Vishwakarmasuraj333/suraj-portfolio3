"use client";

import { useState } from "react";
import {
  Boxes,
  Compass,
  Layers,
  Sparkles,
  Video,
  Globe2,
  ArrowUpRight,
  CheckCircle2,
} from "lucide-react";
import { sound } from "@/lib/audio";

export default function ServicesSection() {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const services = [
    {
      num: "01",
      title: "BRAND IDENTITY",
      icon: Sparkles,
      desc: "Comprehensive visual systems, conceptual brand strategy, custom typography, color theory orchestration, and scalable brand guidelines.",
      deliverables: ["Visual Identity Systems", "Brand Architecture", "Custom Typography", "Brand Guidelines", "Asset Toolkits"],
    },
    {
      num: "02",
      title: "GRAPHIC DESIGN",
      icon: Layers,
      desc: "High-impact editorial design, luxury packaging, promotional posters, event collateral, and bespoke print finishes with architectural layout discipline.",
      deliverables: ["Editorial & Lookbooks", "Luxury Packaging", "Poster & Print Art", "Merchandise Design", "Event Branding"],
    },
    {
      num: "03",
      title: "ART DIRECTION",
      icon: Compass,
      desc: "Holistic creative vision from concept to execution. Overseeing photo, CGI, video, and multi-disciplinary teams to produce singular aesthetic worlds.",
      deliverables: ["Creative Direction", "Campaign Concepting", "Visual Storyboarding", "Casting & Styling Direction", "Quality Supervision"],
    },
    {
      num: "04",
      title: "MOTION DESIGN",
      icon: Video,
      desc: "Dynamic kinetic typography, 3D broadcast packages, cinematic title sequences, social teaser reels, and audio-reactive promotional visuals.",
      deliverables: ["Kinetic Typography", "Title Sequences", "3D CGI Animation", "Social Teasers", "Brand Ident Animations"],
    },
    {
      num: "05",
      title: "3D VISUAL DESIGN",
      icon: Boxes,
      desc: "Hyper-realistic product renders, spatial key visual creation, character styling, PBR texturing, and cinematic volumetric lighting setups.",
      deliverables: ["Product Visualization", "Key Visual Creation", "Character Design", "Lighting & Texturing", "Look Development"],
    },
    {
      num: "06",
      title: "WEB EXPERIENCES",
      icon: Globe2,
      desc: "Next-generation digital flagships powered by Three.js, React Three Fiber, WebGL shaders, responsive micro-interactions, and Awwwards-grade UX.",
      deliverables: ["WebGL & Three.js", "Creative Development", "Interactive Narratives", "Design System Systems", "Speed Optimization"],
    },
  ];

  return (
    <section id="services" className="relative py-28 sm:py-36 bg-[#050303] text-white border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#FF4A0A]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-16 sm:mb-20">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF4A0A]/30 bg-[#FF4A0A]/10 text-[#FF8A24] text-xs font-mono tracking-wider uppercase mb-4">
              <Boxes className="w-3.5 h-3.5" />
              02 // EXPERTISE & DISCIPLINES
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight font-[family-name:var(--font-heading)] leading-none">
              TAILORED CREATIVE <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4A0A] via-[#FF8A24] to-[#FFA034]">
                CAPABILITIES
              </span>
            </h2>
          </div>

          <p className="text-zinc-400 text-sm sm:text-base max-w-md font-light leading-relaxed">
            Delivering high-caliber creative execution across digital and physical dimensions. Engineered to distinguish brands in saturated markets.
          </p>
        </div>

        {/* Editorial Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((item, idx) => {
            const Icon = item.icon;
            const isHovered = hoveredIdx === idx;

            return (
              <div
                key={item.num}
                onMouseEnter={() => {
                  setHoveredIdx(idx);
                  sound.playHover();
                }}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group relative p-8 rounded-2xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border transition-all duration-500 flex flex-col justify-between overflow-hidden ${
                  isHovered
                    ? "border-[#FF4A0A] shadow-[0_0_35px_rgba(255,74,10,0.25)] translate-y-[-4px]"
                    : "border-white/10 hover:border-white/20"
                }`}
              >
                {/* Glowing corner accent */}
                <div
                  className={`absolute top-0 right-0 w-24 h-24 bg-[#FF4A0A]/20 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none ${
                    isHovered ? "opacity-100" : "opacity-0"
                  }`}
                />

                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-sm tracking-widest text-[#FF4A0A] font-bold">
                      {item.num}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-300 ${
                        isHovered
                          ? "bg-[#FF4A0A] text-white border-[#FF4A0A]"
                          : "bg-white/5 text-zinc-400 border-white/10"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white font-[family-name:var(--font-heading)] mb-3 group-hover:text-[#FF8A24] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {item.desc}
                  </p>
                </div>

                <div>
                  <div className="pt-4 border-t border-white/5 mb-4">
                    <span className="text-[10px] font-mono tracking-widest text-zinc-500 uppercase block mb-2.5">
                      KEY DELIVERABLES
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {item.deliverables.map((del) => (
                        <span
                          key={del}
                          className="text-[11px] px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-zinc-300 font-mono"
                        >
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      sound.playClick();
                      const c = document.getElementById("contact");
                      if (c) c.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-1.5 text-xs font-mono tracking-wider text-[#FF4A0A] group-hover:text-white transition-colors uppercase font-semibold"
                  >
                    <span>INQUIRE FOR THIS SERVICE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
