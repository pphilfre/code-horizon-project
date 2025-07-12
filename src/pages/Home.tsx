import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-black">
      {/* Dark background with red/orange gradient at bottom */}
      <div className="absolute inset-0 bg-gradient-to-t from-red-600 via-red-800/30 to-black" />
      
      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
              <span className="text-black font-bold text-lg">F</span>
            </div>
            <span className="text-white text-lg">Freddie</span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-white"
          >
            A cybersecurity student passionate about creating{' '}
            <span className="text-red-400">secure digital infrastructures</span>
          </motion.h1>

          {/* Action button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-12"
          >
            <Link to="/projects">
              <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-medium transition-colors duration-200">
                View my work
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom section indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-16 left-1/2 transform -translate-x-1/2"
      >
        <div className="text-white text-sm">
          Case studies
        </div>
      </motion.div>
    </div>
  );
};