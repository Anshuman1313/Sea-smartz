'use client';

import { motion, Variants } from 'framer-motion';
import { TechSpecsData } from '@/lib/types';
import { Check } from 'lucide-react';

interface TechSpecsProps {
  data: TechSpecsData;
}

const containerVariants:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants:Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
};

export default function TechSpecs({ data }: TechSpecsProps) {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
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

        {/* Specs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 mb-10"
        >
          {data.specs.map((spec, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-card p-5 md:p-6 rounded-xl border border-border hover:border-[var(--chart-3)]/20 transition-colors duration-300"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1">
                  <Check className="w-5 h-5 text-[var(--chart-3)]" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-baseline justify-between gap-2">
                    <span className="text-sm text-foreground/60 font-medium">{spec.label}</span>
                    <span className="text-lg font-bold text-[var(--chart-3)]">{spec.value}</span>
                  </div>
                  {spec.description && (
                    <p className="text-sm text-foreground/50">{spec.description}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Info */}
        {data.additionalInfo && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-[var(--chart-3)]/5 border border-[var(--chart-3)]/20 rounded-xl p-6 md:p-8"
          >
            <p className="text-base text-foreground/70 leading-relaxed">
              {data.additionalInfo}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
