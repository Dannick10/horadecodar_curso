import React from 'react'
import styles from './Home.module.css'

import {useNavigate, Link } from 'react-router-dom'
import { useState } from 'react'

const home = () => {

  const [query, setQuery ] = useState('')
  const [posts] = useState([])
  const handleSubmit = (e) =>{
    e.preventDefault()
  }

  return (
    <div className={styles.home}>
      <h1>Veja os nossos posts mais recenters</h1>
      <form className={styles.search_forms} onSubmit={handleSubmit}>
        <input type="text" placeholder='Ou busque por tags...' onChange={(e)=>setQuery(e.target.value)}/>
        <button className='btn btn-dark'>Pesquisar</button>
      </form>
      <div>
        <h1>Posts...</h1>
        {posts && posts.length === 0 &&(
          <div className={StyleSheet.noposts}>
            <p>Não foram encontrados posts</p>
            <link to="/posts/create" className='btn'></link>
          </div>
  
        )}
      </div>
    </div>
  )
}

export default home