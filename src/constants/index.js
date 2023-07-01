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
    // sass,
    // github,
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
]

const testimonials = [
    {
        testimonial:
            'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
        name: 'Sara Lee',
        designation: 'CFO',
        company: 'Acme Co',
        image: 'https://randomuser.me/api/portraits/women/4.jpg',
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: 'Chris Brown',
        designation: 'COO',
        company: 'DEF Corp',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: 'Lisa Wang',
        designation: 'CTO',
        company: '456 Enterprises',
        image: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
]

const projects = [
    {
        name: 'Car Rent',
        description:
            'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'mongodb',
                color: 'green-text-gradient',
            },
            {
                name: 'tailwind',
                color: 'pink-text-gradient',
            },
        ],
        image: carrent,
        source_code_link: 'https://github.com/',
    },
    {
        name: 'Job IT',
        description:
            'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
        tags: [
            {
                name: 'react',
                color: 'blue-text-gradient',
            },
            {
                name: 'restapi',
                color: 'green-text-gradient',
            },
            {
                name: 'scss',
                color: 'pink-text-gradient',
            },
        ],
        image: jobit,
        source_code_link: 'https://github.com/',
    },
    {
        name: 'Trip Guide',
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
        image: tripguide,
        source_code_link: 'https://github.com/',
    },
]

export { services, technologies, experiences, testimonials, projects }
