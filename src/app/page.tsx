"use client";

import { useState } from "react";
import AtmosphericBackground from "@/components/ui/AtmosphericBackground";
import CustomCursor from "@/components/ui/CustomCursor";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import AIEngineSection from "@/components/sections/AIEngineSection";
import WorkSection from "@/components/sections/WorkSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import ResumeModal from "@/components/ui/ResumeModal";
import { sound } from "@/lib/audio";

export default function Home() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    sound.playClick();
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    sound.playClick();
    setIsResumeModalOpen(false);
  };

  return (
    <div className="relative min-h-screen bg-[#050505] text-white selection:bg-[#FF5A0A] selection:text-white">
      {/* Global Living Atmospheric Background Particles */}
      <AtmosphericBackground />

      {/* Dynamic Fluid Custom Cursor (Desktop Only) */}
      <CustomCursor />

      {/* Top Glassmorphism Navigation Bar */}
      <Navbar onResumeClick={handleOpenResume} />

      {/* Main Page Content Flow */}
      <main className="relative flex flex-col w-full">
        {/* Full-screen 3D Hero Experience */}
        <HeroSection onResumeClick={handleOpenResume} />

        {/* Section 01: About / Developer Manifesto / Education */}
        <AboutSection />

        {/* Section 02: Skills & Technical Arsenal */}
        <SkillsSection />

        {/* Section 03: Engineering The Future With AI Matrix */}
        <AIEngineSection />

        {/* Section 04: Production Platforms & Featured Projects */}
        <WorkSection />

        {/* Section 05: Academic & Career Trajectory Timeline */}
        <ExperienceSection />

        {/* Section 06: Contact & Brief Transmission */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onResumeClick={handleOpenResume} />

      {/* Interactive Curriculum Vitae Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={handleCloseResume} />
    </div>
  );
}
