import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { profile, education, skillGroups } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-28" style={{ backgroundColor: "var(--md-surface-dim)" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="About" title="From data entry to data engineering" />

        <div className="grid lg:grid-cols-5 gap-14">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3 space-y-5"
          >
            {profile.bio.map((p, i) => (
              <p key={i} className="text-[16px] sm:text-[17px] leading-relaxed" style={{ color: "var(--md-on-surface-variant)" }}>
                {p}
              </p>
            ))}

            <div
              className="mt-8 flex items-center gap-4 p-5 rounded-2xl"
              style={{ backgroundColor: "var(--md-surface)", border: "1px solid var(--md-outline-variant)" }}
            >
              <div
                className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                style={{ backgroundColor: "var(--md-primary-container)", color: "var(--md-on-primary-container)" }}
              >
                <GraduationCap size={20} />
              </div>
              <div>
                <div className="font-medium text-[15px]" style={{ color: "var(--md-on-surface)" }}>
                  {education.degree}
                </div>
                <div className="text-[14px]" style={{ color: "var(--md-on-surface-variant)" }}>
                  {education.school}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-2 space-y-6"
          >
            {skillGroups.map((g) => (
              <div key={g.label}>
                <div className="text-[13px] font-medium mb-2.5" style={{ color: "var(--md-on-surface)" }}>
                  {g.label}
                </div>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1.5 rounded-lg text-[13px] font-mono"
                      style={{
                        backgroundColor: "var(--md-surface)",
                        color: "var(--md-on-surface-variant)",
                        border: "1px solid var(--md-outline-variant)",
                      }}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
