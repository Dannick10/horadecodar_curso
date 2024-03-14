import React from 'react'
import { useSearchParams,Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

const Search = () => {
    const [searchParams] = useSearchParams()
    const url = "http://localhost:3000/Users?" + searchParams

    const {data:user,loading,error} = useFetch(url)
    console.log(user)

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

export default Search