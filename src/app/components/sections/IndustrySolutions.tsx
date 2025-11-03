'use client';

import { motion } from 'framer-motion';
import { IndustrySolutionsData } from '@/lib/types';
import { Check } from 'lucide-react';

interface IndustrySolutionsProps {
  data: IndustrySolutionsData;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const cardVariants = {
  hidden: { opacity: 1, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function IndustrySolutions({ data }: IndustrySolutionsProps) {
  return (
    <section className="bg-background py-14 md:py-20">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-10 md:mb-14"
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

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {data.solutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="p-6 md:p-8 bg-card rounded-xl border border-border hover:border-[var(--chart-3)]/30 transition-all duration-300"
            >
              <div className="mb-5">{solution.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-sm text-foreground/70 mb-5 leading-relaxed">
                {solution.description}
              </p>
              <ul className="space-y-2.5">
                {solution.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-[var(--chart-3)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
