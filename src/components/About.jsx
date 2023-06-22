import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }) => (
    <Tilt className="xs:w-[250px] w-full">
        <motion.div
            variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
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
)

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>

            <motion.p
                variants={(fadeIn('', '', 0.1), 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
                I'm a seasoned frontend developer with a passion for coding and
                user interfaces. My core competencies lie in leveraging
                cutting-edge technologies such as React, Next.js, TypeScript,
                React Native, Node.js, MongoDB, etc. I also have extensive
                experience working with UI-focused tools like Tailwind and SASS.
                In a past life, I worked at a US-based company, developing
                innovative shoppable video experiences for Shopify customers.
                Today, I'm honing my skills at a UK organization, building a
                transformative extension that leverages the power of AI to
                autofill job applications, making the hiring process more
                seamless for users. My passion for web development extends
                beyond my day-to-day work. I enjoy keeping up with the latest
                industry trends and tools, which helps me bring a fresh and
                innovative approach to the projects I undertake. I'm constantly
                seeking opportunities to learn and grow, with a relentless drive
                to create impactful, efficient, and user-friendly digital
                solutions.
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard
                        key={service.title}
                        index={index}
                        {...service}
                    />
                ))}
            </div>
        </>
    )
}

export default SectionWrapper(About, 'about')
