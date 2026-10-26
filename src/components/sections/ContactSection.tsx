"use client";

import { useState } from "react";
import { Mail, Send, CheckCircle2, AlertCircle, Sparkles, MapPin, Clock, MessageSquare, Terminal } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/BrandIcons";
import confetti from "canvas-confetti";
import { sound } from "@/lib/audio";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full Stack & AI Development Project",
    budget: "$5k - $15k",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const budgets = ["<$5k", "$5k - $15k", "$15k - $30k", "$30k+"];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to submit message. Please try again.");
      }

      setStatus("success");
      setSuccessMessage(data.message || "Message transmitted successfully! Suraj will respond within 24 hours.");
      sound.playSuccess();

      // Trigger celebration confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#FF5A0A", "#FF8A24", "#FF9D2E", "#FFFFFF"],
        });
      } catch {}

      // Reset form fields
      setFormData({
        name: "",
        email: "",
        subject: "Full Stack & AI Development Project",
        budget: "$5k - $15k",
        message: "",
        honeypot: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      const msg = err instanceof Error ? err.message : "Network error. Please try again or email directly.";
      setErrorMessage(msg);
    }
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 bg-[#050505] text-white border-t border-white/5 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-[#FF5A0A]/10 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 sm:gap-16 items-start">
          {/* Left Column: Headline, Availability & Direct Coordinates */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FF5A0A]/30 bg-[#FF5A0A]/10 text-[#FF9D2E] text-xs font-mono tracking-wider uppercase mb-4">
                <MessageSquare className="w-3.5 h-3.5" />
                06 // INITIATE TRANSMISSION
              </div>

              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight font-[family-name:var(--font-heading)] leading-[1.1] mb-6">
                <span className="block text-white">LET&apos;S BUILD</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF5A0A] via-[#FF8A24] to-[#FF9D2E] pt-1">
                  SOMETHING
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FF8A24] to-[#FF9D2E]">
                  INTELLIGENT
                </span>
              </h2>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed font-light mb-10 max-w-md">
                Available for full-stack engineering roles, AI/ML platform architectures, GenAI agent deployments, and technical consulting.
              </p>
            </div>

            {/* Direct Metadata & Coordinates */}
            <div className="flex flex-col gap-6 pt-8 border-t border-white/10">
              {/* Availability Status */}
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_#10B981]" />
                </span>
                <span className="text-xs font-mono text-zinc-300 uppercase tracking-widest font-semibold">
                  AVAILABLE FOR 2026 ROLES &amp; COMMISSIONS
                </span>
              </div>

              {/* Direct Email */}
              <div className="flex items-center gap-3 text-zinc-300">
                <Mail className="w-4 h-4 text-[#FF5A0A]" />
                <a
                  href="mailto:itxsurajofficial@gmail.com"
                  className="font-mono text-sm hover:text-[#FF9D2E] transition-colors"
                >
                  itxsurajofficial@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 text-zinc-300">
                <span className="w-4 h-4 text-[#FF9D2E] font-mono text-xs flex items-center justify-center font-bold">📞</span>
                <a
                  href="tel:+919370944696"
                  className="font-mono text-sm hover:text-[#FF9D2E] transition-colors"
                >
                  +91 93709 44696
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 text-zinc-400 text-xs font-mono">
                <MapPin className="w-4 h-4 text-[#FF9D2E]" />
                <span>MUMBAI, INDIA // REMOTE WORLDWIDE (UTC+5:30)</span>
              </div>

              {/* Response Time SLA */}
              <div className="flex items-center gap-3 text-zinc-400 text-xs font-mono">
                <Clock className="w-4 h-4 text-[#FF5A0A]" />
                <span>TYPICAL RESPONSE TIME &lt; 24 HOURS</span>
              </div>

              {/* Social Channels */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://github.com/Vishwakarmasuraj333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 hover:border-[#FF5A0A] text-xs font-mono text-zinc-300 hover:text-white transition-colors bg-white/5"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-[#FF5A0A]" />
                  <span>GITHUB</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/suraj-vishwakarma-2ab64436a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 hover:border-[#FF5A0A] text-xs font-mono text-zinc-300 hover:text-white transition-colors bg-white/5"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-[#FF9D2E]" />
                  <span>LINKEDIN</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Functional Contact Form */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/10 shadow-2xl relative">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {/* Honeypot Spam Protection Field */}
              <input
                type="text"
                name="honeypot"
                value={formData.honeypot}
                onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />

              {/* Name & Email Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Maya Patel"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-[#FF5A0A] focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="maya@enterprise.ai"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-[#FF5A0A] focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  PROJECT SCOPE / TOPIC
                </label>
                <input
                  type="text"
                  placeholder="e.g. Full-Stack Web App or AI Engine Integration"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-[#FF5A0A] focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors"
                />
              </div>

              {/* Budget / Scope Pills */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  ESTIMATED BUDGET / ENGAGEMENT
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {budgets.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => {
                        sound.playClick();
                        setFormData({ ...formData, budget: b });
                      }}
                      className={`py-2 px-3 rounded-xl text-xs font-mono tracking-wider uppercase transition-all duration-200 border ${
                        formData.budget === b
                          ? "bg-[#FF5A0A]/20 border-[#FF5A0A] text-[#FF9D2E] font-bold shadow-[0_0_12px_rgba(255,90,10,0.3)]"
                          : "bg-black/30 border-white/10 text-zinc-400 hover:border-white/20"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  MESSAGE / BRIEF *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Describe your vision, system requirements, stack preferences, and goals..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-black/50 border border-white/10 focus:border-[#FF5A0A] focus:outline-none text-white text-sm placeholder:text-zinc-600 transition-colors resize-none"
                />
              </div>

              {/* Notifications */}
              {status === "error" && (
                <div className="flex items-center gap-2 p-3.5 rounded-xl bg-red-950/40 border border-red-500/40 text-red-200 text-xs font-mono">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {status === "success" && (
                <div className="flex items-center gap-2 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-200 text-xs font-mono">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{successMessage}</span>
                </div>
              )}

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-full bg-[#FF5A0A] hover:bg-[#FF6D24] disabled:opacity-50 text-white font-[family-name:var(--font-heading)] font-bold text-xs sm:text-sm tracking-widest uppercase transition-all duration-300 shadow-[0_0_25px_rgba(255,90,10,0.4)] hover:shadow-[0_0_40px_rgba(255,90,10,0.6)] flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                    <span>TRANSMITTING MESSAGE...</span>
                  </>
                ) : (
                  <>
                    <span>TRANSMIT BRIEF</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
