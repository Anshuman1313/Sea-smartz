'use client';

import { motion, Variants } from 'framer-motion';
import { ServicePackagesData } from '@/lib/types';
import { Check } from 'lucide-react';

interface ServicePackagesProps {
  data: ServicePackagesData;
}

const containerVariants:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
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

export default function ServicePackages({ data }: ServicePackagesProps) {
  return (
    <section className="bg-muted/20 py-16 md:py-24">
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

        {/* Packages Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {data.packages.map((pkg, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              className={`relative p-6 md:p-8 bg-card rounded-xl border-2 transition-all duration-300 ${
                pkg.badge 
                  ? 'border-[var(--chart-3)] shadow-lg shadow-[var(--chart-3)]/10' 
                  : 'border-border hover:border-[var(--chart-3)]/30'
              }`}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-[var(--chart-3)] text-background text-xs font-semibold rounded-full">
                    {pkg.badge}
                  </span>
                </div>
              )}

              {/* Package Name */}
              <h3 className="text-2xl font-bold text-foreground mb-2">
                {pkg.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-foreground/60 mb-4">
                {pkg.description}
              </p>

              {/* Pricing */}
              {pkg.pricing && (
                <div className="mb-6 pb-6 border-b border-border">
                  <span className="text-2xl md:text-3xl font-bold text-[var(--chart-3)]">
                    {pkg.pricing}
                  </span>
                </div>
              )}

              {/* Features List */}
              <ul className="space-y-3">
                {pkg.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[var(--chart-3)] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground/70 leading-relaxed">
                      {feature}
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
