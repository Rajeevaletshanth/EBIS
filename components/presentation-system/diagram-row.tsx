'use client';

import { motion } from 'framer-motion';

interface DiagramRowProps {
  items: Array<{ label: string; highlight?: boolean }>;
  delay?: number;
}

export function DiagramRow({ items, delay = 0 }: DiagramRowProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      viewport={{ once: true }}
      className="flex items-center justify-center gap-4 flex-wrap"
    >
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-4">
          <div
            className={`px-6 py-4 border rounded-lg text-center font-medium whitespace-nowrap ${
              item.highlight
                ? 'border-[#2563EB] bg-blue-50 text-[#2563EB]'
                : 'border-[#E5E7EB] bg-white text-gray-700'
            }`}
          >
            {item.label}
          </div>
          {index < items.length - 1 && (
            <div className="text-gray-400 text-xl">→</div>
          )}
        </div>
      ))}
    </motion.div>
  );
}
