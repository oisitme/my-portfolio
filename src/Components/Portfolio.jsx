
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { motion } from 'framer-motion';

 
const Portfolio = ()=>{

    return(
        <>
        <h1 className="text-4xl md:text-6xl text-center text-white font-bold mt-18 md:mt-20">Portfolio</h1>
        <div id="portfolio" className='flex  flex-col md:flex-row gap-6 px-5 mt-7 '>
            {/* First project - glassmorphism card */}
            <motion.div
                className="relative flex flex-col items-center bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-0 overflow-hidden border border-white/10 w-full md:w-1/2 transition-all duration-300"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 40px 0 #00f0ff44', borderColor: '#00f0ff' }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
            >
                <img src='/assets/fl.jpg' className='w-full h-48 object-cover rounded-t-3xl' alt="Our Blooms project" />
                <div className="w-full flex flex-col items-center px-6 pb-6 pt-4">
                    <div className="mb-4 mt-2 bg-[#140F20] px-6 py-2 rounded-2xl shadow-lg border-2 border-[#00f0ff] text-white text-lg font-bold tracking-wide">
                        Our Blooms
                    </div>
                    <p className="text-gray-200 text-center text-sm mb-4">
                        A React-powered flower business website that blends clean design with smooth user experience, 
                        crafted to represent a startup’s digital presence.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a
                            href="https://our-blooms.vercel.app/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#0ff] text-[#140F20] font-semibold shadow hover:from-[#0ff] hover:to-[#00f0ff] transition"
                        >
                            <FiExternalLink size={20} />
                            Demo
                        </a>
                        <a
                            href="https://github.com/oisitme/OurBlooms"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[#23272f] text-white font-semibold shadow hover:bg-[#333] transition"
                        >
                            <FaGithub size={20} />
                            Github
                        </a>
                    </div>
                </div>
            </motion.div>
            {/* Second project - Resume Builder glassmorphism card */}
            <motion.div
                className="relative flex flex-col items-center bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-0 overflow-hidden border border-white/10 w-full md:w-1/2 transition-all duration-300"
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.04, boxShadow: '0 8px 40px 0 #00f0ff44', borderColor: '#00f0ff' }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, ease: 'easeOut', delay: 0.2 }}
            >
                <img src='/assets/resumeBuilder.png' className='w-full h-48 object-cover rounded-t-3xl' alt="Resume Builder project" />
                <div className="w-full flex flex-col items-center px-6 pb-6 pt-4">
                    <div className="mb-4 mt-2 bg-[#140F20] px-6 py-2 rounded-2xl shadow-lg border-2 border-[#00f0ff] text-white text-lg font-bold tracking-wide">
                        Resume Builder
                    </div>
                    <p className="text-gray-200 text-center text-sm mb-4">
                        A modern resume builder app that lets users create, preview, and download professional resumes instantly. Features live preview, multiple templates, and PDF export.
                    </p>
                    <div className="flex gap-4 mt-2">
                        <a
                            href="https://oisitme.github.io/ResumeBuilder/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-[#00f0ff] to-[#0ff] text-[#140F20] font-semibold shadow hover:from-[#0ff] hover:to-[#00f0ff] transition"
                        >
                            <FiExternalLink size={20} />
                            Demo
                        </a>
                        <a
                            href="https://github.com/oisitme/ResumeBuilder"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-[#23272f] text-white font-semibold shadow hover:bg-[#333] transition"
                        >
                            <FaGithub size={20} />
                            Github
                        </a>
                    </div>
                </div>
            </motion.div>
        </div>
        </>

    )
}
export default Portfolio