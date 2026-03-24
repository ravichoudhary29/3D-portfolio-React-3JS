import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

// Apple-style sun icon (SF Symbols inspired)
const SunIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2" />
    <path d="M12 20v2" />
    <path d="m4.93 4.93 1.41 1.41" />
    <path d="m17.66 17.66 1.41 1.41" />
    <path d="M2 12h2" />
    <path d="M20 12h2" />
    <path d="m6.34 17.66-1.41 1.41" />
    <path d="m19.07 4.93-1.41 1.41" />
  </svg>
);

// Apple-style moon icon (SF Symbols inspired)
const MoonIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M21.75 15.5a9.72 9.72 0 0 1-3.36.6C12.26 16.1 7.4 11.24 7.4 5.1c0-1.17.21-2.3.6-3.36A9.5 9.5 0 1 0 21.75 15.5Z" />
  </svg>
);

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();
  const [flashing, setFlashing] = useState(false);

  const handleToggle = () => {
    setFlashing(true);
    setTimeout(() => {
      toggleTheme();
      setTimeout(() => setFlashing(false), 300);
    }, 150);
  };

  return (
    <>
      {/* Flash overlay */}
      <AnimatePresence>
        {flashing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.12 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9990] pointer-events-none"
            style={{ background: isDark ? '#fff' : '#000' }}
          />
        )}
      </AnimatePresence>

      {/* Apple-style pill toggle */}
      <button
        onClick={handleToggle}
        className="relative w-[52px] h-[28px] rounded-full flex items-center px-[3px] cursor-pointer border-none outline-none transition-colors duration-300"
        style={{
          background: isDark
            ? 'linear-gradient(135deg, #1a1a2e, #2d2b55)'
            : 'linear-gradient(135deg, #87CEEB, #f0c27f)',
        }}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {/* Sliding knob */}
        <motion.div
          layout
          className="w-[22px] h-[22px] rounded-full flex items-center justify-center shadow-md"
          style={{
            background: isDark ? '#1e1b4b' : '#fff',
            x: isDark ? 24 : 0,
          }}
          transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        >
          <AnimatePresence mode="wait">
            {isDark ? (
              <motion.span
                key="moon"
                initial={{ opacity: 0, rotate: -30 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 30 }}
                transition={{ duration: 0.15 }}
                className="text-yellow-300 flex items-center justify-center"
                style={{ fontSize: 12 }}
              >
                <MoonIcon />
              </motion.span>
            ) : (
              <motion.span
                key="sun"
                initial={{ opacity: 0, rotate: 30 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -30 }}
                transition={{ duration: 0.15 }}
                className="text-amber-500 flex items-center justify-center"
                style={{ fontSize: 12 }}
              >
                <SunIcon />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>
      </button>
    </>
  );
};

export default ThemeToggle;
