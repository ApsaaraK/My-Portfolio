import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import ArchitectureStudies from "./components/ArchitectureStudies";
import StatsAndTableau from "./components/StatsAndTableau";
import Certifications from "./components/Certifications";
import Recommendations from "./components/Recommendations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail";

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [openItem, setOpenItem] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div>
      <Nav theme={theme} onToggleTheme={() => setTheme((t) => (t === "dark" ? "light" : "dark"))} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects onOpenProject={setOpenItem} />
        <ArchitectureStudies onOpenProject={setOpenItem} />
        <StatsAndTableau theme={theme} />
        <Certifications />
        <Recommendations />
        <Contact />
      </main>
      <Footer />
      <ProjectDetail item={openItem} onClose={() => setOpenItem(null)} />
    </div>
  );
}
