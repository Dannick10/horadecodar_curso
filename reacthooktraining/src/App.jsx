import './App.css'

import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Header from './Components/Header'
import Navbar from './Components/Navbar'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Userprofile from './pages/Userprofile'

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
      <Route path="/userprofile/:id" element={<Userprofile />}/> 
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
