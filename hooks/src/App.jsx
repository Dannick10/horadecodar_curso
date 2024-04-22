import { useState } from 'react'

import { BrowserRouter, Routes, Route, Link} from 'react-dom'

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
        <Link to="/about">About</Link>
      </li>
    </ul>
      <Routes>
       <route path="/" elment={<Home/>}/>
       <route path="/about" elment={<About/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
