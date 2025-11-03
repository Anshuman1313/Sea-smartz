'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { IndustryHeroData } from '@/lib/types';
import { ArrowRight } from 'lucide-react';
import GradientText from '../framermotion/GradientText';

interface IndustryHeroProps {
  data: IndustryHeroData;
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
    <div className="absolute inset-0 opacity-50">
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

export default function IndustryHero({ data }: IndustryHeroProps) {
  const backgroundType = data.backgroundType || 'gradient';
  
  return (
    <section className="relative bg-background py-16 md:py-22 overflow-hidden">
      {BackgroundStyles[backgroundType]}
      
      <div className="relative max-w-5xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-5"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            {data.title}
          </h1>

         <GradientText className='text-3xl md:text-4xl py-2 md:font-semibold' leftColor='#fb923c' midColor='white' rightColor='#fb923c'>

       
            {data.tagline}
        </GradientText>

          <p className="text-base md:text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed">
            {data.description}
          </p>

          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
            {data.badges.map((badge, index) => (
              <span
                key={index}
                className="px-3 py-1.5 rounded-full bg-[var(--chart-3)]/10 border border-[var(--chart-3)]/30 text-[var(--chart-3)] text-sm font-medium"
              >
                {badge}
              </span>
            ))}
          </div>

          <div className="pt-2">
            <Link
              href={data.ctaHref}
              className="inline-flex items-center gap-2 px-7 py-3 bg-[var(--chart-3)] hover:bg-[var(--chart-3)]/90 text-background font-semibold rounded-2xl transition-all duration-300 hover:scale-105 shadow-lg shadow-[var(--chart-3)]/20"
            >
              {data.ctaText}
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
