'use client';

import { useEffect, useState } from 'react';
import { AnimatedBackground } from './animations/animated-background';
import { ProgressBar } from './animations/progress-bar';

interface Slide {
  id: number;
  component: React.ComponentType;
  title: string;
}

interface PresentationContainerProps {
  slides: Slide[];
  currentSlide: number;
  setCurrentSlide: (slide: number) => void;
  isFullscreen: boolean;
}

export default function PresentationContainer({
  slides,
  currentSlide,
  setCurrentSlide,
  isFullscreen,
}: PresentationContainerProps) {
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [prevSlide, setPrevSlide] = useState(currentSlide);

  useEffect(() => {
    if (currentSlide > prevSlide) {
      setDirection('right');
    } else if (currentSlide < prevSlide) {
      setDirection('left');
    }
    setPrevSlide(currentSlide);
  }, [currentSlide, prevSlide]);

  const CurrentSlide = slides[currentSlide].component;

  const getTransform = () => {
    if (direction === 'right') {
      return 'opacity-100 scale-100 translate-x-0';
    }
    return 'opacity-100 scale-100 translate-x-0';
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatedBackground />

      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="50"
              height="50"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="url(#gridGradient)"
                strokeWidth="0.5"
              />
            </pattern>
            <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00ff88" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#0088ff" stopOpacity="0.5" />
            </linearGradient>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Slide Content with Zoom Transition */}
      <div
        className={`absolute inset-0 transition-all duration-700 ease-out ${getTransform()}`}
        style={{
          animation: `zoomTransition 0.7s ease-out`,
        }}
      >
        <CurrentSlide />
      </div>

      {/* Progress Bar */}
      <ProgressBar current={currentSlide} total={slides.length} />

      {/* Keyboard Instructions */}
      <div className="fixed bottom-24 left-8 text-xs text-gray-400 font-mono opacity-60 pointer-events-none">
        <div>F: Fullscreen</div>
        <div>← →: Navigate</div>
        <div>A: Autoplay</div>
      </div>

      <style>{`
        @keyframes zoomTransition {
          from {
            opacity: 0;
            scale: 0.95;
          }
          to {
            opacity: 1;
            scale: 1;
          }
        }
      `}</style>
    </div>
  );
}
