import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TechButton } from '@/components/ui/tech-button';
import { Server, Code, ChevronDown } from 'lucide-react';

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden">
      {/* Tech grid background */}
      <div className="absolute inset-0 tech-grid opacity-20" />
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-glow">Hey I'm Freddie</span>{' '}
            <motion.span
              className="inline-block text-4xl md:text-6xl lg:text-7xl"
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
            >
              👋
            </motion.span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto"
          >
            A <span className="text-primary font-semibold">Cyber Security Student</span> aspiring to become a{' '}
            <span className="text-accent font-semibold">CISO</span>.
          </motion.p>

          {/* Action buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <Link to="/homelab">
              <TechButton size="lg" className="group">
                <Server className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                View Homelab
              </TechButton>
            </Link>
            
            <Link to="/projects">
              <TechButton variant="accent" size="lg" className="group">
                <Code className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Explore Projects
              </TechButton>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center text-muted-foreground"
          >
            <span className="text-sm mb-2">Scroll to explore</span>
            <ChevronDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 rounded-full bg-gradient-primary opacity-20"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 rounded-lg bg-gradient-accent opacity-20"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -180, -360]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  );
};