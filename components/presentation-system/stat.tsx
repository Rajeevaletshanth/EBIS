'use client';

import { motion } from 'framer-motion';

interface StatProps {
  label: string;
  value: string;
  delay?: number;
}

export function Stat({ label, value, delay = 0 }: StatProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-3">
        {value}
      </div>
      <div className="text-sm text-gray-600 font-medium uppercase tracking-wide">{label}</div>
    </motion.div>
  );
}
