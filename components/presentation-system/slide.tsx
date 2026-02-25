'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SlideProps {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
}

export function Slide({ children, className = '', contentClassName = '' }: SlideProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.5 }}
      className={`slide-snap h-screen w-full flex items-center justify-center relative overflow-hidden ${className}`}
    >
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-100 rounded-full opacity-20 blur-3xl -mr-48 -mt-48" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-orange-100 rounded-full opacity-15 blur-3xl -ml-40 -mb-40" />

      <div className={`w-full max-w-6xl mx-auto px-12 py-24 h-full flex flex-col justify-center relative z-10 ${contentClassName}`}>
        {children}
      </div>
    </motion.section>
  );
}
