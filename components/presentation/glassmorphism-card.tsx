'use client';

import { ReactNode } from 'react';

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  animated?: boolean;
}

export function GlassmorphismCard({
  children,
  className = '',
  hover = true,
  animated = false,
}: GlassmorphismCardProps) {
  return (
    <div
      className={`backdrop-blur-xl bg-white/10 border border-white/20 rounded-lg p-6 shadow-2xl transition-all duration-500 ${
        hover ? 'hover:bg-white/15 hover:border-white/30 hover:shadow-2xl' : ''
      } ${animated ? 'animate-fadeInUp' : ''} ${className}`}
      style={{
        background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
      }}
    >
      {children}
    </div>
  );
}
