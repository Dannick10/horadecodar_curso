import './App.css'

import {useState,useEffect} from 'react'

const url = "http://localhost:3000/products"

function App() {

  const [produtos,setProdutos] = useState([])

  useEffect(()=>{
    
    async function fetchData(){
      const res = await fetch(url)
      const data = await res.json()

      setProdutos(data)
    }

    fetchData()
  },[])

  

  

  return (
    <>
      <div className="app">
        <h1>Lista de produtos</h1>
        <div className="produtos">
          {produtos.map((p)=>(
            <ul className='pr'>
            <li key={p.id}>Produtos:{p.name}</li>
            <li>Preço: {p.price}</li>
            </ul>
          ))}
        </div>
      </div>
    </>
  )
}

export default App
