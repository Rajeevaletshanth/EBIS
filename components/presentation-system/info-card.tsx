'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface InfoCardProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function InfoCard({ children, delay = 0, className = '' }: InfoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
      className={`border border-gray-200 rounded-2xl p-8 bg-white hover:shadow-lg hover:border-purple-200 transition-all relative group ${className}`}
    >
      {/* Decorative Dots */}
      <div className="absolute -top-2 -right-2 space-y-1">
        <div className="w-3 h-3 bg-orange-500 rounded-full" />
      </div>
      <div className="absolute -bottom-1 -left-1 space-y-1 flex flex-col gap-1">
        <div className="w-2 h-2 bg-purple-300 rounded-full" />
        <div className="w-2 h-2 bg-purple-300 rounded-full" />
        <div className="w-2 h-2 bg-purple-300 rounded-full" />
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}
