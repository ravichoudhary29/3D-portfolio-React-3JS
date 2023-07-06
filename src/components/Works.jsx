import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { github, build } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link_github,
    build_link,
}) => {
    return (
        <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
                <div className="relative w-full h-[230px]">
                    <img
                        src={image}
                        alt="project_image"
                        className="w-full h-full object-fit rounded-2xl"
                    />
                    <div className="absolute top-2 left-5 flex justify-start m-3 card-img_hover">
                        <div
                            onClick={() =>
                                window.open(source_code_link_github, '_blank')
                            }
                            className="bg-white/50 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer relative shadow-md">
                            <img
                                src={github}
                                alt="source code"
                                className="w-1/2 h-1/2 object-scale-down rounded-full"
                            />
                            <div className="opacity-0 hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-200 ease-in-out bg-black bg-opacity-50 text-white text-xs">
                                Github
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-2 right-5 flex justify-end m-3 card-img_hover">
                        <div
                            onClick={() => window.open(build_link, '_blank')}
                            className="bg-white/50 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer relative shadow-md">
                            <img
                                src={build}
                                alt="build"
                                className="w-1/2 h-1/2 object-contain rounded-full"
                            />
                            <div className="opacity-0 hover:opacity-100 absolute inset-0 flex items-center justify-center transition-opacity duration-200 ease-in-out bg-black bg-opacity-50 text-white text-xs">
                                Build
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px]">{name}</h3>
                    <p className="mt-2 text-secondary text-[14px]">
                        {description}
                    </p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}>
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    )
}

const Works = () => {
    const allCategories = [
        'Featured React/React-Native Projects',
        'Vanilla JS Projects',
        'Top Tech Clones',
        'Other Important Projects',
    ]

    const categoryDescriptions = {
        'Featured React/React-Native Projects':
            'These projects are modern looking with the latest used libraries.',
        'Vanilla JS Projects':
            'These projects are built using Vanilla Javascript.',
        'Top Tech Clones': 'These are clones of popular tech platforms.',
        'Other Important Projects':
            'These are some of my other important projects.',
    }

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={`${styles.sectionSubText} `}>My work</p>
                <h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn('', '', 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
                    Following projects showcases my skills and experience
                    through real-world examples of my work. Each project is
                    briefly described with links to code repositories and live
                    demos in it. It reflects my ability to solve complex
                    problems, work with different technologies, and manage
                    projects effectively.
                </motion.p>
            </div>

            {allCategories.map((category, index) => (
                <div key={category} className="mt-20">
                    <h3 className="text-3xl font-bold text-blue-600">
                        {category}
                    </h3>
                    <p className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
                        {categoryDescriptions[category]}
                    </p>
                    <div className="flex flex-wrap gap-7 mt-5">
                        {projects
                            .filter((project) => project.category === category)
                            .map((project, index) => (
                                <ProjectCard
                                    key={`project-${index}`}
                                    index={index}
                                    {...project}
                                />
                            ))}
                    </div>
                </div>
            ))}
        </>
    )
}

export default SectionWrapper(Works, '')
