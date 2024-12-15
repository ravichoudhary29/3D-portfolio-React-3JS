import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { styles } from '../styles';
import { navLinks } from '../constants';
import { logo, menu, close } from '../assets';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
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
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Ravi &nbsp;
            <span className="sm:block hidden">|&nbsp; 3D-Portfolio</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          <a
            href="https://github.com/ravichoudhary29"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="text-white hover:text-secondary text-2xl mr-4"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/ravikumar2901/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-white hover:text-secondary text-2xl mr-4"
            />
          </a>
          <a
            href="https://www.instagram.com/myself.ravikumar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-white hover:text-secondary text-2xl mr-4"
            />
          </a>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              {console.log(link)}
              <a
                target={link.id === 'resume' ? '_blank' : ''}
                rel={link.id === 'resume' ? 'noopener noreferrer' : ''}
                href={
                  link.id === 'resume'
                    ? 'https://docs.google.com/document/d/1Iun8kXtpOBtPv8iBQfpO1V69KdbHS7DMOTwWshA0mtg/edit?usp=sharing'
                    : `#${link.id}`
                }
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? 'hidden' : 'flex'
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl flex-col items-start`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              <a
                href="https://github.com/ravichoudhary29"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-white hover:text-secondary text-2xl"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/thecodingnomad/"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-white hover:text-secondary text-2xl"
                />
              </a>
              <a
                href="https://www.instagram.com/thecodingnomad/"
                target="_blank"
                rel="noopener noreferrer"
                className="mb-4"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-white hover:text-secondary text-2xl"
                />
              </a>
              <a
                href="/Ravi_Kumar.pdf"
                target="_blank"
                rel="noopener noreferrer"
                title="Resume"
              >
                <FontAwesomeIcon
                  icon={faFile}
                  className="text-white hover:text-secondary text-2xl"
                />
              </a>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? 'text-white' : 'text-secondary'
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
