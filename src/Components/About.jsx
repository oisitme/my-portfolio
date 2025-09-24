import React from "react"
import { motion,easeInOut} from "framer-motion"

const About = ()=>{
        
    return(
<div id="about" className="bg-black">


    <h1 className="text-4xl md:text-6xl text-white font-bold text-center translate-y-12">About Me</h1>
    {/* container starts from here */}
    <motion.div className="flex flex-col justify-center items-center md:flex-row gap-4 translate-y-10"
    initial={{y:200, opacity:0}}
whileInView={{y:0,opacity:1}}
transition={{duration:0.8,ease:'easeIn'}}
viewport={{once:true}}
    >
    <img src="/assets/me6.jpg" alt="myPhoto"
    className="w-1/2 h-1/2 md:w-44 md:h-44 rounded-[50%] md:rounded-4xl mt-5 mx-auto md:mx-6" />
     <div className="p-8 md:mt-6"> {/* paragraph container starts from here */}
    <p className="text-white text-3xl md:text-4xl text-justify">
 Hi, I’m <span className="font-semibold text-[#f222e1]">Raushan Kumar</span>, a{" "}
            <span className="font-semibold text-[#f222e1]">Web Developer</span> and programmer.           
    </p>
    <div className="text-white max-h-28 md:max-h-full overflow-y-auto p-2 text-base mt-4 scale-95 md:scale-100 text-justify border border-white/20 md:mt-5">
    <p>
         Hi, I’m Raushan Kumar, a passionate Web Developer with strong 
         knowledge in front-end development and currently exploring back-end technologies 
         like Node.js and MongoDB. I started my coding journey with C,
          moved on to Python for problem-solving and scripting, and now focus on JavaScript
           and React to build modern, dynamic web applications. 
           I enjoy creating responsive, user-friendly interfaces and writing clean, efficient code.
    </p>
    </div>
    </div>   
    </motion.div>

    
</div>

    )
}
export default About