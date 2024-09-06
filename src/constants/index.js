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
  showday,
  rcd,
  huzzle,
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
  // sass,
  // github,
  netflix,
  chatgpt,
  weather,
  pomodoro,
  chandan,
  amit,
  ravi2,
} from '../assets';

export const navLinks = [
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
    title: 'Software Developer',
    icon: web,
  },
  // {
  //     title: 'React Native Developer',
  //     icon: mobile,
  // },
  // {
  //     title: 'UI/UX Designer',
  //     icon: figma,
  // },
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
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'Stripe',
    icon: stripe,
  },
  // {
  //     name: 'GitHub',
  //     icon: github,
  // },
  // {
  //     name: 'SASS',
  //     icon: sass,
  // },
  // {
  //     name: 'MongoDB',
  //     icon: mongodb,
  // },

  // {
  //     name: 'docker',
  //     icon: docker,
  // },
];

const experiences = [
  {
    title: 'Software Developer',
    company_name: 'Huzzle.app (London)',
    icon: huzzle,
    iconBg: '#383E56',
    date: 'May 2023 - Present',
    points: [
      'Spearheaded the development of an AI-powered Google Chrome extension, featured and verified on the Chrome Web Store, achieving a 4.7/5 rating. Empowered 1000+ societies and 100,000+ students to autofill job applications with a single click.',
      'Orchestrated critical bug fixes and AI-powered features, tripling the user base and positioning Huzzle as the leading career platform with over 80,000 jobs for graduates.',
      'Developed highly reusable UI components, improving scalability and maintainability. Enhanced platform usability for society managers, recruiters, and graduates, resulting in 4X growth in job postings.',
      'Collaborated with cross-functional Agile teams, optimizing product performance and increasing speed and efficiency. Focused on accessibility and inclusive design, driving higher user engagement.',
    ],
  },
  {
    title: 'React Frontend Developer',
    company_name: 'Showday.io (USA)',
    icon: showday,
    iconBg: '#E6DEDD',
    date: 'May 2022-May 2023',
    points: [
      'Engineered a product recommendation engine that boosted platform conversion rates by 25% for an interactive live shopping experience.',
      'Introduced frontend optimizations, reducing page load times by 30%, which significantly improved overall user experience.',
      'Developed reusable components and optimized front-end architecture, resulting in better performance and scalability. Increased user engagement by 50% through interactive and personalized features.',
      'Maintained platform stability by resolving critical bugs, ensuring 99% uptime.',
    ],
  },
  {
    title: 'React Frontend Developer Intern',
    company_name: 'Showday.io (USA)',
    icon: showday,
    iconBg: '#E6DEDD',
    date: 'Dec 2021-Apr 2022',
    points: [
      'Contributed to frontend features that improved user satisfaction by 15%.',
      'Participated in codebase enhancements, reducing code complexity by 20%, improving maintainability and performance.',
      'Enhanced the UI using cutting-edge frontend libraries and SCSS, which drove customer engagement and satisfaction.',
    ],
  },
  {
    title: 'Assistant Engineer (Sub Divisional Officer)',
    company_name: 'Road Construction Department, Govt. of Bihar',
    icon: rcd,
    iconBg: '#383E56',
    date: 'Aug 2018-Nov 2021',
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
      'During their internship, this individual demonstrated a solid grasp of our codebase, swiftly fixing bugs and adding new features to our Next.js application. Their contribution was invaluable to our shoppable video application.',
    name: 'Chandan Chaudhary',
    designation: 'Tech Lead',
    company: 'Showday',
    image: chandan,
    url: 'https://www.linkedin.com/in/chaudharychandan/',
  },
  {
    testimonial:
      'With their outstanding skills in React and TypeScript, this developer is making significant strides in building a GPT-powered Chrome extension for job application autofill. Their dedication and talent are remarkable.',
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
    category: 'Featured React/React-Native Projects',
    description:
      'Built an advanced React Admin Dashboard featuring diverse UI components, a full-featured calendar, kanban board, WYSIWYG editor, color picker, and multiple dynamic charts, utilizing Syncfusions robust UI suite.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'syncfusion',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
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
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'sanity',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: portfolio,
    source_code_link_github:
      'https://github.com/ravichoudhary29/personalportfolio',
    build_link: 'https://personalportfolio-lyart.vercel.app/',
  },
  //   {
  //     name: 'Uber 2.0 (React Native)',
  //     category: 'Featured React/React-Native Projects',
  //     description:
  //       'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
  //     tags: [
  //       {
  //         name: 'nextjs',
  //         color: 'blue-text-gradient',
  //       },
  //       {
  //         name: 'supabase',
  //         color: 'green-text-gradient',
  //       },
  //       {
  //         name: 'css',
  //         color: 'pink-text-gradient',
  //       },
  //     ],
  //     image: uberclone,
  //     build_link: 'https://google.com',
  //     source_code_link_github:
  //       'https://github.com/ravichoudhary29/Uber2.0-ReactNative',
  //   },
  {
    name: 'E-commerce Website',
    category: 'Vanilla JS Projects',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
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
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
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
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'html',
        color: 'blue-text-gradient',
      },
      {
        name: 'css',
        color: 'green-text-gradient',
      },
      {
        name: 'javascript',
        color: 'pink-text-gradient',
      },
    ],
    image: pingpong,
    build_link: 'https://ravichoudhary29.github.io/ping-pong-game-VanillaJS/',
    source_code_link_github:
      'https://github.com/ravichoudhary29/ping-pong-game-VanillaJS',
  },
  // {
  //     name: 'Tesla Landing Page',
  //     category: 'Vanilla JS Projects',
  //     description:
  //         'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
  //     tags: [
  //         {
  //             name: 'html',
  //             color: 'blue-text-gradient',
  //         },
  //         {
  //             name: 'css',
  //             color: 'green-text-gradient',
  //         },
  //         // {
  //         //     name: 'javascript',
  //         //     color: 'pink-text-gradient',
  //         // },
  //     ],
  //     image: tesla_landing,
  //     build_link: 'https://ravichoudhary29.github.io/tesla-VanillaJS/',
  //     source_code_link_github:
  //         'https://github.com/ravichoudhary29/ping-pong-game-VanillaJS',
  // },
  {
    name: 'Netflix 2.0 Clone',
    category: 'Top Tech Clones',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'axios',
        color: 'pink-text-gradient',
      },
      {
        name: 'redux',
        color: 'blue-text-gradient',
      },
    ],
    image: netflix,
    build_link: 'https://netflix-2-git-main-veganravi.vercel.app/',
    source_code_link_github: 'https://github.com/ravichoudhary29/netflix-2.0',
  },
  {
    name: 'Instagram 2.0 Clone',
    category: 'Top Tech Clones',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'firebase',
        color: 'pink-text-gradient',
      },
      {
        name: 'headlessui',
        color: 'blue-text-gradient',
      },
    ],
    image: instagram,
    build_link: 'https://instagram-2-swart.vercel.app/',
    source_code_link_github: 'https://github.com/ravichoudhary29/netflix-2.0',
  },
  {
    name: 'ChatGPT 2.0 Clone',
    category: 'Top Tech Clones',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'firebase',
        color: 'pink-text-gradient',
      },
      {
        name: 'google-auth',
        color: 'blue-text-gradient',
      },
    ],
    image: chatgpt,
    build_link: 'https://chat-gpt-two-kappa.vercel.app/',
    source_code_link_github: 'https://github.com/ravichoudhary29/chat-GPT',
  },
];

export { services, technologies, experiences, testimonials, projects };
