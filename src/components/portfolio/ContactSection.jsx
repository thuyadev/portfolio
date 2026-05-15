import { ArrowUpRight, CheckCircle2, Download, Mail } from "lucide-react";
import { contactPanel, profile } from "../../data/portfolioData";
import { SectionHeading } from "./SectionHeading";

export const ContactSection = () => {
  const introCallMailto = `mailto:${profile.email}?subject=${encodeURIComponent("Intro Call - Senior Software Engineer Opportunity")}`;

  return (
    <section id="contact" className="px-5 py-24 sm:px-8 lg:px-10 lg:py-32" data-testid="contact-section">
      <div className="mx-auto grid max-w-7xl gap-12 border-t border-white/10 pt-20 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something extraordinary."
            description="For senior software engineering roles, product teams, and technical leadership conversations, reach out directly."
            testId="contact"
          />
          <div className="space-y-4" data-testid="contact-direct-links">
            <a href={`mailto:${profile.email}`} className="block border border-white/10 p-5 text-white/70 transition-colors duration-300 hover:bg-white hover:text-black" data-testid="contact-email-link">
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="block border border-white/10 p-5 text-white/70 transition-colors duration-300 hover:bg-white hover:text-black" data-testid="contact-phone-link">
              {profile.phone}
            </a>
          </div>
        </div>
        <aside className="glass-card p-6 sm:p-8" data-testid="contact-collaboration-panel">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-400/35 bg-emerald-400/10 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-300" data-testid="contact-availability-badge">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden="true" />
            Available
          </p>

          <h3 className="mt-5 text-2xl font-semibold text-white sm:text-3xl" data-testid="contact-panel-title">
            Ways to work together
          </h3>
          <p className="mt-3 text-sm leading-7 text-white/65" data-testid="contact-panel-availability">
            {contactPanel.availability}
          </p>
          <p className="mt-2 text-sm leading-7 text-white/50" data-testid="contact-panel-preferences">
            {contactPanel.workPreferences}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2" data-testid="contact-cta-grid">
            <a
              href={introCallMailto}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-none border border-white/20 bg-white px-4 font-mono text-[11px] uppercase tracking-[0.2em] text-black transition-transform duration-300 hover:-translate-y-0.5"
              data-testid="contact-cta-intro-call"
            >
              <Mail className="h-4 w-4" aria-hidden="true" />
              Book Intro Call
            </a>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-none border border-white/20 px-4 font-mono text-[11px] uppercase tracking-[0.2em] text-white transition-colors duration-300 hover:bg-white hover:text-black"
              data-testid="contact-cta-resume"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
          </div>

          <ul className="mt-7 space-y-3 border-t border-white/10 pt-6 text-sm text-white/70" data-testid="contact-focus-areas">
            {contactPanel.focusAreas.map((area) => (
              <li key={area} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-white/70" aria-hidden="true" />
                <span>{area}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-wrap gap-3 border-t border-white/10 pt-6" data-testid="contact-social-links">
            {profile.social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-white/15 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/70 transition-colors duration-300 hover:border-white hover:bg-white hover:text-black"
              >
                {item.label}
                <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
};