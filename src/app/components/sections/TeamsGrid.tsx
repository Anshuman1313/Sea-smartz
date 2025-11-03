'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import { TeamsGridData } from '@/lib/types';
import { ArrowRight } from 'lucide-react';

interface TeamsGridProps {
  data: TeamsGridData;
}

const containerVariants:Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants:Variants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    rotateX: -15
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { 
      duration: 0.6,
      ease: 'easeOut'
    },
  },
};

export default function TeamsGrid({ data }: TeamsGridProps) {
  return (
    <section className="bg-background py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        {/* Section Header with pulse animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-4 mb-16 md:mb-20"
        >
          <motion.h2 
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
          >
            {data.heading}
          </motion.h2>
          {data.subheading && (
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg text-foreground/40 max-w-2xl mx-auto"
            >
              {data.subheading}
            </motion.p>
          )}
        </motion.div>

        {/* Teams Grid with 3D effect */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {data.teams.map((team, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -12,
                scale: 1.03,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <Link href={team.href}>
                <div className="h-full p-8 bg-card rounded-2xl border border-border hover:border-[var(--chart-3)]/40 transition-all duration-300 shadow-lg hover:shadow-[var(--chart-3)]/10">
                  {/* Icon with rotation on hover */}
                  <motion.div 
                    className="mb-6"
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: 1.1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {team.icon}
                  </motion.div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-[var(--chart-3)] transition-colors duration-300">
                    {team.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm md:text-base text-foreground/70 mb-5 leading-relaxed">
                    {team.description}
                  </p>

                  {/* Skills with stagger animation */}
                  <motion.div 
                    className="flex flex-wrap gap-2 mb-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                      hidden: { opacity: 0 },
                      visible: {
                        opacity: 1,
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: 0.3
                        }
                      }
                    }}
                  >
                    {team.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        variants={{
                          hidden: { opacity: 0, scale: 0 },
                          visible: { opacity: 1, scale: 1 }
                        }}
                        className="px-3 py-1 text-xs font-medium bg-[var(--chart-3)]/10 text-[var(--chart-3)] rounded-full border border-[var(--chart-3)]/20"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Link with animated arrow */}
                  <div className="flex items-center gap-2 text-[var(--chart-3)] font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                    <span>Get in Touch</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        duration: 1.5, 
                        repeat: Infinity 
                      }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
