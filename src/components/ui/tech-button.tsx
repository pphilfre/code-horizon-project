import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TechButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  glowing?: boolean;
}

export const TechButton = forwardRef<HTMLButtonElement, TechButtonProps>(
  ({ className, variant = 'primary', size = 'md', glowing = false, children, ...props }, ref) => {
    const baseClasses = 'relative font-medium rounded-lg tech-button transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/50';
    
    const variants = {
      primary: 'bg-gradient-primary text-background hover:shadow-glow',
      secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
      accent: 'bg-gradient-accent text-accent-foreground hover:shadow-accent',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-6 py-3 text-base',
      lg: 'px-8 py-4 text-lg',
    };

    return (
      <motion.button
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          sizes[size],
          glowing && 'pulse-glow',
          className
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);

TechButton.displayName = 'TechButton';