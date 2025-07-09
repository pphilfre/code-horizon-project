import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Server, Code, Mail, Volume2, VolumeX } from 'lucide-react';

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
    <div className="min-h-screen relative bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 bg-background/80 backdrop-blur-sm">
        <div className="flex justify-between items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-foreground"
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
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 text-sm font-medium ${
                    isActive(item.path)
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* Music Toggle */}
            <button
              onClick={toggleMusic}
              className="p-2 rounded-lg clean-button-outline"
              title={isMusicPlaying ? 'Mute' : 'Play ambient music'}
            >
              {isMusicPlaying ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
          <div className="clean-card p-4">
            <div className="flex justify-around items-center">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`p-3 rounded-lg transition-all duration-300 ${
                    isActive(item.path)
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
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
      <main className="relative">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="page-enter"
        >
          {children}
        </motion.div>
      </main>
    </div>
  );
};