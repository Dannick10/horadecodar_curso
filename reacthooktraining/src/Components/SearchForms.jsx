import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState } from 'react'


const SearchForms = () => {

  const handleSubmit = (e) =>{
    e.preventDefault()
  
      navigate("/search?q="+ query)
  }

  const navigate = useNavigate()
  const [query,Setquery] = useState()
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input type="text" onChange={(e)=>Setquery(e.target.value)}/>

      </label>

        <input type="submit" value="Enviar" />
    </form>
  )
}

export default SearchForms