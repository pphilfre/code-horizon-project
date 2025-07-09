import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Server, Code, Mail, Volume2, VolumeX } from 'lucide-react';
import { BackgroundParticles } from './BackgroundParticles';
import { CursorGlow } from './CursorGlow';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/about', icon: User, label: 'About' },
    { path: '/homelab', icon: Server, label: 'Homelab' },
    { path: '/projects', icon: Code, label: 'Projects' },
    { path: '/contact', icon: Mail, label: 'Contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying);
    // TODO: Implement actual music playback
  };

  return (
    <div className="min-h-screen relative">
      <BackgroundParticles />
      <CursorGlow />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-glow"
          >
            Freddie
          </motion.div>

          <div className="flex items-center gap-8">
            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-gradient-primary text-background shadow-glow'
                      : 'text-foreground hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  <item.icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </Link>
              ))}
            </div>

            {/* Music Toggle */}
            <button
              onClick={toggleMusic}
              className="p-2 rounded-lg tech-button"
              title={isMusicPlaying ? 'Mute' : 'Play ambient music'}
            >
              {isMusicPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
          <div className="glow-card rounded-2xl p-4">
            <div className="flex justify-around items-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-gradient-primary text-background shadow-glow'
                      : 'text-foreground hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="page-transition"
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
};