import { useState, useEffect} from 'react'

import './App.css'

const url = 'http://localhost:3000/filme'

function App() {

  const [person,Setperson] = useState([])

  const [name,Setname] = useState('')
  const [idade,Setidade] = useState('')
  const [profissao,Setprofissao] = useState('')

  
  useEffect(()=>{
  
    async function personFetch(){
  
      const res = await fetch(url)
      const data = await res.json()
  
      Setperson(data)
  
    }
    personFetch()

  },[])

  const handleSubmit = async (e) =>{
    e.preventDefault()

    const cadastroPeople = {
      name,
      idade,
      profissao
    }

    const res = await fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(cadastroPeople)
    })

    const addPeople = await res.json()
    Setperson((prevperson)=>[...person,addPeople])

    Setname('')
    Setidade('')
    Setprofissao('')
  }


  
  console.log(person)
  
  

  return (
    <>
      <main>
        <div className='showcase'>
          {person ? person.map((p)=>(
            <div key={p.id} className='card'>
              <div>
                <p>Nome {p.name}</p>
                <p>Idade {p.idade}</p>
              </div>
              <div>
                <p>Profissão</p>
                <p>{p.profissao}</p>
              </div>
            </div>
          )):(<div>Loading</div>)}
        </div>
        
        <div className='form'>

          <form onSubmit={handleSubmit}>

              <div>
                <label htmlFor="name">Nome </label>
                <input type="text" name="name" id="name" value={name} onChange={(e)=>Setname(e.target.value)}/>
              </div>

              <div>
                <label htmlFor="idade">Idade </label>
                <input type="text" name="idade" id="idade" value={idade} onChange={(e)=>Setidade(e.target.value)}/>
              </div>

              <div>
                <label htmlFor="profissão">Profissão </label>
                <input type="text" name='profissão' id='profissão' value={profissao} onChange={(e)=>Setprofissao(e.target.value)}/>
              </div>

              <div><input type="submit" value="Enviar" /></div>
              
          </form>

        </div>
      
      </main>
      
    </>
  )
}

export default App
