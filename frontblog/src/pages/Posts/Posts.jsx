import React from 'react'
import styles from './Posts.module.css'

import {useParams} from 'react-router-dom'
import {useFetchDocument} from '../../hooks/useFetchDocument'

const Posts = () => {

    const { id } = useParams()
    const {document: post,loading} = useFetchDocument('posts', id)
  return (
    <div className={styles.post_container}>
        <h1>Post {id}</h1>
        {loading && <p>Carregando</p>}
        {post && (
          <>
          <h1>{post.title}</h1>
          <img src={post.image} alt={post.title} />
          <p>{post.body}</p>
          <h3>Este post trata sobre:</h3>
          {post.tagArray.map((tag)=>(
            <p key={tag}>#<span>{tag}</span></p>
          ))}
          </>
        )}
    </div>
  )
}

export default Posts