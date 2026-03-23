import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import { socialLinks } from '../constants';
import MagneticButton from './MagneticButton';

const roles = [
  'Frontend Developer',
  'React Specialist',
  'UI Engineer',
  'Problem Solver',
];

const useTypingEffect = (words, typingSpeed = 100, deletingSpeed = 60, pauseTime = 2000) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout;

    if (!isDeleting && text === currentWord) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

  return text;
};

const Hero = () => {
  const typedText = useTypingEffect(roles);
  const { scrollY } = useScroll();

  // Parallax: text moves up faster, 3D model stays grounded
  const textY = useTransform(scrollY, [0, 500], [0, -120]);
  const textOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  const modelY = useTransform(scrollY, [0, 500], [0, 50]);
  const scrollIndicatorOpacity = useTransform(scrollY, [0, 200], [1, 0]);

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-accent" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I'm <span className="gradient-name">Ravi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2`}>
            I'm a{' '}
            <span className="text-accent font-semibold">
              {typedText}
              <span className="typing-cursor bg-accent">&nbsp;</span>
            </span>
            <br className="sm:block hidden" />
            blending design and technology to create compelling user interfaces.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-8 flex gap-4 flex-wrap"
          >
            <MagneticButton strength={0.2}>
              <a
                href={socialLinks.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer inline-block px-6 py-3 bg-accent text-white rounded-lg font-medium hover:shadow-lg hover:shadow-accent/25 transition-all duration-300 text-sm sm:text-base"
              >
                Download Resume
              </a>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <a
                href="#contact"
                className="inline-block px-6 py-3 border border-accent text-accent rounded-lg font-medium hover:bg-accent hover:text-white transition-all duration-300 text-sm sm:text-base"
              >
                Contact Me
              </a>
            </MagneticButton>
          </motion.div>

        </div>
      </motion.div>

      <motion.div style={{ y: modelY }} className="absolute inset-0">
        <ComputersCanvas />
      </motion.div>

      <motion.div
        style={{ opacity: scrollIndicatorOpacity }}
        className="absolute xs:bottom-10 bottom-32 w-full flex justify-center z-10"
      >
        <a href="#about" aria-label="Scroll to about section">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
