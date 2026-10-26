"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  // Smooth springs for fluid trailing effect
  const springX = useSpring(mouseX, { damping: 25, stiffness: 350 });
  const springY = useSpring(mouseY, { damping: 25, stiffness: 350 });

  useEffect(() => {
    // Check if touch device
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest("a, button, [data-cursor]");
      if (interactive) {
        setIsPointer(true);
        const customText = interactive.getAttribute("data-cursor-text") || "";
        setCursorText(customText);
      } else {
        setIsPointer(false);
        setCursorText("");
      }
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY, isVisible]);

  if (!mounted || !isVisible) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden">
      {/* Outer glowing halo follower */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-[#FF4A0A]/60 flex items-center justify-center pointer-events-none transition-colors duration-200"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: isPointer ? (cursorText ? 80 : 48) : 32,
          height: isPointer ? (cursorText ? 80 : 48) : 32,
          backgroundColor: isPointer
            ? "rgba(255, 74, 10, 0.15)"
            : "rgba(255, 74, 10, 0.05)",
          boxShadow: isPointer
            ? "0 0 25px rgba(255, 74, 10, 0.5)"
            : "0 0 10px rgba(255, 74, 10, 0.2)",
        }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
      >
        {cursorText && (
          <span className="text-[10px] font-mono tracking-widest text-[#FF8A24] uppercase font-bold">
            {cursorText}
          </span>
        )}
      </motion.div>

      {/* Center sharp fiery dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#FF8A24] rounded-full pointer-events-none shadow-[0_0_8px_#FF4A0A]"
        style={{
          x: mouseX,
          y: mouseY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}
