'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { AboutCTAData } from '@/lib/types';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface AboutCTAProps {
  data: AboutCTAData;
}

export default function AboutCTA({ data }: AboutCTAProps) {
  return (
    <section className="bg-background py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--chart-3)]/5 via-transparent to-transparent" />
      
      <div className="relative max-w-4xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {data.heading}
            </h2>
            <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              {data.subheading}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href={data.primaryCTA.href}
                className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--chart-3)] hover:bg-[var(--chart-3)]/90 text-background font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-[var(--chart-3)]/30"
              >
                {data.primaryCTA.text}
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>

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
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </motion.div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
