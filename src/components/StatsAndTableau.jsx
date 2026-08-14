import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { GithubGlyph } from "./BrandIcons";
import { profile, tableauGallery } from "../data/content";
import SectionHeading from "./SectionHeading";
import GithubStats from "./GithubStats";
import { motion } from "framer-motion";

export default function StatsAndTableau() {
  const [active, setActive] = useState(tableauGallery.categories[0].key);
  const activeCat = tableauGallery.categories.find((c) => c.key === active);

  return (
    <section className="py-24 sm:py-28" style={{ backgroundColor: "var(--md-surface-dim)" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <SectionHeading eyebrow="Activity" title="GitHub activity" />

        <div className="mb-8">
          <GithubStats username={profile.githubUsername} />
        </div>

        <div className="text-center mb-24">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-[13.5px] font-medium"
            style={{ color: "var(--md-primary)" }}
          >
            <GithubGlyph size={14} /> View full profile on GitHub
          </a>
        </div>

        <SectionHeading
          eyebrow="Tableau"
          title="Dashboard gallery"
          description={tableauGallery.summary}
        />

        <div className="flex flex-wrap gap-2 mb-8">
          {tableauGallery.categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className="px-4 py-2 rounded-full text-[13.5px] font-medium transition-colors"
              style={
                active === c.key
                  ? { backgroundColor: "var(--md-primary)", color: "var(--md-on-primary)" }
                  : { backgroundColor: "var(--md-surface)", color: "var(--md-on-surface-variant)", border: "1px solid var(--md-outline-variant)" }
              }
            >
              {c.label}
            </button>
          ))}
        </div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid sm:grid-cols-2 gap-4"
        >
          {activeCat.shots.map((img) => (
            <div
              key={img}
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid var(--md-outline-variant)", backgroundColor: "var(--md-surface)" }}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/${img}`}
                alt={activeCat.label}
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
          ))}
        </motion.div>

        <div className="mt-8 text-center">
          <a
            href={profile.links.tableau}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14.5px] font-medium border transition-colors"
            style={{ borderColor: "var(--md-outline)", color: "var(--md-on-surface)" }}
          >
            View interactive vizzes on Tableau Public
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}
