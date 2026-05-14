import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Sparkles } from "lucide-react";
import { metrics, profile } from "../../data/portfolioData";

const heroLines = ["Senior", "Software", "Engineer"];

export const Hero = () => (
  <section id="hero" className="relative flex min-h-screen items-center px-5 pb-20 pt-32 sm:px-8 lg:px-10" data-testid="hero-section">
    <div
      className="absolute inset-0 opacity-[0.16]"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1526289034009-0240ddb68ce3?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      data-testid="hero-background-image"
    />
    <div className="absolute right-6 top-32 hidden h-64 w-64 border border-white/10 lg:block hero-orbit" data-testid="hero-decorative-orbit" />
    <div className="relative mx-auto grid w-full max-w-7xl gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
      <div>
        <motion.p
          className="mb-7 inline-flex items-center gap-3 border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-xs uppercase tracking-[0.28em] text-white/60"
          data-testid="hero-availability-label"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <Sparkles className="h-3.5 w-3.5" aria-hidden="true" /> Open to senior engineering roles
        </motion.p>
        <h1 className="max-w-5xl text-6xl font-black uppercase leading-[0.82] tracking-[-0.08em] text-white sm:text-7xl md:text-8xl lg:text-[9.8rem]" data-testid="hero-title">
          {heroLines.map((line, index) => (
            <motion.span
              key={line}
              className="block"
              data-testid={`hero-title-line-${index + 1}`}
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 * index, ease: [0.22, 1, 0.36, 1] }}
            >
              {line}
            </motion.span>
          ))}
        </h1>
        <motion.div
          className="mt-9 max-w-3xl border-l border-white/20 pl-6"
          data-testid="hero-summary-panel"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.42 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/40" data-testid="hero-name-overline">
            {profile.name} · {profile.location}
          </p>
          <p className="mt-4 text-base leading-8 text-neutral-300 md:text-lg" data-testid="hero-summary-text">
            {profile.summary}
          </p>
        </motion.div>
        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          data-testid="hero-action-group"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.55 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 bg-white px-6 py-4 font-mono text-xs uppercase tracking-[0.24em] text-black transition-transform duration-300 hover:-translate-y-1"
            data-testid="hero-contact-link"
          >
            Hire Thu <ArrowDown className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-3 border border-white/20 px-6 py-4 font-mono text-xs uppercase tracking-[0.24em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
            data-testid="hero-cv-link"
          >
            View CV <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
      <motion.aside
        className="glass-card p-6 sm:p-8"
        data-testid="hero-contact-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.62 }}
      >
        <div className="mb-8 flex items-center justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/40" data-testid="hero-card-role-label">
              {profile.role}
            </p>
            <p className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-white" data-testid="hero-card-name">
              {profile.name}
            </p>
          </div>
          <div className="grid h-16 w-16 place-items-center bg-white text-xl font-black text-black" data-testid="hero-card-initials">
            {profile.initials}
          </div>
        </div>
        <div className="space-y-4 border-y border-white/10 py-6" data-testid="hero-contact-details">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 text-sm text-white/70 transition-colors duration-300 hover:text-white" data-testid="hero-email-link">
            <Mail className="h-4 w-4" aria-hidden="true" /> {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="flex items-center gap-3 text-sm text-white/70 transition-colors duration-300 hover:text-white" data-testid="hero-phone-link">
            <Phone className="h-4 w-4" aria-hidden="true" /> {profile.phone}
          </a>
          <p className="flex items-center gap-3 text-sm text-white/70" data-testid="hero-location-text">
            <MapPin className="h-4 w-4" aria-hidden="true" /> {profile.location}
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-3" data-testid="hero-social-links">
          {profile.social.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-white/10 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-white/55 transition-colors duration-300 hover:border-white/30 hover:text-white"
              data-testid={`hero-social-${item.label.toLowerCase()}-link`}
            >
              {item.label === "GitHub" ? <Github className="h-3.5 w-3.5" aria-hidden="true" /> : <Linkedin className="h-3.5 w-3.5" aria-hidden="true" />}
              {item.label}
            </a>
          ))}
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3" data-testid="hero-metrics-grid">
          {metrics.map((metric, index) => (
            <div key={metric.label} className="border border-white/10 p-4" data-testid={`hero-metric-card-${index + 1}`}>
              <p className="text-3xl font-semibold tracking-[-0.05em] text-white" data-testid={`hero-metric-value-${index + 1}`}>{metric.value}</p>
              <p className="mt-2 text-xs leading-5 text-white/45" data-testid={`hero-metric-label-${index + 1}`}>{metric.label}</p>
            </div>
          ))}
        </div>
      </motion.aside>
    </div>
  </section>
);