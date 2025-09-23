import React from 'react'
import { motion, useAnimation } from 'framer-motion';

const Skills=()=>{

    // List of skills and their SVG filenames
    const skills = [
        { name: 'HTML', icon: '/assets/html.svg' },
        { name: 'CSS', icon: '/assets/css.svg' },
        { name: 'JavaScript', icon: '/assets/js.svg' },
        { name: 'Node.js', icon: '/assets/node.svg' },
        { name: 'Python', icon: '/assets/python.svg' },
        { name: 'C', icon: '/assets/c.svg' },
        { name: 'SQL', icon: '/assets/sql.svg' },
        { name: 'Git', icon: '/assets/git.svg' },
        { name: 'React', icon: '/assets/React.svg' },
    ];

    // Duplicate the skills array for seamless looping
    const marqueeSkills = [...skills, ...skills];

    // Marquee width in px (estimate: 120px per skill * skills.length)
    const skillWidth = 120;
    const totalWidth = skillWidth * skills.length;

    return (
        <>
        
        <div id='skills' className="w-full overflow-hidden py-8 bg-transparent ">
            <h2 className="text-3xl md:text-6xl font-bold text-center text-white mb-3">
                My Skills
            </h2>
            <div className="relative w-full h-28 select-none mt-8">
                <motion.div
                    className="flex items-center gap-14 "
                    style={{ width: totalWidth * 2 }}
                    animate={{ x: [0, -totalWidth] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: 'loop',
                        duration: 18,
                        ease: 'linear',
                    }}
                >
                    {marqueeSkills.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            className="flex flex-col items-center min-w-[150px] border border-white/20 rounded-4xl py-2 bg-black/20 transition-all"
                            whileHover={{
                                scale: 1.13,
                                boxShadow: '0 4px 32px #00f0ff77',
                                borderColor: '#00f0ff',
                                backgroundColor: 'rgba(0,240,255,0.08)'
                            }}
                            transition={{ type: 'spring', stiffness: 300, damping: 18 }}
                        >
                            <img src={skill.icon} alt={skill.name} className="w-20 h-20 md:w-24 md:h-24 object-contain" />
                            <span className="text-white text-sm md:text-sm mt-2">{skill.name}</span>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        
        </div>
        
        </>
    );
}
export default Skills