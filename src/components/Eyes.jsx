import  { useEffect,useState } from 'react'
const Eyes = () => {
const [rotate, setRotate] = useState(0);
useEffect(()=>{
    window.addEventListener("mousemove",(e)=>{
         let mouseX=e.clientX
         let mouseY=e.clientY;
         let differenceX=mouseX-window.innerWidth/2;
         let differenceY=mouseY-window.innerHeight/2;

         var angle=Math.atan2(differenceY, differenceX)* (180/Math.PI);
         setRotate(angle-180);
    })
})
  return (
    <div className='eyes w-full h-screen overflow-hidden'>
        <div data-scroll data-scroll-speed="-.7" className='w-full relative  h-full bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")] bg-cover bg-center'>
          <div className='absolute flex gap-20  top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] '>
  <div className=' flex items-center  justify-center w-[12vw] h-[12vw] rounded-full bg-zinc-100'>
    <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full '>
        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-10 w-full '>
            <div className='w-10 h-10 rounded-full bg-zinc-100 '></div>
        </div>
        
    </div>
  </div>
  <div className='flex items-center  justify-center w-[12vw] h-[12vw] rounded-full bg-zinc-100'>
  <div className='relative w-2/3 h-2/3 bg-zinc-900 rounded-full '>
  <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] h-10 w-full '>
            <div className='w-10 h-10 rounded-full bg-zinc-100 '></div>
        </div>
    </div>
  </div>
          </div>
        </div>
    </div>
  )
}

export default Eyes