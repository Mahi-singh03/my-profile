import Link from 'next/link';
import { cn } from '@/src/lib/utils';
import { motion } from 'framer-motion';

export default function Button({ 
  children, 
  variant = 'primary', 
  className, 
  href, 
  onClick,
  ...props 
}) {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-accent text-white hover:bg-red-700 hover:scale-[1.02] active:scale-[0.98]",
    outline: "border border-accent text-accent hover:bg-accent/10",
    ghost: "text-foreground-secondary hover:text-accent hover:bg-accent/5",
    link: "text-accent hover:underline p-0 h-auto"
  };

  const Component = href ? Link : motion.button;
  const motionProps = href ? {} : { whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 } };

  return (
    <Component
      href={href || undefined}
      onClick={onClick}
      className={cn(baseStyles, variants[variant], className)}
      {...motionProps}
      {...props}
    >
      {children}
    </Component>
  );
}
