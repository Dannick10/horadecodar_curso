import React from 'react'

const PostDetail = ({post}) => {
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
        <link to={`/posts/${post.id}`} className='btn btn-outline'>Ler</link>
    </div>
  )
}

export default PostDetail