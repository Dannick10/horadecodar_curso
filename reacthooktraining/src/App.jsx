import './App.css'

import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'

import Header from './Components/Header'
import Navbar from './Components/Navbar'
import SearchForms from './Components/SearchForms'

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Userprofile from './pages/Userprofile'
import NotFound from './pages/NotFound'
import Search from './pages/Search'

function App() {

  return (
    <>
     <Header/>
     <BrowserRouter>
     <Navbar/>
      <SearchForms/>
      <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/about" element={ <About/>}/>
      <Route path="/contact" element={ <Contact/>}/>
      <Route path="/userprofile/:id" element={<Userprofile />}/> 
      <Route path="/search" element={<Search/>}/>
      <Route path="/company" element={<Navigate to="/about"/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
