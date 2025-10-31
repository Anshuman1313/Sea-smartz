'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TechHeroData } from '@/lib/types';
import { ArrowRight } from 'lucide-react';

interface TechHeroProps {
  data: TechHeroData;
}

// Background style components
const BackgroundStyles = {
  gradient: (
    <div className="absolute inset-0 bg-gradient-to-br from-[var(--chart-3)]/10 via-transparent to-[var(--chart-3)]/5" />
  ),
  dots: (
    <div 
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: 'radial-gradient(circle, var(--chart-3) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}
    />
  ),
  grid: (
    <div 
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: 'linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}
    />
  ),
  radial: (
    <div className="absolute inset-0">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--chart-3)]/10 rounded-full blur-3xl" />
    </div>
  ),
  mesh: (
    <div className="absolute inset-0 opacity-30">
      <svg width="100%" height="100%">
        <defs>
          <pattern id="mesh" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M0 30 L30 0 L60 30 L30 60 Z" fill="none" stroke="var(--chart-3)" strokeWidth="0.5" opacity="0.3"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mesh)" />
      </svg>
    </div>
  ),
};

export default function TechHero({ data }: TechHeroProps) {
  const backgroundType = data.backgroundType || 'gradient';
  
  return (
    <section className="relative bg-background py-20 md:py-28 overflow-hidden">
      {/* Dynamic Background */}
      {BackgroundStyles[backgroundType]}
      
      <div className="relative max-w-5xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-center space-y-6"
        >
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            {data.title}
          </h1>

          {/* Tagline */}
          <p className="text-lg md:text-xl lg:text-2xl text-foreground/40 max-w-3xl mx-auto">
            {data.tagline}
          </p>

          {/* Description */}
          <p className="text-base md:text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            {data.description}
          </p>

          {/* Badges */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 md:gap-3"
          >
            {data.badges.map((badge, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-[var(--chart-3)]/10 border border-[var(--chart-3)]/30 text-[var(--chart-3)] text-sm md:text-base font-medium"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="pt-2"
          >
            <Link
              href={data.ctaHref}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[var(--chart-3)] hover:bg-[var(--chart-3)]/90 text-background font-semibold rounded-lg transition-all duration-300 hover:scale-105 shadow-lg shadow-[var(--chart-3)]/20"
            >
              {data.ctaText}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
