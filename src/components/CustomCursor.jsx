import React, { useEffect, useRef, useState } from 'react';

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);
  const mouse = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const animRef = useRef(null);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
      if (!visible) setVisible(true);
    };

    const onEnter = () => setVisible(true);
    const onLeave = () => setVisible(false);

    // Detect hoverable elements
    const onOverIn = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, [onclick], .cursor-pointer')) {
        setHovering(true);
      }
    };
    const onOverOut = (e) => {
      if (e.target.closest('a, button, [role="button"], input, textarea, [onclick], .cursor-pointer')) {
        setHovering(false);
      }
    };

    // Smooth trailing ring
    const animate = () => {
      ring.current.x += (mouse.current.x - ring.current.x) * 0.15;
      ring.current.y += (mouse.current.y - ring.current.y) * 0.15;
      if (ringRef.current) {
        ringRef.current.style.left = `${ring.current.x}px`;
        ringRef.current.style.top = `${ring.current.y}px`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseenter', onEnter);
    document.addEventListener('mouseleave', onLeave);
    document.addEventListener('mouseover', onOverIn);
    document.addEventListener('mouseout', onOverOut);
    animRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseenter', onEnter);
      document.removeEventListener('mouseleave', onLeave);
      document.removeEventListener('mouseover', onOverIn);
      document.removeEventListener('mouseout', onOverOut);
      cancelAnimationFrame(animRef.current);
    };
  }, [visible]);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Small dot */}
      <div
        ref={dotRef}
        className="fixed pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-opacity duration-200"
        style={{
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: '#fff',
          opacity: visible ? 1 : 0,
        }}
      />
      {/* Trailing ring */}
      <div
        ref={ringRef}
        className="fixed pointer-events-none z-[9997] -translate-x-1/2 -translate-y-1/2 mix-blend-difference transition-[width,height] duration-200 ease-out"
        style={{
          width: hovering ? 48 : 32,
          height: hovering ? 48 : 32,
          borderRadius: '50%',
          border: '1.5px solid rgba(255,255,255,0.5)',
          opacity: visible ? 1 : 0,
          transition: 'width 0.2s, height 0.2s, opacity 0.2s',
        }}
      />
    </>
  );
};

export default CustomCursor;
