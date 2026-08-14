import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function ProjectDetail({ item, onClose }) {
  useEffect(() => {
    if (!item) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] overflow-y-auto"
          style={{ backgroundColor: "var(--md-bg)" }}
        >
          <div className="max-w-4xl mx-auto px-5 sm:px-8 py-10">
            <button
              onClick={onClose}
              className="sticky top-4 float-right p-2.5 rounded-full z-10"
              style={{ backgroundColor: "var(--md-surface-container)", color: "var(--md-on-surface)" }}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {item.type === "study" ? <StudyDetail s={item.data} /> : <ProjectItemDetail p={item.data} />}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function StudyDetail({ s }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="pt-4 clear-both">
      <span
        className="inline-block px-3 py-1 rounded-full text-[12px] font-mono font-medium mb-4"
        style={{ backgroundColor: "var(--md-surface-container)", color: "var(--md-on-surface-variant)" }}
      >
        Self-directed design study
      </span>
      <h2 className="text-[30px] sm:text-[38px] font-medium tracking-tight" style={{ color: "var(--md-on-surface)" }}>
        {s.title}
      </h2>
      <p className="mt-4 text-[16px] leading-relaxed max-w-2xl" style={{ color: "var(--md-on-surface-variant)" }}>
        {s.summary}
      </p>

      <div className="mt-8 grid gap-4">
        {s.images.map((img) => (
          <div key={img} className="rounded-2xl overflow-hidden" style={{ border: "1px solid var(--md-outline-variant)" }}>
            <img src={`${import.meta.env.BASE_URL}images/${img}`} alt={s.title} className="w-full h-auto" loading="lazy" />
          </div>
        ))}
      </div>

      <h3 className="mt-10 text-[18px] font-medium" style={{ color: "var(--md-on-surface)" }}>
        Key components
      </h3>
      <div className="mt-4 space-y-4">
        {s.components.map((c) => (
          <div key={c.title} className="rounded-xl p-5" style={{ backgroundColor: "var(--md-surface-container)" }}>
            <div className="font-medium text-[15px]" style={{ color: "var(--md-on-surface)" }}>
              {c.title}
            </div>
            <p className="mt-1.5 text-[14.5px] leading-relaxed" style={{ color: "var(--md-on-surface-variant)" }}>
              {c.detail}
            </p>
          </div>
        ))}
      </div>

      <h3 className="mt-10 mb-3 text-[18px] font-medium" style={{ color: "var(--md-on-surface)" }}>
        Tech stack
      </h3>
      <div className="flex flex-wrap gap-2 mb-16">
        {s.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1.5 rounded-lg text-[13px] font-mono"
            style={{ backgroundColor: "var(--md-surface-container)", color: "var(--md-on-surface-variant)" }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

function ProjectItemDetail({ p }) {
  return (
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="pt-4 clear-both">
      {p.status && (
        <span
          className="inline-block px-3 py-1 rounded-full text-[12px] font-mono font-medium mb-4"
          style={{ backgroundColor: "var(--md-primary-container)", color: "var(--md-on-primary-container)" }}
        >
          {p.status}
        </span>
      )}
      <h2 className="text-[30px] sm:text-[38px] font-medium tracking-tight" style={{ color: "var(--md-on-surface)" }}>
        {p.title}
      </h2>
      <div className="mt-6 space-y-4 max-w-2xl">
        {(p.description || [p.summary]).map((para, i) => (
          <p key={i} className="text-[16px] leading-relaxed" style={{ color: "var(--md-on-surface-variant)" }}>
            {para}
          </p>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-2 mb-16">
        {p.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1.5 rounded-lg text-[13px] font-mono"
            style={{ backgroundColor: "var(--md-surface-container)", color: "var(--md-on-surface-variant)" }}
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
