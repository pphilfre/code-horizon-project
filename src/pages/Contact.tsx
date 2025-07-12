import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Github, 
  Linkedin, 
  Send, 
  User, 
  MessageSquare 
} from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  // Optimized black hole particle system for better performance
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Enhanced performance detection for Intel MacBooks and low-end devices
    const isLowPerformance = (() => {
      const ua = navigator.userAgent;
      const isIntelMac = ua.includes('Intel') && ua.includes('Mac OS X');
      const isMobile = /iPad|iPhone|Android|Mobile/.test(ua);
      const isOldBrowser = !window.requestIdleCallback || !window.IntersectionObserver;
      const hasHighDPI = window.devicePixelRatio > 2;
      const hasLimitedMemory = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
      
      return isIntelMac || isMobile || isOldBrowser || hasHighDPI || hasLimitedMemory;
    })();
    
    const resizeCanvas = () => {
      // Aggressive resolution reduction on lower performance devices
      const pixelRatio = isLowPerformance ? 0.75 : Math.min(window.devicePixelRatio, 1.5);
      canvas.width = canvas.offsetWidth * pixelRatio;
      canvas.height = canvas.offsetHeight * pixelRatio;
      ctx.scale(pixelRatio, pixelRatio);
      
      // Enable performance optimizations
      ctx.imageSmoothingEnabled = !isLowPerformance;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Optimized particle system
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      life: number;
      maxLife: number;
    }> = [];

    const centerX = canvas.offsetWidth / 2;
    const centerY = canvas.offsetHeight / 2;
    
    // Drastically reduced particle count and optimized parameters for Intel MacBooks
    const maxParticles = isLowPerformance ? 12 : (window.innerWidth < 768 ? 18 : 25);
    const particleCreationRate = isLowPerformance ? 0.1 : 0.15;
    
    // Pre-calculate expensive operations
    const TWO_PI = 6.28318;
    const centerXSquared = centerX * centerX;
    const centerYSquared = centerY * centerY;

    const createParticle = () => {
      const angle = Math.random() * TWO_PI;
      const distance = isLowPerformance ? 200 + Math.random() * 100 : 250 + Math.random() * 150;
      const x = centerX + Math.cos(angle) * distance;
      const y = centerY + Math.sin(angle) * distance;
      
      particles.push({
        x,
        y,
        vx: 0,
        vy: 0,
        size: isLowPerformance ? Math.random() * 1.5 + 0.5 : Math.random() * 2 + 1,
        life: 0,
        maxLife: isLowPerformance ? 120 + Math.random() * 60 : 200 + Math.random() * 100
      });
    };

    let lastTime = 0;
    let skipFrameCounter = 0;
    let frameCount = 0;
    let lastFPSCheck = 0;
    let adaptiveQuality = isLowPerformance ? 0.5 : 1.0;
    
    const targetFPS = isLowPerformance ? 24 : 45; // Much lower FPS for Intel MacBooks
    const frameInterval = 1000 / targetFPS;
    const skipFrameEvery = isLowPerformance ? 3 : 2; // Skip frames for even better performance

    const animate = (currentTime: number) => {
      // Enhanced frame rate limiting and frame skipping
      if (currentTime - lastTime < frameInterval) {
        requestAnimationFrame(animate);
        return;
      }
      
      // Adaptive performance monitoring for Intel MacBooks
      frameCount++;
      if (currentTime - lastFPSCheck > 2000) { // Check every 2 seconds
        const actualFPS = frameCount / 2;
        if (actualFPS < targetFPS * 0.8 && adaptiveQuality > 0.3) {
          adaptiveQuality = Math.max(0.3, adaptiveQuality - 0.1);
          console.log('Reducing quality for better performance:', adaptiveQuality);
        } else if (actualFPS > targetFPS * 0.95 && adaptiveQuality < 1.0) {
          adaptiveQuality = Math.min(1.0, adaptiveQuality + 0.05);
        }
        frameCount = 0;
        lastFPSCheck = currentTime;
      }
      
      // Skip frames on low performance devices
      if (isLowPerformance) {
        skipFrameCounter++;
        if (skipFrameCounter % skipFrameEvery !== 0) {
          lastTime = currentTime;
          requestAnimationFrame(animate);
          return;
        }
      }
      
      lastTime = currentTime;

      // More aggressive trail effect for better performance
      ctx.fillStyle = isLowPerformance ? 'rgba(0, 0, 0, 0.15)' : 'rgba(0, 0, 0, 0.08)';
      ctx.fillRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      // Adaptive particle creation
      const adjustedMaxParticles = Math.floor(maxParticles * adaptiveQuality);
      const adjustedCreationRate = particleCreationRate * adaptiveQuality;
      
      if (particles.length < adjustedMaxParticles && Math.random() < adjustedCreationRate) {
        createParticle();
      }

      // Highly optimized batch particle updates with reduced calculations
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i];
        
        // Simplified distance calculation with early exit
        const dx = centerX - particle.x;
        const dy = centerY - particle.y;
        const distanceSquared = dx * dx + dy * dy;
        
        // Remove particles that get too close (skip expensive sqrt when possible)
        if (distanceSquared < 625) { // 25^2 = 625
          particles.splice(i, 1);
          continue;
        }
        
        const distance = Math.sqrt(distanceSquared);
        
        // Much simplified physics for better performance on Intel MacBooks
        const invDistance = 1 / distance;
        const force = isLowPerformance ? 20 / distanceSquared : 30 / distanceSquared;
        
        particle.vx += dx * invDistance * force;
        particle.vy += dy * invDistance * force;

        // Simplified spiral effect (reduced on low performance)
        if (!isLowPerformance || i % 2 === 0) {
          const spiralForce = Math.max(0.2, 1.2 - distance * 0.004);
          particle.vx += -dy * invDistance * spiralForce;
          particle.vy += dx * invDistance * spiralForce;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;
        
        // Apply stronger drag for stability
        const drag = isLowPerformance ? 0.96 : 0.98;
        particle.vx *= drag;
        particle.vy *= drag;

        // Update life (faster on low performance to reduce particle count)
        particle.life += isLowPerformance ? 1.5 : 1;
        if (particle.life > particle.maxLife) {
          particles.splice(i, 1);
          continue;
        }

        // Highly simplified rendering for Intel MacBooks
        const alpha = Math.max(0.3, 1 - (particle.life / particle.maxLife));
        
        if (isLowPerformance) {
          // Ultra-simple rendering for low performance
          ctx.globalAlpha = alpha;
          ctx.fillStyle = '#ff8800';
        } else {
          // Standard rendering for higher performance devices
          const distanceRatio = Math.min(distance * 0.0025, 1);
          const hue = 50 - distanceRatio * 30;
          const saturation = 80;
          const lightness = 60 + distanceRatio * 20;
          
          ctx.globalAlpha = alpha;
          ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        }
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, TWO_PI);
        ctx.fill();
      }

      // Simplified black hole center with performance optimization
      ctx.globalAlpha = 1;
      
      if (isLowPerformance) {
        // Ultra-simple black hole for Intel MacBooks
        ctx.fillStyle = '#ff6400';
        ctx.beginPath();
        ctx.arc(centerX, centerY, 60, 0, TWO_PI);
        ctx.fill();
        
        // Single simple ring
        ctx.globalAlpha = 0.4;
        ctx.strokeStyle = '#ff8800';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(centerX, centerY, 45, 0, TWO_PI);
        ctx.stroke();
      } else {
        // Standard black hole for higher performance devices
        const blackHoleGradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, 80);
        blackHoleGradient.addColorStop(0, '#000000');
        blackHoleGradient.addColorStop(0.7, '#ff6400');
        blackHoleGradient.addColorStop(1, '#ff9600');
        
        ctx.fillStyle = blackHoleGradient;
        ctx.beginPath();
        ctx.arc(centerX, centerY, 70, 0, TWO_PI);
        ctx.fill();

        // Event horizon ring
        ctx.globalAlpha = 0.5;
        ctx.strokeStyle = '#ff7800';
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(centerX, centerY, 55, 0, TWO_PI);
        ctx.stroke();
      }

      requestAnimationFrame(animate);
    };

    // Start animation
    requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background canvas for black hole effect */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ 
          background: 'radial-gradient(circle at center, #000000 0%, #1a0600 30%, #2d0a00 60%, #000000 100%)'
        }}
      />
      
      {/* Main content */}
      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light leading-tight text-white mb-6">
              Let's{' '}
              <span className="text-orange-400">Connect</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Send your message into the digital void and watch it get pulled into my inbox
            </p>
          </motion.div>

          {/* Contact Form in the center of black hole */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-20 max-w-md mx-auto"
          >
            {/* Liquid glass effect container */}
            <div className="relative">
              {/* Glass morphism background with enhanced effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-2xl border border-white/20 shadow-2xl"></div>
              
              {/* Liquid effect overlay */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-red-500/20 animate-pulse"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-100%] animate-[shimmer_3s_infinite]"></div>
              </div>
              
              {/* Inner glass layer */}
              <div className="relative bg-black/30 backdrop-blur-sm border border-orange-500/30 rounded-2xl p-8 shadow-2xl shadow-orange-500/20">
                {/* Floating particles inside form */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
                  <div className="absolute top-4 left-4 w-2 h-2 bg-orange-400/60 rounded-full animate-float"></div>
                  <div className="absolute top-12 right-8 w-1 h-1 bg-yellow-400/40 rounded-full animate-float-delayed"></div>
                  <div className="absolute bottom-16 left-12 w-1.5 h-1.5 bg-red-400/50 rounded-full animate-float-slow"></div>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6 relative">
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="flex items-center gap-2 text-white/90 text-sm font-medium mb-2">
                      <User className="w-4 h-4 text-orange-400" />
                      Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:bg-white/10 transition-all duration-300"
                        placeholder="Your name"
                      />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="flex items-center gap-2 text-white/90 text-sm font-medium mb-2">
                      <Mail className="w-4 h-4 text-orange-400" />
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:bg-white/10 transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Message field */}
                  <div>
                    <label htmlFor="message" className="flex items-center gap-2 text-white/90 text-sm font-medium mb-2">
                      <MessageSquare className="w-4 h-4 text-orange-400" />
                      Message
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:border-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500/30 focus:bg-white/10 transition-all duration-300 resize-none"
                        placeholder="Your message will be pulled into the digital void..."
                      />
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Submit button */}
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`relative w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden ${
                      isSubmitting
                        ? 'bg-gray-700/50 text-gray-400 cursor-not-allowed'
                        : 'bg-gradient-to-r from-orange-600/80 to-red-600/80 hover:from-orange-500 hover:to-red-500 text-white shadow-lg hover:shadow-orange-500/40 backdrop-blur-sm border border-orange-500/30'
                    }`}
                  >
                    {/* Button shimmer effect */}
                    {!isSubmitting && (
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:animate-[shimmer_0.6s_ease-out]"></div>
                    )}
                    
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                        Sending into the void...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-gray-400 mb-6">Or connect with me on</p>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/orgs/philfreddie/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500 transition-all duration-200 hover:bg-orange-500/10"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500 transition-all duration-200 hover:bg-orange-500/10"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:fphilpotsemail@gmail.com"
                className="w-12 h-12 bg-gray-800/60 backdrop-blur-sm border border-gray-700 rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:border-orange-500 transition-all duration-200 hover:bg-orange-500/10"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Fun fact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-gray-500 text-sm">
              Fun fact: Messages sent through this black hole travel at the speed of light* 
              <br />
              <span className="text-xs">*Actually just regular internet speed</span>
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};