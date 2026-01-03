'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { skills } from '@/src/lib/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
};

const SkillCategory = ({ title, items }) => (
  <div className="mb-8">
    <h3 className="text-xl font-semibold mb-4 text-accent">{title}</h3>
    <motion.div 
      className="flex flex-wrap gap-3"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {items.map((skill, index) => (
        <motion.span
          key={index}
          variants={itemVariants}
          whileHover={{ scale: 1.05, backgroundColor: "rgba(225, 6, 0, 0.1)", borderColor: "rgba(225, 6, 0, 0.3)" }}
          className="px-4 py-2 bg-surface border border-white/10 rounded-full text-sm font-medium text-foreground-secondary cursor-default transition-colors"
        >
          {skill}
        </motion.span>
      ))}
    </motion.div>
  </div>
);

export default function Skills() {
  return (
    <Section id="skills">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6 md:p-8">
            <SkillCategory title="Frontend Development" items={skills.frontend} />
          </Card>
          
          <div className="space-y-8">
            <Card className="p-6 md:p-8">
              <SkillCategory title="Backend Development" items={skills.backend} />
            </Card>
            <Card className="p-6 md:p-8">
              <SkillCategory title="Tools & Platforms" items={skills.tools} />
            </Card>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}

