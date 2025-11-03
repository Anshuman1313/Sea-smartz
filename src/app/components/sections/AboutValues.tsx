'use client';

import { motion } from 'framer-motion';
import { AboutValuesData } from '@/lib/types';

interface AboutValuesProps {
  data: AboutValuesData;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function AboutValues({ data }: AboutValuesProps) {
  return (
    <section className="bg-muted/20 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-3 mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {data.heading}
          </h2>
          {data.subheading && (
            <p className="text-base md:text-lg text-foreground/40 max-w-2xl mx-auto">
              {data.subheading}
            </p>
          )}
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {data.values.map((value, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02 }}
              className="p-6 md:p-8 bg-card rounded-xl border border-border hover:border-[var(--chart-3)]/30 transition-all duration-300"
            >
              <div className="mb-5">{value.icon}</div>
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
