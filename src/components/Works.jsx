import React, { useState, useRef, useEffect } from 'react';
import { Tilt } from 'react-tilt';
import { motion, AnimatePresence } from 'framer-motion';

import { styles } from '../styles';
import { github, build } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import AnimatedHeading from './AnimatedHeading';

const RevealImage = ({ children, className }) => {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    setRevealed(false);
    const el = ref.current;
    if (!el) return;
    // Fallback: reveal after 600ms regardless
    const fallback = setTimeout(() => setRevealed(true), 600);
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setRevealed(true); obs.disconnect(); clearTimeout(fallback); } },
      { threshold: 0.05 }
    );
    obs.observe(el);
    return () => { obs.disconnect(); clearTimeout(fallback); };
  }, [children]);
  return (
    <div ref={ref} className={`${className} img-reveal ${revealed ? 'revealed' : ''}`}>
      {children}
    </div>
  );
};

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link_github,
  build_link,
  featured,
}) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Tilt
        options={{
          max: 25,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[340px] w-full border border-accent/10 shadow-card card-glow gradient-border"
      >
        <RevealImage className="relative w-full h-[220px] overflow-hidden rounded-2xl group">
          <img
            src={image}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          {/* Overlay on hover */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          {featured && (
            <span className="absolute bottom-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-accent text-white shadow-lg">
              Featured
            </span>
          )}
          <div className="absolute top-3 left-3 flex gap-2">
            <button
              onClick={() => window.open(source_code_link_github, '_blank')}
              className="bg-white/90 dark:bg-black/60 w-9 h-9 rounded-full flex justify-center items-center cursor-pointer shadow-md hover:scale-110 transition-transform backdrop-blur-sm"
              aria-label={`View ${name} source code`}
            >
              <img src={github} alt="" className="w-4 h-4 object-scale-down" />
            </button>
            <button
              onClick={() => window.open(build_link, '_blank')}
              className="bg-white/90 dark:bg-black/60 w-9 h-9 rounded-full flex justify-center items-center cursor-pointer shadow-md hover:scale-110 transition-transform backdrop-blur-sm"
              aria-label={`View ${name} live demo`}
            >
              <img src={build} alt="" className="w-4 h-4 object-contain" />
            </button>
          </div>
        </RevealImage>

        <div className="mt-5">
          <h3
            className="text-text-primary font-bold text-[20px] hover:text-accent cursor-pointer transition-colors hover-underline inline-block"
            onClick={() => window.open(build_link, '_blank')}
          >
            {name}
          </h3>
          <p className="mt-2 text-text-secondary text-[14px] leading-[22px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={`${name}-${tag.name}`}
              className="text-[12px] px-3 py-1 rounded-full bg-accent/10 text-accent font-medium"
            >
              {tag.name}
            </span>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const allCategories = ['All', 'Featured React/React-Native Projects', 'Top Tech Clones', 'Vanilla JS Projects'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <div>
        <p className={`${styles.sectionSubText}`}>My work</p>
        <AnimatedHeading text="Projects." className={styles.sectionHeadText} />
      </div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcase my skills and experience through
          real-world examples. Each project is briefly described with
          links to code repositories and live demos. They reflect my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.
        </motion.p>
      </div>

      {/* Category Filter Tabs */}
      <div className="mt-10 flex flex-wrap gap-3 justify-center">
        {allCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
              activeCategory === cat
                ? 'bg-accent text-white shadow-lg'
                : 'bg-tertiary text-text-secondary border border-accent/20 hover:border-accent/50'
            }`}
          >
            {cat === 'Featured React/React-Native Projects' ? 'React Projects' : cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 justify-items-center">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.name}
              index={index}
              {...project}
            />
          ))}
        </AnimatePresence>
      </div>
    </>
  );
};

export default SectionWrapper(Works, '');
