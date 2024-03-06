import './App.css'

import {useState,useEffect} from 'react'

import { useFetch } from './hooks/useFetch'

const url = "http://localhost:3000/products"

function App() {

  const [produtos,setProdutos] = useState([])

  const [name,setName] = useState()
  const [price,setPrice] = useState()

  //4 custom hook

      const {data:items, httpConfig, loading} = useFetch(url)
      console.log(items)
  /*
  useEffect(()=>{
    
    async function fetchData(){
      const res = await fetch(url)
      const data = await res.json()

      setProdutos(data)
    }

    fetchData()
  },[])
*/

  const handleSubmit = async(e)=>{
    e.preventDefault()

    const productset = {
      name,
      price
    }

    const res = await fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(productset)
    })

    // carregamento dinamico0
    const addProduct = productset
    setProdutos((prevproductset)=> [...prevproductset,addProduct])

    setName("")
    setPrice("")
  }

  
  return (
    <>
      <div className="app">
        <h1>Lista de produtos</h1>
        {loading && <p>Loading</p>}
        {!loading && (
        <div className="produtos">
          {items && items.map((p)=>(
            <ul className='pr'>
            <li key={p.id}>Produtos:{p.name}</li>
            <li>Preço: {p.price}</li>
            </ul>
          ))}
        </div>
        )}

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
