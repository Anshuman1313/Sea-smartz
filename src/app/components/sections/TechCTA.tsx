'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TechCTAData } from '@/lib/types';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface TechCTAProps {
  data: TechCTAData;
}

export default function TechCTA({ data }: TechCTAProps) {
  return (
    <section className="bg-background py-32 md:py-40 lg:py-48 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--chart-3)]/5 via-transparent to-transparent" />
      
      <div className="relative max-w-5xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-12"
        >
          {/* Heading & Subheading */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              {data.heading}
            </h2>
            <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
              {data.subheading}
            </p>
          </div>

          {/* Stats */}
          {data.stats && data.stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 py-8"
            >
              {data.stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-6 bg-card rounded-xl border border-border"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[var(--chart-3)] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm md:text-base text-foreground/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            {/* Primary CTA */}
            <Link
              href={data.primaryCTA.href}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--chart-3)] hover:bg-[var(--chart-3)]/90 text-background font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[var(--chart-3)]/20"
            >
              {data.primaryCTA.text}
              <ArrowRight className="w-5 h-5" />
            </Link>

            {/* Secondary CTA */}
            {data.secondaryCTA && (
              <Link
                href={data.secondaryCTA.href}
                className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-foreground/20 hover:border-[var(--chart-3)]/50 text-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                {data.secondaryCTA.text}
                <ExternalLink className="w-5 h-5" />
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
