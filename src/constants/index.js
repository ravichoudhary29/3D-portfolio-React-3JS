import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  rcd,
  huzzle,
  deloitte,
  nextiva,
  next,
  stripe,
  dashboard,
  build,
  portfolio,
  uberclone,
  ecommerce,
  gym,
  pingpong,
  tesla_landing,
  instagram,
  netflix,
  chatgpt,
  weather,
  pomodoro,
  chandan,
  amit,
  ravi2,
} from '../assets';

// ===== Centralized Social Links =====
export const socialLinks = {
  github: 'https://github.com/ravichoudhary29',
  linkedin: 'https://www.linkedin.com/in/ravikumar2901/',
  instagram: 'https://www.instagram.com/myself.ravikumar/',
  resume: '/Ravi_Kumar_Resume.docx',
  resumeView:
    'https://docs.google.com/document/d/1C7W7G2b_BlVTAj70Ml0N5KHkuvIbyi8c/edit',
};

export const navLinks = [
  {
    id: 'resume',
    title: 'View Resume',
  },
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: web,
  },
  {
    title: 'React Specialist',
    icon: mobile,
  },
  {
    title: 'UI/UX Enthusiast',
    icon: creator,
  },
  {
    title: 'AI Integration',
    icon: backend,
  },
];

const yearsOfExp = Math.max(1, new Date().getFullYear() - 2018);

const stats = [
  { value: yearsOfExp, suffix: '+', label: 'Years Experience' },
  { value: 20, suffix: '+', label: 'Projects Built' },
  { value: 4, suffix: '', label: 'Companies' },
  { value: 100, suffix: 'K+', label: 'Users Impacted' },
];

const technologies = [
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Next JS',
    icon: next,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Figma',
    icon: figma,
  },
  {
    name: 'Stripe',
    icon: stripe,
  },
];

