import './App.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Header from './Components/Header'
import Navbar from './Components/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
    <>
     <Header/>
     <BrowserRouter>
     <Navbar/>
      <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/about" element={ <About/>}/>
      <Route path="/contact" element={ <Contact/>}/>

      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
