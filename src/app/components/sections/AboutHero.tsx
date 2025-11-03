'use client';

import { motion } from 'framer-motion';
import { AboutHeroData } from '@/lib/types';

interface AboutHeroProps {
  data: AboutHeroData;
}

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

export default function AboutHero({ data }: AboutHeroProps) {
  const backgroundType = data.backgroundType || 'gradient';
  
  return (
    <div className="relative bg-background py-20 md:py-32 overflow-hidden">
      {BackgroundStyles[backgroundType]}
      
      <div className="relative max-w-5xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-6"
        >
          {/* Title */}
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
          >
            {data.title}
          </motion.h1>

          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-[var(--chart-3)] font-medium"
          >
            {data.tagline}
          </motion.p>

          {/* Description */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base md:text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed"
          >
            {data.description}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-8"
          >
            {data.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                className="p-6 bg-card rounded-xl border border-border"
              >
                <div className="text-3xl md:text-4xl font-bold text-[var(--chart-3)] mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/60">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
