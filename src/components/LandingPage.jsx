// import React from 'react'
import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";
const LandingPage = () => {
    
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
        <div className="textStructure mt-60 px-20">
            <div className="masker ">
                <h1 className='uppercase font-["Founder_Grotesk"] leading-[5vw] text-8xl 
                tracking-tighter font-medium'>WE Create</h1>
            </div>
            <div className="masker ">
            
                <h1 className='uppercase font-["Founder_Grotesk"] leading-[3.2vw] text-8xl 
                tracking-tighter font-medium  flex gap-2'>{
                    <motion.div initial={{width:0}} 
                                animate={{width:"5vw"}} 
                                transition={{ease:[0.83, 0, 0.17, 1],duration:1}} 
                                d
                                className='h-[3.5vw] w-[5vw] bg-red-500 rounded-md '></motion.div>
                }Eye Opening</h1>
            </div>
            <div className="masker ">
                <h1 className='uppercase font-["Founder_Grotesk"] leading-[5vw] text-8xl 
                tracking-tighter font-medium'>Presentations</h1>
            </div>
        </div>
        <div className='border-t-[1px] bg-zinc-850 mt-80 flex justify-between items-center py-5 px-20'>
            {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
                <p key={index} className='text-xl font-light traking-tight leading-none'>{item}</p>
            ))}
            <div className='start flex items-center gap-2'>
                <div className='px-4 py-2 rounded-full border-[1px] border-zinc-400 font-lighter text-lg uppercase'>start the project</div>
                <div className='w-10 h-10 rounded-full border-[1px] border-zinc-400 flex items-center  justify-center'>
                    <span className='rotate-[45deg]'>
                    <FaArrowUpLong/>
                    </span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default LandingPage