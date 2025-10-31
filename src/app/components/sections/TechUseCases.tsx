'use client';

import { motion, Variants } from 'framer-motion';
import { TechUseCasesData } from '@/lib/types';

interface TechUseCasesProps {
  data: TechUseCasesData;
}

const containerVariants:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const cardVariants:Variants = {
  hidden: { opacity: 1, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function TechUseCases({ data }: TechUseCasesProps) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {data.heading}
          </h2>
          {data.subheading && (
            <p className="text-base md:text-lg text-foreground/30 max-w-2xl mx-auto">
              {data.subheading}
            </p>
          )}
        </motion.div>

        {/* Use Cases Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {data.useCases.map((useCase, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="group bg-card rounded-xl border border-border hover:border-[var(--chart-3)]/30 overflow-hidden transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-44 bg-muted overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--chart-3)]/20 to-transparent" />
                <div className="w-full h-full flex items-center justify-center text-foreground/20">
                  <svg className="w-14 h-14" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 md:p-6 space-y-3">
                <h3 className="text-lg md:text-xl font-semibold text-foreground">
                  {useCase.title}
                </h3>

                <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                  {useCase.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {useCase.techStack.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 py-1 text-xs font-medium bg-[var(--chart-3)]/10 text-[var(--chart-3)] rounded-full border border-[var(--chart-3)]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
