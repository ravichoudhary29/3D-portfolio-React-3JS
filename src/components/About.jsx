import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
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
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p
        variants={(fadeIn('', '', 0.1), 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm Ravi Kumar, a Frontend Developer with over 5.5 years of experience
        in building responsive and high-performance web applications. My
        expertise lies in leveraging technologies such as React, Next.js,
        TypeScript, JavaScript, and Node.js, alongside UI-focused tools like
        Tailwind CSS, SASS, and Bootstrap. Currently, I’m developing an
        AI-powered Chrome extension that simplifies job applications, achieving
        a 4.7/5 rating on the Chrome Web Store. Previously, I engineered
        innovative shoppable video experiences for Shopify customers, enhancing
        user engagement and driving conversion rates. I am passionate about
        creating accessible and inclusive digital solutions while continuously
        keeping up with industry trends and best practices. My commitment to
        delivering impactful user experiences drives my work in Agile
        environments, where I collaborate effectively with cross-functional
        teams.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, 'about');
