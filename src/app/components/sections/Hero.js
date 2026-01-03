'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../ui/Button';
import Section from '../ui/Section';
import { person } from '@/src/lib/data';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  return (
    <Section id="hero" className="min-h-screen flex flex-col justify-center pt-32">
      <div className="flex flex-col-reverse md:flex-row items-center gap-12">
        <motion.div
          className="flex-1"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h2 variants={itemVariants} className="text-accent font-medium mb-4 tracking-wide">
            HELLO, I'M
          </motion.h2>
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            {person.name}
          </motion.h1>
          <motion.h2 variants={itemVariants} className="text-2xl md:text-4xl text-foreground-secondary font-semibold mb-8">
            {person.role}
          </motion.h2>
          <motion.p variants={itemVariants} className="text-lg text-foreground-secondary max-w-2xl mb-10 leading-relaxed">
            Building scalable web applications and digital experiences with modern technologies.
            Focused on performance, accessibility, and clean code.
          </motion.p>
          
          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Button href="#projects">View Projects</Button>
            <Button href="#contact" variant="outline">Contact Me</Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative w-64 h-64 md:w-80 md:h-80 flex-shrink-0"
        >
          <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl animate-pulse" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-surface shadow-2xl">
            <Image
              src={person.profilePicture}
              alt={person.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

