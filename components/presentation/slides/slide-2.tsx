'use client';

import { GlassmorphismCard } from '../glassmorphism-card';

export default function Slide2() {
  const drivers = [
    {
      icon: '⚡',
      title: 'Competitive Pressure',
      desc: 'Fintech & digital banks taking market share',
      color: 'from-orange-400 to-red-400',
    },
    {
      icon: '📋',
      title: 'Regulatory Compliance',
      desc: 'CBSL cybersecurity & data localization requirements',
      color: 'from-blue-400 to-cyan-400',
    },
    {
      icon: '😊',
      title: 'Customer Expectations',
      desc: 'Fast loan approvals, personalized recommendations',
      color: 'from-emerald-400 to-green-400',
    },
    {
      icon: '💰',
      title: 'Cost Reduction',
      desc: 'RPA, automation, and operational efficiency',
      color: 'from-yellow-400 to-orange-400',
    },
    {
      icon: '📊',
      title: 'Data Monetization',
      desc: 'AI-driven insights and new revenue streams',
      color: 'from-purple-400 to-pink-400',
    },
    {
      icon: '🎯',
      title: 'Operational Efficiency',
      desc: 'Real-time processing and integrated workflows',
      color: 'from-cyan-400 to-blue-400',
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col p-12 overflow-hidden">
      {/* Title */}
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-12">
        Key Business Drivers for Digital Transformation
      </h1>

      {/* Grid of Drivers */}
      <div className="grid grid-cols-3 gap-6 flex-1 overflow-y-auto">
        {drivers.map((driver, index) => (
          <GlassmorphismCard
            key={index}
            hover
            className="animate-fadeInUp"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div className="text-center">
              <div className="text-5xl mb-4 transform transition-transform hover:scale-110">
                {driver.icon}
              </div>
              <h3 className={`text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r ${driver.color} mb-2`}>
                {driver.title}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {driver.desc}
              </p>
            </div>
          </GlassmorphismCard>
        ))}
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
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
