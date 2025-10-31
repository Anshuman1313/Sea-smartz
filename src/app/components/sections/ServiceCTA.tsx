'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ServiceCTAData } from '@/lib/types';
import { ArrowRight, ExternalLink } from 'lucide-react';

interface ServiceCTAProps {
  data: ServiceCTAData;
}

export default function ServiceCTA({ data }: ServiceCTAProps) {
  return (
    <section className="bg-background py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--chart-3)]/5 via-transparent to-transparent" />
      
      <div className="relative max-w-5xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-10"
        >
          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              {data.heading}
            </h2>
            <p className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed">
              {data.subheading}
            </p>
          </div>

          {/* Stats */}
          {data.stats && data.stats.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6"
            >
              {data.stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-5 bg-card rounded-xl border border-border"
                >
                  <div className="text-3xl md:text-4xl font-bold text-[var(--chart-3)] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <Link
              href={data.primaryCTA.href}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--chart-3)] hover:bg-[var(--chart-3)]/90 text-background font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[var(--chart-3)]/20"
            >
              {data.primaryCTA.text}
              <ArrowRight className="w-5 h-5" />
            </Link>

            {data.secondaryCTA && (
              <Link
                href={data.secondaryCTA.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-transparent border-2 border-foreground/20 hover:border-[var(--chart-3)]/50 text-foreground font-semibold rounded-lg transition-all duration-300 hover:scale-105"
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
