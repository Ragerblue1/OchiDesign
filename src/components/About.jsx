// import React from 'react'

const About = () => {
  return (
    <div className='w-full p-20 bg-[#CDEA68]  rounded-tl-3xl rounded-tr-3xl text-black text-[4.5vw] tracking-tight leading-[4vw] font-bold'>
        <h1>Ochi is a strategic presentation agency for forward-
            thinking businesses that need to raise funds, sell 
            products, explain complex ideas, and hire great peeole.</h1>
            <div className="w-full flex gap-10 border-t-[1px] pt-10 border-[#a1b562] mt-20">
                <div className="w-1/2 ">
                    <h1 className="text-7xl font-medium">Our Approach:</h1>
                    <button className="px-8  uppercase flex gap-10 items-center py-6 bg-zinc-900 mt-10 rounded-full  text-white text-xl font-normal">Read More
                    <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
                    </button>
                    
                </div>
               <div className="w-1/2 h-[70vh] rounded-md bg-red-600">

               </div>
            </div>
    </div>
  )
}

export default About