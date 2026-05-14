import { motion } from "framer-motion";

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const SectionHeading = ({ eyebrow, title, description, testId }) => (
  <motion.div
    className="mb-12 max-w-3xl"
    data-testid={`${testId}-heading-wrap`}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    variants={fadeUp}
  >
    <p className="font-mono text-xs uppercase tracking-[0.34em] text-white/45" data-testid={`${testId}-eyebrow`}>
      {eyebrow}
    </p>
    <h2 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl" data-testid={`${testId}-title`}>
      {title}
    </h2>
    {description && (
      <p className="mt-5 text-base leading-8 text-neutral-400 md:text-lg" data-testid={`${testId}-description`}>
        {description}
      </p>
    )}
  </motion.div>
);