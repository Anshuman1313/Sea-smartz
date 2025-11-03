'use client';

import { motion } from 'framer-motion';
import { IndustryCaseStudiesData } from '@/lib/types';
import { CheckCircle, Building2, AlertCircle, Lightbulb, TrendingUp } from 'lucide-react';

interface IndustryCaseStudyProps {
  data: IndustryCaseStudiesData;
}

export default function IndustryCaseStudy({ data }: IndustryCaseStudyProps) {
  const { caseStudy } = data;

  return (
    <section className="bg-muted/20 py-14 md:py-20">
      <div className="max-w-5xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center space-y-3 mb-10 md:mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            {data.heading}
          </h2>
          {data.subheading && (
            <p className="text-base md:text-lg text-foreground/30 max-w-2xl mx-auto">
              {data.subheading}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl border border-border p-8 md:p-10 space-y-8"
        >
          {/* Client */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[var(--chart-3)]/10 rounded-lg">
              <Building2 className="w-6 h-6 text-[var(--chart-3)]" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground/50 mb-2">CLIENT</h3>
              <p className="text-base md:text-lg text-foreground">{caseStudy.client}</p>
            </div>
          </div>

          {/* Challenge */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[var(--chart-3)]/10 rounded-lg">
              <AlertCircle className="w-6 h-6 text-[var(--chart-3)]" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground/50 mb-2">CHALLENGE</h3>
              <p className="text-base text-foreground/70 leading-relaxed">{caseStudy.challenge}</p>
            </div>
          </div>

          {/* Solution */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[var(--chart-3)]/10 rounded-lg">
              <Lightbulb className="w-6 h-6 text-[var(--chart-3)]" />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-foreground/50 mb-2">SOLUTION</h3>
              <p className="text-base text-foreground/70 leading-relaxed">{caseStudy.solution}</p>
            </div>
          </div>

          {/* Results */}
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[var(--chart-3)]/10 rounded-lg">
              <TrendingUp className="w-6 h-6 text-[var(--chart-3)]" />
            </div>
            <div className="flex-1">
              <h3 className="text-sm font-semibold text-foreground/50 mb-4">RESULTS</h3>
              <ul className="space-y-3">
                {caseStudy.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--chart-3)] flex-shrink-0 mt-0.5" />
                    <span className="text-base text-foreground/70">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
