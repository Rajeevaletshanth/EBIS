'use client';

import { GlassmorphismCard } from '../glassmorphism-card';

export default function Slide4() {
  const infrastructure = [
    {
      title: 'On-Premises Data Center',
      items: ['Colombo (Primary)', 'Kandy (DR)', '115km apart'],
      icon: '🏢',
      specs: [
        'Dual UPS + 72hr diesel backup',
        'Dual fiber ISP redundancy',
        'Biometric access control',
        'Core Banking & ERP hosted',
      ],
      gradient: 'from-red-500/20 to-orange-500/20',
    },
    {
      title: 'Microsoft Azure Cloud',
      items: ['Singapore Data Center', 'Low Latency', 'MAS Certified'],
      icon: '☁️',
      specs: [
        'Mobile & Internet Banking',
        'SAP Analytics Cloud',
        'AI/ML Workloads',
        'Backup & Disaster Recovery',
      ],
      gradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      title: 'Network Architecture',
      items: ['Hybrid Cloud Model', 'Scalable', 'Compliant'],
      icon: '🌐',
      specs: [
        'Zero Trust Security',
        'API Gateway Integration',
        'Auto-scaling capabilities',
        'Real-time synchronization',
      ],
      gradient: 'from-purple-500/20 to-pink-500/20',
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col p-12 overflow-hidden">
      <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-4">
        IT Infrastructure Design
      </h1>

      <p className="text-white/70 text-lg mb-10">
        Hybrid cloud architecture balancing regulatory compliance with scalability
      </p>

      {/* Infrastructure Components */}
      <div className="grid grid-cols-3 gap-8 flex-1">
        {infrastructure.map((component, index) => (
          <div
            key={index}
            className="animate-fadeInUp"
            style={{
              animationDelay: `${index * 0.2}s`,
            }}
          >
            {/* Main Card */}
            <GlassmorphismCard hover className={`bg-gradient-to-br ${component.gradient} h-full`}>
              <div className="space-y-4">
                {/* Header */}
                <div className="text-center pb-4 border-b border-white/20">
                  <div className="text-5xl mb-3">{component.icon}</div>
                  <h2 className="text-cyan-300 font-bold text-lg">
                    {component.title}
                  </h2>
                </div>

                {/* Details */}
                <div className="space-y-3">
                  {component.specs.map((spec, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-emerald-400 mt-1">✓</span>
                      <span className="text-white/80 text-sm">{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassmorphismCard>
          </div>
        ))}
      </div>

      {/* Key Advantages */}
      <div className="mt-12 grid grid-cols-4 gap-4">
        {[
          { label: 'Scalability', icon: '📈', color: 'emerald' },
          { label: 'Security', icon: '🔒', color: 'red' },
          { label: 'Compliance', icon: '✓', color: 'blue' },
          { label: 'Cost Efficiency', icon: '💰', color: 'yellow' },
        ].map((item, i) => (
          <GlassmorphismCard key={i}>
            <div className="text-center">
              <div className="text-3xl mb-2">{item.icon}</div>
              <p className={`text-${item.color}-400 font-semibold`}>{item.label}</p>
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
