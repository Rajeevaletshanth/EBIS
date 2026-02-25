'use client';

import { GlassmorphismCard } from '../glassmorphism-card';
import { ArchitectureDiagram } from '../animations/architecture-diagram';

export default function Slide1() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center p-12 overflow-hidden">
      {/* Title Section */}
      <div className="text-center mb-12 animate-fadeInDown">
        <h1 className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-4">
          Enterprise Architecture
        </h1>
        <p className="text-2xl text-cyan-300/80">
          Hatton National Bank Digital Transformation
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-5xl">
        <GlassmorphismCard animated>
          <ArchitectureDiagram />
        </GlassmorphismCard>
      </div>

      {/* Key Highlights */}
      <div className="grid grid-cols-3 gap-6 mt-12 w-full max-w-4xl">
        {[
          {
            icon: '🏦',
            title: 'Core Banking',
            desc: 'Temenos T24',
          },
          {
            icon: '👥',
            title: 'Customer Insights',
            desc: 'Salesforce FSC',
          },
          {
            icon: '⚙️',
            title: 'Business Operations',
            desc: 'SAP S/4HANA',
          },
        ].map((item, i) => (
          <GlassmorphismCard key={i} hover>
            <div className="text-center">
              <div className="text-4xl mb-2">{item.icon}</div>
              <h3 className="text-cyan-300 font-semibold mb-1">{item.title}</h3>
              <p className="text-white/60 text-sm">{item.desc}</p>
            </div>
          </GlassmorphismCard>
        ))}
      </div>

      <style>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
