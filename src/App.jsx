import React from 'react'
import Navbar from './Componants/Navbar/Navbar.jsx'
import Hero from './Componants/Hero/Hero.jsx'
import Footer from './Componants/Footer/Footer.jsx'
import Projects from './Componants/Projects/Projects.jsx'
import Next from './Componants/Next/Next.jsx'


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Next />
      <Projects />
      <Footer />
    </div>
  )
}

export default App