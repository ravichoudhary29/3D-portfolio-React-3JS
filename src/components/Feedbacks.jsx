import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { fadeIn, textVariant } from '../utils/motion';
import { testimonials } from '../constants';
import AnimatedHeading from './AnimatedHeading';

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
  url,
}) => (
  <motion.div
    variants={fadeIn('', 'spring', index * 0.5, 0.75)}
    className="bg-tertiary p-8 rounded-3xl min-w-[300px] xs:min-w-[340px] max-w-[340px] flex-shrink-0 snap-center border border-accent/10 shadow-card card-glow gradient-border"
  >
    <div className="flex justify-between items-start">
      <p className="gradient-name font-black text-[48px] leading-none select-none">&ldquo;</p>
      <div className="flex gap-0.5 mt-2">
        {[...Array(5)].map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} className="text-yellow-400 text-[11px]" />
        ))}
      </div>
    </div>

    <div className="mt-1">
      <p className="text-text-secondary tracking-wider text-[16px] leading-[26px]">
        {testimonial}
      </p>

      <div className="mt-7 flex justify-between items-center gap-2">
        <div className="flex items-center gap-3">
          <img
            src={image}
            alt={`feedback_by-${name}`}
            className="w-11 h-11 rounded-full object-cover border-2 border-accent/20"
          />
          <div className="flex flex-col">
            <p className="text-text-primary font-medium text-[15px]">
              {name}
            </p>
            <p className="text-text-secondary text-[12px]">
              {designation}, {company}
            </p>
          </div>
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-text-secondary hover:text-accent transition-colors"
          aria-label={`${name}'s LinkedIn`}
        >
          <FontAwesomeIcon icon={faLinkedin} className="text-xl" />
        </a>
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-scroll on mobile
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 640;
    if (!isMobile) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => {
        const next = (prev + 1) % testimonials.length;
        const card = container.children[next];
        if (card) {
          container.scrollTo({
            left: card.offsetLeft - container.offsetLeft - 16,
            behavior: 'smooth',
          });
        }
        return next;
      });
    }, 4000);

    // Track scroll position for dot indicators
    const onScroll = () => {
      const scrollLeft = container.scrollLeft;
      const cardWidth = container.children[0]?.offsetWidth || 340;
      const gap = 28;
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(index, testimonials.length - 1));
    };
    container.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      clearInterval(interval);
      container.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <div>
          <p className={styles.sectionSubText}>What others say</p>
          <AnimatedHeading text="Testimonials." className={styles.sectionHeadText} />
        </div>
      </div>

      {/* Desktop: flex-wrap grid / Mobile: horizontal scroll with snap */}
      <div
        ref={scrollRef}
        className={`-mt-20 pb-14 ${styles.paddingX} flex gap-7 justify-center sm:flex-wrap overflow-x-auto sm:overflow-visible snap-x snap-mandatory scrollbar-hide`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {testimonials.map((testimonial, index) => (
          <FeedbackCard
            key={testimonial.name}
            index={index}
            {...testimonial}
          />
        ))}
      </div>

      {/* Dot indicators — mobile only */}
      <div className="flex sm:hidden justify-center gap-2 pb-6 -mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setActiveIndex(index);
              const container = scrollRef.current;
              const card = container?.children[index];
              if (card) {
                container.scrollTo({
                  left: card.offsetLeft - container.offsetLeft - 16,
                  behavior: 'smooth',
                });
              }
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              activeIndex === index
                ? 'bg-accent w-6'
                : 'bg-text-secondary/30'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, '');
