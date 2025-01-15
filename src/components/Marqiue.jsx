// import React from 'react'
import { motion } from 'framer-motion'
const Marqiue = () => {
      return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-300  flex whitespace-nowrap'>
<motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity,duration:10,}}  className='text-[14vw] leading-none font-bold uppercase pt-5 pr-10 mb-[4vw]'>We Are Ochi</motion.h1>
<motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity,duration:10,}}  className='text-[14vw] leading-none font-bold uppercase pt-5 pr-10 mb-[4vw]'>We Are Ochi</motion.h1>
<motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity,duration:10,}}  className='text-[14vw] leading-none font-bold uppercase pt-5 pr-10 mb-[4vw]'>We Are Ochi</motion.h1>
        </div>
    </div>
  ) 
}
export default Marqiue