import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certifications } from "../data/content";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 sm:py-28">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Credentials" title="Certifications" />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-2xl p-5"
              style={{ backgroundColor: "var(--md-surface)", border: "1px solid var(--md-outline-variant)" }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                style={{ backgroundColor: "var(--md-primary-container)", color: "var(--md-on-primary-container)" }}
              >
                <Award size={18} />
              </div>
              <div className="text-[15px] font-medium leading-snug" style={{ color: "var(--md-on-surface)" }}>
                {c.name}
              </div>
              <div className="text-[13px] mt-1" style={{ color: "var(--md-on-surface-variant)" }}>
                {c.issuer}
              </div>
              <span
                className="inline-block mt-3 px-2.5 py-1 rounded-full text-[11.5px] font-mono font-medium"
                style={
                  c.status === "Certified"
                    ? { backgroundColor: "#e6f4ea", color: "#137333" }
                    : { backgroundColor: "var(--md-surface-container)", color: "var(--md-on-surface-variant)" }
                }
              >
                {c.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
