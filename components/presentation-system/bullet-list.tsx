'use client';

import { motion } from 'framer-motion';

interface BulletListProps {
  items: string[];
  delay?: number;
}

export function BulletList({ items, delay = 0.1 }: BulletListProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay,
        delayChildren: 0,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -12 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <motion.ul
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
      className="space-y-3"
    >
      {items.map((item, index) => (
        <motion.li key={index} variants={itemVariants} className="flex gap-4">
          <span className="w-2 h-2 rounded-full bg-purple-600 flex-shrink-0 mt-2" />
          <span className="text-gray-700 leading-relaxed text-lg">{item}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
}
