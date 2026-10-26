import Link from "next/link";
import { ArrowLeft, Flame } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#050303] text-[#F3F4F6] flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF4A0A]/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative z-10 text-center max-w-lg">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#FF4A0A]/40 bg-[#FF4A0A]/10 text-[#FF8A24] text-xs font-mono tracking-wider uppercase mb-8">
          <Flame className="w-3.5 h-3.5 text-[#FF4A0A] animate-pulse" />
          404 ERROR — LOST IN THE VOID
        </div>

        <h1 className="text-7xl sm:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-zinc-200 to-[#FF4A0A] mb-4">
          404
        </h1>

        <p className="text-zinc-400 text-base sm:text-lg mb-8 leading-relaxed">
          The dimension you are looking for has collapsed into darkness. Return to the core realm to continue exploring.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#FF4A0A] text-white font-medium text-sm tracking-wider uppercase hover:bg-[#FF6A22] transition-all duration-300 shadow-[0_0_30px_rgba(255,74,10,0.4)] hover:shadow-[0_0_45px_rgba(255,74,10,0.6)]"
        >
          <ArrowLeft className="w-4 h-4" />
          Return to Experience
        </Link>
      </div>
    </main>
  );
}
