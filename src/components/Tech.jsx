import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';
import { styles } from '../styles';
import { textVariant } from '../utils/motion';
import AnimatedHeading from './AnimatedHeading';

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    setIsMobile(mq.matches);
    const handler = (e) => setIsMobile(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return isMobile;
};

const skillLevels = {
  'React JS': 95, 'TypeScript': 90, 'Next JS': 88, 'JavaScript': 95,
  'Tailwind CSS': 92, 'Redux Toolkit': 85, 'Three JS': 70,
  'HTML 5': 98, 'CSS 3': 95, 'Node JS': 75, 'Git': 90, 'Figma': 80, 'Stripe': 72,
};

const skillCategories = {
  'Languages': ['HTML 5', 'CSS 3', 'JavaScript', 'TypeScript'],
  'Frameworks & Libraries': ['React JS', 'Next JS', 'Redux Toolkit', 'Tailwind CSS', 'Three JS'],
  'Tools & Platforms': ['Node JS', 'Git', 'Figma', 'Stripe'],
};

const SkillBar = ({ name, level, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="flex items-center gap-3 w-full">
      <span className="text-text-secondary text-[11px] w-[70px] text-right flex-shrink-0">{name}</span>
      <div className="flex-1 h-[6px] bg-tertiary rounded-full overflow-hidden border border-accent/5">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${level}%` } : {}}
          transition={{ duration: 1, delay: delay * 0.1, ease: 'easeOut' }}
          className="h-full rounded-full bg-gradient-to-r from-accent to-cyan-400"
        />
      </div>
      <span className="text-text-secondary/50 text-[10px] w-[30px]">{level}%</span>
    </div>
  );
};

const Tech = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <div>
        <p className={styles.sectionSubText}>What I work with</p>
        <AnimatedHeading text="Technologies." className={styles.sectionHeadText} />
      </div>

      <div className="mt-14 flex flex-col gap-12">
        {Object.entries(skillCategories).map(([category, names]) => {
          const categoryTechs = names
            .map((name) => technologies.find((t) => t.name === name))
            .filter(Boolean);

          return (
            <div key={category}>
              <h3 className="text-accent font-semibold text-[16px] mb-5 uppercase tracking-wider text-center">
                {category}
              </h3>
              {isMobile ? (
                <>
                  <div className="flex flex-row flex-wrap justify-center gap-6 mb-4">
                    {categoryTechs.map((technology) => (
                      <div className="w-20 h-20" key={technology.name}>
                        <div className="w-full h-full flex flex-col items-center justify-center bg-tertiary rounded-2xl border border-accent/10 p-2 card-glow">
                          <img
                            src={technology.icon}
                            alt={technology.name}
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-col gap-2 mt-2 px-2">
                    {categoryTechs.map((tech, i) => (
                      <SkillBar
                        key={tech.name}
                        name={tech.name.replace(' JS', '').replace(' CSS', '')}
                        level={skillLevels[tech.name] || 75}
                        delay={i}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <div className="flex flex-row flex-wrap justify-center gap-8">
                  {categoryTechs.map((technology) => (
                    <div className="w-28 h-28" key={technology.name}>
                      <BallCanvas icon={technology.icon} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, '');
