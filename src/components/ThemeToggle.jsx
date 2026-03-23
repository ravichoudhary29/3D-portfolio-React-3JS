import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

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
            animate={{ opacity: 0.15 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9990] pointer-events-none"
            style={{ background: isDark ? '#fff' : '#000' }}
          />
        )}
      </AnimatePresence>

      <button
        onClick={handleToggle}
        className="theme-toggle w-10 h-10 rounded-full flex items-center justify-center bg-tertiary border border-accent/20 hover:border-accent/50 cursor-pointer"
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="sun"
              initial={{ rotate: -90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: 90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.25 }}
            >
              <FontAwesomeIcon icon={faSun} className="text-yellow-400 text-lg" />
            </motion.div>
          ) : (
            <motion.div
              key="moon"
              initial={{ rotate: 90, opacity: 0, scale: 0.5 }}
              animate={{ rotate: 0, opacity: 1, scale: 1 }}
              exit={{ rotate: -90, opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.25 }}
            >
              <FontAwesomeIcon icon={faMoon} className="text-indigo-600 text-lg" />
            </motion.div>
          )}
        </AnimatePresence>
      </button>
    </>
  );
};

export default ThemeToggle;
