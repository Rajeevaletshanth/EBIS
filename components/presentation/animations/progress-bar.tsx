'use client';

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="fixed bottom-0 left-0 right-0 h-1.5 bg-slate-900/50 backdrop-blur-sm border-t border-cyan-500/20">
      <div
        className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transition-all duration-500 ease-out"
        style={{
          width: `${progress}%`,
          boxShadow:
            'glow 0 0 20px rgba(0, 188, 212, 0.8), 0 0 40px rgba(59, 130, 246, 0.6)',
        }}
      >
        <div
          className="h-full animate-pulse"
          style={{
            background:
              'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
            animation: 'shimmer 2s infinite',
          }}
        />
      </div>

      {/* Animated Glow Effect */}
      <div
        className="absolute top-0 left-0 h-full w-2 bg-cyan-400 blur-lg opacity-50"
        style={{
          width: `${progress}%`,
          transition: 'width 0.5s ease-out',
          filter: 'blur(8px)',
        }}
      />

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
}
