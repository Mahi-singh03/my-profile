'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Github } from 'lucide-react';
import Section from '../ui/Section';
import Button from '../ui/Button';
import Card from '../ui/Card';
import { person } from '@/src/lib/data';

export default function Contact() {
  return (
    <Section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
        <p className="text-lg text-foreground-secondary mb-12">
          I'm currently open to new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 flex flex-col items-center gap-4">
            <div className="p-3 bg-accent/10 rounded-full text-accent">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Email</h3>
              <a href={`mailto:${person.email}`} className="text-sm text-foreground-secondary hover:text-accent transition-colors">
                {person.email}
              </a>
            </div>
          </Card>
          
          <Card className="p-6 flex flex-col items-center gap-4">
            <div className="p-3 bg-accent/10 rounded-full text-accent">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">Location</h3>
              <p className="text-sm text-foreground-secondary">{person.location}</p>
            </div>
          </Card>
          
          <Card className="p-6 flex flex-col items-center gap-4">
            <div className="p-3 bg-accent/10 rounded-full text-accent">
              <Github size={24} />
            </div>
            <div>
              <h3 className="font-semibold mb-1">GitHub</h3>
              <a href={person.github} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground-secondary hover:text-accent transition-colors">
                View Profile
              </a>
            </div>
          </Card>
        </div>

        <Button href={`mailto:${person.email}`} className="text-lg px-8 py-4">
          Say Hello
        </Button>
      </motion.div>
    </Section>
  );
}
