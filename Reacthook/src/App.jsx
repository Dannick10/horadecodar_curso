import './App.css'

// 1 config react browser
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Info from './pages/Info'
import NotFound from './pages/NotFound'

//components
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/products/:id" element={<Products />}/> 
        <Route path="/products/:id/info" element={<Info/>}/>
        <Route path="*" element={<NotFound/>}/>
        </Routes>      
      </BrowserRouter> 
    </>
  )
}

export default App
