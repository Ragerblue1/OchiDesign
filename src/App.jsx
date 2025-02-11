// import React from 'react'
import NavBar from './components/NavBar'
import LandingPage from './components/LandingPage'
import Marqiue from './components/Marqiue'
import About from './components/About'
import Eyes from './components/Eyes'
import Featured from './components/Featured'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';

const App = () => {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className='w-full min-h-screen  text-white bg-zinc-900'>
      <NavBar/>
      <LandingPage/>
      <Marqiue/>
      <About/>
      <Eyes/>
      <Featured/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App