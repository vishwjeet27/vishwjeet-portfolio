import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Education></Education>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;
