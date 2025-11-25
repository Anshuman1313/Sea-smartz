'use client';

import { motion } from 'framer-motion';
import { AboutStoryData } from '@/lib/types';

interface AboutStoryProps {
  data: AboutStoryData;
}

export default function AboutStory({ data }: AboutStoryProps) {
  return (
   <section className="bg-background py-16 md:py-24 relative overflow-hidden">

  {/* 🌈 Ambient subtle moving glow behind content */}
  <motion.div
    initial={{ opacity: 0 }}
    animate={{
      opacity: 0.18,
      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
    }}
    transition={{
      duration: 14,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.15),transparent_70%)] blur-3xl"
  />

  <div className="max-w-4xl mx-auto px-6 md:px-8 relative z-10">

    {/* 🌟 Section Header */}
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(8px)", scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)", scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-center space-y-3 mb-12 md:mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-foreground">
        {data.heading}
      </h2>

      {data.subheading && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-base md:text-lg text-foreground/40 max-w-2xl mx-auto"
        >
          {data.subheading}
        </motion.p>
      )}
    </motion.div>

    {/* 📜 Story Content */}
    <div className="space-y-6">
      {data.story.map((paragraph, index) => (
        <motion.p
          key={index}
          initial={{ opacity: 0, y: 20, filter: "blur(6px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{
            duration: 0.7,
            delay: index * 0.12,
            ease: "easeOut",
          }}
          whileHover={{
            scale: 1.02,
            y: -2,
            transition: { duration: 0.25 },
          }}
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
