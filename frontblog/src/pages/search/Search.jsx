import React from 'react'
import {Link} from 'react-router-dom'

import styles from './Search.module.css'

import { useFetchDocuments  } from '../../hooks/useFetchDocuments'
import { useQuery  } from '../../hooks/useQuery'
import PostDetails from '../../components/PostDetails'

const Search = () => {

    const query = useQuery()
    const search = query.get('q')

    const {documents: posts} = useFetchDocuments('posts',search)

  return (
    <div className={styles.search}>
        <h1>Search</h1>
      <div>
        {posts && posts.length === 0 && (<p>Post não encontrado</p>)}
        <Link to="" className='btn btn-dark'>Voltar</Link>
        {posts && posts.map((post)=>(<PostDetails key={post.id} post={post}/>))}
      </div>
    </div>
  )
}

export default Search