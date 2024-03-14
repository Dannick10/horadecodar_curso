import React from 'react'
import {useNavigate} from "react-router-dom"
import { useState } from 'react'

const SearchForm = () => {

    const navigate = useNavigate()
    const [query,SetQuery] = useState()

    const handleSubmit = (e) =>{
        e.preventDefault()

        navigate("/search?q=" + query)
    }

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e)=> SetQuery(e.target.value)} />
        <input type='submit' value='buscar'/>
    </form>
  )
}

export default SearchForm