import React from 'react'
import { useFetch } from '../hooks/useFetch'
import {useParams} from 'react-router-dom'

const Userprofile = () => {

  const {id} = useParams()

  const url = `http://localhost:3000/Users/`

  const {data:user,loading,error} = useFetch(url + id)
  console.log(user)

  return (
    <div className='page_section'>
       {loading && <p>Carregando</p>}
       {error && <p>Nenhum dado</p>}
       {user}
    </div>
  )
}

export default Userprofile