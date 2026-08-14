import { motion } from "framer-motion";
import { experience } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-28">
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Experience" title="Where the work has taken me" />

        <div className="relative">
          <div
            className="absolute left-[15px] top-2 bottom-2 w-px hidden sm:block"
            style={{ backgroundColor: "var(--md-outline-variant)" }}
          />
          <div className="space-y-10">
            {experience.map((job, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="relative sm:pl-12"
              >
                <span
                  className="hidden sm:flex absolute left-0 top-1 w-8 h-8 rounded-full items-center justify-center"
                  style={{ backgroundColor: "var(--md-surface)", border: "2px solid var(--md-primary)" }}
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: "var(--md-primary)" }} />
                </span>

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-[18px] font-medium" style={{ color: "var(--md-on-surface)" }}>
                    {job.role}
                  </h3>
                  {job.period && (
                    <span className="text-[13px] font-mono" style={{ color: "var(--md-on-surface-variant)" }}>
                      {job.period}
                    </span>
                  )}
                </div>
                <div className="text-[14.5px] font-medium mt-0.5" style={{ color: "var(--md-primary)" }}>
                  {job.org}
                </div>
                <ul className="mt-3 space-y-1.5">
                  {job.points.map((p, j) => (
                    <li
                      key={j}
                      className="text-[15px] leading-relaxed pl-4 relative"
                      style={{ color: "var(--md-on-surface-variant)" }}
                    >
                      <span className="absolute left-0" style={{ color: "var(--md-outline)" }}>—</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
