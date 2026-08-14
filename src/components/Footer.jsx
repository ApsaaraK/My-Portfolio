import { profile } from "../data/content";
import PipelineMark from "./PipelineMark";

const SOCIALS = [
  { label: "LinkedIn", href: profile.links.linkedin },
  { label: "GitHub", href: profile.links.github },
  { label: "Tableau Public", href: profile.links.tableau },
  { label: "Medium", href: profile.links.medium },
  { label: "Email", href: `mailto:${profile.email}` },
];

export default function Footer() {
  return (
    <footer className="py-12" style={{ borderTop: "1px solid var(--md-outline-variant)" }}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <PipelineMark size={6} gap={6} animated={false} />
          <span className="text-[14px]" style={{ color: "var(--md-on-surface-variant)" }}>
            © {new Date().getFullYear()} {profile.name}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="text-[13.5px] font-medium transition-colors"
              style={{ color: "var(--md-on-surface-variant)" }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
