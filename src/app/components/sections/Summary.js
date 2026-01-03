'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';
import { person } from '@/src/lib/data';

export default function Summary() {
  return (
    <Section id="about" className="bg-surface/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <p className="text-lg md:text-xl text-foreground-secondary leading-relaxed">
          {person.summary}
        </p>
      </motion.div>
    </Section>
  );
}