const experiences = [
  {
    title: 'Frontend Developer',
    company_name: 'Deloitte USI',
    icon: deloitte,
    iconBg: '#E6DEDD',
    date: 'Mar 2025 - Present',
    points: [
      'Deployed across 3+ enterprise projects delivering end-to-end UI implementation for high-impact client engagements.',
      'Built an Agentic Data Modernization Platform from scratch, enabling AI-driven data transformation workflows for the organization.',
      'Developed an Agentic Pipeline with human-in-the-loop capabilities for an intelligent Email Analyzer, streamlining automated decision-making.',
      'Engineered complex form features with seamless backend API integrations, improving data collection efficiency across Vision-to-Value projects.',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'Nextiva (Product-Based Startup)',
    icon: nextiva,
    iconBg: '#FFFFFF',
    date: 'Dec 2024 - Feb 2025',
    points: [
      'Developed and shipped multiple user interface features, directly enhancing product usability and user experience.',
      'Identified and resolved critical UI bugs, ensuring a polished and seamless interface across the platform.',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'Huzzle.app (London, Remote)',
    icon: huzzle,
    iconBg: '#383E56',
    date: 'Jul 2020 - Oct 2024',
    points: [
      'Spearheaded the development of an AI-powered Google Chrome extension, featured and verified on the Chrome Web Store, achieving a 4.7/5 rating. Empowered 1000+ societies and 100,000+ students to autofill job applications with a single click.',
      'Orchestrated critical bug fixes and AI-powered features, tripling the user base and positioning Huzzle as the leading career platform with over 80,000 jobs for graduates.',
      'Developed highly reusable UI components, improving scalability and maintainability. Enhanced platform usability for society managers, recruiters, and graduates, resulting in 4X growth in job postings.',
      'Collaborated with cross-functional Agile teams, optimizing product performance and increasing speed and efficiency. Focused on accessibility and inclusive design, driving higher user engagement.',
      'Performed code reviews and ensured adherence to SDLC standards, consistently contributing to product excellence across the platform.',
    ],
  },
  {
    title: 'Assistant Engineer (Sub Divisional Officer)',
    company_name: 'Road Construction Department, Govt. of Bihar',
    icon: rcd,
    iconBg: '#383E56',
    date: 'Aug 2018 - Jun 2020',
    points: [
      'Selected through the All India GATE exam, scoring above the 99th percentile twice, for overseeing 1,300 km of road projects in South Bihar.',
      'Handled the complete approval process for DPR, tender documents, and other contractual aspects, ensuring timely and within-budget project execution.',
      'Frequently deployed as Patrolling Magistrate during elections and as a flood monitoring officer, highlighting multitasking and adaptability.',
    ],
  },
];

const testimonials = [
  {
    testimonial:
      'During his tenure as a Frontend developer, Ravi demonstrated a solid grasp of our codebase, swiftly fixing bugs and adding new features to our Next.js application. Their contribution was invaluable to our shoppable video application.',
    name: 'Chandan Chaudhary',
    designation: 'Head of Software Engineering',
    company: 'Huzzle',
    image: chandan,
    url: 'https://www.linkedin.com/in/chaudharychandan/',
  },
  {
    testimonial:
      'With his outstanding skills in React and TypeScript, this developer is making significant strides in building a GPT-powered Chrome extension for job application autofill. Their dedication and talent are remarkable.',
    name: 'Amit Choudhary',
    designation: 'Founder & CTO',
    company: 'Huzzle',
    image: amit,
    url: 'https://www.linkedin.com/in/amit-choudhary-baa919101/',
  },
  {
    testimonial:
      'This person has a unique ability to quickly learn and adapt to new challenges. Their problem-solving skills are exceptional, always bringing innovative solutions to the table. Their rapid adaptability is truly commendable.',
    name: 'Ravi Kumar',
    designation: 'Sr. Backend Engineer',
    company: 'Fandom Future',
    image: ravi2,
    url: 'https://www.linkedin.com/in/ravi-kumar-yadav-058781b4/',
  },
];

const projects = [
  {
    name: 'React Dashboard',
    featured: true,
    category: 'Featured React/React-Native Projects',
    description:
      'An advanced React Admin Dashboard featuring a full-featured calendar, kanban board, WYSIWYG editor, color picker, and multiple dynamic charts — built with Syncfusion\'s robust UI suite.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'syncfusion', color: 'green-text-gradient' },
      { name: 'tailwind', color: 'pink-text-gradient' },
    ],
    image: dashboard,
    source_code_link_github:
      'https://github.com/ravichoudhary29/Admin-Dashboard-Reactjs',
    build_link: 'https://admin-dashboard-reactjs.vercel.app/',
  },
  {
    name: 'Personal Portfolio',
    category: 'Featured React/React-Native Projects',
    description:
      'A modern portfolio website built with React and Sanity CMS, featuring smooth animations, dynamic content management, and a responsive design showcasing projects and skills.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'sanity', color: 'green-text-gradient' },
      { name: 'tailwind', color: 'pink-text-gradient' },
    ],
    image: portfolio,
    source_code_link_github:
      'https://github.com/ravichoudhary29/personalportfolio',
    build_link: 'https://personalportfolio-lyart.vercel.app/',
  },
  {
    name: 'E-commerce Website',
    category: 'Vanilla JS Projects',
    description:
      'A fully functional e-commerce storefront built with vanilla JavaScript, featuring product listings, shopping cart functionality, responsive design, and a smooth checkout experience.',
    tags: [
      { name: 'html', color: 'blue-text-gradient' },
      { name: 'css', color: 'green-text-gradient' },
      { name: 'javascript', color: 'pink-text-gradient' },
    ],
    image: ecommerce,
    build_link:
      'https://ravichoudhary29.github.io/E-commerce-VanillaJS/index.html',
    source_code_link_github:
      'https://github.com/ravichoudhary29/E-commerce-VanillaJS',
  },
  {
    name: 'Gym Website',
    category: 'Vanilla JS Projects',
    description:
      'A modern gym landing page with membership plans, class schedules, trainer profiles, and a contact form — featuring smooth scroll animations and a fully responsive layout.',
    tags: [
      { name: 'html', color: 'blue-text-gradient' },
      { name: 'css', color: 'green-text-gradient' },
      { name: 'javascript', color: 'pink-text-gradient' },
    ],
    image: gym,
    build_link: 'https://ravichoudhary29.github.io/gym-website-VanillaJS/',
    source_code_link_github:
      'https://github.com/ravichoudhary29/gym-website-VanillaJS',
  },
  {
    name: 'Ping Pong Game',
    category: 'Vanilla JS Projects',
    description:
      'A classic ping pong arcade game built with vanilla JavaScript and canvas API, featuring AI opponent, score tracking, paddle physics, and smooth 60fps gameplay.',
    tags: [
      { name: 'html', color: 'blue-text-gradient' },
      { name: 'css', color: 'green-text-gradient' },
      { name: 'javascript', color: 'pink-text-gradient' },
    ],
    image: pingpong,
    build_link: 'https://ravichoudhary29.github.io/ping-pong-game-VanillaJS/',
    source_code_link_github:
      'https://github.com/ravichoudhary29/ping-pong-game-VanillaJS',
  },
  {
    name: 'Netflix 2.0 Clone',
    featured: true,
    category: 'Top Tech Clones',
    description:
      'A pixel-perfect Netflix clone with TMDB API integration, featuring movie browsing by genre, trailer playback, search functionality, and a responsive UI powered by Redux state management.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'tailwind', color: 'green-text-gradient' },
      { name: 'axios', color: 'pink-text-gradient' },
      { name: 'redux', color: 'blue-text-gradient' },
    ],
    image: netflix,
    build_link: 'https://netflix-2-git-main-veganravi.vercel.app/',
    source_code_link_github: 'https://github.com/ravichoudhary29/netflix-2.0',
  },
  {
    name: 'Instagram 2.0 Clone',
    category: 'Top Tech Clones',
    description:
      'A full-featured Instagram clone with real-time posts, stories, likes, comments, and user authentication — built with React, Firebase backend, and Headless UI components.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'tailwind', color: 'green-text-gradient' },
      { name: 'firebase', color: 'pink-text-gradient' },
      { name: 'headlessui', color: 'blue-text-gradient' },
    ],
    image: instagram,
    build_link: 'https://instagram-2-swart.vercel.app/',
    source_code_link_github:
      'https://github.com/ravichoudhary29/instagram-2.0',
  },
  {
    name: 'ChatGPT 2.0 Clone',
    category: 'Top Tech Clones',
    description:
      'A ChatGPT-inspired conversational AI interface with Google authentication, real-time message streaming, chat history, and a polished dark UI — powered by Firebase and OpenAI API.',
    tags: [
      { name: 'react', color: 'blue-text-gradient' },
      { name: 'tailwind', color: 'green-text-gradient' },
      { name: 'firebase', color: 'pink-text-gradient' },
      { name: 'google-auth', color: 'blue-text-gradient' },
    ],
    image: chatgpt,
    build_link: 'https://chat-gpt-two-kappa.vercel.app/',
    source_code_link_github: 'https://github.com/ravichoudhary29/chat-GPT',
  },
];

export { services, stats, technologies, experiences, testimonials, projects };
