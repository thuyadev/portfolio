export const profile = {
  name: "Thu Ya Aung",
  initials: "TYA",
  role: "Senior Software Engineer",
  location: "Bangkok, Thailand",
  email: "thuyaaung.dev.tya@gmail.com",
  phone: "+66 958200768",
  cvUrl:
    "https://customer-assets.emergentagent.com/job_03461aad-c18c-4e50-bc03-74237cefb1ba/artifacts/04ft92r5_my-cv%20%282%29.pdf",
  summary:
    "Senior software engineer with 6+ years of full-stack experience building scalable web platforms, loyalty engines, marketplace products, automation systems, and customer-facing digital experiences across Southeast Asia.",
  social: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/thu-ya-aung-a02b3316b" },
    { label: "GitHub", href: "https://github.com/thuyadev" },
    { label: "GitLab", href: "https://gitlab.com/thuyaaung" },
  ],
};

export const navLinks = [
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const metrics = [
  { value: "6+", label: "Years building production software" },
  { value: "15+", label: "Platforms across web, mobile, and automation" },
  { value: "4", label: "Markets supported: SG, HK, MY, TH" },
  { value: "40%", label: "Admin workload reduced on event matching" },
];

export const experience = [
  {
    period: "Oct 2025 — Present",
    role: "Senior Software Engineer · Team Lead",
    company: "ONENEX",
    location: "Remote",
    detail:
      "Leading development of an in-house loyalty engine, gamification flows, rewards, points, and integration-ready business interfaces that help win larger clients.",
  },
  {
    period: "Sep 2023 — Sep 2025",
    role: "Software Engineer",
    company: "CARRO",
    location: "Bangkok · Hybrid",
    detail:
      "Built and optimized FMS and LOMS financing platforms for dealer onboarding, credit requests, loan tracking, UCD integration, reporting, and multi-country expansion.",
  },
  {
    period: "Dec 2022 — Sep 2023",
    role: "Software Engineer",
    company: "ONENEX / ATLAS DIGI",
    location: "Yangon · On-site",
    detail:
      "Designed and developed POCKET, a gamified lifestyle platform for rewards, discounts, customer engagement, and partner growth with brands including KFC.",
  },
  {
    period: "Jan 2021 — Sep 2022",
    role: "Full Stack Web Developer",
    company: "Binary Lab",
    location: "Yangon · On-site",
    detail:
      "Delivered e-commerce and digital transformation platforms for SMEs, including loyalty, referral, catalog, purchasing, and admin dashboard workflows.",
  },
  {
    period: "2018 — 2020",
    role: "Web Developer / Junior Web Developer",
    company: "SeaSoft, MMDigital Solution, Cyberwings",
    location: "Yangon · On-site",
    detail:
      "Built e-commerce, HR matching, event matching, education, insurance, and corporate web platforms with Laravel, Vue, React, Flutter, and traditional web stacks.",
  },
];

export const projects = [
  {
    name: "Floorstock Management System",
    type: "FinTech platform",
    highlight: "Financing workflows for dealerships across Singapore, Hong Kong, Malaysia, and Thailand.",
    contribution:
      "Built credit loan submissions, dealer onboarding, document generation, round-robin task assignment, and monthly Tableau automation.",
    stack: ["Laravel", "PHP", "React", "PostgreSQL", "AWS Vapor"],
    href: "https://dealer.geniefintech.com/sg/en",
    span: "lg:col-span-7",
  },
  {
    name: "POCKET",
    type: "Lifestyle & loyalty engine",
    highlight: "Gamified rewards platform with merchant, customer, and admin experiences.",
    contribution:
      "Led reward redemption, lucky draw features, dashboards, apps, and an owned loyalty engine for scalable partner integrations.",
    stack: ["Laravel", "Vue.js", "NestJS", "Strapi", "BullMQ"],
    href: "https://play.google.com/store/apps/details?id=com.pocket.customer&pcampaignid=web_share",
    span: "lg:col-span-5",
  },
  {
    name: "Freelance Recruiter Management System",
    type: "HR operations platform",
    highlight: "End-to-end freelance recruitment collaboration between external recruiters and internal staff.",
    contribution:
      "Created authentication, profiles, position publishing, candidate submission, document handling, invoices, and main-system integrations.",
    stack: [".NET", "C#", "Vue.js", "MS SQL"],
    href: null,
    span: "lg:col-span-5",
  },
  {
    name: "E-Invoice Integration",
    type: "Automation & compliance",
    highlight: "Malaysia LHDN tax authority integration for monthly invoice generation.",
    contribution:
      "Automated tax invoice creation, improved accounting efficiency, and aligned reporting flows with government standards.",
    stack: ["Laravel", "PHP", "Docker", "N8N"],
    href: null,
    span: "lg:col-span-7",
  },
];

export const skills = [
  { category: "Frontend", items: ["React", "Vue.js", "Svelte", "TypeScript", "Tailwind", "Sass", "jQuery"] },
  { category: "Backend", items: ["Laravel", "PHP", "Node.js", "NestJS", "Python", "Go", "C#", ".NET"] },
  { category: "Mobile", items: ["Flutter", "React Native"] },
  { category: "Data & Cloud", items: ["MySQL", "PostgreSQL", "MongoDB", "AWS", "Google Cloud", "DigitalOcean"] },
  { category: "Workflow", items: ["Git", "Docker", "N8N", "Activepieces", "Scrum"] },
];

export const education = [
  "BSc (Hons) Business IT · University of Greenwich, UK",
  "Level 5 Diploma in Computing · NCC Education UK",
  "Level 4 Diploma in Computing · NCC Education UK",
  "Professional Web Developer Course · Cyberwings",
  "B.A. English · West Yangon University",
];