import { useState } from 'react'

import { BrowserRouter, Routes, Route, Link}  from "react-router-dom";

import { HookUseContext } from './Components/HookuseContext';

import Home from './pages/Home'
import About from './pages/About'


import './App.css'

function App() {
  

  return (
    <>
    <HookUseContext>
    <BrowserRouter>
    <h1>React Hooks</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
    </HookUseContext>
    </>
  )
}

export default App
