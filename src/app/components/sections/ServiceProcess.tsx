'use client';

import { motion, Variants } from 'framer-motion';
import { ServiceProcessData } from '@/lib/types';

interface ServiceProcessProps {
  data: ServiceProcessData;
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

const stepVariants:Variants = {
  hidden: { opacity: 1, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function ServiceProcess({ data }: ServiceProcessProps) {
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

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6 md:space-y-8"
        >
          {data.steps.map((step, index) => (
            <motion.div
              key={index}
              variants={stepVariants}
              className="relative"
            >
              <div className="flex items-start gap-4 md:gap-6 p-6 md:p-8 bg-card rounded-xl border border-border hover:border-[var(--chart-3)]/20 transition-colors duration-300">
                {/* Step Number & Icon */}
                <div className="flex-shrink-0">
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[var(--chart-3)]/10 border-2 border-[var(--chart-3)]/30 flex items-center justify-center">
                      <span className="text-lg md:text-xl font-bold text-[var(--chart-3)]">
                        {step.step}
                      </span>
                    </div>
                    <div className="hidden md:block">
                      {step.icon}
                    </div>
                  </div>
                </div>

                {/* Step Content */}
                <div className="flex-1 pt-2">
                  <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-base text-foreground/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector Line */}
              {index < data.steps.length - 1 && (
                <div className="hidden md:block absolute left-[3.5rem] top-[5.5rem] w-0.5 h-8 bg-gradient-to-b from-[var(--chart-3)]/30 to-transparent" />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
