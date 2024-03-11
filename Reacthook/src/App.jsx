import './App.css'

// 1 config react browser
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//pages
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'

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
        <Route path="/products/:id" element={Products}/> 
        </Routes>      
      </BrowserRouter> 
    </>
  )
}

export default App
