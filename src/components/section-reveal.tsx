'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export function SectionReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
    // @ts-ignore
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
} 