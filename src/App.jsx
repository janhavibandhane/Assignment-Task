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
    </>
  )
}

export default App
