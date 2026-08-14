import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${align === "center" ? "text-center mx-auto" : ""}`}
      style={{ maxWidth: align === "center" ? 640 : undefined }}
    >
      {eyebrow && (
        <div
          className="text-[13px] font-mono font-medium uppercase tracking-wider mb-3"
          style={{ color: "var(--md-primary)" }}
        >
          {eyebrow}
        </div>
      )}
      <h2
        className="text-[30px] sm:text-[38px] font-medium tracking-tight leading-tight"
        style={{ color: "var(--md-on-surface)" }}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-[16px] sm:text-[17px] leading-relaxed" style={{ color: "var(--md-on-surface-variant)" }}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
