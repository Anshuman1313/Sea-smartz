'use client';

import { motion, Variants } from 'framer-motion';
import { ServiceDeliverablesData } from '@/lib/types';
import { CheckCircle } from 'lucide-react';

interface ServiceDeliverablesProps {
  data: ServiceDeliverablesData;
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

export default function ServiceDeliverables({ data }: ServiceDeliverablesProps) {
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

        {/* Deliverables Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {data.deliverables.map((deliverable, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-6 md:p-8 bg-card rounded-xl border border-border hover:border-[var(--chart-3)]/20 transition-colors duration-300"
            >
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-2">
                {deliverable.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-foreground/50 mb-5">
                {deliverable.description}
              </p>

              {/* Items List */}
              <ul className="space-y-3">
                {deliverable.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--chart-3)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/70 leading-relaxed">
                      {item}
                    </span>
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
