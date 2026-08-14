import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { architectureStudies } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function ArchitectureStudies({ onOpenProject }) {
  return (
    <section id="studies" className="py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading
          eyebrow="Design Studies"
          title="Self-directed architecture studies"
          description="Concept and design work I built to learn production-grade system patterns in depth. These are personal studies, not client deployments — the diagrams and technical breakdowns are real, the companies are not."
        />

        <div className="grid md:grid-cols-3 gap-5">
          {architectureStudies.map((s, i) => (
            <motion.button
              key={s.slug}
              onClick={() => onOpenProject({ type: "study", data: s })}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group text-left rounded-2xl overflow-hidden transition-transform hover:-translate-y-1"
              style={{ backgroundColor: "var(--md-surface)", border: "1px solid var(--md-outline-variant)" }}
            >
              <div className="aspect-[16/10] overflow-hidden" style={{ backgroundColor: "var(--md-surface-container)" }}>
                <img
                  src={`${import.meta.env.BASE_URL}images/${s.images[0]}`}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-[16px] font-medium" style={{ color: "var(--md-on-surface)" }}>
                    {s.title}
                  </h3>
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0" style={{ color: "var(--md-primary)" }} />
                </div>
                <p className="mt-2 text-[13.5px] leading-relaxed" style={{ color: "var(--md-on-surface-variant)" }}>
                  {s.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="px-2 py-1 rounded text-[11px] font-mono"
                      style={{ backgroundColor: "var(--md-surface-container)", color: "var(--md-on-surface-variant)" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
