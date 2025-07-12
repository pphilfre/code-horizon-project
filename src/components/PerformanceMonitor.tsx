import { useState, useEffect } from 'react';

interface PerformanceStats {
  fps: number;
  memory: number;
  isLowPerformance: boolean;
  deviceInfo: string;
}

export const PerformanceMonitor = ({ visible = false }: { visible?: boolean }) => {
  const [stats, setStats] = useState<PerformanceStats>({
    fps: 0,
    memory: 0,
    isLowPerformance: false,
    deviceInfo: ''
  });

  useEffect(() => {
    let frameCount = 0;
    let lastTime = performance.now();
    let animationId: number;

    // Detect device performance
    const isLowPerformance = (() => {
      const ua = navigator.userAgent;
      const isIntelMac = ua.includes('Intel') && ua.includes('Mac OS X');
      const isMobile = /iPad|iPhone|Android|Mobile/.test(ua);
      const isOldBrowser = !window.requestIdleCallback || !window.IntersectionObserver;
      const hasHighDPI = window.devicePixelRatio > 2;
      const hasLimitedMemory = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
      
      return isIntelMac || isMobile || isOldBrowser || hasHighDPI || hasLimitedMemory;
    })();

    const getDeviceInfo = () => {
      const ua = navigator.userAgent;
      let device = 'Unknown';
      
      if (ua.includes('Intel') && ua.includes('Mac OS X')) {
        device = 'Intel MacBook';
      } else if (ua.includes('Mac OS X')) {
        device = 'Apple Silicon Mac';
      } else if (ua.includes('Windows')) {
        device = 'Windows PC';
      } else if (ua.includes('Android')) {
        device = 'Android Device';
      } else if (ua.includes('iPhone') || ua.includes('iPad')) {
        device = 'iOS Device';
      }
      
      return `${device} (${navigator.hardwareConcurrency || 'Unknown'} cores)`;
    };

    const measureFPS = () => {
      frameCount++;
      const currentTime = performance.now();
      
      if (currentTime - lastTime >= 1000) {
        const fps = Math.round(frameCount * 1000 / (currentTime - lastTime));
        const memory = (performance as any).memory 
          ? Math.round((performance as any).memory.usedJSHeapSize / 1048576) 
          : 0;
        
        setStats({
          fps,
          memory,
          isLowPerformance,
          deviceInfo: getDeviceInfo()
        });
        
        frameCount = 0;
        lastTime = currentTime;
      }
      
      animationId = requestAnimationFrame(measureFPS);
    };

    measureFPS();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed top-4 right-4 z-50 bg-black/80 backdrop-blur-sm text-white p-3 rounded-lg border border-white/20 font-mono text-xs">
      <div className="space-y-1">
        <div className="text-orange-400 font-semibold">Performance Monitor</div>
        <div>Device: {stats.deviceInfo}</div>
        <div className={`${stats.fps < 30 ? 'text-red-400' : stats.fps < 45 ? 'text-yellow-400' : 'text-green-400'}`}>
          FPS: {stats.fps}
        </div>
        {stats.memory > 0 && (
          <div className={`${stats.memory > 100 ? 'text-red-400' : stats.memory > 50 ? 'text-yellow-400' : 'text-green-400'}`}>
            Memory: {stats.memory}MB
          </div>
        )}
        <div className={`${stats.isLowPerformance ? 'text-yellow-400' : 'text-green-400'}`}>
          Mode: {stats.isLowPerformance ? 'Low Performance' : 'High Performance'}
        </div>
      </div>
    </div>
  );
};
