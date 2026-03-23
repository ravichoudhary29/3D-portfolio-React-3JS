import React, { useState } from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion, AnimatePresence } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css';

import { styles } from '../styles';
import { experiences } from '../constants';
import { SectionWrapper } from '../hoc';
import { useTheme } from '../context/ThemeContext';
import AnimatedHeading from './AnimatedHeading';

const isCurrent = (dateStr) => dateStr.toLowerCase().includes('present');
const MOBILE_LIMIT = 2;

const ExperienceCard = ({ experience, isDark }) => {
  const [expanded, setExpanded] = useState(false);
  const hasMore = experience.points.length > MOBILE_LIMIT;
  const visiblePoints = expanded ? experience.points : experience.points.slice(0, MOBILE_LIMIT);

  return (
    <VerticalTimelineElement
      contentStyle={{
        background: isDark ? 'rgb(29, 24, 54)' : 'rgb(255, 255, 255)',
        color: isDark ? '#fff' : '#0f172a',
        boxShadow: isDark ? '0 3px 10px rgba(0,0,0,0.3)' : '0 3px 10px rgba(0,0,0,0.08)',
        border: isDark
          ? isCurrent(experience.date)
            ? '1px solid rgba(145, 94, 239, 0.3)'
            : '1px solid rgba(145, 94, 239, 0.1)'
          : isCurrent(experience.date)
            ? '1px solid rgba(124, 58, 237, 0.3)'
            : '1px solid rgba(226, 232, 240, 1)',
      }}
      contentArrowStyle={{
        borderRight: isDark ? '7px solid #232631' : '7px solid #e2e8f0',
      }}
      date={experience.date}
      iconStyle={{
        background: experience.iconBg,
        boxShadow: isCurrent(experience.date)
          ? '0 0 0 4px rgb(var(--color-accent) / 0.3), inset 0 2px 0 rgba(0,0,0,0.08), 0 3px 0 4px rgba(0,0,0,0.05)'
          : undefined,
      }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div className="flex items-center gap-3 flex-wrap">
        <h3 className="text-text-primary text-[24px] font-bold">{experience.title}</h3>
        {isCurrent(experience.date) && (
          <span className="badge-current inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent/15 text-accent border border-accent/30">
            Current
          </span>
        )}
      </div>
      <p
        className="text-text-secondary text-[16px] font-semibold"
        style={{ margin: 0 }}
      >
        {experience.company_name}
      </p>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {/* Desktop: show all. Mobile: show limited with toggle */}
        <span className="hidden sm:contents">
          {experience.points.map((point, index) => (
            <li
              key={`exp-point-${index}`}
              className="text-text-secondary text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </span>

        <span className="sm:hidden contents">
          <AnimatePresence initial={false}>
            {visiblePoints.map((point, index) => (
              <motion.li
                key={`exp-point-m-${index}`}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-text-secondary text-[14px] pl-1 tracking-wider"
              >
                {point}
              </motion.li>
            ))}
          </AnimatePresence>
        </span>
      </ul>

      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="sm:hidden mt-3 text-accent text-[13px] font-medium hover:underline bg-transparent border-none p-0"
        >
          {expanded ? 'Show less' : `Show ${experience.points.length - MOBILE_LIMIT} more...`}
        </button>
      )}
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const { isDark } = useTheme();

  return (
    <>
      <div>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <AnimatedHeading text="Work Experience." className={styles.sectionHeadText} />
      </div>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline lineColor={isDark ? 'rgba(145, 94, 239, 0.3)' : 'rgba(148, 163, 184, 0.4)'}>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} isDark={isDark} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, 'work');
