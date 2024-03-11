import React from 'react'
import { useParams } from "react-router-dom"

const Products = () => {

    const {id} = useParams()

  return (
    <>
    <p>kk</p>
    <p>ID DO PRODUTO: {id}</p>
    </>
  )
}

export default Products