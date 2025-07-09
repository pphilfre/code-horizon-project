import { useEffect, useRef } from 'react';

export const CursorGlow = () => {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        glow.style.left = `${e.clientX - 10}px`;
        glow.style.top = `${e.clientY - 10}px`;
      });
    };

    const handleMouseEnter = () => {
      glow.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      glow.style.opacity = '0';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-glow opacity-0 transition-opacity duration-300"
      style={{
        pointerEvents: 'none',
        position: 'fixed',
        width: '20px',
        height: '20px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0, 212, 255, 0.3) 0%, transparent 70%)',
        filter: 'blur(10px)',
        zIndex: 9999,
      }}
    />
  );
};