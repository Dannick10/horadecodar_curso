import { useState, useEffect } from 'react'
import './App.css'

const url = "http://localhost:3000/filmes"

function App() {

  const [film, setFilme] = useState([])
  
  const [title,setTitle] = useState()
  const [description, setDescription] = useState()
  const [img,setImg] = useState()
  const [category,setCategory] = useState()
  const [minutes,setMinutes] = useState()
  const [ano,setAno] = useState()
  const [link,setLink] = useState()

  useEffect(()=>{


     async function fetchData(){
      const res = await fetch(url)
      const data = await res.json()

        setFilme(data)
    } 
    fetchData()
  },[])

  const handleSubmit = async (e) => {

    const addFilme = {
      title,
      img,
      description,
      category,
      minutes,
      ano,
      link
    }

    const res = await fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(addFilme) 
    })
  }

  console.log(film)

  return (
    <>
    <header>
      <span>Danyflix</span>
      <ul>
        <li>Inicio</li>
        <li>Categorias</li>
      </ul>
      <button>Cadastrar</button>
    </header>

    <main>
      <div className="addFilms">
        <form onSubmit={handleSubmit}>
       
            <div>
              <label>title
                 <input type="text" name='title' value={title} onChange={(e)=> setTitle(e.target.value)} />
                 </label>
              <label>Imagem
                 <input type="text" name='img' value={img} onChange={(e)=> setImg(e.target.value)} />
                 </label>
              <label>description
                 <input type="text" name='description' value={description} onChange={(e)=> setDescription(e.target.value)} />
                 </label>
            </div>

            <div>
              <label>category
                <input type="text" name='category' value={category} onChange={(e)=> setCategory(e.target.value)} />
                </label>
              <label>minutes
                <input type="text" name='minutes' value={minutes} onChange={(e)=> setMinutes(e.target.value)} />
                </label>
              <label>ano
                <input type="text" name='ano' value={ano} onChange={(e)=> setAno(e.target.value)} />
                </label>
            </div>
        

          <label>link 
            <input type="text" name='link' value={link} onChange={(e)=> setLink(e.target.value)} />
            </label>

            <input className='sub' type="submit" value="Criar filme" />
        </form>
      </div>

      {film.map((f)=>(
        <div className='film' style={{background:`url(${f.img})`, backgroundSize: 'cover', backgroundColor: "rgba(0,0,0,0.8)", backgroundBlendMode:"color"}}>
          <h1 key={f.id} className='title'>{f.title}</h1>
          <div className="img"><img src={f.img} alt="" /></div>
          <p className='description'>{f.description}</p>
          <span className='category'>Categoria: {f.category}</span>
          <p>Ano: {f.ano}</p>
          <p>{f.minutes} minutos</p>
          <a href={f.link}><button>Assistir</button></a>
        </div>
      ))}
    </main>
     
    </>
  )
}

export default App
