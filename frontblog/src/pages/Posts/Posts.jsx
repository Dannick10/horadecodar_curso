import React from 'react'

import {useParams} from 'react-router-dom'


const Posts = () => {

    const { id } = useParams()

  return (
    <div>
        <h1>Post {id}</h1>
    </div>
  )
}

export default Posts