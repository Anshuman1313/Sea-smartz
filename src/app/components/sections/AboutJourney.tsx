'use client';

import { motion } from 'framer-motion';
import { AboutJourneyData } from '@/lib/types';
import { Calendar } from 'lucide-react';

interface AboutJourneyProps {
  data: AboutJourneyData;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6 },
  },
};

export default function AboutJourney({ data }: AboutJourneyProps) {
  return (
    <section className="bg-muted/20 py-16 md:py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
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

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative space-y-8"
        >
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--chart-3)] via-[var(--chart-3)]/50 to-transparent" />

          {data.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative flex items-start gap-6 md:gap-8"
            >
              {/* Year Badge */}
              <div className="relative flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-[var(--chart-3)] rounded-full flex items-center justify-center border-4 border-background z-10">
                  <Calendar className="w-5 h-5 md:w-6 md:h-6 text-background" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 pb-8">
                <div className="p-6 bg-card rounded-xl border border-border hover:border-[var(--chart-3)]/30 transition-colors duration-300">
                  <div className="text-sm font-bold text-[var(--chart-3)] mb-2">
                    {achievement.year}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
