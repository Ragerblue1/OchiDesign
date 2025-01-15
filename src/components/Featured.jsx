// import React from 'react'

import { motion } from "framer-motion"

const Featured = () => {
    
  return (
    <div className='w-full py-20 '>
        <div className='w-full px-20'>
            <h1 className='text-8xl tracking-tight border-b-2 border-zinc-600 pb-20 '>
                Featured Projects
            </h1>
           
        </div>
        <div className='px-20'>
            <div className="cards flex w-full  gap-10 mt-10">
               
                <div className="card-container relative w-1/2  h-[70vh]  ">
                <h1 className='absolute left-full  z-[2] text-6xl -translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68]'>   <h1 className='absolute right-full  z-[2] text-6xl translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68]'>{
                        "FYDE".split('').map((item,index)=><span >
                            {item}
                        </span>)
                    }</h1></h1>
                    <div className='w-full  rounded-xl h-full overflow-hidden'>
                       <img className="w-full h-full bg-cover"
                       src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
                    </div>
                </div>
                <div className="card-container relative w-1/2  h-[70vh] ">
                    <div className='w-full  rounded-xl h-full overflow-hidden '>
                    <h1 className='absolute flex overflow-hidden right-full  z-[2] text-6xl translate-x-1/2 top-1/2 -translate-y-1/2 text-[#CDEA68]'>{
                        "VISE".split('').map((item,index)=><motion.span   initial={{y:"100%"}} key={index}>
                            {item}
                        </motion.span>)
                    }</h1>
                    <img className="w-full h-full bg-cover"
                       src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
       
    </div>
  )
}

export default Featured