'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { experience } from '@/src/lib/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export default function Experience() {
  return (
    <Section id="experience" className="bg-surface/30">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-12">Experience</motion.h2>
        
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div key={exp.id} variants={itemVariants}>
              <Card className="p-6 md:p-8 hover:border-accent/30 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                    <p className="text-accent font-medium">{exp.organization}</p>
                  </div>
                  <span className="text-sm text-foreground-secondary mt-2 md:mt-0 bg-white/5 px-3 py-1 rounded-full w-fit">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="list-disc list-inside space-y-2 text-foreground-secondary">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="leading-relaxed">
                      {resp}
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

