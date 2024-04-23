import { useState } from 'react'

import { BrowserRouter, Routes, Route, Link}  from "react-router-dom";

import Home from './pages/Home'
import About from './pages/About'


import './App.css'

function App() {
  

  return (
    <>
    <h1>React Hooks</h1>
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Sobre</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
