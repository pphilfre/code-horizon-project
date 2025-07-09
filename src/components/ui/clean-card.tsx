import { forwardRef } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CleanCardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
  hoverable?: boolean;
}

export const CleanCard = forwardRef<HTMLDivElement, CleanCardProps>(
  ({ className, hoverable = true, children, ...props }, ref) => {
    const baseClasses = 'clean-card';

    return (
      <motion.div
        ref={ref}
        className={cn(baseClasses, className)}
        whileHover={hoverable ? { scale: 1.02, y: -4 } : undefined}
        transition={{ duration: 0.3 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

CleanCard.displayName = 'CleanCard';