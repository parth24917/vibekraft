import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from './components/Herosection/Hero';
import Service from './components/Services/Services';
import Choose from './components/Whychooseus/Choose';
import Process from './components/Process/Process';
import Faq from './components/FAQ/Faq';
import Contact from './components/ContactUs/Contact';
import Footer from './components/Footer/Footer';
import Project from './components/Projects/Projects';

function App() {
  

  return (
    <Router>
      <Navbar></Navbar>
      <Hero></Hero>
      <Service/>
      <Choose/>
      <Process/>
      <Project/>
      <Faq/>
      <Contact/>
      <Footer/>

    </Router>
 
 
  )
}

export default App
