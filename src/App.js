import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { Header } from "./components/portfolio/Header";
import { Hero } from "./components/portfolio/Hero";
import { AboutSection, ExperienceSection, ProjectsSection, SkillsEducationSection } from "./components/portfolio/PortfolioSections";
import { ContactSection } from "./components/portfolio/ContactSection";

const Home = () => (
  <main className="portfolio-shell" data-testid="portfolio-page">
    <div className="portfolio-content">
      <Header />
      <Hero />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsEducationSection />
      <ContactSection />
      <footer className="px-5 pb-10 sm:px-8 lg:px-10" data-testid="site-footer">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t border-white/10 pt-8 font-mono text-xs uppercase tracking-[0.22em] text-white/35 sm:flex-row">
          <p data-testid="footer-credit">© 2026 Thu Ya Aung</p>
          <p data-testid="footer-positioning">Senior Software Engineer · Full-stack systems</p>
        </div>
      </footer>
    </div>
    <Toaster richColors position="top-right" />
  </main>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
