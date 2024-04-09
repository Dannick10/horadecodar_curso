import React from 'react'
import { Navigate, Link } from 'react-router-dom'

const PostDetails = ({post}) => {
  return (
    <div>
    <img src={post.image} alt={post.title}/>
    <h2>{post.title}</h2>
    <p>{post.createdBy}</p>
    <div>
        {post.tagArray.map((tag)=>(
            <p key={tag}><span>#</span>{tag}</p>
        ))}
    </div>
    <Link to={`/posts/${post.id}`} className='btn btn-outline'>Ler</Link>
</div>
  )
}

export default PostDetails