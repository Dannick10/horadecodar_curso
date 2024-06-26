import React from 'react'
import styles from './PostDetails.module.css'
 
import { Navigate, Link } from 'react-router-dom'


const PostDetails = ({post}) => {
  return (
    <div className={styles.post_detail}>
    <img src={post.image} alt={post.title}/>
    <h2>{post.title}</h2>
    <p  className={styles.createdby}>{post.createdBy}</p>
    <p>{post.body}</p>
    <div className={styles.tags}>
        {post.tagArray.map((tag)=>(
            <p key={tag}><span>#</span>{tag}</p>
        ))}
    </div>
    <Link to={`/posts/${post.id}`} className='btn btn-outline'>Ler</Link>
</div>
  )
}

export default PostDetails