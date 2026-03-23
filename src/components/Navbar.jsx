import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks, socialLinks } from '../constants';
import { logo, menu, close } from '../assets';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';
import MagneticButton from './MagneticButton';

const sectionIds = ['about', 'work', 'contact'];

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Intersection Observer for active section highlighting
  useEffect(() => {
    const observers = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const match = navLinks.find((link) => link.id === id);
            if (match) setActive(match.title);
          }
        },
        { rootMargin: '-40% 0px -50% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 transition-all duration-300 ${
        scrolled
          ? 'bg-primary/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-12 h-12 object-contain rounded-2xl"
          />
          <p className="text-text-primary text-[18px] font-bold cursor-pointer flex">
            Ravi &nbsp;
            <span className="sm:block hidden">|&nbsp; Portfolio</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-8 items-center">
          <MagneticButton>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-text-secondary hover:text-accent text-xl transition-colors duration-300"
              />
            </a>
          </MagneticButton>
          <MagneticButton>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-text-secondary hover:text-accent text-xl transition-colors duration-300"
            />
          </a>
          </MagneticButton>
          <MagneticButton>
          <a
            href={socialLinks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-text-secondary hover:text-accent text-xl transition-colors duration-300"
            />
          </a>
          </MagneticButton>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`relative ${
                active === link.title ? 'text-accent' : 'text-text-secondary'
              } hover:text-accent text-[16px] font-medium cursor-pointer transition-colors duration-300`}
              onClick={() => setActive(link.title)}
            >
              <a
                target={link.id === 'resume' ? '_blank' : ''}
                rel={link.id === 'resume' ? 'noopener noreferrer' : ''}
                href={
                  link.id === 'resume'
                    ? socialLinks.resume
                    : `#${link.id}`
                }
              >
                {link.title}
              </a>
              {active === link.title && link.id !== 'resume' && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 right-0 h-[2px] bg-accent rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center gap-3">
          <ThemeToggle />
          <button
            aria-label={toggle ? 'Close menu' : 'Open menu'}
            aria-expanded={toggle}
            onClick={() => setToggle(!toggle)}
            onKeyDown={(e) => e.key === 'Escape' && setToggle(false)}
            className="w-[28px] h-[28px] cursor-pointer bg-transparent border-none"
          >
            <img
              src={toggle ? close : menu}
              alt=""
              className="w-full h-full object-contain"
            />
          </button>
          <AnimatePresence>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.2 }}
                role="menu"
                className="p-6 glass absolute top-20 right-0 mx-4 my-2 min-w-[200px] z-10 rounded-xl flex flex-col items-start"
              >
                <ul className="list-none flex justify-end items-start flex-col gap-4 w-full">
                  <div className="flex gap-5 mb-4">
                    <a
                      href={socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="text-text-secondary hover:text-accent text-2xl transition-colors"
                      />
                    </a>
                    <a
                      href={socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        className="text-text-secondary hover:text-accent text-2xl transition-colors"
                      />
                    </a>
                    <a
                      href={socialLinks.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                    >
                      <FontAwesomeIcon
                        icon={faInstagram}
                        className="text-text-secondary hover:text-accent text-2xl transition-colors"
                      />
                    </a>
                    <a
                      href="/Ravi_Kumar.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Resume"
                      aria-label="Resume"
                    >
                      <FontAwesomeIcon
                        icon={faFile}
                        className="text-text-secondary hover:text-accent text-2xl transition-colors"
                      />
                    </a>
                  </div>
                  {navLinks.map((link) => (
                    <li
                      key={link.id}
                      role="menuitem"
                      className={`${
                        active === link.title ? 'text-accent font-semibold' : 'text-text-secondary'
                      } font-poppins font-medium cursor-pointer text-[16px] hover:text-accent transition-colors flex items-center gap-2`}
                      onClick={() => {
                        setToggle(false);
                        setActive(link.title);
                      }}
                    >
                      {active === link.title && link.id !== 'resume' && (
                        <span className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                      )}
                      <a
                        href={
                          link.id === 'resume'
                            ? socialLinks.resume
                            : `#${link.id}`
                        }
                        target={link.id === 'resume' ? '_blank' : undefined}
                        rel={link.id === 'resume' ? 'noopener noreferrer' : undefined}
                      >
                        {link.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
