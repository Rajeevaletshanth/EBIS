'use client';

import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

interface PresentationControlsProps {
  currentSlide: number;
  totalSlides: number;
  isAutoplay: boolean;
  setIsAutoplay: (value: boolean) => void;
  onNext: () => void;
  onPrev: () => void;
  setCurrentSlide: (slide: number) => void;
}

export default function PresentationControls({
  currentSlide,
  totalSlides,
  isAutoplay,
  setIsAutoplay,
  onNext,
  onPrev,
  setCurrentSlide,
}: PresentationControlsProps) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-4 z-40">
      {/* Glassmorphism Container */}
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-8 py-4 shadow-2xl hover:bg-white/15 transition-all duration-300">
        {/* Navigation Buttons */}
        <div className="flex items-center gap-6">
          {/* Previous Button */}
          <button
            onClick={onPrev}
            className="group p-2 rounded-full hover:bg-white/20 transition-all duration-300 text-cyan-400 hover:text-cyan-300"
            title="Previous slide (← arrow)"
          >
            <ChevronLeft className="w-5 h-5 transition-transform group-hover:scale-125" />
          </button>

          {/* Slide Counter */}
          <div className="flex items-center gap-2 px-4 border-l border-r border-white/20">
            <span className="text-white font-semibold text-sm">{currentSlide + 1}</span>
            <span className="text-white/50 text-sm">/</span>
            <span className="text-white/70 text-sm">{totalSlides}</span>
          </div>

          {/* Next Button */}
          <button
            onClick={onNext}
            className="group p-2 rounded-full hover:bg-white/20 transition-all duration-300 text-cyan-400 hover:text-cyan-300"
            title="Next slide (→ arrow)"
          >
            <ChevronRight className="w-5 h-5 transition-transform group-hover:scale-125" />
          </button>

          {/* Autoplay Toggle */}
          <button
            onClick={() => setIsAutoplay(!isAutoplay)}
            className={`group p-2 rounded-full transition-all duration-300 ${
              isAutoplay
                ? 'bg-cyan-500/30 text-cyan-400 hover:bg-cyan-500/50'
                : 'text-white/60 hover:bg-white/20 hover:text-cyan-400'
            }`}
            title="Autoplay (press 'a')"
          >
            {isAutoplay ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Slide Indicator Dots */}
      <div className="flex gap-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-4 py-4 shadow-2xl">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentSlide
                ? 'w-3 h-3 bg-cyan-400 shadow-lg shadow-cyan-400/50'
                : 'w-2 h-2 bg-white/40 hover:bg-white/60'
            }`}
            title={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
