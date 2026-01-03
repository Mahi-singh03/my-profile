'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import Section from '../ui/Section';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { projects } from '@/src/lib/data';

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
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Projects() {
  return (
    <Section id="projects">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-12">Featured Projects</motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants} className="h-full">
              <Card className="flex flex-col h-full group">
                {/* Placeholder Image with Hover Effect */}
                <div className="h-48 bg-surface-secondary w-full relative overflow-hidden border-b border-white/5">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 flex items-center justify-center text-foreground-secondary">
                    <span className="text-sm font-medium px-4 py-2 border border-white/10 rounded-full bg-background/50 backdrop-blur-sm">
                      {project.title} Preview
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-foreground-secondary text-sm mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 4).map((tech, idx) => (
                      <span key={idx} className="text-xs px-2 py-1 bg-white/5 rounded text-foreground-secondary border border-white/5">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="text-xs px-2 py-1 bg-white/5 rounded text-foreground-secondary border border-white/5">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>
                  
                  {project.link ? (
                    <Button href={project.link} variant="outline" className="w-full gap-2 group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-all duration-300" target="_blank">
                      View Project <ExternalLink size={16} />
                    </Button>
                  ) : (
                    <Button variant="ghost" disabled className="w-full cursor-not-allowed opacity-50">
                      Coming Soon
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}

