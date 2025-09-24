import React from "react";
import { FaBars, FaTimes,FaWhatsapp,FaLinkedin,FaGithub } from "react-icons/fa";
import { useState } from "react"
import { motion,easeInOut} from "framer-motion"
import About from "./About"
import Portfolio from "./Portfolio"
import Skills from "./Skills"
import Contact from "./Contact"



const Front = ()=>{
  const[open,setOpen] = useState(false);
    return(
        <>
        {/* navbar starts here */}
        <div className="min-h-screen bg-[linear-gradient(160deg,#000_61%,rgba(209,213,219,1)_30%)] md:bg-[linear-gradient(100deg,#d1d5db_50%,#000_50%)] relative">
      <motion.div className="flex p-2 px-6 gap-5 justify-between items-center bg-black fixed top-0 left-0 right-0 z-50"
      initial = {{scale:0.5, opacity:0}}
      animate={{scale:1,opacity:1}}
      transition={{duration:0.9,ease:'easeInOut'}}
      >
       <img className="w-16 h-16" src="/assets/logo.png" alt="mylogo" />
       <ul className="hidden md:flex gap-9 text-white px-14 ">
  <li>
     <a href="#about" className="cursor-pointer">About me</a>
  </li>
  <li>
     <a href="#skills" className="cursor-pointer">Skills</a>
  </li>
  <li>
     <a href="#portfolio" className="cursor-pointer">Portfolio</a>
  </li>
  <li>
     <a href="#contact" className="cursor-pointer">Contact me</a>
  </li>
</ul>
<button onClick={() => setOpen(!open)} className="md:hidden text-2xl text-white">
  {open ? <FaTimes /> : <FaBars />}
</button>
{open &&(
  <div className="absolute top-20 right-4 bg-black/10 h-45 text-white border border-white/30 text-center font-semibold text-[20px]  rounded-2xl z-10">
    <div className="flex flex-col gap-3 p-3">
     <a href ="#about" onClick={()=>setOpen(false)}>About </a>
     <a href ="#skills" onClick={()=>setOpen(false)}>Skills</a>
     <a href ="#portfolio" onClick={()=>setOpen(false)}>Portfolio</a>
     <a  href ="#contact" onClick={()=>setOpen(false)}>Contact me </a>
    </div>
  </div>
)}
      </motion.div>
      {/* hero section */}
      <div className=" absolute bottom-32 md:static mt-10">
      <div className="flex flex-col gap-2 md:gap-5 px-6 md:px-12" >
      <motion.h1 className=" text-3xl ml-5 md:ml-0 md:text-3xl md:mt-28 font-bold overflow-hidden whitespace-nowrap"
        initial={{width:0}}
        animate={{width:'100%'}}
        transition={{duration:2,ease:'easeIn',repeat:1}}
      >
        Hi, I am</motion.h1>
      <motion.div className="flex flex-col gap-1 whitespace-nowrap overflow-hidden"
       initial={{width:0}}
       animate={{width:"100%"}}
       transition={{duration:2,ease:'easeIn',delay:0.4,repeat:1}}
      >
      <h1 className=" text-3xl md:text-4xl font-bold ml-4"> Raushan Kumar</h1>
      <p className="text-gray-600 text-sm md:text-[18px] ml-4">Full Stack Developer</p>
      </motion.div>
      </div>
      </div>
      {/* social Links */}
      <div className=" absolute bottom-36 md:static flex flex-col ml-80  gap-7 md:flex-row  md:gap-9 mt-10 md:ml-12">
        {/* whatsapp */}
        <a 
        href="https://wa.me/7065508384"
        target="_blank"
        rel="noopener noreferrer"
        className=" bg-gray-400 p-1.5 w-10 h-10 rounded-md flex justify-center items-center"
        >
          <FaWhatsapp size={35} />
        </a>
        {/* linkedein */}
        <a
        href="https://www.linkedin.com/in/oisitme/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-1.5 bg-gray-400 w-10 h-10 rounded-md flex justify-center items-center"
        >
          <FaLinkedin size={35} />
        </a>
        {/* github */}
        <a
        href="https://github.com/oisitme"
        target="_blank"
        rel="noopener noreferrer"
        className="p-1.5 w-10 h-10 flex bg-gray-400 rounded-md justify-center items-center"
        >
          <FaGithub size={35} />
        </a>
      </div>
      {/* download resume button for mobile screens */}
      <motion.a href ="/assets/MyResume.pdf"
      download="Raushan_kumar_Resume"
      className="inline-block absolute translate-x-28 bottom-15 z-20 scale-90 md:scale-100 md:bottom-44 md:translate-x-10 px-3 py-3 rounded-4xl text-white bg-[#150B9B] font-bold  hover:bg-blue-800 hover:md:scale-105"
      initial={{y:100,opacity:0}}
      animate={{y:0,opacity:1}}
      transition={{duration:1}}

      >
        Download Resume
      </motion.a>
      <motion.div className="flex justify-center md:justify-end -translate-y-40  md:-translate-y-90 h-20 md:h-42 "
       initial={{scale:0.5,opacity:0}}
       animate={{scale:1,opacity:1}}
       transition={{duration:0.7, ease:easeInOut}}
      >
        <img className="w-64 min-h-screen mt-15 md:mt-9 md:mr-42 scale-45 md:scale-82 " src="/assets/me4.jpg" alt="myPhoto"/>
      </motion.div>
      </div>
      <About/>
      <Portfolio/>
      <Skills/>
      <Contact />
      
      
        </>
    )
}
export default Front