import { useState, useEffect } from 'react'
import './App.css'

const url = "http://localhost:3000/filmes"

function App() {

  const [film, setFilme] = useState([])

  useEffect(()=>{

     async function fetchData(){
      const res = await fetch(url)
      const data = await res.json()

        setFilme(data)
    } 
    fetchData()
  },[])

  console.log(film)

  return (
    <>
    <header>
      <span>MYFILMS</span>
      <ul>
        <li>Inicio</li>
        <li>Categorias</li>
      </ul>
      <button>Cadastrar</button>
    </header>

    <main>
      {film.map((f)=>(
        <div className='film'>
          <h1 key={f.id} className='title'>{f.title}</h1>
          <div className="img"><img src="https://www.filmproposals.com/image-files/independent-film-companies.jpg" alt="" /></div>
          <p className='description'>{f.description}</p>
          <span className='category'>Categoria: {f.category}</span>
          <p>Ano: {f.ano}</p>
          <p>{f.minutes} minutos</p>
        </div>
      ))}
    </main>
     
    </>
  )
}

export default App
