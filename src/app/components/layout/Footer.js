import Link from 'next/link';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Manoj Barhpagga</h3>
            <p className="text-foreground-secondary max-w-xs">
              Full-Stack Developer building modern web applications with the MERN stack.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-foreground-secondary">
              <li><Link href="#about" className="hover:text-accent transition-colors">About</Link></li>
              <li><Link href="#projects" className="hover:text-accent transition-colors">Projects</Link></li>
              <li><Link href="#contact" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="https://github.com/Mahi-singh03" target="_blank" rel="noopener noreferrer" className="text-foreground-secondary hover:text-accent transition-colors">
                <Github size={20} />
              </a>
              <a href="mailto:Manojbarhpagga@gmail.com" className="text-foreground-secondary hover:text-accent transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <div className="mt-4 flex items-center gap-2 text-foreground-secondary text-sm">
              <MapPin size={16} />
              <span>Punjab, India</span>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 text-center text-foreground-secondary text-sm">
          <p>&copy; {currentYear} Manoj Barhpagga. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
