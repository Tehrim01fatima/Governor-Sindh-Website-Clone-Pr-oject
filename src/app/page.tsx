import React from 'react'
import NavBar from './Components/NavBar'
import Hero from './Components/Hero'
import About from './Components/About'
import Slider from './Components/Slider'
import Courses from './Components/Courses'
import Advanced from './Components/Advanced'
import Footer from './Components/Footer'
const page=() => {
  return (
    <>
      <NavBar />
      <Hero />
      <About />
      <Slider />
      <Courses />
      <Advanced />
    <Footer/>
   
 </>
  )
}

export default page