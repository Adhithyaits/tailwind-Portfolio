import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Resume } from './Compontent/Resume'
import { About } from './Compontent/About'
import { Header } from './Compontent/Header'
import { Contact } from './Compontent/Contact'
import { Footer } from './Compontent/Footer'
import { Projects } from './Compontent/Projects'
import { Hero } from './Compontent/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
    <About />
    <Projects/>
    <Resume />
    <Contact />
    <Footer/>
    </>
  )
}

export default App
