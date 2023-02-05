import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';
import Contact from './components/Contact';


const App = () =>{
  return (
    <>
      <Navbar />
      <div className='content'>
        <div className='bg-dark text-white'>
          <Home/>
        </div>
        
        <div className='bg-warning text-black'>
          <About/>
        </div>
        
        <div className='bg-light text-dark'>
          <Project/>
        </div>
        
        <div className='bg-danger text-light'>
          <Contact/>
        </div>

      </div>
    </>
  )
}

export default App;
