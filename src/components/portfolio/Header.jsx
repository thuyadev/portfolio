import { ArrowDownToLine } from "lucide-react";
import { navLinks, profile } from "../../data/portfolioData";

export const Header = () => (
  <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0A0A0A]/75 backdrop-blur-2xl" data-testid="site-header">
    <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
      <a href="#hero" className="group flex items-center gap-3" data-testid="header-logo-link" aria-label="Go to hero section">
        <span className="grid h-9 w-9 place-items-center border border-white/20 bg-white text-sm font-black text-black transition-transform duration-300 group-hover:-rotate-6" data-testid="header-logo-initials">
          {profile.initials}
        </span>
        <span className="hidden font-mono text-xs uppercase tracking-[0.26em] text-white/70 sm:inline" data-testid="header-name-label">
          Thu Ya Aung
        </span>
      </a>
      <nav className="hidden items-center gap-7 md:flex" data-testid="desktop-navigation">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-mono text-xs uppercase tracking-[0.24em] text-white/50 transition-colors duration-300 hover:text-white"
            data-testid={`nav-link-${link.label.toLowerCase()}`}
          >
            {link.label}
          </a>
        ))}
      </nav>
      <a
        href={profile.cvUrl}
        target="_blank"
        rel="noreferrer"
        className="inline-flex items-center gap-2 border border-white/20 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
        data-testid="download-cv-link"
      >
        CV <ArrowDownToLine className="h-3.5 w-3.5" aria-hidden="true" />
      </a>
    </div>
  </header>
);