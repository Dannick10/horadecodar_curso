import React from 'react'
import { useFetch} from '../hooks/useFetch'
import { Link } from 'react-router-dom'

const Contact = () => {

  const url = "http://localhost:3000/Users"

   const {data:user,loading,error} = useFetch(url)
 

  return (
    <div  className='page_section'>
        <h1>Contatos</h1>
            <div className='contant'>
              {loading && <p>Carregando</p>}
              {error && <p>Não foi possivel processar dados</p>}
              {user && user.map((u)=>(
              <ul key={u.id}>
                <li>Nome {u.name}</li>
                <li>Idade {u.age}</li>
                <li>Carreira {u.career}</li>
                <Link to={`/userprofile/${u.id}`}>Saber Mais</Link>
              </ul>
              ))}
            </div>
    </div>
  )
}

export default Contact