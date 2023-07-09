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
} from '../assets'

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
]

const services = [
    {
        title: 'Web Developer',
        icon: web,
    },
    {
        title: 'React Native Developer',
        icon: mobile,
    },
    {
        title: 'UI/UX Designer',
        icon: figma,
    },
]

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
]

const experiences = [
    {
        title: 'Web Developer',
        company_name: 'Huzzle(huzzle.app)',
        icon: huzzle,
        iconBg: '#383E56',
        date: 'May 2022 - Present',
        points: [
            'In my current role at Huzzle, I am developing a cutting-edge Google Chrome extension utilizing React.js and TypeScript',
            'This extension is designed from the ground up to streamline job applications for users, using advanced AI technologies.',
            'Leveraging Chat GPT, the extension automatically identifies form input fields, effectively interacting with a wide range of application interfaces',
            'For descriptive response fields, the extension harnesses the power of Chat GPT to generate articulate and contextually accurate answers, thereby transforming the users experience',
        ],
    },
    {
        title: 'Frontend Developer (Intern)',
        company_name: 'Showday(showday.io)',
        icon: showday,
        iconBg: '#E6DEDD',
        date: 'Dec 2022 - Apr 2022',
        points: [
            'As an intern at Showday, I utilized my Javascript, Next.js, Typescript skills to contribute to the development of an innovative application that creates shoppable videos for Shopify clients.',
            'My exposure to cutting-edge frontend libraries during the internship helped enhance the user interface, resulting in a seamless and efficient shopping experience for users.',
            'I also honed my proficiency in SASS for styling, assisting in developing an attractive and intuitive UI that drove customer engagement and boosted user satisfaction..',
        ],
    },

    {
        title: 'Assistant Engineer',
        company_name: 'Road Construction Department, Govt. of Bihar',
        icon: rcd,
        iconBg: '#383E56',
        date: 'Aug 2018 - Dec 2022',
        points: [
            'Constant Monitoring of Road Projects under Bihar Government almost 1300 kilometers of road.',
            'Checking of Estimates, Tender Documents, Cost Variations, Time Extensions, DPR etc.for Road Projects.',
            ' Awarding NOC for Retail Outlets for Seemanchal Wing comprising 10 districts under Government of Bihar.',
            'Frequently deployed as Patrolling Magistrate in government elections i.e. LS,RS etc. , flood monitoring officer (during rainy season).',
        ],
    },
]

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
]

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
        build_link: 'https://www.thecodingnomad.in',
    },
    {
        name: 'Uber 2.0 (React Native)',
        category: 'Featured React/React-Native Projects',
        description:
            'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
        tags: [
            {
                name: 'nextjs',
                color: 'blue-text-gradient',
            },
            {
                name: 'supabase',
                color: 'green-text-gradient',
            },
            {
                name: 'css',
                color: 'pink-text-gradient',
            },
        ],
        image: uberclone,
        build_link: 'https://google.com',
        source_code_link_github:
            'https://github.com/ravichoudhary29/Uber2.0-ReactNative',
    },
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
        build_link:
            'https://ravichoudhary29.github.io/ping-pong-game-VanillaJS/',
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
        build_link: 'https://netflix-2-0-ruddy.vercel.app/',
        source_code_link_github:
            'https://github.com/ravichoudhary29/netflix-2.0',
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
        build_link: 'https://netflix-2-0-ruddy.vercel.app/',
        source_code_link_github:
            'https://github.com/ravichoudhary29/netflix-2.0',
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
    {
        name: 'React Chrome Weather Extension',
        category: 'Other Important Projects',
        description:
            'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'typescript',
                color: 'green-text-gradient',
            },
            {
                name: 'material-ui',
                color: 'pink-text-gradient',
            },
        ],
        image: weather,
        build_link:
            'https://chrome.google.com/webstore/category/extensions?hl=en',
        source_code_link_github:
            'https://github.com/ravichoudhary29/React-Typescript-MUI-Chrome-Weather-Extension',
    },
    {
        name: 'Pomodoro Timer Chrome Extension',
        category: 'Other Important Projects',
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
        image: pomodoro,
        build_link:
            'https://chrome.google.com/webstore/category/extensions?hl=en',
        source_code_link_github:
            'https://github.com/ravichoudhary29/pomodoro-timer--chrome-extension',
    },
]

export { services, technologies, experiences, testimonials, projects }
