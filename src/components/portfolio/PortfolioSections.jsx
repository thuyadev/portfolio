import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, GraduationCap } from "lucide-react";
import { education, experience, projects, skills } from "../../data/portfolioData";
import { fadeUp, SectionHeading } from "./SectionHeading";

const slug = (value) => value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const AboutSection = () => (
  <section className="px-5 py-24 sm:px-8 lg:px-10 lg:py-32" data-testid="about-section">
    <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
      <motion.div
        className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-white/[0.03]"
        data-testid="about-image-panel"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeUp}
      >
        <img
          src="https://images.unsplash.com/photo-1582535200497-8d831d74d18b?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85"
          alt="Bangkok skyline at night"
          className="h-full w-full object-cover opacity-70 grayscale"
          data-testid="about-bangkok-image"
        />
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/60 to-transparent p-8" data-testid="about-image-caption-wrap">
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-white/45" data-testid="about-image-caption-overline">Based in</p>
          <p className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-white" data-testid="about-image-caption-title">Bangkok, Thailand</p>
        </div>
      </motion.div>
      <div>
        <SectionHeading
          eyebrow="Profile"
          title="A full-stack engineer who turns complex business flows into clear digital products."
          description="Thu brings deep hands-on experience across financing, loyalty, recruitment, e-commerce, education, and automation platforms — with a practical focus on reliability, usability, and business impact."
          testId="about"
        />
        <motion.div
          className="grid gap-4 sm:grid-cols-2"
          data-testid="about-strength-grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        >
          {["Scalable web platforms", "Loyalty & gamification", "FinTech workflow systems", "Cross-functional leadership"].map((item) => (
            <motion.div key={item} className="glass-card p-5" data-testid={`about-strength-${slug(item)}`} variants={fadeUp}>
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-white/55" data-testid={`about-strength-label-${slug(item)}`}>{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export const ExperienceSection = () => (
  <section id="experience" className="px-5 py-24 sm:px-8 lg:px-10 lg:py-32" data-testid="experience-section">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Experience"
        title="Six years of shipping business-critical systems."
        description="A career path spanning team leadership, product engineering, platform integrations, and full-stack delivery for real businesses."
        testId="experience"
      />
      <div className="relative space-y-5 before:absolute before:left-3 before:top-0 before:h-full before:w-px before:bg-white/10" data-testid="experience-timeline">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.period}`}
            className="timeline-card relative ml-10 border border-white/10 bg-white/[0.025] p-6 md:grid md:grid-cols-[0.38fr_0.62fr] md:gap-8 md:p-8"
            data-testid={`experience-card-${index + 1}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
          >
            <span className="absolute -left-[2.35rem] top-7 grid h-7 w-7 place-items-center border border-white/20 bg-black" data-testid={`experience-marker-${index + 1}`}>
              <BriefcaseBusiness className="h-3.5 w-3.5 text-white/70" aria-hidden="true" />
            </span>
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-white/45" data-testid={`experience-period-${index + 1}`}>{item.period}</p>
              <p className="mt-3 text-sm text-white/50" data-testid={`experience-location-${index + 1}`}>{item.location}</p>
            </div>
            <div className="mt-5 md:mt-0">
              <h3 className="text-2xl font-semibold tracking-[-0.04em] text-white" data-testid={`experience-role-${index + 1}`}>{item.role}</h3>
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.24em] text-white/45" data-testid={`experience-company-${index + 1}`}>{item.company}</p>
              <p className="mt-5 leading-7 text-neutral-400" data-testid={`experience-detail-${index + 1}`}>{item.detail}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export const ProjectsSection = () => (
  <section id="work" className="px-5 py-24 sm:px-8 lg:px-10 lg:py-32" data-testid="projects-section">
    <div className="mx-auto max-w-7xl">
      <SectionHeading
        eyebrow="Selected Work"
        title="Platforms designed around real operations, not just screens."
        description="Featured projects show a mix of finance, loyalty, HR, automation, and customer engagement systems."
        testId="projects"
      />
      <div className="grid gap-6 lg:grid-cols-12" data-testid="projects-grid">
        {projects.map((project, index) => (
          <motion.article
            key={project.name}
            className={`project-card min-h-[330px] border border-white/10 bg-white/[0.035] p-7 md:p-8 ${project.span}`}
            data-testid={`project-card-${slug(project.name)}`}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.22 }}
            variants={fadeUp}
          >
            <div className="flex h-full flex-col justify-between gap-10">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-white/40" data-testid={`project-type-${slug(project.name)}`}>{project.type}</p>
                <div className="mt-5 flex items-start justify-between gap-6">
                  <h3 className="max-w-xl text-3xl font-semibold tracking-[-0.055em] text-white md:text-4xl" data-testid={`project-name-${slug(project.name)}`}>{project.name}</h3>
                  {project.href && (
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="grid h-11 w-11 shrink-0 place-items-center border border-white/15 text-white/60 transition-colors duration-300 hover:bg-white hover:text-black"
                      data-testid={`project-link-${slug(project.name)}`}
                      aria-label={`Open ${project.name}`}
                    >
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </a>
                  )}
                </div>
                <p className="mt-6 text-lg leading-8 text-neutral-300" data-testid={`project-highlight-${slug(project.name)}`}>{project.highlight}</p>
                <p className="mt-4 leading-7 text-neutral-500" data-testid={`project-contribution-${slug(project.name)}`}>{project.contribution}</p>
              </div>
              <div className="flex flex-wrap gap-2" data-testid={`project-stack-${slug(project.name)}`}>
                {project.stack.map((item) => (
                  <span key={item} className="border border-white/10 px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-white/50" data-testid={`project-stack-${slug(project.name)}-${slug(item)}`}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export const SkillsEducationSection = () => (
  <section id="skills" className="px-5 py-24 sm:px-8 lg:px-10 lg:py-32" data-testid="skills-education-section">
    <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1.05fr_0.95fr]">
      <div>
        <SectionHeading
          eyebrow="Skills"
          title="Comfortable across product layers."
          description="A practical technology range covering modern frontend, robust backend, mobile apps, databases, cloud, automation, and team workflows."
          testId="skills"
        />
        <div className="grid gap-4 sm:grid-cols-2" data-testid="skills-grid">
          {skills.map((group) => (
            <motion.div
              key={group.category}
              className="skill-card border border-white/10 bg-white/[0.03] p-5"
              data-testid={`skill-card-${slug(group.category)}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-white/55" data-testid={`skill-category-${slug(group.category)}`}>{group.category}</h3>
              <div className="mt-4 flex flex-wrap gap-2" data-testid={`skill-items-${slug(group.category)}`}>
                {group.items.map((item) => (
                  <span key={item} className="bg-white px-2.5 py-1 text-xs font-medium text-black" data-testid={`skill-item-${slug(group.category)}-${slug(item)}`}>{item}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="lg:pt-28">
        <SectionHeading
          eyebrow="Education"
          title="Formal computing foundation with business IT perspective."
          testId="education"
        />
        <div className="space-y-3" data-testid="education-list">
          {education.map((item, index) => (
            <motion.div
              key={item}
              className="flex gap-4 border border-white/10 bg-black/30 p-5"
              data-testid={`education-card-${index + 1}`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.25 }}
              variants={fadeUp}
            >
              <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-white/45" aria-hidden="true" />
              <p className="leading-7 text-neutral-300" data-testid={`education-title-${index + 1}`}>{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);