import { motion } from "framer-motion";
import { ArrowUpRight, Database } from "lucide-react";
import { featuredProject, otherProjects } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Projects({ onOpenProject }) {
  return (
    <section id="projects" className="py-24 sm:py-28" style={{ backgroundColor: "var(--md-surface-dim)" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Real projects, real data"
          description="Work I'm actually building — not simulated case studies. Status is shown honestly."
        />

        {/* Featured project */}
        <motion.button
          onClick={() => onOpenProject({ type: "featured", data: featuredProject })}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="group w-full text-left rounded-3xl p-8 sm:p-10 grid md:grid-cols-5 gap-8 transition-transform hover:-translate-y-1"
          style={{ backgroundColor: "var(--md-surface)", border: "1px solid var(--md-outline-variant)", boxShadow: "var(--shadow-1)" }}
        >
          <div className="md:col-span-3">
            <div className="flex items-center gap-2 mb-4">
              <span
                className="px-2.5 py-1 rounded-full text-[11.5px] font-mono font-medium"
                style={{ backgroundColor: "var(--md-primary-container)", color: "var(--md-on-primary-container)" }}
              >
                {featuredProject.status}
              </span>
              <span className="text-[12px] font-mono" style={{ color: "var(--md-on-surface-variant)" }}>
                Featured
              </span>
            </div>
            <h3
              className="text-[24px] sm:text-[28px] font-medium tracking-tight flex items-center gap-2"
              style={{ color: "var(--md-on-surface)" }}
            >
              {featuredProject.title}
              <ArrowUpRight size={20} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: "var(--md-primary)" }} />
            </h3>
            <p className="mt-3 text-[15.5px] leading-relaxed" style={{ color: "var(--md-on-surface-variant)" }}>
              {featuredProject.summary}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {featuredProject.tech.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 rounded-md text-[12.5px] font-mono"
                  style={{ backgroundColor: "var(--md-surface-container)", color: "var(--md-on-surface-variant)" }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-2 flex items-center justify-center">
            <div
              className="w-full aspect-[4/3] rounded-2xl flex items-center justify-center"
              style={{ backgroundColor: "var(--md-surface-container)" }}
            >
              <PipelineDiagram />
            </div>
          </div>
        </motion.button>

        {/* Other projects grid */}
        <div className="mt-8 grid sm:grid-cols-2 gap-5">
          {otherProjects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl p-6 transition-transform hover:-translate-y-1"
              style={{ backgroundColor: "var(--md-surface)", border: "1px solid var(--md-outline-variant)" }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h4 className="text-[17px] font-medium" style={{ color: "var(--md-on-surface)" }}>
                    {p.title}
                  </h4>
                  <div className="text-[13px] font-mono mt-0.5" style={{ color: "var(--md-primary)" }}>
                    {p.subtitle}
                  </div>
                </div>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Visit ${p.title}`}
                    className="p-2 rounded-full shrink-0"
                    style={{ color: "var(--md-on-surface-variant)" }}
                  >
                    <ArrowUpRight size={16} />
                  </a>
                )}
              </div>
              <p className="mt-3 text-[14.5px] leading-relaxed" style={{ color: "var(--md-on-surface-variant)" }}>
                {p.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 rounded text-[11.5px] font-mono"
                    style={{ backgroundColor: "var(--md-surface-container)", color: "var(--md-on-surface-variant)" }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PipelineDiagram() {
  return (
    <div className="flex items-center gap-2 opacity-80" style={{ color: "var(--md-on-surface-variant)" }}>
      <Database size={28} />
      {[0, 1, 2].map((i) => (
        <span key={i} className="flex items-center">
          <span className="w-6 h-px" style={{ backgroundColor: "var(--md-outline)" }} />
          <span
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: ["#4285F4", "#FBBC05", "#34A853"][i] }}
          />
        </span>
      ))}
    </div>
  );
}
