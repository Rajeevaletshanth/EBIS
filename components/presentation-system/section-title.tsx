'use client';

import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  delay?: number;
}

export function SectionTitle({ title, subtitle, delay = 0 }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="mb-12 relative"
    >
      <div className="flex items-start gap-4">
        <div className="w-1 h-16 bg-gradient-to-b from-purple-600 to-orange-500 rounded-full flex-shrink-0 mt-2" />
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 leading-tight text-balance">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}
