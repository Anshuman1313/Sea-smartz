'use client';

import { motion } from 'framer-motion';
import { AboutTeamData } from '@/lib/types';
import { Users, Globe, Briefcase } from 'lucide-react';

interface AboutTeamProps {
  data: AboutTeamData;
}

export default function AboutTeam({ data }: AboutTeamProps) {
  return (
    <section className="bg-background py-16 md:py-24">
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

        {/* Team Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-8"
        >
          {data.description && (
            <p className="text-base md:text-lg text-foreground/70 leading-relaxed text-center max-w-3xl mx-auto">
              {data.description}
            </p>
          )}

          {/* Team Visual */}
          <div className="relative p-12 md:p-16 bg-card rounded-2xl border border-border">
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-br from-[var(--chart-3)]/5 to-transparent rounded-2xl"
            />
            
            <div className="relative flex flex-col items-center justify-center space-y-6">
              <div className="w-24 h-24 bg-[var(--chart-3)]/20 rounded-full flex items-center justify-center border-2 border-[var(--chart-3)]/40">
                <Users className="w-12 h-12 text-[var(--chart-3)]" />
              </div>
              
              <div className="text-center space-y-3">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  {data.teamSize}
                </h3>
                <p className="text-base text-foreground/60">
                  Passionate developers, designers, and strategists
                </p>
              </div>

              {/* Additional Stats */}
              <div className="grid grid-cols-2 gap-8 pt-6">
                <div className="text-center">
                  <Globe className="w-8 h-8 text-[var(--chart-3)] mx-auto mb-2" />
                  <div className="text-lg font-semibold text-foreground">Remote-First</div>
                  <div className="text-sm text-foreground/60">Global Talent</div>
                </div>
                <div className="text-center">
                  <Briefcase className="w-8 h-8 text-[var(--chart-3)] mx-auto mb-2" />
                  <div className="text-lg font-semibold text-foreground">Expert Team</div>
                  <div className="text-sm text-foreground/60">10+ Years Avg Experience</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
