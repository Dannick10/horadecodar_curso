
import './App.css'

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About/About'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <BrowserRouter>
      <div className='container'>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
        <Footer/>
      </div>
      </BrowserRouter>

    </>
  )
}

export default App
