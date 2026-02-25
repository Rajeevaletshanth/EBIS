'use client';

import { Deck } from '@/components/presentation-system/deck';
import { Slide } from '@/components/presentation-system/slide';
import { SectionTitle } from '@/components/presentation-system/section-title';
import { BulletList } from '@/components/presentation-system/bullet-list';
import { InfoCard } from '@/components/presentation-system/info-card';
import { Stat } from '@/components/presentation-system/stat';

export default function Presentation() {
  return (
    <Deck totalSlides={15}>
      {/* SLIDE 1: Title Slide */}
      <Slide>
        <div className="space-y-12">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-purple-100 rounded-full mb-4">
              <span className="w-2 h-2 rounded-full bg-purple-600" />
              <span className="text-sm font-semibold text-purple-700">Financial Innovation</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-purple-900 via-purple-700 to-orange-600 bg-clip-text text-transparent leading-tight text-balance">
              Designing an Integrated Digital Enterprise Architecture
            </h1>
            <h2 className="text-2xl text-gray-700 font-semibold text-balance leading-relaxed">
              Strategic Framework for Hatton National Bank
            </h2>
          </div>
          <div className="space-y-3 text-gray-600 pt-8 border-t border-gray-200">
            <p className="text-lg font-medium">MGIT 51133 - Enterprise and Business Information Systems</p>
            <p className="text-base">Group Assignment - Designing an Integrated Digital Enterprise</p>
          </div>
        </div>
      </Slide>

      {/* SLIDE 2: Student Details */}
      <Slide>
        <div className="space-y-8">
          <SectionTitle title="Group 11 - Student Details" />
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-purple-600 bg-gradient-to-r from-purple-50 to-orange-50">
                  <th className="text-left py-5 px-6 font-bold text-purple-900">Student Number</th>
                  <th className="text-left py-5 px-6 font-bold text-purple-900">Name</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 'FGS/MSC/MIT/2025/038', name: 'S.S. Perera' },
                  { id: 'FGS/MSC/MIT/2025/078', name: 'R. Rajeevaletetshanth' },
                  { id: 'FGS/MSC/MIT/2025/083', name: 'N.A.C.J.C. Jayasinghe' },
                  { id: 'FGS/MSC/MIT/2025/084', name: 'W. M. H. A. Wijekoon' },
                ].map((student, index) => (
                  <tr key={index} className="border-b border-gray-200 hover:bg-purple-50 transition-colors">
                    <td className="py-5 px-6 text-gray-700 font-mono text-sm">{student.id}</td>
                    <td className="py-5 px-6 text-gray-900 font-medium">{student.name}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Slide>

      {/* SLIDE 3: Agenda */}
      <Slide>
        <div className="space-y-8">
          <SectionTitle title="Agenda" />
          <BulletList
            items={[
              'Organizational Overview',
              'Role of IT & Business Drivers',
              'Enterprise Systems & Integrations',
              'IT Infrastructure Design (Hybrid Cloud)',
              'Information Systems Security',
              'Electronic Business & Digital Value Creation',
              'Reflection & Integration',
              'Conclusion',
            ]}
            delay={0.08}
          />
        </div>
      </Slide>

      {/* SLIDE 4: Organizational Overview */}
      <Slide>
        <div className="space-y-8">
          <SectionTitle title="Hatton National Bank (HNB) - Overview" />
          <div className="grid grid-cols-3 gap-8 items-start">
            <div className="col-span-1 flex items-center justify-center">
              <img src="/images/hnb_logo.png" alt="HNB logo" className="rounded-2xl shadow-lg w-full max-w-xs h-auto object-contain bg-white p-6" />
            </div>
            <div className="col-span-1 space-y-4">
              <BulletList
                items={[
                  'Est. 1888',
                  '250+ branches',
                  '900+ ATMs',
                  '4M+ customers',
                  'Multi-service',
                ]}
                delay={0.08}
              />
            </div>
            <div className="col-span-1 space-y-3">
              <Stat label="Branches" value="250+" delay={0} />
              <Stat label="ATMs" value="900+" delay={0.1} />
              <Stat label="Customers" value="4M+" delay={0.2} />
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 5: Current Role of IT */}
      <Slide>
        <div className="space-y-8">
          <SectionTitle title="Current Role of IT at HNB" />
          <div className="grid grid-cols-3 gap-6">
            {[
              {
                title: 'Operational',
                items: [
                  'Core transaction processing',
                  'ATM network management',
                  'Branch terminals',
                  'Back-office (partially legacy/manual)',
                ],
              },
              {
                title: 'Management & Decision Support',
                items: [
                  'Heavy manual data extraction',
                  'Excel consolidation',
                  'Delays 3-5 business days for mgmt accounts',
                  'Limited real-time insights',
                ],
              },
              {
                title: 'Customer-Facing',
                items: [
                  'Mobile/internet banking',
                  'ATM services',
                  'Weak back-office integration',
                  'Manual re-entry in some processes',
                ],
              },
            ].map((col, idx) => (
              <InfoCard key={idx} delay={idx * 0.15}>
                <h3 className="font-semibold text-gray-900 mb-4">{col.title}</h3>
                <ul className="space-y-2">
                  {col.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-600 leading-relaxed">
                      - {item}
                    </li>
                  ))}
                </ul>
              </InfoCard>
            ))}
          </div>
        </div>
      </Slide>

      {/* SLIDE 6: Key Business Drivers */}
      <Slide>
        <div className="space-y-8">
          <SectionTitle title="Key Business Drivers for Digital Transformation" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'Competitive pressure from fintechs/digital banks',
              'Regulatory compliance & cybersecurity directions',
              'Customer experience expectations (real-time, 24/7)',
              'Operational efficiency & cost reduction (automation/RPA)',
              'Data monetization & new revenue streams (analytics/AI)',
            ].map((driver, idx) => (
              <InfoCard key={idx} delay={idx * 0.12}>
                <p className="text-gray-700 leading-relaxed">{driver}</p>
              </InfoCard>
            ))}
          </div>
        </div>
      </Slide>

      {/* SLIDE 7: The Problem - Siloed Systems */}
      <Slide>
        <div className="space-y-8">
          <SectionTitle title="Why Siloed Systems Hurt HNB" />
          <ul className="space-y-4 max-w-5xl">
            {[
              'Month-end close takes ~5 days due to manual reconciliation',
              'Relationship managers need multiple systems to answer one client query',
              'Payroll depends on CSV exports; failures create errors and dissatisfaction',
              'Regulatory reporting compiled from many systems -> high restatement risk',
              'Fraud flags not propagated across compliance, access, and notifications',
            ].map((item, index) => (
              <li key={index} className="flex gap-4">
                <span className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0 mt-2.5" />
                <span className="text-gray-700 leading-relaxed text-base md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Slide>

      {/* SLIDE 8: Target Enterprise Architecture */}
      <Slide contentClassName="py-12">
        <div className="space-y-6">
          <SectionTitle title="Proposed Integrated Digital Enterprise Architecture" />
          <div className="space-y-5">
            <div className="grid grid-cols-4 gap-4 items-stretch">
              {[
                {
                  title: 'External Touchpoints',
                  layer: 'Layer 1',
                  color: 'from-blue-600 to-cyan-500',
                  note: 'Unified customer access',
                  items: ['Mobile Banking', 'Internet Banking', 'ATM Network', 'Open Banking API'],
                },
                {
                  title: 'API Gateway & Security',
                  layer: 'Layer 2',
                  color: 'from-indigo-600 to-violet-500',
                  note: 'Identity and threat controls',
                  items: ['OAuth2 + MFA', 'Rate Limiting', 'WAF', 'Audit Logs + SIEM'],
                },
                {
                  title: 'SAP BTP + Core Systems',
                  layer: 'Layer 3',
                  color: 'from-fuchsia-600 to-pink-500',
                  note: 'Process orchestration',
                  items: ['Integration Suite', 'API Management', 'Core Banking (T24)', 'CRM + ERP'],
                },
                {
                  title: 'EDW + MDM + Analytics',
                  layer: 'Layer 4',
                  color: 'from-emerald-600 to-teal-500',
                  note: 'Trusted decision data',
                  items: ['Regulatory Reporting', 'Risk & AML Analytics', 'Customer 360', 'Forecasting & BI'],
                },
              ].map((layer, idx) => (
                <div key={idx} className="relative">
                  <div className={`absolute -inset-px rounded-2xl bg-gradient-to-r ${layer.color} opacity-35`} />
                  <div className="relative rounded-2xl border border-white/70 bg-white/95 p-4 shadow-sm h-full">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-gray-900">{layer.title}</h3>
                      <span className="text-[11px] text-gray-500 uppercase tracking-wide">{layer.layer}</span>
                    </div>
                    <p className="text-xs text-gray-600 mt-2">{layer.note}</p>
                    <ul className="mt-3 space-y-1.5">
                      {layer.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="text-xs text-gray-700 leading-relaxed">- {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-center text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Channel {'->'} Security {'->'} Integration {'->'} Data and Insights
            </div>

            <div className="grid grid-cols-2 gap-4">
              <InfoCard delay={0.2} className="rounded-2xl">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">What This Enables</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>- Straight-through processing for loans and payments</li>
                  <li>- Near real-time compliance and risk visibility</li>
                  <li>- Lower manual reconciliation and reporting effort</li>
                  <li>- Faster partner onboarding via reusable APIs</li>
                </ul>
              </InfoCard>

              <InfoCard delay={0.3} className="rounded-2xl">
                <h3 className="text-sm font-semibold text-gray-900 mb-3">Reference KPIs</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li><span className="font-semibold text-emerald-700">Month-end close:</span> 5 days {'->'} 1-2 days</li>
                  <li><span className="font-semibold text-emerald-700">Report prep:</span> 3 days {'->'} same-day</li>
                  <li><span className="font-semibold text-emerald-700">API onboarding:</span> weeks {'->'} days</li>
                </ul>
              </InfoCard>
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 9: Enterprise Systems */}
      <Slide>
        <div className="space-y-8">
          <SectionTitle title="Enterprise Systems - Roles" />
          <div className="grid grid-cols-3 gap-6 items-start">
            {/* <div className="col-span-1">
              <img src="/images/enterprise-systems.jpg" alt="Enterprise systems" className="rounded-2xl shadow-lg w-full h-80 object-cover" />
            </div> */}
            <div className="col-span-3 grid grid-cols-3 gap-4">
              {[
                {
                  title: 'Core Banking',
                  subtitle: 'Temenos T24',
                  desc: 'System of record for deposits, loans, payments, treasury operations',
                },
                {
                  title: 'CRM',
                  subtitle: 'Salesforce FSC',
                  desc: '360-degree customer view, service history, cross-sell opportunities',
                },
                {
                  title: 'ERP',
                  subtitle: 'SAP S/4HANA',
                  desc: 'Finance, HR, procurement, statutory reporting; reduces manual reconciliation',
                },
              ].map((sys, idx) => (
                <InfoCard key={idx} delay={idx * 0.15}>
                  <h3 className="font-semibold text-gray-900">{sys.title}</h3>
                  <p className="text-xs text-purple-600 font-medium mt-1 mb-3">{sys.subtitle}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{sys.desc}</p>
                </InfoCard>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 10: Data & Analytics Layer */}
      <Slide>
        <div className="space-y-8">
          <SectionTitle title="Enterprise Data Warehouse & Analytics" />
          <div className="grid grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <BulletList
                items={[
                  'Integrate CBS + CRM + ERP into Enterprise Data Warehouse (EDW)',
                  'Real-time dashboards for management and operational decision-making',
                  'ML for fraud detection, credit risk assessment, churn analysis',
                  'Enables data-driven decisions and personalization at scale',
                  'Foundation for advanced analytics and business intelligence',
                ]}
                delay={0.1}
              />
            </div>
            <div>
              <img src="/images/data-analytics.jpg" alt="Data analytics dashboard" className="rounded-2xl shadow-lg w-full h-72 object-cover" />
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 11: Hybrid Cloud Infrastructure */}
      <Slide>
        <div className="space-y-8">
          <SectionTitle title="IT Infrastructure - Hybrid Cloud Strategy" />
          <div className="grid grid-cols-3 gap-6 items-start">
            <img src="/images/cloud-infrastructure.jpg" alt="Cloud infrastructure" className="col-span-1 rounded-2xl shadow-lg w-full h-72 object-cover" />
            <InfoCard delay={0} className="col-span-1">
              <h3 className="font-semibold text-gray-900 mb-4">On-Premises</h3>
              <BulletList
                items={[
                  'Core Banking + ERP',
                  'Ultra-low latency',
                  'Primary + DR',
                  'Data localization',
                ]}
                delay={0.08}
              />
            </InfoCard>
            <InfoCard delay={0.15} className="col-span-1">
              <h3 className="font-semibold text-gray-900 mb-4">Public Cloud</h3>
              <BulletList
                items={[
                  'Digital channels',
                  'Containers/AKS',
                  'Analytics/AI',
                  'Scalability',
                ]}
                delay={0.08}
              />
            </InfoCard>
          </div>
        </div>
      </Slide>

      {/* SLIDE 12: Infrastructure Justification */}
      <Slide>
        <div className="space-y-8">
          <SectionTitle title="Infrastructure Justification" />
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody>
                {[
                  { criterion: 'Scalability', justification: 'Cloud auto-scaling for peak periods' },
                  { criterion: 'Cost', justification: 'Pay-as-you-use for non-critical workloads' },
                  { criterion: 'Reliability', justification: 'Redundancy across DCs + cloud' },
                  { criterion: 'Compliance', justification: 'Regulated data on-prem; cloud for suitable workloads' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-[#E5E7EB] hover:bg-gray-50">
                    <td className="py-4 px-4 font-semibold text-gray-900 w-1/4">{row.criterion}</td>
                    <td className="py-4 px-4 text-gray-700">{row.justification}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Slide>

      {/* SLIDE 13: Security Framework */}
      <Slide>
        <div className="space-y-8">
          <SectionTitle title="Information Systems Security - Zero Trust Controls" />
          <div className="grid grid-cols-6 gap-4">
            <img src="/images/cybersecurity.jpg" alt="Cybersecurity" className="col-span-2 rounded-2xl shadow-lg w-full h-72 object-cover" />
            <div className="col-span-4 grid grid-cols-2 gap-4">
              {[
                { label: 'Identity & Access', items: ['MFA', 'RBAC', 'SSO federation'] },
                { label: 'Privileged Access', items: ['JIT access', 'Session logging', 'PAM'] },
                { label: 'Encryption', items: ['At-rest', 'In-transit', 'Standards'] },
                { label: 'Network Security', items: ['Segmentation', 'WAF', 'Isolation'] },
              ].map((control, idx) => (
                <InfoCard key={idx} delay={idx * 0.1}>
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">{control.label}</h4>
                  <ul className="space-y-1">
                    {control.items.map((item, i) => (
                      <li key={i} className="text-xs text-gray-600">- {item}</li>
                    ))}
                  </ul>
                </InfoCard>
              ))}
            </div>
          </div>
        </div>
      </Slide>

      {/* SLIDE 14: E-Business & Digital Value Creation */}
      <Slide>
        <div className="space-y-8">
          <SectionTitle title="Electronic Business & Digital Value Creation" />
          <div className="grid grid-cols-3 gap-6 items-start">
            <div className="col-span-1">
              <img src="/images/digital-banking.jpg" alt="Digital banking" className="rounded-2xl shadow-lg w-full h-72 object-cover" />
            </div>
            <InfoCard delay={0} className="col-span-1">
              <h3 className="font-semibold text-gray-900 mb-4 text-base">Digital Experience</h3>
              <BulletList
                items={[
                  'Mobile banking insights',
                  'AI chatbot 24/7',
                  'Personalized recommendations',
                  'Omnichannel experience',
                ]}
                delay={0.08}
              />
            </InfoCard>
            <InfoCard delay={0.15} className="col-span-1">
              <h3 className="font-semibold text-gray-900 mb-4 text-base">New Products</h3>
              <BulletList
                items={[
                  'Open banking APIs',
                  'SME digital solutions',
                  'Data-as-a-service',
                  'Fintech partnerships',
                ]}
                delay={0.08}
              />
            </InfoCard>
          </div>
        </div>
      </Slide>

      {/* SLIDE 15: Conclusion */}
      <Slide>
        <div className="space-y-12">
          <SectionTitle title="Conclusion - Integrated, Secure, Scalable Digital Enterprise" />
          <BulletList
            items={[
              'Business drivers -> systems -> infrastructure -> security -> e-business',
              'Integration avoids duplication, delays, and risk',
              'Enables operational efficiency, compliance resilience, and innovation',
              'Transforms HNB into a cohesive, data-driven digital bank',
            ]}
            delay={0.12}
          />
          <div className="mt-16 pt-12 border-t border-[#E5E7EB]">
            <p className="text-xl font-semibold text-[#2563EB] text-balance">
              Transforming HNB into a cohesive, data-driven digital bank.
            </p>
          </div>
        </div>
      </Slide>
    </Deck>
  );
}
