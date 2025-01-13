import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './Components/HomePage/Nav'
import Hero from './Components/HomePage/Hero'
import Benefits from './Components/HomePage/Benefits'
import Advantages from './Components/HomePage/Advantages'
import Features from './Components/HomePage/Features'
import Video from './Components/HomePage/Video'
import Testimonial from './Components/HomePage/Testimonial'
import PinkBar from './Components/HomePage/PinkBar'
import Pricing from './Components/HomePage/Pricing'
import Footer from './Components/HomePage/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Nav></Nav> 
       <Hero></Hero>
       <Benefits></Benefits>
       <Advantages></Advantages>
       <Features></Features>
       <Video></Video>
       <Testimonial></Testimonial>
       <PinkBar></PinkBar>
       <Pricing></Pricing>
       <Footer></Footer>
    </>
  )
}

export default App
