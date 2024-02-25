import './App.css'

import {useState,useEffect} from 'react'

const url = "http://localhost:3000/products"

function App() {

  const [produtos,setProdutos] = useState([])

  const [name,setName] = useState()
  const [price,setPrice] = useState()

  useEffect(()=>{
    
    async function fetchData(){
      const res = await fetch(url)
      const data = await res.json()

      setProdutos(data)
    }

    fetchData()
  },[])


  const handleSubmit = async(e)=>{


    const productset = {
      name,
      price
    }

    const res = await fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/jason"
      },
      body: JSON.stringify(productset)
    })

  }

  
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

        <div className="addProduct">
            <form onSubmit={handleSubmit}>
              <label>
                Nome
                <input type="text" name="nome" value={name} onChange={(e)=>setName(e.target.value)} />
              </label>
              <label>
                preço
                <input type="number" name="price" value={price} onChange={(e)=>setPrice(e.target.value)} />
              </label>
              <input type="submit" value="Enviar" />
            </form>
        </div>
      </div>
    </>
  )
}

export default App
