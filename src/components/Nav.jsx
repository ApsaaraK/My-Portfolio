import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon, Download } from "lucide-react";
import PipelineMark from "./PipelineMark";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#studies", label: "Design Studies" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Nav({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
      style={{
        backgroundColor: scrolled ? "var(--md-surface)" : "transparent",
        boxShadow: scrolled ? "var(--shadow-1)" : "none",
        borderBottom: scrolled ? "1px solid var(--md-outline-variant)" : "1px solid transparent",
      }}
    >
      <nav className="max-w-6xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-3 group">
          <PipelineMark size={7} gap={5} />
          <span className="font-medium text-[17px] tracking-tight" style={{ color: "var(--md-on-surface)" }}>
            Tiruni Karunarathna
          </span>
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-4 py-2 rounded-full text-[14px] font-medium transition-colors"
                style={{ color: "var(--md-on-surface-variant)" }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--md-surface-container)")}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full text-[14px] font-medium transition-transform hover:scale-[1.03]"
            style={{ backgroundColor: "var(--md-primary)", color: "var(--md-on-primary)" }}
          >
            Let's talk
          </a>
          <button
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
            className="p-2.5 rounded-full transition-colors"
            style={{ color: "var(--md-on-surface-variant)" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "var(--md-surface-container)")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
          >
            {theme === "dark" ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="lg:hidden p-2.5 rounded-full"
            style={{ color: "var(--md-on-surface-variant)" }}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="lg:hidden px-5 pb-4 flex flex-col gap-1"
          style={{ backgroundColor: "var(--md-surface)", borderBottom: "1px solid var(--md-outline-variant)" }}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-2.5 rounded-lg text-[15px] font-medium"
              style={{ color: "var(--md-on-surface)" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
