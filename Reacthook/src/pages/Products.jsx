import React from 'react'
import { useParams } from "react-router-dom"
import { Link } from 'react-router-dom'

const Products = () => {

    const {id} = useParams()

  return (
    <>
    <p>kk</p>
    <p>ID DO PRODUTO: {id}</p>
    <Link to={`/products/${id}/info`}>Mais informações</Link>
    </>
  )
}

export default Products