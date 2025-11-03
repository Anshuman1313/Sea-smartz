'use client';

import { motion } from 'framer-motion';
import { AboutStoryData } from '@/lib/types';

interface AboutStoryProps {
  data: AboutStoryData;
}

export default function AboutStory({ data }: AboutStoryProps) {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-8">
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

        {/* Story Content */}
        <div className="space-y-6">
          {data.story.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-base md:text-lg text-foreground/70 leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
