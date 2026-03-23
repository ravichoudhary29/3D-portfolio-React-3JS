import { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

import { Hero, Navbar, StarsCanvas } from './components'
import ScrollProgress from './components/ScrollProgress'
import BackToTop from './components/BackToTop'
import Footer from './components/Footer'
import { useTheme } from './context/ThemeContext'
import { logo } from './assets'
import LightParticles from './components/LightParticles'
import SectionDivider from './components/SectionDivider'
import CustomCursor from './components/CustomCursor'

// Lazy load below-fold sections
const About = lazy(() => import('./components/About'))
const Experience = lazy(() => import('./components/Experience'))
const Tech = lazy(() => import('./components/Tech'))
const Works = lazy(() => import('./components/Works'))
const Feedbacks = lazy(() => import('./components/Feedbacks'))
const Contact = lazy(() => import('./components/Contact'))

const SectionFallback = () => (
    <div className="flex justify-center items-center py-20">
        <div className="w-8 h-8 border-2 border-accent/30 border-t-accent rounded-full animate-spin" />
    </div>
)

const SplashScreen = () => (
    <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        className="splash-screen"
    >
        <div className="flex flex-col items-center gap-4">
            <motion.img
                src={logo}
                alt="Logo"
                className="w-20 h-20 rounded-2xl splash-logo"
            />
            <motion.div
                initial={{ width: 0 }}
                animate={{ width: 120 }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="h-[3px] bg-accent rounded-full"
            />
        </div>
    </motion.div>
)

const App = () => {
    const { isDark } = useTheme()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1800)
        return () => clearTimeout(timer)
    }, [])

    return (
        <BrowserRouter>
            <CustomCursor />
            <AnimatePresence mode="wait">
                {loading && <SplashScreen key="splash" />}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: loading ? 0 : 1 }}
                transition={{ duration: 0.5 }}
                className="relative z-0 bg-primary transition-colors duration-300"
                role="main"
            >
                <a href="#about" className="skip-link">Skip to main content</a>
                <ScrollProgress />
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                    <Navbar />
                    <Hero />
                </div>
                <Suspense fallback={<SectionFallback />}>
                    <About />
                </Suspense>
                <SectionDivider />
                <Suspense fallback={<SectionFallback />}>
                    <Experience />
                </Suspense>
                <SectionDivider flip />
                <Suspense fallback={<SectionFallback />}>
                    <Tech />
                </Suspense>
                <SectionDivider />
                <Suspense fallback={<SectionFallback />}>
                    <Works />
                </Suspense>
                <SectionDivider flip />
                <Suspense fallback={<SectionFallback />}>
                    <Feedbacks />
                </Suspense>
                <div className="relative z-0">
                    <Suspense fallback={<SectionFallback />}>
                        <Contact />
                    </Suspense>
                    {isDark ? <StarsCanvas /> : <LightParticles />}
                </div>
                <Footer />
                <BackToTop />
            </motion.div>
        </BrowserRouter>
    )
}

export default App
