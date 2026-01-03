import { cn } from '@/src/lib/utils';

export default function Section({ children, id, className, ...props }) {
  return (
    <section 
      id={id} 
      className={cn("py-20 md:py-32 px-4 md:px-8 w-full max-w-7xl mx-auto", className)}
      {...props}
    >
      {children}
    </section>
  );
}
