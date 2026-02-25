'use client';

import { GlassmorphismCard } from '../glassmorphism-card';

export default function Slide5() {
  const benefits = [
    {
      title: 'Enhanced Security',
      description: 'Zero Trust framework with MFA and encryption',
      icon: '🔐',
    },
    {
      title: 'Operational Efficiency',
      description: '50%+ reduction in manual processing time',
      icon: '⚡',
    },
    {
      title: 'Customer Experience',
      description: 'Real-time loan approvals and 360° insights',
      icon: '😊',
    },
    {
      title: 'Data-Driven Decisions',
      description: 'AI/ML analytics for risk and fraud detection',
      icon: '📊',
    },
    {
      title: 'Regulatory Resilience',
      description: 'Automated compliance reporting and audit trails',
      icon: '📋',
    },
    {
      title: 'Future-Ready',
      description: 'Scalable platform for innovation and growth',
      icon: '🚀',
    },
  ];

  return (
    <div className="relative w-full h-full flex flex-col p-12 overflow-hidden">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-4">
          Security, Benefits & Conclusion
        </h1>
        <p className="text-xl text-white/70">
          Transforming HNB into a cohesive, data-driven enterprise
        </p>
      </div>

      {/* Security Pillars */}
      <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-xl border border-red-500/30 rounded-lg p-8 mb-10">
        <h2 className="text-2xl font-bold text-red-400 mb-6">🔒 Information Security Framework</h2>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Technical Controls</h3>
            <ul className="space-y-2 text-white/80">
              <li>✓ Multi-Factor Authentication (MFA)</li>
              <li>✓ Role-Based Access Control (RBAC)</li>
              <li>✓ End-to-End Encryption</li>
              <li>✓ SIEM & Threat Detection</li>
            </ul>
          </div>
          <div>
            <h3 className="text-cyan-400 font-semibold mb-4">Managerial Controls</h3>
            <ul className="space-y-2 text-white/80">
              <li>✓ Security governance policies</li>
              <li>✓ Regular audits & assessments</li>
              <li>✓ Incident response procedures</li>
              <li>✓ Data protection compliance</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <h2 className="text-2xl font-bold text-emerald-400 mb-6">Benefits & Outcomes</h2>
      <div className="grid grid-cols-3 gap-6 mb-10">
        {benefits.map((benefit, index) => (
          <GlassmorphismCard
            key={index}
            hover
            className="animate-fadeInUp"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <div className="text-center space-y-3">
              <div className="text-4xl">{benefit.icon}</div>
              <h3 className="text-cyan-300 font-bold">{benefit.title}</h3>
              <p className="text-white/70 text-sm">{benefit.description}</p>
            </div>
          </GlassmorphismCard>
        ))}
      </div>

      {/* Conclusion */}
      <GlassmorphismCard className="bg-gradient-to-r from-purple-500/20 to-pink-500/20">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-purple-400">🎯 The Path Forward</h2>
          <p className="text-white/80 text-lg leading-relaxed">
            By integrating Core Banking, CRM, ERP, analytics, infrastructure, and security 
            into a unified architecture, HNB will achieve operational excellence, superior 
            customer experience, and regulatory leadership.
          </p>
          <p className="text-cyan-400 font-semibold text-lg pt-4">
            Transform Data into Digital Competitive Advantage
          </p>
        </div>
      </GlassmorphismCard>

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
