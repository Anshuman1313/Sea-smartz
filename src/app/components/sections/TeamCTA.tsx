'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TeamCTAData } from '@/lib/types';
import { ArrowRight, Users } from 'lucide-react';

interface TeamCTAProps {
  data: TeamCTAData;
}

export default function TeamCTA({ data }: TeamCTAProps) {
  return (
    <section className="bg-muted/20 py-24 md:py-32 relative overflow-hidden">
      {/* Animated background circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-0 right-0 w-96 h-96 bg-[var(--chart-3)]/10 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--chart-3)]/10 rounded-full blur-3xl"
      />
      
      <div className="relative max-w-4xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-8"
        >
          {/* Icon with float animation */}
          <motion.div
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block"
          >
            <div className="w-20 h-20 mx-auto bg-[var(--chart-3)]/20 rounded-full flex items-center justify-center border-2 border-[var(--chart-3)]/40">
              <Users className="w-10 h-10 text-[var(--chart-3)]" />
            </div>
          </motion.div>

          {/* Heading with wave effect */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {data.heading}
            </h2>
            <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              {data.subheading}
            </p>
          </motion.div>

          {/* CTA Buttons with scale animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.6, 
              delay: 0.4,
              type: "spring",
              stiffness: 100
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            {/* Primary CTA with pulse effect */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={data.primaryCTA.href}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--chart-3)] hover:bg-[var(--chart-3)]/90 text-background font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-[var(--chart-3)]/30"
              >
                {data.primaryCTA.text}
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Link>
            </motion.div>

            {/* Secondary CTA */}
            {data.secondaryCTA && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={data.secondaryCTA.href}
                  className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-foreground/20 hover:border-[var(--chart-3)]/50 text-foreground font-semibold rounded-lg transition-all duration-300"
                >
                  {data.secondaryCTA.text}
                </Link>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
