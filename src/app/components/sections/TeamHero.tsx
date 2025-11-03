'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { TeamHeroData } from '@/lib/types';
import { ArrowRight } from 'lucide-react';
import GradientText from '../framermotion/GradientText';

interface TeamHeroProps {
  data: TeamHeroData;
}

const BackgroundStyles = {
  gradient: (
    <div className="absolute inset-0 bg-gradient-to-br from-[var(--chart-3)]/10 via-transparent to-[var(--chart-3)]/5" />
  ),
  dots: (
    <div 
      className="absolute inset-0 opacity-50"
      style={{
        backgroundImage: 'radial-gradient(circle, var(--chart-3) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}
    />
  ),
  grid: (
    <div 
      className="absolute inset-0 opacity-50"
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
    <div className="absolute inset-0 opacity-60">
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

export default function TeamHero({ data }: TeamHeroProps) {
  const backgroundType = data.backgroundType || 'gradient';
  
  return (
    <section className="relative bg-background py-24 md:py-32 overflow-hidden">
      {/* Dynamic Background */}
      {BackgroundStyles[backgroundType]}
      
      <div className="relative max-w-4xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="text-center space-y-6"
        >
          {/* Title with slide up animation */}
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground"
          >
            {data.title}
          </motion.h1>

          {/* Tagline with fade in */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl lg:text-2xl text-[var(--chart-3)] font-medium"
          >
              <GradientText className='text-3xl md:text-4xl py-2 md:font-semibold' leftColor='#fb923c' midColor='white' rightColor='#fb923c'>

       
            {data.tagline}
        </GradientText>
          </motion.div>

          {/* Description with slide up */}
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base md:text-lg text-foreground/70 max-w-2xl mx-auto leading-relaxed"
          >
            {data.description}
          </motion.p>

          {/* CTA Button with bounce */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.6, 
              delay: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="pt-4"
          >
            <Link
              href={data.ctaHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-[var(--chart-3)] hover:bg-[var(--chart-3)]/90 text-background font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg shadow-[var(--chart-3)]/20"
            >
              {data.ctaText}
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
        </motion.div>
      </div>
    </section>
  );
}
