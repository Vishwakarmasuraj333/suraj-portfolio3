"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, Maximize2, Film, Sparkles } from "lucide-react";
import { sound } from "@/lib/audio";

interface ShowreelSectionProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
}

export default function ShowreelSection({
  isOpenModal = false,
  onCloseModal,
}: ShowreelSectionProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(25);
  const [currentTime, setCurrentTime] = useState("00:45");
  const [totalTime] = useState("02:30");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 0;
          }
          const next = prev + 0.4;
          const totalSecs = 150;
          const currentSecs = Math.floor((next / 100) * totalSecs);
          const mins = Math.floor(currentSecs / 60);
          const secs = currentSecs % 60;
          setCurrentTime(
            `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
          );
          return next;
        });
      }, 200);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    sound.playClick();
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    sound.playClick();
    setIsMuted(!isMuted);
  };

  const toggleFullscreen = () => {
    sound.playClick();
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  return (
    <section id="showreel" className="relative py-28 sm:py-36 bg-[#050303] text-white border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#FF4A0A]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 sm:mb-16 text-center sm:text-left">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF4A0A]/30 bg-[#FF4A0A]/10 text-[#FF8A24] text-xs font-mono tracking-wider uppercase mb-4">
              <Film className="w-3.5 h-3.5" />
              04 // CINEMATIC REEL
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight font-[family-name:var(--font-heading)] leading-none">
              MOTION & VISUAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4A0A] via-[#FF8A24] to-[#FFA034]">
                SHOWREEL 2025/2026
              </span>
            </h2>
          </div>

          <p className="text-zinc-400 text-sm max-w-sm font-light">
            A montage of high-voltage 3D key visuals, WebGL shaders, kinetic identities, and experiential campaign motion.
          </p>
        </div>

        {/* Video Player Container */}
        <div
          ref={containerRef}
          className="relative w-full aspect-[16/9] rounded-3xl overflow-hidden border border-[#FF4A0A]/30 bg-black shadow-[0_0_50px_rgba(255,74,10,0.2)] group"
        >
          {/* Visual Poster Frame / Moving Canvas */}
          <div className="relative w-full h-full">
            <Image
              src="/assets/project-cyberpunk.jpg"
              alt="Cinematic Showreel Reel Poster"
              fill
              className={`object-cover transition-all duration-700 ${
                isPlaying ? "scale-105 filter brightness-110" : "scale-100 filter brightness-75"
              }`}
            />
            {/* Film Grain & Darkness Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 pointer-events-none" />

            {/* Glowing Halo Aura in video center */}
            <div
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-[#FF4A0A]/40 transition-all duration-500 pointer-events-none ${
                isPlaying ? "animate-pulse-glow scale-110 opacity-75" : "opacity-30"
              }`}
            />
          </div>

          {/* Big Center Play Trigger (When Paused) */}
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 sm:w-24 h-20 sm:h-24 rounded-full bg-[#FF4A0A] text-white flex items-center justify-center transition-all duration-300 shadow-[0_0_40px_#FF4A0A] hover:scale-110 hover:bg-[#FF6A22] z-10"
              aria-label="Play Showreel"
            >
              <Play className="w-8 sm:w-10 h-8 sm:h-10 fill-white translate-x-1" />
            </button>
          )}

          {/* Floating Timecode HUD */}
          <div className="absolute top-6 left-6 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-mono text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>4K CINEMA // 60FPS</span>
          </div>

          {/* Player Controls Bar */}
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 bg-gradient-to-t from-black via-black/80 to-transparent flex flex-col gap-3 z-10">
            {/* Progress Slider */}
            <div className="w-full h-1.5 rounded-full bg-white/20 overflow-hidden relative cursor-pointer">
              <div
                className="h-full bg-gradient-to-r from-[#FF4A0A] to-[#FF8A24] rounded-full shadow-[0_0_10px_#FF4A0A]"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="p-2 rounded-full bg-white/10 hover:bg-[#FF4A0A] text-white transition-colors"
                  aria-label={isPlaying ? "Pause" : "Play"}
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                </button>

                <button
                  onClick={toggleMute}
                  className="p-2 rounded-full bg-white/10 hover:bg-[#FF4A0A] text-white transition-colors"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>

                <span className="text-zinc-300">
                  {currentTime} / {totalTime}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-zinc-400 hidden sm:inline">STEREO MASTER AUDIO</span>
                <button
                  onClick={toggleFullscreen}
                  className="p-2 rounded-full bg-white/10 hover:bg-[#FF4A0A] text-white transition-colors"
                  aria-label="Toggle Fullscreen"
                  title="Fullscreen"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
