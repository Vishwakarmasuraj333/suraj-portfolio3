"use client";

import { useEffect, useRef } from "react";

export default function AtmosphericBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle setup
    const particleCount = Math.min(width < 768 ? 35 : 75, 90);
    const particles: {
      x: number;
      y: number;
      size: number;
      speedY: number;
      speedX: number;
      opacity: number;
      pulseSpeed: number;
      color: string;
    }[] = [];

    const colors = [
      "rgba(255, 90, 10,",    // Fiery Orange
      "rgba(255, 138, 36,",   // Warm Amber
      "rgba(255, 180, 50,",   // Solar Gold
      "rgba(255, 60, 0,",     // Deep Crimson
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2.2 + 0.8,
        speedY: -(Math.random() * 0.45 + 0.15),
        speedX: (Math.random() - 0.5) * 0.25,
        opacity: Math.random() * 0.7 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let time = 0;
    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(time + i) * 0.2;

        // Wrap around top to bottom
        if (p.y < -10) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        const currentOpacity =
          p.opacity * (0.6 + Math.sin(time * 3 + i * 2) * 0.4);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color} ${Math.max(0.1, currentOpacity)})`;
        ctx.shadowColor = "#FF5A0A";
        ctx.shadowBlur = p.size * 4;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background embers floating canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-65"
      />

      {/* Atmospheric Vignette Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FF5A0A]/5 rounded-full blur-[160px]" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#FF8A24]/5 rounded-full blur-[200px]" />
    </div>
  );
}
