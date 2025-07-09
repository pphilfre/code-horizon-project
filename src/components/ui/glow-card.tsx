import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlowCardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  hoverable?: boolean;
  glowing?: boolean;
}

export const GlowCard = forwardRef<HTMLDivElement, GlowCardProps>(
  ({ className, hoverable = true, glowing = false, children, ...props }, ref) => {
    const baseClasses = 'glow-card rounded-xl p-6 backdrop-blur-sm';

    return (
      <motion.div
        ref={ref}
        className={cn(
          baseClasses,
          glowing && 'pulse-glow',
          className
        )}
        whileHover={hoverable ? { scale: 1.02, y: -4 } : undefined}
        transition={{ duration: 0.3 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

GlowCard.displayName = 'GlowCard';