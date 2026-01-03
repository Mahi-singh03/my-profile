'use client';

import { motion } from 'framer-motion';
import Section from '../ui/Section';
import Card from '../ui/Card';
import { education, certifications } from '@/src/lib/data';

export default function Education() {
  return (
    <Section id="education" className="bg-surface/30">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div className="space-y-6">
              {education.map((edu) => (
                <Card key={edu.id} className="p-6">
                  <h3 className="text-lg font-bold">{edu.degree}</h3>
                  <p className="text-accent text-sm mb-2">{edu.institution}</p>
                  <p className="text-sm text-foreground-secondary mb-2">{edu.period}</p>
                  <p className="text-sm text-foreground-secondary">{edu.details}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h2 className="text-3xl font-bold mb-8">Certifications</h2>
            <div className="space-y-6">
              {certifications.map((cert) => (
                <Card key={cert.id} className="p-6">
                  <h3 className="text-lg font-bold">{cert.title}</h3>
                  <p className="text-accent text-sm mb-2">{cert.issuer}</p>
                  <p className="text-sm text-foreground-secondary">{cert.date}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
