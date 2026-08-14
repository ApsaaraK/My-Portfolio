import { motion } from "framer-motion";
import { ArrowDown, MapPin } from "lucide-react";
import { profile } from "../data/content";
import PipelineMark from "./PipelineMark";

const CHIPS = ["Python", "SQL", "Apache Spark", "Kafka", "Microsoft Fabric", "Tableau"];

export default function Hero() {
  return (
    <section id="top" className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 overflow-hidden">
      <BackgroundGrid />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div
            className="inline-flex items-center gap-2 mb-7 px-3.5 py-1.5 rounded-full text-[13px] font-medium"
            style={{ backgroundColor: "var(--md-surface-container)", color: "var(--md-on-surface-variant)" }}
          >
            <MapPin size={13} />
            {profile.location}
            <span style={{ color: "var(--md-outline)" }}>•</span>
            Open to opportunities
          </div>

          <h1
            className="text-[42px] leading-[1.08] sm:text-[64px] sm:leading-[1.06] font-medium tracking-tight max-w-4xl"
            style={{ color: "var(--md-on-surface)" }}
          >
            {profile.title},{" "}
            <span className="font-normal" style={{ color: "var(--md-on-surface-variant)" }}>
              turning raw data into
            </span>{" "}
            <GradientWord>infrastructure that scales</GradientWord>
          </h1>

          <p
            className="mt-7 text-[18px] sm:text-[20px] leading-relaxed max-w-2xl"
            style={{ color: "var(--md-on-surface-variant)" }}
          >
            {profile.tagline}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full text-[15px] font-medium transition-transform hover:scale-[1.03]"
              style={{ backgroundColor: "var(--md-primary)", color: "var(--md-on-primary)", boxShadow: "var(--shadow-1)" }}
            >
              View my work
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full text-[15px] font-medium border transition-colors"
              style={{ borderColor: "var(--md-outline)", color: "var(--md-on-surface)" }}
            >
              Get in touch
            </a>
          </div>

          <div className="mt-14 flex items-center gap-3 flex-wrap">
            <PipelineMark size={6} gap={8} />
            <div className="flex flex-wrap gap-2">
              {CHIPS.map((c) => (
                <span
                  key={c}
                  className="px-3 py-1.5 rounded-full text-[13px] font-mono"
                  style={{
                    backgroundColor: "var(--md-surface-container)",
                    color: "var(--md-on-surface-variant)",
                    border: "1px solid var(--md-outline-variant)",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        className="hidden sm:flex absolute bottom-6 left-1/2 -translate-x-1/2 items-center justify-center w-10 h-10 rounded-full animate-bounce"
        style={{ border: "1px solid var(--md-outline)", color: "var(--md-on-surface-variant)" }}
        aria-label="Scroll to About"
      >
        <ArrowDown size={16} />
      </a>
    </section>
  );
}

function GradientWord({ children }) {
  return (
    <span
      className="font-medium"
      style={{
        backgroundImage: "linear-gradient(90deg, #4285F4 0%, #34A853 100%)",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
      }}
    >
      {children}
    </span>
  );
}

function BackgroundGrid() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(var(--md-outline-variant) 1px, transparent 1px), linear-gradient(90deg, var(--md-outline-variant) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black 30%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 0%, black 30%, transparent 75%)",
          opacity: 0.6,
        }}
      />
      <div
        className="absolute -top-24 right-[8%] w-[420px] h-[420px] rounded-full blur-3xl"
        style={{ backgroundColor: "var(--md-primary-container)", opacity: 0.35 }}
      />
    </div>
  );
}
