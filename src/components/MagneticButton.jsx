import React, { useRef, useState } from 'react';

const MagneticButton = ({ children, className = '', strength = 0.3, ...props }) => {
  const ref = useRef(null);
  const [transform, setTransform] = useState('translate(0px, 0px)');

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTransform(`translate(${x * strength}px, ${y * strength}px)`);
  };

  const handleMouseLeave = () => {
    setTransform('translate(0px, 0px)');
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transform, transition: 'transform 0.2s ease-out', display: 'inline-block' }}
      {...props}
    >
      {children}
    </div>
  );
};

export default MagneticButton;
