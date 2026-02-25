'use client';

import { GlassmorphismCard } from '../glassmorphism-card';

export default function Slide3() {
  const problems = [
    {
      problem: 'Manual Data Entry',
      solution: 'Single integrated data flows',
      impact: '5-day account closing process',
    },
    {
      problem: 'Siloed Systems',
      solution: 'Unified CRM & relationship views',
      impact: 'Multiple system lookups per inquiry',
    },
    {
      problem: 'Weekly Payroll Errors',
      solution: 'Automated leave integration',
      impact: 'Regular employee dissatisfaction',
    },
    {
      problem: 'Fragmented Reporting',
      solution: 'Real-time compliance dashboards',
      impact: '3-day manual compilation',
    },
    {
      problem: 'No Risk Response',
      solution: 'Automated fraud workflows',
      impact: 'Manual system updates required',
    },
    {
      problem: 'Slow Loan Approvals',
      solution: 'Straight-through processing',
      impact: 'Competitive disadvantage',
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col p-12 overflow-hidden">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-8">
        The Problem of Siloed Systems
      </h1>

      <p className="text-white/70 text-lg mb-8 max-w-3xl">
        Current fragmented architecture creates operational inefficiencies, data inconsistencies, and competitive vulnerabilities. An integrated architecture solves these challenges.
      </p>

      {/* Problem-Solution Grid */}
      <div className="grid grid-cols-2 gap-6 flex-1 overflow-y-auto">
        {problems.map((item, index) => (
          <GlassmorphismCard
            key={index}
            hover
            className="animate-fadeInLeft"
            style={{
              animationDelay: `${index * 0.08}s`,
            }}
          >
            <div className="space-y-4">
              {/* Problem */}
              <div>
                <p className="text-red-400 text-xs font-semibold uppercase mb-1">Problem</p>
                <p className="text-white/90 font-semibold">{item.problem}</p>
              </div>

              {/* Solution */}
              <div>
                <p className="text-emerald-400 text-xs font-semibold uppercase mb-1">Solution</p>
                <p className="text-white/90 font-semibold">{item.solution}</p>
              </div>

              {/* Impact */}
              <div>
                <p className="text-yellow-400 text-xs font-semibold uppercase mb-1">Impact</p>
                <p className="text-white/70 text-sm">{item.impact}</p>
              </div>
            </div>
          </GlassmorphismCard>
        ))}
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
