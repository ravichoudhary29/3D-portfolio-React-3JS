import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faArrowUp, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { socialLinks } from '../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#work' },
    { label: 'Projects', href: '#work' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="w-full bg-tertiary pt-12 pb-6 mt-0">
      <div className="max-w-7xl mx-auto px-6 sm:px-16">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-10">
          {/* Brand */}
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-text-primary font-bold text-xl">Ravi Kumar</p>
            <p className="text-text-secondary text-sm mt-2 max-w-[220px] text-center sm:text-left">
              Frontend Developer crafting high-performance web experiences with modern technologies.
            </p>
            <div className="flex gap-4 mt-5">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-text-secondary hover:text-accent hover:bg-accent/20 transition-all duration-300"
                aria-label="GitHub"
              >
                <FontAwesomeIcon icon={faGithub} className="text-sm" />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-text-secondary hover:text-accent hover:bg-accent/20 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} className="text-sm" />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-accent/10 flex items-center justify-center text-text-secondary hover:text-accent hover:bg-accent/20 transition-all duration-300"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-sm" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</p>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-accent transition-colors duration-300 hover-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={socialLinks.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary text-sm hover:text-accent transition-colors duration-300 hover-underline"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center sm:items-start">
            <p className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-4">Get In Touch</p>
            <a
              href="mailto:mailmeonravikumar@gmail.com"
              className="text-text-secondary text-sm hover:text-accent transition-colors duration-300 flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faEnvelope} className="text-accent text-xs" />
              mailmeonravikumar@gmail.com
            </a>
            <p className="text-text-secondary text-sm mt-2">
              Bengaluru, Karnataka, India
            </p>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mt-5 flex items-center gap-2 text-accent text-sm font-medium hover:gap-3 transition-all duration-300 cursor-pointer bg-transparent border-none"
            >
              <FontAwesomeIcon icon={faArrowUp} className="text-xs" />
              Back to top
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-accent/10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-text-secondary text-xs">
            &copy; {currentYear} Ravi Kumar. All rights reserved.
          </p>
          <p className="text-text-secondary text-xs">
            Built with React, Three.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
