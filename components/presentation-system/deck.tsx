'use client';

import { useEffect, useRef, useState, ReactNode } from 'react';

interface DeckProps {
  children: ReactNode;
  totalSlides: number;
}

export function Deck({ children, totalSlides }: DeckProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.min(prev + 1, totalSlides));
      } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
        e.preventDefault();
        setCurrentSlide((prev) => Math.max(prev - 1, 1));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [totalSlides]);

  useEffect(() => {
    const slides = containerRef.current?.querySelectorAll('.slide-snap');
    if (slides && slides[currentSlide - 1]) {
      slides[currentSlide - 1].scrollIntoView({ behavior: 'smooth' });
    }
  }, [currentSlide]);

  return (
    <div
      ref={containerRef}
      className="scroll-container h-screen w-full bg-gradient-to-b from-white via-white to-slate-50"
    >
      {children}

      {/* Progress Indicator */}
      <div className="fixed top-8 right-12 text-sm font-semibold text-gray-500 pointer-events-none">
        {currentSlide} / {totalSlides}
      </div>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 h-1.5 bg-gradient-to-r from-purple-600 via-purple-500 to-orange-500 transition-all duration-300 pointer-events-none shadow-lg"
        style={{ width: `${(currentSlide / totalSlides) * 100}%` }}
      />
    </div>
  );
}
