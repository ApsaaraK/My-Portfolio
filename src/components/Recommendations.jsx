import { motion } from "framer-motion";
import { Quote, User, PencilLine } from "lucide-react";
import { LinkedinGlyph } from "./BrandIcons";
import { recommendations } from "../data/content";
import SectionHeading from "./SectionHeading";

const isPlaceholder = (r) => r.name.startsWith("[");

export default function Recommendations() {
  if (!recommendations?.length) return null;

  return (
    <section className="py-24 sm:py-28">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="LinkedIn" title="Recommendations" />

        <div className="grid sm:grid-cols-2 gap-5">
          {recommendations.map((r, i) => {
            const placeholder = isPlaceholder(r);
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="relative rounded-2xl p-6"
                style={{
                  backgroundColor: "var(--md-surface)",
                  border: placeholder ? "1.5px dashed var(--md-outline)" : "1px solid var(--md-outline-variant)",
                }}
              >
                {placeholder && (
                  <span
                    className="absolute -top-3 left-5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-mono font-medium"
                    style={{ backgroundColor: "var(--md-surface-container-high)", color: "var(--md-on-surface-variant)" }}
                  >
                    <PencilLine size={11} />
                    Placeholder — replace before publishing
                  </span>
                )}

                <Quote size={22} style={{ color: "var(--md-primary)" }} className="opacity-70" />

                <p
                  className="mt-3 text-[15px] leading-relaxed"
                  style={{ color: placeholder ? "var(--md-on-surface-variant)" : "var(--md-on-surface)" }}
                >
                  {placeholder ? <em>{r.quote}</em> : r.quote}
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <div
                    className="w-11 h-11 rounded-full overflow-hidden flex items-center justify-center shrink-0"
                    style={{ backgroundColor: "var(--md-surface-container)", border: "1px solid var(--md-outline-variant)" }}
                  >
                    {r.photo ? (
                      <img src={r.photo} alt={r.name} className="w-full h-full object-cover" loading="lazy" />
                    ) : (
                      <User size={18} style={{ color: "var(--md-on-surface-variant)" }} />
                    )}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[14px] font-medium truncate" style={{ color: "var(--md-on-surface)" }}>
                        {r.name}
                      </span>
                      {r.linkedinUrl && (
                        <a href={r.linkedinUrl} target="_blank" rel="noreferrer">
                          <LinkedinGlyph size={13} style={{ color: "#0a66c2", flexShrink: 0 }} />
                        </a>
                      )}
                    </div>
                    <div className="text-[12.5px] truncate" style={{ color: "var(--md-on-surface-variant)" }}>
                      {r.title}
                    </div>
                    {r.relationship && (
                      <div className="text-[11.5px] mt-0.5 truncate" style={{ color: "var(--md-on-surface-variant)", opacity: 0.75 }}>
                        {r.relationship}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
