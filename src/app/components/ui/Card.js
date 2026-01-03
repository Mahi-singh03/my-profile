import { cn } from '@/src/lib/utils';
import { motion } from 'framer-motion';

export default function Card({ children, className, hoverEffect = true, ...props }) {
  return (
    <motion.div
      className={cn(
        "bg-surface rounded-xl border border-white/10 dark:border-white/5 overflow-hidden",
        hoverEffect && "hover:border-accent/50 transition-colors duration-300",
        className
      )}
      whileHover={hoverEffect ? { y: -5 } : {}}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
