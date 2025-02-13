import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'

function App() {

  return (
    <>
     <Navbar></Navbar>
     <Hero></Hero>
     <About></About>
     <Education></Education>
    </>
  )
}

export default App
