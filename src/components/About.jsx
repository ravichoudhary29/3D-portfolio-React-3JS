import React, { useEffect, useRef, useState } from 'react';
import { Tilt } from 'react-tilt';
import { motion, useInView } from 'framer-motion';

import { styles } from '../styles';
import { services, stats } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import AnimatedHeading from './AnimatedHeading';
import { raviProfile } from '../assets';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[220px] w-full">
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-8 min-h-[240px] flex justify-evenly items-center flex-col border border-accent/10 card-glow gradient-border"
      >
        <img
          src={icon}
          alt={title}
          className="w-16 h-16 object-contain"
        />
        <h3 className="text-text-primary text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const AnimatedCounter = ({ value, suffix = '', label }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <div ref={ref} className="stat-card flex flex-col items-center p-6 bg-tertiary rounded-2xl border border-accent/10 min-w-[140px] card-glow">
      <span className="text-accent font-black text-[40px] leading-tight">
        {count}{suffix}
      </span>
      <span className="text-text-secondary text-[14px] mt-2 text-center">{label}</span>
    </div>
  );
};

const About = () => {
  return (
    <>
      <div>
        <p className={styles.sectionSubText}>Introduction</p>
        <AnimatedHeading text="Overview." className={styles.sectionHeadText} />
      </div>
      <div className="mt-6 flex flex-col md:flex-row gap-8 items-start">
        <motion.div
          variants={fadeIn('right', 'spring', 0.2, 0.75)}
          className="flex-shrink-0 mx-auto md:mx-0"
        >
          <div className="profile-ring w-[140px] h-[140px]">
            <img
              src={raviProfile}
              alt="Ravi Kumar"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
        <motion.p
          variants={fadeIn('', '', 0.1, 1)}
          className="text-text-secondary text-[17px] leading-[30px]"
        >
          I'm Ravi Kumar, a Frontend Developer with over 7+ years of experience
          in building responsive and high-performance web applications. My
          expertise lies in leveraging technologies such as React, Next.js,
          TypeScript, JavaScript, and Node.js, alongside UI-focused tools like
          Tailwind CSS, SASS, and Material UI. Currently at Deloitte USI, I'm
          building enterprise-grade Agentic AI platforms. Previously, I spent
          4+ years at Huzzle (London) developing an AI-powered Chrome extension
          that achieved a 4.7/5 rating and empowered 100,000+ students to
          autofill job applications. I am passionate about creating accessible
          and inclusive digital solutions while delivering impactful user
          experiences in Agile environments.
        </motion.p>
      </div>

      {/* Social Proof Bar */}
      <motion.div
        variants={fadeIn('up', 'spring', 0.3, 0.75)}
        className="mt-10 flex items-center justify-center gap-6 sm:gap-10 py-4 px-6 rounded-2xl bg-tertiary border border-accent/10"
      >
        {[
          { num: '7+', label: 'Years Experience' },
          { num: '4', label: 'Companies' },
          { num: '100K+', label: 'Users Impacted' },
        ].map((item, i) => (
          <React.Fragment key={item.label}>
            {i > 0 && <div className="w-[1px] h-8 bg-accent/15" />}
            <div className="flex flex-col items-center">
              <span className="text-accent font-black text-[22px] sm:text-[28px] leading-tight">{item.num}</span>
              <span className="text-text-secondary text-[11px] sm:text-[13px] mt-1">{item.label}</span>
            </div>
          </React.Fragment>
        ))}
      </motion.div>

      {/* Stats Section */}
      <div className="mt-12 flex flex-wrap gap-6 justify-center">
        {stats.map((stat, index) => (
          <AnimatedCounter key={index} {...stat} />
        ))}
      </div>

      <div className="mt-16 flex flex-wrap gap-8 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
