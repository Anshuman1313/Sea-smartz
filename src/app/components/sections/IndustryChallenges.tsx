'use client';

import { motion } from 'framer-motion';
import { IndustryChallengesData } from '@/lib/types';

interface IndustryChallengesProps {
  data: IndustryChallengesData;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

export default function IndustryChallenges({ data }: IndustryChallengesProps) {
  return (
    <section className="bg-muted/20 py-14 md:py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {data.challenges.map((challenge, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="p-6 md:p-8 bg-card rounded-xl border border-border hover:border-[var(--chart-3)]/30 transition-colors duration-300"
            >
              <div className="mb-4">{challenge.icon}</div>
              <h3 className="text-lg md:text-xl font-semibold text-foreground mb-3">
                {challenge.title}
              </h3>
              <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                {challenge.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
