"use client";

import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import SceneLights from "./SceneLights";
import NeonHalo from "./NeonHalo";
import FloatingEmbers from "./FloatingEmbers";
import FloatingDebris from "./FloatingDebris";
import Character3D, { RenderMode } from "./Character3D";
import FloatingCodeSymbols from "./FloatingCodeSymbols";
import CameraController from "./CameraController";
import { Layers, Box, Cpu } from "lucide-react";
import { sound } from "@/lib/audio";

interface HeroCanvasProps {
  onModeChange?: (mode: RenderMode) => void;
}

function AtmosphericFog() {
  return <fogExp2 attach="fog" args={["#050303", 0.055]} />;
}

export default function HeroCanvas({ onModeChange }: HeroCanvasProps) {
  const [renderMode, setRenderMode] = useState<RenderMode>("cinematic-depth");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    // Check WebGL availability
    try {
      const canvas = document.createElement("canvas");
      const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      if (!gl) setHasWebGL(false);
    } catch {
      setHasWebGL(false);
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      const progress = Math.min(Math.max(scrollY / heroHeight, 0), 1.5);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleModeToggle = (mode: RenderMode) => {
    sound.playClick();
    setRenderMode(mode);
    onModeChange?.(mode);
  };

  if (!hasWebGL) {
    return (
      <div className="absolute inset-0 bg-[#050303] flex items-center justify-center">
        <div
          className="w-full h-full bg-cover bg-center opacity-70"
          style={{ backgroundImage: `url('/assets/hero-reference.png')` }}
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-auto overflow-hidden">
      {/* Real-time WebGL Three.js Canvas */}
      <Canvas
        shadows
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.15,
        }}
        camera={{ position: [0, 0, 5], fov: isMobile ? 52 : 44 }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        className="w-full h-full"
      >
        <AtmosphericFog />
        <SceneLights />
        <CameraController scrollProgress={scrollProgress} />

        <Suspense fallback={null}>
          <NeonHalo scrollProgress={scrollProgress} />
          <Character3D renderMode={renderMode} scrollProgress={scrollProgress} />
          <FloatingCodeSymbols count={isMobile ? 8 : 16} />
          <FloatingEmbers count={isMobile ? 120 : 260} />
          <FloatingDebris count={isMobile ? 16 : 38} />
        </Suspense>
      </Canvas>

      {/* Floating 3D Scene Controls HUD (Bottom Right of Hero) */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 flex items-center gap-1.5 p-1.5 rounded-full bg-black/60 backdrop-blur-md border border-[#FF4A0A]/30 shadow-[0_0_20px_rgba(255,74,10,0.2)]">
        <button
          onClick={() => handleModeToggle("cinematic-depth")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
            renderMode === "cinematic-depth"
              ? "bg-[#FF4A0A] text-white shadow-[0_0_15px_rgba(255,74,10,0.6)] font-bold"
              : "text-zinc-400 hover:text-white hover:bg-white/5"
          }`}
          title="Photorealistic Cinematic Volumetric Mode"
        >
          <Layers className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">CINEMATIC 3D</span>
        </button>

        <button
          onClick={() => handleModeToggle("pbr-mesh")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
            renderMode === "pbr-mesh"
              ? "bg-[#FF4A0A] text-white shadow-[0_0_15px_rgba(255,74,10,0.6)] font-bold"
              : "text-zinc-400 hover:text-white hover:bg-white/5"
          }`}
          title="Sculpted PBR 3D Streetwear Mesh"
        >
          <Box className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">3D PBR MESH</span>
        </button>

        <button
          onClick={() => handleModeToggle("wireframe")}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-300 ${
            renderMode === "wireframe"
              ? "bg-[#FF4A0A] text-white shadow-[0_0_15px_rgba(255,74,10,0.6)] font-bold"
              : "text-zinc-400 hover:text-white hover:bg-white/5"
          }`}
          title="Cybernetic Hologram Wireframe"
        >
          <Cpu className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">WIREFRAME</span>
        </button>
      </div>
    </div>
  );
}
