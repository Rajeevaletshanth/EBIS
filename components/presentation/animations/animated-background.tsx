'use client';

export function AnimatedBackground() {
  return (
    <>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-900/20 to-slate-950" />

      {/* Animated Gradient Layers */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Gradient Animation */}
        <div
          className="absolute -inset-96 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-3xl"
          style={{
            animation: 'gradientFlow 15s ease-in-out infinite',
            transformOrigin: 'center',
          }}
        />

        {/* Secondary Gradient Animation */}
        <div
          className="absolute -inset-96 bg-gradient-to-l from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-3xl"
          style={{
            animation: 'gradientFlow 20s ease-in-out infinite reverse',
            transformOrigin: 'center',
          }}
        />

        {/* Tertiary Pulsing Gradient */}
        <div
          className="absolute top-1/2 left-1/2 w-full h-full bg-gradient-to-br from-emerald-500/10 to-blue-500/10 blur-3xl"
          style={{
            animation: 'glow 8s ease-in-out infinite',
            transformOrigin: '50% 50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      </div>

      {/* Animated Light Orbs */}
      <div className="absolute inset-0">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{
            animation: 'float1 20s ease-in-out infinite',
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{
            animation: 'float2 25s ease-in-out infinite',
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
          style={{
            animation: 'float3 22s ease-in-out infinite',
          }}
        />
      </div>

      <style>{`
        @keyframes gradientFlow {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          50% {
            transform: translate(50px, 50px) scale(1.1);
          }
        }

        @keyframes glow {
          0%, 100% {
            opacity: 0.3;
            filter: blur(3rem);
          }
          50% {
            opacity: 0.5;
            filter: blur(2rem);
          }
        }

        @keyframes float1 {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(30px, -30px);
          }
          50% {
            transform: translate(0, -60px);
          }
          75% {
            transform: translate(-30px, -30px);
          }
        }

        @keyframes float2 {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(-40px, 40px);
          }
          50% {
            transform: translate(0, 60px);
          }
          75% {
            transform: translate(40px, 40px);
          }
        }

        @keyframes float3 {
          0%, 100% {
            transform: translate(0, 0);
          }
          33% {
            transform: translate(50px, -50px);
          }
          66% {
            transform: translate(-30px, 50px);
          }
        }
      `}</style>
    </>
  );
}
