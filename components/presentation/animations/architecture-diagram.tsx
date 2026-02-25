'use client';

export function ArchitectureDiagram() {
  return (
    <svg
      viewBox="0 0 1000 600"
      className="w-full h-full max-h-96"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Gradient Definitions */}
        <linearGradient
          id="cbsGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#00ff88" />
          <stop offset="100%" stopColor="#00cc88" />
        </linearGradient>

        <linearGradient
          id="crmGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#0088ff" />
          <stop offset="100%" stopColor="#0066ff" />
        </linearGradient>

        <linearGradient
          id="erpGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#ff00ff" />
          <stop offset="100%" stopColor="#cc00ff" />
        </linearGradient>

        {/* Arrow Marker */}
        <marker
          id="arrowhead"
          markerWidth="10"
          markerHeight="10"
          refX="9"
          refY="3"
          orient="auto"
        >
          <polygon points="0 0, 10 3, 0 6" fill="#00ff88" />
        </marker>
      </defs>

      {/* Title */}
      <text
        x="500"
        y="30"
        textAnchor="middle"
        className="fill-cyan-400 font-bold text-2xl"
        fontSize="24"
      >
        HNB Integrated Enterprise Architecture
      </text>

      {/* Core Banking System */}
      <g>
        <rect
          x="50"
          y="100"
          width="180"
          height="100"
          rx="8"
          fill="url(#cbsGradient)"
          opacity="0.8"
          className="animate-pulse"
          style={{ animationDuration: '2s' }}
        />
        <text
          x="140"
          y="130"
          textAnchor="middle"
          className="fill-slate-950 font-bold"
          fontSize="14"
        >
          Core Banking
        </text>
        <text
          x="140"
          y="150"
          textAnchor="middle"
          className="fill-slate-950 font-semibold text-xs"
          fontSize="12"
        >
          Temenos T24
        </text>
        <text
          x="140"
          y="170"
          textAnchor="middle"
          className="fill-slate-950 text-xs"
          fontSize="11"
        >
          Deposits • Loans • Payments
        </text>
      </g>

      {/* CRM System */}
      <g>
        <rect
          x="410"
          y="100"
          width="180"
          height="100"
          rx="8"
          fill="url(#crmGradient)"
          opacity="0.8"
          className="animate-pulse"
          style={{ animationDuration: '2.5s' }}
        />
        <text
          x="500"
          y="130"
          textAnchor="middle"
          className="fill-slate-950 font-bold"
          fontSize="14"
        >
          CRM
        </text>
        <text
          x="500"
          y="150"
          textAnchor="middle"
          className="fill-slate-950 font-semibold text-xs"
          fontSize="12"
        >
          Salesforce FSC
        </text>
        <text
          x="500"
          y="170"
          textAnchor="middle"
          className="fill-slate-950 text-xs"
          fontSize="11"
        >
          Customer 360° • Relationships
        </text>
      </g>

      {/* ERP System */}
      <g>
        <rect
          x="770"
          y="100"
          width="180"
          height="100"
          rx="8"
          fill="url(#erpGradient)"
          opacity="0.8"
          className="animate-pulse"
          style={{ animationDuration: '3s' }}
        />
        <text
          x="860"
          y="130"
          textAnchor="middle"
          className="fill-slate-950 font-bold"
          fontSize="14"
        >
          ERP
        </text>
        <text
          x="860"
          y="150"
          textAnchor="middle"
          className="fill-slate-950 font-semibold text-xs"
          fontSize="12"
        >
          SAP S/4HANA
        </text>
        <text
          x="860"
          y="170"
          textAnchor="middle"
          className="fill-slate-950 text-xs"
          fontSize="11"
        >
          Finance • HR • Procurement
        </text>
      </g>

      {/* Animated Connection Lines */}
      {/* CBS to CRM */}
      <line
        x1="230"
        y1="150"
        x2="410"
        y2="150"
        stroke="#00ff88"
        strokeWidth="2"
        opacity="0.6"
        className="stroke-dasharray"
        style={{
          strokeDasharray: '10,5',
          animation: 'flowingLine1 3s linear infinite',
        }}
        markerEnd="url(#arrowhead)"
      />

      {/* CBS to ERP */}
      <line
        x1="230"
        y1="180"
        x2="770"
        y2="180"
        stroke="#0088ff"
        strokeWidth="2"
        opacity="0.6"
        className="stroke-dasharray"
        style={{
          strokeDasharray: '10,5',
          animation: 'flowingLine2 3.5s linear infinite',
        }}
        markerEnd="url(#arrowhead)"
      />

      {/* CRM to ERP */}
      <line
        x1="590"
        y1="150"
        x2="770"
        y2="150"
        stroke="#ff00ff"
        strokeWidth="2"
        opacity="0.6"
        className="stroke-dasharray"
        style={{
          strokeDasharray: '10,5',
          animation: 'flowingLine3 3.2s linear infinite',
        }}
        markerEnd="url(#arrowhead)"
      />

      {/* Data Warehouse */}
      <g>
        <rect
          x="300"
          y="320"
          width="160"
          height="80"
          rx="8"
          fill="rgba(139, 92, 246, 0.3)"
          stroke="rgba(139, 92, 246, 0.8)"
          strokeWidth="2"
          className="stroke-dasharray"
          style={{
            strokeDasharray: '5,3',
            animation: 'dashFlow 0.5s linear infinite',
          }}
        />
        <text
          x="380"
          y="350"
          textAnchor="middle"
          className="fill-purple-300 font-bold"
          fontSize="14"
        >
          Data Warehouse
        </text>
        <text
          x="380"
          y="370"
          textAnchor="middle"
          className="fill-purple-300 text-xs"
          fontSize="11"
        >
          Real-time Integration
        </text>
      </g>

      {/* Database Icons with Animation */}
      <g>
        {/* On-Premises DB */}
        <circle
          cx="150"
          cy="380"
          r="20"
          fill="rgba(16, 185, 129, 0.3)"
          stroke="rgba(16, 185, 129, 0.8)"
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDuration: '2s' }}
        />
        <text
          x="150"
          y="386"
          textAnchor="middle"
          className="fill-emerald-300 font-bold text-xs"
          fontSize="10"
        >
          🗄️
        </text>
        <text
          x="150"
          y="410"
          textAnchor="middle"
          className="fill-emerald-300 text-xs"
          fontSize="10"
        >
          On-Prem
        </text>
      </g>

      <g>
        {/* Cloud DB */}
        <circle
          cx="600"
          cy="380"
          r="20"
          fill="rgba(59, 130, 246, 0.3)"
          stroke="rgba(59, 130, 246, 0.8)"
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDuration: '2.5s' }}
        />
        <text
          x="600"
          y="386"
          textAnchor="middle"
          className="fill-blue-300 font-bold text-xs"
          fontSize="12"
        >
          ☁️
        </text>
        <text
          x="600"
          y="410"
          textAnchor="middle"
          className="fill-blue-300 text-xs"
          fontSize="10"
        >
          Azure Cloud
        </text>
      </g>

      <g>
        {/* Security Layer */}
        <circle
          cx="900"
          cy="380"
          r="20"
          fill="rgba(239, 68, 68, 0.3)"
          stroke="rgba(239, 68, 68, 0.8)"
          strokeWidth="2"
          className="animate-pulse"
          style={{ animationDuration: '3s' }}
        />
        <text
          x="900"
          y="386"
          textAnchor="middle"
          className="fill-red-300 font-bold text-xs"
          fontSize="12"
        >
          🔒
        </text>
        <text
          x="900"
          y="410"
          textAnchor="middle"
          className="fill-red-300 text-xs"
          fontSize="10"
        >
          Zero Trust
        </text>
      </g>

      {/* API Gateway */}
      <rect
        x="350"
        y="470"
        width="300"
        height="60"
        rx="8"
        fill="rgba(34, 197, 94, 0.2)"
        stroke="rgba(34, 197, 94, 0.6)"
        strokeWidth="2"
      />
      <text
        x="500"
        y="495"
        textAnchor="middle"
        className="fill-green-300 font-bold"
        fontSize="14"
      >
        API Gateway & Middleware Integration
      </text>
      <text
        x="500"
        y="515"
        textAnchor="middle"
        className="fill-green-200 text-xs"
        fontSize="11"
      >
        Real-time System Integration • Standardized Communication
      </text>

      {/* Connecting lines to warehouse */}
      <path
        d="M 140 200 Q 150 260 330 320"
        fill="none"
        stroke="rgba(139, 92, 246, 0.4)"
        strokeWidth="2"
      />
      <path
        d="M 500 200 Q 420 260 420 320"
        fill="none"
        stroke="rgba(139, 92, 246, 0.4)"
        strokeWidth="2"
      />
      <path
        d="M 860 200 Q 480 260 460 320"
        fill="none"
        stroke="rgba(139, 92, 246, 0.4)"
        strokeWidth="2"
      />

      <style>{`
        @keyframes flowingLine1 {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 15;
          }
        }
        @keyframes flowingLine2 {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 15;
          }
        }
        @keyframes flowingLine3 {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 15;
          }
        }
        @keyframes dashFlow {
          0% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: 8;
          }
        }
      `}</style>
    </svg>
  );
}
